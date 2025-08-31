import { Hex } from '../types'

/**
 * Расширенная палитра - все цвета из оригинальной Tokyo Night темы,
 * которые используются как захардкоженные значения в файлах темы.
 * Выделены из анализа всех theme файлов для централизованного управления.
 */
export const extendedPalette = {
  // === ОСНОВНЫЕ ФОНОВЫЕ ЦВЕТА ===
  // Все основные фоны из оригинала
  bg: {
    main: '#1a1b26' as Hex, // Основной фон редактора
    secondary: '#16161e' as Hex, // Боковые панели, статус-бар, активные вкладки
    tertiary: '#0c0f17' as Hex, // Самые темные элементы (командный центр, тексты)
    input: '#14141b' as Hex, // Поля ввода
    border: '#101014' as Hex, // Границы панелей
    tree: '#2b2b3b' as Hex, // Направляющие дерева файлов

    // === АДАПТИВНЫЕ ФОНЫ ПО ТИПАМ ТЕМ ===
    adaptive: {
      // Фоны редактора
      editor: {
        dark: '#1a1b26' as Hex, // Темные темы - стандартный Tokyo Night
        light: '#ffffff' as Hex, // Светлые темы - чистый белый фон
        storm: '#24283b' as Hex, // Storm - более глубокий синий
        moon: '#222436' as Hex, // Moon - более теплый тон
        contrast: '#0d1017' as Hex, // High contrast - почти черный
        pastel: '#1e1f2e' as Hex, // Pastel - мягче стандартного
        neon: '#101218' as Hex, // Neon - темнее для контраста с яркими цветами
      },

      // Фоны терминала
      terminal: {
        dark: '#16161e' as Hex, // Темнее редактора для различия
        light: '#f8f8f8' as Hex, // Светло-серый для светлых тем
        storm: '#1f2335' as Hex, // Холодный оттенок
        moon: '#1e1e2e' as Hex, // Теплый темный
        contrast: '#000000' as Hex, // Максимальный контраст
        pastel: '#1a1a26' as Hex, // Мягкий темный
        neon: '#0a0d15' as Hex, // Очень темный для neon эффектов
      },

      // Фоны боковых панелей (Explorer, Extensions, etc.)
      sideBar: {
        dark: '#16161e' as Hex, // Классический темный
        light: '#f3f3f3' as Hex, // Светлый серый
        storm: '#1f2335' as Hex, // Storm стиль
        moon: '#1e1e2e' as Hex, // Moon стиль
        contrast: '#0a0a0a' as Hex, // Высокий контраст
        pastel: '#1c1c28' as Hex, // Пастельный
        neon: '#0c0f18' as Hex, // Для neon тем
      },

      // Фоны панели активности (Activity Bar)
      activityBar: {
        dark: '#16161e' as Hex, // Стандартный
        light: '#eeeeee' as Hex, // Светлый
        storm: '#1d2032' as Hex, // Storm
        moon: '#1c1c2c' as Hex, // Moon
        contrast: '#050505' as Hex, // Контрастный
        pastel: '#1a1a26' as Hex, // Пастельный
        neon: '#0a0d16' as Hex, // Neon
      },

      // Фоны строки состояния (Status Bar)
      statusBar: {
        dark: '#16161e' as Hex, // Стандартный
        light: '#e8e8e8' as Hex, // Светлый
        storm: '#1d2032' as Hex, // Storm
        moon: '#1c1c2c' as Hex, // Moon
        contrast: '#000000' as Hex, // Черный для контраста
        pastel: '#1a1a26' as Hex, // Пастельный
        neon: '#0a0d16' as Hex, // Neon
      },

      // Фоны вкладок (Tab Bar)
      tabBar: {
        dark: '#1a1b26' as Hex, // Как редактор
        light: '#ffffff' as Hex, // Белый
        storm: '#24283b' as Hex, // Storm
        moon: '#222436' as Hex, // Moon
        contrast: '#0d1017' as Hex, // Контрастный
        pastel: '#1e1f2e' as Hex, // Пастельный
        neon: '#101218' as Hex, // Neon
      },

      // Фоны меню и выпадающих списков
      menu: {
        dark: '#0c0f17' as Hex, // Темнее основного
        light: '#ffffff' as Hex, // Белый
        storm: '#1a1e2e' as Hex, // Storm
        moon: '#1a1a2a' as Hex, // Moon
        contrast: '#000000' as Hex, // Черный
        pastel: '#1c1d29' as Hex, // Пастельный
        neon: '#080b13' as Hex, // Neon
      },

      // Фоны уведомлений и всплывающих окон
      notification: {
        dark: '#16161e' as Hex, // Стандартный
        light: '#f0f0f0' as Hex, // Светлый
        storm: '#1f2335' as Hex, // Storm
        moon: '#1e1e2e' as Hex, // Moon
        contrast: '#0a0a0a' as Hex, // Контрастный
        pastel: '#1c1c28' as Hex, // Пастельный
        neon: '#0c0f18' as Hex, // Neon
      },
    },

    // Оригинальная система (для обратной совместимости)
    editor: {
      dark: '#1a1b26' as Hex, // Темные темы - стандартный Tokyo Night
      light: '#ffffff' as Hex, // Светлые темы - чистый белый фон
      storm: '#24283b' as Hex, // Storm - более глубокий синий
      moon: '#222436' as Hex, // Moon - более теплый тон
      contrast: '#0d1017' as Hex, // High contrast - почти черный
      pastel: '#1e1f2e' as Hex, // Pastel - мягче стандартного
      neon: '#101218' as Hex, // Neon - темнее для контраста с яркими цветами
    },
  },

  // === ЦВЕТА ВЫДЕЛЕНИЙ И ИНТЕРАКТИВНЫХ СОСТОЯНИЙ ===
  selection: {
    listActive: '#202330' as Hex, // Активный элемент в списках
    listInactive: '#1c1d29' as Hex, // Неактивный выбранный элемент
    listHover: '#13131a' as Hex, // Наведение на элемент списка (темнее)
    listDrop: '#1e202e' as Hex, // Выпадающие списки и меню
    menuSelection: '#1e202e' as Hex, // Выделение в меню
    menuBorder: '#1b1e2e' as Hex, // Граница выделения в меню
  },

  // === ЦВЕТА ТЕКСТА И FOREGROUND ===
  text: {
    primary: '#a9b1d6' as Hex, // Основной текст интерфейса
    muted: '#787c99' as Hex, // Приглушенный текст (главный UI foreground)
    disabled: '#545c7e' as Hex, // Отключенный текст
    description: '#515670' as Hex, // Описания
    error: '#515670' as Hex, // Текст ошибок
    placeholder: '#999a9d' as Hex, // Placeholder текст
    lineNumber: '#363b54' as Hex, // Номера строк
    lineNumberActive: '#787c99' as Hex, // Активная строка
    settings: '#6183bb' as Hex, // Заголовки настроек
    white: '#ffffff' as Hex, // Белый текст
    light: '#e5e5e5' as Hex, // Светлый текст
    gray: '#bababc' as Hex, // Серый текст
    grayInactive: '#a4a5a7' as Hex, // Неактивный серый
    badge: '#acb0d0' as Hex, // Текст бейджей
    preformat: '#d2e1ea' as Hex, // Предформатированный текст
  },

  // === ГРАНИЦЫ И РАМКИ ===
  border: {
    widget: '#272a31' as Hex, // Границы виджетов
    focus: '#545c7e33' as Hex, // Граница фокуса (с прозрачностью)
    window: '#0d0f17' as Hex, // Границы окон
    sash: '#29355a' as Hex, // Границы разделителей
    input: '#272a31' as Hex, // Границы полей ввода
    keybinding: '#272a31' as Hex, // Границы клавиш
    keybindingBottom: '#272a31ab' as Hex, // Нижняя граница клавиш
    checkbox: '#272a31' as Hex, // Границы чекбоксов
    radio: '#272a31' as Hex, // Границы радиокнопок
    dropdown: '#272a31' as Hex, // Границы выпадающих списков
  },

  // === ЦВЕТА КНОПОК И ИНТЕРАКТИВНЫХ ЭЛЕМЕНТОВ ===
  button: {
    primary: '#3d59a1dd' as Hex, // Основная кнопка
    primaryHover: '#2d3b5a' as Hex, // Наведение на основную кнопку
    secondary: '#222c44' as Hex, // Вторичная кнопка
    secondaryHover: '#2d3b5a' as Hex, // Наведение на вторичную кнопку
    border: '#7aa2f780' as Hex, // Граница кнопки
    separator: '#7aa2f766' as Hex, // Разделитель кнопок
    foreground: '#ffffff' as Hex, // Текст кнопок
  },

  // === ЦВЕТА SCROLLBAR ===
  scrollbar: {
    shadow: '#00000033' as Hex, // Тень скроллбара
    background: '#868bc415' as Hex, // Фон скроллбара
    hover: '#868bc410' as Hex, // Наведение на скроллбар
    active: '#868bc422' as Hex, // Активный скроллбар
  },

  // === ЦВЕТА БЕЙДЖЕЙ И ЗНАЧКОВ ===
  badge: {
    background: '#7e83b230' as Hex, // Фон бейджей
    activityBar: '#3d59a1' as Hex, // Бейдж активности-бара
    extension: '#7bb2fa' as Hex, // Бейдж расширений
    extensionForeground: '#0c0f17' as Hex, // Текст бейджа расширений
  },

  // === EXTENSION BUTTON COLORS ===
  extension: {
    prominentBackground: '#7dcfff' as Hex, // Видимая кнопка расширения
    prominentHover: '#222c444d' as Hex, // Наведение на видимую кнопку
    prominentForeground: '#e5e5e5' as Hex, // Текст видимой кнопки
  },

  // === ЦВЕТА КОМАНДНОГО ЦЕНТРА ===
  command: {
    foreground: '#bababc' as Hex, // Текст команд
    activeForeground: '#e5e5e5' as Hex, // Активный текст команд
    inactiveForeground: '#a4a5a7' as Hex, // Неактивный текст команд
    background: '#0c0f17' as Hex, // Фон командного центра
    activeBackground: '#13151d' as Hex, // Активный фон командного центра
  },

  // === ЦВЕТА БАННЕРОВ ===
  banner: {
    background: '#0c0f17' as Hex, // Фон баннера
    foreground: '#e5e5e5' as Hex, // Текст баннера
    iconForeground: '#7dcfff' as Hex, // Иконки баннера
  },

  // === ЦВЕТА KEYBINDING LABELS ===
  keybinding: {
    background: '#0c0f1799' as Hex, // Фон клавиш (с прозрачностью)
    foreground: '#e5e5e5' as Hex, // Текст клавиш
  },

  // === ЦВЕТА ВКЛАДОК ===
  tabs: {
    activeBorder: '#3d59a1' as Hex, // Граница активной вкладки
  },

  // === ЦВЕТА INPUT ЭЛЕМЕНТОВ ===
  input: {
    optionActive: '#7aa2f733' as Hex, // Активная опция (с прозрачностью)
    optionHover: '#13151d' as Hex, // Наведение на опцию
    validationInfo: '#7aa2f721' as Hex, // Фон информационной валидации
    validationInfoBorder: '#7dcfff' as Hex, // Граница информационной валидации
    validationWarning: '#e0af6821' as Hex, // Фон предупреждения валидации
    validationWarningBorder: '#e0af68' as Hex, // Граница предупреждения валидации
    validationError: '#e4687621' as Hex, // Фон ошибки валидации
    validationErrorBorder: '#e46876' as Hex, // Граница ошибки валидации
  },

  // === ЦВЕТА DROPDOWN ===
  dropdown: {
    foreground: '#bababc' as Hex, // Текст выпадающего списка
    background: '#0c0f17' as Hex, // Фон выпадающего списка
    listBackground: '#0c0f17' as Hex, // Фон списка
  },

  // === ЦВЕТА CHECKBOX И RADIO ===
  checkbox: {
    background: '#0c0f17' as Hex, // Фон чекбокса
    foreground: '#e5e5e5' as Hex, // Текст чекбокса
    selectBackground: '#7aa2f733' as Hex, // Фон выбранного чекбокса
  },

  radio: {
    activeForeground: '#e5e5e5' as Hex, // Активный текст радиокнопки
    activeBackground: '#0c0f17' as Hex, // Активный фон радиокнопки
    inactiveForeground: '#e5e5e5' as Hex, // Неактивный текст радиокнопки
    inactiveBackground: '#0c0f17' as Hex, // Неактивный фон радиокнопки
    inactiveHover: '#13151d' as Hex, // Наведение на неактивную радиокнопку
  },

  // === ЦВЕТА ACTIVITY BAR ===
  activityBar: {
    inactive: '#3b3e52' as Hex, // Неактивный элемент в activity bar
  },

  // === ЦВЕТА СПИСКОВ ===
  list: {
    deemphasized: '#787c99' as Hex, // Приглушенный текст списка
    highlight: '#668ac4' as Hex, // Подсветка в списке
    invalid: '#c97018' as Hex, // Невалидный элемент в списке
    error: '#bb616b' as Hex, // Ошибка в списке
    warning: '#c49a5a' as Hex, // Предупреждение в списке
  },

  // === ЦВЕТА GIT ===
  git: {
    modified: '#6183bb' as Hex, // Измененные файлы
    ignored: '#515670' as Hex, // Игнорируемые файлы
    deleted: '#914c54' as Hex, // Удаленные файлы
    renamed: '#449dab' as Hex, // Переименованные файлы
    added: '#449dab' as Hex, // Добавленные файлы
    untracked: '#449dab' as Hex, // Неотслеживаемые файлы
    conflicting: '#e0af68cc' as Hex, // Конфликтующие файлы
    stageDeleted: '#914c54' as Hex, // Удаленные в stage
    stageModified: '#6183bb' as Hex, // Измененные в stage
  },

  // === ЦВЕТА SCM GRAPH ===
  scmGraph: {
    hoverLabel: '#1b1e2e' as Hex, // Подпись при наведении
    foreground1: '#ff9e64' as Hex, // Цвет ветки 1
    foreground2: '#e0af68' as Hex, // Цвет ветки 2
    foreground3: '#41a6b5' as Hex, // Цвет ветки 3
    foreground4: '#7aa2f7' as Hex, // Цвет ветки 4
    foreground5: '#bb9af7' as Hex, // Цвет ветки 5
    hoverAdditions: '#41a6b5' as Hex, // Добавления при наведении
    hoverDeletions: '#f7768e' as Hex, // Удаления при наведении
    refColor: '#506FCA' as Hex, // Цвет ссылок
    remoteRefColor: '#41a6b5' as Hex, // Цвет удаленных ссылок
    baseRefColor: '#9d7cd8' as Hex, // Цвет базовых ссылок
    hoverDefault: '#a9b1d6' as Hex, // Стандартный цвет при наведении
  },

  // === СПЕЦИАЛЬНЫЕ ЦВЕТА ===
  special: {
    transparent: '#ffffff00' as Hex, // Прозрачный цвет
    progressBar: '#7dcfff' as Hex, // Прогресс-бар
    walkThrough: '#0c0f17' as Hex, // Фон walk-through
    textLink: '#94acdf' as Hex, // Ссылки в тексте
    textLinkActive: '#7dcfff' as Hex, // Активные ссылки в тексте
    textBlockQuote: '#0c0f17' as Hex, // Блок цитат
    textCodeBlock: '#0c0f17' as Hex, // Блок кода
    textSeparator: '#7bb0f9' as Hex, // Разделитель текста
  },
} as const
