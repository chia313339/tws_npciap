# CSP 白名單（主站 ntpc-ai.ntpc.gov.tw / Vue SPA）

> 用途：對應資安弱點 **VULN-004**（CSP 從 Report-Only 改為強制）。本清單列出主站前端**實際會載入的外部資源來源**，供台智雲在 openresty 設定強制 CSP 時參考，確保強制後 webchat、GA、Google Fonts 等功能不被擋。
> 來源：由本專案程式碼掃描推導（2026-06-02）。僅含「資源載入」（script/style/font/img/connect/media/frame）；純 `<a href target=_blank>` 連結（如新北經發局、Google Drive 申請表）不受 CSP 管轄，未列入。

## 一、外部來源清單（每筆都對得到程式碼出處）

| 來源 Origin | 用途 | CSP directive | 程式碼出處 |
|---|---|---|---|
| `'self'` | Vite 打包的 JS / CSS / 圖片 / 字型 / 影片 | `default-src` 及各項 | build 產物 |
| `https://www.googletagmanager.com` | GA4 / gtag.js | `script-src`、`img-src`、`connect-src` | index.html:9 |
| `https://www.google-analytics.com`、`https://*.analytics.google.com`、`https://*.google-analytics.com` | GA4 數據回傳 beacon | `connect-src`、`img-src` | GA4（由 gtag 發出） |
| `https://cos.twcc.ai` | webchat SDK（JS）+ webchat 圖示（icon/送出鈕） | `script-src`、`img-src` | index.html:43、`window.WebchatConfig`（assetBaseUrl / chatIconUrl / botIconUrl / sendButtonUrl） |
| `https://edb.ntpc-ai.ntpc.gov.tw` | webchat 對話後端 API（可能含 WebSocket） | `connect-src`（`https:` + `wss:`）、`frame-src`（保險） | `window.WebchatConfig.baseUrl` |
| `https://fonts.googleapis.com` | Google Fonts 樣式表（Noto Sans TC / Montserrat） | `style-src` | src/style.css:1（`@import`） |
| `https://fonts.gstatic.com` | Google Fonts 字型檔（woff2） | `font-src` | 由上述 fonts.googleapis CSS 載入 |

> 註：FontAwesome、Vue、sweetalert2、fuse.js 等皆為 npm 套件打包進 bundle，屬 `'self'`，**不需**外部 CDN。睿思/edb 用的 `cdn.jsdelivr.net`（element-ui）**與主站無關**，主站 CSP 不需要它。

## 二、可直接套用的 CSP（建議值）

nginx / openresty 單行（`add_header`，注意整段用單一字串）：

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://cos.twcc.ai; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob: https://cos.twcc.ai https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://edb.ntpc-ai.ntpc.gov.tw wss://edb.ntpc-ai.ntpc.gov.tw https://www.googletagmanager.com https://www.google-analytics.com https://*.analytics.google.com https://*.google-analytics.com; media-src 'self'; frame-src 'self' https://edb.ntpc-ai.ntpc.gov.tw https://cos.twcc.ai; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests" always;
```

易讀版（同內容，逐行對照）：

```
default-src 'self';
script-src  'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://cos.twcc.ai;
style-src   'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src    'self' data: https://fonts.gstatic.com;
img-src     'self' data: blob: https://cos.twcc.ai https://www.googletagmanager.com https://www.google-analytics.com;
connect-src 'self' https://edb.ntpc-ai.ntpc.gov.tw wss://edb.ntpc-ai.ntpc.gov.tw
            https://www.googletagmanager.com https://www.google-analytics.com
            https://*.analytics.google.com https://*.google-analytics.com;
media-src   'self';
frame-src   'self' https://edb.ntpc-ai.ntpc.gov.tw https://cos.twcc.ai;
object-src  'none';
base-uri    'self';
form-action 'self';
frame-ancestors 'self';
upgrade-insecure-requests;
```

## 三、directive 重點說明

- **`'unsafe-inline'`（script + style）目前為必要**：index.html 內有 inline script（gtag 設定、`window.WebchatConfig`）、Vue 會注入 inline `<style>`、sweetalert2 也動態插樣式。若日後要移除（強化），需改用 nonce/hash，屬較大改動。
- **`'unsafe-eval'`**：沿用現行 Report-Only 既有政策（GTM/部分函式庫可能需要）。可於強制後嘗試移除並回歸測試，若功能正常即可拿掉。
- **`media-src 'self'`**：首頁開場影片 `opening.mp4` 為打包資源。
- **`frame-ancestors 'self'`、`object-src 'none'`、`base-uri 'self'`、`upgrade-insecure-requests`**：基本強化項，降低點擊劫持/注入風險、避免掃描器扣分。

## 四、待確認項（強制前一次驗證即可）

1. **webchat 是否用 iframe**：若 webchat 彈窗以 iframe 載入 edb/cos 內容，已在 `frame-src` 預留 `edb.ntpc-ai.ntpc.gov.tw` 與 `cos.twcc.ai`；若實測不需要可移除。
2. **WebSocket**：webchat 即時對話若走 `wss://`，已在 `connect-src` 納入 `wss://edb.ntpc-ai.ntpc.gov.tw`；若走純 https 輪詢則該項可省。
3. **Google 表單（目前停用）**：OpeningHomeView.vue 內「我是新北市企業 / 其他企業」送 Google Form 的程式碼目前為註解停用；若日後啟用，需在 `connect-src` 與 `form-action` 加入 `https://docs.google.com`。

## 五、強制（enforce）後必測清單（文件 §1）

實際操作一輪、確認 DevTools Console 無 CSP 阻擋紅字：
- [ ] 首頁開場 → 開始探索 → 輪播
- [ ] webchat（右下角小幫手）可開啟、送訊息、圖示正常
- [ ] 各分類頁卡片 modal、圖片放大燈箱
- [ ] AI 服務供應商 modal、官網連結
- [ ] 站內搜尋
- [ ] GA4：即時報表有收到 page_view
- [ ] 中文字型（Noto Sans TC）正常套用

> 驗證指令：`curl -sI https://ntpc-ai.ntpc.gov.tw/ | grep -i content-security` → 應只看到 `content-security-policy:`（**無** `-report-only`）。
