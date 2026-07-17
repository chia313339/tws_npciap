// 對話框(modal)鍵盤無障礙:焦點鎖定 + Esc 關閉 + 焦點還原
// 對應 WCAG 2.1.2(無鍵盤陷阱)、2.4.3(焦點順序)、2.4.7(焦點可見)、1.4.13(可關閉)
//
// 對話框開啟時,鍵盤焦點必須留在對話框內:否則 Tab 會跑到被遮住的背景元素,
// 使用者看不到焦點在哪,也無法走到對話框的關閉鍵。

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

// 只取「真正可聚焦」的元素:排除 display:none / visibility:hidden / 尺寸為 0 者
const getFocusable = (container) =>
  Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (el) => el.getClientRects().length > 0 && window.getComputedStyle(el).visibility !== 'hidden'
  )

/**
 * 為對話框加上焦點鎖。
 * @param {HTMLElement} container 對話框元素
 * @param {{ onEscape?: () => void, initialFocus?: HTMLElement | null }} options
 * @returns {() => void} 解除函式:移除監聽並把焦點還給開啟對話框前的元素
 */
export const createFocusTrap = (container, { onEscape, initialFocus } = {}) => {
  // 記住開啟對話框前的焦點,關閉後要還原(WCAG 2.4.3:焦點回到觸發點,操作脈絡不中斷)
  const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      onEscape?.()
      return
    }

    if (event.key !== 'Tab') {
      return
    }

    const focusable = getFocusable(container)
    if (!focusable.length) {
      // 對話框內沒有可聚焦元素時,焦點固定在對話框本身,仍不可跑到背景
      event.preventDefault()
      container.focus()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const active = document.activeElement

    // 焦點已在對話框外(例如背景元素搶走焦點)→ 拉回對話框
    if (!container.contains(active)) {
      event.preventDefault()
      ;(event.shiftKey ? last : first).focus()
      return
    }

    if (event.shiftKey && active === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && active === last) {
      event.preventDefault()
      first.focus()
    }
  }

  // 用 capture 確保早於頁面其他 keydown 處理器,且不受對話框內元素 stopPropagation 影響
  document.addEventListener('keydown', handleKeydown, true)

  const target = initialFocus || getFocusable(container)[0] || container
  target?.focus()

  return () => {
    document.removeEventListener('keydown', handleKeydown, true)
    previouslyFocused?.focus()
  }
}
