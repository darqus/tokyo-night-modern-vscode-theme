import type { Palette } from '../palette/index.js'
import type { SemanticTokenStyle, TokenColor } from '../types/index.js'

/**
 * Тип для цветового значения - может быть строкой или функцией
 */
export type ColorValue = string | ((p: Palette) => string)

/**
 * Тип для настроек токена
 */
export interface TokenSettings {
  foreground?: ColorValue
  background?: ColorValue
  fontStyle?: 'bold' | 'italic' | 'underline' | 'bold italic' | ''
}

/**
 * Конфигурация для UI цветов
 */
export interface UIColorConfig {
  /**
   * Прямые правила: ключ -> значение
   */
  rules?: Record<string, ColorValue>

  /**
   * Группы правил с общим префиксом
   * Например: { 'button': { background: '#fff', foreground: '#000' } }
   * Создаст: button.background, button.foreground
   */
  groups?: Record<string, Record<string, ColorValue>>

  /**
   * Множественные ключи с одним значением
   * Например: [['key1', 'key2'], '#fff']
   */
  multiple?: Array<[string[], ColorValue]>
}

/**
 * Конфигурация для токенов подсветки синтаксиса
 */
export interface TokenColorConfig {
  /**
   * Название токена (для отладки)
   */
  name: string

  /**
   * Область применения (scopes)
   */
  scope: string | string[]

  /**
   * Настройки цвета
   */
  settings: TokenSettings
}

/**
 * Конфигурация для семантических токенов
 */
export interface SemanticTokenConfig {
  /**
   * Правила: имя токена -> настройки
   */
  rules: Record<string, SemanticTokenStyle | ((p: Palette) => SemanticTokenStyle)>
}

/**
 * Полная конфигурация темы
 */
export interface ThemeConfig {
  /**
   * UI цвета
   */
  ui: {
    core?: UIColorConfig
    buttons?: UIColorConfig
    inputs?: UIColorConfig
    checkboxes?: UIColorConfig
    sidebar?: UIColorConfig
    lists?: UIColorConfig
    editor?: UIColorConfig
    diff?: UIColorConfig
    tabs?: UIColorConfig
    panels?: UIColorConfig
    terminal?: UIColorConfig
    git?: UIColorConfig
    misc?: UIColorConfig
  }

  /**
   * Токены подсветки синтаксиса
   */
  tokens: {
    comments?: TokenColorConfig[]
    basic?: TokenColorConfig[]
    code?: TokenColorConfig[]
    css?: TokenColorConfig[]
    markup?: TokenColorConfig[]
    markdown?: TokenColorConfig[]
    modern?: TokenColorConfig[]
  }

  /**
   * Семантические токены
   */
  semantic: {
    variables?: SemanticTokenConfig
    functions?: SemanticTokenConfig
    types?: SemanticTokenConfig
    modifiers?: SemanticTokenConfig
    literals?: SemanticTokenConfig
    frameworks?: SemanticTokenConfig
  }
}

/**
 * Builder для создания UI конфигурации
 */
export class UIConfigBuilder {
  private config: UIColorConfig = {}

  /**
   * Добавляет одно правило
   */
  rule(key: string, value: ColorValue): this {
    if (!this.config.rules) this.config.rules = {}
    this.config.rules[key] = value
    return this
  }

  /**
   * Добавляет группу правил с префиксом
   */
  group(prefix: string, rules: Record<string, ColorValue>): this {
    if (!this.config.groups) this.config.groups = {}
    this.config.groups[prefix] = rules
    return this
  }

  /**
   * Добавляет множественные ключи с одним значением
   */
  multiple(keys: string[], value: ColorValue): this {
    if (!this.config.multiple) this.config.multiple = []
    this.config.multiple.push([keys, value])
    return this
  }

  /**
   * Возвращает финальную конфигурацию
   */
  build(): UIColorConfig {
    return this.config
  }
}

/**
 * Фабричная функция для создания UI конфигурации
 */
export function uiConfig(): UIConfigBuilder {
  return new UIConfigBuilder()
}

/**
 * Помощник для создания токена
 */
export function createToken(
  name: string,
  scope: string | string[],
  settings: TokenSettings
): TokenColorConfig {
  return { name, scope, settings }
}

/**
 * Помощник для создания семантической конфигурации
 */
export function semanticConfig(
  rules: Record<string, SemanticTokenStyle | ((p: Palette) => SemanticTokenStyle)>
): SemanticTokenConfig {
  return { rules }
}
