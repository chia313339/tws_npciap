import metadataRows from './metadata.generated.json'

export const categoryNavItems = [
  { label: 'AI市場洞察', slug: 'ai-market-insight' },
  { label: 'AI企業營運管理', slug: 'ai-enterprise-operations' },
  { label: 'AI助理', slug: 'ai-assistant' },
  { label: 'AI垂直整合方案', slug: 'ai-vertical-integration' },
  { label: 'AI居家照護', slug: 'ai-home-care' },
  { label: 'AI創作內容', slug: 'ai-content-creation' },
  { label: 'AI智能客服', slug: 'ai-intelligent-customer-service' },
  { label: 'AI智慧製造', slug: 'ai-smart-manufacturing' },
  { label: 'AI資訊安全', slug: 'ai-information-security' },
  { label: 'AI營運流程自動化', slug: 'ai-operation-automation' },
]

const bannerImageMap = import.meta.glob('/src/assets/solutions/banner/**/*.{png,jpg,jpeg,webp,svg,JPG,JPEG,PNG,WEBP,SVG}', {
  eager: true,
  import: 'default',
})

const toText = (value) => String(value ?? '').trim()

const normalizeUrl = (value) => {
  const text = toText(value)
  if (!text) return ''
  if (/^https?:\/\//i.test(text)) return text
  return `https://${text}`
}

const normalizedRows = metadataRows
  .map((row, index) => {
    const category = toText(row.category)
    const solutionName = toText(row.solutionName)

    if (!category || !solutionName) {
      return null
    }

    const bannerAssetKey = toText(row.bannerAssetKey)
    const bannerImage = bannerAssetKey ? bannerImageMap[bannerAssetKey] || '' : ''

    return {
      id: toText(row.id) || `${category}-${index + 1}`,
      order: Number.isFinite(Number(row.sequence)) ? Number(row.sequence) : index + 1,
      tag: category,
      company: toText(row.companyName),
      companyShortName: toText(row.companyShortName),
      name: solutionName,
      manualUrl: normalizeUrl(row.manualUrl),
      imageFileName: toText(row.imageFileName),
      image: bannerImage,
      detailImage: bannerImage,
      solutionIntro: toText(row.solutionIntro),
      vendorIntro: toText(row.companyIntro),
      specialPrice: toText(row.specialPrice),
      contactPerson: toText(row.contactPerson),
      companyPhone: toText(row.companyPhone),
      contactEmail: toText(row.contactEmail),
      websiteUrl: normalizeUrl(row.websiteUrl),
    }
  })
  .filter(Boolean)

const sortByOrder = (a, b) => a.order - b.order

export const getCategoryCards = (categoryLabel) =>
  normalizedRows
    .filter((solution) => solution.tag === categoryLabel)
    .sort(sortByOrder)
    .map((solution) => ({
      id: solution.id,
      companyName: solution.companyShortName || solution.company,
      solutionName: solution.name,
      modalData: solution,
    }))

const vendorMap = new Map()
normalizedRows.forEach((solution) => {
  const key = solution.company || solution.companyShortName
  if (!key || vendorMap.has(key)) {
    return
  }
  vendorMap.set(key, solution)
})

export const vendorCards = [...vendorMap.values()].map((solution, index) => ({
  id: `vendor-${index + 1}`,
  logo: solution.image,
  vendorName: solution.companyShortName || solution.company,
  modalData: solution,
}))
