/**
 * Базовая палитра цветов для темы Tokyo Night
 * Сгруппированная по логическим категориям
 */

import { darken, lighten, withAlpha } from './generators'

// Базовые цвета для каждой группы
export const baseColors = {
  background: {
    primary: '#1a1b26', // Основной фон редактора
    secondary: '#16161e', // Фон боковой панели и других элементов
    tertiary: '#14141b', // Дополнительные фоны (input, dropdown)
    elevated: '#1c1d29', // Возвышенные поверхности (активные элементы списка)
    border: '#101014', // Цвет границ
    borderSecondary: '#2b2b3b', // Вторичные границы
    overlay: '#0f0f14', // Оверлеи и модальные окна
  },
  foreground: {
    primary: '#a9b1d6', // Основной текст
    secondary: '#787c99', // Вторичный текст
    disabled: '#545c7e', // Отключенный текст
    hint: '#515670', // Подсказки и описания
    emphasis: '#c0caf5', // Выделенный текст
  },
  accent: {
    primary: '#3d59a1', // Основной акцентный цвет
    secondary: '#7aa2f7', // Вторичный акцент
    success: '#41a6b5', // Успех
    info: '#0da0ba', // Информация
    warning: '#e0af68', // Предупреждение
    error: '#db4b4b', // Ошибка
  },
  neutral: {
    gray: '#565f89', // Нейтральный серый
    blueGray: '#515c7e', // Сине-серый
    slate: '#3b3e52', // Сланцевый
    dark: '#0d0f17', // Темный нейтральный
    light: '#acb0d0', // Светлый нейтральный
  },
  syntax: {
    comment: '#51597d', // Комментарии
    string: '#9ece6a', // Строки
    number: '#ff9e64', // Числа
    keyword: '#bb9af7', // Ключевые слова
    function: '#7aa2f7', // Функции
    variable: '#c0caf5', // Переменные
    property: '#73daca', // Свойства
    tag: '#f7768e', // Теги
    operator: '#89ddff', // Операторы
    punctuation: '#9abdf5', // Пунктуация
    type: '#0db9d7', // Типы
    class: '#0db9d7', // Классы
    decorator: '#7aa2f7', // Декораторы
  },
  errorWarning: {
    error: '#db4b4b', // Ошибка
    errorSecondary: '#bb616b', // Вторичный цвет ошибки
    warning: '#e0af68', // Предупреждение
    warningSecondary: '#c49a5a', // Вторичный цвет предупреждения
    critical: '#f7768e', // Критическая ошибка
    success: '#41a6b5', // Успех
    successSecondary: '#73daca', // Вторичный цвет успеха
  },
  terminal: {
    black: '#363b54',
    red: '#f7768e',
    green: '#73daca',
    yellow: '#e0af68',
    blue: '#7aa2f7',
    magenta: '#bb9af7',
    cyan: '#7dcfff',
    white: '#787c99',
    brightBlack: '#363b54',
    brightRed: '#f7768e',
    brightGreen: '#73daca',
    brightYellow: '#e0af68',
    brightBlue: '#7aa2f7',
    brightMagenta: '#bb9af7',
    brightCyan: '#7dcfff',
    brightWhite: '#acb0d0',
  },
  charts: {
    red: '#f7768e',
    blue: '#7aa2f7',
    yellow: '#e0af68',
    orange: '#ff9e64',
    green: '#41a6b5',
    purple: '#9d7cd8',
    foreground: '#9AA5CE',
    background: '#16161e',
  },
  semanticTokens: {
    parameter: '#d9d4cd',
    propertyDeclaration: '#73daca',
    propertyDefaultLibrary: '#2ac3de',
    variableDefaultLibrary: '#2ac3de',
    variableDeclaration: '#bb9af7',
    namespace: '#0db9d7',
    type: '#0db9d7',
    class: '#0db9d7',
    interface: '#0db9d7',
    variableReadonly: '#41a6b5',
    enum: '#0db9d7',
    enumMember: '#41a6b5',
    struct: '#0db9d7',
    typeParameter: '#0db9d7',
    macro: '#7aa2f7',
    label: '#c0caf5',
    regexp: '#b4f9f8',
    modifier: '#9d7cd8',
    selfKeyword: '#f7768e',
    selfTypeKeyword: '#2ac3de',
    this: '#f7768e',
    nil: '#ff9e64',
    null: '#ff9e64',
    undefined: '#ff9e64',
  },
  uiComponents: {
    buttonSecondaryBackground: '#3b3e52',
    inputPlaceholder: '#787c998A',
    inputValidationInfo: '#bbc2e0',
    inputValidationInfoBackground: '#3d59a15c',
    inputValidationWarning: '#000000',
    inputValidationWarningBackground: '#c2985b',
    inputValidationWarningBorder: '#e0af68',
    inputValidationError: '#bbc2e0',
    inputValidationErrorBackground: '#85353e',
    inputValidationBorderError: '#963c47',
    activityBarInactiveForeground: '#3b3e52',
    treeIndentGuidesStroke: '#2b2b3b',
    listDeemphasizedForeground: '#787c99',
    listInvalidItemForeground: '#c97018',
    listError: '#bb616b',
    listWarning: '#c49a5a',
    listFilterWidgetOutline: '#3d59a1',
    listFilterWidgetNoMatchesOutline: '#a6333f',
    scrollbarSliderBackground: '#868bc415',
    scrollbarSliderHoverBackground: '#868bc410',
    scrollbarSliderActiveBackground: '#868bc422',
    editorBracketHighlightForeground1: '#698cd6',
    editorBracketHighlightForeground2: '#68b3de',
    editorBracketHighlightForeground3: '#9a7ecc',
    editorBracketHighlightForeground4: '#25aac2',
    editorBracketHighlightForeground5: '#80a856',
    editorBracketHighlightForeground6: '#c49a5a',
    editorBracketHighlightUnexpected: '#db4b4b',
    selectionBackground: '#515c7e40',
    editorFoldBackground: '#1111174a',
    editorLinkActive: '#acb0d0',
    editorFindMatchBorder: '#e0af68',
    editorFindMatchHighlight: '#3d59a1666',
    editorRangeHighlight: '#515c7e20',
    editorWordHighlight: '#515c7e44',
    editorWordHighlightStrong: '#515c7e55',
    editorSelectionHighlight: '#515c7e44',
    editorIndentGuideBackground: '#232433',
    editorIndentGuideActiveBackground: '#363b54',
    editorLineHighlight: '#1e202e',
    editorWhitespace: '#363b54',
    editorBracketMatchBorder: '#42465d',
    editorOverviewRulerInfo: '#1abc9c',
    editorOverviewRulerModified: '#394b70',
    editorOverviewRulerAdded: '#164846',
    editorOverviewRulerDeleted: '#703438',
    editorRuler: '#101014',
    editorGhostText: '#646e9c',
    editorGutterModified: '#394b70',
    editorGutterAdded: '#164846',
    editorGutterDeleted: '#823c41',
    minimapGutterModified: '#425882',
    minimapGutterAdded: '#1C5957',
    minimapGutterDeleted: '#944449',
    editorGroupBorder: '#101014',
    editorGroupDropBackground: '#1e202e',
    editorSuggestWidgetSelectedBackground: '#20222c',
    editorSuggestWidgetHighlight: '#6183bb',
    editorCodeLens: '#51597d',
    editorLightBulb: '#e0af68',
    editorLightBulbAutoFix: '#e0af68',
    editorInlayHint: '#646e9c',
    peekViewBorder: '#101014',
    peekViewEditorMatchHighlight: '#3d59a166',
    peekViewTitleBackground: '#101014',
    peekViewResultSelection: '#a9b1d6',
    peekViewResultMatchHighlight: '#3d59a166',
    diffEditorInsertedText: '#41a6b520',
    diffEditorRemovedText: '#db4b4b22',
    diffEditorInsertedLine: '#41a6b520',
    diffEditorRemovedLine: '#db4b4b22',
    diffEditorGutterInserted: '#41a6b525',
    diffEditorGutterRemoved: '#db4b4b22',
    diffEditorOverviewInserted: '#41a6b525',
    diffEditorOverviewRemoved: '#db4b4b22',
    diffEditorDiagonalFill: '#292e42',
    diffEditorUnchangedCode: '#282a3b66',
    multiDiffEditorHeader: '#1a1b26',
    multiDiffEditorBorder: '#1a1b26',
    breadcrumbFocus: '#a9b1d6',
    tabHoverForeground: '#a9b1d6',
    tabUnfocusedActiveForeground: '#a9b1d6',
    tabUnfocusedInactiveForeground: '#787c99',
    tabUnfocusedHoverForeground: '#a9b1d6',
    tabActiveModifiedBorder: '#1a1b26',
    tabInactiveModifiedBorder: '#1f202e',
    tabUnfocusedActiveBorder: '#1f202e',
    tabLastPinnedBorder: '#222333',
    panelInputBorder: '#16161e',
    statusBarNoFolderBackground: '#16161e',
    statusBarDebuggingBackground: '#16161e',
    statusBarDebuggingForeground: '#787c99',
    statusBarItemProminentBackground: '#101014',
    statusBarItemProminentHoverBackground: '#20222c',
    titleBarInactiveForeground: '#787c99',
    titleBarInactiveBackground: '#16161e',
    textLinkActive: '#7dcfff',
    textPreformat: '#9699a8',
    textSeparator: '#363b54',
    debugExceptionWidgetBorder: '#963c47',
    debugExceptionWidgetBackground: '#101014',
    debugToolBarBackground: '#101014',
    debugConsoleInfo: '#787c99',
    debugConsoleError: '#bb616b',
    debugConsoleSource: '#787c99',
    debugConsoleWarning: '#c49a5a',
    debugConsoleInputIcon: '#73daca',
    editorStackFrameHighlight: '#E2BD3A20',
    editorFocusedStackFrameHighlight: '#73daca20',
    debugViewStateLabelBackground: '#14141b',
    debugViewValueChangedHighlight: '#3d59a1aa',
    debugTokenExpressionName: '#7dcfff',
    debugTokenExpressionValue: '#9aa5ce',
    debugTokenExpressionString: '#9ece6a',
    debugTokenExpressionBoolean: '#ff9e64',
    debugTokenExpressionNumber: '#ff9e64',
    debugTokenExpressionError: '#bb616b',
    debugIconBreakpointUnverified: '#c24242',
    gitDecorationModified: '#6183bb',
    gitDecorationIgnored: '#515670',
    gitDecorationDeleted: '#914c54',
    gitDecorationRenamed: '#449dab',
    gitDecorationAdded: '#449dab',
    gitDecorationUntracked: '#449dab',
    gitDecorationConflicting: '#e0af68cc',
    gitDecorationStageDeleted: '#914c54',
    gitDecorationStageModified: '#6183bb',
    notebookCellBorderColor: '#101014',
    notebookFocusedCellBorder: '#29355a',
    notebookCellStatusBarItemHoverBackground: '#1c1d29',
    chartsLines: '#16161e',
    scmGraphHistoryItemHoverLabel: '#1b1e2e',
    scmGraphForeground1: '#ff9e64',
    scmGraphForeground2: '#e0af68',
    scmGraphForeground3: '#41a6b5',
    scmGraphForeground4: '#7aa2f7',
    scmGraphForeground5: '#bb9af7',
    scmGraphHistoryItemHoverAdditions: '#41a6b5',
    scmGraphHistoryItemHoverDeletions: '#f7768e',
    scmGraphHistoryItemRef: '#506FCA',
    scmGraphHistoryItemRemoteRef: '#41a6b5',
    scmGraphHistoryItemBaseRef: '#9d7cd8',
    scmGraphHistoryItemHoverDefaultLabel: '#a9b1d6',
    mergeCurrentHeaderBackground: '#41a6b525',
    mergeCurrentContentBackground: '#007a7544',
    mergeIncomingHeaderBackground: '#3d59a1aa',
    mergeIncomingContentBackground: '#3d59a144',
    mergeEditorChangeBackground: '#41a6b525',
    mergeEditorChangeWordBackground: '#41a6b540',
    mergeEditorConflictUnhandledUnfocusedBorder: '#e0af6888',
    mergeEditorConflictUnhandledFocusedBorder: '#e0af68b0',
    mergeEditorConflictHandledUnfocusedBorder: '#41a6b525',
    mergeEditorConflictHandledFocusedBorder: '#41a6b565',
    mergeEditorConflictHandledMinimapRuler: '#449dab',
    mergeEditorConflictUnhandledMinimapRuler: '#e0af68',
    gitlensTrailingLine: '#646e9c',
    gitlensGutterUncommitted: '#7aa2f7',
    gitlensGutter: '#787c99',
    gitlensGutterBackground: '#16161e',
    notificationCenterHeader: '#101014',
    notifications: '#101014',
    notificationLink: '#6183bb',
    notificationsErrorIcon: '#bb616b',
    notificationsWarningIcon: '#bba461',
    notificationsInfoIcon: '#0da0ba',
    menubarSelectionBorder: '#1b1e2e',
    menuSelectionBorder: '#101014',
    chatRequestBorder: '#0f0f14',
    chatAvatarBackground: '#3d59a1',
    chatAvatarForeground: '#a9b1d6',
    chatSlashCommandBackground: '#14141b',
    chatSlashCommand: '#7aa2f7',
    inlineChat: '#a9b1d6',
    inlineChatInput: '#14141b',
    inlineChatDiffInserted: '#41a6b540',
    inlineChatDiffRemoved: '#db4b4b42',
  },
  tokenColors: {
    commentDoc: '#5a638c',
    commentDocEmphasized: '#646e9c',
    invalid: '#ff5370',
    invalidDeprecated: '#bb9af7',
    storage: '#9d7cd8',
    interpolation: '#7dcfff',
    bladeTwigKeywords: '#0db9d7',
    spread: '#f7768e',
    importExportFromDefault: '#7dcfff',
    keywordSQL: '#7dcfff',
    tagCustom: '#de5971',
    tagPunctuation: '#ba3c97',
    globals: '#e0af68',
    variableArrayKey: '#7dcfff',
    objectLiteralMemberLvl3: '#41a6b5',
    cBlockLevelVariables: '#f7768e',
    otherVariable: '#f7768e',
    constantTagAttribute: '#bb9af7',
    cssFont: '#9ece6a',
    cssId: '#fc7b7b',
    cssTag: '#0db9d7',
    cssTagReference: '#e0af68',
    cssPunctuation: '#9abdf5',
    cssAtRule: '#ff9e64',
    cssParentSelector: '#73daca',
    scssAt: '#bb9af7',
    scssMixinExtend: '#9d7cd8',
    cssValue: '#ff9e64',
    languageMethods: '#f7768e',
    htmlCharacterEntity: '#0DB9D7',
    cssIds: '#7aa2f7',
    markdownHeading1: '#89ddff',
    markdownHeading2: '#61bdf2',
    markdownHeading3: '#7aa2f7',
    markdownHeading4: '#6d91de',
    markdownHeading5: '#9aa5ce',
    markdownHeading6: '#747ca1',
    markdownBlockquote: '#4e5579',
    markdownLink: '#73daca',
    markdownFencedCode: '#89ddff',
    markdownSeparator: '#51597d',
    markupTable: '#c0cefc',
    tokenInfo: '#0db9d7',
    tokenWarn: '#ffdb69',
    tokenError: '#db4b4b',
    tokenDebug: '#b267e6',
    apacheTag: '#f7768e',
    preprocessor: '#73daca',
    envValue: '#7aa2f7',
  },
}

/**
 * Генерирует полную палитру цветов на основе базовых цветов
 * с использованием утилит изменения яркости и прозрачности
 */
export const generateFullPalette = () => {
  // Создаем производные цвета для каждой группы
  const backgroundVariants = {
    primary: {
      base: baseColors.background.primary,
      lighter: lighten(baseColors.background.primary, 0.05),
      darker: darken(baseColors.background.primary, 0.05),
      transparent: withAlpha(baseColors.background.primary, 0.8),
    },
    secondary: {
      base: baseColors.background.secondary,
      lighter: lighten(baseColors.background.secondary, 0.05),
      darker: darken(baseColors.background.secondary, 0.05),
      transparent: withAlpha(baseColors.background.secondary, 0.8),
    },
    tertiary: {
      base: baseColors.background.tertiary,
      lighter: lighten(baseColors.background.tertiary, 0.05),
      darker: darken(baseColors.background.tertiary, 0.05),
      transparent: withAlpha(baseColors.background.tertiary, 0.8),
    },
  }

  const foregroundVariants = {
    primary: {
      base: baseColors.foreground.primary,
      lighter: lighten(baseColors.foreground.primary, 0.1),
      darker: darken(baseColors.foreground.primary, 0.1),
      transparent: withAlpha(baseColors.foreground.primary, 0.8),
    },
    secondary: {
      base: baseColors.foreground.secondary,
      lighter: lighten(baseColors.foreground.secondary, 0.1),
      darker: darken(baseColors.foreground.secondary, 0.1),
      transparent: withAlpha(baseColors.foreground.secondary, 0.8),
    },
  }

  const accentVariants = {
    primary: {
      base: baseColors.accent.primary,
      lighter: lighten(baseColors.accent.primary, 0.1),
      darker: darken(baseColors.accent.primary, 0.1),
      transparent: withAlpha(baseColors.accent.primary, 0.5),
      selection: withAlpha(baseColors.accent.primary, 0.3),
    },
    secondary: {
      base: baseColors.accent.secondary,
      lighter: lighten(baseColors.accent.secondary, 0.1),
      darker: darken(baseColors.accent.secondary, 0.1),
      transparent: withAlpha(baseColors.accent.secondary, 0.5),
    },
  }

  const syntaxVariants = {
    comment: {
      base: baseColors.syntax.comment,
      lighter: lighten(baseColors.syntax.comment, 0.1),
      darker: darken(baseColors.syntax.comment, 0.1),
      transparent: withAlpha(baseColors.syntax.comment, 0.7),
    },
    string: {
      base: baseColors.syntax.string,
      lighter: lighten(baseColors.syntax.string, 0.1),
      darker: darken(baseColors.syntax.string, 0.1),
      transparent: withAlpha(baseColors.syntax.string, 0.7),
    },
    keyword: {
      base: baseColors.syntax.keyword,
      lighter: lighten(baseColors.syntax.keyword, 0.1),
      darker: darken(baseColors.syntax.keyword, 0.1),
      transparent: withAlpha(baseColors.syntax.keyword, 0.7),
    },
  }

  const errorWarningVariants = {
    error: {
      base: baseColors.errorWarning.error,
      lighter: lighten(baseColors.errorWarning.error, 0.1),
      darker: darken(baseColors.errorWarning.error, 0.1),
      transparent: withAlpha(baseColors.errorWarning.error, 0.3),
      border: withAlpha(baseColors.errorWarning.error, 0.6),
    },
    warning: {
      base: baseColors.errorWarning.warning,
      lighter: lighten(baseColors.errorWarning.warning, 0.1),
      darker: darken(baseColors.errorWarning.warning, 0.1),
      transparent: withAlpha(baseColors.errorWarning.warning, 0.3),
      border: withAlpha(baseColors.errorWarning.warning, 0.6),
    },
  }

  return {
    base: baseColors,
    background: backgroundVariants,
    foreground: foregroundVariants,
    accent: accentVariants,
    syntax: syntaxVariants,
    errorWarning: errorWarningVariants,
  }
}

export type Palette = ReturnType<typeof generateFullPalette>
