# Полный анализ темы Tokyo Night

## 1. Общая информация

- **Название**: Tokyo Night
- **Тип**: dark
- **Semantic Highlighting**: включён
- **Всего UI цветов**: 300+
- **Всего правил токенов**: 150+
- **Семантических токенов**: 8

---

## 2. Базовая палитра цветов

### 2.1 Фоновые цвета (Backgrounds)

| Название | Hex | Использование |
|----------|-----|---------------|
| Darkest | `#0d0f17` | Window borders |
| Darker | `#101014` | Borders, peek view, notifications |
| Dark | `#14141b` | Input, dropdown, debug state |
| Main | `#16161e` | Sidebar, activity bar, status bar, editor widgets |
| Editor | `#1a1b26` | Editor background, notebook, pane |
| Light | `#1c1d29` | Inactive selection, focus |
| Lighter | `#1e202e` | Line highlight, drop background, menu selection |
| Lightest | `#202330` | Active selection, toolbar, hover |

### 2.2 Текстовые цвета (Foreground)

| Название | Hex | Использование |
|----------|-----|---------------|
| Dim | `#515670` | Description, breadcrumb, ignored git |
| Muted | `#51597d` | Comments, code lens, separator |
| Medium | `#787c99` | Main foreground, sidebar, status bar |
| Bright | `#9aa5ce` | Variables, colors, HTML text |
| Brighter | `#a9b1d6` | Editor foreground, active text |
| Brightest | `#c0caf5` | Cursor, variables, class names |

### 2.3 Акцентные цвета (Accents)

| Цвет | Hex | Назначение |
|------|-----|------------|
| Blue Primary | `#3d59a1` | Buttons, badges, progress bar, find match |
| Blue Light | `#6183bb` | Links, settings header, git modified |
| Blue Medium | `#7aa2f7` | Functions, methods, CSS properties, terminal blue |
| Cyan Dark | `#0db9d7` | Support classes, imports, CSS tags |
| Cyan Medium | `#0da0ba` | Info, hints |
| Cyan Light | `#7dcfff` | Interpolation, imports, object properties |
| Cyan Bright | `#89ddff` | Operators, punctuation, headings |
| Teal | `#73daca` | Object keys, properties, preprocessor, links |
| Teal Dark | `#449dab` | Git added/untracked, inserted markup |
| Green | `#9ece6a` | Strings, CSS classes/fonts |
| Green Dark | `#41a6b5` | Charts, merge changes, terminal green |
| Purple Light | `#bb9af7` | Keywords, storage, attributes, JSON keys |
| Purple Dark | `#9d7cd8` | Storage modifiers, SCSS keywords, charts |
| Purple Bright | `#b267e6` | Debug token |
| Orange | `#ff9e64` | Numbers, constants, CSS values |
| Yellow | `#e0af68` | Function arguments, types, warnings, terminal yellow |
| Yellow Light | `#ffdb69` | Warn token |
| Yellow Muted | `#c49a5a` | List warnings, debug console, charts |
| Red | `#f7768e` | Tags, this/self, language variables, terminal red |
| Red Dark | `#db4b4b` | Errors, breakpoints, unexpected brackets |
| Red Muted | `#914c54` | Git deleted, deleted markup |
| Pink | `#ba3c97` | Tag punctuation |
| Pink Light | `#de5971` | Custom tags |
| Pink Bright | `#fc7b7b` | CSS ID |

### 2.4 Специальные цвета

| Название | Hex | Назначение |
|----------|-----|---------------|
| Regex | `#b4f9f8` | Regular expressions |
| Invalid | `#ff5370` | Invalid code |
| Selection | `#515c7e` | Selection backgrounds (с alpha) |
| Indent Guide | `#363b54` | Indent guides, line numbers, terminal black |
| Indent Active | `#42465d` | Active indent, bracket match border |
| Border | `#29355a` | Sash hover, focused cell |
| Disabled | `#545c7e` | Disabled foreground, focus border |
| Badge BG | `#7e83b2` | Badge background (с alpha) |
| Scrollbar | `#868bc4` | Scrollbar slider (с alpha) |
| Ghost Text | `#646e9c` | Ghost text, inlay hints, gitlens |
| Inactive | `#3b3e52` | Inactive activity bar, button secondary |

---

## 3. Паттерны использования прозрачности

### 3.1 Уровни alpha

| Alpha | Hex суффикс | Decimal | Использование |
|-------|-------------|---------|---------------|
| 10% | `1a` | 26 | Very subtle |
| 12.5% | `20` | 32 | Range highlight |
| 20% | `33` | 51 | Focus border, find range, stack frame |
| 25% | `40` | 64 | Selection, word highlight |
| 27% | `44` | 68 | Word highlight, selection highlight |
| 30% | `4d` | 77 | Selection, terminal selection |
| 33% | `55` | 85 | Word highlight strong |
| 36% | `5c` | 92 | Input validation info |
| 40% | `66` | 102 | Find match, peek view, unchanged code |
| 53% | `88` | 136 | Placeholder, conflict |
| 66% | `aa` | 170 | Button hover, debug value, merge incoming |
| 67% | `ab` | 171 | Gitlens uncommitted |
| 80% | `cc` | 204 | Git conflicting |
| 87% | `dd` | 221 | Button background |

### 3.2 Паттерны с прозрачностью

```typescript
// Selection и highlights
'#515c7e' + alpha(0.125) // range highlight
'#515c7e' + alpha(0.20)  // inactive selection
'#515c7e' + alpha(0.27)  // word highlight
'#515c7e' + alpha(0.30)  // selection
'#515c7e' + alpha(0.33)  // word highlight strong

// Find matches
'#3d59a1' + alpha(0.20)  // peek view selection
'#3d59a1' + alpha(0.27)  // input option active
'#3d59a1' + alpha(0.40)  // find match, merge incoming

// Scrollbar
'#868bc4' + alpha(0.08)  // scrollbar slider
'#868bc4' + alpha(0.13)  // scrollbar hover
'#868bc4' + alpha(0.13)  // scrollbar active

// Diff/Merge
'#41a6b5' + alpha(0.15)  // merge current header
'#41a6b5' + alpha(0.25)  // diff inserted, merge change
'#41a6b5' + alpha(0.40)  // merge change word
'#db4b4b' + alpha(0.13)  // diff removed
```

---

## 4. Структура для генератора

### 4.1 Базовая палитра

```typescript
export const palette = {
  // Backgrounds
  bg: {
    darkest: '#0d0f17',
    darker: '#101014',
    dark: '#14141b',
    main: '#16161e',
    editor: '#1a1b26',
    light: '#1c1d29',
    lighter: '#1e202e',
    lightest: '#202330',
  },

  // Foregrounds
  fg: {
    dim: '#515670',
    muted: '#51597d',
    medium: '#787c99',
    bright: '#9aa5ce',
    brighter: '#a9b1d6',
    brightest: '#c0caf5',
  },

  // Blues
  blue: {
    primary: '#3d59a1',
    light: '#6183bb',
    medium: '#7aa2f7',
  },

  // Cyans
  cyan: {
    dark: '#0db9d7',
    medium: '#0da0ba',
    light: '#7dcfff',
    bright: '#89ddff',
  },

  // Teals
  teal: {
    main: '#73daca',
    dark: '#449dab',
  },

  // Greens
  green: {
    main: '#9ece6a',
    dark: '#41a6b5',
  },

  // Purples
  purple: {
    light: '#bb9af7',
    dark: '#9d7cd8',
    bright: '#b267e6',
  },

  // Oranges/Yellows
  orange: '#ff9e64',
  yellow: {
    main: '#e0af68',
    light: '#ffdb69',
    muted: '#c49a5a',
  },

  // Reds/Pinks
  red: {
    main: '#f7768e',
    dark: '#db4b4b',
    muted: '#914c54',
  },
  pink: {
    main: '#ba3c97',
    light: '#de5971',
    bright: '#fc7b7b',
  },

  // Special
  special: {
    regex: '#b4f9f8',
    invalid: '#ff5370',
    selection: '#515c7e',
    indentGuide: '#363b54',
    indentActive: '#42465d',
    border: '#29355a',
    disabled: '#545c7e',
    badge: '#7e83b2',
    scrollbar: '#868bc4',
    ghostText: '#646e9c',
    inactive: '#3b3e52',
  },
};
```

### 4.2 Утилиты для цвета

```typescript
// Добавление прозрачности
export function alpha(hex: string, opacity: number): string {
  const alphaHex = Math.round(opacity * 255).toString(16).padStart(2, '0');
  return hex + alphaHex;
}

// Осветление
export function lighten(hex: string, amount: number): string {
  return mix(hex, '#ffffff', amount);
}

// Затемнение
export function darken(hex: string, amount: number): string {
  return mix(hex, '#000000', amount);
}

// Смешивание
export function mix(hex1: string, hex2: string, ratio: number): string {
  // RGB interpolation
}
```

---

## 5. Генераторы секций

### 5.1 UI Colors (300+ свойств)

Группы:

- **Core** (20): foreground, focus, borders, shadows
- **Buttons** (10): background, hover, secondary
- **Inputs** (15): background, border, validation
- **Activity Bar** (8): background, foreground, badges
- **Sidebar** (12): background, foreground, sections
- **Lists** (20): selection, hover, highlights
- **Editor** (80): background, selection, highlights, brackets
- **Editor Widgets** (30): hover, suggest, peek view
- **Diff Editor** (15): inserted, removed, unchanged
- **Tabs** (15): active, inactive, borders
- **Panels** (8): background, borders, titles
- **Status Bar** (10): background, foreground, debugging
- **Title Bar** (6): active, inactive, borders
- **Terminal** (20): background, ANSI colors
- **Git Decorations** (10): added, modified, deleted
- **Notebook** (6): editor, cells, borders
- **Charts** (8): colors for charts
- **SCM Graph** (12): history, refs
- **Merge Editor** (10): conflicts, changes
- **GitLens** (4): trailing line, gutter
- **Notifications** (8): background, icons
- **Menu** (8): background, selection
- **Chat/Inline Chat** (8): avatars, commands

### 5.2 Token Colors (150+ правил)

Группы:

- **Comments** (4): regular, doc, emphasized
- **Strings** (3): regular, colors, symbols
- **Numbers** (2): numeric, constants
- **Keywords** (8): control, operators, storage
- **Functions** (5): definitions, calls, arguments
- **Variables** (10): regular, properties, parameters
- **Classes** (6): names, support, inherited
- **Tags** (5): HTML, custom, punctuation
- **CSS** (20): properties, classes, IDs, selectors
- **SCSS** (8): mixins, includes, extends
- **Regex** (6): patterns, character classes
- **JSON** (8): keys по уровням вложенности
- **Markdown** (20): headings, bold, italic, links
- **Markup** (8): inserted, deleted, changed
- **Tokens** (4): info, warn, error, debug
- **Language Specific** (40): PHP, Vue, Blade, etc.

### 5.3 Semantic Token Colors (8 правил)

```typescript
{
  'parameter.declaration': yellow.main,
  'parameter': fg.bright,
  'property.declaration': teal.main,
  'property.defaultLibrary': cyan.dark,
  '*.defaultLibrary': cyan.dark,
  'variable.defaultLibrary': cyan.dark,
  'variable.declaration': purple.light,
  'variable': fg.brightest,
}
```

---

## 6. Ключевые особенности

### 6.1 Многоуровневая система фонов

8 уровней фоновых цветов для создания глубины:

- `#0d0f17` → `#101014` → `#14141b` → `#16161e` → `#1a1b26` → `#1c1d29` → `#1e202e` → `#202330`

### 6.2 Богатая цветовая палитра

- 4 оттенка синего
- 4 оттенка cyan
- 2 оттенка teal
- 2 оттенка зелёного
- 3 оттенка фиолетового
- 3 оттенка жёлтого
- 3 оттенка красного
- 3 оттенка розового

### 6.3 Контекстные цвета

Разные цвета для разных контекстов:

- JSON keys меняются по уровню вложенности (8 уровней)
- Markdown headings имеют градиент от cyan до grey
- CSS селекторы различаются по типу

### 6.4 Семантическая подсветка

Минимальная, но целенаправленная:

- Параметры функций
- Свойства объектов
- Переменные и их объявления
- Библиотечные элементы

---

## 7. Рекомендации для генератора

### 7.1 Структура модулей

```
src/theme/
├── palette/
│   ├── backgrounds.ts    # 8 уровней фонов
│   ├── foregrounds.ts    # 6 уровней текста
│   ├── blues.ts          # Синие оттенки
│   ├── cyans.ts          # Cyan/teal оттенки
│   ├── greens.ts         # Зелёные оттенки
│   ├── purples.ts        # Фиолетовые оттенки
│   ├── yellows.ts        # Жёлтые/оранжевые
│   ├── reds.ts           # Красные/розовые
│   ├── special.ts        # Специальные цвета
│   └── index.ts          # Объединение
├── utils/
│   ├── color.ts          # alpha, lighten, darken, mix
│   └── validate.ts       # Валидация
├── generator/
│   ├── ui/
│   │   ├── core.ts       # Базовые UI цвета
│   │   ├── buttons.ts    # Кнопки
│   │   ├── inputs.ts     # Инпуты
│   │   ├── editor.ts     # Редактор
│   │   ├── sidebar.ts    # Сайдбар
│   │   ├── terminal.ts   # Терминал
│   │   └── index.ts      # Объединение
│   ├── tokens/
│   │   ├── comments.ts   # Комментарии
│   │   ├── strings.ts    # Строки
│   │   ├── keywords.ts   # Ключевые слова
│   │   ├── functions.ts  # Функции
│   │   ├── css.ts        # CSS правила
│   │   ├── markdown.ts   # Markdown
│   │   └── index.ts      # Объединение
│   ├── semantic.ts       # Семантические токены
│   └── index.ts          # Главный генератор
└── index.ts              # Экспорт
```

### 7.2 Приоритеты реализации

**Must Have:**

1. Базовая палитра (backgrounds, foregrounds)
2. Акцентные цвета (blues, cyans, purples, etc.)
3. Утилиты (alpha, mix)
4. Генератор UI цветов (core, editor, sidebar)
5. Генератор токенов (основные группы)

**Should Have:**
6. Специальные цвета
7. Полный набор UI цветов
8. Все группы токенов
9. Семантические токены

**Nice to Have:**
10. Валидация
11. Тесты
12. Документация API

### 7.3 Переиспользование цветов

Примеры:

```typescript
// Фоны с вариациями
'editor.background': bg.editor,
'editor.lineHighlightBackground': bg.lighter,
'list.activeSelectionBackground': bg.lightest,

// Прозрачность для highlights
'editor.selectionBackground': alpha(special.selection, 0.30),
'editor.wordHighlightBackground': alpha(special.selection, 0.27),

// Вариации синего
'button.background': alpha(blue.primary, 0.87),
'button.hoverBackground': alpha(blue.primary, 0.67),
'progressBar.background': blue.primary,
```

---

## 8. Метрики

| Метрика | Значение |
|---------|----------|
| Всего UI цветов | 300+ |
| Уникальных hex цветов | ~80 |
| Цветов с alpha | ~50 |
| Правил токенов | 150+ |
| Семантических токенов | 8 |
| Уровней фонов | 8 |
| Уровней текста | 6 |
| Оттенков синего | 4 |
| Оттенков cyan | 4 |
| JSON key уровней | 8 |
| Markdown heading уровней | 6 |
