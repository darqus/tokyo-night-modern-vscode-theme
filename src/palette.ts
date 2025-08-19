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

export const palette: Palette = {
  bg: {
    // Основные фоновые цвета - от самого темного к самому светлому (приглушенные)
    base: '#18181d', // Основной фон редактора и боковых панелей - приглушен (было #16161e)
    elevated: '#1c1d24', // Приподнятые элементы (панели, диалоги) - приглушен (было #1a1b26)
    sunken: '#16161b', // Утопленные области (статусбар, некоторые панели) - приглушен (было #14141c)
    overlay: '#1e1f26', // Оверлеи и модальные окна - приглушен (было #1c1d28)
    input: '#1a1a21', // Поля ввода и формы - приглушен (было #181820)
    hover: '#252a3c', // Состояние наведения для интерактивных элементов - приглушен (было #24283b)
    active: '#2b3140', // Активные/нажатые элементы - приглушен (было #2a3041)
    drop: '#2b3140', // Зоны перетаскивания для drag&drop - приглушен (было #2a3041)
    lineHighlight: '#1c1d24', // Подсветка текущей строки - приглушена (было #1a1b26)
    bracketMatch: '#202129', // Подсветка соответствующих скобок - приглушена (было #1e1f2a)
    tabs: '#18181d', // Фон вкладок - приглушен (было #16161e)
    selection: {
      active: '#262b3d', // Активное выделение - приглушено (было #252a3f)
      inactive: '#2a2c3b', // Неактивное выделение - приглушено (было #292b39)
      focus: '#2c3b64', // Выделение в фокусе - приглушено (было #2b3a65)
      menu: '#2c3b64', // Выделение в меню - приглушено (было #2b3a65)
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
      primary: '#3d59a1', // Фон основной кнопки - более яркий синий для лучшего контраста
      hover: '#4c6cb3', // Фон кнопки при наведении - еще более яркий синий
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
      base: '#20e2fc', // Базовый цвет значка
      fg: '#252a3f', // Передний план значка - белый текст для максимальной контрастности
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
