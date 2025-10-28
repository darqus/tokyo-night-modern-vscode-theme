import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { checkContrast } from '../src/theme/utils/contrast'

const themePath = join(__dirname, '../themes/tokyo-night-color-theme.json')
const theme = JSON.parse(readFileSync(themePath, 'utf8'))

const editorBg = theme.colors['editor.background']
const issues: Array<{ name: string; color: string; ratio: number }> = []

console.log('🔍 Анализ контрастности токенов синтаксиса\n')
console.log(`Фон редактора: ${editorBg}\n`)

// Анализируем tokenColors
theme.tokenColors.forEach((token: any) => {
  if (token.settings?.foreground) {
    const fg = token.settings.foreground
    const result = checkContrast(fg, editorBg)

    if (!result.aa) {
      issues.push({
        name: token.name || token.scope,
        color: fg,
        ratio: result.ratio,
      })
    }
  }
})

// Анализируем semanticTokenColors
Object.entries(theme.semanticTokenColors || {}).forEach(
  ([name, settings]: [string, any]) => {
    if (settings?.foreground) {
      const fg = settings.foreground
      const result = checkContrast(fg, editorBg)

      if (!result.aa) {
        issues.push({
          name: `semantic: ${name}`,
          color: fg,
          ratio: result.ratio,
        })
      }
    }
  }
)

if (issues.length === 0) {
  console.log('✅ Все токены имеют достаточную контрастность (≥4.5:1)')
} else {
  console.log(`⚠️  Найдено ${issues.length} токенов с низкой контрастностью:\n`)
  issues.forEach((issue) => {
    console.log(`  ${issue.name}`)
    console.log(`    Цвет: ${issue.color}`)
    console.log(`    Контраст: ${issue.ratio}:1 (нужно ≥4.5:1)\n`)
  })
}

console.log(`\n📊 Итого: ${theme.tokenColors.length} токенов проверено`)
console.log(`   Проблем: ${issues.length}`)
console.log(
  `   Соответствие: ${issues.length === 0 ? '✅ 100%' : `⚠️  ${Math.round((1 - issues.length / theme.tokenColors.length) * 100)}%`}`
)
