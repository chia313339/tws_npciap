import fs from 'node:fs'
import path from 'node:path'
import xlsx from 'xlsx'

const root = process.cwd()
const metadataPath = path.join(root, 'metadata.xlsx')
const logoDir = path.join(root, 'src/assets/solutions/logo')
const groupedJsonPath = path.join(root, 'src/data/vendorCompanies.generated.json')

const SOURCE_REGEX = /^新北AI手拿版-40x40cm-45個_(.+)\.png$/u

const text = (v) => String(v ?? '').replace(/\r\n/g, '\n').trim()
const normalizeShortName = (name) => text(name).replace(/\s*[2-4]$/u, '').trim()

if (!fs.existsSync(metadataPath)) {
  console.error('[prepare-vendors] 找不到 metadata.xlsx')
  process.exit(1)
}
if (!fs.existsSync(logoDir)) {
  console.error('[prepare-vendors] 找不到 logo 目錄')
  process.exit(1)
}

const wb = xlsx.readFile(metadataPath, { cellDates: false, raw: false })
const sheet = wb.Sheets[wb.SheetNames[0]]
const rows = xlsx.utils.sheet_to_json(sheet, { defval: '' })

const groupedMap = new Map()
for (const row of rows) {
  const shortName = text(row['公司簡稱'])
  const companyName = text(row['公司名稱'])
  const solutionName = text(row['方案名稱'])
  const companyIntro = text(row['公司簡介(限300字)'])
  const websiteUrl = text(row['公司官網網址'])

  if (!shortName) continue
  if (!groupedMap.has(shortName)) {
    groupedMap.set(shortName, {
      companyShortName: shortName,
      companyName,
      companyIntro,
      websiteUrl,
      solutionNames: [],
    })
  }

  const item = groupedMap.get(shortName)
  if (!item.companyName && companyName) item.companyName = companyName
  if (!item.companyIntro && companyIntro) item.companyIntro = companyIntro
  if (!item.websiteUrl && websiteUrl) item.websiteUrl = websiteUrl
  if (solutionName && !item.solutionNames.includes(solutionName)) {
    item.solutionNames.push(solutionName)
  }
}

const metadataShortNames = [...groupedMap.keys()]

const files = fs.readdirSync(logoDir)
const sourceFiles = files.filter((f) => SOURCE_REGEX.test(f))
const cleanFiles = new Set(files.filter((f) => f.toLowerCase().endsWith('.png') && !SOURCE_REGEX.test(f)))

const selectedByCompany = new Map()
for (const file of sourceFiles) {
  const match = file.match(SOURCE_REGEX)
  if (!match) continue

  const rawCompany = text(match[1])
  const normalized = normalizeShortName(rawCompany)
  if (!normalized) continue

  const score = rawCompany === normalized ? 0 : 1
  const prev = selectedByCompany.get(normalized)
  if (!prev || score < prev.score || (score === prev.score && file.localeCompare(prev.file, 'zh-Hant') < 0)) {
    selectedByCompany.set(normalized, { file, score })
  }
}

for (const [company, selected] of selectedByCompany.entries()) {
  const targetFile = `${company}.png`
  const sourcePath = path.join(logoDir, selected.file)
  const targetPath = path.join(logoDir, targetFile)

  if (selected.file !== targetFile) {
    if (!fs.existsSync(targetPath)) {
      fs.renameSync(sourcePath, targetPath)
    } else {
      const srcBuf = fs.readFileSync(sourcePath)
      const dstBuf = fs.readFileSync(targetPath)
      if (Buffer.compare(srcBuf, dstBuf) === 0) {
        fs.unlinkSync(sourcePath)
      } else {
        fs.unlinkSync(sourcePath)
      }
    }
  }
}

for (const company of metadataShortNames) {
  const cleanName = `${company}.png`
  if (cleanFiles.has(cleanName)) {
    continue
  }
  if (selectedByCompany.has(company)) {
    cleanFiles.add(cleanName)
  }
}

const keepSet = new Set(metadataShortNames.map((name) => `${name}.png`))

for (const file of fs.readdirSync(logoDir)) {
  const filePath = path.join(logoDir, file)
  const stat = fs.statSync(filePath)
  if (!stat.isFile()) continue
  if (file === '.DS_Store') continue

  if (SOURCE_REGEX.test(file)) {
    fs.unlinkSync(filePath)
    continue
  }

  const isPng = file.toLowerCase().endsWith('.png')
  if (!isPng) continue

  if (!keepSet.has(file)) {
    fs.unlinkSync(filePath)
  }
}

const logoFiles = fs
  .readdirSync(logoDir)
  .filter((file) => file.toLowerCase().endsWith('.png') && !file.startsWith('.'))
  .sort((a, b) => a.localeCompare(b, 'zh-Hant', { numeric: true, sensitivity: 'base' }))

const logoCompanies = logoFiles.map((file) => file.replace(/\.png$/i, ''))
const missingLogos = metadataShortNames.filter((name) => !logoCompanies.includes(name))
const extraLogos = logoCompanies.filter((name) => !metadataShortNames.includes(name))

const result = metadataShortNames.map((shortName) => {
  const info = groupedMap.get(shortName)
  const logoFileName = logoCompanies.includes(shortName) ? `${shortName}.png` : ''
  return {
    companyShortName: shortName,
    companyName: info.companyName,
    companyIntro: info.companyIntro,
    websiteUrl: info.websiteUrl,
    solutionNames: info.solutionNames,
    logoFileName,
  }
})

fs.writeFileSync(groupedJsonPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8')

console.log('[prepare-vendors] metadata 公司數:', metadataShortNames.length)
console.log('[prepare-vendors] logo 公司數:', logoCompanies.length)
console.log('[prepare-vendors] 缺少 logo:', missingLogos.length ? missingLogos.join('、') : '無')
console.log('[prepare-vendors] 多餘 logo:', extraLogos.length ? extraLogos.join('、') : '無')
console.log(`[prepare-vendors] 已輸出 ${path.relative(root, groupedJsonPath)}`)
