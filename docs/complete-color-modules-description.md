# Полное описание цветовых модулей Tokyo Night Modern

## Введение

Tokyo Night Modern - это современная тема для Visual Studio Code, разработанная с учетом передовых практик проектирования пользовательского интерфейса и доступности. Тема включает в себя сложную систему цветов, которая охватывает как пользовательский интерфейс редактора, так и подсветку синтаксиса для различных языков программирования.

Цветовая система темы основана на иерархической структуре дизайн-токенов, что позволяет обеспечить консистентность и масштабируемость. Основные компоненты цветовой системы включают:

- **UI-модули** - цвета для элементов интерфейса VSCode (панели, вкладки, редактор, терминал и т.д.)
- **Токены синтаксиса** - цвета для подсветки кода в редакторе
- **Семантические цвета** - цвета, определяющие назначение элементов
- **Основные цвета** - базовая палитра, используемая для генерации других цветов

## Структура цветовой системы

Цветовая система Tokyo Night Modern организована по следующей иерархии:

```
Цветовая система
├── Основные цвета (Foundation)
│   ├── Базовые цвета (gray, blue, purple, etc.)
│   └── Уровни прозрачности (opacity)
├── Семантические цвета
│   ├── Цвета интерфейса (background, text, border)
│   ├── Цвета статуса (success, warning, error)
│   └── Интерактивные цвета (primary, secondary, hover)
├── UI-модули
│   ├── Элементы интерфейса (activity bar, status bar, tabs)
│   └── Виджеты и панели (editor, terminal, sidebar)
└── Токены синтаксиса
    ├── Базовые токены (keywords, strings, comments)
    └── Языковые токены (JavaScript, Python, TypeScript)
```

## UI-модули

### Activity Bar

Activity Bar - это вертикальная панель слева от редактора, содержащая иконки навигации по различным представлениям (Explorer, Search, Git и т.д.).

**Цвета:**
- `activityBar.background` - фон панели активности, использует `color.background.primary`
- `activityBar.foreground` - цвет активных иконок, использует `accent.primary`
- `activityBar.inactiveForeground` - цвет неактивных иконок, использует `color.text.secondary`
- `activityBar.activeBorder` - цвет активной границы, использует `accent.primary`
- `activityBar.dropBorder` - цвет границы при перетаскивании, использует `accent.primary`

### Badges

Badges - это маленькие элементы интерфейса, используемые для отображения счетчиков и другого количественного контента.

**Цвета:**
- `badge.background` - фон значка, использует `color.interactive.secondary`
- `badge.foreground` - текст на значке, использует `color.interactive.secondary-text`
- `activityBarBadge.background` - фон значка активности, использует `color.interactive.secondary`
- `activityBarBadge.foreground` - текст значка активности, использует `color.interactive.secondary-text`
- `extensionBadge.remoteBackground` - фон значка удаленного расширения, использует `color.interactive.secondary`
- `extensionBadge.remoteForeground` - текст значка удаленного расширения, использует `color.interactive.secondary-text`

### Command Center

Command Center - это область, отображающая команды и действия, доступные в текущем контексте.

**Цвета:**
- `commandCenter.background` - фон командного центра, использует `foundationColors.gray800`
- `commandCenter.activeBackground` - фон активного элемента в командном центре, использует `foundationColors.gray900`
- `commandCenter.border` - граница командного центра, использует `foundationColors.gray700`

### Diffs

Diffs - это элементы, используемые для отображения различий между файлами в редакторе сравнения.

**Цвета:**
- `diffEditor.insertedTextBackground` - фон вставленного текста, использует `foundationColors.green500` с 20% прозрачностью
- `diffEditor.removedTextBackground` - фон удаленного текста, использует `foundationColors.red500` с 22% прозрачностью

### Drop Backgrounds

Drop Backgrounds - это цвета фона, используемые при перетаскивании элементов в различные области редактора.

**Цвета:**
- `editorGroup.dropBackground` - фон при перетаскивании в группу редакторов, использует `foundationColors.blue500` с 33% прозрачностью
- `list.dropBackground` - фон при перетаскивании в список, использует `foundationColors.blue500` с 33% прозрачностью
- `panelSection.dropBackground` - фон при перетаскивании в секцию панели, использует `foundationColors.blue500` с 33% прозрачностью
- `terminal.dropBackground` - фон при перетаскивании в терминал, использует `foundationColors.blue500` с 33% прозрачностью

### Editor Groups & Panels

Editor Groups & Panels - это группы редакторов и панели, такие как Output, Debug Console и другие.

**Цвета:**
- `editorGroup.border` - граница между группами редакторов, использует `foundationColors.gray600` с 20% прозрачностью
- `editorGroup.dropBackground` - фон при перетаскивании редактора, использует `foundationColors.blue500` с 20% прозрачностью
- `editorGroup.dropIntoPromptBorder` - граница при перетаскивании в группу, использует `foundationColors.gray600`
- `editorGroupHeader.border` - граница заголовка группы редакторов, использует `foundationColors.gray800`
- `editorGroupHeader.noTabsBackground` - фон заголовка группы без вкладок, использует `foundationColors.gray800`
- `editorGroupHeader.tabsBackground` - фон заголовка группы с вкладками, использует `foundationColors.gray800`
- `editorGroupHeader.tabsBorder` - граница заголовка группы с вкладками, использует `foundationColors.gray800`
- `editorPane.background` - фон панели редактора, использует `foundationColors.gray800`
- `panel.background` - фон панели, использует `foundationColors.gray800`
- `panel.border` - граница панели, использует `foundationColors.gray600` с 40% прозрачностью
- `panel.dropBorder` - граница при перетаскивании на панель, использует `foundationColors.gray600` с 40% прозрачностью
- `panelInput.border` - граница ввода на панели, использует `foundationColors.gray600` с 40% прозрачностью
- `panelSection.border` - граница секции панели, использует `foundationColors.gray600`
- `panelSection.dropBackground` - фон при перетаскивании в секцию панели, использует `foundationColors.blue500` с 20% прозрачностью
- `panelTitle.activeBorder` - активная граница заголовка панели, использует `foundationColors.gray600` с 40% прозрачностью
- `panelTitle.activeForeground` - активный заголовок панели, использует `foundationColors.gray400`
- `panelTitle.inactiveForeground` - неактивный заголовок панели, использует `foundationColors.gray400` с 67% прозрачности

### Editor

Editor - это основная область редактирования кода.

**Цвета:**
- `editor.background` - фон редактора, использует `color.background.primary`
- `editor.findMatchBackground` - фон текущего результата поиска, использует `accent.primary` с 66% прозрачностью
- `editor.findMatchHighlightBackground` - фон других результатов поиска, использует `accent.primary` с 66% прозрачностью
- `editor.findRangeHighlightBackground` - фон области, ограничивающей поиск, использует `accent.primary` с 33% прозрачностью
- `editor.focusedStackFrameHighlightBackground` - фон выделенного стека фокуса, использует `accent.primary` с 20% прозрачностью
- `editor.foldBackground` - фон свернутого диапазона, использует `color.background.secondary` с 4A прозрачности
- `editor.foreground` - цвет текста редактора, использует `color.text.primary`
- `editor.inactiveSelectionBackground` - фон неактивного выделения, использует `accent.primary` с 45% прозрачности
- `editor.lineHighlightBackground` - фон текущей строки, использует `color.background.secondary`
- `editor.lineHighlightBorder` - граница текущей строки, использует `color.legacy.transparent`
- `editor.rangeHighlightBackground` - фон выбранного диапазона, использует `accent.primary` с 20% прозрачности
- `editor.selectionBackground` - фон выделенного текста, использует `accent.primary` с 60% прозрачности
- `editor.selectionHighlightBackground` - фон других вхождений выделенного слова, использует `accent.primary` с 44% прозрачности
- `editor.stackFrameHighlightBackground` - фон выделенного стека, использует `accent.primary` с 20% прозрачности
- `editor.wordHighlightBackground` - фон совпадающих слов, использует `accent.primary` с 44% прозрачности
- `editor.wordHighlightStrongBackground` - фон совпадающих слов с сильным выделением, использует `accent.primary` с 55% прозрачности
- `editorBracketHighlight.foreground1` - цвет скобки первого уровня, использует `accent.primary`
- `editorBracketHighlight.foreground2` - цвет скобки второго уровня, использует `accent.primary`
- `editorBracketHighlight.foreground3` - цвет скобки третьего уровня, использует `accent.secondary`
- `editorBracketHighlight.foreground4` - цвет скобки четвертого уровня, использует `accent.info`
- `editorBracketHighlight.foreground5` - цвет скобки пятого уровня, использует `accent.success`
- `editorBracketHighlight.foreground6` - цвет скобки шестого уровня, использует `accent.warning`
- `editorBracketHighlight.unexpectedBracket.foreground` - цвет неожиданной скобки, использует `accent.error`
- `editorBracketMatch.background` - фон парной скобки, использует `color.background.secondary`
- `editorBracketMatch.border` - граница парной скобки, использует `color.border.default`
- `editorBracketPairGuide.activeBackground1` - активное руководство по скобкам 1, использует `accent.primary`
- `editorBracketPairGuide.activeBackground2` - активное руководство по скобкам 2, использует `accent.primary`
- `editorBracketPairGuide.activeBackground3` - активное руководство по скобкам 3, использует `accent.secondary`
- `editorBracketPairGuide.activeBackground4` - активное руководство по скобкам 4, использует `accent.info`
- `editorBracketPairGuide.activeBackground5` - активное руководство по скобкам 5, использует `accent.success`
- `editorBracketPairGuide.activeBackground6` - активное руководство по скобкам 6, использует `accent.warning`
- `editorCodeLens.foreground` - цвет CodeLens, использует `color.text.tertiary`
- `editorCursor.background` - фон курсора редактора, использует `color.background.secondary`
- `editorCursor.foreground` - цвет курсора редактора, использует `accent.warning`
- `editorError.foreground` - цвет ошибок, использует `accent.error`
- `editorHint.foreground` - цвет подсказок, использует `accent.info`
- `editorHoverWidget.background` - фон виджета наведения, использует `color.background.secondary`
- `editorHoverWidget.border` - граница виджета наведения, использует `color.border.default`
- `editorIndentGuide.activeBackground1` - активный отступ 1, использует `color.border.default`
- `editorIndentGuide.activeBackground2` - активный отступ 2, использует `color.border.default`
- `editorIndentGuide.activeBackground3` - активный отступ 3, использует `color.border.default`
- `editorIndentGuide.activeBackground4` - активный отступ 4, использует `color.border.default`
- `editorIndentGuide.activeBackground5` - активный отступ 5, использует `color.border.default`
- `editorIndentGuide.activeBackground6` - активный отступ 6, использует `color.border.default`
- `editorIndentGuide.background1` - отступ 1, использует `color.border.default`
- `editorIndentGuide.background2` - отступ 2, использует `color.border.default`
- `editorIndentGuide.background3` - отступ 3, использует `color.border.default`
- `editorIndentGuide.background4` - отступ 4, использует `color.border.default`
- `editorIndentGuide.background5` - отступ 5, использует `color.border.default`
- `editorIndentGuide.background6` - отступ 6, использует `color.border.default`
- `editorInfo.foreground` - цвет информации, использует `accent.info`
- `editorLightBulb.foreground` - цвет лампочки кода, использует `accent.warning`
- `editorLightBulbAutoFix.foreground` - цвет лампочки автозамены, использует `accent.warning`
- `editorLineNumber.activeForeground` - цвет активной строки с номером, использует `color.text.secondary`
- `editorLineNumber.foreground` - цвет номеров строк, использует `color.text.disabled`
- `editorLink.activeForeground` - цвет активных ссылок, использует `color.text.primary`
- `editorMarkerNavigation.background` - фон навигации маркеров, использует `color.background.secondary`
- `editorOverviewRuler.border` - граница линейки обзора, использует `color.legacy.transparent`
- `editorOverviewRuler.bracketMatchForeground` - цвет скобок в линейке обзора, использует `color.background.secondary`
- `editorRuler.foreground` - цвет вертикальных линеек, использует `color.border.default`
- `editorStickyScroll.background` - фон прилипающего скролла, использует `color.background.secondary`
- `editorStickyScroll.shadow` - тень прилипающего скролла, использует `color.legacy.transparent`
- `editorStickyScrollHover.background` - фон при наведении на прилипающий скролл, использует `color.background.tertiary`
- `editorSuggestWidget.background` - фон виджета подсказок, использует `color.background.secondary`
- `editorSuggestWidget.border` - граница виджета подсказок, использует `color.border.default`
- `editorSuggestWidget.foreground` - цвет виджета подсказок, использует `color.text.primary`
- `editorSuggestWidget.highlightForeground` - цвет выделения в виджете подсказок, использует `color.text.secondary`
- `editorSuggestWidget.selectedBackground` - фон выбранного элемента в виджете подсказок, использует `color.background.tertiary`
- `editorWarning.foreground` - цвет предупреждений, использует `accent.warning`
- `editorWhitespace.foreground` - цвет пробелов, использует `color.text.tertiary`
- `editorWidget.background` - фон виджета редактора, использует `color.background.secondary`
- `editorWidget.resizeBorder` - граница изменения размера виджета, использует `accent.primary` с 33% прозрачности

### Find & Search

Find & Search - это элементы интерфейса для поиска и замены текста в редакторе.

**Цвета:**
- `editor.findMatchBackground` - фон текущего результата поиска, использует `foundationColors.blue500` с 66% прозрачности
- `editor.findMatchHighlightBackground` - фон других результатов поиска, использует `foundationColors.blue500` с 66% прозрачности
- `editorOverviewRuler.findMatchForeground` - цвет результатов поиска в линейке обзора, использует `foundationColors.blue500` с 44% прозрачности
- `listFilterWidget.background` - фон виджета фильтрации списков, использует `foundationColors.gray900`
- `listFilterWidget.noMatchesOutline` - контур при отсутствии совпадений, использует `foundationColors.red500`
- `listFilterWidget.outline` - контур виджета фильтрации, использует `foundationColors.gray600`
- `terminal.findMatchBorder` - граница результатов поиска в терминале, использует `foundationColors.gray600`
- `terminal.findMatchHighlightBorder` - граница выделенных результатов поиска в терминале, использует `foundationColors.gray600`

### General UI

General UI - это общие элементы пользовательского интерфейса, которые используются во всем редакторе.

**Цвета:**
- `breadcrumb.activeSelectionForeground` - цвет активного элемента навигации, использует `accent.primary`
- `breadcrumb.focusForeground` - цвет элемента навигации в фокусе, использует `accent.primary`
- `breadcrumb.foreground` - цвет элемента навигации, использует `color.text.secondary`
- `breadcrumbPicker.background` - фон выбора навигации, использует `color.background.secondary`
- `descriptionForeground` - цвет описаний, использует `color.text.disabled`
- `errorForeground` - цвет ошибок, использует `color.text.disabled`
- `focusBorder` - цвет границы фокуса, использует `color.border.focus`
- `foreground` - цвет переднего плана по умолчанию, использует `color.text.primary`
- `icon.foreground` - цвет иконок, использует `accent.primary`
- `sash.hoverBorder` - граница при наведении на разделитель, использует `color.interactive.hover`
- `selection.background` - цвет фона выделения, использует `color.special.selection` с 60% прозрачности
- `widget.border` - граница виджетов, использует `color.border.subtle` с 40% прозрачности
- `widget.shadow` - тень виджетов, использует `color.special.shadow` с 80% прозрачности

### Git Decoration

Git Decoration - это цвета для индикации состояния файлов в системе контроля версий Git.

**Цвета:**
- `gitDecoration.modifiedResourceForeground` - цвет измененных ресурсов, использует `color.interactive.secondary`
- `gitDecoration.ignoredResourceForeground` - цвет игнорируемых ресурсов, использует `color.text.secondary`
- `gitDecoration.deletedResourceForeground` - цвет удаленных ресурсов, использует `accent.error`
- `gitDecoration.renamedResourceForeground` - цвет переименованных ресурсов, использует `accent.primary`
- `gitDecoration.addedResourceForeground` - цвет добавленных ресурсов, использует `accent.primary`
- `gitDecoration.untrackedResourceForeground` - цвет неподслеживаемых ресурсов, использует `accent.info`
- `gitDecoration.conflictingResourceForeground` - цвет конфликтующих ресурсов, использует `accent.warning`
- `gitDecoration.stageDeletedResourceForeground` - цвет удаленных ресурсов в stage, использует `accent.error`
- `gitDecoration.stageModifiedResourceForeground` - цвет измененных ресурсов в stage, использует `color.interactive.secondary`

### Highlights

Highlights - это цвета для различных видов подсветки в редакторе.

**Цвета:**
- `debugView.valueChangedHighlight` - подсветка измененных значений в отладке, использует `foundationColors.blue500` с AA прозрачности
- `editor.findMatchHighlightBackground` - фон других результатов поиска, использует `foundationColors.blue500` с 66% прозрачности
- `editor.findRangeHighlightBackground` - фон области поиска, использует `foundationColors.blue500` с 33% прозрачности
- `editor.focusedStackFrameHighlightBackground` - фон выделенного стека фокуса, использует `foundationColors.blue500` с 20% прозрачности
- `editor.rangeHighlightBackground` - фон выбранного диапазона, использует `foundationColors.blue500` с 20% прозрачности
- `editor.selectionHighlightBackground` - фон других вхождений выделенного слова, использует `foundationColors.blue500` с 44% прозрачности
- `editor.stackFrameHighlightBackground` - фон выделенного стека, использует `foundationColors.blue500` с 20% прозрачности
- `editor.wordHighlightBackground` - фон совпадающих слов, использует `foundationColors.blue500` с 44% прозрачности
- `editor.wordHighlightStrongBackground` - фон совпадающих слов с сильным выделением, использует `foundationColors.blue500` с 55% прозрачности
- `editorOverviewRuler.rangeHighlightForeground` - цвет выделенного диапазона в линейке обзора, использует `foundationColors.blue500` с 44% прозрачности
- `editorOverviewRuler.selectionHighlightForeground` - цвет выделения в линейке обзора, использует `foundationColors.blue500` с 30% прозрачности
- `editorOverviewRuler.wordHighlightForeground` - цвет выделения слов в линейке обзора, использует `foundationColors.blue500` с 55% прозрачности
- `editorOverviewRuler.wordHighlightStrongForeground` - цвет сильного выделения слов в линейке обзора, использует `foundationColors.blue500` с 66% прозрачности
- `peekViewEditor.matchHighlightBackground` - фон совпадений в редакторе просмотра, использует `foundationColors.blue500` с 40% прозрачности
- `peekViewResult.matchHighlightBackground` - фон совпадений в результатах просмотра, использует `foundationColors.blue500` с 66% прозрачности

### Inline Chat

Inline Chat - это цвета для встроенного чата в редакторе.

**Цвета:**
- `inlineChat.background` - фон встроенного чата, использует `foundationColors.gray900`
- `inlineChat.border` - граница встроенного чата, использует `foundationColors.gray600`
- `inlineChat.shadow` - тень встроенного чата, использует `foundationColors.black` с 80% прозрачности
- `inlineChatDiff.inserted` - фон вставленного текста в чате, использует `foundationColors.gray800`
- `inlineChatDiff.removed` - фон удаленного текста в чате, использует `foundationColors.gray700`
- `inlineChatInput.border` - граница ввода в чате, использует `foundationColors.gray600`
- `inlineChatInput.focusBorder` - граница ввода в чате в фокусе, использует `foundationColors.blue500`
- `inlineChatInput.placeholderForeground` - цвет плейсхолдера в чате, использует `foundationColors.gray500`

### Inputs & Buttons

Inputs & Buttons - это цвета для элементов ввода и кнопок.

**Цвета:**
- `button.background` - фон кнопки, использует `foundationColors.blue800`
- `button.foreground` - цвет текста кнопки, использует `typographyColors.text.onAccent`
- `button.hoverBackground` - фон кнопки при наведении, использует `foundationColors.blue700`
- `button.secondaryBackground` - фон вторичной кнопки, использует `foundationColors.gray800` с 54% прозрачности
- `button.secondaryForeground` - цвет текста вторичной кнопки, использует `typographyColors.text.onAccent`
- `button.secondaryHoverBackground` - фон вторичной кнопки при наведении, использует `foundationColors.gray800`
- `extensionButton.prominentBackground` - фон выделенной кнопки расширения, использует `foundationColors.blue700`
- `extensionButton.prominentForeground` - цвет текста выделенной кнопки расширения, использует `typographyColors.text.onAccent`
- `extensionButton.prominentHoverBackground` - фон выделенной кнопки расширения при наведении, использует `foundationColors.blue800`
- `input.background` - фон поля ввода, использует `foundationColors.gray800`
- `input.border` - граница поля ввода, использует `foundationColors.gray600`
- `input.foreground` - цвет текста поля ввода, использует `typographyColors.text.primary`
- `input.placeholderForeground` - цвет плейсхолдера поля ввода, использует `foundationColors.gray500` с 54% прозрачности
- `inputOption.activeBackground` - фон активной опции ввода, использует `foundationColors.blue500` с 60% прозрачности
- `inputOption.activeBorder` - граница активной опции ввода, использует `foundationColors.gray600`
- `inputOption.activeForeground` - цвет активной опции ввода, использует `typographyColors.text.primary`
- `inputValidation.errorBackground` - фон ошибки валидации ввода, использует `foundationColors.red500`
- `inputValidation.errorBorder` - граница ошибки валидации ввода, использует `foundationColors.red500`
- `inputValidation.errorForeground` - цвет ошибки валидации ввода, использует `foundationColors.red500`
- `inputValidation.infoBackground` - фон информации валидации ввода, использует `foundationColors.cyan500`
- `inputValidation.infoBorder` - граница информации валидации ввода, использует `foundationColors.cyan500`
- `inputValidation.infoForeground` - цвет информации валидации ввода, использует `typographyColors.text.primary`
- `inputValidation.warningBackground` - фон предупреждения валидации ввода, использует `foundationColors.yellow500`
- `inputValidation.warningBorder` - граница предупреждения валидации ввода, использует `foundationColors.yellow500`
- `inputValidation.warningForeground` - цвет предупреждения валидации ввода, использует `typographyColors.text.primary`

### Lists

Lists - это цвета для списков и деревьев.

**Цвета:**
- `list.activeSelectionBackground` - фон активного выделения в списке, использует `foundationColors.gray700` с 56% прозрачности
- `list.activeSelectionForeground` - цвет активного выделения в списке, использует `foundationColors.blue500`
- `list.deemphasizedForeground` - цвет невыделенного элемента в списке, использует `typographyColors.text.secondary`
- `list.dropBackground` - фон при перетаскивании в список, использует `foundationColors.blue500` с 20% прозрачности
- `list.errorForeground` - цвет ошибки в списке, использует `foundationColors.red500`
- `list.focusBackground` - фон элемента в фокусе в списке, использует `foundationColors.gray700`
- `list.focusForeground` - цвет элемента в фокусе в списке, использует `typographyColors.text.primary`
- `list.highlightForeground` - цвет выделения в списке, использует `foundationColors.blue500`
- `list.hoverBackground` - фон при наведении на элемент списка, использует `foundationColors.gray700` с 38% прозрачности
- `list.hoverForeground` - цвет при наведении на элемент списка, использует `foundationColors.blue500`
- `list.inactiveSelectionBackground` - фон неактивного выделения в списке, использует `foundationColors.gray700`
- `list.inactiveSelectionForeground` - цвет неактивного выделения в списке, использует `foundationColors.blue500`
- `list.inactiveSelectionIconForeground` - цвет иконки неактивного выделения в списке, использует `foundationColors.blue500`
- `list.invalidItemForeground` - цвет недействительного элемента в списке, использует `foundationColors.red500`
- `list.warningForeground` - цвет предупреждения в списке, использует `foundationColors.yellow500`

### Menus & Dropdowns

Menus & Dropdowns - это цвета для меню и выпадающих списков.

**Цвета:**
- `dropdown.background` - фон выпадающего списка, использует `foundationColors.gray800`
- `dropdown.border` - граница выпадающего списка, использует `foundationColors.gray600` с 40% прозрачности
- `dropdown.foreground` - цвет выпадающего списка, использует `foundationColors.gray400`
- `dropdown.listBackground` - фон списка в выпадающем списке, использует `foundationColors.gray800`
- `menu.background` - фон меню, использует `foundationColors.gray800`
- `menu.border` - граница меню, использует `foundationColors.gray600` с 40% прозрачности
- `menu.foreground` - цвет меню, использует `foundationColors.gray400`
- `menu.selectionBackground` - фон выбранного элемента в меню, использует `foundationColors.gray700`
- `menu.selectionForeground` - цвет выбранного элемента в меню, использует `foundationColors.gray400`
- `menu.separatorBackground` - фон разделителя в меню, использует `foundationColors.gray600` с 40% прозрачности
- `menubar.selectionBackground` - фон выбранного элемента в строке меню, использует `foundationColors.gray700`
- `menubar.selectionForeground` - цвет выбранного элемента в строке меню, использует `foundationColors.gray400`

### Merges

Merges - это цвета для элементов слияния (merge) в редакторе.

**Цвета:**
- `merge.currentContentBackground` - фон текущего содержимого при слиянии, использует `accent.primary` с 44% прозрачности
- `merge.currentHeaderBackground` - фон заголовка текущего при слиянии, использует `accent.primary` с AA прозрачности
- `merge.incomingContentBackground` - фон входящего содержимого при слиянии, использует `accent.secondary` с 44% прозрачности
- `merge.incomingHeaderBackground` - фон заголовка входящего при слиянии, использует `accent.secondary` с AA прозрачности

### Notifications & Widgets

Notifications & Widgets - это цвета для уведомлений и виджетов.

**Цвета:**
- `debugExceptionWidget.background` - фон виджета исключений отладки, использует `color.background.primary`
- `debugExceptionWidget.border` - граница виджета исключений отладки, использует `color.status.error`
- `notificationCenterHeader.background` - фон заголовка центра уведомлений, использует `color.background.primary`
- `notificationCenterHeader.foreground` - цвет заголовка центра уведомлений, использует `color.text.primary`
- `notificationLink.foreground` - цвет ссылки уведомления, использует `color.text.secondary`
- `notifications.background` - фон уведомлений, использует `color.background.primary`
- `notifications.foreground` - цвет уведомлений, использует `color.text.primary`
- `notificationsErrorIcon.foreground` - цвет иконки ошибки уведомления, использует `color.status.error`
- `notificationsInfoIcon.foreground` - цвет иконки информации уведомления, использует `color.status.info`
- `notificationsWarningIcon.foreground` - цвет иконки предупреждения уведомления, использует `color.status.warning`

### Peek View

Peek View - это цвета для режима просмотра (peek view).

**Цвета:**
- `peekView.border` - граница просмотра, использует `foundationColors.gray600` с 40% прозрачности
- `peekViewEditor.background` - фон редактора просмотра, использует `foundationColors.gray800`
- `peekViewEditor.matchHighlightBackground` - фон совпадений в редакторе просмотра, использует `foundationColors.blue500` с 40% прозрачности
- `peekViewResult.background` - фон результатов просмотра, использует `foundationColors.gray800`
- `peekViewResult.fileForeground` - цвет файла в результатах просмотра, использует `typographyColors.text.primary`
- `peekViewResult.lineForeground` - цвет строки в результатах просмотра, использует `foundationColors.blue500`
- `peekViewResult.matchHighlightBackground` - фон совпадений в результатах просмотра, использует `foundationColors.blue500` с 66% прозрачности
- `peekViewResult.selectionBackground` - фон выбранного элемента в результатах просмотра, использует `foundationColors.blue500` с 40% прозрачности
- `peekViewResult.selectionForeground` - цвет выбранного элемента в результатах просмотра, использует `typographyColors.text.primary`
- `peekViewTitle.background` - фон заголовка просмотра, использует `foundationColors.gray800`
- `peekViewTitleDescription.foreground` - цвет описания заголовка просмотра, использует `typographyColors.text.primary`
- `peekViewTitleLabel.foreground` - цвет метки заголовка просмотра, использует `foundationColors.blue500`

### SCM Graph

SCM Graph - это цвета для графа системы контроля версий.

**Цвета:**
- `scmGraph.historyItemHoverLabelForeground` - цвет метки истории при наведении, использует `foundationColors.white`
- `scmGraph.foreground1` - цвет 1 графа SCM, использует `foundationColors.blue500`
- `scmGraph.foreground2` - цвет 2 графа SCM, использует `foundationColors.purple500`
- `scmGraph.foreground3` - цвет 3 графа SCM, использует `foundationColors.green500`
- `scmGraph.foreground4` - цвет 4 графа SCM, использует `foundationColors.yellow500`
- `scmGraph.foreground5` - цвет 5 графа SCM, использует `foundationColors.cyan500`
- `scmGraph.historyItemHoverAdditionsForeground` - цвет добавлений в истории при наведении, использует `foundationColors.green500`
- `scmGraph.historyItemHoverDeletionsForeground` - цвет удалений в истории при наведении, использует `foundationColors.red500`
- `scmGraph.historyItemRefColor` - цвет ссылки истории SCM, использует `foundationColors.blue500`
- `scmGraph.historyItemRemoteRefColor` - цвет удаленной ссылки истории SCM, использует `foundationColors.purple500`
- `scmGraph.historyItemBaseRefColor` - цвет базовой ссылки истории SCM, использует `foundationColors.red500`
- `scmGraph.historyItemHoverDefaultLabelBackground` - фон метки истории по умолчанию при наведении, использует `foundationColors.blue500`
- `scmGraph.historyItemHoverDefaultLabelForeground` - цвет метки истории по умолчанию при наведении, использует `foundationColors.white`

### Scrollbar & Minimap

Scrollbar & Minimap - это цвета для полосы прокрутки и миникарты.

**Цвета:**
- `editorOverviewRuler.addedForeground` - цвет добавленных элементов в линейке обзора, использует `foundationColors.green500`
- `editorOverviewRuler.border` - граница линейки обзора, использует `foundationColors.transparent`
- `editorOverviewRuler.bracketMatchForeground` - цвет скобок в линейке обзора, использует `foundationColors.gray800`
- `editorOverviewRuler.deletedForeground` - цвет удаленных элементов в линейке обзора, использует `foundationColors.red500`
- `editorOverviewRuler.errorForeground` - цвет ошибок в линейке обзора, использует `foundationColors.red500`
- `editorOverviewRuler.findMatchForeground` - цвет результатов поиска в линейке обзора, использует `foundationColors.blue500` с 44% прозрачности
- `editorOverviewRuler.infoForeground` - цвет информации в линейке обзора, использует `foundationColors.cyan500`
- `editorOverviewRuler.modifiedForeground` - цвет измененных элементов в линейке обзора, использует `foundationColors.blue500`
- `editorOverviewRuler.rangeHighlightForeground` - цвет выделенных диапазонов в линейке обзора, использует `foundationColors.blue500` с 44% прозрачности
- `editorOverviewRuler.selectionHighlightForeground` - цвет выделений в линейке обзора, использует `foundationColors.blue500` с 30% прозрачности
- `editorOverviewRuler.wordHighlightForeground` - цвет выделений слов в линейке обзора, использует `foundationColors.blue500` с 55% прозрачности
- `editorOverviewRuler.wordHighlightStrongForeground` - цвет сильных выделений слов в линейке обзора, использует `foundationColors.blue500` с 66% прозрачности
- `minimap.findMatchHighlight` - выделение результатов поиска в миникарте, использует `foundationColors.purple500` с 80% прозрачности
- `minimap.selectionHighlight` - выделение в миникарте, использует `foundationColors.blue500` с 33% прозрачности
- `minimapGutter.addedBackground` - фон добавленных строк в миникарте, использует `foundationColors.green500`
- `minimapGutter.deletedBackground` - фон удаленных строк в миникарте, использует `foundationColors.red500`
- `minimapGutter.modifiedBackground` - фон измененных строк в миникарте, использует `foundationColors.blue500`
- `scrollbar.shadow` - тень полосы прокрутки, использует `foundationColors.black` с 80% прозрачности
- `scrollbarSlider.activeBackground` - фон активного ползунка полосы прокрутки, использует `foundationColors.gray600` с 34% прозрачности
- `scrollbarSlider.background` - фон ползунка полосы прокрутки, использует `foundationColors.gray700` с 34% прозрачности
- `scrollbarSlider.hoverBackground` - фон ползунка полосы прокрутки при наведении, использует `foundationColors.gray500` с 34% прозрачности

### Side Bar

Side Bar - это цвета для боковой панели.

**Цвета:**
- `sideBar.background` - фон боковой панели, использует `foundationColors.gray900`
- `sideBar.border` - граница боковой панели, использует `foundationColors.gray800`
- `sideBar.dropBackground` - фон при перетаскивании на боковую панель, использует `foundationColors.blue500` с 20% прозрачности
- `sideBar.foreground` - цвет боковой панели, использует `foundationColors.gray400`
- `sideBarSectionHeader.background` - фон заголовка секции боковой панели, использует `foundationColors.gray800`
- `sideBarSectionHeader.border` - граница заголовка секции боковой панели, использует `foundationColors.gray800`
- `sideBarSectionHeader.foreground` - цвет заголовка секции боковой панели, использует `foundationColors.gray500`
- `sideBarTitle.foreground` - цвет заголовка боковой панели, использует `foundationColors.blue500`

### Status Bar

Status Bar - это цвета для строки состояния.

**Цвета:**
- `statusBar.background` - фон строки состояния, использует `color.background.primary`
- `statusBar.debuggingBackground` - фон строки состояния в режиме отладки, использует `accent.warning`
- `statusBar.debuggingForeground` - цвет строки состояния в режиме отладки, использует `color.background.secondary`
- `statusBar.foreground` - цвет строки состояния, использует `color.text.secondary`
- `statusBar.noFolderBackground` - фон строки состояния без папки, использует `color.background.secondary`
- `statusBarItem.activeBackground` - фон активного элемента строки состояния, использует `color.interactive.active`
- `statusBarItem.compactHoverBackground` - фон элемента строки состояния при компактном наведении, использует `color.background.elevated` с 90% прозрачности
- `statusBarItem.hoverBackground` - фон элемента строки состояния при наведении, использует `color.background.elevated` с AA прозрачности
- `statusBarItem.hoverForeground` - цвет элемента строки состояния при наведении, использует `accent.primary`
- `statusBarItem.prominentBackground` - фон выделенного элемента строки состояния, использует `color.background.secondary`
- `statusBarItem.prominentHoverBackground` - фон выделенного элемента строки состояния при наведении, использует `color.interactive.hover`
- `statusBarItem.remoteBackground` - фон элемента удаленного подключения строки состояния, использует `color.background.secondary`
- `statusBarItem.remoteForeground` - цвет элемента удаленного подключения строки состояния, использует `accent.primary`
- `statusBarItem.remoteHoverBackground` - фон элемента удаленного подключения строки состояния при наведении, использует `color.background.secondary`
- `statusBarItem.remoteHoverForeground` - цвет элемента удаленного подключения строки состояния при наведении, использует `accent.primary`

### Tabs

Tabs - это цвета для вкладок редактора.

**Цвета:**
- `tab.activeBackground` - фон активной вкладки, использует `foundationColors.gray800`
- `tab.activeBorder` - граница активной вкладки, использует `foundationColors.blue500`
- `tab.activeForeground` - цвет активной вкладки, использует `foundationColors.blue500`
- `tab.border` - граница вкладок, использует `foundationColors.gray800`
- `tab.inactiveBackground` - фон неактивной вкладки, использует `foundationColors.gray800`
- `tab.inactiveForeground` - цвет неактивной вкладки, использует `foundationColors.gray400`
- `tab.inactiveModifiedBorder` - граница измененной неактивной вкладки, использует `foundationColors.gray800`
- `tab.lastPinnedBorder` - граница последней закрепленной вкладки, использует `foundationColors.gray800`
- `tab.unfocusedActiveBorder` - граница активной вкладки без фокуса, использует `foundationColors.gray800`
- `tab.unfocusedActiveForeground` - цвет активной вкладки без фокуса, использует `foundationColors.gray100`
- `tab.unfocusedHoverForeground` - цвет вкладки при наведении без фокуса, использует `foundationColors.gray500`
- `tab.unfocusedInactiveForeground` - цвет неактивной вкладки без фокуса, использует `foundationColors.gray400`

### Terminal

Terminal - это цвета для встроенного терминала.

**Цвета:**
- `terminal.ansiBlack` - черный цвет ANSI терминала, использует `color.text.tertiary`
- `terminal.ansiBlue` - синий цвет ANSI терминала, использует `accent.primary`
- `terminal.ansiBrightBlack` - ярко-черный цвет ANSI терминала, использует `color.text.tertiary`
- `terminal.ansiBrightBlue` - ярко-синий цвет ANSI терминала, использует `accent.primary`
- `terminal.ansiBrightCyan` - ярко-голубой цвет ANSI терминала, использует `accent.info`
- `terminal.ansiBrightGreen` - ярко-зеленый цвет ANSI терминала, использует `accent.success`
- `terminal.ansiBrightMagenta` - ярко-пурпурный цвет ANSI терминала, использует `accent.secondary`
- `terminal.ansiBrightRed` - ярко-красный цвет ANSI терминала, использует `color.text.disabled`
- `terminal.ansiBrightWhite` - ярко-белый цвет ANSI терминала, использует `color.text.inverse`
- `terminal.ansiBrightYellow` - ярко-желтый цвет ANSI терминала, использует `accent.warning`
- `terminal.ansiCyan` - голубой цвет ANSI терминала, использует `accent.info`
- `terminal.ansiGreen` - зеленый цвет ANSI терминала, использует `accent.success`
- `terminal.ansiMagenta` - пурпурный цвет ANSI терминала, использует `accent.secondary`
- `terminal.ansiRed` - красный цвет ANSI терминала, использует `accent.error`
- `terminal.ansiWhite` - белый цвет ANSI терминала, использует `color.text.inverse`
- `terminal.ansiYellow` - желтый цвет ANSI терминала, использует `accent.warning`
- `terminal.background` - фон терминала, использует `color.background.primary`
- `terminal.border` - граница терминала, использует `color.border.subtle` с 40% прозрачности
- `terminal.dropBackground` - фон при перетаскивании в терминал, использует `accent.primary` с 33% прозрачности
- `terminal.foreground` - цвет текста терминала, использует `color.text.secondary`
- `terminal.selectionBackground` - фон выделения в терминале, использует `accent.primary` с 30% прозрачности
- `terminal.tab.activeBorder` - активная граница вкладки терминала, использует `accent.primary`
- `terminalCommandDecoration.defaultBackground` - фон декорации команды терминала по умолчанию, использует `accent.warning`
- `terminalCommandDecoration.errorBackground` - фон декорации ошибки команды терминала, использует `accent.error`
- `terminalCommandDecoration.successBackground` - фон декорации успеха команды терминала, использует `accent.info`
- `terminalCursor.background` - фон курсора терминала, использует `color.background.secondary`
- `terminalCursor.foreground` - цвет курсора терминала, использует `accent.warning`
- `terminalOverviewRuler.cursorForeground` - цвет курсора в линейке обзора терминала, использует `accent.warning`

### Text

Text - это цвета для текстовых элементов.

**Цвета:**
- `textBlockQuote.background` - фон цитаты, использует `foundationColors.gray800`
- `textBlockQuote.border` - граница цитаты, использует `foundationColors.blue500`
- `textCodeBlock.background` - фон блока кода, использует `foundationColors.gray800`
- `textLink.activeForeground` - цвет активной ссылки, использует `foundationColors.blue500`
- `textLink.foreground` - цвет ссылки, использует `foundationColors.blue500`
- `textPreformat.background` - фон предварительно отформатированного текста, использует `foundationColors.gray800`
- `textPreformat.foreground` - цвет предварительно отформатированного текста, использует `foundationColors.blue500`
- `textSeparator.foreground` - цвет разделителя текста, использует `foundationColors.gray400`

### Title Bar

Title Bar - это цвета для заголовка окна.

**Цвета:**
- `titleBar.activeBackground` - фон активного заголовка окна, использует `foundationColors.gray800`
- `titleBar.activeForeground` - цвет активного заголовка окна, использует `foundationColors.gray400`
- `titleBar.inactiveBackground` - фон неактивного заголовка окна, использует `foundationColors.gray800`
- `titleBar.inactiveForeground` - цвет неактивного заголовка окна, использует `foundationColors.gray400`

### Toolbar & Debug

Toolbar & Debug - это цвета для панели инструментов и отладки.

**Цвета:**
- `debugConsole.errorForeground` - цвет ошибок в консоли отладки, использует `foundationColors.red500`
- `debugConsole.infoForeground` - цвет информации в консоли отладки, использует `foundationColors.gray100`
- `debugConsole.sourceForeground` - цвет исходного кода в консоли отладки, использует `foundationColors.gray100`
- `debugConsole.warningForeground` - цвет предупреждений в консоли отладки, использует `foundationColors.yellow500`
- `debugConsoleInputIcon.foreground` - цвет иконки ввода в консоли отладки, использует `foundationColors.cyan500`
- `debugTokenExpression.boolean` - цвет булевых значений в выражениях отладки, использует `foundationColors.yellow500`
- `debugTokenExpression.error` - цвет ошибок в выражениях отладки, использует `foundationColors.red500`
- `debugTokenExpression.name` - цвет имен в выражениях отладки, использует `foundationColors.cyan500`
- `debugTokenExpression.number` - цвет чисел в выражениях отладки, использует `foundationColors.yellow500`
- `debugTokenExpression.string` - цвет строк в выражениях отладки, использует `foundationColors.green500`
- `debugTokenExpression.value` - цвет значений в выражениях отладки, использует `foundationColors.gray100`
- `debugToolBar.background` - фон панели инструментов отладки, использует `foundationColors.gray800`
- `debugView.stateLabelBackground` - фон метки состояния в отладке, использует `foundationColors.gray800`
- `debugView.stateLabelForeground` - цвет метки состояния в отладке, использует `foundationColors.gray10`

## Токены синтаксиса

Токены синтаксиса определяют цвета для подсветки кода в редакторе. Tokyo Night Modern включает токены для различных языков программирования и общие базовые токены.

### Базовые токены синтаксиса

Базовые токены определяют общие категории элементов кода:

**Ключевые слова и операторы:**
- `keyword` - ключевые слова языка, использует `foundationColors.blue500`
- `operator` - операторы, использует `semanticColors.secondary`
- `punctuation` - пунктуация, использует `foundationColors.gray400`
- `delimiter` - разделители, использует `foundationColors.gray500`

**Литералы:**
- `string` - строковые литералы, использует `semanticColors.text`
- `number` - числовые литералы, использует `semanticColors.warning`
- `boolean` - булевые значения, использует `foundationColors.purple500`
- `null` - нулевые значения, использует `foundationColors.red400`

**Комментарии:**
- `comment` - комментарии, использует `semanticColors.textSecondary`
- `docComment` - документационные комментарии, использует `semanticColors.textSecondary`
- `docTag` - теги документации, использует `semanticColors.secondary`

**Переменные и идентификаторы:**
- `variable` - переменные, использует `semanticColors.text`
- `parameter` - параметры, использует `semanticColors.textSecondary`
- `property` - свойства, использует `foundationColors.cyan500`
- `constant` - константы, использует `semanticColors.warning`

**Функции и методы:**
- `function` - функции, использует `foundationColors.blue400`
- `method` - методы, использует `foundationColors.blue400`
- `constructor` - конструкторы, использует `foundationColors.yellow500`

**Типы:**
- `type` - типы данных, использует `foundationColors.teal500`
- `interface` - интерфейсы, использует `foundationColors.teal400`
- `enum` - перечисления, использует `foundationColors.orange500`
- `class` - классы, использует `foundationColors.yellow400`

**Управляющие конструкции:**
- `control` - управляющие конструкции, использует `foundationColors.purple400`
- `conditional` - условные операторы, использует `foundationColors.purple400`
- `loop` - циклы, использует `foundationColors.purple400`

**Специальные токены:**
- `regex` - регулярные выражения, использует `semanticColors.info`
- `escape` - escape-последовательности, использует `foundationColors.orange400`
- `interpolation` - интерполяция, использует `foundationColors.orange300`

**Разметка (для HTML-подобных языков):**
- `tag` - теги, использует `semanticColors.primary`
- `attribute` - атрибуты, использует `semanticColors.secondary`
- `attributeValue` - значения атрибутов, использует `semanticColors.text`

**CSS-специфичные:**
- `selector` - селекторы, использует `foundationColors.blue300`
- `propertyName` - имена свойств, использует `foundationColors.cyan400`
- `unit` - единицы измерения, использует `foundationColors.orange500`

**Мета-токены:**
- `namespace` - пространства имен, использует `foundationColors.teal300`
- `decorator` - декораторы, использует `foundationColors.magenta500`
- `annotation` - аннотации, использует `foundationColors.magenta400`

### JavaScript токены синтаксиса

JavaScript токены включают в себя все базовые токены, а также специфичные для JavaScript элементы:

**Ключевые слова:**
- `const` - использует `foundationColors.blue600`
- `let` - использует `foundationColors.blue600`
- `var` - использует `foundationColors.blue500`
- `function` - использует `foundationColors.yellow400`
- `class` - использует `foundationColors.yellow500`
- `extends` - использует `foundationColors.purple400`
- `import` - использует `foundationColors.cyan500`
- `export` - использует `foundationColors.cyan500`
- `from` - использует `foundationColors.cyan400`
- `async` - использует `foundationColors.purple500`
- `await` - использует `foundationColors.purple500`
- `try` - использует `foundationColors.red400`
- `catch` - использует `foundationColors.red400`
- `finally` - использует `foundationColors.red400`
- `throw` - использует `foundationColors.red500`
- `return` - использует `foundationColors.purple400`
- `yield` - использует `foundationColors.purple400`
- `new` - использует `foundationColors.yellow400`
- `this` - использует `foundationColors.red30`
- `super` - использует `foundationColors.red300`

**Объекты и массивы:**
- `object.key` - ключи объекта, использует `foundationColors.cyan400`
- `object.value` - значения объекта, использует `baseSyntaxColors.string`
- `object.bracket` - скобки объекта, использует `foundationColors.gray400`
- `array.bracket` - скобки массива, использует `foundationColors.gray400`

**Шаблонные строки:**
- `template.string` - шаблонные строки, использует `foundationColors.green400`
- `template.interpolation` - интерполяция в шаблонах, использует `foundationColors.orange300`
- `template.bracket` - скобки в шаблонах, использует `foundationColors.orange400`

**JSX:**
- `jsx.tag` - JSX-теги, использует `foundationColors.blue300`
- `jsx.attribute` - JSX-атрибуты, использует `foundationColors.cyan300`
- `jsx.attributeValue` - значения JSX-атрибутов, использует `foundationColors.green300`
- `jsx.expression` - выражения в JSX, использует `foundationColors.orange400`

**Декораторы:**
- `decorator` - декораторы, использует `foundationColors.magenta500`
- `decoratorParameter` - параметры декораторов, использует `foundationColors.cyan700`

**Специальные конструкции JavaScript:**
- `module` - модули, использует `foundationColors.teal400`
- `global` - глобальные переменные, использует `foundationColors.red20`
- `builtin` - встроенные функции, использует `foundationColors.blue400`

### TypeScript токены синтаксиса

TypeScript токены наследуют все JavaScript токены и добавляют специфичные для TypeScript элементы:

**Типы:**
- `interface` - интерфейсы, использует `foundationColors.teal400`
- `type` - типы, использует `foundationColors.teal500`
- `enum` - перечисления, использует `foundationColors.orange500`
- `namespace` - пространства имен, использует `foundationColors.teal300`
- `typeParameter` - параметры типа, использует `foundationColors.yellow600`

**Модификаторы:**
- `public`, `private`, `protected`, `readonly`, `abstract` - используют `baseSyntaxColors.keyword`

**Утилиты типов:**
- `keyof` - использует `foundationColors.purple500`
- `typeof` - использует `foundationColors.purple500`
- `infer` - использует `foundationColors.purple500`
- `extends` - использует `baseSyntaxColors.keyword`
- `implements` - использует `baseSyntaxColors.keyword`

**Декораторы:**
- `decorator` - декораторы, использует `foundationColors.magenta500`
- `decoratorParameter` - параметры декораторов, использует `foundationColors.cyan700`

### Python токены синтаксиса

Python токены включают в себя все базовые токены, а также специфичные для Python элементы:

**Ключевые слова:**
- `def` - использует `foundationColors.blue600`
- `class` - использует `foundationColors.yellow500`
- `lambda` - использует `foundationColors.purple500`
- `if`, `elif`, `else` - используют `foundationColors.purple400`
- `for`, `while` - используют `foundationColors.purple400`
- `try`, `except`, `finally` - используют `foundationColors.red400`
- `with`, `as` - используют `foundationColors.purple400`
- `import` - использует `foundationColors.cyan500`
- `from` - использует `foundationColors.cyan400`
- `return` - использует `foundationColors.purple400`
- `yield` - использует `foundationColors.purple400`
- `raise` - использует `foundationColors.red500`
- `pass` - использует `foundationColors.gray500`
- `break`, `continue` - используют `foundationColors.red400`
- `global`, `nonlocal` - используют `foundationColors.red300`
- `assert` - использует `foundationColors.orange500`
- `del` - использует `foundationColors.red400`
- `async`, `await` - используют `foundationColors.purple500`
- `in`, `is`, `not`, `and`, `or` - используют `foundationColors.purple400`
- `None` - использует `foundationColors.red400`
- `True`, `False` - используют `foundationColors.green400`

**Специальные конструкции Python:**
- `decorator` - декораторы, использует `foundationColors.magenta500`
- `decoratorParameter` - параметры декораторов, использует `foundationColors.cyan700`
- `self`, `cls` - используют `foundationColors.red300`

**Встроенные функции и типы:**
- `builtin.function` - встроенные функции, использует `foundationColors.blue400`
- `builtin.type` - встроенные типы, использует `foundationColors.teal500`
- `builtin.exception` - встроенные исключения, использует `foundationColors.red400`
- `builtin.constant` - встроенные константы, использует `foundationColors.orange500`

**Строки:**
- `stringPrefix` - префиксы строк, использует `foundationColors.orange400`
- `fString` - f-строки, использует `foundationColors.green400`
- `rawString` - сырые строки, использует `foundationColors.green500`
- `bytesString` - байтовые строки, использует `foundationColors.yellow400`

**Специальные токены Python:**
- `parameter` - параметры, использует `semanticColors.textSecondary`
- `typeHint` - подсказки типов, использует `foundationColors.teal400`
- `typeAnnotation` - аннотации типов, использует `foundationColors.teal300`
- `docstring` - строка документации, использует `foundationColors.docCommentColor`

**Специальные методы:**
- `dunder`, `magic` - специальные методы, использует `foundationColors.magenta400`

**Операторы:**
- `comparisonOperator` - операторы сравнения, использует `foundationColors.purple400`
- `arithmeticOperator` - арифметические операторы, использует `foundationColors.blue400`
- `logicalOperator` - логические операторы, использует `foundationColors.purple500`
- `assignmentOperator` - операторы присваивания, использует `foundationColors.purple400`

**Структуры данных:**
- `list.bracket` - скобки списка, использует `foundationColors.gray400`
- `dict.key` - ключи словаря, использует `foundationColors.cyan400`
- `dict.value` - значения словаря, использует `baseSyntaxColors.string`
- `dict.bracket` - скобки словаря, использует `foundationColors.gray400`
- `tuple.bracket` - скобки кортежа, использует `foundationColors.gray400`

**Комментарии:**
- `comment` - комментарии, использует `foundationColors.commentColor`
- `docComment` - документационные комментарии, использует `foundationColors.docCommentColor`
- `docTag` - теги документации, использует `foundationColors.docTagColor`

## Заключение

Tokyo Night Modern представляет собой хорошо продуманную цветовую систему, которая обеспечивает высокую степень согласованности и доступности. Система дизайн-токенов позволяет легко поддерживать и расширять тему, при этом сохраняя визуальную целостность.

### Анализ консистентности

Цветовая система темы демонстрирует высокую степень консистентности:

1. **Единая палитра** - все цвета происходят из базовой палитры foundationColors, что обеспечивает визуальную согласованность.
2. **Семантическое именование** - токены именуются в соответствии с их назначением, а не значением, что упрощает поддержку.
3. **Иерархическая структура** - цвета организованы в логическую иерархию, что упрощает поиск и понимание.
4. **Прозрачность и уровни** - для создания визуальных эффектов используются уровни прозрачности, что обеспечивает согласованность визуальных эффектов.

### Рекомендации по улучшению

1. **Расширение языковых токенов** - можно добавить токены для большего количества языков программирования, чтобы обеспечить полную поддержку синтаксиса.
2. **Унификация использования токенов** - в некоторых модулях все еще используются прямые ссылки на foundationColors, вместо семантических токенов. Переход на единые семантические токены улучшит поддерживаемость.
3. **Документирование токенов** - можно создать автоматически генерируемую документацию для всех токенов с примерами использования.
4. **Улучшение контраста для доступности** - хотя тема уже соответствует стандартам WCAG, можно провести дополнительный анализ контраста для улучшения доступности.
5. **Расширение светлой темы** - можно расширить светлую тему, чтобы она включала больше токенов, аналогично темной теме.

Tokyo Night Modern - это пример хорошо спроектированной цветовой системы, которая балансирует между эстетикой и функциональностью, обеспечивая при этом высокую степень доступности и поддерживаемости.
