export type Hex = `#${string}`

/**
 * The main color palette for the Tokyo Night Dark theme.
 *
 * Organized by functional groups for easy understanding and maintenance.
 * All colors use hex format with type safety.
 */
export interface Palette {
  /** Background colors - from darkest to lightest */
  bg: {
    /** Main background of the editor and side panels */
    base: Hex
    /** Elevated elements (panels, dialogs) */
    elevated: Hex
    /** Sunken areas (statusbar, some panels) */
    sunken: Hex
    /** Overlays and modal windows */
    overlay: Hex
    /** Input fields and forms */
    input: Hex
    /** Hover state for interactive elements */
    hover: Hex
    /** Active/pressed elements */
    active: Hex
    /** Drop zones for drag&drop */
    drop: Hex
    /** Current line highlight */
    lineHighlight: Hex
    /** Matching bracket highlight */
    bracketMatch: Hex
    /** Tab background */
    tabs: Hex
    /** Different types of selection */
    selection: {
      /** Active selection */
      active: Hex
      /** Inactive selection */
      inactive: Hex
      /** Selection in focus */
      focus: Hex
      /** Selection in a menu */
      menu: Hex
    }
  }
  /** Lines and borders */
  line: {
    /** Main element borders */
    border: Hex
    /** Borders in menus */
    menu: Hex
  }
  /** Text colors - from primary to auxiliary */
  fg: {
    /** Primary text */
    primary: Hex
    /** Muted text (secondary information) */
    muted: Hex
    /** Subtle text (hints, labels) */
    subtle: Hex
    /** Inactive/disabled text */
    inactive: Hex
    /** Panel text (improved readability in sidebars) */
    panelText: Hex
    /** Soft text (intermediate brightness) */
    soft: Hex
    /** Soft titles */
    softTitle: Hex
    /** Text on selection */
    selectionText: Hex
    /** Text on top of a selection */
    onSelection: Hex
    /** Active titles */
    activeTitle: Hex
    /** Breadcrumb text (improved contrast) */
    breadcrumb: Hex
    /** Description text (improved contrast) */
    description: Hex
  }
  /** Brand colors */
  brand: {
    /** Primary brand color (buttons, links) */
    primary: Hex
    /** Button specific colors */
    button: {
      /** Primary button background */
      primary: Hex
      /** Primary button hover background */
      hover: Hex
    }
  }
  /** Accent colors for syntax highlighting */
  accent: {
    /** Blue - keywords, types */
    blue: Hex
    /** Cyan - strings, imports */
    cyan: Hex
    /** Teal - properties, attributes */
    teal: Hex
    /** Magenta - variables, constants */
    magenta: Hex
    /** Yellow - numbers, parameters */
    yellow: Hex
    /** Orange - functions, methods */
    orange: Hex
    /** Red - errors, warnings */
    red: Hex
    /** Purple - operators, special characters */
    purple: Hex
  }
  /** Token-specific colors for syntax highlighting */
  token: {
    /** Comments and documentation */
    comment: Hex
    /** Documentation subtypes */
    commentDoc: Hex
    /** Emphasized documentation */
    commentDocEmphasized: Hex
    /** Constant values (numbers, booleans) */
    constant: Hex
    /** Strings and text content */
    string: Hex
    /** Color values */
    color: Hex
    /** Invalid code */
    invalid: Hex
    /** Invalid deprecated */
    invalidDeprecated: Hex
    /** Storage types and modifiers */
    storageType: Hex
    /** Storage modifiers (var, const, let) */
    storageModifier: Hex
    /** Template interpolation */
    interpolation: Hex
    /** Blade/Twig/Smarty keywords */
    templateKeyword: Hex
    /** Spread operator */
    spread: Hex
    /** Operators and punctuation */
    operator: Hex
    /** Import/export keywords */
    importExport: Hex
    /** General keywords */
    keyword: Hex
    /** SQL keywords */
    keywordSql: Hex
    /** Logical operators */
    keywordLogical: Hex
    /** HTML/XML tags */
    tag: Hex
    /** Component tags */
    tagComponent: Hex
    /** Tag punctuation */
    tagPunctuation: Hex
    /** Global constants */
    globalConstant: Hex
    /** Variables */
    variable: Hex
    /** Object variables */
    objectVariable: Hex
    /** Array keys */
    arrayKey: Hex
    /** Object keys */
    objectKey: Hex
    /** Object properties */
    objectProperty: Hex
    /** Object properties (alternative) */
    objectPropertyAlt: Hex
    /** Nested object keys (level 3) */
    objectKeyLevel3: Hex
    /** C-related variables */
    cVariable: Hex
    /** Other variables */
    otherVariable: Hex
    /** Methods */
    method: Hex
    /** Functions */
    function: Hex
    /** Function arguments */
    functionArg: Hex
    /** Type constants */
    typeConstant: Hex
    /** Variable definitions */
    variableDefinition: Hex
    /** Inherited classes */
    inheritedClass: Hex
    /** Classes and support types */
    classSupport: Hex
    /** Class names */
    className: Hex
    /** Support functions */
    supportFunction: Hex
    /** CSS properties */
    cssProperty: Hex
    /** CSS fonts */
    cssFont: Hex
    /** CSS classes */
    cssClass: Hex
    /** CSS IDs */
    cssId: Hex
    /** CSS tags */
    cssTag: Hex
    /** CSS references */
    cssReference: Hex
    /** CSS punctuation */
    cssPunctuation: Hex
    /** CSS at-rules */
    cssAtRule: Hex
    /** CSS parent selector */
    cssParentSelector: Hex
    /** SCSS mixins */
    scssMixin: Hex
    /** SCSS includes */
    scssInclude: Hex
    /** CSS values */
    cssValue: Hex
    /** Language methods */
    languageMethod: Hex
    /** This keyword */
    thisKeyword: Hex
    /** HTML attributes */
    htmlAttribute: Hex
    /** HTML entities */
    htmlEntity: Hex
    /** Vue attributes */
    vueAttribute: Hex
    /** CSS pseudo selectors */
    cssPseudo: Hex
    /** Markup inserted */
    markupInserted: Hex
    /** Markup deleted */
    markupDeleted: Hex
    /** Markup changed */
    markupChanged: Hex
    /** Regular expressions */
    regex: Hex
    /** Regex groups */
    regexGroup: Hex
    /** Regex character classes */
    regexCharClass: Hex
    /** Regex character sets */
    regexCharSet: Hex
    /** Regex quantifiers */
    regexQuantifier: Hex
    /** Regex backslash */
    regexBackslash: Hex
    /** Escape characters */
    escapeChar: Hex
    /** Decorators */
    decorator: Hex
    /** CSS units */
    cssUnit: Hex
    /** JSON keys (different levels) */
    jsonKey0: Hex
    jsonKey1: Hex
    jsonKey2: Hex
    jsonKey3: Hex
    jsonKey4: Hex
    jsonKey5: Hex
    jsonKey6: Hex
    jsonKey7: Hex
    jsonKey8: Hex
    /** Plain punctuation */
    plainPunctuation: Hex
    /** Block punctuation */
    blockPunctuation: Hex
    /** Markdown headings */
    markdownH1: Hex
    markdownH2: Hex
    markdownH3: Hex
    markdownH4: Hex
    markdownH5: Hex
    markdownH6: Hex
    /** Markdown content */
    markdownContent: Hex
    /** HTML text */
    htmlText: Hex
    /** Markdown raw inline */
    markdownRawInline: Hex
    /** Markdown raw punctuation */
    markdownRawPunctuation: Hex
    /** Markup italic */
    markupItalic: Hex
    /** Markup bold */
    markupBold: Hex
    /** Markdown blockquote */
    markdownBlockquote: Hex
    /** Markdown links */
    markdownLink: Hex
    /** Markdown code blocks */
    markdownCodeBlock: Hex
    /** Markdown separator */
    markdownSeparator: Hex
    /** Markup table */
    markupTable: Hex
    /** Token info */
    tokenInfo: Hex
    /** Token warn */
    tokenWarn: Hex
    /** Token error */
    tokenError: Hex
    /** Token debug */
    tokenDebug: Hex
    /** Apache tags */
    apacheTag: Hex
    /** Preprocessor */
    preprocessor: Hex
    /** Environment values */
    envValue: Hex
    /** Ignored elements */
    ignored: Hex
    /** Numbers */
    number: Hex
    /** Markup elements */
    markup: Hex
    /** Error elements */
    error: Hex
    /** Code blocks */
    codeBlock: Hex
    /** Link text */
    linkText: Hex
    /** Quote marks */
    quoteMark: Hex
    /** Link URLs */
    linkUrl: Hex
    /** Warnings */
    warning: Hex
    /** Deleted content */
    deleted: Hex
    /** Inserted content */
    inserted: Hex
  }
  /** ANSI colors for the terminal */
  ansi: {
    black: Hex
    brightBlack: Hex
    red: Hex
    brightRed: Hex
    green: Hex
    brightGreen: Hex
    yellow: Hex
    brightYellow: Hex
    blue: Hex
    brightBlue: Hex
    magenta: Hex
    brightMagenta: Hex
    cyan: Hex
    brightCyan: Hex
    white: Hex
    brightWhite: Hex
  }
  /** UI-specific colors and helpers (non-syntax, common UI accents) */
  ui: {
    /** Subtle/description text */
    description: Hex
    /** Breadcrumb foreground */
    breadcrumb: Hex
    /** Shadows */
    shadow: {
      widget: Hex
      scrollbar: Hex
    }
    /** Badges */
    badge: {
      base: Hex
      fg: Hex
    }
    /** Sash */
    sash: {
      hover: Hex
    }
    /** Selection wash base (used with alpha) */
    selectionWash: Hex
    /** Scrollbar slider base (used with alpha) */
    scrollbarBase: Hex
    /** Inputs */
    input: {
      placeholder: Hex
      border: Hex
    }
    /** Lists */
    list: {
      hoverBg: Hex
      dropBg: Hex
    }
    /** Links in editor when active */
    editorLinkActive: Hex
    /** CodeLens text */
    codeLens: Hex
    /** Generic 'no matches' outline (e.g., filter widget) */
    noMatches: Hex
    /** Muted blue highlight for suggestions etc. */
    settingsHeader: Hex
    /** Window borders */
    window: {
      border: Hex
    }
    /** Tabs specifics */
    tab: {
      activeBorder: Hex
      activeModifiedBorder: Hex
      inactiveModifiedBorder: Hex
      unfocusedActiveBorder: Hex
      lastPinnedBorder: Hex
    }
    /** Status bar item states */
    statusItem: {
      hover: Hex
      prominentHover: Hex
    }
    /** Text specifics */
    text: {
      preformat: Hex
      separator: Hex
    }
    /** Debug UI specifics */
    debug: {
      exceptionBorder: Hex
      consoleError: Hex
      consoleWarning: Hex
      stateLabelBg: Hex
      tokenValue: Hex
      tokenString: Hex
      tokenError: Hex
      info: Hex
    }
    /** Editor overview ruler colors */
    editorOverview: {
      error: Hex
      info: Hex
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Editor gutter colors */
    gutter: {
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Minimap gutter colors */
    minimapGutter: {
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Charts */
    charts: {
      foreground: Hex
    }
    /** GitLens helpers */
    gitlens: {
      foreground: Hex
    }
    /** Git decorations */
    git: {
      ignored: Hex
      deleted: Hex
      conflicting: Hex
      stageDeleted: Hex
      stageModified: Hex
    }
    /** Common semantic colors */
    semantic: {
      /** Pure white for high contrast */
      white: Hex
      /** Notification links */
      notificationLink: Hex
      /** Offline status */
      offline: Hex
    }
  }
}

export const palette: Palette = {
  bg: {
    // Основные фоновые цвета - от самого темного к самому светлому
    base: '#16161e', // Основной фон редактора и боковых панелей (затемнен для GitHub)
    elevated: '#181820', // Приподнятые элементы (панели, диалоги) - затемнен
    sunken: '#14141c', // Утопленные области (статусбар, некоторые панели) - затемнен
    overlay: '#181820', // Оверлеи и модальные окна - затемнен
    input: '#181820', // Поля ввода и формы - затемнен
    hover: '#24283b', // Состояние наведения для интерактивных элементов (было #1e1f2a - более контрастный)
    active: '#2a3041', // Активные/нажатые элементы (было #252a3f - еще темнее для active состояния)
    drop: '#2a3041', // Зоны перетаскивания для drag&drop (синхронизировано с active)
    lineHighlight: '#1a1b26', // Подсветка текущей строки (было #181820 - немного ярче)
    bracketMatch: '#1e1f2a', // Подсветка соответствующих скобок (немного светлее базового)
    tabs: '#16161e', // Фон вкладок (затемнен)
    selection: {
      active: '#252a3f', // Активное выделение
      inactive: '#292b39', // Неактивное выделение (более мягкий, но контрастный к фону боковой панели)
      focus: '#2b3a65', // Выделение в фокусе
      menu: '#2b3a65', // Выделение в меню
    },
  },
  line: {
    // Линии и границы
    border: '#22232e', // Основные границы элементов
    menu: '#22232e', // Границы в меню
  },
  fg: {
    // Цвета текста - от основного к вспомогательному (улучшенная контрастность)
    primary: '#c0caf5', // Основной текст
    muted: '#a9b1d6', // Приглушенный текст (вторичная информация)
    subtle: '#6b7499', // Тонкий текст (подсказки, метки) - увеличена яркость для лучшей контрастности
    inactive: '#7883b3', // Неактивный/отключенный текст
    panelText: '#c0caf5', // Текст панелей (улучшенная читаемость в боковых панелях) - увеличена контрастность
    soft: '#a9b1d6', // Мягкий текст (промежуточная яркость)
    softTitle: '#c0caf5', // Мягкие заголовки
    selectionText: '#ffffff', // Текст на выделении
    onSelection: '#ffffff', // Текст поверх выделения
    activeTitle: '#c0caf5', // Активные заголовки
    // Улучшенные элементы UI с повышенной контрастностью
    breadcrumb: '#7aa2f7', // Текст хлебных крошек (улучшение контрастности до 4.5:1)
    description: '#7aa2f7', // Текст описаний (более читаемый)
  },
  brand: {
    // Брендовые цвета
    primary: '#7dcfff', // Основной брендовый цвет (кнопки, ссылки) - Tokyo Night голубой
    button: {
      // Специфичные цвета кнопок
      primary: '#364a82', // Фон основной кнопки - темно-синий
      hover: '#3d59a1', // Фон кнопки при наведении - активный Tokyo Night синий
    },
  },
  accent: {
    // Акцентные цвета для подсветки синтаксиса (оригинальные цвета Tokyo Night)
    blue: '#7aa2f7', // Синий - ключевые слова, типы
    cyan: '#7dcfff', // Циан - строки, импорты
    teal: '#85c9c1', // Бирюзовый - свойства, атрибуты
    magenta: '#bb9af7', // Пурпурный - переменные, константы
    yellow: '#e0af68', // Желтый - числа, параметры
    orange: '#ff9e64', // Оранжевый - функции, методы
    red: '#f7768e', // Красный - ошибки, предупреждения
    purple: '#9d7cd8', // Фиолетовый - операторы, специальные символы
  },
  token: {
    // Токены для подсветки синтаксиса - улучшенная контрастность
    comment: '#6b7499', // Комментарии и документация (было #545c7e - увеличена яркость для лучшей читаемости)
    commentDoc: '#5a607a', // Подтипы документации (было #545c7e - небольшое увеличение контрастности)
    commentDocEmphasized: '#7481a6', // Выделенная документация
    constant: '#e0af68', // Константные значения (числа, булевы) - изменено с розоватого на желтый
    string: '#9ece6a', // Строки и текстовое содержимое - более яркий зеленый
    color: '#9aa5ce', // Цветовые значения
    invalid: '#f7768e', // Недопустимый код
    invalidDeprecated: '#bb9af7', // Недопустимый устаревший код
    storageType: '#bb9af7', // Типы хранения и модификаторы
    storageModifier: '#9d7cd8', // Модификаторы хранения (var, const, let)
    interpolation: '#7dcfff', // Интерполяция шаблонов
    templateKeyword: '#73daca', // Ключевые слова Blade/Twig/Smarty (было #0db9d7 - более отличимый teal цвет)
    spread: '#e0687a', // Оператор распространения
    operator: '#a9b1d6', // Операторы и пунктуация (было #89ddff - используем muted цвет для лучшего баланса)
    importExport: '#bb9af7', // Ключевые слова import/export (было #7dcfff - используем magenta для ключевых слов)
    keyword: '#bb9af7', // Общие ключевые слова
    keywordSql: '#7dcfff', // SQL ключевые слова
    keywordLogical: '#bb9af7', // Логические операторы
    tag: '#f7768e', // HTML/XML теги
    tagComponent: '#bb9af7', // Теги компонентов (теперь пурпурные)
    tagPunctuation: '#a9b1d6', // Пунктуация тегов (было #89ddff - менее яркий для пунктуации)
    globalConstant: '#e0af68', // Глобальные константы
    variable: '#c0caf5', // Переменные
    objectVariable: '#c0caf5', // Объектные переменные
    arrayKey: '#7dcfff', // Ключи массивов
    objectKey: '#c0caf5', // Ключи объектов (теперь цвет основного текста)
    objectProperty: '#7dcfff', // Свойства объектов
    objectPropertyAlt: '#c0caf5', // Свойства объектов (альтернативные)
    objectKeyLevel3: '#41a6b5', // Вложенные ключи объектов (уровень 3)
    cVariable: '#f7768e', // C-связанные переменные
    otherVariable: '#f7768e', // Другие переменные
    method: '#7aa2f7', // Методы
    function: '#7aa2f7', // Функции
    functionArg: '#e0af68', // Аргументы функций
    typeConstant: '#bb9af7', // Типовые константы
    variableDefinition: '#bb9af7', // Определения переменных
    inheritedClass: '#bb9af7', // Наследуемые классы
    classSupport: '#0db9d7', // Классы и поддерживающие типы
    className: '#c0caf5', // Имена классов
    supportFunction: '#0db9d7', // Поддерживающие функции
    cssProperty: '#7aa2f7', // CSS свойства
    cssFont: '#9ece6a', // CSS шрифты
    cssClass: '#c0caf5', // CSS классы
    cssId: '#bb9af7', // CSS идентификаторы
    cssTag: '#0db9d7', // CSS теги
    cssReference: '#0db9d7', // CSS ссылки
    cssPunctuation: '#9abdf5', // CSS пунктуация
    cssAtRule: '#ff9e64', // CSS at-правила
    cssParentSelector: '#73daca', // CSS родительский селектор
    scssMixin: '#bb9af7', // SCSS миксины
    scssInclude: '#9d7cd8', // SCSS включения
    cssValue: '#ff9e64', // CSS значения (теперь оранжевые)
    languageMethod: '#f7768e', // Языковые методы
    thisKeyword: '#f7768e', // Ключевое слово this
    htmlAttribute: '#bb9af7', // HTML атрибуты
    htmlEntity: '#0DB9D7', // HTML сущности
    vueAttribute: '#bb9af7', // Vue атрибуты
    cssPseudo: '#bb9af7', // CSS псевдо-селекторы
    markupInserted: '#449dab', // Вставленная разметка
    markupDeleted: '#914c54', // Удаленная разметка
    markupChanged: '#6183bb', // Измененная разметка
    regex: '#b4f9f8', // Регулярные выражения
    regexGroup: '#f7768e', // Группы регулярных выражений
    regexCharClass: '#bb9af7', // Классы символов регулярных выражений
    regexCharSet: '#e0af68', // Наборы символов регулярных выражений
    regexQuantifier: '#9ece6a', // Квантификаторы регулярных выражений
    regexBackslash: '#c0caf5', // Обратная косая черта в регулярных выражениях
    escapeChar: '#9ece6a', // Escape-символы
    decorator: '#7aa2f7', // Декораторы
    cssUnit: '#f7768e', // CSS единицы измерения
    jsonKey0: '#7aa2f7', // JSON ключи (разные уровни)
    jsonKey1: '#0db9d7',
    jsonKey2: '#7dcfff',
    jsonKey3: '#bb9af7',
    jsonKey4: '#e0af68',
    jsonKey5: '#0db9d7',
    jsonKey6: '#73daca',
    jsonKey7: '#f7768e',
    jsonKey8: '#9ece6a',
    plainPunctuation: '#9abdf5', // Обычная пунктуация
    blockPunctuation: '#9abdf5', // Блочная пунктуация
    markdownH1: '#9ece6a', // Markdown заголовки
    markdownH2: '#61bdf2',
    markdownH3: '#7aa2f7',
    markdownH4: '#6d91de',
    markdownH5: '#9aa5ce',
    markdownH6: '#747ca1',
    markdownContent: '#c0caf5', // Markdown содержимое
    htmlText: '#9aa5ce', // HTML текст
    markdownRawInline: '#bb9af7', // Markdown сырой встроенный код
    markdownRawPunctuation: '#545c7e', // Markdown сырая пунктуация
    markupItalic: '#c0caf5', // Разметка курсив
    markupBold: '#c0caf5', // Разметка жирный
    markdownBlockquote: '#545c7e', // Markdown цитаты
    markdownLink: '#73daca', // Markdown ссылки
    markdownCodeBlock: '#9ece6a', // Markdown блоки кода
    markdownSeparator: '#545c7e', // Markdown разделители
    markupTable: '#c0cefc', // Разметка таблиц
    tokenInfo: '#7dcfff', // Информационные токены
    tokenWarn: '#ffdb69', // Предупреждающие токены
    tokenError: '#f7768e', // Токены ошибок
    tokenDebug: '#b267e6', // Отладочные токены
    apacheTag: '#f7768e', // Apache теги
    preprocessor: '#73daca', // Препроцессор
    envValue: '#7aa2f7', // Значения окружения
    // Добавленные недостающие свойства - улучшенная контрастность
    ignored: '#6b7499', // Игнорируемые элементы (было #444b6a - синхронизировано с comment)
    number: '#c0768e', // Числа
    markup: '#449dab', // Элементы разметки
    error: '#914c54', // Элементы ошибок
    codeBlock: '#61bdf2', // Блоки кода
    linkText: '#6d91de', // Текст ссылок
    quoteMark: '#747ca1', // Кавычки
    linkUrl: '#c0cefc', // URL ссылок
    warning: '#ffdb69', // Предупреждения
    deleted: '#db4b4b', // Удаленное содержимое
    inserted: '#b267e6', // Вставленное содержимое
  },
  ansi: {
    // ANSI цвета для терминала в стиле Tokyo Night
    black: '#414868', // Черный
    brightBlack: '#545c7e', // Яркий черный
    red: '#f7768e', // Красный
    brightRed: '#f7768e', // Яркий красный
    green: '#9ece6a', // Зеленый
    brightGreen: '#9ece6a', // Яркий зеленый
    yellow: '#e0af68', // Желтый
    brightYellow: '#e0af68', // Яркий желтый
    blue: '#7aa2f7', // Синий
    brightBlue: '#7aa2f7', // Яркий синий
    magenta: '#bb9af7', // Пурпурный
    brightMagenta: '#bb9af7', // Яркий пурпурный
    cyan: '#7dcfff', // Циан
    brightCyan: '#7dcfff', // Яркий циан
    white: '#c0caf5', // Белый
    brightWhite: '#c0caf5', // Яркий белый
  },
  ui: {
    // UI-специфичные цвета и помощники (не синтаксис, общие UI акценты)
    description: '#c0caf5', // Тонкий/описательный текст - максимальная контрастность для описаний в виджетах
    breadcrumb: '#c0caf5', // Передний план хлебных крошек - увеличена контрастность для навигации
    shadow: {
      // Тени
      widget: '#ffffff00', // Тень виджета
      scrollbar: '#00000033', // Тень скроллбара
    },
    badge: {
      // Значки
      base: '#007ACC', // Базовый цвет значка - используем цвет из Dark+ для лучшей контрастности
      fg: '#ffffff', // Передний план значка - белый текст для максимальной контрастности
    },
    sash: {
      // Разделитель
      hover: '#252a3f', // Разделитель при наведении
    },
    selectionWash: '#515c7e', // Базовая заливка выделения (используется с альфа)
    scrollbarBase: '#868bc4', // Базовый цвет ползунка скроллбара (используется с альфа)
    input: {
      // Поля ввода
      placeholder: '#787c99', // Заполнитель поля ввода
      border: '#20212c', // Граница поля ввода
    },
    list: {
      // Списки
      hoverBg: '#24283b', // Фон списка при наведении (было #1f2335 - синхронизировано с общим hover)
      dropBg: '#4158a6', // Фон списка при перетаскивании (было #3d59a1 - более яркий drop)
    },
    editorLinkActive: '#acb0d0', // Ссылки в редакторе когда активны
    codeLens: '#7aa2f7', // Текст CodeLens - увеличена контрастность
    noMatches: '#f7768e', // Общий контур "нет совпадений" (например, виджет фильтра)
    settingsHeader: '#6183bb', // Приглушенная синяя подсветка для предложений и т.д.
    window: {
      // Границы окон
      border: '#20212c', // Граница окна
    },
    tab: {
      // Специфика вкладок
      activeBorder: '#7aa2f7', // Граница активной вкладки
      activeModifiedBorder: '#ff9e64', // Граница активной измененной вкладки
      inactiveModifiedBorder: '#e0af68', // Граница неактивной измененной вкладки
      unfocusedActiveBorder: '#24283b', // Граница активной вкладки без фокуса
      lastPinnedBorder: '#363b54', // Граница последней закрепленной вкладки
    },
    statusItem: {
      // Состояния элементов статусбара
      hover: '#24283b', // Наведение на элемент статусбара (было #1f2335 - консистентный hover)
      prominentHover: '#2a3041', // Выделенное наведение на элемент статусбара (было #1a1b26 - больше контраста)
    },
    text: {
      // Специфика текста
      preformat: '#9699a8', // Предварительно отформатированный текст
      separator: '#363b54', // Разделитель текста
    },
    debug: {
      // Специфика отладочного UI
      exceptionBorder: '#963c47', // Граница исключения отладки
      consoleError: '#f7768e', // Ошибка консоли отладки
      consoleWarning: '#e0af68', // Предупреждение консоли отладки
      stateLabelBg: '#1e1e25', // Фон метки состояния отладки
      tokenValue: '#9aa5ce', // Значение токена отладки
      tokenString: '#9ece6a', // Строка токена отладки
      tokenError: '#f7768e', // Ошибка токена отладки
      info: '#7dcfff', // Информация отладки
    },
    editorOverview: {
      // Цвета линейки обзора редактора
      error: '#f7768e', // Ошибка в обзоре редактора
      info: '#7dcfff', // Информация в обзоре редактора
      modified: '#7aa2f7', // Измененное в обзоре редактора
      added: '#9ece6a', // Добавленное в обзоре редактора
      deleted: '#f7768e', // Удаленное в обзоре редактора
    },
    gutter: {
      // Цвета желоба редактора
      modified: '#7aa2f7', // Измененное в желобе
      added: '#9ece6a', // Добавленное в желобе
      deleted: '#f7768e', // Удаленное в желобе
    },
    minimapGutter: {
      // Цвета желоба миникарты
      modified: '#7aa2f7', // Измененное в желобе миникарты
      added: '#9ece6a', // Добавленное в желобе миникарты
      deleted: '#f7768e', // Удаленное в желобе миникарты
    },
    charts: {
      // Диаграммы
      foreground: '#9aa5ce', // Передний план диаграмм
    },
    gitlens: {
      // Помощники GitLens
      foreground: '#a9b1d6', // Передний план GitLens - увеличена контрастность
    },
    git: {
      // Git декорации
      ignored: '#6b7499', // Игнорируемые Git файлы - увеличена контрастность
      deleted: '#f7768e', // Удаленные Git файлы
      conflicting: '#e0af68', // Конфликтующие Git файлы
      stageDeleted: '#f7768e', // Удаленные в стейдже Git файлы
      stageModified: '#7aa2f7', // Измененные в стейдже Git файлы
    },
    semantic: {
      // Общие семантические цвета
      white: '#ffffff', // Чистый белый для высокого контраста
      notificationLink: '#6183bb', // Ссылки уведомлений
      offline: '#f7768e', // Статус оффлайн
    },
  },
}
