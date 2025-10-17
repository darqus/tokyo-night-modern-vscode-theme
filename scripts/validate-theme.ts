// Валидация структуры темы VS Code
import fs from 'node:fs'
import path from 'node:path'
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

// --- 2. Проверка на дублирующиеся цвета в теме ---
const colorValues = new Map<string, string[]>() // color -> [keys using this color]

// Сбор цветов из theme.colors
Object.entries(theme.colors).forEach(([key, value]) => {
  if (typeof value === 'string') {
    if (!colorValues.has(value)) {
      colorValues.set(value, [])
    }
    colorValues.get(value)?.push(key)
  } else if (typeof value === 'object' && value !== null) {
    // Если это объект с цветами, извлекаем все цвета
    Object.entries(value).forEach(([subKey, subValue]) => {
      if (typeof subValue === 'string') {
        const fullKey = `${key}.${subKey}`
        if (!colorValues.has(subValue)) {
          colorValues.set(subValue, [])
        }
        colorValues.get(subValue)?.push(fullKey)
      }
    })
  }
})

// Сбор цветов из theme.tokenColors
theme.tokenColors.forEach((token: any, index: number) => {
  if (token.settings && typeof token.settings.foreground === 'string') {
    const color = token.settings.foreground
    if (!colorValues.has(color)) {
      colorValues.set(color, [])
    }
    colorValues.get(color)?.push(`tokenColors[${index}].settings.foreground`)
  }
  if (token.settings && typeof token.settings.background === 'string') {
    const color = token.settings.background
    if (!colorValues.has(color)) {
      colorValues.set(color, [])
    }
    colorValues.get(color)?.push(`tokenColors[${index}].settings.background`)
  }
})

// Сбор цветов из theme.semanticTokenColors
Object.entries(theme.semanticTokenColors).forEach(
  ([key, rule]: [string, any]) => {
    if (typeof rule === 'string') {
      if (!colorValues.has(rule)) {
        colorValues.set(rule, [])
      }
      colorValues.get(rule)?.push(`semanticTokenColors.${key}`)
    } else if (rule && typeof rule.foreground === 'string') {
      const color = rule.foreground
      if (!colorValues.has(color)) {
        colorValues.set(color, [])
      }
      colorValues.get(color)?.push(`semanticTokenColors.${key}.foreground`)
    } else if (rule && typeof rule.background === 'string') {
      const color = rule.background
      if (!colorValues.has(color)) {
        colorValues.set(color, [])
      }
      colorValues.get(color)?.push(`semanticTokenColors.${key}.background`)
    }
  }
)

// Проверка на дублирующиеся цвета
const duplicates = Array.from(colorValues.entries()).filter(
  ([_, keys]) => keys.length > 1
)
if (duplicates.length > 0) {
  console.log(
    `[validate-theme] Найдено ${duplicates.length} дублирующихся цветов (это нормально для темы):`
  )
  duplicates.forEach(([color, keys]) => {
    console.log(`  - ${color}: ${keys.join(', ')}`)
  })
} else {
  console.log('[validate-theme] Нет дублирующихся цветов в теме')
}

// --- 3. Проверка на неиспользуемые цвета ---
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
  if (token.settings && typeof token.settings.background === 'string') {
    usedColors.add(token.settings.background.toLowerCase())
  }
})

// Сбор используемых цветов из theme.semanticTokenColors
Object.values(theme.semanticTokenColors).forEach((rule: any) => {
  if (typeof rule === 'string') {
    usedColors.add(rule.toLowerCase())
  } else if (rule && typeof rule.foreground === 'string') {
    usedColors.add(rule.foreground.toLowerCase())
  } else if (rule && typeof rule.background === 'string') {
    usedColors.add(rule.background.toLowerCase())
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
    } else if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value)
    ) {
      // Это объект, рекурсивно обрабатываем его
      Object.assign(result, extractStringColors(value, fullKey))
    }
  }

  return result
}

const paletteAsRecord = extractStringColors(palette)

// Функция для извлечения базового цвета без альфа-канала
function getBaseColor(color: string): string {
  if (color.length === 9) {
    // #rrggbbaa format
    return color.substring(0, 7).toLowerCase() // #rrggbb
  }
  return color.toLowerCase()
}

// Получим все базовые цвета из темы (без альфа-канала)
const baseUsedColors = new Set<string>()
usedColors.forEach((color) => {
  baseUsedColors.add(getBaseColor(color))
})

// Список цветов, которые могут быть "неиспользуемыми" по дизайну (например, часть расширенной палитры)
const acceptableUnusedColors = [
  // Цвета расширенной палитры
  'blue50',
  'blue100',
  'blue200',
  'blue30',
  'cyan50',
  'cyan100',
  'cyan200',
  'cyan300',
  'cyan400',
  'cyan600',
  'gray50',
  'gray100',
  'gray200',
  'gray300',
  'green50',
  'green100',
  'green200',
  'green300',
  'green400',
  'green600',
  'green700',
  'green800',
  'green900',
  'purple50',
  'purple100',
  'purple200',
  'purple300',
  'purple400',
  'purple600',
  'purple700',
  'purple900',
  'red50',
  'red100',
  'red200',
  'red300',
  'red400',
  'red600',
  'red700',
  'red800',
  'red900',
  'yellow50',
  'yellow100',
  'yellow200',
  'yellow300',
  'yellow400',
  'yellow600',
  'yellow700',
  'yellow800',
  'yellow900',
  // Цвета, которые могут быть зарезервированы для будущего использования
  'cssSelector',
  'jsonNumber',
  'number',
  'regexp',
  'editorForegroundTertiary',
  'text.tertiary',
  'textTertiary',
  'borders.error',
  'bordersError',
]

// Поиск неиспользуемых ключей в палитре
const unusedKeys = Object.keys(paletteAsRecord).filter((key) => {
  const paletteColor = paletteAsRecord[key].toLowerCase()
  // Проверяем, используется ли цвет напрямую или как базовый цвет
  const isUsed =
    usedColors.has(paletteColor) ||
    baseUsedColors.has(getBaseColor(paletteColor))
  // Проверяем, является ли цвет допустимым "неиспользуемым"
  const isAcceptableUnused = acceptableUnusedColors.includes(key)
  return !isUsed && !isAcceptableUnused
})

// Исключим из неиспользуемых цветов специальные служебные свойства
const filteredUnusedKeys = unusedKeys.filter((key) => {
  // Исключаем служебные свойства, которые не должны использоваться напрямую
  return (
    !['colorValidation', 'optimizedAlphaValues'].includes(key) &&
    !key.startsWith('optimizedAlphaValues.')
  )
})

if (filteredUnusedKeys.length > 0) {
  console.warn(
    `[validate-theme] Внимание: Найдено ${
      filteredUnusedKeys.length
    } потенциально неиспользуемых цветов в палитре (возможно, это часть расширенной палитры):`
  )
  filteredUnusedKeys
    .sort()
    .forEach((key) => console.warn(`  - ${key}: "${paletteAsRecord[key]}"`))
} else {
  console.log(
    '[validate-theme] Все цвета в палитре используются или являются допустимыми "неиспользуемыми"'
  )
}

console.log('Theme validation complete.')
