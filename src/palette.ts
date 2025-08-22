export type Hex = `#${string}`

/**
 * Основная цветовая палитра для темы Tokyo Night Dark.
 *
 * Организована по функциональным группам для легкого понимания и поддержки.
 * Все цвета используют формат hex с проверкой типов.
 */
export interface Palette {
  /** Цвета фона - от самых темных до самых светлых */
  bg: {
    /** Основной фон редактора и боковых панелей */
    base: Hex
    /** Приподнятые элементы (панели, диалоги) */
    elevated: Hex
    /** Утопленные области (статус-бар, некоторые панели) */
    sunken: Hex
    /** Наложения и модальные окна */
    overlay: Hex
    /** Поля ввода и формы */
    input: Hex
    /** Состояние наведения для интерактивных элементов */
    hover: Hex
    /** Активные/нажатые элементы */
    active: Hex
    /** Зоны перетаскивания для drag&drop */
    drop: Hex
    /** Подсветка текущей строки */
    lineHighlight: Hex
    /** Подсветка совпадающих скобок */
    bracketMatch: Hex
    /** Фон вкладок */
    tabs: Hex
    /** Различные типы выделения */
    selection: {
      /** Активное выделение */
      active: Hex
      /** Неактивное выделение */
      inactive: Hex
      /** Выделение в фокусе */
      focus: Hex
      /** Выделение в меню */
      menu: Hex
    }
  }
  /** Линии и границы */
  line: {
    /** Основные границы элементов */
    border: Hex
    /** Границы в меню */
    menu: Hex
  }
  /** Цвета текста - от основного до вспомогательного */
  fg: {
    /** Основной текст */
    primary: Hex
    /** Приглушенный текст (вторичная информация) */
    muted: Hex
    /** Тусклый текст (подсказки, метки) */
    subtle: Hex
    /** Неактивный/отключенный текст */
    inactive: Hex
    /** Текст панелей (улучшенная читаемость в боковых панелях) */
    panelText: Hex
    /** Мягкий текст (промежуточная яркость) */
    soft: Hex
    /** Мягкие заголовки */
    softTitle: Hex
    /** Текст на выделении */
    selectionText: Hex
    /** Текст поверх выделения */
    onSelection: Hex
    /** Активные заголовки */
    activeTitle: Hex
    /** Текст хлебных крошек (улучшенный контраст) */
    breadcrumb: Hex
    /** Текст описания (улучшенный контраст) */
    description: Hex
  }
  /** Брендовые цвета */
  brand: {
    /** Основной брендовый цвет (кнопки, ссылки) */
    primary: Hex
    /** Специальные цвета кнопок */
    button: {
      /** Фон основной кнопки */
      primary: Hex
      /** Фон основной кнопки при наведении */
      hover: Hex
    }
  }
  /** Акцентные цвета для подсветки синтаксиса */
  accent: {
    /** Синий - ключевые слова, типы */
    blue: Hex
    /** Голубой - строки, импорты */
    cyan: Hex
    /** Бирюзовый - свойства, атрибуты */
    teal: Hex
    /** Пурпурный - переменные, константы */
    magenta: Hex
    /** Желтый - числа, параметры */
    yellow: Hex
    /** Оранжевый - функции, методы */
    orange: Hex
    /** Красный - ошибки, предупреждения */
    red: Hex
    /** Фиолетовый - операторы, специальные символы */
    purple: Hex
  }
  /** Цвета для токенов для подсветки синтаксиса */
  token: {
    /** Комментарии и документация */
    comment: Hex
    /** Подтипы документации */
    commentDoc: Hex
    /** Выделенная документация */
    commentDocEmphasized: Hex
    /** Константные значения (числа, булевы) */
    constant: Hex
    /** Строки и текстовое содержимое */
    string: Hex
    /** Значения цвета */
    color: Hex
    /** Недопустимый код */
    invalid: Hex
    /** Недопустимый устаревший код */
    invalidDeprecated: Hex
    /** Типы хранения и модификаторы */
    storageType: Hex
    /** Модификаторы хранения (var, const, let) */
    storageModifier: Hex
    /** Интерполяция шаблонов */
    interpolation: Hex
    /** Ключевые слова Blade/Twig/Smarty */
    templateKeyword: Hex
    /** Оператор spread */
    spread: Hex
    /** Операторы и пунктуация */
    operator: Hex
    /** Ключевые слова import/export */
    importExport: Hex
    /** Общие ключевые слова */
    keyword: Hex
    /** Ключевые слова SQL */
    keywordSql: Hex
    /** Логические операторы */
    keywordLogical: Hex
    /** Теги HTML/XML */
    tag: Hex
    /** Теги компонентов */
    tagComponent: Hex
    /** Пунктуация тегов */
    tagPunctuation: Hex
    /** Глобальные константы */
    globalConstant: Hex
    /** Переменные */
    variable: Hex
    /** Объектные переменные */
    objectVariable: Hex
    /** Ключи массивов */
    arrayKey: Hex
    /** Ключи объектов */
    objectKey: Hex
    /** Свойства объектов */
    objectProperty: Hex
    /** Свойства объектов (альтернативные) */
    objectPropertyAlt: Hex
    /** Вложенные ключи объектов (уровень 3) */
    objectKeyLevel3: Hex
    /** Переменные, связанные с C */
    cVariable: Hex
    /** Другие переменные */
    otherVariable: Hex
    /** Методы */
    method: Hex
    /** Функции */
    function: Hex
    /** Аргументы функций */
    functionArg: Hex
    /** Константы типов */
    typeConstant: Hex
    /** Определения переменных */
    variableDefinition: Hex
    /** Наследуемые классы */
    inheritedClass: Hex
    /** Классы и вспомогательные типы */
    classSupport: Hex
    /** Имена классов */
    className: Hex
    /** Вспомогательные функции */
    supportFunction: Hex
    /** Свойства CSS */
    cssProperty: Hex
    /** Шрифты CSS */
    cssFont: Hex
    /** Классы CSS */
    cssClass: Hex
    /** Идентификаторы CSS */
    cssId: Hex
    /** Теги CSS */
    cssTag: Hex
    /** Ссылки CSS */
    cssReference: Hex
    /** Пунктуация CSS */
    cssPunctuation: Hex
    /** At-правила CSS */
    cssAtRule: Hex
    /** Родительский селектор CSS */
    cssParentSelector: Hex
    /** Миксины SCSS */
    scssMixin: Hex
    /** Включения SCSS */
    scssInclude: Hex
    /** Значения CSS */
    cssValue: Hex
    /** Языковые методы */
    languageMethod: Hex
    /** Ключевое слово this */
    thisKeyword: Hex
    /** Атрибуты HTML */
    htmlAttribute: Hex
    /** Сущности HTML */
    htmlEntity: Hex
    /** Атрибуты Vue */
    vueAttribute: Hex
    /** Псевдоселекторы CSS */
    cssPseudo: Hex
    /** Вставленная разметка */
    markupInserted: Hex
    /** Удаленная разметка */
    markupDeleted: Hex
    /** Измененная разметка */
    markupChanged: Hex
    /** Регулярные выражения */
    regex: Hex
    /** Группы регулярных выражений */
    regexGroup: Hex
    /** Классы символов регулярных выражений */
    regexCharClass: Hex
    /** Наборы символов регулярных выражений */
    regexCharSet: Hex
    /** Квантификаторы регулярных выражений */
    regexQuantifier: Hex
    /** Обратная косая черта в регулярных выражениях */
    regexBackslash: Hex
    /** Escape-символы */
    escapeChar: Hex
    /** Декораторы */
    decorator: Hex
    /** Единицы измерения CSS */
    cssUnit: Hex
    /** Ключи JSON (разные уровни) */
    jsonKey0: Hex
    jsonKey1: Hex
    jsonKey2: Hex
    jsonKey3: Hex
    jsonKey4: Hex
    jsonKey5: Hex
    jsonKey6: Hex
    jsonKey7: Hex
    jsonKey8: Hex
    /** Обычная пунктуация */
    plainPunctuation: Hex
    /** Блочная пунктуация */
    blockPunctuation: Hex
    /** Заголовки Markdown */
    markdownH1: Hex
    markdownH2: Hex
    markdownH3: Hex
    markdownH4: Hex
    markdownH5: Hex
    markdownH6: Hex
    /** Содержимое Markdown */
    markdownContent: Hex
    /** Текст HTML */
    htmlText: Hex
    /** Встроенный сырой код Markdown */
    markdownRawInline: Hex
    /** Сырая пунктуация Markdown */
    markdownRawPunctuation: Hex
    /** Курсивная разметка */
    markupItalic: Hex
    /** Жирная разметка */
    markupBold: Hex
    /** Цитаты Markdown */
    markdownBlockquote: Hex
    /** Ссылки Markdown */
    markdownLink: Hex
    /** Блоки кода Markdown */
    markdownCodeBlock: Hex
    /** Разделители Markdown */
    markdownSeparator: Hex
    /** Таблицы в разметке */
    markupTable: Hex
    /** Информационные токены */
    tokenInfo: Hex
    /** Токены-предупреждения */
    tokenWarn: Hex
    /** Токены-ошибки */
    tokenError: Hex
    /** Отладочные токены */
    tokenDebug: Hex
    /** Теги Apache */
    apacheTag: Hex
    /** Препроцессор */
    preprocessor: Hex
    /** Значения окружения */
    envValue: Hex
    /** Игнорируемые элементы */
    ignored: Hex
    /** Числа */
    number: Hex
    /** Элементы разметки */
    markup: Hex
    /** Элементы ошибок */
    error: Hex
    /** Блоки кода */
    codeBlock: Hex
    /** Текст ссылок */
    linkText: Hex
    /** Кавычки */
    quoteMark: Hex
    /** URL-адреса ссылок */
    linkUrl: Hex
    /** Предупреждения */
    warning: Hex
    /** Удаленное содержимое */
    deleted: Hex
    /** Вставленное содержимое */
    inserted: Hex
  }
  /** Цвета ANSI для терминала */
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
  /** Цвета и вспомогательные элементы для пользовательского интерфейса (не для синтаксиса, общие акценты пользовательского интерфейса) */
  ui: {
    /** Тусклый/описательный текст */
    description: Hex
    /** Цвет текста хлебных крошек */
    breadcrumb: Hex
    /** Тени */
    shadow: {
      widget: Hex
      scrollbar: Hex
    }
    /** Значки */
    badge: {
      base: Hex
      fg: Hex
    }
    /** Разделитель */
    sash: {
      hover: Hex
    }
    /** Базовая заливка выделения (используется с альфа-каналом) */
    selectionWash: Hex
    /** Базовый цвет ползунка полосы прокрутки (используется с альфа-каналом) */
    scrollbarBase: Hex
    /** Поля ввода */
    input: {
      placeholder: Hex
      border: Hex
    }
    /** Списки */
    list: {
      hoverBg: Hex
      dropBg: Hex
    }
    /** Активные ссылки в редакторе */
    editorLinkActive: Hex
    /** Текст CodeLens */
    codeLens: Hex
    /** Общий контур "нет совпадений" (например, виджет фильтра) */
    noMatches: Hex
    /** Приглушенная синяя подсветка для предложений и т.д. */
    settingsHeader: Hex
    /** Границы окон */
    window: {
      border: Hex
    }
    /** Особенности вкладок */
    tab: {
      activeBorder: Hex
      activeModifiedBorder: Hex
      inactiveModifiedBorder: Hex
      unfocusedActiveBorder: Hex
      lastPinnedBorder: Hex
    }
    /** Состояния элементов строки состояния */
    statusItem: {
      hover: Hex
      prominentHover: Hex
    }
    /** Особенности текста */
    text: {
      preformat: Hex
      separator: Hex
    }
    /** Особенности пользовательского интерфейса отладки */
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
    /** Цвета линейки обзора редактора */
    editorOverview: {
      error: Hex
      info: Hex
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Цвета полей редактора */
    gutter: {
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Цвета полей миникарты */
    minimapGutter: {
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Диаграммы */
    charts: {
      foreground: Hex
    }
    /** Вспомогательные элементы GitLens */
    gitlens: {
      foreground: Hex
    }
    /** Декорации Git */
    git: {
      ignored: Hex
      deleted: Hex
      conflicting: Hex
      stageDeleted: Hex
      stageModified: Hex
    }
    /** Общие семантические цвета */
    semantic: {
      /** Чисто белый для высокого контраста */
      white: Hex
      /** Ссылки в уведомлениях */
      notificationLink: Hex
      /** Статус "офлайн" */
      offline: Hex
    }
  }
}

/**
 * Базовые (ядро) цвета темы для исключения дублирования значений hex.
 * Эти константы переиспользуются в разных разделах палитры.
 */
export const core = {
  // Нейтральные фоны и границы
  bg: {
    base: '#18181d' as Hex,
    elevated: '#1c1d24' as Hex,
    sunken: '#16161b' as Hex,
    overlay: '#1e1f26' as Hex,
    input: '#1a1a21' as Hex,
    hover: '#242530' as Hex,
    active: '#26293a' as Hex,
    drop: '#2b3140' as Hex,
    lineHighlight: '#1c1d24' as Hex,
    bracketMatch: '#202129' as Hex,
    tabs: '#18181d' as Hex,
  },
  border: '#262733' as Hex,

  // Текстовые тона
  text: {
    primary: '#c0caf5' as Hex,
    muted: '#a9b1d6' as Hex,
    subtle: '#7580a7' as Hex,
    inactive: '#7883b3' as Hex,
    soft: '#a9b1d6' as Hex,
    selection: '#ffffff' as Hex,
    subtle2: '#9aa5ce' as Hex,
    gray600: '#545c7e' as Hex,
  },

  // Акцентные семейства
  accent: {
    blue: '#7aa2f7' as Hex,
    cyan: '#7dcfff' as Hex,
    teal: '#73daca' as Hex,
    tealDeep: '#0db9d7' as Hex,
    purple: '#9d7cd8' as Hex,
    magenta: '#bb9af7' as Hex,
    red: '#f7768e' as Hex,
    green: '#9ece6a' as Hex,
    sky: '#38bdf8' as Hex,
    skyLight: '#7dd3fc' as Hex,
    indigo: '#6366f1' as Hex,
    blueMuted: '#6183bb' as Hex,
    blueBright: '#61bdf2' as Hex,
    bluePunctuation: '#9abdf5' as Hex,
    lilac: '#b267e6' as Hex,
    mint: '#34d399' as Hex,
    aqua: '#14b8a6' as Hex,
    azure: '#449dab' as Hex,
    maroon: '#914c54' as Hex,
    slate: '#363b54' as Hex,
    steel: '#2a3047' as Hex,
    badgeBase: '#4158a6' as Hex,
    windowBorder: '#20212c' as Hex,
  },
} as const

export const palette: Palette = {
  bg: {
    // Основные фоновые цвета - от самого темного к самому светлому
    base: core.bg.base, // Основной фон редактора и боковых панелей
    elevated: core.bg.elevated, // Приподнятые элементы (панели, диалоги)
    sunken: core.bg.sunken, // Утопленные области (статусбар, некоторые панели)
    overlay: core.bg.overlay, // Оверлеи и модальные окна
    input: core.bg.input, // Поля ввода и формы
    hover: core.bg.hover, // Состояние наведения для интерактивных элементов - более приглушённый холодный тон
    active: core.bg.active, // Активные/нажатые элементы - используем цвет границ для консистентности
    drop: core.bg.drop, // Зоны перетаскивания для drag&drop
    lineHighlight: core.bg.lineHighlight, // Подсветка текущей строки
    bracketMatch: core.bg.bracketMatch, // Подсветка соответствующих скобок
    tabs: core.bg.tabs, // Фон вкладок
    selection: {
      active: '#262b3d', // Активное выделение
      inactive: '#2a2c3b', // Неактивное выделение
      focus: '#2c3b64', // Выделение в фокусе
      menu: '#2c3b64', // Выделение в меню
    },
  },
  line: {
    // Линии и границы
    border: core.border, // Основные границы элементов
    menu: core.border, // Границы в меню
  },
  fg: {
    // Цвета текста - от основного к вспомогательному (улучшенная контрастность)
    primary: core.text.primary, // Основной текст
    muted: core.text.muted, // Приглушенный текст (вторичная информация)
    subtle: core.text.subtle, // Тонкий текст (подсказки, метки) - увеличена яркость для WCAG AA (4.5:1)
    inactive: core.text.inactive, // Неактивный/отключенный текст
    panelText: core.text.primary, // Текст панелей (улучшенная читаемость в боковых панелях) - увеличена контрастность
    soft: core.text.soft, // Мягкий текст (промежуточная яркость)
    softTitle: core.text.primary, // Мягкие заголовки
    selectionText: core.text.selection, // Текст на выделении
    onSelection: core.text.selection, // Текст поверх выделения
    activeTitle: core.text.primary, // Активные заголовки
    // Улучшенные элементы UI с повышенной контрастностью
    breadcrumb: core.accent.blue, // Текст хлебных крошек (улучшение контрастности до 4.5:1)
    description: core.accent.blue, // Текст описаний (более читаемый)
  },
  brand: {
    // Брендовые цвета
    primary: core.accent.cyan, // Брендовый цвет (кнопки, ссылки)
    button: {
      // Специфичные цвета кнопок
      primary: '#263147', // Более темный фон основной кнопки
      hover: '#2c3952', // Более темный фон кнопки при наведении
    },
  },
  accent: {
    // Акцентные цвета для подсветки синтаксиса (оптимизированы для холодной схемы Tokyo Night)
    blue: core.accent.blue, // Синий - ключевые слова, типы
    cyan: core.accent.cyan, // Циан - строки, импорты
    teal: '#85c9c1', // Бирюзовый - свойства, атрибуты
    magenta: core.accent.magenta, // Пурпурный - переменные, константы
    yellow: core.accent.skyLight, // Холодный голубо-желтый - числа, параметры
    orange: core.accent.indigo, // Холодный индиго - функции, методы
    red: core.accent.red, // Красный - ошибки, предупреждения
    purple: core.accent.purple, // Фиолетовый - операторы, специальные символы
  },
  token: {
    // Токены для подсветки синтаксиса - улучшенная контрастность
    comment: '#6b7499', // Комментарии и документация
    commentDoc: '#5a607a', // Подтипы документации
    commentDocEmphasized: '#7481a6', // Выделенная документация
    constant: core.accent.skyLight, // Константные значения (числа, булевы) - холодный голубо-желтый
    string: core.accent.green, // Строки и текстовое содержимое - более яркий зеленый
    color: core.text.subtle2, // Цветовые значения
    invalid: core.accent.red, // Недопустимый код
    invalidDeprecated: core.accent.magenta, // Недопустимый устаревший код
    storageType: core.accent.magenta, // Типы хранения и модификаторы
    storageModifier: core.accent.purple, // Модификаторы хранения (var, const, let)
    interpolation: core.accent.cyan, // Интерполяция шаблонов
    templateKeyword: core.accent.teal, // Ключевые слова Blade/Twig/Smarty
    spread: '#e0687a', // Оператор распространения
    operator: core.text.muted, // Операторы и пунктуация
    importExport: core.accent.magenta, // Ключевые слова import/export
    keyword: core.accent.magenta, // Общие ключевые слова
    keywordSql: core.accent.cyan, // SQL ключевые слова
    keywordLogical: core.accent.magenta, // Логические операторы
    tag: core.accent.red, // HTML/XML теги
    tagComponent: core.accent.magenta, // Теги компонентов (теперь пурпурные)
    tagPunctuation: core.text.muted, // Пунктуация тегов
    globalConstant: core.accent.skyLight, // Глобальные константы - холодный голубо-желтый
    variable: core.text.primary, // Переменные
    objectVariable: core.text.primary, // Объектные переменные
    arrayKey: core.accent.cyan, // Ключи массивов
    objectKey: core.text.primary, // Ключи объектов (теперь цвет основного текста)
    objectProperty: core.accent.cyan, // Свойства объектов
    objectPropertyAlt: core.text.primary, // Свойства объектов (альтернативные)
    objectKeyLevel3: '#41a6b5', // Вложенные ключи объектов (уровень 3)
    cVariable: core.accent.red, // C-связанные переменные
    otherVariable: core.accent.red, // Другие переменные
    method: core.accent.blue, // Методы
    function: core.accent.blue, // Функции
    functionArg: core.accent.sky, // Аргументы функций - холодный голубой
    typeConstant: core.accent.magenta, // Типовые константы
    variableDefinition: core.accent.magenta, // Определения переменных
    inheritedClass: core.accent.magenta, // Наследуемые классы
    classSupport: core.accent.tealDeep, // Классы и поддерживающие типы
    className: core.text.primary, // Имена классов
    supportFunction: core.accent.tealDeep, // Поддерживающие функции
    cssProperty: core.accent.blue, // CSS свойства
    cssFont: core.accent.green, // CSS шрифты
    cssClass: core.text.primary, // CSS классы
    cssId: core.accent.magenta, // CSS идентификаторы
    cssTag: core.accent.tealDeep, // CSS теги
    cssReference: core.accent.tealDeep, // CSS ссылки
    cssPunctuation: core.accent.bluePunctuation, // CSS пунктуация
    cssAtRule: '#60a5fa', // CSS at-правила - холодный синий
    cssParentSelector: core.accent.teal, // CSS родительский селектор
    scssMixin: core.accent.magenta, // SCSS миксины
    scssInclude: core.accent.purple, // SCSS включения
    cssValue: core.accent.mint, // CSS значения - холодный зеленый
    languageMethod: core.accent.red, // Языковые методы
    thisKeyword: core.accent.red, // Ключевое слово this
    htmlAttribute: core.accent.magenta, // HTML атрибуты
    htmlEntity: '#0DB9D7', // HTML сущности
    vueAttribute: core.accent.magenta, // Vue атрибуты
    cssPseudo: core.accent.magenta, // CSS псевдо-селекторы
    markupInserted: core.accent.azure, // Вставленная разметка
    markupDeleted: core.accent.maroon, // Удаленная разметка
    markupChanged: core.accent.blueMuted, // Измененная разметка
    regex: '#b4f9f8', // Регулярные выражения
    regexGroup: core.accent.red, // Группы регулярных выражений
    regexCharClass: core.accent.magenta, // Классы символов регулярных выражений
    regexCharSet: core.accent.sky, // Наборы символов регулярных выражений - холодный голубой
    regexQuantifier: core.accent.green, // Квантификаторы регулярных выражений
    regexBackslash: core.text.primary, // Обратная косая черта в регулярных выражениях
    escapeChar: core.accent.green, // Escape-символы
    decorator: core.accent.blue, // Декораторы
    cssUnit: core.accent.red, // CSS единицы измерения
    jsonKey0: core.accent.blue, // JSON ключи (разные уровни)
    jsonKey1: core.accent.tealDeep,
    jsonKey2: core.accent.cyan,
    jsonKey3: core.accent.magenta,
    jsonKey4: core.accent.sky, // Холодный голубой
    jsonKey5: core.accent.tealDeep,
    jsonKey6: core.accent.teal,
    jsonKey7: core.accent.red,
    jsonKey8: core.accent.green,
    plainPunctuation: core.accent.bluePunctuation, // Обычная пунктуация
    blockPunctuation: core.accent.bluePunctuation, // Блочная пунктуация
    markdownH1: core.accent.green, // Markdown заголовки
    markdownH2: core.accent.blueBright,
    markdownH3: core.accent.blue,
    markdownH4: '#6d91de',
    markdownH5: core.text.subtle2,
    markdownH6: '#747ca1',
    markdownContent: core.text.primary, // Markdown содержимое
    htmlText: core.text.subtle2, // HTML текст
    markdownRawInline: core.accent.magenta, // Markdown сырой встроенный код
    markdownRawPunctuation: core.text.gray600, // Markdown сырая пунктуация
    markupItalic: core.text.primary, // Разметка курсив
    markupBold: core.text.primary, // Разметка жирный
    markdownBlockquote: core.text.gray600, // Markdown цитаты
    markdownLink: core.accent.teal, // Markdown ссылки
    markdownCodeBlock: core.accent.green, // Markdown блоки кода
    markdownSeparator: core.text.gray600, // Markdown разделители
    markupTable: '#c0cefc', // Разметка таблиц
    tokenInfo: core.accent.cyan, // Информационные токены
    tokenWarn: '#22d3ee', // Предупреждающие токены - холодный циан
    tokenError: core.accent.red, // Токены ошибок
    tokenDebug: core.accent.lilac, // Отладочные токены
    apacheTag: core.accent.red, // Apache теги
    preprocessor: core.accent.teal, // Препроцессор
    envValue: core.accent.blue, // Значения окружения
    // Добавленные недостающие свойства - улучшенная контрастность
    ignored: '#6b7499', // Игнорируемые элементы
    number: '#c0768e', // Числа
    markup: core.accent.azure, // Элементы разметки
    error: core.accent.maroon, // Элементы ошибок
    codeBlock: core.accent.blueBright, // Блоки кода
    linkText: '#6d91de', // Текст ссылок
    quoteMark: '#747ca1', // Кавычки
    linkUrl: '#c0cefc', // URL ссылок
    warning: '#22d3ee', // Предупреждения - холодный циан
    deleted: '#db4b4b', // Удаленное содержимое
    inserted: core.accent.lilac, // Вставленное содержимое
  },
  ansi: {
    // ANSI цвета для терминала в стиле Tokyo Night
    black: '#414868', // Черный
    brightBlack: core.text.gray600, // Яркий черный
    red: core.accent.red, // Красный
    brightRed: core.accent.red, // Яркий красный
    green: core.accent.green, // Зеленый
    brightGreen: core.accent.green, // Яркий зеленый
    yellow: core.accent.skyLight, // Холодный голубо-желтый
    brightYellow: core.accent.skyLight, // Яркий холодный голубо-желтый
    blue: core.accent.blue, // Синий
    brightBlue: core.accent.blue, // Яркий синий
    magenta: core.accent.magenta, // Пурпурный
    brightMagenta: core.accent.magenta, // Яркий пурпурный
    cyan: core.accent.cyan, // Циан
    brightCyan: core.accent.cyan, // Яркий циан
    white: core.text.primary, // Белый
    brightWhite: core.text.primary, // Яркий белый
  },
  ui: {
    // UI-специфичные цвета и помощники (не синтаксис, общие UI акценты)
    description: core.text.primary, // Тонкий/описательный текст - максимальная контрастность для описаний в виджетах
    breadcrumb: core.text.primary, // Передний план хлебных крошек - увеличена контрастность для навигации
    shadow: {
      // Тени
      widget: '#7aa2f733', // Тень виджета
      scrollbar: '#7aa2f733', // Тень скроллбара
    },
    badge: {
      // Значки
      base: core.accent.badgeBase, // Базовый цвет значка
      fg: core.text.selection, // Белый текст для максимального контраста на ярком фоне значка
    },
    sash: {
      // Разделитель
      hover: '#252a3f', // Разделитель при наведении
    },
    selectionWash: '#515c7e', // Базовая заливка выделения (используется с альфа)
    scrollbarBase: '#868bc4', // Базовый цвет ползунка скроллбара (используется с альфа)
    input: {
      // Поля ввода
      placeholder: '#7a85b0', // Улучшенный заполнитель для WCAG AA
      border: '#262835', // Улучшенная граница поля ввода
    },
    list: {
      // Списки
      hoverBg: core.accent.steel, // Улучшенный фон списка при наведении
      dropBg: core.accent.badgeBase, // Фон списка при перетаскивании
    },
    editorLinkActive: '#acb0d0', // Ссылки в редакторе когда активны
    codeLens: core.accent.blue, // Текст CodeLens - увеличена контрастность
    noMatches: core.accent.red, // Общий контур "нет совпадений" (например, виджет фильтра)
    settingsHeader: core.accent.blueMuted, // Приглушенная синяя подсветка для предложений и т.д.
    window: {
      // Границы окон
      border: core.accent.windowBorder, // Граница окна
    },
    tab: {
      // Специфика вкладок
      activeBorder: core.accent.blue, // Граница активной вкладки
      activeModifiedBorder: '#8b5cf6', // Граница активной измененной вкладки - холодный фиолетовый
      inactiveModifiedBorder: '#06b6d4', // Граница неактивной измененной вкладки - холодный циан
      unfocusedActiveBorder: '#2b3047', // Улучшенная граница активной вкладки без фокуса
      lastPinnedBorder: core.accent.slate, // Граница последней закрепленной вкладки
    },
    statusItem: {
      // Состояния элементов статусбара
      hover: core.accent.steel, // Улучшенное наведение на элемент статусбара
      prominentHover: '#2a3041', // Выделенное наведение на элемент статусбара
    },
    text: {
      // Специфика текста
      preformat: '#9699a8', // Предварительно отформатированный текст
      separator: core.accent.slate, // Разделитель текста
    },
    debug: {
      // Специфика отладочного UI
      exceptionBorder: '#963c47', // Граница исключения отладки
      consoleError: core.accent.red, // Ошибка консоли отладки
      consoleWarning: '#22d3ee', // Предупреждение консоли отладки - холодный циан
      stateLabelBg: '#1e1e25', // Фон метки состояния отладки
      tokenValue: core.text.subtle2, // Значение токена отладки
      tokenString: core.accent.green, // Строка токена отладки
      tokenError: core.accent.red, // Ошибка токена отладки
      info: core.accent.cyan, // Информация отладки
    },
    editorOverview: {
      // Цвета линейки обзора редактора
      error: core.accent.red, // Ошибка в обзоре редактора
      info: core.accent.cyan, // Информация в обзоре редактора
      modified: core.accent.blue, // Измененное в обзоре редактора
      added: core.accent.green, // Добавленное в обзоре редактора
      deleted: core.accent.red, // Удаленное в обзоре редактора
    },
    gutter: {
      // Цвета желоба редактора
      modified: core.accent.blue, // Измененное в желобе
      added: core.accent.green, // Добавленное в желобе
      deleted: core.accent.red, // Удаленное в желобе
    },
    minimapGutter: {
      // Цвета желоба миникарты
      modified: core.accent.blue, // Измененное в желобе миникарты
      added: core.accent.green, // Добавленное в желобе миникарты
      deleted: core.accent.red, // Удаленное в желобе миникарты
    },
    charts: {
      // Диаграммы
      foreground: core.text.subtle2, // Передний план диаграмм
    },
    gitlens: {
      // Помощники GitLens
      foreground: core.text.muted, // Передний план GitLens - увеличена контрастность
    },
    git: {
      // Git декорации
      ignored: '#6b7499', // Игнорируемые Git файлы - увеличена контрастность
      deleted: core.accent.red, // Удаленные Git файлы
      conflicting: core.accent.aqua, // Конфликтующие Git файлы - холодный teal
      stageDeleted: core.accent.red, // Удаленные в стейдже Git файлы
      stageModified: core.accent.blue, // Измененные в стейдже Git файлы
    },
    semantic: {
      // Общие семантические цвета
      white: core.text.selection, // Чистый белый для высокого контраста
      notificationLink: core.accent.blueMuted, // Ссылки уведомлений
      offline: core.accent.red, // Статус оффлайн
    },
  },
}
