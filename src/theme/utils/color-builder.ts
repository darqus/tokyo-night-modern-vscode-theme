import { compatiblePalette } from '../palette/index.js'

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
   * Например: addGroup('button', { background: '#fff', foreground: '#000' })
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
 */
export const c = compatiblePalette
