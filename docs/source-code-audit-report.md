# 原始碼檢測報告 — 新北產業AI化輔導計畫 主站

## 1. 檢測基本資訊

| 項目 | 內容 |
|------|------|
| 受測標的 | 新北產業AI化輔導計畫 主站(`ntpc-ai.ntpc.gov.tw`) |
| 系統型態 | 純前端單頁應用(Vue 3 + Vite SPA);無後端、無資料庫、無伺服器端邏輯 |
| 檢測範圍 | `src/`(Vue/JS)、`scripts/`(建置腳本)、`index.html` 之原始碼,及 `package-lock.json` 依賴 |
| 不含範圍 | 後端 / `edb.ntpc-ai.ntpc.gov.tw`(他方 睿思)、台智雲反向代理層(另以弱點演練處理) |
| 檢測類型 | SAST(靜態應用程式安全測試)+ SCA(軟體組成分析 / 依賴套件漏洞) |
| 檢測工具 | Semgrep 1.165.0、npm audit(npm 11.6.2)、人工 sink 審查 |
| 規則集 | Semgrep `p/security-audit`、`p/javascript`、`p/secrets`、`p/xss` |
| 參照標準 | OWASP Top 10 (2021)、CWE |
| 檢測日期 | 2026-06-05 |

## 2. 總結(Executive Summary)

> **整體結論:前端原始碼檢測未發現高/中風險弱點。** SAST 掃描 243 個檔案、0 個發現;人工審查確認無 XSS 注入點、無硬編密鑰、無不安全傳輸、無弱亂數、無客戶端敏感資料儲存。SCA(依賴掃描)發現 5 項已知漏洞,**全部屬於「建置/開發期」工具鏈依賴,均未被打包進使用者實際下載的前端程式碼**,對線上網站的可利用風險低。待辦事項為依賴版本更新與少量程式碼整潔(hygiene)項目。

| 風險等級 | SAST | SCA(依賴) |
|---------|:----:|:----------:|
| 高 (High) | 0 | 4(皆建置期,未上線) |
| 中 (Medium) | 0 | 1(建置期) |
| 低 / 提示 (Low/Info) | 3(觀察項,已緩解) | — |

## 3. SAST(靜態程式碼分析)結果

**Semgrep:掃描 243 檔、解析率 ~100%、0 個發現。**

人工 sink 審查(涵蓋 Semgrep 對 `.vue` 模板覆蓋不足的部分)結果:

| 檢查項目 | 結果 |
|---------|------|
| DOM XSS sink(`innerHTML`/`outerHTML`/`document.write`/`eval`/`new Function`/`v-html`) | ✅ 無 |
| 動態 HTML 注入(`Swal.fire({html})`) | ✅ 已緩解(見觀察項 3.1) |
| 硬編密鑰 / token / 密碼 | ✅ 無(命中字串均為方案介紹文案,非憑證) |
| 不安全傳輸(`http://`) | ✅ 無,外部資源皆 `https://` |
| 反向 tabnabbing(`target=_blank` 未配 `rel=noopener`) | ✅ 無,9 處皆有 `rel="noopener noreferrer"` |
| 客戶端敏感儲存(`localStorage`/`sessionStorage`/`cookie`) | ✅ 無(不在前端儲存任何資料) |
| 弱亂數(`Math.random` 用於安全用途) | ✅ 無 |

### 觀察項(Low / Info,不需即時修補)

**3.1 `SolutionCatalogView.vue` 以字串組裝 HTML 餵給 SweetAlert**
方案 modal 以 `Swal.fire({ html: modalHtml })` 呈現。`modalHtml` 由方案資料串接而成,但**所有插值皆經 `escapeHtml()` 函式做輸出編碼**(`&`、`<`、`>`、`"`、`'` 全部轉義),URL 另經 `normalizeExternalUrl()` 正規化。**已具備 XSS 防護,屬低風險。** 建議維持此編碼慣例;若未來改用 Vue 樣板綁定可進一步降低風險。
- `ScheduleView.vue` 的 `Swal.fire({ imageUrl })` 使用靜態打包圖片,非使用者輸入,無風險。

**3.2 死碼(dead code)建議移除**
`src/components/HelloWorld.vue`、`src/components/SiteFooter.vue`、`src/data/solutionsData.js` 未被任何模組引用,不會進入上線 bundle。屬整潔性建議,移除可降低維護面與誤用風險。

## 4. SCA(依賴套件已知漏洞)結果

`npm audit` 發現 5 項(4 高 / 1 中)。**關鍵脈絡:這些全部是建置工具(Vite/Rollup/PostCSS)與建置腳本(xlsx)的依賴,不會被打包進使用者下載的前端 bundle;Vite 相關漏洞僅在開發伺服器(dev server)情境成立,正式環境以 Nginx 提供靜態檔,不受影響。**

| 套件 | 等級 | 弱點 | 性質 / 影響面 | 修補 |
|------|:----:|------|--------------|------|
| `vite` 7.0.0–7.3.1 | 高 | dev server 路徑穿越、`server.fs.deny` 繞過、WebSocket 任意讀檔(GHSA-4w7w-66w2-5vf9 / v2wj-q39q-566r / p9ff-h696-f583) | **僅開發期** dev server;正式環境不執行 vite | `npm audit fix` |
| `rollup` 4.0.0–4.58.0 | 高 | 路徑穿越任意寫檔(GHSA-mw96-cpmx-2vgc) | 建置工具,不進 bundle | `npm audit fix` |
| `postcss` <8.5.10 | 中 | CSS 序列化 XSS(GHSA-qx2v-qp2m-jg93) | 建置工具,不進 bundle | `npm audit fix` |
| `xlsx`(SheetJS)* | 高 | 原型污染 + ReDoS(GHSA-4r6h-8v6p-xvw6 / 5pgg-2g8v-p4x9) | 僅 `scripts/*.mjs` 建置期解析**可信本機** `metadata.xlsx`;不進 bundle | 官方 npm 版**無修補**(見建議) |

## 5. OWASP Top 10 (2021) 對應檢視

| 類別 | 結果 |
|------|------|
| A01 權限控制失效 | 不適用(前端無權限邏輯,路由非安全邊界) |
| A02 加密失效 | 通過(前端不持有密鑰;對外資源強制 HTTPS) |
| A03 注入 | 通過(無 SQL/命令注入面;XSS 輸出點已編碼) |
| A04 不安全設計 | 不適用(純資訊展示) |
| A05 安全設定錯誤 | 另案(Nginx/CSP 由弱點演練與 `docs/csp-allowlist.md` 處理) |
| A06 易受攻擊與過時元件 | **有**(SCA 5 項,皆建置期、未上線,見 §4) |
| A07 識別與驗證失效 | 不適用(前端無認證機制) |
| A08 軟體與資料完整性失效 | 通過(外部 webchat script 已補 SRI,見演練 VULN-011) |
| A09 紀錄與監控失效 | 不適用(前端;已佈署 GA4) |
| A10 SSRF | 不適用(前端無伺服器端請求) |

## 6. 修補建議與優先序

| 優先 | 項目 | 動作 | 風險 |
|:----:|------|------|------|
| P1 | vite / rollup / postcss | 執行 `npm audit fix` 更新至修補版,重新 `npm run build` 並驗證 | 低(建置工具 patch/minor) |
| P2 | xlsx(無修補) | 因僅建置期、讀可信本機檔,風險低,可**記錄並接受**;若需求嚴格,改用維護中的函式庫(如 `exceljs`)重寫 `scripts/*.mjs`,或自官方 SheetJS 來源 pin 版本 | 低 |
| P3 | 死碼移除 | 刪除 `HelloWorld.vue`、`SiteFooter.vue`、`solutionsData.js` | 無 |

## 7. 範圍與限制(免責)

- 本報告涵蓋**前端主站原始碼**;後端 / edb 與基礎設施(反向代理、TLS、防火牆)不在本次 SAST/SCA 範圍。
- SAST 以 Semgrep 自動規則為主、輔以人工 sink 審查涵蓋 `.vue` 樣板;非等同商用工具(如 Checkmarx / Fortify)之完整檢測,如契約要求特定商用工具或第三方公正單位報告,需另行安排。
- SCA 以 npm 公告資料庫(npm audit)為基準,反映報告產出時點之已知漏洞。

## 附錄:重現指令

```bash
# SAST
semgrep --config=p/security-audit --config=p/javascript --config=p/secrets --config=p/xss \
        --metrics=off src scripts index.html
# SCA
npm audit
```
