import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getEditorColors = () => ({
  // Подсветка/направляющие для скобок - ОПТИМИЗИРОВАННАЯ РАЗЛИЧИМОСТЬ
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
    '25%' // было 30 - увеличиваем alpha для лучшей видимости
  ),
  /** Цвет фона для активной направляющей второй пары скобок */
  'editorBracketPairGuide.activeBackground2': withAlpha(
    palette.accent.orange, // синхронизация с новым цветом foreground2
    '25%'
  ),
  /** Цвет фона для активной направляющей третьей пары скобок */
  'editorBracketPairGuide.activeBackground3': withAlpha(
    palette.token.string, // синхронизация с новым цветом foreground3
    '25%'
  ),
  /** Цвет фона для активной направляющей четвертой пары скобок */
  'editorBracketPairGuide.activeBackground4': withAlpha(
    palette.accent.yellow, // синхронизация с новым цветом foreground4
    '25%'
  ),
  /** Цвет фона для активной направляющей пятой пары скобок */
  'editorBracketPairGuide.activeBackground5': withAlpha(
    palette.accent.red, // синхронизация с новым цветом foreground5
    '25%'
  ),
  /** Цвет фона для активной направляющей шестой пары скобок */
  'editorBracketPairGuide.activeBackground6': withAlpha(
    palette.accent.magenta, // синхронизация с новым цветом foreground6
    '25%'
  ),

  // Выделения и подсветки
  /** Цвет фона для выделения */
  'selection.background': palette.bg.selection.active,
  /** Цвет фона редактора */
  'editor.background': palette.bg.base,
  /** Цвет текста в редакторе по умолчанию */
  'editor.foreground': palette.fg.primary,
  /** Цвет для плейсхолдера в редакторе */
  'editor.placeholder.foreground': palette.ui.input.placeholder,
  /** Цвет фона для свернутых областей */
  'editor.foldBackground': withAlpha(palette.bg.elevated, '29%'),
  /** Цвет для активных ссылок в редакторе */
  'editorLink.activeForeground': palette.ui.badge.base, // Синхронизация с бейджами
  /** Цвет фона для выделенного текста */
  'editor.selectionBackground': withAlpha(palette.ui.selectionWash, '75%'),
  /** Цвет текста для выделенного текста */
  'editor.selectionForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
  // Использовать тот же оттенок для выделения, но с меньшей прозрачностью для неактивного выделения
  /** Цвет фона для неактивного выделения */
  'editor.inactiveSelectionBackground': withAlpha(
    palette.ui.selectionWash,
    '19%'
  ),
  /** Цвет фона для найденного совпадения */
  'editor.findMatchBackground': withAlpha(palette.accent.yellow, '25%'),
  /** Цвет рамки для найденного совпадения */
  'editor.findMatchBorder': withAlpha(palette.accent.yellow, '40%'),
  /** Цвет фона для выделения найденного совпадения */
  'editor.findMatchHighlightBackground': withAlpha(
    palette.accent.yellow,
    '30%'
  ),
  /** Цвет рамки для выделения найденного совпадения */
  'editor.findMatchHighlightBorder': withAlpha(palette.accent.yellow, '80%'),
  /** Цвет фона для выделения диапазона */
  'editor.findRangeHighlightBackground': withAlpha(palette.fg.subtle, '20%'),
  /** Цвет рамки для выделения диапазона */
  'editor.findRangeHighlightBorder': withAlpha(palette.fg.subtle, '0%'),
  /** Цвет фона для выделения диапазона */
  'editor.rangeHighlightBackground': withAlpha(palette.fg.subtle, '20%'),

  /** Цвет фона для выделения слова */
  'editor.wordHighlightBackground': withAlpha(palette.accent.blue, '12%'),
  /** Цвет рамки для выделения слова */
  'editor.wordHighlightBorder': withAlpha(palette.accent.blue, '24%'),
  /** Цвет фона для "сильного" выделения слова */
  'editor.wordHighlightStrongBackground': withAlpha(
    palette.accent.blue,
    '20%'
  ),
  /** Цвет рамки для "сильного" выделения слова */
  'editor.wordHighlightStrongBorder': withAlpha(palette.accent.blue, '40%'),
  /** Цвет фона для выделения вхождения */
  'editor.selectionHighlightBackground': withAlpha(
    palette.accent.blue,
    '15%'
  ),
  /** Цвет рамки для выделения вхождения */
  'editor.selectionHighlightBorder': withAlpha(palette.accent.blue, '30%'),
  /** Цвет фона при наведении на элемент */
  'editor.hoverHighlightBackground': withAlpha(palette.ui.badge.base, '80%'), // Синхронизация с бейджами

  // Курсор/отступы/строка/пробелы
  /** Цвет курсора */
  'editorCursor.foreground': palette.fg.primary,
  /** Цвет направляющих отступов */
  'editorIndentGuide.background1': withAlpha(palette.fg.subtle, '80%'), // Увеличена непрозрачность для лучшей видимости
  /** Цвет активных направляющих отступов */
  'editorIndentGuide.activeBackground1': withAlpha(palette.fg.subtle, '80%'), // Увеличена непрозрачность для лучшей видимости
  /** Цвет номеров строк */
  'editorLineNumber.foreground': palette.fg.subtle,
  /** Цвет активного номера строки */
  'editorLineNumber.activeForeground': palette.fg.primary,
  /** Цвет фона для выделения текущей строки */
  'editor.lineHighlightBackground': palette.bg.lineHighlight,
  /** Цвет для символов пробелов */
  'editorWhitespace.foreground': withAlpha(palette.fg.subtle, '80%'),

  // Sticky Scroll в редакторе
  /** Цвет фона для "липкого" скролла */
  'editorStickyScroll.background': palette.bg.elevated,
  /** Цвет фона для "липкого" скролла при наведении */
  'editorStickyScrollHover.background': palette.bg.hover,
  /** Цвет рамки для "липкого" скролла */
  'editorStickyScroll.border': palette.line.border,

  // Виджеты/всплывающие подсказки редактора - улучшенная контрастность
  /** Цвет фона для навигации по маркерам */
  'editorMarkerNavigation.background': palette.bg.elevated,
  /** Цвет фона для всплывающей подсказки редактора */
  'editorHoverWidget.background': palette.bg.elevated,
  /** Цвет рамки для всплывающей подсказки редактора */
  'editorHoverWidget.border': palette.line.border,
  /** Цвет текста для всплывающей подсказки редактора */
  'editorHoverWidget.foreground': palette.fg.primary,

  // Соответствие скобок - улучшенная видимость
  /** Цвет фона для совпадающих скобок */
  'editorBracketMatch.background': palette.bg.bracketMatch,
  /** Цвет рамки для совпадающих скобок */
  'editorBracketMatch.border': palette.accent.blue,

  // Подсказки внутри кода (Inlay hints)
  /** Цвет фона для встроенных подсказок */
  'editorInlayHint.background': withAlpha(palette.bg.elevated, '80%'),
  /** Цвет текста для встроенных подсказок */
  'editorInlayHint.foreground': palette.fg.muted,
  /** Цвет фона для встроенных подсказок типа */
  'editorInlayHint.typeBackground': withAlpha(palette.bg.elevated, '80%'),
  /** Цвет текста для встроенных подсказок типа */
  'editorInlayHint.typeForeground': palette.fg.muted,
  /** Цвет фона для встроенных подсказок параметра */
  'editorInlayHint.parameterBackground': withAlpha(palette.bg.elevated, '80%'),
  /** Цвет текста для встроенных подсказок параметра */
  'editorInlayHint.parameterForeground': palette.fg.muted,

  // Обзорная линейка
  /** Цвет рамки для обзорной линейки */
  'editorOverviewRuler.border': palette.line.border,
  /** Цвет для ошибок в обзорной линейке */
  'editorOverviewRuler.errorForeground': palette.ui.editorOverview.error,
  /** Цвет для предупреждений в обзорной линейке */
  'editorOverviewRuler.warningForeground': palette.accent.yellow,
  /** Цвет для информационных сообщений в обзорной линейке */
  'editorOverviewRuler.infoForeground': palette.ui.editorOverview.info,
  /** Цвет для совпадающих скобок в обзорной линейке */
  'editorOverviewRuler.bracketMatchForeground': palette.bg.overlay,
  /** Цвет для найденных совпадений в обзорной линейке */
  'editorOverviewRuler.findMatchForeground': withAlpha(
    palette.fg.primary,
    '80%'
  ),
  /** Цвет для выделения диапазона в обзорной линейке */
  'editorOverviewRuler.rangeHighlightForeground': withAlpha(
    palette.fg.primary,
    '80%'
  ),
  /** Цвет для выделения вхождений в обзорной линейке */
  'editorOverviewRuler.selectionHighlightForeground': withAlpha(
    palette.fg.primary,
    '80%'
  ),
  /** Цвет для выделения слова в обзорной линейке */
  'editorOverviewRuler.wordHighlightForeground': withAlpha(
    palette.accent.magenta,
    '80%'
  ),
  /** Цвет для "сильного" выделения слова в обзорной линейке */
  'editorOverviewRuler.wordHighlightStrongForeground': withAlpha(
    palette.accent.magenta,
    '80%'
  ),
  /** Цвет для измененных строк в обзорной линейке */
  'editorOverviewRuler.modifiedForeground': palette.ui.editorOverview.modified,
  /** Цвет для добавленных строк в обзорной линейке */
  'editorOverviewRuler.addedForeground': palette.ui.editorOverview.added,
  /** Цвет для удаленных строк в обзорной линейке */
  'editorOverviewRuler.deletedForeground': palette.ui.editorOverview.deleted,

  // Линейка/сообщения
  /** Цвет для линейки редактора */
  'editorRuler.foreground': palette.line.border,
  /** Цвет для ошибок в редакторе */
  'editorError.foreground': palette.ui.editorOverview.error,
  /** Цвет для предупреждений в редакторе */
  'editorWarning.foreground': palette.accent.yellow,
  /** Цвет для информационных сообщений в редакторе */
  'editorInfo.foreground': palette.ui.debug.info,
  /** Цвет для подсказок в редакторе */
  'editorHint.foreground': palette.ui.debug.info,

  // Область редактора (Gutter) и миникарта
  /** Цвет фона для измененных строк в области редактора */
  'editorGutter.modifiedBackground': palette.ui.gutter.modified,
  /** Цвет фона для добавленных строк в области редактора */
  'editorGutter.addedBackground': palette.ui.gutter.added,
  /** Цвет фона для удаленных строк в области редактора */
  'editorGutter.deletedBackground': palette.ui.gutter.deleted,
  /** Цвет фона для измененных строк в миникарте */
  'minimapGutter.modifiedBackground': palette.ui.minimapGutter.modified,
  /** Цвет фона для добавленных строк в миникарте */
  'minimapGutter.addedBackground': palette.ui.minimapGutter.added,
  /** Цвет фона для удаленных строк в миникарте */
  'minimapGutter.deletedBackground': palette.ui.minimapGutter.deleted,

  // Группы/заголовки редактора
  /** Цвет рамки для групп редактора */
  'editorGroup.border': palette.line.border,
  /** Цвет фона при перетаскивании в группу редактора */
  'editorGroup.dropBackground': palette.bg.lineHighlight,
  /** Цвет рамки для вкладок в заголовке группы редактора */
  'editorGroupHeader.tabsBorder': palette.line.border,
  /** Цвет фона для вкладок в заголовке группы редактора */
  'editorGroupHeader.tabsBackground': palette.bg.tabs,
  /** Цвет фона для заголовка группы редактора без вкладок */
  'editorGroupHeader.noTabsBackground': palette.bg.tabs,
  /** Цвет рамки для заголовка группы редактора */
  'editorGroupHeader.border': palette.line.border,
  /** Цвет фона для панели редактора */
  'editorPane.background': palette.bg.base,

  // Виджеты/подсказки редактора - улучшенная контрастность для поиска/замены
  /** Цвет фона для виджета редактора */
  'editorWidget.background': palette.bg.elevated, // Используем elevated фон для лучшего выделения
  /** Цвет рамки для виджета редактора */
  'editorWidget.border': palette.line.border, // Добавляем границу
  /** Цвет текста для виджета редактора */
  'editorWidget.foreground': palette.fg.primary, // Явно задаем цвет текста
  /** Цвет рамки для изменения размера виджета редактора */
  'editorWidget.resizeBorder': withAlpha(palette.fg.subtle, '80%'), // Увеличиваем непрозрачность границы изменения размера
  /** Цвет фона для виджета подсказок редактора */
  'editorSuggestWidget.background': palette.bg.elevated, // Осветлен для лучшей видимости подсказок
  /** Цвет рамки для виджета подсказок редактора */
  'editorSuggestWidget.border': withAlpha(palette.ansi.black, '0%'),
  /** Цвет текста для виджета подсказок редактора */
  'editorSuggestWidget.foreground': palette.fg.primary,
  /** Цвет фона для выделенного элемента в виджете подсказок */
  'editorSuggestWidget.selectedBackground': palette.bg.selection.menu,
  /** Цвет текста для выделенного элемента в виджете подсказок */
  'editorSuggestWidget.selectedForeground': palette.fg.onSelection,
  /** Цвет для выделения совпадений в виджете подсказок */
  'editorSuggestWidget.highlightForeground': palette.ui.settingsHeader,
  /** Цвет для CodeLens */
  'editorCodeLens.foreground': palette.ui.codeLens,
  /** Цвет для "лампочки" (действия) */
  'editorLightBulb.foreground': palette.accent.yellow,
  /** Цвет для "лампочки" (автоматическое исправление) */
  'editorLightBulbAutoFix.foreground': palette.accent.yellow,

  // Виджеты поиска - активные кнопки при наведении и улучшенная контрастность
  /** Цвет фона для найденного совпадения в редакторе поиска */
  'searchEditor.findMatchBackground': withAlpha(palette.ui.badge.base, '80%'),
  /** Цвет рамки для найденного совпадения в редакторе поиска */
  'searchEditor.findMatchBorder': palette.accent.yellow,
  /** Цвет рамки для поля ввода в редакторе поиска */
  'searchEditor.textInputBorder': palette.line.border,
})
