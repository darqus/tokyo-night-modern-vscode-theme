/**
 * Функции генерации цветов на основе базовой палитры
 * Реализует механизмы изменения яркости и прозрачности
 */

/**
 * Преобразует HEX цвет в HSL
 */
function hexToHsl(hex: string): { h: number; s: number; l: number } {
  // Удаление символа # и разбиение на компоненты
  const cleanHex = hex.replace('#', '')
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

/**
 * Преобразует HSL цвет в HEX
 */
function hslToHex(h: number, s: number, l: number): string {
  h = h / 360
  s = s / 100
  l = l / 100

  const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  let r: number, g: number, b: number

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  const toHex = (c: number): string => {
    const hex = Math.round(c * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Изменяет яркость цвета
 * @param color - исходный цвет в формате HEX
 * @param amount - величина изменения яркости от -1 до 1 (0.1 = +10% яркости)
 */
export function adjustBrightness(color: string, amount: number): string {
  const hsl = hexToHsl(color)
  let newL = hsl.l + amount * 100
  newL = Math.max(0, Math.min(100, newL)) // Ограничение от 0 до 100
  return hslToHex(hsl.h, hsl.s, newL)
}

/**
 * Делает цвет светлее
 * @param color - исходный цвет в формате HEX
 * @param amount - величина осветления от 0 до 1 (0.1 = +10% яркости)
 */
export function lighten(color: string, amount: number): string {
  return adjustBrightness(color, Math.abs(amount))
}

/**
 * Делает цвет темнее
 * @param color - исходный цвет в формате HEX
 * @param amount - величина затемнения от 0 до 1 (0.1 = -10% яркости)
 */
export function darken(color: string, amount: number): string {
  return adjustBrightness(color, -Math.abs(amount))
}

/**
 * Добавляет прозрачность к цвету
 * @param color - исходный цвет в формате HEX
 * @param alpha - значение прозрачности от 0 до 1 (0.5 = 50% прозрачности)
 */
export function withAlpha(color: string, alpha: number): string {
  const cleanHex = color.replace('#', '')
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0')
  return `#${cleanHex}${alphaHex}`
}

/**
 * Интерфейс для системы прозрачности
 */
export interface AlphaSystem {
  subtle: string // 20% (33)
  hover: string // 40% (66)
  active: string // 60% (99)
  semiOpaque: string // 80% (cc)
}

/**
 * Создает систему прозрачности на основе значений в шестнадцатеричном формате
 */
export function createAlphaSystem(): AlphaSystem {
  return {
    subtle: '33', // 20% прозрачности
    hover: '66', // 40% прозрачности
    active: '99', // 60% прозрачности
    semiOpaque: 'cc', // 80% прозрачности
  }
}

/**
 * Возвращает цвет с заданным уровнем прозрачности из системы
 * @param color - исходный цвет в формате HEX
 * @param alphaKey - ключ уровня прозрачности
 * @param alphaSystem - система прозрачности
 */
export function getColorWithAlpha(
  color: string,
  alphaKey: keyof AlphaSystem,
  alphaSystem: AlphaSystem = createAlphaSystem()
): string {
  const hex = color.replace('#', '')
  return `#${hex}${alphaSystem[alphaKey]}`
}
