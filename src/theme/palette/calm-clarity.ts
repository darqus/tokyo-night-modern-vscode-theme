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

  // Alpha variants - альфа-варианты для полупрозрачности
  alpha: {
    subtle: string // 20% прозрачность - для тонких фонов
    hover: string // 40% прозрачность - для состояний наведения
    active: string // 60% прозрачность - для активных состояний
    semiOpaque: string // 80% прозрачность - для полупрозрачных элементов
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
    background: '#141820', // Основной фон (немного светлее для уменьшения контраста)
    backgroundSecondary: '#12161e', // Вторичный фон (немного темнее основного фона для границ)
    border: '#1f242f', // Цвет для границ (чуть светлее фона)
    backgroundTertiary: '#1a1f2a', // Третичный фон (еще немного светлее)

    // Элементы интерфейса - теперь ближе к новому фону для создания едва заметной иерархии
    sidebar: '#11151d', // Сайдбар (очень близок к основному фону)
    activityBar: '#0d1015', // Панель активности (немного темнее основного фона)
    statusbar: '#131720', // Статус-бар (очень близок к основному фону)
    titlebar: '#10141c', // Заголовок окна (очень близок к основному фону)
    tabbar: '#141923', // Панель вкладок (очень близок к основному фону, но чуть светлее)

    // Акценты: более приглушенные, но выделяющиеся цвета
    accentPrimary: '#5a7b9e', // Приглушенный бирюзово-синий (более сдержанный)
    accentSecondary: '#7a8da8', // Приглушенный лавандовый (холодный сине-серый)
    accentHover: '#6d8aab', // Hover вариант (между основным и фокусным акцентом)
    accentFocus: '#8ca0bf', // Фокус ввода (немного ярче для четкого выделения, но все еще приглушенный)
  },

  syntax: {
    // Основные цвета - скорректированы для лучшей гармонии с новым фоном
    text: '#a2acbd', // Основной текст (светлее для лучшей читаемости на более темном фоне)
    comment: '#4a5a70', // Комментарии (более приглушенные, серо-голубые)

    // Ключевые слова и операторы (холодные оттенки)
    keyword: '#8a9fcb', // Ключевые слова (ярче для лучшей видимости)
    operator: '#9aaab8', // Операторы (ярче для лучшей видимости)
    control: '#7d92b8', // Контрольные операторы (ярче для лучшей видимости)

    // Типы и классы (холодные оттенки)
    type: '#6a8ab8', // Типы данных (ярче для лучшей видимости)
    class: '#5d7daa', // Классы (ярче для лучшей видимости)
    interface: '#6c8db8', // Интерфейсы (ярче для лучшей видимости)
    enum: '#7d9fb0', // Перечисления (ярче для лучшей видимости)

    // Переменные и константы (нейтральные оттенки)
    variable: '#b8c8e8', // Переменные (ярче для лучшей видимости)
    parameter: '#9aadc9', // Параметры функций (ярче для лучшей видимости)
    constant: '#8a92d4', // Константы (ярче для лучшей видимости)

    // Функции и методы (холодные оттенки)
    function: '#7aaad8', // Объявления функций (ярче для лучшей видимости)
    method: '#6c9db8', // Методы (ярче для лучшей видимости)

    // Строки и числа (более теплые оттенки для контраста)
    string: '#7aabc8', // Строки (ярче для лучшей видимости)
    number: '#8a94c4', // Числа (ярче для лучшей видимости)
    boolean: '#8d95d6', // Логические значения (ярче для лучшей видимости)

    // Свойства и объекты (холодные оттенки)
    property: '#8da0d8', // Свойства объектов (ярче для лучшей видимости)
    object: '#7aabc8', // Объекты (ярче для лучшей видимости)

    // Теги и атрибуты (для разметки)
    tag: '#7aaad8', // Теги (ярче для лучшей видимости)
    attribute: '#9aadc9', // Атрибуты (ярче для лучшей видимости)

    // Ошибки и предупреждения (теплые оттенки для контраста с холодной палитрой)
    error: '#aa8a8a', // Ошибки (ярче для лучшей видимости)
    warning: '#8a9ab8', // Предупреждения (ярче для лучшей видимости)
    info: '#7a9ad8', // Информационные сообщения (ярче для лучшей видимости)
    success: '#8a9a9a', // Успешные операции (ярче для лучшей видимости)
  },

  // Альфа-варианты для полупрозрачности
  alpha: {
    subtle: '33', // 20% прозрачность (0x33)
    hover: '66', // 40% прозрачность (0x66)
    active: '99', // 60% прозрачность (0x99)
    semiOpaque: 'cc', // 80% прозрачность (0xcc)
  },

  // Нейтральные холодно-серо-голубые оттенки для вспомогательных элементов
  neutral: {
    // Cool gray-blue shades for subtle UI elements
    base: '#50607a', // Основной нейтральный цвет (холодно-сине-серый для номеров строк и активных заголовков панелей)
    surface: '#1a202a', // Поверхностный цвет (более темный холодно-серо-голубой для фона заголовков панелей)
    highlight: '#40506a', // Цвет подсветки (нейтральный для границ или акцентов)
    subtle: '#5a709a', // Более приглушенный холодный оттенок для неактивных элементов
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
    const g = parseInt(cleanHex.substring(2, 4), 16) / 255
    const b = parseInt(cleanHex.substring(4, 6), 16) / 255
    return { r, g, b }
  }

  // Вычисление относительной яркости
  const getLuminance = (r: number, g: number, b: number): number => {
    const RsRGB = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4
    const GsRGB = g <= 0.03928 ? g / 12.92 : ((g + 0.055) / 1.055) ** 2.4
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