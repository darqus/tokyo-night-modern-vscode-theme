import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { checkContrast } from '../src/theme/utils/contrast'

function sanitizeOutput(text: string): string {
  // Remove control characters and newlines
  return text
    .split('')
    .filter((char) => {
      const code = char.charCodeAt(0)
      return (
        !(code >= 0 && code <= 31) &&
        !(code >= 127 && code <= 159) &&
        char !== '\r' &&
        char !== '\n'
      )
    })
    .join('')
}

const themePath = join(__dirname, '../themes/tokyo-night-color-theme.json')
let theme: {
  colors: Record<string, string>
  tokenColors: Array<{
    name?: string
    scope?: string | string[]
    settings?: { foreground?: string }
  }>
  semanticTokenColors?: Record<string, { foreground?: string }>
}
try {
  const themeContent = readFileSync(themePath, 'utf8')
  theme = JSON.parse(themeContent)
} catch (error) {
  console.error(
    'Failed to read or parse theme file:',
    error instanceof Error ? error.message : error
  )
  process.exit(1)
}

const editorBg = theme.colors['editor.background']
const issues: Array<{ name: string; color: string; ratio: number }> = []

console.log('🔍 Анализ контрастности токенов синтаксиса\n')
console.log(`Фон редактора: ${editorBg}\n`)

// Анализируем tokenColors
try {
  theme.tokenColors.forEach(
    (token: {
      name?: string
      scope?: string | string[]
      settings?: { foreground?: string }
    }) => {
      if (token.settings?.foreground) {
        const fg = token.settings.foreground
        const result = checkContrast(fg, editorBg)

        if (!result.aa) {
          const scopeName = Array.isArray(token.scope)
            ? token.scope[0]
            : token.scope
          issues.push({
            name: token.name || scopeName || 'unknown',
            color: fg,
            ratio: result.ratio,
          })
        }
      }
    }
  )
} catch (error) {
  console.error(
    'Error analyzing token colors:',
    error instanceof Error ? error.message : error
  )
  process.exit(1)
}

// Анализируем semanticTokenColors
Object.entries(theme.semanticTokenColors || {}).forEach(([name, settings]) => {
  const tokenSettings = settings as { foreground?: string }
  if (tokenSettings?.foreground) {
    const fg = tokenSettings.foreground
    const result = checkContrast(fg, editorBg)

    if (!result.aa) {
      issues.push({
        name: `semantic: ${name}`,
        color: fg,
        ratio: result.ratio,
      })
    }
  }
})

if (issues.length === 0) {
  console.log('✅ Все токены имеют достаточную контрастность (≥4.5:1)')
} else {
  console.log(`⚠️  Найдено ${issues.length} токенов с низкой контрастностью:\n`)
  issues.forEach((issue) => {
    console.log('  ', sanitizeOutput(issue.name))
    console.log('    Цвет:', sanitizeOutput(issue.color))
    console.log(`    Контраст: ${issue.ratio}:1 (нужно ≥4.5:1)\n`)
  })
}

console.log(`\n📊 Итого: ${theme.tokenColors.length} токенов проверено`)
console.log(`   Проблем: ${issues.length}`)
console.log(
  `   Соответствие: ${issues.length === 0 ? '✅ 100%' : `⚠️  ${Math.round((1 - issues.length / theme.tokenColors.length) * 100)}%`}`
)
