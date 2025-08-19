/// <reference types="node" />
import { palette } from './palette'
import { withAlpha } from './utils/color'
import { tokenColors } from './tokenColors'
import { semanticTokenColors } from './semanticTokenColors'
import * as fs from 'node:fs'
import * as path from 'node:path'

/**
 * Минимальный генератор на TS. На первом этапе мы просто гарантируем, что можем записать существующий файл темы.
 * В следующих итерациях можно будет постепенно переносить цвета для использования палитры и вспомогательных функций.
 */

const root = path.resolve(__dirname, '..')
const themePath = path.join(root, 'themes', 'tokyo-night-dark-color-theme.json')

export const buildColors = (): Record<string, string> => {
  return {
    // Верхний уровень и основа
    foreground: palette.fg.primary,
    descriptionForeground: palette.fg.muted,
    disabledForeground: palette.fg.inactive,
    focusBorder: withAlpha(palette.ui.badge.base, '66'), // Используем цвет бейджа для фокуса
    errorForeground: palette.accent.red,
    'widget.border': palette.line.border, // Граница для виджетов поиска/замены
    'widget.shadow': palette.ui.shadow.widget,
    'scrollbar.shadow': palette.ui.shadow.scrollbar,

    // Значки, иконки, настройки - улучшенная видимость
    'badge.background': palette.ui.badge.base,
    'badge.foreground': palette.ui.badge.fg,
    'icon.foreground': palette.fg.soft,
    'settings.headerForeground': palette.fg.primary,

    // Окно и разделитель
    'window.activeBorder': palette.ui.window.border,
    'window.inactiveBorder': palette.ui.window.border,
    'sash.hoverBorder': palette.ui.sash.hover,

    // Кнопки/значки расширений - стандартизация с VS Code
    'extensionButton.prominentBackground': palette.brand.primary,
    'extensionButton.prominentHoverBackground': withAlpha(
      palette.brand.primary,
      'AA'
    ),
    'extensionButton.prominentForeground': palette.fg.selectionText,
    'extensionBadge.remoteBackground': palette.ui.badge.base,
    'extensionBadge.remoteForeground': palette.ui.badge.fg,

    // Кнопки / индикатор выполнения - улучшенный контраст
    'button.background': palette.brand.button.primary,
    'button.hoverBackground': palette.brand.button.hover,
    'button.foreground': palette.fg.selectionText,
    'button.border': withAlpha(palette.fg.subtle, '40'), // Увеличена видимость границы
    'button.separator': withAlpha(palette.fg.subtle, '50'), // Увеличена видимость разделителя
    'button.secondaryBackground': withAlpha(palette.bg.elevated, 'ff'), // Полностью непрозрачный фон для лучшего контраста
    'button.secondaryHoverBackground': withAlpha(palette.bg.hover, 'ff'), // Полностью непрозрачный hover
    'button.secondaryForeground': palette.fg.primary, // Основной цвет текста вместо белого для лучшей читаемости
    'progressBar.background': palette.brand.primary,

    // Поля ввода - улучшенная доступность
    'input.background': palette.bg.input,
    'input.foreground': palette.fg.primary,
    'input.border': palette.line.border,
    'input.placeholderForeground': palette.ui.input.placeholder,
    'inputOption.activeForeground': palette.fg.onSelection,
    'inputOption.activeBackground': palette.bg.selection.active,
    'inputOption.activeBorder': palette.line.border,
    'inputOption.hoverBackground': palette.bg.hover,
    'inputValidation.infoForeground': palette.fg.primary,
    'inputValidation.infoBackground': withAlpha(palette.accent.cyan, '20'),
    'inputValidation.infoBorder': palette.accent.cyan,
    'inputValidation.warningForeground': palette.fg.primary,
    'inputValidation.warningBackground': withAlpha(palette.accent.yellow, '20'),
    'inputValidation.warningBorder': palette.accent.yellow,
    'inputValidation.errorForeground': palette.fg.primary,
    'inputValidation.errorBackground': withAlpha(palette.accent.red, '20'),
    'inputValidation.errorBorder': palette.accent.red,

    // Выпадающие списки
    'dropdown.foreground': palette.fg.muted,
    'dropdown.background': palette.bg.input,
    'dropdown.listBackground': palette.bg.input,
    'dropdown.border': palette.line.border,

    // Переключатели (checkbox / radio)
    'checkbox.background': palette.bg.input,
    'checkbox.foreground': palette.fg.primary,
    'checkbox.border': palette.line.border,
    'checkbox.selectBackground': palette.bg.selection.active,
    'checkbox.selectBorder': palette.line.border,
    'radio.activeForeground': palette.fg.primary,
    'radio.activeBackground': palette.bg.input,
    'radio.activeBorder': palette.line.border,
    'radio.inactiveForeground': palette.fg.panelText,
    'radio.inactiveBackground': palette.bg.input,
    'radio.inactiveBorder': palette.line.border,
    'radio.inactiveHoverBackground': palette.brand.primary, // Активный hover для radio

    // Панель действий
    'activityBar.background': palette.bg.base,
    'activityBar.foreground': palette.fg.selectionText, // Увеличиваем контрастность активных иконок до белого
    'activityBar.activeBorder': palette.ui.badge.base, // Используем цвет бейджа для активной границы
    'activityBar.activeBackground': palette.bg.elevated,
    'activityBar.inactiveForeground': palette.fg.subtle, // Сохраняем приглушенный цвет для неактивных иконок
    'activityBar.border': palette.line.border,
    'activityBarBadge.background': palette.ui.badge.base, // Используем цвет бейджа
    'activityBarBadge.foreground': palette.ui.badge.fg, // Белый текст для максимальной контрастности
    // Добавляем цвета для предупреждений и ошибок в Activity Bar
    'activityWarningBadge.foreground': palette.bg.base,
    'activityWarningBadge.background': palette.accent.yellow,
    'activityErrorBadge.foreground': palette.bg.base,
    'activityErrorBadge.background': palette.accent.red,
    // Вариант Activity Bar сверху (Activity Bar: Top)
    'activityBarTop.background': palette.bg.base,
    'activityBarTop.foreground': palette.fg.selectionText, // Синхронизируем с основным цветом
    'activityBarTop.activeBackground': palette.bg.elevated,

    // Боковая панель - улучшенная иерархия
    'tree.indentGuidesStroke': palette.line.border,
    'sideBar.foreground': palette.fg.panelText, // Улучшенная читаемость для текста в боковой панели
    'sideBar.background': palette.bg.sunken,
    'sideBar.border': palette.line.border,
    'sideBarTitle.foreground': palette.fg.softTitle,
    'sideBarSectionHeader.background': palette.bg.elevated,
    'sideBarSectionHeader.foreground': palette.fg.primary,
    'sideBarSectionHeader.border': palette.line.border,
    'sideBar.dropBackground': palette.bg.drop,

    // Списки
    'list.dropBackground': palette.bg.drop,
    'list.deemphasizedForeground': palette.fg.panelText,
    'list.activeSelectionBackground': palette.bg.selection.active,
    'list.activeSelectionForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
    'list.activeSelectionIconForeground': palette.fg.selectionText, // Белые иконки для выбранных элементов
    'list.inactiveSelectionBackground': palette.bg.selection.inactive,
    'list.inactiveSelectionForeground': palette.fg.primary, // Более контрастный текст для неактивного выделения
    'list.focusBackground': palette.bg.selection.focus,
    'list.focusForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
    // Когда контейнер списка не в фокусе, но элемент в фокусе
    'list.inactiveFocusBackground': palette.bg.selection.inactive,
    'list.hoverBackground': palette.ui.list.hoverBg, // используем обновленный hover цвет для списков
    'list.hoverForeground': palette.fg.primary,
    'list.highlightForeground': palette.ui.badge.base, // Используем цвет бейджа для подсветки
    'list.invalidItemForeground': palette.accent.yellow,
    'list.errorForeground': palette.accent.red,
    'list.warningForeground': palette.accent.yellow,

    'listFilterWidget.background': palette.line.border,
    'listFilterWidget.outline': palette.brand.primary,
    'listFilterWidget.noMatchesOutline': palette.ui.noMatches,

    // Выборщик (Picker) - улучшенная читаемость
    'pickerGroup.foreground': palette.fg.primary,
    'pickerGroup.border': palette.line.border,

    // Ползунок полосы прокрутки - улучшенная видимость
    'scrollbarSlider.background': withAlpha(palette.ui.scrollbarBase, '40'),
    'scrollbarSlider.hoverBackground': withAlpha(
      palette.ui.scrollbarBase,
      '60'
    ),
    'scrollbarSlider.activeBackground': withAlpha(
      palette.ui.scrollbarBase,
      '80'
    ),

    // Подсветка/направляющие для скобок - ОПТИМИЗИРОВАННАЯ РАЗЛИЧИМОСТЬ
    'editorBracketHighlight.foreground1': palette.accent.blue, // синий
    'editorBracketHighlight.foreground2': palette.accent.orange, // оранжевый (вместо cyan)
    'editorBracketHighlight.foreground3': palette.token.string, // зеленый (вместо magenta)
    'editorBracketHighlight.foreground4': palette.accent.yellow, // желтый
    'editorBracketHighlight.foreground5': palette.accent.red, // красный
    'editorBracketHighlight.foreground6': palette.accent.magenta, // магента
    'editorBracketHighlight.unexpectedBracket.foreground': palette.accent.red,
    'editorBracketPairGuide.activeBackground1': withAlpha(
      palette.accent.blue,
      '40' // было 30 - увеличиваем alpha для лучшей видимости
    ),
    'editorBracketPairGuide.activeBackground2': withAlpha(
      palette.accent.orange, // синхронизация с новым цветом foreground2
      '40'
    ),
    'editorBracketPairGuide.activeBackground3': withAlpha(
      palette.token.string, // синхронизация с новым цветом foreground3
      '40'
    ),
    'editorBracketPairGuide.activeBackground4': withAlpha(
      palette.accent.yellow, // синхронизация с новым цветом foreground4
      '40'
    ),
    'editorBracketPairGuide.activeBackground5': withAlpha(
      palette.accent.red, // синхронизация с новым цветом foreground5
      '40'
    ),
    'editorBracketPairGuide.activeBackground6': withAlpha(
      palette.accent.magenta, // синхронизация с новым цветом foreground6
      '40'
    ),

    // Выделения и подсветки
    'selection.background': palette.bg.selection.active,
    'editor.background': palette.bg.base,
    'editor.foreground': palette.fg.primary,
    'editor.placeholder.foreground': palette.ui.input.placeholder,
    'editor.foldBackground': withAlpha(palette.bg.elevated, '4a'),
    'editorLink.activeForeground': palette.ui.badge.base, // Синхронизация с бейджами
    'editor.selectionBackground': withAlpha(palette.ui.selectionWash, '40'),
    'editor.selectionForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
    // Использовать тот же оттенок для выделения, но с меньшей прозрачностью для неактивного выделения
    'editor.inactiveSelectionBackground': withAlpha(
      palette.ui.selectionWash,
      '30'
    ),
    'editor.findMatchBackground': withAlpha(palette.ui.badge.base, '66'), // Синхронизация с бейджами
    'editor.findMatchBorder': palette.accent.yellow,
    'editor.findMatchHighlightBackground': withAlpha(
      palette.ui.badge.base, // Синхронизация с бейджами
      '66'
    ),
    'editor.findMatchHighlightBorder': withAlpha(palette.ui.badge.base, '99'), // Синхронизация с бейджами
    'editor.findRangeHighlightBackground': withAlpha(palette.fg.subtle, '33'),
    'editor.findRangeHighlightBorder': withAlpha(palette.fg.subtle, '55'),
    'editor.rangeHighlightBackground': withAlpha(palette.fg.subtle, '20'),

    'editor.wordHighlightBackground': withAlpha(
      palette.bg.selection.active,
      '60'
    ),
    'editor.wordHighlightBorder': withAlpha(palette.bg.selection.active, '88'),
    'editor.wordHighlightStrongBackground': withAlpha(
      palette.bg.selection.active,
      '80'
    ),
    'editor.wordHighlightStrongBorder': withAlpha(
      palette.bg.selection.active,
      'aa'
    ),
    'editor.selectionHighlightBackground': withAlpha(
      palette.bg.selection.active,
      '60'
    ),
    'editor.selectionHighlightBorder': withAlpha(
      palette.bg.selection.active,
      '99'
    ),
    'editor.hoverHighlightBackground': withAlpha(palette.ui.badge.base, '33'), // Синхронизация с бейджами

    // Курсор/отступы/строка/пробелы
    'editorCursor.foreground': palette.fg.primary,
    'editorIndentGuide.background1': withAlpha(palette.fg.subtle, '40'), // Увеличена непрозрачность для лучшей видимости
    'editorIndentGuide.activeBackground1': withAlpha(palette.fg.subtle, '70'), // Увеличена непрозрачность для лучшей видимости
    'editorLineNumber.foreground': palette.fg.subtle,
    'editorLineNumber.activeForeground': palette.fg.primary,
    'editor.lineHighlightBackground': palette.bg.lineHighlight,
    'editorWhitespace.foreground': withAlpha(palette.fg.subtle, '40'),

    // Sticky Scroll в редакторе
    'editorStickyScroll.background': palette.bg.elevated,
    'editorStickyScrollHover.background': palette.bg.hover,
    'editorStickyScroll.border': palette.line.border,

    // Виджеты/всплывающие подсказки редактора - улучшенная контрастность
    'editorMarkerNavigation.background': palette.bg.elevated,
    'editorHoverWidget.background': palette.bg.elevated,
    'editorHoverWidget.border': palette.line.border,
    'editorHoverWidget.foreground': palette.fg.primary,

    // Соответствие скобок - улучшенная видимость
    'editorBracketMatch.background': palette.bg.bracketMatch,
    'editorBracketMatch.border': palette.accent.blue,

    // Подсказки внутри кода (Inlay hints)
    'editorInlayHint.background': withAlpha(palette.bg.elevated, '80'),
    'editorInlayHint.foreground': palette.fg.muted,
    'editorInlayHint.typeBackground': withAlpha(palette.bg.elevated, '80'),
    'editorInlayHint.typeForeground': palette.fg.muted,
    'editorInlayHint.parameterBackground': withAlpha(palette.bg.elevated, '80'),
    'editorInlayHint.parameterForeground': palette.fg.muted,

    // Обзорная линейка
    'editorOverviewRuler.border': palette.line.border,
    'editorOverviewRuler.errorForeground': palette.ui.editorOverview.error,
    'editorOverviewRuler.warningForeground': palette.accent.yellow,
    'editorOverviewRuler.infoForeground': palette.ui.editorOverview.info,
    'editorOverviewRuler.bracketMatchForeground': palette.bg.overlay,
    'editorOverviewRuler.findMatchForeground': withAlpha(
      palette.fg.primary,
      '44'
    ),
    'editorOverviewRuler.rangeHighlightForeground': withAlpha(
      palette.fg.primary,
      '44'
    ),
    'editorOverviewRuler.selectionHighlightForeground': withAlpha(
      palette.fg.primary,
      '22'
    ),
    'editorOverviewRuler.wordHighlightForeground': withAlpha(
      palette.accent.magenta,
      '55'
    ),
    'editorOverviewRuler.wordHighlightStrongForeground': withAlpha(
      palette.accent.magenta,
      '66'
    ),
    'editorOverviewRuler.modifiedForeground':
      palette.ui.editorOverview.modified,
    'editorOverviewRuler.addedForeground': palette.ui.editorOverview.added,
    'editorOverviewRuler.deletedForeground': palette.ui.editorOverview.deleted,

    // Линейка/сообщения
    'editorRuler.foreground': palette.line.border,
    'editorError.foreground': palette.ui.editorOverview.error,
    'editorWarning.foreground': palette.accent.yellow,
    'editorInfo.foreground': palette.ui.debug.info,
    'editorHint.foreground': palette.ui.debug.info,

    // Область редактора (Gutter) и миникарта
    'editorGutter.modifiedBackground': palette.ui.gutter.modified,
    'editorGutter.addedBackground': palette.ui.gutter.added,
    'editorGutter.deletedBackground': palette.ui.gutter.deleted,
    'minimapGutter.modifiedBackground': palette.ui.minimapGutter.modified,
    'minimapGutter.addedBackground': palette.ui.minimapGutter.added,
    'minimapGutter.deletedBackground': palette.ui.minimapGutter.deleted,

    // Группы/заголовки редактора
    'editorGroup.border': palette.line.border,
    'editorGroup.dropBackground': palette.bg.lineHighlight,
    'editorGroupHeader.tabsBorder': palette.line.border,
    'editorGroupHeader.tabsBackground': palette.bg.tabs,
    'editorGroupHeader.noTabsBackground': palette.bg.tabs,
    'editorGroupHeader.border': palette.line.border,
    'editorPane.background': palette.bg.base,

    // Виджеты/подсказки редактора - улучшенная контрастность для поиска/замены
    'editorWidget.background': palette.bg.elevated, // Используем elevated фон для лучшего выделения
    'editorWidget.border': palette.line.border, // Добавляем границу
    'editorWidget.foreground': palette.fg.primary, // Явно задаем цвет текста
    'editorWidget.resizeBorder': withAlpha(palette.fg.subtle, '66'), // Увеличиваем непрозрачность границы изменения размера
    'editorSuggestWidget.background': palette.bg.elevated, // Осветлен для лучшей видимости подсказок
    'editorSuggestWidget.border': withAlpha(palette.ansi.black, '00'),
    'editorSuggestWidget.foreground': palette.fg.primary,
    'editorSuggestWidget.selectedBackground': palette.bg.selection.menu,
    'editorSuggestWidget.selectedForeground': palette.fg.onSelection,
    'editorSuggestWidget.highlightForeground': palette.ui.settingsHeader,
    'editorCodeLens.foreground': palette.ui.codeLens,
    'editorLightBulb.foreground': palette.accent.yellow,
    'editorLightBulbAutoFix.foreground': palette.accent.yellow,

    // Виджеты поиска - активные кнопки при наведении и улучшенная контрастность
    'searchEditor.findMatchBackground': withAlpha(palette.ui.badge.base, '66'),
    'searchEditor.findMatchBorder': palette.accent.yellow,
    'searchEditor.textInputBorder': palette.line.border,

    // Окно быстрого просмотра (Peek view)
    'peekView.border': palette.line.border,
    'peekViewEditor.background': palette.bg.base,
    'peekViewEditor.matchHighlightBackground': withAlpha(
      palette.brand.primary,
      '66'
    ),
    'peekViewTitle.background': palette.line.border,
    'peekViewTitleLabel.foreground': palette.fg.primary,
    'peekViewTitleDescription.foreground': palette.fg.muted,
    'peekViewResult.background': palette.bg.base,
    'peekViewResult.selectionForeground': palette.fg.primary,
    'peekViewResult.selectionBackground': withAlpha(
      palette.brand.primary,
      '33'
    ),
    'peekViewResult.lineForeground': palette.fg.primary,
    'peekViewResult.fileForeground': palette.fg.muted,
    'peekViewResult.matchHighlightBackground': withAlpha(
      palette.brand.primary,
      '66'
    ),

    // Редактор сравнения (Diff)
    'diffEditor.insertedTextBackground': withAlpha(palette.accent.cyan, 0.15),
    'diffEditor.removedTextBackground': withAlpha(palette.accent.red, 0.15),
    'diffEditor.insertedTextBorder': withAlpha(palette.accent.cyan, 0),
    'diffEditor.removedTextBorder': withAlpha(palette.accent.red, 0),
    'diffEditor.insertedLineBackground': withAlpha(palette.accent.cyan, 0.1),
    'diffEditor.removedLineBackground': withAlpha(palette.accent.red, 0.1),
    'diffEditor.diagonalFill': withAlpha(palette.fg.subtle, 0.2),

    // Хлебные крошки
    'breadcrumb.background': palette.bg.base,
    'breadcrumbPicker.background': palette.bg.elevated, // Немного отличается от основного фона
    'breadcrumb.foreground': palette.ui.breadcrumb, // Контрастный серый
    'breadcrumb.focusForeground': palette.fg.selectionText, // Белый для фокуса
    'breadcrumb.activeSelectionForeground': palette.fg.selectionText, // Белый для активного выбора

    // Вкладки
    'tab.activeBackground': palette.bg.base, // Фон активной вкладки
    'tab.inactiveBackground': palette.bg.elevated, // Фон неактивной вкладки
    'tab.activeForeground': palette.fg.primary, // Текст активной вкладки - более яркий
    'tab.hoverForeground': palette.fg.selectionText, // Текст при наведении - максимальная контрастность
    'tab.activeBorder': palette.ui.badge.base, // Граница активной вкладки - синхронизация с бейджами
    'tab.inactiveForeground': palette.fg.muted, // Текст неактивной вкладки - более контрастный
    'tab.border': palette.line.border,
    'tab.unfocusedActiveForeground': palette.fg.primary, // Текст активной вкладки в неактивном окне
    'tab.unfocusedInactiveForeground': palette.fg.muted, // Текст неактивной вкладки в неактивном окне
    'tab.unfocusedHoverForeground': palette.fg.primary, // Текст при наведении в неактивном окне
    'tab.activeModifiedBorder': palette.ui.tab.activeModifiedBorder,
    'tab.inactiveModifiedBorder': palette.ui.tab.inactiveModifiedBorder,
    'tab.unfocusedActiveBorder': palette.ui.badge.base, // Синхронизация с бейджами
    'tab.lastPinnedBorder': withAlpha(palette.fg.subtle, 'cc'), // Более заметная граница
    'tab.selectedBackground': palette.bg.base, // Фон выбранной вкладки
    'tab.selectedForeground': withAlpha(palette.fg.selectionText, 'a0'), // Текст выбранной вкладки

    // Панели
    'panel.background': palette.bg.base,
    'panel.border': palette.line.border,
    'panelTitle.activeForeground': palette.fg.activeTitle,
    'panelTitle.inactiveForeground': palette.fg.inactive,
    'panelTitle.activeBorder': palette.bg.sunken,
    'panelInput.border': palette.bg.sunken,
    'panelSection.border': palette.line.border,
    'panelSectionHeader.foreground': palette.fg.primary,
    'panelSectionHeader.background': palette.bg.elevated,
    'panelSectionHeader.border': palette.line.border,
    'panelStickyScroll.background': palette.bg.elevated,
    'panelStickyScroll.border': palette.line.border,

    // Строка состояния
    'statusBar.foreground': palette.fg.muted,
    'statusBar.background': palette.bg.sunken, // Более темный фон для лучшего контраста
    'statusBar.border': palette.line.border,
    // Состояния без папки/отладки/фокус
    'statusBar.noFolderBackground': palette.bg.sunken,
    'statusBar.noFolderForeground': palette.fg.muted,
    'statusBar.debuggingBackground': palette.bg.sunken,
    'statusBar.debuggingForeground': palette.fg.muted,
    'statusBar.debuggingBorder': palette.line.border,
    'statusBar.noFolderBorder': palette.line.border,
    'statusBar.focusBorder': palette.ui.sash.hover,
    'statusBarItem.activeBackground': palette.bg.active,
    'statusBarItem.hoverForeground': palette.fg.primary,
    'statusBarItem.hoverBackground': palette.ui.statusItem.hover,
    'statusBarItem.prominentBackground': palette.bg.overlay,
    'statusBarItem.prominentForeground': palette.fg.primary,
    'statusBarItem.prominentHoverBackground':
      palette.ui.statusItem.prominentHover,
    'statusBarItem.prominentHoverForeground': palette.fg.onSelection,
    // Remote индикатор
    'statusBarItem.remoteBackground': palette.brand.button.primary,
    'statusBarItem.remoteForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
    'statusBarItem.remoteHoverBackground': palette.brand.button.hover, // Более светлый при наведении
    'statusBarItem.remoteHoverForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
    // Ошибки/предупреждения
    'statusBarItem.errorBackground': palette.accent.red,
    'statusBarItem.errorForeground': palette.ui.semantic.white,
    'statusBarItem.errorHoverBackground': withAlpha(palette.accent.red, 'cc'),
    'statusBarItem.errorHoverForeground': palette.ui.semantic.white,
    'statusBarItem.warningBackground': palette.accent.yellow,
    'statusBarItem.warningForeground': palette.bg.base,
    'statusBarItem.warningHoverBackground': withAlpha(
      palette.accent.yellow,
      'cc'
    ),
    'statusBarItem.warningHoverForeground': palette.bg.base,
    // Прочее
    'statusBarItem.compactHoverBackground': palette.ui.statusItem.hover,
    'statusBarItem.focusBorder': palette.ui.sash.hover,
    'statusBarItem.offlineBackground': palette.ui.semantic.offline,
    'statusBarItem.offlineForeground': palette.ui.semantic.white,
    'statusBarItem.offlineHoverBackground': withAlpha(
      palette.ui.semantic.offline,
      'cc'
    ),
    'statusBarItem.offlineHoverForeground': palette.ui.semantic.white,

    // Заголовок окна
    'titleBar.activeForeground': palette.fg.muted,
    'titleBar.inactiveForeground': palette.fg.inactive,
    'titleBar.activeBackground': palette.bg.base,
    'titleBar.inactiveBackground': palette.bg.base,
    'titleBar.border': palette.line.border,

    // Command Center (новое меню в заголовке окна)
    'commandCenter.foreground': palette.fg.muted,
    'commandCenter.activeForeground': palette.fg.primary,
    'commandCenter.inactiveForeground': palette.fg.inactive,
    'commandCenter.background': palette.bg.base,
    'commandCenter.activeBackground': palette.bg.hover,
    'commandCenter.border': palette.line.border,
    'commandCenter.inactiveBorder': palette.line.border,

    // Текст
    'walkThrough.embeddedEditorBackground': palette.bg.sunken,
    'textLink.foreground': palette.ui.settingsHeader,
    'textLink.activeForeground': palette.accent.cyan,
    'textPreformat.foreground': palette.ui.text.preformat,
    'textBlockQuote.background': palette.bg.sunken,
    'textCodeBlock.background': palette.bg.sunken,
    'textSeparator.foreground': palette.ui.text.separator,

    // Отладка
    'debugExceptionWidget.border': palette.ui.debug.exceptionBorder,
    'debugExceptionWidget.background': palette.bg.elevated, // Осветлен для лучшей видимости
    'debugToolBar.background': palette.bg.base,
    'debugConsole.infoForeground': palette.fg.muted,
    'debugConsole.errorForeground': palette.ui.debug.consoleError,
    'debugConsole.sourceForeground': palette.fg.muted,
    'debugConsole.warningForeground': palette.ui.debug.consoleWarning,
    'debugConsoleInputIcon.foreground': palette.accent.teal,
    'editor.stackFrameHighlightBackground': withAlpha(
      palette.accent.yellow,
      '20'
    ),
    'editor.focusedStackFrameHighlightBackground': withAlpha(
      palette.accent.teal,
      '20'
    ),
    'debugView.stateLabelForeground': palette.fg.muted,
    'debugView.stateLabelBackground': palette.ui.debug.stateLabelBg,
    'debugView.valueChangedHighlight': withAlpha(palette.brand.primary, 'aa'),
    'debugTokenExpression.name': palette.accent.cyan,
    'debugTokenExpression.value': palette.ui.debug.tokenValue,
    'debugTokenExpression.string': palette.ui.debug.tokenString,
    'debugTokenExpression.boolean': palette.accent.orange,
    'debugTokenExpression.number': palette.accent.orange,
    'debugTokenExpression.error': palette.ui.debug.tokenError,

    // Терминал
    'terminal.background': palette.bg.base, // Фон терминала
    'terminal.foreground': palette.fg.primary, // Основной текст терминала
    'terminal.selectionBackground': withAlpha(palette.fg.subtle, '30'), // Фон выделения текста
    'terminal.inactiveSelectionBackground': withAlpha(palette.fg.subtle, '30'), // Фон неактивного выделения
    'terminalCursor.background': palette.bg.base, // Фон курсора
    'terminalCursor.foreground': palette.fg.primary, // Цвет курсора
    'terminal.findMatchBackground': withAlpha(palette.ui.badge.base, '66'), // Фон найденного совпадения
    'terminal.findMatchBorder': palette.accent.yellow, // Граница найденного совпадения
    'terminal.findMatchHighlightBackground': withAlpha(
      palette.ui.badge.base,
      '66'
    ),
    // Фон других совпадений
    'terminal.findMatchHighlightBorder': withAlpha(palette.ui.badge.base, '99'), // Граница других совпадений
    'terminal.hoverHighlightBackground': withAlpha(palette.brand.primary, '33'), // Фон при наведении
    'terminal.dropBackground': palette.bg.drop, // Фон при перетаскивании
    'terminalOverviewRuler.findMatchForeground': withAlpha(
      palette.fg.primary,
      '44'
    ), // Индикатор совпадений в обзорной линейке
    'terminalOverviewRuler.cursorForeground': palette.fg.primary, // Индикатор курсора в обзорной линейке
    // ANSI цвета терминала
    'terminal.ansiBlack': palette.ansi.black, // Черный
    'terminal.ansiRed': palette.ansi.red, // Красный
    'terminal.ansiGreen': palette.ansi.green, // Зеленый
    'terminal.ansiYellow': palette.ansi.yellow, // Желтый
    'terminal.ansiBlue': palette.ansi.blue, // Синий
    'terminal.ansiMagenta': palette.ansi.magenta, // Пурпурный
    'terminal.ansiCyan': palette.ansi.cyan, // Голубой
    'terminal.ansiWhite': palette.ansi.white, // Белый
    // Яркие ANSI цвета терминала
    'terminal.ansiBrightBlack': palette.ansi.brightBlack, // Яркий черный
    'terminal.ansiBrightRed': palette.ansi.brightRed, // Яркий красный
    'terminal.ansiBrightGreen': palette.ansi.brightGreen, // Яркий зеленый
    'terminal.ansiBrightYellow': palette.ansi.brightYellow, // Яркий желтый
    'terminal.ansiBrightBlue': palette.ansi.brightBlue, // Яркий синий
    'terminal.ansiBrightMagenta': palette.ansi.brightMagenta, // Яркий пурпурный
    'terminal.ansiBrightCyan': palette.ansi.brightCyan, // Яркий голубой
    'terminal.ansiBrightWhite': palette.ansi.brightWhite, // Яркий белый

    // Оформление Git
    'gitDecoration.modifiedResourceForeground': palette.accent.blue, // Измененные файлы
    'gitDecoration.ignoredResourceForeground': palette.ui.git.ignored, // Игнорируемые файлы
    'gitDecoration.deletedResourceForeground': palette.ui.git.deleted, // Удаленные файлы
    'gitDecoration.renamedResourceForeground': palette.accent.teal, // Переименованные файлы
    'gitDecoration.addedResourceForeground': palette.accent.teal, // Добавленные файлы
    'gitDecoration.untrackedResourceForeground': palette.accent.teal, // Неотслеживаемые файлы
    'gitDecoration.conflictingResourceForeground': palette.ui.git.conflicting, // Конфликтующие файлы
    'gitDecoration.stageDeletedResourceForeground': palette.ui.git.stageDeleted, // Удаленные в стейдже
    'gitDecoration.stageModifiedResourceForeground':
      palette.ui.git.stageModified, // Измененные в стейдже
    'git.blame.editorDecorationForeground': withAlpha(palette.fg.subtle, '80'), // Git blame аннотации

    // Диаграммы
    'charts.red': palette.accent.red, // Красные элементы диаграмм
    'charts.blue': palette.accent.blue, // Синие элементы диаграмм
    'charts.yellow': palette.accent.yellow, // Желтые элементы диаграмм
    'charts.orange': palette.accent.orange, // Оранжевые элементы диаграмм
    'charts.green': palette.accent.teal, // Зеленые элементы диаграмм
    'charts.purple': palette.accent.purple, // Пурпурные элементы диаграмм
    'charts.foreground': palette.ui.charts.foreground, // Основной текст диаграмм
    'charts.lines': palette.line.border, // Линии диаграмм

    // Слияние (Merge)
    'merge.currentHeaderBackground': withAlpha(palette.accent.teal, 'aa'), // Заголовок текущей ветки
    'merge.currentContentBackground': withAlpha(palette.accent.teal, '44'), // Контент текущей ветки
    'merge.incomingHeaderBackground': withAlpha(palette.brand.primary, 'aa'), // Заголовок входящей ветки
    'merge.incomingContentBackground': withAlpha(palette.brand.primary, '44'), // Контент входящей ветки

    // GitLens
    'gitlens.trailingLineForegroundColor': palette.ui.gitlens.foreground, // Текст в конце строки
    'gitlens.gutterUncommittedForegroundColor': palette.ui.gitlens.foreground, // Незакоммиченные изменения
    'gitlens.gutterForegroundColor': palette.ui.gitlens.foreground, // Общий текст GitLens

    // Уведомления
    'notificationCenterHeader.background': palette.bg.overlay, // Фон заголовка центра уведомлений - осветлен
    'notifications.background': palette.bg.overlay, // Фон уведомлений - осветлен для лучшей читаемости
    'notificationLink.foreground': palette.ui.semantic.notificationLink, // Ссылки в уведомлениях
    'notificationsErrorIcon.foreground': palette.accent.red, // Иконка ошибки
    'notificationsWarningIcon.foreground': palette.accent.yellow, // Иконка предупреждения
    'notificationsInfoIcon.foreground': palette.accent.blue, // Иконка информации
    'notificationToast.border': palette.line.border, // Граница всплывающих уведомлений
    'notifications.border': palette.line.border, // Граница уведомлений
    'notifications.foreground': palette.fg.primary, // Текст уведомлений
    'notificationCenter.border': palette.line.border, // Граница центра уведомлений
    'notificationCenterHeader.foreground': palette.fg.primary, // Текст заголовка центра уведомлений

    // Баннер
    'banner.background': palette.bg.elevated, // Фон баннера
    'banner.foreground': palette.fg.primary, // Текст баннера
    'banner.iconForeground': palette.brand.primary, // Иконка баннера

    // Меню
    'menubar.selectionForeground': palette.fg.selectionText, // Текст выбранного элемента менюбара
    'menubar.selectionBackground': palette.bg.selection.menu, // Фон выбранного элемента менюбара
    'menubar.selectionBorder': palette.line.menu, // Граница выбранного элемента менюбара
    'menu.foreground': palette.fg.soft, // Основной текст меню
    'menu.background': palette.bg.base, // Фон меню
    'menu.selectionForeground': palette.fg.selectionText, // Текст выбранного элемента меню
    'menu.selectionBackground': palette.bg.selection.menu, // Фон выбранного элемента меню
    'menu.separatorBackground': palette.line.border, // Разделитель в меню
    'menu.border': withAlpha(palette.line.border, '00'), // Граница меню (прозрачная)

    // Кнопки в контролах (поиск, замена и т.д.)
    'toolbar.hoverBackground': withAlpha(palette.bg.base, '20'), // Фон при наведении на кнопки тулбара
    'toolbar.activeBackground': withAlpha(palette.bg.base, '20'), // Фон активной кнопки тулбара

    // Быстрый ввод (Палитра команд, выборщик быстрых исправлений)
    'quickInput.background': palette.bg.elevated, // Фон палитры команд - осветлен для лучшей видимости
    'quickInput.foreground': palette.fg.primary, // Текст палитры команд
    'quickInputTitle.background': palette.bg.sunken, // Фон заголовка палитры команд
    'quickInputList.focusBackground': palette.bg.selection.focus, // Фон выбранного элемента в палитре команд
    'quickInputList.focusForeground': palette.fg.onSelection, // Текст выбранного элемента в палитре команд
    'quickInputList.focusIconForeground': palette.fg.onSelection, // Иконка выбранного элемента в палитре команд

    // Подписи клавиш
    'keybindingLabel.background': withAlpha(palette.bg.elevated, '99'), // Фон подписи клавиш
    'keybindingLabel.foreground': palette.fg.primary, // Текст подписи клавиш
    'keybindingLabel.border': palette.line.border, // Граница подписи клавиш
    'keybindingLabel.bottomBorder': withAlpha(palette.line.border, 'aa'), // Нижняя граница подписи клавиш
  }
}

const main = () => {
  const original = fs.readFileSync(themePath, 'utf8')
  const theme = JSON.parse(original) as Record<string, any>

  theme.colors = buildColors()
  theme.tokenColors = tokenColors
  theme.semanticTokenColors = semanticTokenColors

  const out = JSON.stringify(theme, null, 2) + '\n'
  fs.writeFileSync(themePath, out, 'utf8')
}

if (require.main === module) {
  main()
}
