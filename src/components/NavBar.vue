<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { categoryNavItems } from '../data/catalogData'

const isOpen = ref(false)
const isMobileCategoryOpen = ref(false)
const navRoot = ref(null)
const menuToggle = ref(null)
const route = useRoute()

// 桌機「方案分類」子選單以 CSS :hover / :focus-within 開合。
// 選取子項目後,滑鼠仍懸停在原處(或焦點仍在選單內),CSS 條件持續成立 → 子選單不會收合。
// 這個旗標用來「強制收合」,覆寫 CSS 的開啟條件(WCAG 2.4.3 焦點順序 / 1.4.13 可關閉)。
const isDesktopSubmenuDismissed = ref(false)
// 是否正懸停在下拉區:決定焦點離開時可否解除強制收合(滑鼠還在原處就不能解除,否則 :hover 會讓它立刻重開)
const isDesktopDropdownHovered = ref(false)

const sideLinks = [
  { label: '關於計畫', to: '/about' },
  { label: '計畫時程', to: '/schedule' },
  { label: 'FAQ', to: '/faq' },
]

const categoryLinks = categoryNavItems.map((item) => ({
  label: item.label,
  to: `/categories/${item.slug}`,
}))

const mainLinks = [
  { label: '方案分類', to: '/categories/ai-market-insight', children: categoryLinks },
  { label: 'AI服務供應商', to: '/vendors' },
  { label: '新北經發局', href: 'https://www.economic.ntpc.gov.tw/' },
  { label: '聯絡我們', to: '/contact-us' },
  { label: '即刻申請', to: '/about' },
  { label: '搜尋', to: '/search' },
  { label: '網站導覽', to: '/sitemap' },
]

const mobileLinks = computed(() => [...sideLinks, ...mainLinks])

const isCategoryRoute = computed(() => route.path === '/categories' || route.path.startsWith('/categories/'))

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (!isOpen.value) {
    isMobileCategoryOpen.value = false
  }
}

const toggleMobileCategory = () => {
  isMobileCategoryOpen.value = !isMobileCategoryOpen.value
}

// 導覽後把焦點交給主要內容:避免焦點留在已收合(不可見)的選單連結上(WCAG 2.4.7),
// 並讓螢幕報讀器宣讀新頁面的主要內容區
const focusMainContent = () => {
  nextTick(() => {
    document.getElementById('main-content')?.focus()
  })
}

// 桌機:點選子選單項目後強制收合。同路由(無導覽事件)時也適用
const handleDesktopSubmenuLinkClick = () => {
  isDesktopSubmenuDismissed.value = true
  focusMainContent()
}

const handleDesktopDropdownEnter = () => {
  isDesktopDropdownHovered.value = true
  // 新的一次滑鼠懸停 = 使用者想再開啟,解除強制收合
  isDesktopSubmenuDismissed.value = false
}

const handleDesktopDropdownLeave = () => {
  isDesktopDropdownHovered.value = false
  isDesktopSubmenuDismissed.value = false
}

// 焦點從外部進入下拉區(鍵盤 Tab 到「方案分類」)= 使用者主動要開啟,解除強制收合。
// 少了這段,導覽或按 Esc 之後 dismissed 會一直是 true,
// 鍵盤使用者 Tab 到「方案分類」時子選單不會展開,10 個分類連結整組跳過(WCAG 2.4.3)
const handleDesktopDropdownFocusIn = (event) => {
  const from = event.relatedTarget
  if (from instanceof Node && event.currentTarget.contains(from)) {
    return
  }
  isDesktopSubmenuDismissed.value = false
}

// 焦點離開下拉區時解除強制收合,以便下次聚焦能正常開啟;
// 但滑鼠仍懸停在原處時不可解除,否則 :hover 會立刻把它重新打開
const handleDesktopDropdownFocusOut = (event) => {
  const dropdown = event.currentTarget
  const next = event.relatedTarget
  if (next instanceof Node && dropdown.contains(next)) {
    return
  }
  if (!isDesktopDropdownHovered.value) {
    isDesktopSubmenuDismissed.value = false
  }
}

// 行動版:點選選單內任一連結後,焦點交給主要內容(選單收合後該連結會變成不可見)
const handleMobileLinkClick = () => {
  focusMainContent()
}

const closeMobileMenu = () => {
  isOpen.value = false
  isMobileCategoryOpen.value = false
}

const handleOutsidePointer = (event) => {
  if (!isOpen.value || !navRoot.value) {
    return
  }

  if (event.target instanceof Node && !navRoot.value.contains(event.target)) {
    closeMobileMenu()
  }
}

// WCAG 2.1.2(無鍵盤陷阱)/ 1.4.13(懸停或聚焦產生的內容須可關閉):
// Esc 逐層收合,每收一層就把焦點交還給該層的觸發元件,焦點不會落在已隱藏的元素上
const handleKeydown = (event) => {
  if (event.key !== 'Escape') {
    return
  }

  // 桌機:焦點在「方案分類」下拉區內 → 收合子選單,焦點回到「方案分類」連結
  const dropdown = navRoot.value?.querySelector('.nav-dropdown')
  if (dropdown && dropdown.contains(document.activeElement) && !isDesktopSubmenuDismissed.value) {
    isDesktopSubmenuDismissed.value = true
    dropdown.querySelector('.nav-link--dropdown')?.focus()
    return
  }

  if (!isOpen.value) {
    return
  }

  // 行動版:先收子選單(焦點回到展開鈕),再按一次才收整個選單(焦點回到漢堡鈕)。
  // 用查詢而非 template ref:此按鈕位於 v-for 內,Vue 會把 ref 收集成陣列而非單一元素
  if (isMobileCategoryOpen.value) {
    isMobileCategoryOpen.value = false
    navRoot.value?.querySelector('.mobile-submenu-toggle')?.focus()
    return
  }

  closeMobileMenu()
  menuToggle.value?.focus()
}

// WCAG 2.1.2/2.4.7:焦點離開導覽列即關閉選單,避免鍵盤使用者被困住、
// 或焦點落在被展開選單遮住的內容上。優先用 relatedTarget 同步判斷
// (focusout 當下 activeElement 尚未更新);為 null 時退回 setTimeout
// (不用 requestAnimationFrame:背景/節流分頁不觸發繪製,rAF 可能永不執行)
const handleFocusOut = (event) => {
  if (!isOpen.value || !navRoot.value) {
    return
  }
  const next = event.relatedTarget
  if (next instanceof Node) {
    if (!navRoot.value.contains(next)) {
      closeMobileMenu()
    }
    return
  }
  setTimeout(() => {
    if (isOpen.value && navRoot.value && !navRoot.value.contains(document.activeElement)) {
      closeMobileMenu()
    }
  }, 0)
}

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsidePointer)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleOutsidePointer)
  document.removeEventListener('keydown', handleKeydown)
})

// 桌機子選單的強制收合不放在這裡:router 初始導覽也會觸發本 watcher
// (path 由 '/' 變為實際路由),會讓子選單一載入就處於強制收合狀態。
// 「選取後收合」已由 handleDesktopSubmenuLinkClick 處理,
// 滑鼠移往其他連結則會觸發 mouseleave,兩者已覆蓋所有導覽路徑。
watch(
  () => route.path,
  () => {
    closeMobileMenu()
  }
)
</script>

<template>
  <header ref="navRoot" class="site-nav" @focusout="handleFocusOut">
    <div class="container nav-inner">
      <RouterLink class="brand hover-scale" to="/" aria-label="返回首頁：新北產業 AI 化輔導計畫" title="返回首頁">
        <span class="brand-title">
          <span class="brand-line brand-line--small">新北產業</span>
          <span class="brand-line">AI化輔導計畫</span>
        </span>
      </RouterLink>

      <nav class="nav-links nav-links--desktop" aria-label="主要導覽">
        <template v-for="(link, index) in mainLinks" :key="link.to || link.href">
          <span v-if="index > 0" class="nav-separator">|</span>

          <div
            v-if="link.children"
            class="nav-dropdown"
            :class="{ 'nav-dropdown--dismissed': isDesktopSubmenuDismissed }"
            @mouseenter="handleDesktopDropdownEnter"
            @mouseleave="handleDesktopDropdownLeave"
            @focusin="handleDesktopDropdownFocusIn"
            @focusout="handleDesktopDropdownFocusOut"
          >
            <RouterLink
              class="nav-link nav-link--dropdown hover-scale"
              :class="{ 'router-link-active': isCategoryRoute }"
              :to="link.to"
              :title="link.label"
              @click="handleDesktopSubmenuLinkClick"
            >
              {{ link.label }}
            </RouterLink>
            <div id="desktop-category-submenu" class="nav-submenu" role="group" aria-label="方案分類子選單">
              <RouterLink
                v-for="child in link.children"
                :key="child.to"
                class="nav-submenu-link"
                :to="child.to"
                :title="child.label"
                @click="handleDesktopSubmenuLinkClick"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>

          <a
            v-else-if="link.href"
            class="nav-link hover-scale"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${link.label}（另開新視窗）`"
            :title="`${link.label}（另開新視窗）`"
          >
            {{ link.label }}<span class="external-hint">（另開新視窗）</span>
          </a>

          <RouterLink v-else class="nav-link hover-scale" :to="link.to" :title="link.label">
            {{ link.label }}
          </RouterLink>
        </template>
      </nav>

      <button
        ref="menuToggle"
        class="menu-toggle hover-scale"
        type="button"
        aria-label="切換主要導覽選單"
        title="切換主要導覽選單"
        aria-controls="primary-nav"
        :aria-expanded="isOpen.toString()"
        @click="toggleMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav id="primary-nav" class="nav-links nav-links--mobile" :class="{ open: isOpen }" aria-label="行動版主要導覽">
        <template v-for="link in mobileLinks" :key="link.to || link.href">
          <div v-if="link.children" class="mobile-dropdown">
            <div class="mobile-dropdown-head">
              <RouterLink
                class="nav-link hover-scale"
                :class="{ 'router-link-active': isCategoryRoute }"
                :to="link.to"
                :title="link.label"
                @click="handleMobileLinkClick"
              >
                {{ link.label }}
              </RouterLink>
              <button
                class="mobile-submenu-toggle"
                type="button"
                aria-controls="mobile-category-submenu"
                :aria-expanded="isMobileCategoryOpen.toString()"
                :aria-label="isMobileCategoryOpen ? '收合方案分類子選單' : '展開方案分類子選單'"
                :title="isMobileCategoryOpen ? '收合方案分類子選單' : '展開方案分類子選單'"
                @click="toggleMobileCategory"
              >
                <span class="sr-only">{{ isMobileCategoryOpen ? '收合方案分類子選單' : '展開方案分類子選單' }}</span>
                <i class="fa-solid fa-chevron-down mobile-submenu-caret" :class="{ open: isMobileCategoryOpen }" aria-hidden="true"></i>
              </button>
            </div>
            <div id="mobile-category-submenu" class="mobile-submenu" :class="{ open: isMobileCategoryOpen }">
              <RouterLink
                v-for="child in link.children"
                :key="child.to"
                class="mobile-submenu-link"
                :to="child.to"
                :title="child.label"
                @click="handleMobileLinkClick"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>

          <a
            v-else-if="link.href"
            class="nav-link hover-scale"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${link.label}（另開新視窗）`"
            :title="`${link.label}（另開新視窗）`"
          >
            {{ link.label }}<span class="external-hint">（另開新視窗）</span>
          </a>

          <RouterLink v-else class="nav-link hover-scale" :to="link.to" :title="link.label" @click="handleMobileLinkClick">
            {{ link.label }}
          </RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>
