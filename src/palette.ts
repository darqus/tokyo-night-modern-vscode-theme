import type { Hex, Palette } from './types/palette'
import { core } from './palette.core'
import { withAlpha, mix, lightenToward, darkenToward } from './utils/color'

// Производные цвета для замены legacy-цветов
const tealSoft = lightenToward(core.accent.teal, core.accent.cyan, 0.25)
const skyLight = lightenToward(core.accent.cyan, core.accent.blue, 0.35)
const indigo = mix(core.accent.blue, core.accent.purple, 0.5)
const rose = lightenToward(core.accent.red, core.accent.magenta, 0.3)
const azureLight = lightenToward(core.accent.cyan, core.accent.blue, 0.18)
const tealDeep = darkenToward(core.accent.teal, core.accent.blue, 0.25)
const bluePunctuation = darkenToward(core.accent.blue, core.accent.purple, 0.18)
const blue400 = lightenToward(core.accent.blue, core.accent.cyan, 0.18)
const mint = lightenToward(core.accent.green, core.accent.cyan, 0.18)
const lilac = lightenToward(core.accent.magenta, core.accent.blue, 0.18)
const pinkMuted = mix(core.accent.red, core.accent.magenta, 0.5)
const azure = lightenToward(core.accent.cyan, core.accent.blue, 0.12)
const maroon = darkenToward(core.accent.red, core.accent.purple, 0.18)
const blueMuted = mix(core.accent.blue, core.text.muted, 0.4)
const aquaLight = lightenToward(core.accent.cyan, core.accent.teal, 0.18)
const sky = lightenToward(core.accent.cyan, core.accent.blue, 0.22)
const grayBlue400 = mix(core.accent.blue, core.text.subtle, 0.5)
const blueBright = lightenToward(core.accent.blue, core.accent.cyan, 0.25)
const blueSoft = lightenToward(core.accent.blue, core.text.subtle, 0.18)
const violet = lightenToward(core.accent.purple, core.accent.blue, 0.18)
const cyan500 = darkenToward(core.accent.cyan, core.accent.blue, 0.18)
const slate = mix(core.accent.blue, core.accent.cyan, 0.3)
const steel = darkenToward(core.accent.blue, core.text.muted, 0.18)
const steelAlt = lightenToward(core.accent.blue, core.text.muted, 0.18)
const steelMuted = mix(core.accent.blue, core.text.muted, 0.6)
const brick = darkenToward(core.accent.red, core.accent.orange, 0.18)
const redMuted = mix(core.accent.red, core.text.muted, 0.5)
const badgeBase = lightenToward(core.accent.blue, core.accent.cyan, 0.12)
const windowBorder = darkenToward(core.accent.blue, core.text.muted, 0.22)

/**
 * Базовые (ядро) цвета темы для исключения дублирования значений hex.
 * Эти константы переиспользуются в разных разделах палитры.
 */
// core теперь экспортируется из './palette.core'

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
      active: core.bg.selection.active, // Активное выделение
      inactive: core.bg.selection.inactive, // Неактивное выделение
      focus: core.bg.selection.focus, // Выделение в фокусе
      menu: core.bg.selection.menu, // Выделение в меню
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
    breadcrumb: core.text.primary, // Нейтральный для хлебных крошек
    description: core.text.muted, // Нейтральный для описаний
  },
  brand: {
    // Брендовые цвета
    primary: core.accent.cyan, // Брендовый цвет (кнопки, ссылки)
    button: {
      // Специфичные цвета кнопок
      primary: core.brand.button.primary, // Более темный фон основной кнопки
      hover: core.brand.button.hover, // Более темный фон кнопки при наведении
    },
  },
  accent: {
    // Акцентные цвета для подсветки синтаксиса (оптимизированы для холодной схемы Tokyo Night)
    blue: core.accent.blue, // Синий - ключевые слова, типы
    cyan: core.accent.cyan, // Циан - строки, импорты
    teal: tealSoft, // Бирюзовый - свойства, атрибуты
    magenta: core.accent.magenta, // Пурпурный - переменные, константы
    yellow: skyLight, // Холодный голубо-желтый - числа, параметры
    orange: indigo, // Холодный индиго - функции, методы
    red: core.accent.red, // Красный - ошибки, предупреждения
    purple: core.accent.purple, // Фиолетовый - операторы, специальные символы
  },
  token: {
    // Токены для подсветки синтаксиса - улучшенная контрастность
    comment: core.text.comment, // Комментарии и документация
    commentDoc: core.text.commentDoc, // Подтипы документации
    commentDocEmphasized: core.text.commentDocEmphasized, // Выделенная документация
    constant: skyLight, // Константные значения (числа, булевы) - холодный голубо-желтый
    string: core.accent.green, // Строки и текстовое содержимое - более яркий зеленый
    color: core.text.subtle2, // Цветовые значения
    invalid: core.accent.red, // Недопустимый код
    invalidDeprecated: core.accent.magenta, // Недопустимый устаревший код
    storageType: core.accent.magenta, // Типы хранения и модификаторы
    storageModifier: core.accent.purple, // Модификаторы хранения (var, const, let)
    interpolation: core.accent.cyan, // Интерполяция шаблонов
    templateKeyword: core.accent.teal, // Ключевые слова Blade/Twig/Smarty
    spread: rose, // Оператор распространения
    operator: core.text.muted, // Операторы и пунктуация
    importExport: core.accent.magenta, // Ключевые слова import/export
    keyword: core.accent.magenta, // Общие ключевые слова
    keywordSql: core.accent.cyan, // SQL ключевые слова
    keywordLogical: core.accent.magenta, // Логические операторы
    // Теги делаем менее "красными" для общих сценариев чтения кода
    tag: core.accent.blue, // HTML/XML теги
    tagComponent: core.accent.magenta, // Теги компонентов (теперь пурпурные)
    tagPunctuation: core.text.muted, // Пунктуация тегов
    globalConstant: skyLight, // Глобальные константы - холодный голубо-желтый
    variable: core.text.primary, // Переменные
    objectVariable: core.text.primary, // Объектные переменные
    arrayKey: core.accent.cyan, // Ключи массивов
    objectKey: core.text.primary, // Ключи объектов (теперь цвет основного текста)
    objectProperty: core.accent.cyan, // Свойства объектов
    objectPropertyAlt: core.text.primary, // Свойства объектов (альтернативные)
    objectKeyLevel3: azureLight, // Вложенные ключи объектов (уровень 3)
    cVariable: core.accent.blue, // C-связанные переменные (сдвиг к синему)
    otherVariable: core.accent.cyan, // Другие переменные (сдвиг к циану)
    method: core.accent.blue, // Методы
    function: core.accent.blue, // Функции
    functionArg: sky, // Аргументы функций - холодный голубой
    typeConstant: core.accent.magenta, // Типовые константы
    variableDefinition: core.accent.magenta, // Определения переменных
    inheritedClass: core.accent.magenta, // Наследуемые классы
    classSupport: tealDeep, // Классы и поддерживающие типы
    className: core.text.primary, // Имена классов
    supportFunction: tealDeep, // Поддерживающие функции
    cssProperty: core.accent.blue, // CSS свойства
    cssFont: core.accent.green, // CSS шрифты
    cssClass: core.text.primary, // CSS классы
    cssId: core.accent.magenta, // CSS идентификаторы
    cssTag: tealDeep, // CSS теги
    cssReference: tealDeep, // CSS ссылки
    cssPunctuation: bluePunctuation, // CSS пунктуация
    cssAtRule: blue400, // CSS at-правила - холодный синий
    cssParentSelector: core.accent.teal, // CSS родительский селектор
    scssMixin: core.accent.magenta, // SCSS миксины
    scssInclude: core.accent.purple, // SCSS включения
    cssValue: mint, // CSS значения - холодный зеленый
    languageMethod: core.accent.blue, // Языковые методы
    thisKeyword: core.accent.cyan, // Ключевое слово this
    htmlAttribute: core.accent.magenta, // HTML атрибуты
    htmlEntity: tealDeep, // HTML сущности
    vueAttribute: core.accent.magenta, // Vue атрибуты
    cssPseudo: core.accent.magenta, // CSS псевдо-селекторы
    markupInserted: azure, // Вставленная разметка
    markupDeleted: maroon, // Удаленная разметка
    markupChanged: blueMuted, // Измененная разметка
    regex: aquaLight, // Регулярные выражения
    regexGroup: core.accent.purple, // Группы регулярных выражений (холоднее)
    regexCharClass: core.accent.magenta, // Классы символов регулярных выражений
    regexCharSet: sky, // Наборы символов регулярных выражений - холодный голубой
    regexQuantifier: core.accent.green, // Квантификаторы регулярных выражений
    regexBackslash: core.text.primary, // Обратная косая черта в регулярных выражениях
    escapeChar: core.accent.green, // Escape-символы
    decorator: core.accent.blue, // Декораторы
    cssUnit: core.accent.blue, // CSS единицы измерения (холоднее)
    jsonKey0: core.accent.blue, // JSON ключи (разные уровни)
    jsonKey1: tealDeep,
    jsonKey2: core.accent.cyan,
    jsonKey3: core.accent.magenta,
    jsonKey4: sky, // Холодный голубой
    jsonKey5: tealDeep,
    jsonKey6: core.accent.teal,
    jsonKey7: core.accent.red,
    jsonKey8: core.accent.green,
    plainPunctuation: bluePunctuation, // Обычная пунктуация
    blockPunctuation: bluePunctuation, // Блочная пунктуация
    markdownH1: core.accent.green, // Markdown заголовки
    markdownH2: blueBright,
    markdownH3: core.accent.blue,
    markdownH4: blueSoft,
    markdownH5: core.text.subtle2,
    markdownH6: grayBlue400,
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
    markupTable: blueMuted, // Разметка таблиц
    tokenInfo: core.accent.cyan, // Информационные токены
    tokenWarn: cyan500, // Предупреждающие токены - холодный циан
    tokenError: core.accent.red, // Токены ошибок
    tokenDebug: lilac, // Отладочные токены
    apacheTag: core.accent.red, // Apache теги
    preprocessor: core.accent.teal, // Препроцессор
    envValue: core.accent.blue, // Значения окружения
    // Добавленные недостающие свойства - улучшенная контрастность
    ignored: core.text.comment, // Игнорируемые элементы
    number: pinkMuted, // Числа
    markup: azure, // Элементы разметки
    error: maroon, // Элементы ошибок
    codeBlock: blueBright, // Блоки кода
    linkText: blueSoft, // Текст ссылок
    quoteMark: grayBlue400, // Кавычки
    linkUrl: blueMuted, // URL ссылок
    warning: cyan500, // Предупреждения - холодный циан
    deleted: redMuted, // Удаленное содержимое
    inserted: lilac, // Вставленное содержимое
  },
  ansi: {
    // ANSI цвета для терминала в стиле Tokyo Night
    black: indigo, // Черный
    brightBlack: core.text.gray600, // Яркий черный
    red: core.accent.red, // Красный
    brightRed: core.accent.red, // Яркий красный
    green: core.accent.green, // Зеленый
    brightGreen: core.accent.green, // Яркий зеленый
    yellow: skyLight, // Холодный голубо-желтый
    brightYellow: skyLight, // Яркий холодный голубо-желтый
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
      widget: core.ui.shadow, // Тень виджета
      scrollbar: core.ui.shadow, // Тень скроллбара
    },
    badge: {
      // Значки
      base: badgeBase, // Базовый цвет значка
      fg: core.text.selection, // Белый текст для максимального контраста на ярком фоне значка
    },
    sash: {
      // Разделитель
      hover: steelAlt, // Разделитель при наведении
    },
    selectionWash: core.ui.selectionWash, // Базовая заливка выделения (используется с альфа)
    scrollbarBase: core.ui.scrollbarBase, // Базовый цвет ползунка скроллбара (используется с альфа)
    input: {
      // Поля ввода
      placeholder: core.text.placeholder, // Улучшенный заполнитель для WCAG AA
      border: core.border, // Улучшенная граница поля ввода
    },
    list: {
      // Списки
      hoverBg: core.brand.button.hover, // Улучшенный фон списка при наведении
      dropBg: badgeBase, // Фон списка при перетаскивании
    },
    editorLinkActive: core.text.editorLinkActive, // Ссылки в редакторе когда активны
    codeLens: core.accent.blue, // Текст CodeLens - увеличена контрастность
    noMatches: core.accent.blue, // Общий контур "нет совпадений" (прохладнее)
    settingsHeader: blueMuted, // Приглушенная синяя подсветка для предложений и т.д.
    window: {
      // Границы окон
      border: windowBorder, // Граница окна
    },
    tab: {
      // Специфика вкладок
      activeBorder: core.accent.blue, // Граница активной вкладки
      activeModifiedBorder: violet, // Граница активной измененной вкладки - холодный фиолетовый
      inactiveModifiedBorder: cyan500, // Граница неактивной измененной вкладки - холодный циан
      unfocusedActiveBorder: core.ui.tab.unfocusedActive, // Улучшенная граница активной вкладки без фокуса
      lastPinnedBorder: slate, // Граница последней закрепленной вкладки
    },
    statusItem: {
      // Состояния элементов статусбара
      hover: steel, // Улучшенное наведение на элемент статусбара
      prominentHover: steelMuted, // Выделенное наведение на элемент статусбара
    },
    text: {
      // Специфика текста
      preformat: core.text.preformat, // Предварительно отформатированный текст
      separator: slate, // Разделитель текста
    },
    debug: {
      // Специфика отладочного UI
      exceptionBorder: brick, // Граница исключения отладки
      consoleError: core.accent.red, // Ошибка консоли отладки
      consoleWarning: cyan500, // Предупреждение консоли отладки - холодный циан
      stateLabelBg: core.bg.stateLabel, // Фон метки состояния отладки
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
      ignored: core.text.comment, // Игнорируемые Git файлы - увеличена контрастность
      deleted: core.accent.red, // Удаленные Git файлы
      conflicting: aquaLight, // Конфликтующие Git файлы - холодный teal
      stageDeleted: core.accent.red, // Удаленные в стейдже Git файлы
      stageModified: core.accent.blue, // Измененные в стейдже Git файлы
    },
    semantic: {
      // Общие семантические цвета
      white: core.text.selection, // Чистый белый для высокого контраста
      notificationLink: blueMuted, // Ссылки уведомлений
      offline: core.accent.red, // Статус оффлайн
    },
  },
}
