const loadImages = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(([, src]) => src)

const logoImageModules = import.meta.glob('../assets/solutions/logo/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
})

const detailImageModules = import.meta.glob('../assets/solutions/pic/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
})

const logoImages = loadImages(logoImageModules)
const detailImages = loadImages(detailImageModules)

export const tagOptions = [
  '全部',
  'AI市場洞察',
  'AI企業營運管理',
  'AI助理',
  'AI垂直整合方案',
  'AI居家照護',
  'AI創作內容',
  'AI智能客服',
  'AI智慧製造',
  'AI資訊安全',
  'AI營運流程自動化',
]

const categoryOptions = tagOptions.filter((tag) => tag !== '全部')
const totalSolutions = 45
const randomSeed = 20260304

const companyPrefixes = ['智雲', '新創', '遠見', '銳思', '雲策', '宏圖', '禾新', '鼎峰', '宇拓', '睿聯']

const companySuffixes = ['科技', '數據', '雲端', '資訊', '智能', '系統', '創新', '顧問']

const solutionPrefixes = ['Smart', 'Insight', 'Flow', 'Vision', 'Pulse', 'Nova', 'Link', 'Atlas']
const solutionNouns = ['Assist', 'Hub', 'Engine', 'Studio', 'Matrix', 'Pilot', 'Guard', 'Navigator']
const solutionFeatures = ['分析平台', '決策系統', '協作中台', '作業助手', '流程引擎', '監測儀表板', '管理模組']

const createSeededRandom = (seed) => {
  let value = seed >>> 0
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0
    return value / 4294967296
  }
}

const shuffleArray = (items, seed) => {
  const random = createSeededRandom(seed)
  const array = [...items]
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const randomTags = shuffleArray(
  Array.from({ length: totalSolutions }, (_, index) => categoryOptions[index % categoryOptions.length]),
  randomSeed
)

const createFakeSolution = (id) => {
  const tag = randomTags[id - 1]
  const company = `${companyPrefixes[(id * 7) % companyPrefixes.length]}${companySuffixes[(id * 5) % companySuffixes.length]}股份有限公司`
  const name = `${solutionPrefixes[(id * 3) % solutionPrefixes.length]}${solutionNouns[(id * 11) % solutionNouns.length]} ${solutionFeatures[(id * 13) % solutionFeatures.length]}`
  const image = logoImages[(id - 1) % logoImages.length]
  const detailImage = detailImages.length > 0 ? detailImages[(id - 1) % detailImages.length] : image

  return {
    id,
    tag,
    company,
    name,
    image,
    detailImage,
    solutionIntro:
      `${name} 聚焦「${tag}」應用情境，整合資料收集、事件追蹤與視覺化分析流程，協助團隊快速掌握執行重點並縮短決策週期。此方案可依實際作業節點彈性調整，降低導入門檻並提升跨部門協作效率。`,
    vendorIntro:
      `${company} 具備跨部門流程整合與系統導入經驗，可依企業規模提供分階段建置、教育訓練與維運支持。透過專案化輔導流程，協助組織逐步擴大 AI 應用範圍，並建立可持續優化的營運機制。`,
    manualUrl: '',
  }
}

export const solutions = Array.from({ length: totalSolutions }, (_, index) => createFakeSolution(index + 1))

export const solutionsSearchText = solutions
  .map((solution) =>
    [solution.tag, solution.company, solution.name, solution.solutionIntro, solution.vendorIntro].join(' ')
  )
  .join(' ')
