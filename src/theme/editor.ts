import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getEditorColors = () => ({
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
})
