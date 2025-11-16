import { alpha, darken, lighten, mix } from '../../utils/color.js'
import { baseColors, chromaMain } from '../base-colors.js'
import type { ColorVariant } from '../types.js'
import { ADJUST, VARIANT_MIX_RATIOS } from './constants.js'

/**
 * Генерирует полный набор вариантов цвета (50-900) на основе базового цвета
 */
export const generateColorVariants = (baseColor: string): ColorVariant => {
  return {
    '50': lighten(baseColor, 0.4),
    '100': lighten(baseColor, 0.3),
    '200': lighten(baseColor, 0.2),
    '300': lighten(baseColor, 0.15),
    '400': lighten(baseColor, 0.1),
    '500': baseColor, // Основной цвет
    '600': darken(baseColor, 0.05),
    '700': darken(baseColor, 0.1),
    '800': darken(baseColor, 0.15),
    '900': darken(baseColor, 0.2),
  }
}

/**
 * Генерирует варианты цвета с настраиваемыми параметрами
 */
export const generateCustomVariants = (
  baseColor: string,
  config: Partial<
    Record<
      keyof ColorVariant,
      {
        lighten?: number
        darken?: number
        mix?: { color: string; ratio: number }
      }
    >
  >
): ColorVariant => {
  const variants = {} as ColorVariant

  for (const [key, options] of Object.entries(config)) {
    let color = baseColor

    if (options.lighten) {
      color = lighten(color, options.lighten)
    }
    if (options.darken) {
      color = darken(color, options.darken)
    }
    if (options.mix) {
      color = mix(color, options.mix.color, options.mix.ratio)
    }

    variants[key as keyof ColorVariant] = color
  }

  // Заполняем отсутствующие варианты стандартными значениями
  const defaults = generateColorVariants(baseColor)
  for (const key of Object.keys(defaults)) {
    if (!variants[key as keyof ColorVariant]) {
      variants[key as keyof ColorVariant] = defaults[key as keyof ColorVariant]
    }
  }

  return variants
}

/**
 * Генерирует варианты для светлых цветов
 */
export const generateLightVariants = (baseColor: string): ColorVariant => {
  return {
    '50': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.LIGHT[50]),
    '100': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.LIGHT[100]),
    '200': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.LIGHT[200]),
    '300': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.LIGHT[300]),
    '400': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.LIGHT[400]),
    '500': baseColor,
    '600': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.LIGHT[600]),
    '700': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.LIGHT[700]),
    '800': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.LIGHT[800]),
    '900': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.LIGHT[900]),
  }
}

/**
 * Генерирует варианты для темных цветов
 */
export const generateDarkVariants = (baseColor: string): ColorVariant => {
  return {
    '50': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.DARK[50]),
    '100': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.DARK[100]),
    '200': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.DARK[200]),
    '300': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.DARK[300]),
    '400': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.DARK[400]),
    '500': baseColor,
    '600': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.DARK[600]),
    '700': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.DARK[700]),
    '800': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.DARK[800]),
    '900': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.DARK[900]),
  }
}

/**
 * Генерирует варианты для нейтральных цветов
 */
export const generateNeutralVariants = (baseColor: string): ColorVariant => {
  return {
    '50': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.NEUTRAL[50]),
    '100': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.NEUTRAL[100]),
    '200': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.NEUTRAL[200]),
    '300': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.NEUTRAL[300]),
    '400': mix(baseColor, baseColors.ui.white, VARIANT_MIX_RATIOS.NEUTRAL[400]),
    '500': baseColor,
    '600': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.NEUTRAL[600]),
    '700': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.NEUTRAL[700]),
    '800': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.NEUTRAL[800]),
    '900': mix(baseColor, baseColors.ui.black, VARIANT_MIX_RATIOS.NEUTRAL[900]),
  }
}

/**
 * Определяет тип цвета и генерирует соответствующие варианты
 */
export const generateVariantsByType = (
  baseColor: string,
  colorType: 'light' | 'dark' | 'neutral'
): ColorVariant => {
  switch (colorType) {
    case 'light':
      return generateLightVariants(baseColor)
    case 'dark':
      return generateDarkVariants(baseColor)
    case 'neutral':
      return generateNeutralVariants(baseColor)
    default:
      return generateColorVariants(baseColor)
  }
}

/**
 * Создает градиент из вариантов цвета
 */
export const createGradientFromVariants = (
  variants: ColorVariant,
  startKey: keyof ColorVariant = '50',
  endKey: keyof ColorVariant = '900',
  angle: number = 45
): string => {
  return `linear-gradient(${angle}deg, ${variants[startKey]}, ${variants[endKey]})`
}

/**
 * Получает контрастный вариант для текста
 */
export const getContrastVariant = (variants: ColorVariant): string => {
  // Для темных фонов используем светлые варианты
  return variants['100'] || variants['50']
}

/**
 * Получает акцентный вариант
 */
export const getAccentVariant = (variants: ColorVariant): string => {
  return variants['600'] || variants['500']
}

/**
 * Получает субтельный вариант
 */
export const getSubtleVariant = (variants: ColorVariant): string => {
  return variants['100'] || variants['200']
}

/**
 * Валидирует варианты цвета
 */
export const validateVariants = (variants: ColorVariant): boolean => {
  const requiredKeys: Array<keyof ColorVariant> = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]

  for (const key of requiredKeys) {
    const color = variants[key]
    if (!color || typeof color !== 'string') {
      return false
    }

    // Простая проверка формата hex
    if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
      return false
    }
  }

  return true
}

/**
 * Кэш для сгенерированных вариантов
 */
const variantsCache = new Map<string, ColorVariant>()

/**
 * Генерирует варианты с кэшированием
 */
export const getCachedVariants = (
  baseColor: string,
  colorType: 'light' | 'dark' | 'neutral' = 'neutral',
  customConfig?: Partial<Record<keyof ColorVariant, unknown>>
): ColorVariant => {
  const cacheKey = `${baseColor}-${colorType}-${JSON.stringify(customConfig || {})}`

  if (variantsCache.has(cacheKey)) {
    return variantsCache.get(cacheKey) as ColorVariant
  }

  let variants: ColorVariant

  if (customConfig) {
    variants = generateCustomVariants(
      baseColor,
      customConfig as Partial<
        Record<
          keyof ColorVariant,
          {
            lighten?: number
            darken?: number
            mix?: { color: string; ratio: number }
          }
        >
      >
    )
  } else {
    variants = generateVariantsByType(baseColor, colorType)
  }

  variantsCache.set(cacheKey, variants)
  return variants
}

/**
 * Очищает кэш вариантов
 */
export const clearVariantsCache = (): void => {
  variantsCache.clear()
}

/**
 * Получает размер кэша
 */
export const getVariantsCacheSize = (): number => {
  return variantsCache.size
}

/**
 * Создает варианты для конкретного use case
 */
export const createUseCaseVariants = {
  // Для кнопок
  button: (baseColor: string) => ({
    background: baseColor,
    hover: lighten(baseColor, 0.1),
    active: lighten(baseColor, 0.15),
    disabled: `${baseColor}80`, // 50% opacity
  }),

  // Для полей ввода
  input: (baseColor: string) => ({
    border: baseColor,
    focus: lighten(baseColor, ADJUST.STRONG),
    error: chromaMain.red,
    disabled: alpha(baseColor, 0.25), // 25% opacity
  }),

  // Для фона
  background: (baseColor: string) => ({
    primary: baseColor,
    elevated: lighten(baseColor, 0.02),
    inset: darken(baseColor, 0.02),
    overlay: darken(baseColor, 0.04),
  }),

  // Для текста
  text: (baseColor: string) => ({
    primary: baseColor,
    secondary: lighten(baseColor, 0.2),
    muted: lighten(baseColor, 0.4),
    disabled: `${baseColor}60`, // 40% opacity
  }),
}
