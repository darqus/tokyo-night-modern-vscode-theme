import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getEditorColors = () => ({
  // === ПОДСВЕТКА СКОБОК И НАПРАВЛЯЮЩИЕ ===
  // Оптимизированная различимость цветов для вложенных скобок
  /** Цвет для первой пары скобок */
  'editorBracketHighlight.foreground1': palette.accent.blue, // синий
  /** Цвет для второй пары скобок */
  'editorBracketHighlight.foreground2': palette.accent.orange, // оранжевый (вместо cyan)
  /** Цвет для третьей пары скобок */
  'editorBracketHighlight.foreground3': palette.token.string, // зеленый (вместо magenta)
  /** Цвет для четвертой пары скобок */
  'editorBracketHighlight.foreground4': palette.accent.yellow, // желтый
  /** Цвет для пятой пары скобок */
  'editorBracketHighlight.foreground5': palette.accent.red, // красный
  /** Цвет для шестой пары скобок */
  'editorBracketHighlight.foreground6': palette.accent.magenta, // магента
  /** Цвет для неожиданных/несоответствующих скобок */
  'editorBracketHighlight.unexpectedBracket.foreground': palette.accent.red,
  /** Цвет фона для активной направляющей первой пары скобок */
  'editorBracketPairGuide.activeBackground1': withAlpha(
    palette.accent.blue,
    '15%' // было 30 - увеличиваем alpha для лучшей видимости
  ),
  /** Цвет фона для активной направляющей второй пары скобок */
  'editorBracketPairGuide.activeBackground2': withAlpha(
    palette.accent.orange, // синхронизация с новым цветом foreground2
    '15%'
  ),
  /** Цвет фона для активной направляющей третьей пары скобок */
  'editorBracketPairGuide.activeBackground3': withAlpha(
    palette.token.string, // синхронизация с новым цветом foreground3
    '15%'
  ),
  /** Цвет фона для активной направляющей четвертой пары скобок */
  'editorBracketPairGuide.activeBackground4': withAlpha(
    palette.accent.yellow, // синхронизация с новым цветом foreground4
    '15%'
  ),
  /** Цвет фона для активной направляющей пятой пары скобок */
  'editorBracketPairGuide.activeBackground5': withAlpha(
    palette.accent.red, // синхронизация с новым цветом foreground5
    '15%'
  ),
  /** Цвет фона для активной направляющей шестой пары скобок */
  'editorBracketPairGuide.activeBackground6': withAlpha(
    palette.accent.magenta, // синхронизация с новым цветом foreground6
    '15%'
  ),

  // === ОСНОВНЫЕ ЦВЕТА РЕДАКТОРА ===
  /** Цвет фона для общего выделения (не в редакторе) */
  'selection.background': palette.bg.selection.active,
  /** Основной цвет фона редактора */
  'editor.background': palette.bg.base,
  /** Основной цвет текста в редакторе */
  'editor.foreground': palette.fg.primary,
  /** Цвет текста-заполнителя в редакторе */
  'editor.placeholder.foreground': palette.ui.input.placeholder,
  /** Цвет фона для свернутых (collapsed) областей кода */
  'editor.foldBackground': withAlpha(palette.bg.elevated, '15%'),
  /** Цвет активных ссылок в редакторе (Ctrl+Click) */
  'editorLink.activeForeground': palette.ui.badge.base,
  // === ВЫДЕЛЕНИЕ ТЕКСТА И ПОИСК ===
  /** Цвет фона для выделенного текста (основное выделение) */
  'editor.selectionBackground': withAlpha(palette.accent.blue, '15%'),
  /** Цвет текста для выделенного текста */
  'editor.selectionForeground': palette.fg.selectionText,
  /** Цвет фона для неактивного выделения */
  'editor.inactiveSelectionBackground': withAlpha(palette.accent.blue, '15%'),

  // === ПОИСК И СОВПАДЕНИЯ ===
  /** Цвет фона для текущего найденного совпадения (активное) */
  'editor.findMatchBackground': withAlpha(palette.accent.magenta, '15%'),
  /** Цвет рамки для текущего найденного совпадения */
  'editor.findMatchBorder': withAlpha(palette.accent.yellow, '15%'),
  /** Цвет фона для других найденных совпадений (неактивные) */
  'editor.findMatchHighlightBackground': withAlpha(
    palette.accent.yellow,
    '15%'
  ),
  /** Цвет рамки для других найденных совпадений */
  'editor.findMatchHighlightBorder': withAlpha(palette.accent.magenta, '15%'),
  /** Цвет фона для выделения диапазона поиска */
  'editor.findRangeHighlightBackground': withAlpha(palette.fg.soft, '15%'),
  /** Цвет рамки для выделения диапазона поиска */
  'editor.findRangeHighlightBorder': withAlpha(palette.fg.muted, '15%'),
  /** Цвет фона для общего выделения диапазона */
  'editor.rangeHighlightBackground': withAlpha(palette.fg.subtle, '15%'),

  // === ВЫДЕЛЕНИЕ СЛОВ И СИМВОЛОВ ===
  /** Цвет фона для выделения слова под курсором (read access) */
  'editor.wordHighlightBackground': withAlpha(palette.accent.magenta, '15%'),
  /** Цвет рамки для выделения слова под курсором */
  'editor.wordHighlightBorder': withAlpha(palette.accent.magenta, '15%'),
  /** Цвет фона для "сильного" выделения слова (write access) */
  'editor.wordHighlightStrongBackground': withAlpha(
    palette.accent.magenta,
    '15%'
  ),
  /** Цвет рамки для "сильного" выделения слова */
  'editor.wordHighlightStrongBorder': withAlpha(palette.accent.magenta, '15%'),
  /** Цвет фона для выделения похожих символов при выделении */
  'editor.selectionHighlightBackground': withAlpha(palette.accent.blue, '15%'),
  /** Цвет рамки для выделения похожих символов */
  'editor.selectionHighlightBorder': withAlpha(palette.accent.blue, '15%'),
  /** Цвет фона при наведении курсора на элемент */
  'editor.hoverHighlightBackground': withAlpha(palette.accent.blue, '15%'),

  // === КУРСОР, СТРОКИ И ОТСТУПЫ ===
  /** Цвет курсора в редакторе */
  'editorCursor.foreground': palette.fg.primary,
  /** Цвет вертикальных направляющих отступов */
  'editorIndentGuide.background1': withAlpha(palette.fg.subtle, '15%'),
  /** Цвет активной направляющей отступа (текущий уровень) */
  'editorIndentGuide.activeBackground1': withAlpha(palette.fg.subtle, '15%'),
  /** Цвет номеров строк */
  'editorLineNumber.foreground': palette.fg.subtle,
  /** Цвет номера активной строки */
  'editorLineNumber.activeForeground': palette.fg.primary,
  /** Цвет фона подсветки текущей строки */
  'editor.lineHighlightBackground': palette.bg.lineHighlight,
  /** Цвет отображения пробелов, табов и переносов строк */
  'editorWhitespace.foreground': withAlpha(palette.fg.subtle, '15%'),

  // === STICKY SCROLL (ЗАКРЕПЛЕННЫЕ ЗАГОЛОВКИ) ===
  /** Цвет фона для закрепленных заголовков функций/классов */
  'editorStickyScroll.background': palette.bg.elevated,
  /** Цвет фона закрепленных заголовков при наведении */
  'editorStickyScrollHover.background': palette.bg.hover,
  /** Цвет границы закрепленных заголовков */
  'editorStickyScroll.border': palette.line.border,

  // === ВСПЛЫВАЮЩИЕ ПОДСКАЗКИ И ВИДЖЕТЫ ===
  /** Цвет фона виджета навигации по ошибкам/предупреждениям */
  'editorMarkerNavigation.background': palette.bg.elevated,
  /** Цвет фона всплывающих подсказок при наведении */
  'editorHoverWidget.background': palette.bg.elevated,
  /** Цвет границы всплывающих подсказок */
  'editorHoverWidget.border': palette.line.border,
  /** Цвет текста во всплывающих подсказках */
  'editorHoverWidget.foreground': palette.fg.primary,

  // === ПОДСВЕТКА ПАРНЫХ СКОБОК ===
  /** Цвет фона для выделения парной скобки */
  'editorBracketMatch.background': palette.bg.bracketMatch,
  /** Цвет рамки вокруг парной скобки */
  'editorBracketMatch.border': withAlpha(palette.accent.blue, '15%'),

  // === INLAY HINTS (ВСТРОЕННЫЕ ПОДСКАЗКИ ТИПОВ) ===
  /** Цвет фона для встроенных подсказок (общие) */
  'editorInlayHint.background': withAlpha(palette.bg.elevated, '15%'),
  /** Цвет текста встроенных подсказок (общие) */
  'editorInlayHint.foreground': palette.fg.muted,
  /** Цвет фона для подсказок типов переменных */
  'editorInlayHint.typeBackground': withAlpha(palette.bg.elevated, '15%'),
  /** Цвет текста подсказок типов переменных */
  'editorInlayHint.typeForeground': palette.fg.muted,
  /** Цвет фона для подсказок имен параметров */
  'editorInlayHint.parameterBackground': withAlpha(palette.bg.elevated, '15%'),
  /** Цвет текста подсказок имен параметров */
  'editorInlayHint.parameterForeground': palette.fg.muted,

  // === OVERVIEW RULER (МИНИАТЮРА СПРАВА) ===
  /** Цвет границы миниатюры справа от редактора */
  'editorOverviewRuler.border': palette.line.border,
  /** Цвет индикаторов ошибок в миниатюре */
  'editorOverviewRuler.errorForeground': palette.ui.editorOverview.error,
  /** Цвет индикаторов предупреждений в миниатюре */
  'editorOverviewRuler.warningForeground': palette.accent.yellow,
  /** Цвет индикаторов информации в миниатюре */
  'editorOverviewRuler.infoForeground': palette.ui.editorOverview.info,
  /** Цвет индикаторов парных скобок в миниатюре */
  'editorOverviewRuler.bracketMatchForeground': palette.bg.overlay,
  /** Цвет индикаторов найденных совпадений в миниатюре */
  'editorOverviewRuler.findMatchForeground': withAlpha(
    palette.fg.primary,
    '15%'
  ),
  /** Цвет индикаторов выделенного диапазона в миниатюре */
  'editorOverviewRuler.rangeHighlightForeground': withAlpha(
    palette.fg.primary,
    '15%'
  ),
  /** Цвет индикаторов похожих символов в миниатюре */
  'editorOverviewRuler.selectionHighlightForeground': withAlpha(
    palette.fg.primary,
    '15%'
  ),
  /** Цвет индикаторов выделенных слов (read) в миниатюре */
  'editorOverviewRuler.wordHighlightForeground': withAlpha(
    palette.accent.magenta,
    '15%'
  ),
  /** Цвет индикаторов выделенных слов (write) в миниатюре */
  'editorOverviewRuler.wordHighlightStrongForeground': withAlpha(
    palette.accent.magenta,
    '15%'
  ),
  /** Цвет индикаторов измененных строк в миниатюре */
  'editorOverviewRuler.modifiedForeground': palette.ui.editorOverview.modified,
  /** Цвет индикаторов добавленных строк в миниатюре */
  'editorOverviewRuler.addedForeground': palette.ui.editorOverview.added,
  /** Цвет индикаторов удаленных строк в миниатюре */
  'editorOverviewRuler.deletedForeground': palette.ui.editorOverview.deleted,

  // === ЛИНЕЙКИ И ДИАГНОСТИКА ===
  /** Цвет вертикальных линеек (rulers) в редакторе */
  'editorRuler.foreground': palette.line.border,
  /** Цвет подчеркивания ошибок в коде */
  'editorError.foreground': palette.ui.editorOverview.error,
  /** Цвет подчеркивания предупреждений в коде */
  'editorWarning.foreground': palette.accent.yellow,
  /** Цвет подчеркивания информационных сообщений */
  'editorInfo.foreground': palette.ui.debug.info,
  /** Цвет подчеркивания подсказок (hints) */
  'editorHint.foreground': palette.ui.debug.info,

  // === GUTTER (ОБЛАСТЬ СЛЕВА) И MINIMAP ===
  /** Цвет индикатора измененных строк в gutter */
  'editorGutter.modifiedBackground': palette.ui.gutter.modified,
  /** Цвет индикатора добавленных строк в gutter */
  'editorGutter.addedBackground': palette.ui.gutter.added,
  /** Цвет индикатора удаленных строк в gutter */
  'editorGutter.deletedBackground': palette.ui.gutter.deleted,
  /** Цвет индикатора измененных строк в minimap */
  'minimapGutter.modifiedBackground': palette.ui.minimapGutter.modified,
  /** Цвет индикатора добавленных строк в minimap */
  'minimapGutter.addedBackground': palette.ui.minimapGutter.added,
  /** Цвет индикатора удаленных строк в minimap */
  'minimapGutter.deletedBackground': palette.ui.minimapGutter.deleted,

  // === ГРУППЫ РЕДАКТОРОВ И ВКЛАДКИ ===
  /** Цвет границы между группами редакторов */
  'editorGroup.border': palette.line.border,
  /** Цвет фона при перетаскивании файлов в группу */
  'editorGroup.dropBackground': palette.bg.lineHighlight,
  /** Цвет границы области вкладок */
  'editorGroupHeader.tabsBorder': palette.line.border,
  /** Цвет фона области вкладок */
  'editorGroupHeader.tabsBackground': palette.bg.tabs,
  /** Цвет фона заголовка группы без вкладок */
  'editorGroupHeader.noTabsBackground': palette.bg.tabs,
  /** Цвет границы заголовка группы редакторов */
  'editorGroupHeader.border': palette.line.border,
  /** Цвет фона панели редактора */
  'editorPane.background': palette.bg.base,

  // === ВИДЖЕТЫ РЕДАКТОРА (ПОИСК, АВТОДОПОЛНЕНИЕ) ===
  /** Цвет фона виджетов редактора (поиск, замена) */
  'editorWidget.background': palette.bg.elevated,
  /** Цвет границы виджетов редактора */
  'editorWidget.border': palette.line.border,
  /** Цвет текста в виджетах редактора */
  'editorWidget.foreground': palette.fg.primary,
  /** Цвет границы изменения размера виджета */
  'editorWidget.resizeBorder': withAlpha(palette.fg.subtle, '15%'),
  /** Цвет фона списка автодополнения */
  'editorSuggestWidget.background': palette.bg.elevated,
  /** Цвет границы списка автодополнения */
  'editorSuggestWidget.border': withAlpha(palette.ansi.black, '0%'),
  /** Цвет текста в списке автодополнения */
  'editorSuggestWidget.foreground': palette.fg.primary,
  /** Цвет фона выбранного элемента автодополнения */
  'editorSuggestWidget.selectedBackground': palette.bg.selection.menu,
  /** Цвет текста выбранного элемента автодополнения */
  'editorSuggestWidget.selectedForeground': palette.fg.onSelection,
  /** Цвет подсветки совпадений в автодополнении */
  'editorSuggestWidget.highlightForeground': palette.ui.settingsHeader,
  /** Цвет текста CodeLens (подсказки над функциями) */
  'editorCodeLens.foreground': palette.ui.codeLens,
  /** Цвет иконки лампочки (быстрые действия) */
  'editorLightBulb.foreground': palette.accent.yellow,
  /** Цвет иконки лампочки (автоисправления) */
  'editorLightBulbAutoFix.foreground': palette.accent.yellow,

  // === РЕДАКТОР ПОИСКА (SEARCH EDITOR) ===
  /** Цвет фона найденных совпадений в редакторе поиска */
  'searchEditor.findMatchBackground': withAlpha(palette.ui.badge.base, '15%'),
  /** Цвет границы найденных совпадений в редакторе поиска */
  'searchEditor.findMatchBorder': palette.accent.yellow,
  /** Цвет границы поля ввода в редакторе поиска */
  'searchEditor.textInputBorder': palette.line.border,
})
