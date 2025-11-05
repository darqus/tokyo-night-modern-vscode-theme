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
