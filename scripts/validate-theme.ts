// Валидация структуры темы VS Code
import fs from 'fs'
import path from 'path'
import { palette } from '../src/theme/palette'

const themePath = path.join(
  __dirname,
  '../themes/tokyo-night-modern-color-theme.json'
)
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'))

// --- 1. Проверка структуры ---
// Проверка: все значения colors — строки (HEX или rgba)
for (const [key, value] of Object.entries(theme.colors)) {
  if (typeof value !== 'string') {
    throw new Error(`Color value for ${key} is not a string: ${value}`)
  }
}

// Проверка: все tokenColors имеют name, scope, settings
for (const [i, token] of theme.tokenColors.entries()) {
  if (!token.name || !token.scope || !token.settings) {
    throw new Error(`TokenColor at index ${i} is missing required fields`)
  }
  if (
    typeof token.settings.foreground !== 'undefined' &&
    typeof token.settings.foreground !== 'string'
  ) {
    throw new Error(`TokenColor at index ${i} has invalid foreground`)
  }
}

// --- 2. Проверка на неиспользуемые цвета ---
const usedColors = new Set<string>()

// Сбор используемых цветов из theme.colors
Object.values(theme.colors).forEach((color) => {
  if (typeof color === 'string') usedColors.add(color.toLowerCase())
})

// Сбор используемых цветов из theme.tokenColors
theme.tokenColors.forEach((token: any) => {
  if (token.settings && typeof token.settings.foreground === 'string') {
    usedColors.add(token.settings.foreground.toLowerCase())
  }
})

// Сбор используемых цветов из theme.semanticTokenColors
Object.values(theme.semanticTokenColors).forEach((rule: any) => {
  if (typeof rule === 'string') {
    usedColors.add(rule.toLowerCase())
  } else if (rule && typeof rule.foreground === 'string') {
    usedColors.add(rule.foreground.toLowerCase())
  }
})

// Поиск неиспользуемых ключей в палитре
const unusedKeys = Object.keys(palette).filter(
  (key) => !usedColors.has(palette[key].toLowerCase())
)

if (unusedKeys.length > 0) {
  console.warn(
    `[validate-theme] Внимание: Найдено ${
      unusedKeys.length
    } неиспользуемых цветов в палитре:`
  )
  unusedKeys
    .sort()
    .forEach((key) => console.warn(`  - ${key}: "${palette[key]}"`))
}

console.log('Theme validation complete.')
