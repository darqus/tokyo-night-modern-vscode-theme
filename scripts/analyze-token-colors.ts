import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { TokenColor, VSCodeTheme } from '../src/theme/types/index.js'
import { getColorDistance } from '../src/theme/utils/contrast.js'
import { sanitizeLogOutput } from '../src/theme/utils/logger.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const themePath = join(__dirname, '../themes/tokyo-modern-color-theme.json')

let theme: VSCodeTheme
try {
  theme = JSON.parse(readFileSync(themePath, 'utf8'))
} catch (error) {
  console.error(
    'Failed to read theme file:',
    error instanceof Error ? error.message : error
  )
  process.exit(1)
}

interface TokenPair {
  token1: string
  token2: string
  color1: string
  color2: string
  distance: number
}

const colors: Array<{ name: string; color: string }> = []

// Собираем все цвета токенов
try {
  theme.tokenColors.forEach((token: TokenColor) => {
    if (token.settings?.foreground) {
      colors.push({
        name:
          token.name ||
          (typeof token.scope === 'string'
            ? token.scope
            : token.scope[0] || ''),
        color: token.settings.foreground,
      })
    }
  })
} catch (error) {
  console.error(
    'Error processing token colors:',
    error instanceof Error ? error.message : error
  )
  process.exit(1)
}

// Находим похожие цвета
const similarPairs: TokenPair[] = []
const SIMILARITY_THRESHOLD = 50

try {
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      const distance = getColorDistance(colors[i].color, colors[j].color)
      if (distance < SIMILARITY_THRESHOLD && distance > 0) {
        similarPairs.push({
          token1: colors[i].name,
          token2: colors[j].name,
          color1: colors[i].color,
          color2: colors[j].color,
          distance: Math.round(distance),
        })
      }
    }
  }
} catch (error) {
  console.error(
    'Error calculating color distances:',
    error instanceof Error ? error.message : error
  )
  process.exit(1)
}

console.log('🎨 Анализ цветового разнообразия токенов\n')
console.log(`Всего токенов с цветом: ${colors.length}`)
console.log(`Уникальных цветов: ${new Set(colors.map((c) => c.color)).size}\n`)

if (similarPairs.length > 0) {
  console.log(
    `⚠️  Найдено ${similarPairs.length} пар похожих цветов (расстояние < ${SIMILARITY_THRESHOLD}):\n`
  )

  similarPairs
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 15)
    .forEach((pair) => {
      console.log(
        `  ${sanitizeLogOutput(pair.color1)} ↔ ${sanitizeLogOutput(pair.color2)} (расстояние: ${pair.distance})`
      )
      console.log(`    ${sanitizeLogOutput(pair.token1)}`)
      console.log(`    ${sanitizeLogOutput(pair.token2)}\n`)
    })
} else {
  console.log('✅ Все цвета достаточно различимы')
}

// Анализ основных категорий
console.log('\n📊 Основные категории токенов:\n')
const tokenCategories = {
  Variables: ['variable', 'Variable'],
  Functions: ['function', 'Function', 'method', 'Method'],
  Keywords: ['keyword', 'Keyword'],
  Strings: ['string', 'String'],
  Comments: ['comment', 'Comment'],
  Types: ['type', 'Type', 'class', 'Class'],
}

Object.entries(tokenCategories).forEach(([categoryName, searchKeywords]) => {
  const categoryTokens = colors.filter((tokenEntry) =>
    searchKeywords.some((keyword) =>
      tokenEntry.name.toLowerCase().includes(keyword.toLowerCase())
    )
  )
  const categoryColors = new Set(
    categoryTokens.map((tokenEntry) => tokenEntry.color)
  )
  console.log(
    `  ${categoryName}: ${categoryColors.size} цветов для ${categoryTokens.length} токенов`
  )
})

// Новые категории: Properties и Values
console.log('\n🔍 Анализ свойств и значений:\n')

// Категории для анализа
const propertiesKeywords = [
  'property',
  'key',
  'meta.object-literal.key',
  'Object Key',
  'Object Property',
  'property-name',
  'attribute-name',
  'support.type.property-name',
  'entity.other.attribute-name',
  'JSON Key',
  'field.name.graphql',
]
const valuesKeywords = [
  'value',
  'string.value',
  'constant.numeric',
  'constant.language',
  'support.constant.property-value',
  'string',
  'number',
  'boolean',
  'constant',
  'variable.other.constant',
]

// Собираем токены для каждой категории
const propertiesTokens = colors.filter((tokenEntry) =>
  propertiesKeywords.some((keyword) =>
    tokenEntry.name.toLowerCase().includes(keyword.toLowerCase())
  )
)

const valuesTokens = colors.filter((tokenEntry) =>
  valuesKeywords.some((keyword) =>
    tokenEntry.name.toLowerCase().includes(keyword.toLowerCase())
  )
)

// Уникальные цвета для каждой категории
const propertiesColors = new Set(propertiesTokens.map((token) => token.color))
const valuesColors = new Set(valuesTokens.map((token) => token.color))

console.log(
  `  Properties: ${propertiesColors.size} цветов для ${propertiesTokens.length} токенов`
)
console.log(
  `  Values: ${valuesColors.size} цветов для ${valuesTokens.length} токенов`
)

// Находим пересечения между категориями Properties и Values
const similarPropertyValuePairs: TokenPair[] = []
const PROPERTY_VALUE_SIMILARITY_THRESHOLD = 30 // Более низкий порог для анализа свойств и значений

for (const propToken of propertiesTokens) {
  for (const valToken of valuesTokens) {
    const distance = getColorDistance(propToken.color, valToken.color)
    if (distance <= PROPERTY_VALUE_SIMILARITY_THRESHOLD) {
      similarPropertyValuePairs.push({
        token1: propToken.name,
        token2: valToken.name,
        color1: propToken.color,
        color2: valToken.color,
        distance: Math.round(distance),
      })
    }
  }
}

// Выводим отладочную информацию о цветах Properties и Values
console.log('\n📋 Детали Properties и Values:')
console.log('\n  Properties токены:')
propertiesTokens.forEach((token) => {
  console.log(
    `    - ${sanitizeLogOutput(token.name)}: ${sanitizeLogOutput(token.color)}`
  )
})
console.log('\n  Values токены:')
valuesTokens.forEach((token) => {
  console.log(
    `    - ${sanitizeLogOutput(token.name)}: ${sanitizeLogOutput(token.color)}`
  )
})

if (similarPropertyValuePairs.length > 0) {
  console.log(
    `\n⚠️  Найдено ${similarPropertyValuePairs.length} пар похожих цветов между Properties и Values (расстояние < ${PROPERTY_VALUE_SIMILARITY_THRESHOLD}):\n`
  )

  similarPropertyValuePairs
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 15)
    .forEach((pair) => {
      console.log(
        `  ${sanitizeLogOutput(pair.color1)} ↔ ${sanitizeLogOutput(pair.color2)} (расстояние: ${pair.distance})`
      )
      console.log(`    Properties: ${sanitizeLogOutput(pair.token1)}`)
      console.log(`    Values: ${sanitizeLogOutput(pair.token2)}\n`)
    })
} else {
  console.log('\n✅ Цвета Properties и Values достаточно различимы')
}
