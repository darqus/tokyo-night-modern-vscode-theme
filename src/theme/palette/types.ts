export type VSCodeTheme = {
  name: string
  type: 'dark' | 'light'
  colors: Record<string, string>
  tokenColors: Array<{
    name?: string
    scope: string | string[]
    settings: {
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
