// Валидация структуры темы VS Code
import fs from 'fs'
import path from 'path'
import { palette } from '../src/theme/palette/index'

const themePath = path.join(
  __dirname,
  '../themes/tokyo-night-modern-color-theme.json'
)
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'))

// --- 1. Проверка структуры ---
// Проверка: все значения colors — строки (HEX или rgba) или объекты с цветами
for (const [key, value] of Object.entries(theme.colors)) {
  if (typeof value !== 'string' && typeof value !== 'object') {
    throw new Error(
      `Color value for ${key} is not a string or object: ${value}`
    )
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
  if (typeof color === 'string') {
    usedColors.add(color.toLowerCase())
  } else if (typeof color === 'object' && color !== null) {
    // Если это объект с цветами, извлекаем все цвета
    Object.values(color).forEach((subColor) => {
      if (typeof subColor === 'string') {
        usedColors.add(subColor.toLowerCase())
      }
    })
  }
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

// Функция для извлечения только строковых значений из палитры
function extractStringColors(
  obj: any,
  prefix: string = ''
): Record<string, string> {
  const result: Record<string, string> = {}

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      result[fullKey] = value
    } else if (typeof value === 'object' && value !== null) {
      // Если это объект с цветами, извлекаем их
      if (value.hasOwnProperty('primary')) {
        // Это объект с цветами, извлекаем все цвета
        Object.assign(result, extractStringColors(value, fullKey))
      } else {
        // Это обычный объект, рекурсивно обрабатываем его
        Object.assign(result, extractStringColors(value, fullKey))
      }
    }
  }

  return result
}

const paletteAsRecord = extractStringColors(palette)

// Поиск неиспользуемых ключей в палитре
const unusedKeys = Object.keys(paletteAsRecord).filter(
  (key) => !usedColors.has(paletteAsRecord[key].toLowerCase())
)

if (unusedKeys.length > 0) {
  console.warn(
    `[validate-theme] Внимание: Найдено ${
      unusedKeys.length
    } неиспользуемых цветов в палитре:`
  )
  unusedKeys
    .sort()
    .forEach((key) => console.warn(`  - ${key}: "${paletteAsRecord[key]}"`))
}

console.log('Theme validation complete.')
