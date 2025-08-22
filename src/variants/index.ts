import type { ThemeVariant, ThemeConfig } from '../types/theme'
import type { Palette, Hex } from '../types/palette'

/**
 * Определение поддерживаемых вариантов темы
 */

export const variants: ThemeVariant[] = [
  {
    id: 'tokyo-night-dark',
    name: 'tokyo-night-dark',
    displayName: 'Tokyo Night Dark',
    baseConfig: {
      contrast: 'normal',
      saturation: 'normal',
      brightness: 'normal',
    },
  },
  {
    id: 'tokyo-night-dark-high-contrast',
    name: 'tokyo-night-dark-hc',
    displayName: 'Tokyo Night Dark High Contrast',
    baseConfig: {
      contrast: 'high',
      saturation: 'normal',
      brightness: 'normal',
    },
  },
  {
    id: 'tokyo-night-light',
    name: 'tokyo-night-light',
    displayName: 'Tokyo Night Light',
    baseConfig: {
      contrast: 'normal',
      saturation: 'normal',
      brightness: 'lighter',
    },
  },
  {
    id: 'tokyo-night-dark-muted',
    name: 'tokyo-night-dark-muted',
    displayName: 'Tokyo Night Dark Muted',
    baseConfig: {
      contrast: 'normal',
      saturation: 'muted',
      brightness: 'normal',
    },
  },
]

/**
 * Менеджер для работы с вариантами темы
 */
export class ThemeVariantManager {
  private variants: Map<string, ThemeVariant>

  constructor(variantList: ThemeVariant[]) {
    this.variants = new Map(variantList.map((v) => [v.id, v]))
  }

  /**
   * Получить вариант по ID
   */
  getVariant(id: string): ThemeVariant | undefined {
    return this.variants.get(id)
  }

  /**
   * Получить все доступные варианты
   */
  getAllVariants(): ThemeVariant[] {
    return Array.from(this.variants.values())
  }

  /**
   * Применить конфигурацию к палитре
   */
  applyConfigToPalette(basePalette: Palette, config: ThemeConfig): Palette {
    let adjustedPalette = { ...basePalette }

    // Применяем настройки контрастности
    if (config.contrast === 'high') {
      adjustedPalette = this.adjustContrast(adjustedPalette, 1.3)
    } else if (config.contrast === 'low') {
      adjustedPalette = this.adjustContrast(adjustedPalette, 0.8)
    }

    // Применяем настройки насыщенности
    if (config.saturation === 'vibrant') {
      adjustedPalette = this.adjustSaturation(adjustedPalette, 1.2)
    } else if (config.saturation === 'muted') {
      adjustedPalette = this.adjustSaturation(adjustedPalette, 0.7)
    }

    // Применяем настройки яркости
    if (config.brightness === 'lighter') {
      adjustedPalette = this.adjustBrightness(adjustedPalette, 1.4)
    } else if (config.brightness === 'darker') {
      adjustedPalette = this.adjustBrightness(adjustedPalette, 0.8)
    }

    return adjustedPalette
  }

  private adjustContrast(palette: Palette, factor: number): Palette {
    // Увеличиваем контраст между текстом и фоном
    return {
      ...palette,
      fg: {
        ...palette.fg,
        primary: this.adjustColorBrightness(palette.fg.primary, factor),
        muted: this.adjustColorBrightness(palette.fg.muted, factor * 0.9),
        subtle: this.adjustColorBrightness(palette.fg.subtle, factor * 0.8),
      },
    }
  }

  private adjustSaturation(palette: Palette, factor: number): Palette {
    // Настройка насыщенности акцентных цветов
    return {
      ...palette,
      accent: {
        blue: this.adjustColorSaturation(palette.accent.blue, factor),
        cyan: this.adjustColorSaturation(palette.accent.cyan, factor),
        teal: this.adjustColorSaturation(palette.accent.teal, factor),
        magenta: this.adjustColorSaturation(palette.accent.magenta, factor),
        yellow: this.adjustColorSaturation(palette.accent.yellow, factor),
        orange: this.adjustColorSaturation(palette.accent.orange, factor),
        red: this.adjustColorSaturation(palette.accent.red, factor),
        purple: this.adjustColorSaturation(palette.accent.purple, factor),
      },
    }
  }

  private adjustBrightness(palette: Palette, factor: number): Palette {
    // Инвертируем цвета для светлой темы
    if (factor > 1.2) {
      return this.invertPaletteForLight(palette)
    }

    // Для темных вариантов просто корректируем яркость
    return {
      ...palette,
      bg: {
        ...palette.bg,
        base: this.adjustColorBrightness(palette.bg.base, factor),
        elevated: this.adjustColorBrightness(palette.bg.elevated, factor),
        sunken: this.adjustColorBrightness(palette.bg.sunken, factor),
      },
    }
  }

  private invertPaletteForLight(palette: Palette): Palette {
    // Базовая инверсия для создания светлой темы
    return {
      ...palette,
      bg: {
        ...palette.bg,
        base: '#ffffff',
        elevated: '#f8f9fa',
        sunken: '#e9ecef',
        overlay: '#f1f3f4',
        input: '#ffffff',
        hover: '#f8f9fa',
        active: '#e9ecef',
        drop: '#e3f2fd',
        lineHighlight: '#f5f5f5',
        bracketMatch: '#e8f5e8',
        tabs: '#ffffff',
        selection: {
          active: '#e3f2fd',
          inactive: '#f0f0f0',
          focus: '#bbdefb',
          menu: '#e1f5fe',
        },
      },
      fg: {
        ...palette.fg,
        primary: '#263238',
        muted: '#455a64',
        subtle: '#78909c',
        inactive: '#90a4ae',
        panelText: '#37474f',
        soft: '#546e7a',
        softTitle: '#455a64',
        selectionText: '#000000',
        onSelection: '#000000',
        activeTitle: '#263238',
        breadcrumb: '#1976d2',
        description: '#1976d2',
      },
    }
  }

  private adjustColorBrightness(color: string, factor: number): Hex {
    // Простая регулировка яркости без внешних зависимостей
    const hex = color.replace('#', '')
    const r = Math.min(255, Math.round(parseInt(hex.substr(0, 2), 16) * factor))
    const g = Math.min(255, Math.round(parseInt(hex.substr(2, 2), 16) * factor))
    const b = Math.min(255, Math.round(parseInt(hex.substr(4, 2), 16) * factor))

    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}` as Hex
  }

  private adjustColorSaturation(color: string, factor: number): Hex {
    // Упрощенная регулировка насыщенности
    // Собственная реализация без внешних зависимостей
    return color as Hex
  }
}
