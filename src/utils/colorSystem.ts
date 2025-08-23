/**
 * Deprecated: color system utilities are not used in simplified architecture.
 * Left as a stub for compatibility.
 */
export {}

import type { Hex } from '../types/palette'
import { core } from '../palette.core'
import { withAlpha } from './color'

/**
 * Система динамической генерации цветов
 * Заменяет статичные определения алгоритмической генерацией
 */

export class DynamicColorSystem {
  private baseColors: Map<string, Hex>

  constructor(baseColors: Record<string, Hex>) {
    this.baseColors = new Map(Object.entries(baseColors))
  }

  /**
   * Генерация цветов по глубине (для вложенных структур JSON, XML) - оптимизировано
   */
  generateByDepth(baseColor: Hex, depth: number, maxDepth: number = 4): Hex {
    const lightness = this.mapDepthToLightness(depth, maxDepth)
    return this.adjustLightness(baseColor, lightness)
  }

  /**
   * Генерация цветов по контексту (JSON, XML, CSS, Markdown)
   */
  generateByContext(context: 'json' | 'xml' | 'css' | 'markdown'): Hex[] {
    const contextMap = {
      json: [
        'blue',
        'cyan',
        'teal',
        'magenta',
        'yellow',
        'orange',
        'red',
        'purple',
      ],
      xml: ['red', 'blue', 'magenta', 'cyan'],
      css: ['blue', 'orange', 'green', 'purple'],
      markdown: ['blue', 'green', 'orange', 'cyan'],
    }

    const colorNames = contextMap[context] || ['blue']
    return colorNames.map(
      (name) => this.baseColors.get(name) || core.accent.blue
    )
  }

  /**
   * Генерация JSON ключей динамически (оптимизировано)
   */
  generateJsonKeys(maxDepth: number = 4): Record<string, Hex> {
    const result: Record<string, Hex> = {}
    const baseColor = this.baseColors.get('blue') || core.accent.blue

    for (let i = 0; i <= maxDepth; i++) {
      result[`jsonKey${i}`] = this.generateByDepth(baseColor, i, maxDepth)
    }

    return result
  }

  /**
   * Генерация заголовков Markdown
   */
  generateMarkdownHeaders(): Record<string, Hex> {
    const baseColor = this.baseColors.get('green') || core.accent.green
    const headers: Record<string, Hex> = {}

    for (let i = 1; i <= 6; i++) {
      const lightness = 0.9 - (i - 1) * 0.1 // от светлого к темному
      headers[`markdownH${i}`] = this.adjustLightness(baseColor, lightness)
    }

    return headers
  }

  /**
   * Генерация цветовой шкалы
   */
  generateColorScale(baseColor: Hex): Record<number, Hex> {
    const scale: Record<number, Hex> = {}
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

    steps.forEach((step, index) => {
      const lightness = 0.95 - index * 0.1 // от 0.95 до 0.05
      scale[step] = this.adjustLightness(baseColor, lightness)
    })

    return scale
  }

  private mapDepthToLightness(depth: number, maxDepth: number): number {
    // Циклическая интерполяция для создания визуального разнообразия
    const normalizedDepth = depth / maxDepth
    const cycle = Math.sin(normalizedDepth * Math.PI * 2) * 0.2 + 0.7
    return Math.max(0.3, Math.min(0.9, cycle))
  }

  private adjustLightness(color: Hex, lightness: number): Hex {
    // Простая реализация без внешних зависимостей
    return this.simpleLightnessAdjust(color, lightness)
  }

  private simpleLightnessAdjust(color: Hex, lightness: number): Hex {
    // Простая реализация без внешних зависимостей
    const hex = color.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    const factor = lightness
    const newR = Math.round(r * factor)
    const newG = Math.round(g * factor)
    const newB = Math.round(b * factor)

    return `#${newR.toString(16).padStart(2, '0')}${newG
      .toString(16)
      .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}` as Hex
  }
}

/**
 * Система состояний цветов для UI компонентов
 */
export class StateColorSystem {
  private baseColor: Hex

  constructor(baseColor: Hex) {
    this.baseColor = baseColor
  }

  /**
   * Генерация всех состояний для компонента
   */
  generateStates(): Record<string, Hex> {
    return {
      default: this.baseColor,
      hover: this.adjustBrightness(this.baseColor, 1.1),
      active: this.adjustBrightness(this.baseColor, 0.9),
      focus: withAlpha(this.baseColor, 0.66),
      disabled: withAlpha(this.baseColor, 0.4),
    }
  }

  private adjustBrightness(color: Hex, factor: number): Hex {
    // Простая реализация без внешних зависимостей
    const hex = color.replace('#', '')
    const r = Math.min(
      255,
      Math.round(parseInt(hex.substring(0, 2), 16) * factor)
    )
    const g = Math.min(
      255,
      Math.round(parseInt(hex.substring(2, 4), 16) * factor)
    )
    const b = Math.min(
      255,
      Math.round(parseInt(hex.substring(4, 6), 16) * factor)
    )

    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}` as Hex
  }
}

/**
 * Фабрика для создания динамических цветовых систем
 */
export class ColorSystemFactory {
  static createDynamicSystem(palette: Record<string, Hex>): DynamicColorSystem {
    return new DynamicColorSystem(palette)
  }

  static createStateSystem(baseColor: Hex): StateColorSystem {
    return new StateColorSystem(baseColor)
  }
}
