# Справочник цветов темы VSCode

## Введение

Справочник цветов темы Visual Studio Code охватывает все цветовые свойства, которые можно настроить в пользовательских темах редактора. Эти свойства определяют внешний вид различных элементов интерфейса, таких как редактор, панели, списки и другие компоненты. В этом конспекте представлены все основные категории цветов с их описаниями и идентификаторами.

## Категории цветов

### 1. Цвета редактора (Editor Colors)

Цвета редактора определяют внешний вид основной области редактирования кода, включая фоны, текст, подсветку синтаксиса и визуальные эффекты.

**Основные цвета:**

- `editor.background` - Цвет фона редактора
- `editor.foreground` - Цвет переднего плана редактора (текст по умолчанию)
- `editorLineNumber.foreground` - Цвет номеров строк
- `editorLineNumber.activeForeground` - Цвет активной строки с номером
- `editorCursor.foreground` - Цвет курсора редактора
- `editorCursor.background` - Цвет фона курсора редактора

**Цвета выделения:**

- `editor.selectionBackground` - Цвет выделенного текста
- `editor.selectionForeground` - Цвет текста в выделении (если отличается)
- `editor.inactiveSelectionBackground` - Цвет выделения в неактивном редакторе
- `editor.selectionHighlightBackground` - Цвет фона других вхождений выделенного слова
- `editor.wordHighlightBackground` - Цвет фона символов, совпадающих с выбором курсора
- `editor.wordHighlightStrongBackground` - Цвет фона символов, совпадающих с выбором курсора с жирным шрифтом

**Цвета поиска:**

- `editor.findMatchBackground` - Цвет фона текущего результата поиска
- `editor.findMatchHighlightBackground` - Цвет фона других результатов поиска
- `editor.findRangeHighlightBackground` - Цвет фона области, ограничивающей поиск
- `editor.hoverHighlightBackground` - Цвет фона символа при наведении мыши

**Цвета скобок:**

- `editorBracketMatch.background` - Цвет фона парной скобки
- `editorBracketMatch.border` - Цвет границы парной скобки
- `editorBracketHighlight.foreground1` - Цвет скобки первого уровня
- `editorBracketHighlight.foreground2` - Цвет скобки второго уровня
- `editorBracketHighlight.foreground3` - Цвет скобки третьего уровня
- `editorBracketHighlight.foreground4` - Цвет скобки четвертого уровня
- `editorBracketHighlight.foreground5` - Цвет скобки пятого уровня
- `editorBracketHighlight.foreground6` - Цвет скобки шестого уровня
- `editorBracketHighlight.unexpectedBracket.foreground` - Цвет неожиданной скобки

**Цвета линеек и отступов:**

- `editorRuler.foreground` - Цвет вертикальных линеек
- `editorIndentGuide.background1` - Цвет направляющих отступа
- `editorIndentGuide.activeBackground1` - Цвет активных направляющих отступа
- `editorLineNumbers.foreground` - Цвет номеров строк
- `editorActiveLineNumber.foreground` - Цвет активного номера строки

**Цвета подсветки скобок:**

- `editorBracketPairGuide.activeBackground1` - Цвет активного руководства по скобкам
- `editorBracketPairGuide.inactiveBackground1` - Цвет неактивного руководства по скобкам

**Цвета фона и подсветки:**

- `editor.lineHighlightBackground` - Цвет фона текущей строки
- `editor.lineHighlightBorder` - Цвет границы текущей строки
- `editor.rangeHighlightBackground` - Цвет фона выбранного диапазона
- `editor.symbolHighlightBackground` - Цвет фона символа при навигации

**Цвета ошибок и предупреждений:**

- `editorError.foreground` - Цвет переднего плана диагностики ошибок
- `editorError.background` - Цвет фона диагностики ошибок
- `editorWarning.foreground` - Цвет переднего плана диагностики предупреждений
- `editorWarning.background` - Цвет фона диагностики предупреждений
- `editorInfo.foreground` - Цвет переднего плана диагностики информации
- `editorInfo.background` - Цвет фона диагностики информации
- `editorHint.foreground` - Цвет переднего плана диагностики подсказок
- `editorHint.border` - Цвет границы диагностики подсказок

**Цвета виджетов:**

- `editorWidget.background` - Цвет фона виджетов редактора
- `editorWidget.foreground` - Цвет переднего плана виджетов редактора
- `editorWidget.border` - Цвет границы виджетов редактора
- `editorWidget.resizeBorder` - Цвет границы изменения размера виджетов

**Цвета подсказок:**

- `editorSuggestWidget.background` - Цвет фона виджета подсказок
- `editorSuggestWidget.border` - Цвет границы виджета подсказок
- `editorSuggestWidget.foreground` - Цвет переднего плана виджета подсказок
- `editorSuggestWidget.highlightForeground` - Цвет выделения виджете подсказок
- `editorSuggestWidget.selectedBackground` - Цвет фона выбранного элемента в виджете подсказок

**Цвета наведения:**

- `editorHoverWidget.background` - Цвет фона виджета наведения
- `editorHoverWidget.border` - Цвет границы виджета наведения

**Цвета фолдинга:**

- `editor.foldBackground` - Цвет фона свернутого диапазона

**Цвета кода:**

- `editorCodeLens.foreground` - Цвет переднего плана CodeLens
- `editorLightBulb.foreground` - Цвет переднего плана лампочки кода
- `editorLightBulbAutoFix.foreground` - Цвет переднего плана лампочки автоматического исправления

**Цвета линейки символов:**

- `editorOverviewRuler.border` - Цвет границы линейки символов
- `editorOverviewRuler.errorForeground` - Цвет ошибок в линейке символов
- `editorOverviewRuler.warningForeground` - Цвет предупреждений в линейке символов
- `editorOverviewRuler.infoForeground` - Цвет информации в линейке символов

### 2. Цвета интерфейса (UI Colors)

Цвета интерфейса определяют внешний вид различных элементов пользовательского интерфейса за пределами редактора, таких как боковая панель, панель статуса, вкладки и другие компоненты.

**Цвета общей области:**

- `foreground` - Цвет переднего плана по умолчанию
- `errorForeground` - Цвет переднего плана для ошибок
- `descriptionForeground` - Цвет переднего плана для описаний
- `icon.foreground` - Цвет переднего плана для значков

**Цвета окна:**

- `window.activeBorder` - Цвет границы активного окна
- `window.inactiveBorder` - Цвет границы неактивного окна

**Цвета фокуса:**

- `focusBorder` - Цвет границы фокуса
- `selection.background` - Цвет фона элемента, находящегося в фокусе

**Цвета текста:**

- `textBlockQuote.background` - Цвет фона цитат
- `textBlockQuote.border` - Цвет границы цитат
- `textCodeBlock.background` - Цвет фона блоков кода
- `textLink.activeForeground` - Цвет активных ссылок
- `textLink.foreground` - Цвет неактивных ссылок
- `textPreformat.foreground` - Цвет предварительно отформатированного текста
- `textPreformat.background` - Цвет фона предварительно отформатированного текста
- `textSeparator.foreground` - Цвет разделителей текста

**Цвета виджетов:**

- `widget.shadow` - Цвет тени виджетов
- `widget.border` - Цвет границы виджетов

**Цвета боковой панели:**

- `sideBar.background` - Цвет фона боковой панели
- `sideBar.foreground` - Цвет переднего плана боковой панели
- `sideBar.border` - Цвет границы боковой панели
- `sideBar.dropBackground` - Цвет фона при перетаскивании на боковую панель
- `sideBarTitle.foreground` - Цвет заголовка боковой панели
- `sideBarSectionHeader.background` - Цвет фона заголовка секции боковой панели
- `sideBarSectionHeader.foreground` - Цвет переднего плана заголовка секции боковой панели
- `sideBarSectionHeader.border` - Цвет границы заголовка секции боковой панели

**Цвета панели действий:**

- `activityBar.background` - Цвет фона панели действий
- `activityBar.foreground` - Цвет переднего плана панели действий (активные элементы)
- `activityBar.inactiveForeground` - Цвет переднего плана панели действий (неактивные элементы)
- `activityBar.border` - Цвет границы панели действий
- `activityBar.activeBorder` - Цвет активной границы панели действий
- `activityBar.activeBackground` - Цвет фона активного элемента панели действий
- `activityBar.dropBorder` - Цвет границы при перетаскивании на панель действий

**Цвета значков активности:**

- `activityBarBadge.background` - Цвет фона значка активности
- `activityBarBadge.foreground` - Цвет переднего плана значка активности

**Цвета заголовка:**

- `titleBar.activeBackground` - Цвет фона активной строки заголовка
- `titleBar.activeForeground` - Цвет переднего плана активной строки заголовка
- `titleBar.inactiveBackground` - Цвет фона неактивной строки заголовка
- `titleBar.inactiveForeground` - Цвет переднего плана неактивной строки заголовка
- `titleBar.border` - Цвет границы строки заголовка

**Цвета панели статуса:**

- `statusBar.background` - Цвет фона панели статуса
- `statusBar.foreground` - Цвет переднего плана панели статуса
- `statusBar.border` - Цвет границы панели статуса
- `statusBar.debuggingBackground` - Цвет фона панели статуса в режиме отладки
- `statusBar.debuggingForeground` - Цвет переднего плана панели статуса в режиме отладки
- `statusBar.debuggingBorder` - Цвет границы панели статуса в режиме отладки
- `statusBar.noFolderBackground` - Цвет фона панели статуса без папки
- `statusBar.noFolderForeground` - Цвет переднего плана панели статуса без папки
- `statusBar.noFolderBorder` - Цвет границы панели статуса без папки
- `statusBarItem.activeBackground` - Цвет фона активного элемента панели статуса
- `statusBarItem.hoverBackground` - Цвет фона при наведении на элемент панели статуса
- `statusBarItem.prominentBackground` - Цвет фона выделенного элемента панели статуса
- `statusBarItem.prominentHoverBackground` - Цвет фона при наведении на выделенный элемент панели статуса
- `statusBarItem.remoteBackground` - Цвет фона элемента удаленного соединения
- `statusBarItem.remoteForeground` - Цвет переднего плана элемента удаленного соединения
- `statusBarItem.errorBackground` - Цвет фона элемента с ошибкой
- `statusBarItem.errorForeground` - Цвет переднего плана элемента с ошибкой

**Цвета вкладок:**

- `tab.activeBackground` - Цвет фона активной вкладки
- `tab.activeForeground` - Цвет переднего плана активной вкладки
- `tab.inactiveBackground` - Цвет фона неактивной вкладки
- `tab.inactiveForeground` - Цвет переднего плана неактивной вкладки
- `tab.unfocusedActiveBackground` - Цвет фона активной вкладки без фокуса
- `tab.unfocusedActiveForeground` - Цвет переднего плана активной вкладки без фокуса
- `tab.unfocusedInactiveBackground` - Цвет фона неактивной вкладки без фокуса
- `tab.unfocusedInactiveForeground` - Цвет переднего плана неактивной вкладки без фокуса
- `tab.border` - Цвет границы вкладок
- `tab.activeBorder` - Цвет активной границы вкладки
- `tab.unfocusedActiveBorder` - Цвет активной границы вкладки без фокуса
- `tab.activeBorderTop` - Цвет верхней границы активной вкладки
- `tab.unfocusedActiveBorderTop` - Цвет верхней границы активной вкладки без фокуса
- `tab.hoverBackground` - Цвет фона при наведении на вкладку
- `tab.unfocusedHoverBackground` - Цвет фона при наведении на вкладку без фокуса
- `tab.hoverBorder` - Цвет границы при наведении на вкладку
- `tab.unfocusedHoverBorder` - Цвет границы при наведении на вкладку без фокуса
- `tab.lastPinnedBorder` - Цвет границы последней закрепленной вкладки

**Цвета групп редакторов:**

- `editorGroup.background` - Цвет фона группы редакторов
- `editorGroup.border` - Цвет границы между группами редакторов
- `editorGroup.dropBackground` - Цвет фона при перетаскивании редактора
- `editorGroupHeader.noTabsBackground` - Цвет фона заголовка группы без вкладок
- `editorGroupHeader.tabsBackground` - Цвет фона заголовка группы с вкладками
- `editorGroupHeader.tabsBorder` - Цвет границы заголовка группы с вкладками
- `editorGroupHeader.border` - Цвет границы заголовка группы редакторов

**Цвета панелей:**

- `panel.background` - Цвет фона панели
- `panel.border` - Цвет границы панели
- `panel.dropBorder` - Цвет границы при перетаскивании на панель
- `panelTitle.activeBorder` - Цвет активной границы заголовка панели
- `panelTitle.activeForeground` - Цвет активного заголовка панели
- `panelTitle.inactiveForeground` - Цвет неактивного заголовка панели
- `panelTitle.inactiveBorder` - Цвет неактивной границы заголовка панели
- `panelInput.border` - Цвет границы ввода на панели
- `panelSection.border` - Цвет границы секции панели

### 3. Цвета списков и деревьев (Lists and Trees)

Цвета списков и деревьев определяют внешний вид элементов в списках, деревьях и других структурах данных с иерархией.

- `list.focusBackground` - Цвет фона элемента в фокусе
- `list.focusForeground` - Цвет переднего плана элемента в фокусе
- `list.activeSelectionBackground` - Цвет фона активного выделения
- `list.activeSelectionForeground` - Цвет переднего плана активного выделения
- `list.inactiveSelectionBackground` - Цвет фона неактивного выделения
- `list.inactiveSelectionForeground` - Цвет переднего плана неактивного выделения
- `list.inactiveFocusBackground` - Цвет фона при неактивном фокусе
- `list.inactiveFocusOutline` - Цвет контура при неактивном фокусе
- `list.hoverBackground` - Цвет фона при наведении
- `list.hoverForeground` - Цвет переднего плана при наведении
- `list.dropBackground` - Цвет фона при перетаскивании
- `list.highlightForeground` - Цвет выделения соответствия при поиске
- `list.focusHighlightForeground` - Цвет выделения соответствия при поиске в фокусе
- `list.invalidItemForeground` - Цвет переднего плана недействительного элемента
- `list.errorForeground` - Цвет переднего плана элемента с ошибкой
- `list.warningForeground` - Цвет переднего плана элемента с предупреждением
- `list.filterMatchBackground` - Цвет фона фильтра соответствия
- `list.filterMatchBorder` - Цвет границы фильтра соответствия
- `list.deemphasizedForeground` - Цвет переднего плана невыделенного элемента
- `list.dropBetweenBackground` - Цвет линии между элементами списка при перетаскивании
- `tree.indentGuidesStroke` - Цвет направляющих отступа дерева
- `tree.tableColumnsBorder` - Цвет границы столбцов таблицы дерева
- `tree.tableOddRowsBackground` - Цвет фона нечетных строк таблицы дерева

### 4. Цвета кнопок и элементов ввода (Buttons and Input Controls)

Цвета кнопок и элементов ввода определяют внешний вид интерактивных элементов управления, таких как кнопки, поля ввода и переключатели.

**Цвета кнопок:**

- `button.background` - Цвет фона кнопки
- `button.foreground` - Цвет переднего плана кнопки
- `button.border` - Цвет границы кнопки
- `button.hoverBackground` - Цвет фона кнопки при наведении
- `button.secondaryBackground` - Цвет фона вторичной кнопки
- `button.secondaryForeground` - Цвет переднего плана вторичной кнопки
- `button.secondaryHoverBackground` - Цвет фона вторичной кнопки при наведении

**Цвета элементов ввода:**

- `input.background` - Цвет фона элемента ввода
- `input.foreground` - Цвет переднего плана элемента ввода
- `input.border` - Цвет границы элемента ввода
- `input.placeholderForeground` - Цвет заполнителя элемента ввода
- `inputOption.activeBackground` - Цвет фона активной опции ввода
- `inputOption.activeBorder` - Цвет границы активной опции ввода
- `inputOption.activeForeground` - Цвет переднего плана активной опции ввода
- `inputOption.hoverBackground` - Цвет фона опции ввода при наведении
- `inputValidation.infoBackground` - Цвет фона информационной валидации ввода
- `inputValidation.infoForeground` - Цвет переднего плана информационной валидации ввода
- `inputValidation.infoBorder` - Цвет границы информационной валидации ввода
- `inputValidation.warningBackground` - Цвет фона предупреждающей валидации ввода
- `inputValidation.warningForeground` - Цвет переднего плана предупреждающей валидации ввода
- `inputValidation.warningBorder` - Цвет границы предупреждающей валидации ввода
- `inputValidation.errorBackground` - Цвет фона ошибочной валидации ввода
- `inputValidation.errorForeground` - Цвет переднего плана ошибочной валидации ввода
- `inputValidation.errorBorder` - Цвет границы ошибочной валидации ввода

**Цвета выпадающих списков:**

- `dropdown.background` - Цвет фона выпадающего списка
- `dropdown.foreground` - Цвет переднего плана выпадающего списка
- `dropdown.border` - Цвет границы выпадающего списка
- `dropdown.listBackground` - Цвет фона списка выпадающего списка

**Цвета переключателей:**

- `checkbox.background` - Цвет фона переключателя
- `checkbox.foreground` - Цвет переднего плана переключателя
- `checkbox.border` - Цвет границы переключателя

### 5. Цвета меню (Menus)

Цвета меню определяют внешний вид выпадающих меню и контекстных меню.

- `menu.border` - Цвет границы меню
- `menu.foreground` - Цвет переднего плана меню
- `menu.background` - Цвет фона меню
- `menu.selectionForeground` - Цвет переднего плана выбранного элемента меню
- `menu.selectionBackground` - Цвет фона выбранного элемента меню
- `menu.selectionBorder` - Цвет границы выбранного элемента меню
- `menu.separatorBackground` - Цвет фона разделителя в меню
- `menubar.selectionForeground` - Цвет переднего плана выбранного элемента меню строки меню
- `menubar.selectionBackground` - Цвет фона выбранного элемента меню строки меню
- `menubar.selectionBorder` - Цвет границы выбранного элемента меню строки меню

### 6. Цвета уведомлений (Notifications)

Цвета уведомлений определяют внешний вид всплывающих уведомлений и виджетов отладки.

**Цвета уведомлений:**

- `notifications.background` - Цвет фона уведомления
- `notifications.foreground` - Цвет переднего плана уведомления
- `notifications.border` - Цвет границы уведомления (если отличается от тени)
- `notificationsErrorIcon.foreground` - Цвет значка ошибки в уведомлении
- `notificationsWarningIcon.foreground` - Цвет значка предупреждения в уведомлении
- `notificationsInfoIcon.foreground` - Цвет значка информации в уведомлении

**Цвета заголовка уведомлений:**

- `notificationCenter.border` - Цвет границы центра уведомлений
- `notificationCenterHeader.foreground` - Цвет переднего плана заголовка центра уведомлений
- `notificationCenterHeader.background` - Цвет фона заголовка центра уведомлений
- `notifications.border` - Цвет границы между уведомлениями

**Цвета виджета отладки:**

- `debugToolBar.background` - Цвет фона панели инструментов отладки
- `debugToolBar.border` - Цвет границы панели инструментов отладки
- `debugView.exceptionLabelForeground` - Цвет переднего плана метки исключения
- `debugView.exceptionLabelBackground` - Цвет фона метки исключения
- `debugView.stateLabelForeground` - Цвет переднего плана метки состояния
- `debugView.stateLabelBackground` - Цвет фона метки состояния
- `debugView.valueChangedHighlight` - Цвет выделения измененного значения
- `debugTokenExpression.name` - Цвет имен в выражениях отладки
- `debugTokenExpression.value` - Цвет значений в выражениях отладки
- `debugTokenExpression.string` - Цвет строк в выражениях отладки
- `debugTokenExpression.boolean` - Цвет булевых значений в выражениях отладки
- `debugTokenExpression.number` - Цвет чисел в выражениях отладки
- `debugTokenExpression.error` - Цвет ошибок в выражениях отладки

**Цвета виджета исключений:**

- `debugExceptionWidget.border` - Цвет границы виджета исключений
- `debugExceptionWidget.background` - Цвет фона виджета исключений

**Цвета консоли отладки:**

- `debugConsole.infoForeground` - Цвет переднего плана информационных сообщений в консоли отладки
- `debugConsole.warningForeground` - Цвет переднего плана предупреждающих сообщений в консоли отладки
- `debugConsole.errorForeground` - Цвет переднего плана ошибочных сообщений в консоли отладки
- `debugConsole.sourceForeground` - Цвет переднего плана исходного кода в консоли отладки
- `debugConsoleInputIcon.foreground` - Цвет переднего плана значка ввода в консоли отладки

### 7. Цвета терминала (Terminal)

Цвета терминала определяют внешний вид встроенного терминала VSCode.

**Основные цвета терминала:**

- `terminal.background` - Цвет фона терминала
- `terminal.foreground` - Цвет переднего плана терминала
- `terminal.border` - Цвет границы панели терминала
- `terminal.ansiBlack` - Цвет ANSI черного
- `terminal.ansiRed` - Цвет ANSI красного
- `terminal.ansiGreen` - Цвет ANSI зеленого
- `terminal.ansiYellow` - Цвет ANSI желтого
- `terminal.ansiBlue` - Цвет ANSI синего
- `terminal.ansiMagenta` - Цвет ANSI пурпурного
- `terminal.ansiCyan` - Цвет ANSI голубого
- `terminal.ansiWhite` - Цвет ANSI белого
- `terminal.ansiBrightBlack` - Цвет ANSI ярко-черного
- `terminal.ansiBrightRed` - Цвет ANSI ярко-красного
- `terminal.ansiBrightGreen` - Цвет ANSI ярко-зеленого
- `terminal.ansiBrightYellow` - Цвет ANSI ярко-желтого
- `terminal.ansiBrightBlue` - Цвет ANSI ярко-синего
- `terminal.ansiBrightMagenta` - Цвет ANSI ярко-пурпурного
- `terminal.ansiBrightCyan` - Цвет ANSI ярко-голубого
- `terminal.ansiBrightWhite` - Цвет ANSI ярко-белого

**Дополнительные цвета терминала:**

- `terminal.selectionBackground` - Цвет фона выделения в терминале
- `terminal.selectionForeground` - Цвет переднего плана выделения в терминале
- `terminal.inactiveSelectionBackground` - Цвет фона неактивного выделения в терминале
- `terminal.cursorBackground` - Цвет фона курсора в терминале
- `terminal.cursorForeground` - Цвет переднего плана курсора в терминале
- `terminal.overviewRulerCursorForeground` - Цвет курсора в линейке обзора терминала
- `terminalCommandDecoration.defaultBackground` - Цвет фона по умолчанию для декорации команд в терминале
- `terminalCommandDecoration.successBackground` - Цвет фона успеха для декорации команд в терминале
- `terminalCommandDecoration.errorBackground` - Цвет фона ошибки для декорации команд в терминале
- `terminal.dropBackground` - Цвет фона при перетаскивании на терминал
- `terminal.tab.activeBorder` - Цвет границы активной вкладки терминала

### 8. Цвета peek-окна (Peek View)

Цвета peek-окна определяют внешний вид встроенных окон просмотра, таких как "Go to Definition" и "Find All References".

- `peekView.border` - Цвет границы peek-окна
- `peekViewEditor.background` - Цвет фона редактора в peek-окне
- `peekViewEditorGutter.background` - Цвет фона боковой панели редактора в peek-окне
- `peekViewEditor.matchHighlightBackground` - Цвет фона выделения соответствия в редакторе peek-окна
- `peekViewEditor.matchHighlightBorder` - Цвет границы выделения соответствия в редакторе peek-окна
- `peekViewResult.background` - Цвет фона списка результатов peek-окна
- `peekViewResult.lineForeground` - Цвет переднего плана строк в списке результатов peek-окна
- `peekViewResult.fileForeground` - Цвет переднего плана файлов в списке результатов peek-окна
- `peekViewResult.matchHighlightBackground` - Цвет фона выделения соответствия в результатах peek-окна
- `peekViewResult.selectionBackground` - Цвет фона выбранной записи в результатах peek-окна
- `peekViewResult.selectionForeground` - Цвет переднего плана выбранной записи в результатах peek-окна
- `peekViewTitle.background` - Цвет фона заголовка peek-окна
- `peekViewTitleDescription.foreground` - Цвет переднего плана описания заголовка peek-окна
- `peekViewTitleLabel.foreground` - Цвет переднего плана метки заголовка peek-окна

### 9. Цвета элементов сравнения (Diff Editor)

Цвета элементов сравнения определяют внешний вид редактора сравнения, который показывает различия между файлами.

- `diffEditor.insertedTextBackground` - Цвет фона вставленного текста
- `diffEditor.insertedTextBorder` - Цвет границы вставленного текста
- `diffEditor.removedTextBackground` - Цвет фона удаленного текста
- `diffEditor.removedTextBorder` - Цвет границы удаленного текста
- `diffEditor.border` - Цвет границы между редакторами сравнения
- `diffEditor.diagonalFill` - Цвет диагональной заливки редактора сравнения
- `diffEditor.insertedLineBackground` - Цвет фона вставленной строки
- `diffEditor.removedLineBackground` - Цвет фона удаленной строки
- `diffEditorGutter.insertedLineBackground` - Цвет фона вставленной строки в боковой панели
- `diffEditorGutter.removedLineBackground` - Цвет фона удаленной строки в боковой панели
- `diffEditorOverview.insertedForeground` - Цвет вставленного текста в линейке обзора
- `diffEditorOverview.removedForeground` - Цвет удаленного текста в линейке обзора
- `diffEditor.unchangedRegionBackground` - Цвет фона неизмененной области
- `diffEditor.unchangedRegionForeground` - Цвет переднего плана неизмененной области
- `diffEditor.unchangedCodeBackground` - Цвет фона неизмененного кода

### 10. Цвета Git-декораций (Git Decorations)

Цвета Git-декораций определяют внешний вид индикаторов состояния файлов в системе контроля версий Git.

- `gitDecoration.addedResourceForeground` - Цвет переднего плана добавленного ресурса
- `gitDecoration.modifiedResourceForeground` - Цвет переднего плана измененного ресурса
- `gitDecoration.deletedResourceForeground` - Цвет переднего плана удаленного ресурса
- `gitDecoration.renamedResourceForeground` - Цвет переднего плана переименованного ресурса
- `gitDecoration.stageModifiedResourceForeground` - Цвет переднего плана ресурса с изменением в stage
- `gitDecoration.stageDeletedResourceForeground` - Цвет переднего плана ресурса с удалением в stage
- `gitDecoration.untrackedResourceForeground` - Цвет переднего плана неподслеживаемого ресурса
- `gitDecoration.ignoredResourceForeground` - Цвет переднего плана игнорируемого ресурса
- `gitDecoration.conflictingResourceForeground` - Цвет переднего плана конфликтующего ресурса
- `gitDecoration.submoduleResourceForeground` - Цвет переднего плана ресурса подмодуля

### 11. Цвета мини-карты (Minimap)

Цвета мини-карты определяют внешний вид уменьшенного представления редактора кода.

- `minimap.findMatchHighlight` - Цвет выделения соответствия поиска в мини-карте
- `minimap.selectionHighlight` - Цвет выделения в мини-карте
- `minimap.errorHighlight` - Цвет выделения ошибок в мини-карте
- `minimap.warningHighlight` - Цвет выделения предупреждений в мини-карте
- `minimap.background` - Цвет фона мини-карты
- `minimap.foregroundOpacity` - Непрозрачность переднего плана в мини-карте (в формате #rrggbbaa)
- `minimapSlider.background` - Цвет фона ползунка мини-карты
- `minimapSlider.hoverBackground` - Цвет фона ползунка мини-карты при наведении
- `minimapSlider.activeBackground` - Цвет фона активного ползунка мини-карты
- `minimapGutter.addedBackground` - Цвет фона добавленных строк в боковой панели мини-карты
- `minimapGutter.modifiedBackground` - Цвет фона измененных строк в боковой панели мини-карты
- `minimapGutter.deletedBackground` - Цвет фона удаленных строк в боковой панели мини-карты

### 12. Цвета полосы прокрутки (Scrollbar)

Цвета полосы прокрутки определяют внешний вид элементов управления прокруткой.

- `scrollbar.shadow` - Цвет тени полосы прокрутки
- `scrollbarSlider.background` - Цвет фона ползунка полосы прокрутки
- `scrollbarSlider.hoverBackground` - Цвет фона ползунка полосы прокрутки при наведении
- `scrollbarSlider.activeBackground` - Цвет фона активного ползунка полосы прокрутки

### 13. Цвета значков (Badges)

Цвета значков определяют внешний вид небольших информационных элементов, таких как счетчики.

- `badge.foreground` - Цвет переднего плана значка
- `badge.background` - Цвет фона значка

### 14. Цвета прогресса (Progress Bar)

Цвета прогресса определяют внешний вид индикаторов выполнения.

- `progressBar.background` - Цвет фона индикатора выполнения

### 15. Цвета стека вызовов (Call Stack)

Цвета стека вызовов определяют внешний вид элементов в отладчике, связанных со стеком вызовов.

- `debugView.stateLabelBackground` - Цвет фона метки состояния в представлении отладки
- `debugView.stateLabelForeground` - Цвет переднего плана метки состояния в представлении отладки
- `debugView.valueChangedHighlight` - Цвет выделения измененного значения в представлении отладки

### 16. Цвета синтаксиса (Syntax Highlighting)

Цвета синтаксиса определяют внешний вид различных элементов кода, таких как ключевые слова, переменные, строки и комментарии. Эти цвета обычно устанавливаются через `tokenColors` в файле темы.

**Основные категории синтаксиса:**

- `comments` - Комментарии
- `strings` - Строки
- `numbers` - Числа
- `keywords` - Ключевые слова
- `types` - Типы
- `functions` - Функции
- `variables` - Переменные
- `parameters` - Параметры
- `properties` - Свойства
- `classes` - Классы
- `interfaces` - Интерфейсы
- `methods` - Методы
- `decorators` - Декораторы
- `labels` - Метки

### 17. Цвета семантического выделения (Semantic Highlighting)

Цвета семантического выделения позволяют точно настраивать внешний вид элементов кода на основе их семантического значения, а не только синтаксиса.

**Типы семантического выделения:**

- `class` - Классы
- `enum` - Перечисления
- `interface` - Интерфейсы
- `namespace` - Пространства имен
- `typeParameter` - Параметры типа
- `type` - Типы
- `parameter` - Параметры
- `variable` - Переменные
- `property` - Свойства
- `enumMember` - Элементы перечисления
- `decorator` - Декораторы
- `event` - События
- `function` - Функции
- `method` - Методы
- `macro` - Макросы
- `label` - Метки
- `comment` - Комментарии
- `string` - Строки
- `keyword` - Ключевые слова
- `number` - Числа
- `regexp` - Регулярные выражения
- `operator` - Операторы

## Заключение

Справочник цветов темы VSCode предоставляет полный набор возможностей для настройки внешнего вида редактора. Понимание этих категорий и идентификаторов позволяет создавать согласованные и эстетически приятные темы, которые улучшают опыт разработки. В теме Tokyo Night Modern используется сложная система цветов, включающая основные цвета, семантические токены и синтаксическую раскраску, что позволяет достичь высокой степени настройки и согласованности во всем интерфейсе.
