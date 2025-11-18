import { universalPalette } from '../palette/index.js'

/**
 * Builder для упрощения создания цветовых правил
 */
export class ColorRuleBuilder {
  private rules: Record<string, string> = {}

  /**
   * Добавляет одно правило
   */
  add = (key: string, value: string): this => {
    this.rules[key] = value
    return this
  }

  /**
   * Добавляет группу правил с общим префиксом
   * Например: addGroup('button', { background: 'p.background.base.main', foreground: 'p.foreground.primary.main' })
   * Создаст: button.background, button.foreground
   */
  addGroup = (prefix: string, rules: Record<string, string>): this => {
    for (const [key, value] of Object.entries(rules)) {
      this.rules[`${prefix}.${key}`] = value
    }
    return this
  }

  /**
   * Добавляет несколько правил с одинаковым значением
   */
  addMultiple = (keys: string[], value: string): this => {
    for (const key of keys) {
      this.rules[key] = value
    }
    return this
  }

  /**
   * Возвращает финальный объект с правилами
   */
  build = (): Record<string, string> => ({ ...this.rules })
}

/**
 * Фабрика для быстрого создания builder
 */
export const colorRules = (): ColorRuleBuilder => new ColorRuleBuilder()

/**
 * Вспомогательная функция для быстрого доступа к цветам палитры
 * Создаем сокращенные алиасы для удобства использования
 */
export const c = {
  get bg() {
    return universalPalette.background.base
  },
  get fg() {
    return universalPalette.foreground.primary
  },
  get ui() {
    return universalPalette.ui
  },
  get blue() {
    return universalPalette.chromatic.blue
  },
  get cyan() {
    return universalPalette.chromatic.cyan
  },
  get teal() {
    return universalPalette.chromatic.teal
  },
  get green() {
    return universalPalette.chromatic.green
  },
  get purple() {
    return universalPalette.chromatic.purple
  },
  get orange() {
    return universalPalette.chromatic.orange
  },
  get yellow() {
    return universalPalette.chromatic.yellow
  },
  get red() {
    return universalPalette.chromatic.red
  },
  get pink() {
    return universalPalette.chromatic.pink
  },
  get rose() {
    return universalPalette.chromatic.rose
  },
  get neutral() {
    return universalPalette.chromatic.neutral
  },
  get indigo() {
    return universalPalette.chromatic.indigo
  },
  get lime() {
    return universalPalette.chromatic.lime
  },
  get amber() {
    return universalPalette.chromatic.amber
  },
  get emerald() {
    return universalPalette.chromatic.emerald
  },
  get success() {
    return universalPalette.semantic.success
  },
  get warning() {
    return universalPalette.semantic.warning
  },
  get error() {
    return universalPalette.semantic.error
  },
  get info() {
    return universalPalette.semantic.info
  },
  get accent() {
    return universalPalette.semantic.accent
  },
  get shadow() {
    return universalPalette.shadow
  },
  // Добавляем остальные свойства универсальной палитры
  ...universalPalette,
}
