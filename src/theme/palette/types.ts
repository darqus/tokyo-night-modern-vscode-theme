export type VSCodeTheme = {
  name: string
  type: 'dark' | 'light'
  colors: Record<string, string>
  tokenColors: Array<{
    name?: string
    scope: string | string[]
    settings?: {
      foreground?: string
      background?: string
      fontStyle?: string
    }
  }>
  semanticHighlighting?: boolean
  semanticTokenColors?: {
    [key: string]: string | { foreground?: string; fontStyle?: string }
  }
  include?: string
  settings?: {
    [key: string]: string | number | boolean | Record<string, unknown>
  }
}

// Перечисление всех категорий токенов
export type TokenCategory =
  | 'comments'
  | 'strings'
  | 'numbers'
  | 'booleans'
  | 'keywords'
  | 'storage'
  | 'operators'
  | 'punctuation'
  | 'types'
  | 'classes'
  | 'interfaces'
  | 'enums'
  | 'functions'
  | 'methods'
  | 'variables'
  | 'parameters'
  | 'constants'
  | 'properties'
  | 'tags'
  | 'attributes'
  | 'decorators'
  | 'annotations'
  | 'brackets'
  | 'markdown'
  | 'markup'
  | 'css'
  | 'html'
  | 'json'
  | 'xml'
  | 'jsx'
  | 'ts'
  | 'js'
  | 'python'
  | 'java'
  | 'csharp'
  | 'go'
  | 'rust'
  | 'ruby'
  | 'shell'
  | 'yaml'
  | 'semantic'

// Типы вариантов цветов
export type ColorVariant = 'base' | 'lighter' | 'darker' | 'transparent'

// Скоупы семантических токенов
export type SemanticTokenScope =
  | 'global'
  | 'local'
  | 'parameter'
  | 'property'
  | 'method'
  | 'function'
  | 'variable'
  | 'type'
  | 'class'
  | 'interface'
  | 'namespace'
  | 'enum'
  | 'struct'
  | 'typeParameter'
  | 'macro'
  | 'label'
  | 'comment'
  | 'string'
  | 'number'
  | 'boolean'
  | 'regexp'
  | 'operator'
  | 'keyword'
  | 'modifier'
  | 'decorator'
  | 'builtIn'
  | 'defaultLibrary'
  | 'self'
  | 'super'
  | 'this'
  | 'nil'
  | 'null'
  | 'undefined'
  | 'selfType'

// Ключи цветов workbench с автодополнением
export type WorkbenchColorKey =
  | 'editor.background'
  | 'editor.foreground'
  | 'editor.lineHighlightBackground'
  | 'editor.lineHighlightBorder'
  | 'editorLineNumber.foreground'
  | 'editorLineNumber.activeForeground'
  | 'editorCursor.foreground'
  | 'editor.selectionBackground'
  | 'editor.selectionForeground'
  | 'editor.inactiveSelectionBackground'
  | 'editor.selectionHighlightBackground'
  | 'editor.selectionHighlightBorder'
  | 'editor.wordHighlightBackground'
  | 'editor.wordHighlightBorder'
  | 'editor.wordHighlightStrongBackground'
  | 'editor.wordHighlightStrongBorder'
  | 'editor.findMatchBackground'
  | 'editor.findMatchHighlightBackground'
  | 'editor.findRangeHighlightBackground'
  | 'editor.hoverHighlightBackground'
  | 'editor.lineNumbers'
  | 'editorActiveLineNumber'
  | 'editorWhitespace.foreground'
  | 'editorIndentGuide.background'
  | 'editorIndentGuide.activeBackground'
  | 'editorRuler.foreground'
  | 'editorCodeLens.foreground'
  | 'editorBracketMatch.background'
  | 'editorBracketMatch.border'
  | 'editorOverviewRuler.border'
  | 'editorError.foreground'
  | 'editorError.border'
  | 'editorWarning.foreground'
  | 'editorWarning.border'
  | 'editorInfo.foreground'
  | 'editorInfo.border'
  | 'editorHint.foreground'
  | 'editorHint.border'
  | 'problemsErrorIcon.foreground'
  | 'problemsWarningIcon.foreground'
  | 'problemsInfoIcon.foreground'
  | 'editorGutter.background'
  | 'editorGutter.modifiedBackground'
  | 'editorGutter.addedBackground'
  | 'editorGutter.deletedBackground'
  | 'editorGutter.foldingControlForeground'
  | 'diffEditor.insertedTextBackground'
  | 'diffEditor.insertedTextBorder'
  | 'diffEditor.removedTextBackground'
  | 'diffEditor.removedTextBorder'
  | 'editorWidget.foreground'
  | 'editorWidget.background'
  | 'editorWidget.border'
  | 'editorWidget.resizeBorder'
  | 'editorSuggestWidget.background'
  | 'editorSuggestWidget.border'
  | 'editorSuggestWidget.foreground'
  | 'editorSuggestWidget.highlightForeground'
  | 'editorSuggestWidget.selectedBackground'
  | 'editorHoverWidget.foreground'
  | 'editorHoverWidget.background'
  | 'editorHoverWidget.border'
  | 'editorMarkerNavigation.background'
  | 'editorMarkerNavigationError.background'
  | 'editorMarkerNavigationWarning.background'
  | 'editorMarkerNavigationInfo.background'
  | 'peekView.border'
  | 'peekViewEditor.background'
  | 'peekViewEditorGutter.background'
  | 'peekViewResult.background'
  | 'peekViewResult.fileForeground'
  | 'peekViewResult.lineForeground'
  | 'peekViewResult.matchHighlightBackground'
  | 'peekViewResult.selectionBackground'
  | 'peekViewResult.selectionForeground'
  | 'peekViewTitle.background'
  | 'peekViewTitleDescription.foreground'
  | 'peekViewTitleLabel.foreground'
  | 'merge.currentHeaderBackground'
  | 'merge.currentContentBackground'
  | 'merge.incomingHeaderBackground'
  | 'merge.incomingContentBackground'
  | 'merge.border'
  | 'merge.commonContentBackground'
  | 'merge.commonHeaderBackground'
  | 'editorOverviewRuler.currentContentForeground'
  | 'editorOverviewRuler.incomingContentForeground'
  | 'editorOverviewRuler.commonContentForeground'
  | 'panel.background'
  | 'panel.border'
  | 'panelTitle.activeBorder'
  | 'panelTitle.activeForeground'
  | 'panelTitle.inactiveForeground'
  | 'statusBar.background'
  | 'statusBar.foreground'
  | 'statusBar.border'
  | 'statusBar.debuggingBackground'
  | 'statusBar.debuggingForeground'
  | 'statusBar.noFolderBackground'
  | 'statusBar.noFolderForeground'
  | 'statusBarItem.activeBackground'
  | 'statusBarItem.hoverBackground'
  | 'statusBarItem.prominentBackground'
  | 'statusBarItem.prominentHoverBackground'
  | 'titleBar.activeBackground'
  | 'titleBar.activeForeground'
  | 'titleBar.inactiveBackground'
  | 'titleBar.inactiveForeground'
  | 'titleBar.border'
  | 'menubar.selectionForeground'
  | 'menubar.selectionBackground'
  | 'menubar.selectionBorder'
  | 'menu.foreground'
  | 'menu.background'
  | 'menu.selectionForeground'
  | 'menu.selectionBackground'
  | 'menu.selectionBorder'
  | 'menu.separatorBackground'
  | 'notification.background'
  | 'notification.foreground'
  | 'notification.buttonBackground'
  | 'notification.buttonHoverBackground'
  | 'notification.buttonForeground'
  | 'notification.errorBackground'
  | 'notification.errorForeground'
  | 'notification.infoBackground'
  | 'notification.infoForeground'
  | 'notification.warningBackground'
  | 'notification.warningForeground'
  | 'extensionButton.prominentForeground'
  | 'extensionButton.prominentBackground'
  | 'extensionButton.prominentHoverBackground'
  | 'pickerGroup.border'
  | 'pickerGroup.foreground'
  | 'quickInput.background'
  | 'quickInput.foreground'
  | 'terminal.background'
  | 'terminal.foreground'
  | 'terminal.ansiBlack'
  | 'terminal.ansiRed'
  | 'terminal.ansiGreen'
  | 'terminal.ansiYellow'
  | 'terminal.ansiBlue'
  | 'terminal.ansiMagenta'
  | 'terminal.ansiCyan'
  | 'terminal.ansiWhite'
  | 'terminal.ansiBrightBlack'
  | 'terminal.ansiBrightRed'
  | 'terminal.ansiBrightGreen'
  | 'terminal.ansiBrightYellow'
  | 'terminal.ansiBrightBlue'
  | 'terminal.ansiBrightMagenta'
  | 'terminal.ansiBrightCyan'
  | 'terminal.ansiBrightWhite'
  | 'terminal.selectionBackground'
  | 'terminalCursor.background'
  | 'terminalCursor.foreground'
  | 'debugToolBar.background'
  | 'welcomePage.background'
  | 'welcomePage.buttonBackground'
  | 'welcomePage.buttonHoverBackground'
  | 'walkThrough.embeddedEditorBackground'
  | 'textBlockQuote.background'
  | 'textBlockQuote.border'
  | 'textCodeBlock.background'
  | 'textLink.activeForeground'
  | 'textLink.foreground'
  | 'textPreformat.foreground'
  | 'textSeparator.foreground'
  | 'editor.background'
  | 'editor.foreground'
  | 'editorWidget.background'
  | 'editorWidget.foreground'
  | 'editorSuggestWidget.background'
  | 'editorSuggestWidget.foreground'
  | 'editorHoverWidget.background'
  | 'editorHoverWidget.foreground'
  | 'debugExceptionWidget.background'
  | 'debugExceptionWidget.border'
  | 'editorMarkerNavigation.background'
  | 'editorMarkerNavigationError.background'
  | 'editorMarkerNavigationWarning.background'
  | 'editorMarkerNavigationInfo.background'
  | 'peekViewEditor.background'
  | 'peekViewResult.background'
  | 'peekViewTitle.background'
  | 'pickerGroup.border'
  | 'quickInput.background'
  | 'quickInput.foreground'
  | 'toolbar.hoverBackground'
  | 'toolbar.activeBackground'
  | 'notifications.background'
  | 'notifications.foreground'
  | 'notifications.border'
  | 'notificationsErrorIcon.foreground'
  | 'notificationsWarningIcon.foreground'
  | 'notificationsInfoIcon.foreground'

// Палитра поверхностей
export type SurfacePalette = {
  /** Основной фон рабочей области */
  base: string
  /** Вторичный фон для элементов */
  secondary: string
  /** Третичный фон для элементов */
  tertiary: string
  /** Фон боковой панели */
  sidebar: string
  /** Фон панели активности */
  activityBar: string
  /** Фон панели статуса */
  statusbar: string
  /** Фон заголовка окна */
  titlebar: string
  /** Фон панели вкладок */
  tabbar: string
  /** Фон панели инструментов */
  toolbar: string
  /** Фон всплывающих окон */
  popup: string
  /** Фон диалоговых окон */
  dialog: string
  /** Фон карточек */
  card: string
  /** Фон панелей */
  panel: string
  /** Фон редактора */
  editor: string
  /** Фон списков */
  list: string
  /** Фон деревьев */
  tree: string
  /** Фон терминала */
  terminal: string
}

// Палитра панелей
export type PanelPalette = {
  /** Фон панели */
  background: string
  /** Граница панели */
  border: string
  /** Активная граница заголовка панели */
  titleActiveBorder: string
  /** Активный цвет текста заголовка панели */
  titleActiveForeground: string
  /** Неактивный цвет текста заголовка панели */
  titleInactiveForeground: string
}

// Палитра статус-бара
export type StatusBarPalette = {
  /** Фон статус-бара */
  background: string
  /** Цвет текста статус-бара */
  foreground: string
  /** Граница статус-бара */
  border: string
  /** Фон статус-бара в режиме отладки */
  debuggingBackground: string
  /** Цвет текста статус-бара в режиме отладки */
  debuggingForeground: string
  /** Фон статус-бара без папки проекта */
  noFolderBackground: string
  /** Цвет текста статус-бара без папки проекта */
  noFolderForeground: string
  /** Активный фон элемента статус-бара */
  itemActiveBackground: string
  /** Фон элемента статус-бара при наведении */
  itemHoverBackground: string
  /** Выдающийся фон элемента статус-бара */
  itemProminentBackground: string
  /** Выдающийся фон элемента статус-бара при наведении */
  itemProminentHoverBackground: string
}

// Палитра заголовка
export type TitleBarPalette = {
  /** Фон активного заголовка окна */
  activeBackground: string
  /** Цвет текста активного заголовка окна */
  activeForeground: string
  /** Фон неактивного заголовка окна */
  inactiveBackground: string
  /** Цвет текста неактивного заголовка окна */
  inactiveForeground: string
  /** Граница заголовка окна */
  border: string
}

// Палитра фокуса
export type FocusPalette = {
  /** Цвет фона при фокусе */
  background: string
  /** Цвет границы при фокусе */
  border: string
  /** Цвет тени при фокусе */
  shadow: string
  /** Цвет элемента при фокусе */
  itemBackground: string
  /** Цвет элемента при фокусе */
  itemForeground: string
}

// Палитра выделения
export type SelectionPalette = {
  /** Фон выделенного текста */
  background: string
  /** Цвет текста выделенного текста */
  foreground: string
  /** Фон неактивного выделения */
  inactiveBackground: string
  /** Фон выделения поиска */
  findMatchBackground: string
  /** Фон подсветки выделения */
  findMatchHighlightBackground: string
  /** Фон диапазона выделения */
  findRangeHighlightBackground: string
  /** Фон подсветки слова */
  wordHighlightBackground: string
  /** Граница подсветки слова */
  wordHighlightBorder: string
  /** Фон сильной подсветки слова */
  wordHighlightStrongBackground: string
  /** Граница сильной подсветки слова */
  wordHighlightStrongBorder: string
  /** Фон подсветки наведения */
  hoverHighlightBackground: string
}

// Палитра подсветки
export type HighlightPalette = {
  /** Фон подсветки */
  background: string
  /** Цвет текста подсветки */
  foreground: string
  /** Фон подсветки ошибки */
  errorBackground: string
  /** Цвет текста подсветки ошибки */
  errorForeground: string
  /** Фон подсветки предупреждения */
  warningBackground: string
  /** Цвет текста подсветки предупреждения */
  warningForeground: string
  /** Фон подсветки информации */
  infoBackground: string
  /** Цвет текста подсветки информации */
  infoForeground: string
  /** Фон подсветки подсказки */
  hintBackground: string
  /** Цвет текста подсветки подсказки */
  hintForeground: string
}

// Палитра границ
export type BorderPalette = {
  /** Основная граница */
  main: string
  /** Вторичная граница */
  secondary: string
  /** Граница активного элемента */
  active: string
  /** Граница при наведении */
  hover: string
  /** Граница фокуса */
  focus: string
  /** Граница ошибки */
  error: string
  /** Граница предупреждения */
  warning: string
  /** Граница информации */
  info: string
  /** Граница подсказки */
  hint: string
  /** Граница скобок */
  bracket: string
  /** Граница скобок при совпадении */
  bracketMatch: string
  /** Граница линейки редактора */
  ruler: string
  /** Граница отступа */
  indentGuide: string
  /** Активная граница отступа */
  indentGuideActive: string
}

// Палитра текста
export type TextPalette = {
  /** Основной цвет текста */
  base: string
  /** Вторичный цвет текста */
  secondary: string
  /** Цвет значка */
  icon: string
  /** Цвет значка при наведении */
  iconHover: string
  /** Цвет значка при активности */
  iconActive: string
  /** Цвет текста при наведении */
  hover: string
  /** Цвет активного текста */
  active: string
  /** Цвет неактивного текста */
  inactive: string
  /** Цвет ссылки */
  link: string
  /** Цвет активной ссылки */
  linkActive: string
  /** Цвет кода */
  code: string
  /** Цвет цитаты */
  quote: string
  /** Цвет разделителя */
  separator: string
  /** Цвет предварительно отформатированного текста */
  preformat: string
  /** Цвет блока кода */
  codeBlock: string
  /** Цвет блока цитаты */
  quoteBlock: string
}

// Палитра интерактивных элементов
export type InteractivePalette = {
  /** Фон первичной кнопки */
  buttonPrimaryBackground: string
  /** Цвет текста первичной кнопки */
  buttonPrimaryForeground: string
  /** Фон первичной кнопки при наведении */
  buttonPrimaryHoverBackground: string
  /** Фон вторичной кнопки */
  buttonSecondaryBackground: string
  /** Цвет текста вторичной кнопки */
  buttonSecondaryForeground: string
  /** Фон вторичной кнопки при наведении */
  buttonSecondaryHoverBackground: string
  /** Цвет границы кнопки */
  buttonBorder: string
  /** Фон чекбокса */
  checkboxBackground: string
  /** Граница чекбокса */
  checkboxBorder: string
  /** Цвет границы валидации ввода */
  inputValidationInfoBorder: string
  /** Цвет границы предупреждения валидации */
  inputValidationWarningBorder: string
  /** Цвет границы ошибки валидации */
  inputValidationErrorBorder: string
  /** Фон элемента списка при наведении */
  listHoverBackground: string
  /** Цвет текста элемента списка при наведении */
  listHoverForeground: string
  /** Фон выбранного элемента списка */
  listSelectionBackground: string
  /** Цвет текста выбранного элемента списка */
  listSelectionForeground: string
  /** Фон активного элемента дерева */
  treeActiveBackground: string
  /** Цвет текста активного элемента дерева */
  treeActiveForeground: string
  /** Фон элемента дерева при наведении */
  treeHoverBackground: string
  /** Цвет текста элемента дерева при наведении */
  treeHoverForeground: string
  /** Фон выбранного элемента дерева */
  treeSelectionBackground: string
  /** Цвет текста выбранного элемента дерева */
  treeSelectionForeground: string
  /** Фон активного элемента */
  itemActiveBackground: string
  /** Фон элемента при наведении */
  itemHoverBackground: string
  /** Цвет элемента при наведении */
  itemHoverForeground: string
  /** Фон активного элемента */
  itemActiveBorder: string
}

// Палитра семантических цветов
export type SemanticColorPalette = {
  /** Цвет параметра */
  parameter: string
  /** Цвет объявления параметра */
  parameterDeclaration: string
  /** Цвет свойства */
  property: string
  /** Цвет объявления свойства */
  propertyDeclaration: string
  /** Цвет метода */
  method: string
  /** Цвет объявления метода */
  methodDeclaration: string
  /** Цвет функции */
  function: string
  /** Цвет объявления функции */
  functionDeclaration: string
  /** Цвет переменной */
  variable: string
  /** Цвет объявления переменной */
  variableDeclaration: string
  /** Цвет типа */
  type: string
  /** Цвет объявления типа */
  typeDeclaration: string
  /** Цвет класса */
  class: string
  /** Цвет объявления класса */
  classDeclaration: string
  /** Цвет интерфейса */
  interface: string
  /** Цвет объявления интерфейса */
  interfaceDeclaration: string
  /** Цвет пространства имен */
  namespace: string
  /** Цвет объявления пространства имен */
  namespaceDeclaration: string
  /** Цвет перечисления */
  enum: string
  /** Цвет объявления перечисления */
  enumDeclaration: string
  /** Цвет элемента перечисления */
  enumMember: string
  /** Цвет структуры */
  struct: string
  /** Цвет объявления структуры */
  structDeclaration: string
  /** Цвет параметра типа */
  typeParameter: string
  /** Цвет объявления параметра типа */
  typeParameterDeclaration: string
  /** Цвет макроса */
  macro: string
  /** Цвет объявления макроса */
  macroDeclaration: string
  /** Цвет метки */
  label: string
  /** Цвет объявления метки */
  labelDeclaration: string
  /** Цвет комментария */
  comment: string
  /** Цвет строки */
  string: string
  /** Цвет числа */
  number: string
  /** Цвет булевого значения */
  boolean: string
  /** Цвет регулярного выражения */
  regexp: string
  /** Цвет оператора */
  operator: string
  /** Цвет ключевого слова */
  keyword: string
  /** Цвет модификатора */
  modifier: string
  /** Цвет декоратора */
  decorator: string
  /** Цвет встроенной функции */
  builtIn: string
  /** Цвет библиотеки по умолчанию */
  defaultLibrary: string
  /** Цвет self */
  self: string
  /** Цвет super */
  super: string
  /** Цвет this */
  this: string
  /** Цвет nil */
  nil: string
  /** Цвет null */
  null: string
  /** Цвет undefined */
  undefined: string
  /** Цвет типа self */
  selfType: string
}

// Палитра скобок
export type BracketPalette = {
  /** Фон совпадения скобок */
  matchBackground: string
  /** Граница совпадения скобок */
  matchBorder: string
  /** Цвет скобки */
  foreground: string
  /** Цвет активной скобки */
  activeForeground: string
  /** Фон направляющих скобок */
  guideBackground: string
  /** Активный фон направляющих скобок */
  guideActiveBackground: string
  /** Цвет направляющих скобок */
  guideForeground: string
  /** Активный цвет направляющих скобок */
  guideActiveForeground: string
}

// Палитра элементов markdown
export type MarkdownPalette = {
  /** Цвет заголовка markdown */
  heading: string
  /** Цвет ссылки markdown */
  link: string
  /** Цвет кода markdown */
  code: string
  /** Цвет цитаты markdown */
  quote: string
  /** Фон блока кода markdown */
  codeBlockBackground: string
  /** Цвет блока кода markdown */
  codeBlockForeground: string
  /** Цвет курсива markdown */
  italic: string
  /** Цвет жирного шрифта markdown */
  bold: string
  /** Цвет подчеркивания markdown */
  underline: string
  /** Цвет списка markdown */
  list: string
  /** Цвет таблицы markdown */
  table: string
  /** Цвет горизонтальной линии markdown */
  horizontalRule: string
  /** Цвет зачеркнутого текста markdown */
  strikethrough: string
}

// Палитра операторов
export type OperatorsPalette = {
  /** Цвет арифметических операторов */
  arithmetic: string
  /** Цвет логических операторов */
  logical: string
  /** Цвет операторов сравнения */
  comparison: string
  /** Цвет операторов присваивания */
  assignment: string
  /** Цвет побитовых операторов */
  bitwise: string
  /** Цвет операторов типа */
  type: string
  /** Цвет операторов доступа */
  access: string
  /** Цвет операторов потока */
  flow: string
  /** Цвет прочих операторов */
  other: string
}

// Палитра пунктуации
export type PunctuationPalette = {
  /** Цвет точки с запятой */
  semicolon: string
  /** Цвет запятой */
  comma: string
  /** Цвет точки */
  period: string
  /** Цвет двоеточия */
  colon: string
  /** Цвет скобок */
  brackets: string
  /** Цвет кавычек */
  quotes: string
  /** Цвет скобок */
  parentheses: string
  /** Цвет фигурных скобок */
  braces: string
  /** Цвет квадратных скобок */
  squareBrackets: string
  /** Цвет других знаков препинания */
  other: string
}

// Расширенная палитра с новыми категориями
export type ExtendedPalette = {
  workbench: {
    background: SurfacePalette
    foreground: {
      base: string
      secondary: string
      badge: string
    }
    border: BorderPalette
    accent: {
      primary: string
      secondary: string
      hover: string
      focus: string
    }
  }
  button: InteractivePalette
  neutral: {
    base: string
    surface: string
    highlight: string
    subtle: string
  }
  syntax: {
    text: string
    comments: string
    strings: string
    keywords: string
    types: string
    numbers: string
    booleans: string
    functions: string
    methods: string
    properties: string
    variables: string
    constants: string
    parameters: string
    classes: string
    interfaces: string
    enums: string
    operators: OperatorsPalette
    punctuation: PunctuationPalette
    tags: string
    attributes: string
    error: string
    warning: string
    info: string
    success: string
    object: string
    storage: string
    decorator: string
    annotation: string
    module: string
    namespace: string
  }
  controls: {
    checkboxBackground: string
    checkboxBorder: string
    inputValidationInfoBorder: string
    inputValidationWarningBorder: string
    inputValidationErrorBorder: string
  }
  minimap: {
    sliderBackground: string
    sliderHoverBackground: string
    sliderActiveBackground: string
    gutterAddedBackground: string
    gutterModifiedBackground: string
    gutterDeletedBackground: string
  }
  overviewRuler: {
    errorForeground: string
    warningForeground: string
    infoForeground: string
  }
  scmGraph: {
    foreground1: string
    foreground2: string
    foreground3: string
    foreground4: string
    foreground5: string
    historyItemHoverLabelForeground: string
    historyItemHoverAdditionsForeground: string
    historyItemHoverDeletionsForeground: string
    historyItemHoverDefaultLabelBackground: string
    historyItemHoverDefaultLabelForeground: string
    historyItemRefColor: string
    historyItemRemoteRefColor: string
    historyItemBaseRefColor: string
  }
  alpha: {
    subtle: string
    hover: string
    active: string
    semiOpaque: string
  }
  shadow: {
    inlineChat: string
    widget: string
    scrollbar: string
    editorStickyScroll: string
    panelStickyScroll: string
    sideBarStickyScroll: string
    listFilterWidget: string
  }
  panel: PanelPalette
  statusBar: StatusBarPalette
  titleBar: TitleBarPalette
  focus: FocusPalette
  selection: SelectionPalette
  highlight: HighlightPalette
  border: BorderPalette
  text: TextPalette
  interactive: InteractivePalette
  semantic: SemanticColorPalette
  bracket: BracketPalette
  markdown: MarkdownPalette
}

export type Palette = {
  workbench: {
    background: {
      base: string
      secondary: string
      tertiary: string
      sidebar: string
      activityBar: string
      statusbar: string
      titlebar: string
      tabbar: string
    }
    foreground: {
      base: string
      secondary: string
      badge: string
    }
    border: {
      main: string
    }
    accent: {
      primary: string
      secondary: string
      hover: string
      focus: string
    }
  }

  button: {
    primaryBackground: string // Основной цвет фона для primary кнопок
    primaryForeground: string // Основной цвет текста для primary кнопок
    primaryHoverBackground: string // Цвет фона при наведении для primary кнопок
    secondaryBackground: string // Цвет фона для secondary кнопок
    secondaryForeground: string // Цвет текста для secondary кнопок
    secondaryHoverBackground: string // Цвет фона при наведении для secondary кнопок
    border: string // Цвет границы для кнопок
  }

  // Neutral colors - нейтральные холодно-серо-голубые оттенки для вспомогательных элементов
  neutral: {
    // Cool gray-blue shades for subtle UI elements
    base: string // Основной нейтральный цвет (например, для номеров строк)
    surface: string // Поверхностный цвет (например, для фона заголовков панелей)
    highlight: string // Цвет подсветки (например, для границ или акцентов)
    subtle: string // Более приглушенный оттенок
  }

  // Syntax highlighting colors - цвета подсветки синтаксиса
  syntax: {
    // Основные цвета
    text: string // Основной цвет текста
    comments: string // Комментарии (серо-голубые, легко читаемые но не отвлекающие)
    strings: string // Строки (теплые оттенки)
    keywords: string // Ключевые слова (холодные оттенки)
    types: string // Типы данных (холодные оттенки)
    numbers: string // Числа
    booleans: string // Логические значения
    functions: string // Функции (холодные оттенки)
    methods: string // Методы
    properties: string // Свойства объектов
    variables: string // Переменные (нейтральные оттенки)
    constants: string // Константы (теплые оттенки)
    parameters: string // Параметры функций
    classes: string // Классы
    interfaces: string // Интерфейсы
    enums: string // Перечисления
    operators: string // Операторы
    punctuation: string // Знаки препинания
    tags: string // Теги
    attributes: string // Атрибуты
    error: string // Ошибки
    warning: string // Предупреждения
    info: string // Информационные сообщения
    success: string // Успешные операции
    object: string // Объекты
    storage: string // Storage ключевые слова
    decorator: string // Декораторы
    annotation: string // Аннотации
    module: string // Модули
    namespace: string // Пространства имен
  }

  // Controls colors - цвета элементов управления
  controls: {
    /** Фон для чекбоксов. */
    checkboxBackground: string
    /** Граница для чекбоксов. */
    checkboxBorder: string
    /** Цвет границы для информационных сообщений валидации. */
    inputValidationInfoBorder: string
    /** Цвет границы для предупреждений валидации. */
    inputValidationWarningBorder: string
    /** Цвет границы для ошибок валидации. */
    inputValidationErrorBorder: string
  }
  // Minimap colors - цвета миникарты
  minimap: {
    /** Фон слайдера миникарты. */
    sliderBackground: string
    /** Фон слайдера миникарты при наведении. */
    sliderHoverBackground: string
    /** Фон слайдера миникарты в активном состоянии. */
    sliderActiveBackground: string
    /** Фон для добавленных строк в миникарте. */
    gutterAddedBackground: string
    /** Фон для измененных строк в миникарте. */
    gutterModifiedBackground: string
    /** Фон для удаленных строк в миникарте. */
    gutterDeletedBackground: string
  }
  // Overview ruler colors - цвета полосы обзора
  overviewRuler: {
    /** Цвет для ошибок в полосе обзора. */
    errorForeground: string
    /** Цвет для предупреждений в полосе обзора. */
    warningForeground: string
    /** Цвет для информационных сообщений в полосе обзора. */
    infoForeground: string
  }

  // SCM Graph colors - цвета для графа системы контроль версий
  scmGraph: {
    // Цвета для элементов графа
    foreground1: string // Цвет для первой ветки
    foreground2: string // Цвет для второй ветки
    foreground3: string // Цвет для третьей ветки
    foreground4: string // Цвет для четвертой ветки
    foreground5: string // Цвет для пятой ветки

    // Цвета для элементов при наведении
    historyItemHoverLabelForeground: string // Цвет текста метки при наведении
    historyItemHoverAdditionsForeground: string // Цвет добавлений при наведении
    historyItemHoverDeletionsForeground: string // Цвет удалений при наведении
    historyItemHoverDefaultLabelBackground: string // Фон метки по умолчанию при наведении
    historyItemHoverDefaultLabelForeground: string // Текст метки по умолчанию при наведении

    // Цвета для ссылок
    historyItemRefColor: string // Цвет ссылки
    historyItemRemoteRefColor: string // Цвет удаленной ссылки
    historyItemBaseRefColor: string // Цвет базовой ссылки
  }

  // Alpha variants - альфа-варианты для полупрозрачности
  alpha: {
    subtle: string // 20% прозрачность - для тонких фонов
    hover: string // 40% прозрачность - для состояний наведения
    active: string // 60% прозрачность - для активных состояний
    semiOpaque: string // 80% прозрачность (0xcc)
  }

  // Shadow colors - цвета теней для элементов интерфейса
  shadow: {
    inlineChat: string // Цвет тени для встроенного чата
    widget: string // Цвет тени для виджетов
    scrollbar: string // Цвет тени для полосы прокрутки
    editorStickyScroll: string // Цвет тени для фиксированной прокрутки редактора
    panelStickyScroll: string // Цвет тени для фиксированной прокрутки панели
    sideBarStickyScroll: string // Цвет тени для фиксированной прокрутки боковой панели
    listFilterWidget: string // Цвет тени для виджета фильтрации списка
  }
}

export type SyntaxTokenPalette = {
  // Основные токены синтаксиса
  comments: string
  strings: string
  numbers: string
  booleans: string
  keywords: string
  storage: string
  operators: string
  punctuation: string
  types: string
  classes: string
  interfaces: string
  enums: string
  functions: string
  methods: string
  variables: string
  parameters: string
  constants: string
  properties: string
  tags: string
  attributes: string
  decorators: string
  annotations: string
  nullUndefined: string
  regex: string
  escape: string
  invalid: string
  deprecated: string
  brackets: string
  bracketGuides: string
  diffAdded: string
  diffDeleted: string
  diffModified: string
  jsonKeyLevel0: string
  jsonKeyLevel1: string
  jsonKeyLevel2: string
  jsonKeyLevel3: string
  jsonKeyLevel4: string
  jsonKeyLevel5: string
  jsonKeyLevel6: string
  jsonKeyLevel7: string
  jsonKeyLevel8: string
  markdownHeading: string
  markdownLink: string
  markdownCode: string
  markdownQuote: string
  markupItalic: string
  markupBold: string
  markupUnderline: string
  tokenInfo: string
  tokenWarn: string
  tokenError: string
  tokenDebug: string
  cssClass: string
  cssId: string
  cssTag: string
  cssPseudo: string
  cssProperty: string
  cssValue: string
  cssUnit: string
  cssVariable: string
  htmlAttribute: string
  htmlEntity: string
  vueAttribute: string
  phpVariable: string
  phpConstant: string
  pythonBuiltin: string
  pythonDecorator: string
  sqlKeyword: string
  sqlFunction: string
  javaModifier: string
  javaImport: string
  javaStorage: string
  csharpModifier: string
  csharpKeyword: string
  csharpType: string
  goPackage: string
  goBuiltins: string
  goKeywords: string
  rustKeyword: string
  rustType: string
  rubySymbol: string
  rubyConstant: string
  shellVariable: string
  yamlKey: string
  yamlString: string
  jsonProperty: string
  xmlTag: string
  xmlAttribute: string
  xmlString: string
  jsxTag: string
  jsxAttribute: string
  jsxText: string
  tsType: string
  tsInterface: string
  tsEnum: string
  tsNamespace: string
  tsTypeParameter: string
  tsDecorators: string
  tsKeywords: string
  tsStorage: string
  tsModule: string
  jsImportExport: string
  jsSpecialIdentifiers: string
  jsTemplateExpression: string
  jsSpreadOperator: string
  jsDestructuring: string
  jsControlFlow: string
  jsOperators: string
  jsMethod: string
  jsProp: string
  jsGlobal: string
  jsUndefined: string
  jsNull: string
  jsRegexp: string
  jsEval: string
  jsPrototype: string
  jsScope: string
  jsBuiltins: string
  jsConsole: string
  jsLabel: string
  jsModuleExports: string
  jsRequire: string
  jsJson: string
  jsStorage: string
  jsDecorator: string
  jsAsync: string
  jsPromise: string
  jsError: string
  jsException: string
  jsDebug: string
  jsTodo: string
  jsCommentTags: string
  jsDocTags: string
  jsDocComments: string
  jsDocTypes: string
  jsDocValues: string
  jsDocVariables: string
  jsDocFunctions: string
  jsDocKeywords: string
  semanticParameter: string
  semanticParameterDeclaration: string
  semanticProperty: string
  semanticPropertyDeclaration: string
  semanticMethod: string
  semanticMethodDeclaration: string
  semanticFunction: string
  semanticFunctionDeclaration: string
  semanticVariable: string
  semanticVariableDeclaration: string
  semanticType: string
  semanticTypeDeclaration: string
  semanticClass: string
  semanticClassDeclaration: string
  semanticInterface: string
  semanticInterfaceDeclaration: string
  semanticNamespace: string
  semanticNamespaceDeclaration: string
  semanticEnum: string
  semanticEnumDeclaration: string
  semanticEnumMember: string
  semanticStruct: string
  semanticStructDeclaration: string
  semanticTypeParameter: string
  semanticTypeParameterDeclaration: string
  semanticMacro: string
  semanticMacroDeclaration: string
  semanticLabel: string
  semanticLabelDeclaration: string
  semanticComment: string
  semanticString: string
  semanticNumber: string
  semanticBoolean: string
  semanticRegexp: string
  semanticOperator: string
  semanticKeyword: string
  semanticModifier: string
  semanticDecorator: string
  semanticBuiltIn: string
  semanticDefaultLibrary: string
  semanticSelf: string
  semanticSuper: string
  semanticThis: string
  semanticNil: string
  semanticNull: string
  semanticUndefined: string
  semanticSelfType: string
}

export type NestedTokens = {
  workbench: {
    editor: {
      base: {
        background: string
        foreground: string
      }
      selection: {
        background: string
        inactiveBackground: string
        highlight: string
      }
      find: {
        match: {
          background: string
          border: string
        }
        highlight: {
          background: string
        }
        rangeHighlight: {
          background: string
        }
      }
      cursor: {
        foreground: string
      }
      whitespace: {
        foreground: string
      }
      lineHighlight: {
        background: string
      }
      indentGuide: {
        background1: string
        activeBackground1: string
      }
      lineNumber: {
        foreground: string
        activeForeground: string
      }
      hoverWidget: {
        background: string
        border: string
      }
      bracketMatch: {
        background: string
        border: string
      }
    }
    terminal: {
      background: string
      foreground: string
      selectionBackground: string
      ansi: {
        black: string
        red: string
        green: string
        yellow: string
        blue: string
        magenta: string
        cyan: string
        white: string
        brightBlack: string
        brightRed: string
        brightGreen: string
        brightYellow: string
        brightBlue: string
        brightMagenta: string
        brightCyan: string
        brightWhite: string
      }
    }
    peekView: {
      title: {
        background: string
        label: string
        description: string
      }
      result: {
        background: string
        selectionForeground: string
        selectionBackground: string
        lineForeground: string
        fileForeground: string
        matchHighlightBackground: string
      }
      editor: {
        background: string
        matchHighlightBackground: string
      }
      border: string
    }
  }
  semantic: {
    tokens: {
      parameter: {
        base: string
        declaration: string
      }
      property: {
        base: string
        declaration: string
        defaultLibrary: string
      }
      variable: {
        base: string
        declaration: string
        defaultLibrary: string
      }
    }
  }
  tokens: {
    textmate: {
      comments: {
        primary: string
      }
      strings: {
        primary: string
      }
      keywords: {
        primary: string
      }
      numbers: {
        primary: string
      }
      functions: {
        primary: string
      }
      variables: {
        primary: string
      }
      punctuation: {
        primary: string
      }
      operators: {
        primary: string
      }
      types: {
        primary: string
      }
      tags: {
        primary: string
      }
    }
  }
}
