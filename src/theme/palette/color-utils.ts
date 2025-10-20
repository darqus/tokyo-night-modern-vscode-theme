/**
 * Утилиты работы с цветами
 * Включает функции для проверки контрастности по WCAG и другие цветовые утилиты
 */

/**
 * Преобразует HEX цвет в RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace('#', '')
  const r = parseInt(cleanHex.substring(0, 2), 16)
  const g = parseInt(cleanHex.substring(2, 4), 16)
  const b = parseInt(cleanHex.substring(4, 6), 16)
  return { r, g, b }
}

/**
 * Вычисляет относительную яркость цвета по формуле WCAG
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
export function getLuminance(r: number, g: number, b: number): number {
  // Нормализация значений RGB
  const RsRGB = r / 255
  const GsRGB = g / 255
  const BsRGB = b / 255

  // Преобразование в линейную светимость
  const R =
    RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4)
  const G =
    GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4)
  const B =
    BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4)

  // Вычисление относительной яркости
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

/**
 * Вычисляет коэффициент контрастности между двумя цветами по WCAG
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b)
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b)

  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)

  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Проверяет, соответствует ли контрастность цветов требованиям WCAG
 * @param foreground - цвет переднего плана
 * @param background - цвет фона
 * @param level - уровень (AA или AAA)
 * @returns true, если контрастность соответствует требованиям
 */
export function meetsWCAGContrast(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  const ratio = getContrastRatio(foreground, background)
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7.0
}

/**
 * Проверяет, является ли цвет "светлым" на основе яркости
 * @param color - цвет в формате HEX
 * @returns true, если цвет светлый
 */
export function isLightColor(color: string): boolean {
  const rgb = hexToRgb(color)
  const luminance = getLuminance(rgb.r, rgb.g, rgb.b)
  return luminance > 0.5
}

/**
 * Проверяет, является ли цвет "темным" на основе яркости
 * @param color - цвет в формате HEX
 * @returns true, если цвет темный
 */
export function isDarkColor(color: string): boolean {
  return !isLightColor(color)
}

/**
 * Нормализует HEX цвет в формат #rrggbb
 * @param color - цвет в формате HEX
 * @returns нормализованный цвет в формате #rrggbb
 */
export function normalizeHexColor(color: string): string {
  let cleanColor = color.replace('#', '').toLowerCase()

  // Проверка, является ли строка действительным шестнадцатеричным значением
  if (!/^[0-9a-f]{3,8}$/.test(cleanColor)) {
    throw new Error(`Invalid hex color: ${color}`)
  }

  // Обработка сокращенных форм (#rgb, #rgba)
  if (cleanColor.length === 3) {
    cleanColor = cleanColor
      .split('')
      .map((char) => char + char)
      .join('')
  } else if (cleanColor.length === 4) {
    // Если есть альфа-канал в сокращенной форме (#rgba), расширяем до #rrggbbaa
    cleanColor = cleanColor
      .split('')
      .map((char) => char + char)
      .join('')
  } else if (cleanColor.length === 6) {
    // Полная форма (#rrggbb), ничего не меняем
  } else if (cleanColor.length === 8) {
    // Полная форма с альфа-каналом (#rrggbbaa), ничего не меняем
  } else {
    throw new Error(`Invalid hex color length: ${color}`)
  }

  // Убедимся, что у нас 6 или 8 символов (без учета альфа-канала для возврата)
  if (cleanColor.length === 8) {
    // Возвращаем только 6 символов (без альфа-канала)
    cleanColor = cleanColor.substring(0, 6)
  }

  return `#${cleanColor}`
}
