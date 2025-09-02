# Поддержка виджетов, меню и списков

## Добавленные компоненты

### 🔧 Виджеты
- **Widget Base** - базовые цвета для всех виджетов
- **Peek View Widget** - виджет предварительного просмотра
- **Editor Widget** - виджеты редактора
- **Editor Suggest Widget** - виджет автодополнения
- **Editor Hover Widget** - виджет подсказок при наведении
- **Debug Exception Widget** - виджет исключений отладчика

### 📋 Меню и списки
- **Menu Bar** - главное меню приложения
- **Context Menu** - контекстные меню
- **Quick Input** - быстрый ввод и командная палитра
- **Lists** - все типы списков с поддержкой выделения и фокуса
- **Tree** - древовидные структуры

### 🎯 Специализированные компоненты
- **Editor Marker Navigation** - навигация по маркерам
- **Merge Conflicts** - разрешение конфликтов слияния
- **Editor Overview Ruler** - обзорная линейка редактора
- **Minimap** - мини-карта кода
- **Problem Matcher** - сопоставление проблем
- **Charts** - графики для расширений
- **Checkbox** - флажки
- **Toolbar** - панели инструментов
- **Keybinding Labels** - метки клавиатурных сочетаний
- **Welcome Page** - страница приветствия
- **Debug Tools** - инструменты отладки
- **Testing** - компоненты тестирования

## Статистика

- **Общее количество цветов**: 352 (было 218)
- **Добавлено новых цветов**: 134
- **Поддерживаемые виджеты**: 15+ типов
- **Поддерживаемые меню**: 5+ типов
- **Специальные компоненты**: 10+ категорий

## Цветовая схема

Все добавленные компоненты используют единую палитру из 12 базовых цветов:
- **Фоны**: `bg.base`, `bg.elevated`, `bg.hover`, `bg.selection`
- **Текст**: `text.primary`, `text.muted`, `text.inactive`, `text.subtle`
- **Границы**: `border.default`, `border.focus`
- **Состояния**: `state.error`, `state.warning`, `state.info`, `state.success`

## Примеры использования

### Виджет автодополнения
```json
"editorSuggestWidget.background": "#1a1b26",
"editorSuggestWidget.selectedBackground": "#283457",
"editorSuggestWidget.highlightForeground": "#7aa2f7"
```

### Контекстное меню
```json
"menu.background": "#24283b",
"menu.selectionBackground": "#283457",
"menu.border": "#414868"
```

### Инструменты отладки
```json
"debugIcon.breakpointForeground": "#f7768e",
"debugIcon.startForeground": "#9ece6a",
"debugToolBar.background": "#24283b"
```