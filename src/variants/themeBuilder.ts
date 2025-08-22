import { palette } from '../palette'
import { core } from '../palette.core'
import { buildColors } from '../build'
import { tokenColors } from '../tokenColors'
import { semanticTokenColors } from '../semanticTokenColors'

/**
 * Типы вариантов темы согласно документации VS Code
 */
export type ThemeVariantType =
  | 'standard' // Стандартная тема
  | 'high-contrast' // Высококонтрастная (для accessibility)
  | 'minimal' // Минималистичная
  | 'light' // Светлая версия

/**
 * Интерфейс конфигурации варианта темы
 */
export interface ThemeVariantConfig {
  name: string
  displayName: string
  type: 'dark' | 'light' | 'hc-dark' | 'hc-light'
  variant: ThemeVariantType
  description?: string
}

/**
 * Строитель тем с поддержкой различных вариантов
 */
export class ThemeBuilder {
  /**
   * Создать стандартную тему
   */
  static buildStandard(): any {
    return {
      name: 'Tokyo Night Lod',
      displayName: 'Tokyo Night Lod',
      author: 'lod',
      maintainers: ['lod'],
      type: 'dark',
      semanticClass: 'tokyo-night',
      semanticTokenColors: semanticTokenColors,
      colors: buildColors(),
      tokenColors: tokenColors,
    }
  }

  /**
   * Создать высококонтрастную тему
   */
  static buildHighContrast(): any {
    const baseColors = buildColors()

    // Увеличиваем контрастность для accessibility
    const highContrastColors = {
      ...baseColors,

      // Увеличиваем контраст текста
      'editor.foreground': core.text.selection,
      foreground: core.text.selection,

      // Делаем фон более тёмным
      'editor.background': '#000000',
      'activityBar.background': '#000000',
      'sideBar.background': '#000000',
      'statusBar.background': '#000000',
      'titleBar.activeBackground': '#000000',

      // Увеличиваем контраст границ
      'activityBar.border': '#ffffff33',
      'sideBar.border': '#ffffff33',
      'editor.lineHighlightBorder': '#ffffff1a',

      // Более контрастные цвета выделения
      'editor.selectionBackground': '#0066cc99',
      'editor.selectionHighlightBackground': '#00ffff33',

      // Более яркие акцентные цвета
      'activityBar.activeBorder': '#00ffff',
      'tab.activeBorder': '#00ffff',
      'panelTitle.activeBorder': '#00ffff',

      // Контрастные кнопки
      'button.background': '#0066cc',
      'button.foreground': core.text.selection,
      'button.hoverBackground': '#0080ff',

      // Контрастные поля ввода
      'input.background': '#1a1a1a',
      'input.foreground': core.text.selection,
      'input.border': '#ffffff66',
    }

    // Корректируем семантические токены для лучшего контраста
    const highContrastSemanticTokens = {
      ...semanticTokenColors,
      variable: { foreground: core.text.selection },
      function: { foreground: '#00ffff' },
      class: { foreground: '#ffff00' },
      type: { foreground: '#ff00ff' },
      keyword: { foreground: '#00ff00' },
      string: { foreground: '#ff8000' },
      comment: { foreground: '#808080' },
    }

    return {
      name: 'Tokyo Night Lod High Contrast',
      displayName: 'Tokyo Night Lod High Contrast',
      author: 'lod',
      type: 'hc-dark', // Высококонтрастная тёмная тема
      semanticClass: 'tokyo-night-hc',
      semanticTokenColors: highContrastSemanticTokens,
      colors: highContrastColors,
      tokenColors: this.adjustTokenColorsForHighContrast(tokenColors),
    }
  }

  /**
   * Создать минималистичную тему
   */
  static buildMinimal(): any {
    const baseColors = buildColors()

    // Убираем лишние украшения для минималистичного стиля
    const minimalColors = {
      ...baseColors,

      // Убираем границы и рамки
      'activityBar.border': core.ui.shadow,
      'sideBar.border': core.ui.shadow,
      'tab.border': core.ui.shadow,
      'panel.border': core.ui.shadow,
      'statusBar.border': core.ui.shadow,
      'titleBar.border': core.ui.shadow,

      // Убираем активные границы
      'tab.activeBorder': core.ui.shadow,
      'panelTitle.activeBorder': core.ui.shadow,
      'activityBar.activeBorder': core.ui.shadow,

      // Минимальные цвета выделения
      'editor.lineHighlightBackground': core.ui.shadow,
      'editor.lineHighlightBorder': core.ui.shadow,

      // Упрощённые цвета hover
      'list.hoverBackground': core.ui.shadow,
      'tab.hoverBackground': core.ui.shadow,

      // Убираем тени
      'widget.shadow': core.ui.shadow,
      'scrollbar.shadow': core.ui.shadow,

      // Приглушённые цвета значков
      'activityBarBadge.background': palette.fg.subtle,
      'badge.background': palette.fg.subtle,
    }

    // Упрощённые семантические токены
    const minimalSemanticTokens = {
      // Минимальный набор цветов для синтаксиса
      variable: { foreground: palette.fg.primary },
      function: { foreground: palette.accent.blue },
      keyword: { foreground: palette.accent.purple },
      string: { foreground: palette.token.string },
      comment: { foreground: palette.token.comment },
    }

    return {
      name: 'Tokyo Night Lod Minimal',
      displayName: 'Tokyo Night Lod Minimal',
      author: 'lod',
      type: 'dark',
      semanticClass: 'tokyo-night-minimal',
      semanticTokenColors: minimalSemanticTokens,
      colors: minimalColors,
      tokenColors: this.simplifyTokenColors(tokenColors),
    }
  }

  /**
   * Создать светлую тему
   */
  static buildLight(): any {
    const baseColors = buildColors()

    // Инвертируем цвета для светлой темы
    const lightColors = {
      // Базовые цвета
      foreground: '#263238',
      descriptionForeground: '#455a64',
      errorForeground: '#b71c1c',

      // Фоны
      'editor.background': '#ffffff',
      'editor.foreground': '#263238',
      'activityBar.background': '#f5f5f5',
      'activityBar.foreground': '#263238',
      'sideBar.background': '#fafafa',
      'sideBar.foreground': '#37474f',
      'statusBar.background': '#e0e0e0',
      'statusBar.foreground': '#263238',
      'titleBar.activeBackground': '#f5f5f5',
      'titleBar.activeForeground': '#263238',

      // Границы
      'activityBar.border': '#e0e0e0',
      'sideBar.border': '#e0e0e0',
      'panel.border': '#e0e0e0',
      'tab.border': '#e0e0e0',

      // Активные элементы
      'activityBar.activeBorder': '#1976d2',
      'tab.activeBorder': '#1976d2',
      'activityBar.activeBackground': '#e3f2fd',

      // Выделение
      'editor.selectionBackground': '#b3d4fc',
      'editor.lineHighlightBackground': '#f5f5f5',

      // Кнопки
      'button.background': '#1976d2',
      'button.foreground': core.text.selection,
      'button.hoverBackground': '#1565c0',

      // Поля ввода
      'input.background': '#ffffff',
      'input.foreground': '#263238',
      'input.border': '#bdbdbd',
      // Видимая граница фокуса для улучшенной доступности
      focusBorder: '#1976d2',
    }

    // Светлые семантические токены
    const lightSemanticTokens = {
      ...semanticTokenColors,
      variable: { foreground: '#263238' },
      function: { foreground: '#1976d2' },
      class: { foreground: '#7b1fa2' },
      keyword: { foreground: '#6a1b9a' },
      string: { foreground: '#388e3c' },
      comment: { foreground: '#757575' },
      number: { foreground: '#f57c00' },
    }

    return {
      name: 'Tokyo Night Lod Light',
      displayName: 'Tokyo Night Lod Light',
      author: 'lod',
      type: 'light',
      semanticClass: 'tokyo-night-light',
      semanticTokenColors: lightSemanticTokens,
      colors: lightColors,
      tokenColors: this.adjustTokenColorsForLight(tokenColors),
    }
  }

  /**
   * Создать тему accessibility
   */
  static buildAccessibility(): any {
    const baseColors = buildColors()

    // Специальные настройки для людей с ограниченными возможностями
    const accessibilityColors = {
      ...baseColors,

      // WCAG AAA compliance - коэффициент контрастности 7:1
      foreground: core.text.selection,
      'editor.foreground': core.text.selection,
      'activityBar.foreground': core.text.selection,
      'sideBar.foreground': core.text.selection,
      'statusBar.foreground': core.text.selection,

      // Более заметные границы
      focusBorder: '#ffff00', // Жёлтая граница фокуса
      'activityBar.activeBorder': '#ffff00',
      'tab.activeBorder': '#ffff00',
      'button.border': '#ffffff',

      // Контрастные кнопки
      'button.background': '#0066cc',
      'button.foreground': core.text.selection,
      'button.hoverBackground': '#0080ff',

      // Заметные цвета состояний
      'inputValidation.errorBorder': '#ff0000',
      'inputValidation.warningBorder': '#ffaa00',
      'inputValidation.infoBorder': '#00aaff',

      // Контрастные цвета Git
      'gitDecoration.addedResourceForeground': '#00ff00',
      'gitDecoration.modifiedResourceForeground': '#ffff00',
      'gitDecoration.deletedResourceForeground': '#ff0000',

      // Контрастное выделение
      'editor.selectionBackground': '#0066cc99',
      'editor.wordHighlightBackground': '#ffff0066',
      'editor.wordHighlightStrongBackground': '#ff660066',
    }

    return {
      name: 'Tokyo Night Lod Accessibility',
      displayName: 'Tokyo Night Lod Accessibility',
      author: 'lod',
      type: 'hc-dark',
      semanticClass: 'tokyo-night-accessibility',
      semanticTokenColors: semanticTokenColors, // Используем стандартные семантические токены
      colors: accessibilityColors,
      tokenColors: this.adjustTokenColorsForAccessibility(tokenColors),
    }
  }

  /**
   * Корректировка tokenColors для высококонтрастной темы
   */
  private static adjustTokenColorsForHighContrast(tokens: any[]): any[] {
    return tokens.map((token) => ({
      ...token,
      settings: {
        ...token.settings,
        foreground: token.settings?.foreground
          ? this.increaseContrast(token.settings.foreground)
          : undefined,
      },
    }))
  }

  /**
   * Упрощение tokenColors для минималистичной темы
   */
  private static simplifyTokenColors(tokens: any[]): any[] {
    // Оставляем только основные цвета для минималистичного стиля
    const simplifiedTokens = tokens.filter((token) => {
      const scopes = Array.isArray(token.scope) ? token.scope : [token.scope]
      return scopes.some(
        (scope: string) =>
          scope.includes('keyword') ||
          scope.includes('string') ||
          scope.includes('comment') ||
          scope.includes('function') ||
          scope.includes('variable')
      )
    })

    return simplifiedTokens
  }

  /**
   * Корректировка tokenColors для светлой темы
   */
  private static adjustTokenColorsForLight(tokens: any[]): any[] {
    const lightColorMap: Record<string, string> = {
      '#7aa2f7': '#1976d2', // blue -> dark blue
      '#bb9af7': '#7b1fa2', // purple -> dark purple
      '#9ece6a': '#388e3c', // green -> dark green
      '#f7768e': '#d32f2f', // red -> dark red
      '#7dcfff': '#0277bd', // cyan -> dark cyan
      '#c0caf5': '#263238', // white -> dark gray
      '#a9b1d6': '#455a64', // muted -> dark muted
    }

    return tokens.map((token) => ({
      ...token,
      settings: {
        ...token.settings,
        foreground: token.settings?.foreground
          ? lightColorMap[token.settings.foreground] ||
            this.darkenColor(token.settings.foreground)
          : undefined,
      },
    }))
  }

  /**
   * Корректировка tokenColors для accessibility
   */
  private static adjustTokenColorsForAccessibility(tokens: any[]): any[] {
    return tokens.map((token) => ({
      ...token,
      settings: {
        ...token.settings,
        foreground: token.settings?.foreground
          ? this.makeAccessible(token.settings.foreground)
          : undefined,
      },
    }))
  }

  /**
   * Увеличение контрастности цвета
   */
  private static increaseContrast(color: string): string {
    // Простая логика увеличения контрастности
    if (color.startsWith('#')) {
      const hex = color.slice(1)
      const r = Math.min(255, parseInt(hex.substr(0, 2), 16) * 1.3)
      const g = Math.min(255, parseInt(hex.substr(2, 2), 16) * 1.3)
      const b = Math.min(255, parseInt(hex.substr(4, 2), 16) * 1.3)
      return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g)
        .toString(16)
        .padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`
    }
    return color
  }

  /**
   * Затемнение цвета для светлой темы
   */
  private static darkenColor(color: string): string {
    if (color.startsWith('#')) {
      const hex = color.slice(1)
      const r = Math.max(0, parseInt(hex.substr(0, 2), 16) * 0.3)
      const g = Math.max(0, parseInt(hex.substr(2, 2), 16) * 0.3)
      const b = Math.max(0, parseInt(hex.substr(4, 2), 16) * 0.3)
      return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g)
        .toString(16)
        .padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`
    }
    return color
  }

  /**
   * Делает цвет доступным (WCAG AAA)
   */
  private static makeAccessible(color: string): string {
    // Специальные цвета для accessibility
    const accessibleColors: Record<string, string> = {
      '#7aa2f7': '#4fc3f7', // Более яркий синий
      '#bb9af7': '#e1bee7', // Более яркий фиолетовый
      '#9ece6a': '#a5d6a7', // Более яркий зелёный
      '#f7768e': '#ffab91', // Более яркий красный
      '#7dcfff': '#80deea', // Более яркий циан
      '#c0caf5': '#ffffff', // Белый
      '#a9b1d6': '#e0e0e0', // Светло-серый
    }

    return accessibleColors[color] || color
  }
}
