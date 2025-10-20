/**
 * Calm Clarity Theme - Color Palette
 * Цветовая палитра для темы "Спокойная Четкость"
 *
 * Философия:
 * - Низкая общая яркость и приглушенная, но не блёклая цветовая палитра
 * - Создание ощущения глубины и спокойствия
 * - Избегание отвлекающих и резких цветовых переходов
 */

export interface CalmClarityPalette {
  // Workbench colors - основные цвета интерфейса
 workbench: {
    // Фон: Очень темный, но не абсолютно черный цвет с холодным или нейтральным оттенком
    background: string // Темно-синий/графитовый фон
    backgroundSecondary: string // Немного светлее для иерархии
    backgroundTertiary: string // Еще немного светлее для элементов интерфейса

    border: string // Цвет для границ
    // Элементы интерфейса: Панели, сайдбар, статус-бар
    sidebar: string
    activityBar: string
    statusbar: string
    titlebar: string
    tabbar: string

    // Акценты: Для активных элементов, фокуса ввода и уведомлений
    accentPrimary: string // Приглушенный бирюзовый
    accentSecondary: string // Приглушенный лавандовый
    accentHover: string // Цвет для hover состояний
    accentFocus: string // Цвет фокуса ввода
    badgeForeground: string // Цвет текста для бейджей
  }

  // Button colors - цвета кнопок
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
    comment: string // Комментарии (серо-голубые, легко читаемые но не отвлекающие)

    // Цвета для улучшенной контрастности
    purple: string
    green: string
    yellow: string
    magenta: string
    cyan: string

    // Ключевые слова и операторы
    keyword: string // Ключевые слова (холодные оттенки)
    operator: string // Операторы
    control: string // Контрольные операторы

    // Типы и классы
    type: string // Типы данных (холодные оттенки)
    class: string // Классы
    interface: string // Интерфейсы
    enum: string // Перечисления

    // Переменные и константы
    variable: string // Переменные (нейтральные оттенки)
    parameter: string // Параметры функций
    constant: string // Константы (теплые оттенки)

    // Функции и методы
    function: string // Объявления функций (холодные оттенки)
    method: string // Методы

    // Строки и числа
    string: string // Строки (теплые оттенки)
    number: string // Числа
    boolean: string // Логические значения

    // Свойства и объекты
    property: string // Свойства объектов
    object: string // Объекты

    // Теги и атрибуты (для разметки)
    tag: string // Теги
    attribute: string // Атрибуты

    // Ошибки и предупреждения
    error: string // Ошибки
    warning: string // Предупреждения
    info: string // Информационные сообщения
    success: string // Успешные операции
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

  // Методы
  getColorWithAlpha: (
    color: string,
    alpha: keyof CalmClarityPalette['alpha']
  ) => string
}

/**
 * Реализация палитры "Спокойная Четкость"
 */
export const calmClarityPalette: CalmClarityPalette = {
  workbench: {
    // Темно-синий/графитовый фон, не абсолютно черный для уменьшения усталости глаз
    background: '#10141a', // Основной фон (более темный для уменьшения контраста)
    backgroundSecondary: '#0f1319', // Вторичный фон (немного темнее основного фона для границ)
    border: '#1a1f2a', // Цвет для границ (чуть темнее фона)
    backgroundTertiary: '#151a24', // Третичный фон (немного темнее)

    // Элементы интерфейса - теперь ближе к новому фону для создания едва заметной иерархии
    sidebar: '#0e1218', // Сайдбар (очень близок к основному фону)
    activityBar: '#121720', // Панель активности
    statusbar: '#0f131b', // Статус-бар (очень близок к основному фону)
    titlebar: '#0d1117', // Заголовок окна (очень близок к основному фону)
    tabbar: '#10151f', // Панель вкладок (очень близок к основному фону, но чуть темнее)

    // Акценты: более приглушенные, но выделяющиеся цвета
    accentPrimary: '#7ab4e6', // Более приглушенный сине-голубой акцентный цвет
    accentSecondary: '#6a7d9a', // Приглушенный лавандовый (холодный сине-серый)
    accentHover: '#75b0e2', // Hover вариант (между основным и фокусным акцентом)
    accentFocus: '#7ca0c2', // Фокус ввода (немного темнее для лучшей интеграции с темной темой)
    badgeForeground: '#e0efff', // Цвет текста для бейджей (наоборот, светлее для лучшей видимости на темном фоне)
  },

  button: {
    // Цвета для primary кнопок - темнее для лучшего соответствия темной теме
    primaryBackground: '#1a2a4a',
    primaryForeground: '#d0e0ff', // Более темный белый для лучшей интеграции с темной темой
    primaryHoverBackground: '#1f355a', // Темнее, чем accentHover
    // Цвета для secondary кнопок - контрастные, но не отвлекающие
    secondaryBackground: '#182a45', // Темно-синий фон, контрастный с основным фоном
    secondaryForeground: '#b0c4e0', // Текст близкий к основному цвету текста
    secondaryHoverBackground: '#1c3252', // Более темный фон при наведении
    border: '#253a5a', // Нейтральный цвет для границы кнопок
  },

  syntax: {
    // Основные цвета - скорректированы для лучшей гармонии с новым фоном
    text: '#7a8ca0', // Основной текст (теперь темнее для лучшей интеграции с боковой панелью)
    comment: '#4a5a70', // Комментарии (более приглушенные, серо-голубые)

    // Цвета для улучшенной контрастности
    purple: '#bb9af7',
    green: '#9ece6a',
    yellow: '#e0af68',
    magenta: '#f776f1',
    cyan: '#7dcfff',

    // Ключевые слова и операторы (холодные оттенки)
    keyword: '#bb9af7', // Ключевые слова (теперь фиолетовый)
    operator: '#f14565', // Операторы (ярче для лучшей видимости)
    control: '#bb9af7', // Контрольные операторы (теперь фиолетовый)

    // Типы и классы (теплые оттенки)
    type: '#e0af68', // Типы данных
    class: '#e0af68', // Классы
    interface: '#e0af68', // Интерфейсы
    enum: '#7d9fb0', // Перечисления (ярче для лучшей видимости)

    // Переменные и константы (нейтральные оттенки)
    variable: '#d369bc', // Переменные
    parameter: '#9accda', // Параметры функций (ярче для лучшей видимости)
    constant: '#e6ae89', // Константы

    // Функции и методы (холодные оттенки)
    function: '#7dcfff', // Объявления функций
    method: '#7dcfff', // Методы

    // Строки и числа (более теплые оттенки для контраста)
    string: '#9ece6a', // Строки
    number: '#fa7c5d', // Числа
    boolean: '#e04965', // Логические значения

    // Свойства и объекты (нейтральные оттенки)
    property: '#ba8cc0', // Свойства объектов (основной цвет текста для уменьшения акцента)
    object: '#7aabc8', // Объекты (ярче для лучшей видимости)

    // Теги и атрибуты (для разметки)
    tag: '#7dcfff', // Теги
    attribute: '#e0af68', // Атрибуты (теперь желтый)

    // Ошибки и предупреждения (теплые оттенки для контраста с холодной палитрой)
    error: '#df215a', // Ошибки (ярче для лучшей видимости)
    warning: '#b35abe', // Предупреждения (ярче для лучей видимости)
    info: '#7a9ad8', // Информационные сообщения (ярче для лучей видимости)
    success: '#638dc4', // Успешные операции (ярче для лучей видимости)
  },

  // Альфа-варианты для полупрозрачности
  alpha: {
    subtle: '33', // 20% прозрачность (0x3)
    hover: '66', // 40% прозрачность (0x66)
    active: '99', // 60% прозрачность (0x99)
    semiOpaque: 'cc', // 80% прозрачность (0xcc)
  },

  // Цвета теней
  shadow: {
    inlineChat: '#171c2585', // Цвет тени для встроенного чата
    widget: '#171c2585', // Цвет тени для виджетов
    scrollbar: '#171c2585', // Цвет тени для полосы прокрутки
    editorStickyScroll: '#171c2585', // Цвет тени для фиксированной прокрутки редактора
    panelStickyScroll: '#171c2585', // Цвет тени для фиксированной прокрутки панели
    sideBarStickyScroll: '#171c2585', // Цвет тени для фиксированной прокрутки боковой панели
    listFilterWidget: '#171c2585', // Цвет тени для виджета фильтрации списка
  },

  // Нейтральные холодно-серо-голубые оттенки для вспомогательных элементов
 neutral: {
    // Cool gray-blue shades for subtle UI elements
    base: '#3a4a60', // Основной нейтральный цвет (более темный холодно-сине-серый для номеров строк и активных заголовков панелей)
    surface: '#151a25', // Поверхностный цвет (более темный холодно-серо-голубой для фона заголовков панелей)
    highlight: '#2f3f5a', // Цвет подсветки (нейтральный для границ или акцентов)
    subtle: '#455570', // Более приглушенный холодный оттенок для неактивных элементов
  },

  // SCM Graph colors - цвета для графа системы контроль версий
  scmGraph: {
    // Цвета для элементов графа (разные цвета для веток)
    foreground1: '#27729e', // cyan - для первой ветки
    foreground2: '#9a58a3', // purple - для второй ветки
    foreground3: '#6caa29', // green - для третьей ветки
    foreground4: '#d6912a', // yellow - для четвертой ветки
    foreground5: '#bd27b5', // magenta - для пятой ветки

    // Цвета для элементов при наведении
    historyItemHoverLabelForeground: '#ffffff', // основной цвет текста
    historyItemHoverAdditionsForeground: '#9ece6a', // green - цвет добавлений
    historyItemHoverDeletionsForeground: '#df215a', // red - цвет удалений
    historyItemHoverDefaultLabelBackground: '#40506a', // нейтральный цвет для фона метки
    historyItemHoverDefaultLabelForeground: '#ffffff', // белый цвет текста для контраста

    // Цвета для ссылок
    historyItemRefColor: '#27729e', // primary accent - цвет ссылки
    historyItemRemoteRefColor: '#9a58a3', // secondary accent - цвет удаленной ссылки
    historyItemBaseRefColor: '#1f3f7a', // hover accent - цвет базовой ссылки
  },

  // Метод для получения цвета с альфа-каналом
  getColorWithAlpha: (
    color: string,
    alpha: keyof CalmClarityPalette['alpha']
  ): string => {
    const hex = color.replace('#', '')
    return `#${hex}${calmClarityPalette.alpha[alpha]}`
  },
}

/**
 * Проверка контрастности цветов по WCAG
 */
export function getContrastRatio(color1: string, color2: string): number {
  // Удаление символа # и преобразование в RGB
  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const cleanHex = hex.replace('#', '')
    const r = parseInt(cleanHex.substring(0, 2), 16) / 255
    const g = parseInt(cleanHex.substring(2, 4), 16) / 25
    const b = parseInt(cleanHex.substring(4, 6), 16) / 25
    return { r, g, b }
  }

 // Вычисление относительной яркости
  const getLuminance = (r: number, g: number, b: number): number => {
    const RsRGB = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
    const GsRGB = g <= 0.03928 ? g / 1.055 : ((g + 0.055) / 1.055) ** 2.4
    const BsRGB = b <= 0.03928 ? b / 12.92 : ((b + 0.055) / 1.055) ** 2.4
    return 0.2126 * RsRGB + 0.7152 * GsRGB + 0.0722 * BsRGB
 }

  const color1Rgb = hexToRgb(color1)
  const color2Rgb = hexToRgb(color2)

  const lum1 = getLuminance(color1Rgb.r, color1Rgb.g, color1Rgb.b)
 const lum2 = getLuminance(color2Rgb.r, color2Rgb.g, color2Rgb.b)

  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)

  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Проверка соответствия цветов требованиям WCAG
 */
export function meetsWCAGContrast(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  const ratio = getContrastRatio(foreground, background)
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7.0
}