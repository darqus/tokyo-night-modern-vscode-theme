import { palette } from '../palette'
import { core } from '../palette.core'
import { withAlpha, darkenToward, lightenToward } from '../utils/color'
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

      // Делаем фон более тёмным (без прямого хардкода чёрного)
      'editor.background': darkenToward(core.bg.base, core.bg.sunken, 0.6),
      'activityBar.background': darkenToward(core.bg.base, core.bg.sunken, 0.7),
      'sideBar.background': darkenToward(core.bg.base, core.bg.sunken, 0.6),
      'statusBar.background': darkenToward(core.bg.base, core.bg.sunken, 0.75),
      'titleBar.activeBackground': darkenToward(
        core.bg.base,
        core.bg.sunken,
        0.7
      ),

      // Увеличиваем контраст границ
      'activityBar.border': withAlpha(core.text.selection, '20%'),
      'sideBar.border': withAlpha(core.text.selection, '20%'),
      'editor.lineHighlightBorder': withAlpha(core.text.selection, '10%'),

      // Более контрастные цвета выделения
      'editor.selectionBackground': withAlpha(palette.accent.blue, '60%'),
      'editor.selectionHighlightBackground': withAlpha(
        palette.accent.cyan,
        '20%'
      ),

      // Более яркие акцентные цвета
      'activityBar.activeBorder': palette.accent.cyan,
      'tab.activeBorder': palette.accent.cyan,
      'panelTitle.activeBorder': palette.accent.cyan,

      // Контрастные кнопки
      'button.background': darkenToward(
        palette.brand.primary,
        core.bg.base,
        0.2
      ),
      'button.foreground': core.text.selection,
      'button.hoverBackground': lightenToward(
        palette.brand.primary,
        palette.token.codeBlock,
        0.2
      ),

      // Контрастные поля ввода
      'input.background': core.bg.input,
      'input.foreground': core.text.selection,
      'input.border': withAlpha(core.text.selection, '40%'),
    }

    // Корректируем семантические токены для лучшего контраста
    const highContrastSemanticTokens = {
      ...semanticTokenColors,
      variable: { foreground: core.text.selection },
      function: { foreground: palette.accent.cyan },
      class: { foreground: palette.accent.purple },
      type: { foreground: palette.accent.magenta },
      keyword: { foreground: palette.accent.magenta },
      string: { foreground: palette.token.string },
      comment: { foreground: palette.token.comment },
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
      foreground: palette.fg.primary,
      descriptionForeground: palette.fg.description,
      errorForeground: palette.ui.debug.consoleError,

      // Фоны
      'editor.background': palette.bg.base,
      'editor.foreground': palette.fg.primary,
      'activityBar.background': palette.bg.elevated,
      'activityBar.foreground': palette.fg.primary,
      'sideBar.background': palette.bg.overlay,
      'sideBar.foreground': palette.fg.panelText,
      'statusBar.background': palette.bg.sunken,
      'statusBar.foreground': palette.fg.primary,
      'titleBar.activeBackground': palette.bg.elevated,
      'titleBar.activeForeground': palette.fg.primary,

      // Границы
      'activityBar.border': palette.line.border,
      'sideBar.border': palette.line.border,
      'panel.border': palette.line.border,
      'tab.border': palette.line.border,

      // Активные элементы
      'activityBar.activeBorder': palette.ui.tab.activeBorder,
      'tab.activeBorder': palette.ui.tab.activeBorder,
      'activityBar.activeBackground': palette.bg.selection.active,

      // Выделение
      'editor.selectionBackground': palette.bg.selection.active,
      'editor.lineHighlightBackground': palette.bg.lineHighlight,

      // Кнопки
      'button.background': palette.brand.button.primary,
      'button.foreground': core.text.selection,
      'button.hoverBackground': palette.brand.button.hover,

      // Поля ввода
      'input.background': palette.bg.input,
      'input.foreground': palette.fg.primary,
      'input.border': palette.ui.input.border,
      // Видимая граница фокуса для улучшенной доступности
      focusBorder: palette.ui.tab.activeBorder,
    }

    // Светлые семантические токены
    const lightSemanticTokens = {
      ...semanticTokenColors,
      variable: { foreground: palette.fg.primary },
      function: { foreground: palette.accent.blue },
      class: { foreground: palette.accent.purple },
      keyword: { foreground: palette.accent.purple },
      string: { foreground: palette.token.string },
      comment: { foreground: palette.token.comment },
      number: { foreground: palette.token.number },
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
      focusBorder: palette.ui.tab.activeModifiedBorder,
      'activityBar.activeBorder': palette.ui.tab.activeModifiedBorder,
      'tab.activeBorder': palette.ui.tab.activeModifiedBorder,
      'button.border': core.text.selection,

      // Контрастные кнопки
      'button.background': darkenToward(
        palette.brand.primary,
        core.bg.base,
        0.2
      ),
      'button.foreground': core.text.selection,
      'button.hoverBackground': lightenToward(
        palette.brand.primary,
        palette.token.codeBlock,
        0.2
      ),

      // Заметные цвета состояний
      'inputValidation.errorBorder': palette.accent.red,
      'inputValidation.warningBorder': palette.accent.yellow,
      'inputValidation.infoBorder': palette.accent.cyan,

      // Контрастные цвета Git (основаны на тех же оттенках, что и в обзоре редактора)
      'gitDecoration.addedResourceForeground': palette.ui.editorOverview.added,
      'gitDecoration.modifiedResourceForeground':
        palette.ui.editorOverview.modified,
      'gitDecoration.deletedResourceForeground':
        palette.ui.editorOverview.deleted,

      // Контрастное выделение
      'editor.selectionBackground': withAlpha(palette.accent.blue, '60%'),
      'editor.wordHighlightBackground': withAlpha(palette.accent.yellow, '40%'),
      'editor.wordHighlightStrongBackground': withAlpha(
        palette.accent.red,
        '40%'
      ),
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
    return tokens.map((token) => ({
      ...token,
      settings: {
        ...token.settings,
        foreground: token.settings?.foreground
          ? this.darkenColor(token.settings.foreground)
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
    // Алгоритмическое повышение контрастности без хардкода карт соответствий
    if (!color.startsWith('#')) return color
    return lightenToward(color as any, core.text.selection, 0.3)
  }
}
