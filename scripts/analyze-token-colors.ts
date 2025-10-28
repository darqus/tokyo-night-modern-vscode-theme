import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { TokenColor, VSCodeTheme } from '../src/theme/types'
import { getColorDistance } from '../src/theme/utils/contrast'

const themePath = join(__dirname, '../themes/tokyo-night-color-theme.json')

const theme: VSCodeTheme = JSON.parse(readFileSync(themePath, 'utf8'))

interface TokenPair {
  token1: string
  token2: string
  color1: string
  color2: string
  distance: number
}

const colors: Array<{ name: string; color: string }> = []

// Собираем все цвета токенов
theme.tokenColors.forEach((token: TokenColor) => {
  if (token.settings?.foreground) {
    colors.push({
      name:
        token.name ||
        (typeof token.scope === 'string' ? token.scope : token.scope[0] || ''),
      color: token.settings.foreground,
    })
  }
})

// Находим похожие цвета
const similarPairs: TokenPair[] = []
const SIMILARITY_THRESHOLD = 50

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
        `  ${pair.color1} ↔ ${pair.color2} (расстояние: ${pair.distance})`
      )
      console.log(`    ${pair.token1}`)
      console.log(`    ${pair.token2}\n`)
    })
} else {
  console.log('✅ Все цвета достаточно различимы')
}

// Анализ основных категорий
console.log('\n📊 Основные категории токенов:\n')
const categories = {
  Переменные: ['variable', 'Variable'],
  Функции: ['function', 'Function', 'method', 'Method'],
  'Ключевые слова': ['keyword', 'Keyword'],
  Строки: ['string', 'String'],
  Комментарии: ['comment', 'Comment'],
  Типы: ['type', 'Type', 'class', 'Class'],
}

Object.entries(categories).forEach(([category, keywords]) => {
  const tokens = colors.filter((c) =>
    keywords.some((k) => c.name.toLowerCase().includes(k.toLowerCase()))
  )
  const uniqueColors = new Set(tokens.map((t) => t.color))
  console.log(
    `  ${category}: ${uniqueColors.size} цветов для ${tokens.length} токенов`
  )
})
