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
    // Фоны в стиле Tokyo Night для лучшего погружения
    base: '#16161e', // Основной фон редактора
    elevated: '#16161e', // Всплывающие окна, панели - теперь используют базовый фон
    sunken: '#17171dff', // Статус-бар, сайдбар
    overlay: '#16161e', // Оверлеи - теперь используют базовый фон
    input: '#181820', // Поля ввода
    hover: '#292e42', // Hover-эффекты
    active: '#3d59a1', // Активные элементы
    drop: '#2b3a65', // Зоны drag-n-drop
    lineHighlight: '#1e202e', // Подсветка текущей строки
    bracketMatch: '#3b4261', // Подсветка скобок
    tabs: '#16161e', // Фон вкладок - уже использует базовый фон
    selection: {
      active: '#364a82', // Активное выделение
      inactive: '#2b3a65', // Неактивное выделение
      focus: '#3d59a1', // Выделение в фокусе
      menu: '#364a82', // Выделение в меню
    },
  },
  line: {
    border: '#222639', // Основные границы
    menu: '#202433', // Границы в меню
  },
  fg: {
    // Цвета текста в стиле Tokyo Night
    primary: '#c0caf5', // Основной текст
    muted: '#a9b1d6', // Второстепенный текст
    subtle: '#636986', // Подсказки, комментарии
    inactive: '#636986', // Неактивный текст
    soft: '#a9b1d6', // Мягкий текст
    softTitle: '#c0caf5', // Заголовки
    selectionText: '#ffffff', // Текст на выделении (белый для контраста)
    onSelection: '#ffffff', // Текст поверх выделения
    activeTitle: '#c0caf5', // Активные заголовки
  },
  brand: {
    primary: '#7aa2f7', // Основной акцентный цвет (Tokyo Night blue)
    button: {
      primary: '#3d59a1', // Более темный синий для кнопок
      hover: '#4a6bb8', // Hover-эффект для кнопок
    },
  },
  accent: {
    // Акцентные цвета из оригинальной палитры Tokyo Night
    blue: '#7aa2f7', // Ключевые слова, типы
    cyan: '#7dcfff', // Строки, импорты
    teal: '#85c9c1', // Свойства, атрибуты
    magenta: '#bb9af7', // Переменные, константы
    yellow: '#e0af68', // Числа, параметры
    orange: '#ff9e64', // Функции, методы
    red: '#f7768e', // Ошибки, предупреждения
    purple: '#9d7cd8', // Операторы, спецсимволы
  },
  token: {
    // Цвета для токенов синтаксиса
    comment: '#444b6a',
    commentDoc: '#5a638c',
    commentDocEmphasized: '#646e9c',
    constant: '#c0768e',
    string: '#72ac6a',
    color: '#9aa5ce',
    invalid: '#ff5370',
    invalidDeprecated: '#bb9af7',
    storageType: '#bb9af7',
    storageModifier: '#9d7cd8',
    interpolation: '#7dcfff',
    templateKeyword: '#0db9d7',
    spread: '#e0687a',
    operator: '#72ac6a',
    importExport: '#7dcfff',
    keyword: '#bb9af7',
    keywordSql: '#7dcfff',
    keywordLogical: '#bb9af7',
    tag: '#f7768e',
    tagComponent: '#de5971',
    tagPunctuation: '#ba3c97',
    globalConstant: '#e0687a',
    variable: '#c0caf5',
    objectVariable: '#c0caf5',
    arrayKey: '#7dcfff',
    objectKey: '#73daca',
    objectProperty: '#7dcfff',
    objectPropertyAlt: '#c0caf5',
    objectKeyLevel3: '#41a6b5',
    cVariable: '#f7768e',
    otherVariable: '#f7768e',
    method: '#7aa2f7',
    function: '#7aa2f7',
    functionArg: '#e0687a',
    typeConstant: '#bb9af7',
    variableDefinition: '#bb9af7',
    inheritedClass: '#bb9af7',
    classSupport: '#0db9d7',
    className: '#c0caf5',
    supportFunction: '#0db9d7',
    cssProperty: '#7aa2f7',
    cssFont: '#72ac6a',
    cssClass: '#c0caf5',
    cssId: '#bb9af7',
    cssTag: '#0db9d7',
    cssReference: '#0db9d7',
    cssPunctuation: '#9abdf5',
    cssAtRule: '#ff9e64',
    cssParentSelector: '#73daca',
    scssMixin: '#bb9af7',
    scssInclude: '#9d7cd8',
    cssValue: '#85d0b7',
    languageMethod: '#f7768e',
    thisKeyword: '#f7768e',
    htmlAttribute: '#bb9af7',
    htmlEntity: '#0DB9D7',
    vueAttribute: '#bb9af7',
    cssPseudo: '#bb9af7',
    markupInserted: '#449dab',
    markupDeleted: '#914c54',
    markupChanged: '#6183bb',
    regex: '#b4f9f8',
    regexGroup: '#f7768e',
    regexCharClass: '#bb9af7',
    regexCharSet: '#e0af68',
    regexQuantifier: '#72ac6a',
    regexBackslash: '#c0caf5',
    escapeChar: '#72ac6a',
    decorator: '#7aa2f7',
    cssUnit: '#f7768e',
    jsonKey0: '#7aa2f7',
    jsonKey1: '#0db9d7',
    jsonKey2: '#7dcfff',
    jsonKey3: '#bb9af7',
    jsonKey4: '#e0af68',
    jsonKey5: '#0db9d7',
    jsonKey6: '#73daca',
    jsonKey7: '#f7768e',
    jsonKey8: '#72ac6a',
    plainPunctuation: '#9abdf5',
    blockPunctuation: '#9abdf5',
    markdownH1: '#72ac6a',
    markdownH2: '#61bdf2',
    markdownH3: '#7aa2f7',
    markdownH4: '#6d91de',
    markdownH5: '#9aa5ce',
    markdownH6: '#747ca1',
    markdownContent: '#c0caf5',
    htmlText: '#9aa5ce',
    markdownRawInline: '#bb9af7',
    markdownRawPunctuation: '#4E5579',
    markupItalic: '#c0caf5',
    markupBold: '#c0caf5',
    markdownBlockquote: '#4e5579',
    markdownLink: '#73daca',
    markdownCodeBlock: '#72ac6a',
    markdownSeparator: '#444b6a',
    markupTable: '#c0cefc',
    tokenInfo: '#0db9d7',
    tokenWarn: '#ffdb69',
    tokenError: '#db4b4b',
    tokenDebug: '#b267e6',
    apacheTag: '#f7768e',
    preprocessor: '#73daca',
    envValue: '#7aa2f7',
    // Добавленные недостающие свойства
    ignored: '#444b6a',
    number: '#c0768e',
    markup: '#449dab',
    error: '#914c54',
    codeBlock: '#61bdf2',
    linkText: '#6d91de',
    quoteMark: '#747ca1',
    linkUrl: '#c0cefc',
    warning: '#ffdb69',
    deleted: '#db4b4b',
    inserted: '#b267e6',
  },
  ansi: {
    // ANSI цвета для терминала в стиле Tokyo Night
    black: '#414868',
    brightBlack: '#484e71',
    red: '#f7768e',
    brightRed: '#f7768e',
    green: '#a2c27e',
    brightGreen: '#a2c27e',
    yellow: '#e0af68',
    brightYellow: '#e0af68',
    blue: '#7aa2f7',
    brightBlue: '#7aa2f7',
    magenta: '#bb9af7',
    brightMagenta: '#bb9af7',
    cyan: '#7dcfff',
    brightCyan: '#7dcfff',
    white: '#c0caf5',
    brightWhite: '#c0caf5',
  },
  ui: {
    description: '#444857',
    breadcrumb: '#444857',
    shadow: {
      widget: '#ffffff00',
      scrollbar: '#00000033',
    },
    badge: {
      base: '#7e83b2',
      fg: '#c8d2f0',
    },
    sash: {
      hover: '#202840',
    },
    selectionWash: '#515c7e',
    scrollbarBase: '#868bc4',
    input: {
      placeholder: '#787c99',
      border: '#0f0f14',
    },
    list: {
      hoverBg: '#0f0f18',
      dropBg: '#1a1c28',
    },
    editorLinkActive: '#acb0d0',
    codeLens: '#484f70',
    noMatches: '#a6333f',
    settingsHeader: '#6183bb',
    window: {
      border: '#0d0f17',
    },
    tab: {
      activeBorder: '#5a7bc4',
      activeModifiedBorder: '#1a1b26',
      inactiveModifiedBorder: '#1f202e',
      unfocusedActiveBorder: '#1f202e',
      lastPinnedBorder: '#222333',
    },
    statusItem: {
      hover: '#252732',
      prominentHover: '#20222c',
    },
    text: {
      preformat: '#9699a8',
      separator: '#363b54',
    },
    debug: {
      exceptionBorder: '#963c47',
      consoleError: '#bb616b',
      consoleWarning: '#c49a5a',
      stateLabelBg: '#1e1e25',
      tokenValue: '#9aa5ce',
      tokenString: '#72ac6a',
      tokenError: '#bb616b',
      info: '#0da0ba',
    },
    editorOverview: {
      error: '#db4b4b',
      info: '#1abc9c',
      modified: '#394b70',
      added: '#164846',
      deleted: '#703438',
    },
    gutter: {
      modified: '#394b70',
      added: '#164846',
      deleted: '#823c41',
    },
    minimapGutter: {
      modified: '#425882',
      added: '#1C5957',
      deleted: '#944449',
    },
    charts: {
      foreground: '#9aa5ce',
    },
    gitlens: {
      foreground: '#444b6a',
    },
    git: {
      ignored: '#444857',
      deleted: '#914c54',
      conflicting: '#bb7a61',
      stageDeleted: '#914c54',
      stageModified: '#6183bb',
    },
    /** Common semantic colors */
    semantic: {
      /** Pure white for high contrast */
      white: '#ffffff',
      /** Notification links */
      notificationLink: '#6183bb',
      /** Offline status */
      offline: '#914c54',
    },
  },
}
