/**
 * Deprecated: UI component manager removed to simplify theme generation.
 * This stub remains intentionally empty.
 */
export {}

import type {
  UIComponent,
  ComponentStates,
  ComponentStyle,
} from '../types/theme'
import type { Hex } from '../types/palette'
import { palette } from '../palette'
import { withAlpha } from '../utils/color'

/**
 * Унифицированная система UI компонентов
 * Стандартизирует состояния и стили для всех элементов интерфейса
 */

/**
 * Базовая фабрика для создания состояний компонентов
 */
export class ComponentStateFactory {
  static createStandardStates(
    baseBackground: Hex,
    baseForeground: Hex,
    accentColor?: Hex
  ): ComponentStates {
    const accent = accentColor || palette.brand.primary

    return {
      default: {
        background: baseBackground,
        foreground: baseForeground,
        border: 'transparent',
      },
      hover: {
        background: this.lighten(baseBackground, 0.1),
        foreground: baseForeground,
        border: 'transparent',
      },
      active: {
        background: this.darken(baseBackground, 0.1),
        foreground: baseForeground,
        border: 'transparent',
      },
      focus: {
        background: baseBackground,
        foreground: baseForeground,
        border: withAlpha(accent, 0.66),
      },
      disabled: {
        background: palette.bg.elevated,
        foreground: palette.fg.inactive,
        border: 'transparent',
      },
    }
  }

  private static lighten(color: Hex, amount: number): Hex {
    // Упрощенная реализация осветления
    const hex = color.replace('#', '')
    const r = Math.min(
      255,
      parseInt(hex.substr(0, 2), 16) + Math.round(255 * amount)
    )
    const g = Math.min(
      255,
      parseInt(hex.substr(2, 2), 16) + Math.round(255 * amount)
    )
    const b = Math.min(
      255,
      parseInt(hex.substr(4, 2), 16) + Math.round(255 * amount)
    )

    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}` as Hex
  }

  private static darken(color: Hex, amount: number): Hex {
    // Упрощенная реализация затемнения
    const hex = color.replace('#', '')
    const r = Math.max(
      0,
      parseInt(hex.substr(0, 2), 16) - Math.round(255 * amount)
    )
    const g = Math.max(
      0,
      parseInt(hex.substr(2, 2), 16) - Math.round(255 * amount)
    )
    const b = Math.max(
      0,
      parseInt(hex.substr(4, 2), 16) - Math.round(255 * amount)
    )

    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}` as Hex
  }
}

/**
 * Компонент кнопки
 */
export const buttonComponent: UIComponent = {
  name: 'button',
  states: {
    default: {
      background: palette.brand.button.primary,
      foreground: palette.fg.selectionText,
      border: 'transparent',
    },
    hover: {
      background: palette.brand.button.hover,
      foreground: palette.fg.selectionText,
      border: 'transparent',
    },
    active: {
      background: withAlpha(palette.brand.button.primary, 0.8),
      foreground: palette.fg.selectionText,
      border: 'transparent',
    },
    focus: {
      background: palette.brand.button.primary,
      foreground: palette.fg.selectionText,
      border: palette.ui.badge.base,
    },
    disabled: {
      background: palette.bg.elevated,
      foreground: palette.fg.inactive,
      border: 'transparent',
    },
  },
}

/**
 * Компонент поля ввода
 */
export const inputComponent: UIComponent = {
  name: 'input',
  states: ComponentStateFactory.createStandardStates(
    palette.bg.input,
    palette.fg.primary,
    palette.brand.primary
  ),
}

/**
 * Компонент списка
 */
export const listComponent: UIComponent = {
  name: 'list',
  states: {
    default: {
      background: 'transparent',
      foreground: palette.fg.primary,
      border: 'transparent',
    },
    hover: {
      background: palette.ui.list.hoverBg,
      foreground: palette.fg.primary,
      border: 'transparent',
    },
    active: {
      background: palette.bg.selection.active,
      foreground: palette.fg.onSelection,
      border: 'transparent',
    },
    focus: {
      background: palette.bg.selection.focus,
      foreground: palette.fg.onSelection,
      border: withAlpha(palette.brand.primary, 0.5),
    },
    disabled: {
      background: 'transparent',
      foreground: palette.fg.inactive,
      border: 'transparent',
    },
  },
}

/**
 * Компонент панели
 */
export const panelComponent: UIComponent = {
  name: 'panel',
  states: ComponentStateFactory.createStandardStates(
    palette.bg.elevated,
    palette.fg.panelText
  ),
}

/**
 * Компонент бейджа
 */
export const badgeComponent: UIComponent = {
  name: 'badge',
  states: {
    default: {
      background: palette.ui.badge.base,
      foreground: palette.ui.badge.fg,
      border: 'transparent',
    },
    hover: {
      background: withAlpha(palette.ui.badge.base, 0.8),
      foreground: palette.ui.badge.fg,
      border: 'transparent',
    },
    active: {
      background: withAlpha(palette.ui.badge.base, 0.9),
      foreground: palette.ui.badge.fg,
      border: 'transparent',
    },
    focus: {
      background: palette.ui.badge.base,
      foreground: palette.ui.badge.fg,
      border: withAlpha(palette.brand.primary, 0.5),
    },
  },
}

/**
 * Менеджер компонентов UI
 */
export class UIComponentManager {
  private components: Map<string, UIComponent>

  constructor() {
    this.components = new Map([
      ['button', buttonComponent],
      ['input', inputComponent],
      ['list', listComponent],
      ['panel', panelComponent],
      ['badge', badgeComponent],
    ])
  }

  /**
   * Получить компонент по имени
   */
  getComponent(name: string): UIComponent | undefined {
    return this.components.get(name)
  }

  /**
   * Добавить новый компонент
   */
  addComponent(component: UIComponent): void {
    this.components.set(component.name, component)
  }

  /**
   * Генерация CSS переменных для компонента
   */
  generateCSSVariables(componentName: string): Record<string, string> {
    const component = this.getComponent(componentName)
    if (!component) return {}

    const variables: Record<string, string> = {}

    Object.entries(component.states).forEach(([state, style]) => {
      if (style.background) {
        variables[`--${componentName}-${state}-bg`] = style.background
      }
      if (style.foreground) {
        variables[`--${componentName}-${state}-fg`] = style.foreground
      }
      if (style.border && style.border !== 'transparent') {
        variables[`--${componentName}-${state}-border`] = style.border
      }
    })

    return variables
  }

  /**
   * Генерация VS Code цветов для компонента
   */
  generateVSCodeColors(componentName: string): Record<string, string> {
    const component = this.getComponent(componentName)
    if (!component) return {}

    const colors: Record<string, string> = {}

    // Маппинг компонентов на VS Code цвета
    const mapping = this.getVSCodeMapping(componentName)

    Object.entries(component.states).forEach(([state, style]) => {
      const vsCodeKeys = mapping[state] || []
      vsCodeKeys.forEach((key) => {
        if (style.background && key.includes('Background')) {
          colors[key] = style.background
        }
        if (style.foreground && key.includes('Foreground')) {
          colors[key] = style.foreground
        }
        if (style.border && key.includes('Border')) {
          colors[key] = style.border
        }
      })
    })

    return colors
  }

  private getVSCodeMapping(componentName: string): Record<string, string[]> {
    const mappings: Record<string, Record<string, string[]>> = {
      button: {
        default: ['button.background', 'button.foreground'],
        hover: ['button.hoverBackground'],
        focus: ['button.focusBorder'],
      },
      input: {
        default: ['input.background', 'input.foreground', 'input.border'],
        focus: ['input.focusBorder'],
        disabled: ['input.placeholderForeground'],
      },
      list: {
        default: ['list.foreground'],
        hover: ['list.hoverBackground', 'list.hoverForeground'],
        active: [
          'list.activeSelectionBackground',
          'list.activeSelectionForeground',
        ],
        focus: ['list.focusBackground', 'list.focusForeground'],
      },
    }

    return mappings[componentName] || {}
  }
}
