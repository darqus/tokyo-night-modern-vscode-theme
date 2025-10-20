export interface CalmClarityPalette {
  // Workbench colors - основные цвета интерфейса
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
      primary: string
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

  // Методы
  getColorWithAlpha: (
    color: string,
    alpha: keyof CalmClarityPalette['alpha']
  ) => string
}
