import fs from 'node:fs'
import path from 'node:path'
import xlsx from 'xlsx'

const projectRoot = process.cwd()
const metadataPath = path.join(projectRoot, 'metadata.xlsx')
const outputPath = path.join(projectRoot, 'src/data/metadata.generated.json')

const normalizeText = (value) => String(value ?? '').replace(/\r\n/g, '\n').trim()

if (!fs.existsSync(metadataPath)) {
  console.error(`[sync-metadata] 找不到檔案: ${metadataPath}`)
  process.exit(1)
}

const workbook = xlsx.readFile(metadataPath, { cellDates: false, raw: false })
const firstSheetName = workbook.SheetNames[0]

if (!firstSheetName) {
  console.error('[sync-metadata] metadata.xlsx 沒有可讀取的工作表')
  process.exit(1)
}

const sheet = workbook.Sheets[firstSheetName]
const rows = xlsx.utils.sheet_to_json(sheet, { defval: '' })

const records = rows
  .map((row, index) => {
    const category = normalizeText(row['方案類別'])
    const sequenceText = normalizeText(row['方案序列'])
    const sequence = Number.parseInt(sequenceText, 10)
    const companyName = normalizeText(row['公司名稱'])
    const companyShortName = normalizeText(row['公司簡稱'])
    const solutionName = normalizeText(row['方案名稱'])
    const manualUrl = normalizeText(row['操作說明連結'])
    const imageFileName = normalizeText(row['方案圖檔名稱'])
    const solutionIntro = normalizeText(row['方案介紹'])
    const companyIntro = normalizeText(row['公司簡介(限300字)'])
    const contactPerson = normalizeText(row['聯絡人'])
    const companyPhone = normalizeText(row['公司聯絡電話'])
    const contactEmail = normalizeText(row['聯絡信箱'])
    const websiteUrl = normalizeText(row['公司官網網址'])
    const specialPrice = normalizeText(row['新北專屬優惠價格'])

    const bannerAssetKey = imageFileName
      ? `/src/assets/solutions/banner/${category}/${imageFileName}`
      : ''

    const bannerFsPath = imageFileName
      ? path.join(projectRoot, 'src/assets/solutions/banner', category, imageFileName)
      : ''

    return {
      id: `${category}-${Number.isFinite(sequence) ? sequence : index + 1}`,
      category,
      sequence: Number.isFinite(sequence) ? sequence : index + 1,
      companyName,
      companyShortName,
      solutionName,
      manualUrl,
      imageFileName,
      bannerAssetKey,
      bannerFileExists: bannerFsPath ? fs.existsSync(bannerFsPath) : false,
      solutionIntro,
      companyIntro,
      contactPerson,
      companyPhone,
      contactEmail,
      websiteUrl,
      specialPrice,
    }
  })
  .filter((item) => item.category && item.solutionName)

fs.writeFileSync(outputPath, `${JSON.stringify(records, null, 2)}\n`, 'utf8')
console.log(`[sync-metadata] 已更新 ${path.relative(projectRoot, outputPath)}，共 ${records.length} 筆`) 
