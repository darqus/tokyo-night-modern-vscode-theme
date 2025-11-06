import { alpha, lighten, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'
import {
  ADJUST,
  borderColor,
  lightBackground,
  mediumHighlight,
  OPACITY,
  softShadow,
  strongHighlight,
  subtleBackground,
  subtleHighlight,
} from '../../utils/color-helpers.js'

export function generateEditorColors(): Record<string, string> {
  return (
    colorRules()
      // Основные цвета редактора
      .add('editor.background', c.bg.light)
      .add('editor.foreground', c.fg.light)
      .add('editorPane.background', c.bg.light)
      .add('editor.lineHighlightBackground', c.bg.light)
      .add('editor.foldBackground', subtleHighlight(c.bg.dark))
      .add('editorLink.activeForeground', c.fg.light)

      // Выделение текста
      .add('selection.background', subtleHighlight(c.blue.main))
      .add('editor.selectionBackground', subtleHighlight(c.blue.main))
      .add(
        'editor.inactiveSelectionBackground',
        alpha(c.blue.main, OPACITY.SUBTLE)
      )
      .add('editor.selectionHighlightBackground', alpha(c.blue.main, 0.25))
      .add('editor.wordHighlightBackground', alpha(c.blue.main, 0.25))
      .add('editor.wordHighlightStrongBackground', mediumHighlight(c.blue.main))

      // Курсор и линии редактора
      .add('editorCursor.foreground', c.fg.light)
      .add('editorWhitespace.foreground', lighten(c.ui.badge, ADJUST.SMALL))
      .add('editorLineNumber.foreground', c.neutral.dark)
      .add('editorLineNumber.activeForeground', c.neutral.main)
      .add('editorIndentGuide.background1', lighten(c.bg.main, ADJUST.SLIGHT))
      .add(
        'editorIndentGuide.activeBackground1',
        mix(c.neutral.dark, c.bg.main, 0.7)
      )
      .add('editorStickyScrollHover.background', subtleBackground(c.blue.main))

      // Подсветка поиска
      .add('editor.findMatchBackground', subtleHighlight(c.blue.dark))
      .add('editor.findMatchBorder', strongHighlight(c.yellow.main))
      .add('editor.findMatchHighlightBackground', subtleHighlight(c.blue.dark))
      .add('editor.findRangeHighlightBackground', subtleHighlight(c.blue.main))
      .add('editor.rangeHighlightBackground', subtleHighlight(c.teal.main))

      // Скобки
      .addGroup('editorBracketMatch', {
        background: c.bg.main,
        border: lightBackground(c.bg.main),
      })
      .add('editorBracketHighlight.foreground1', c.neutral.light)
      .add('editorBracketHighlight.foreground2', c.cyan.light)
      .add('editorBracketHighlight.foreground3', c.purple.light)
      .add('editorBracketHighlight.foreground4', c.yellow.light)
      .add('editorBracketHighlight.foreground5', c.teal.light)
      .add('editorBracketHighlight.foreground6', c.green.main)
      .add('editorBracketHighlight.unexpectedBracket.foreground', c.red.dark)
      .add('editorBracketPairGuide.activeBackground1', c.neutral.light)
      .add('editorBracketPairGuide.activeBackground2', c.cyan.light)
      .add('editorBracketPairGuide.activeBackground3', c.purple.light)
      .add('editorBracketPairGuide.activeBackground4', c.yellow.light)
      .add('editorBracketPairGuide.activeBackground5', c.teal.light)
      .add('editorBracketPairGuide.activeBackground6', c.green.main)

      // Цвета ошибок/предупреждений
      .add('editorError.foreground', c.red.main)
      .add('editorWarning.foreground', c.yellow.main)
      .add('editorInfo.foreground', c.cyan.main)
      .add('editorHint.foreground', c.cyan.main)

      // Границы и линейки
      .add('editorRuler.foreground', c.bg.dark)
      .addGroup('editorOverviewRuler', {
        border: lightBackground(c.bg.light),
        errorForeground: c.red.main,
        warningForeground: c.yellow.main,
        infoForeground: mix(c.teal.main, c.green.main, 0.3),
        bracketMatchForeground: c.bg.dark,
        findMatchForeground: alpha(c.neutral.light, 0.4),
        rangeHighlightForeground: mediumHighlight(c.teal.main),
        selectionHighlightForeground: alpha(c.blue.main, 0.25),
        wordHighlightForeground: alpha(c.blue.main, 0.35),
        wordHighlightStrongForeground: alpha(c.blue.main, 0.45),
        modifiedForeground: mix(c.neutral.main, c.bg.main, 0.65),
        addedForeground: mix(c.teal.main, c.bg.main, 0.8),
        deletedForeground: mix(c.red.main, c.bg.main, 0.7),
      })

      // Гуттер (боковая панель с номерами строк)
      .addGroup('editorGutter', {
        modifiedBackground: mix(c.neutral.main, c.bg.main, 0.65),
        addedBackground: mix(c.teal.main, c.bg.main, 0.8),
        deletedBackground: mix(c.red.main, c.bg.main, 0.65),
      })

      // Гуттер минимапа
      .addGroup('minimapGutter', {
        modifiedBackground: mix(c.neutral.main, c.bg.main, 0.6),
        addedBackground: mix(c.teal.main, c.bg.main, 0.75),
        deletedBackground: mix(c.red.main, c.bg.main, 0.6),
      })

      // Группы редакторов
      .addGroup('editorGroup', {
        border: lightBackground(c.bg.light),
        dropBackground: lightBackground(c.bg.light),
      })
      .addGroup('editorGroupHeader', {
        tabsBorder: c.bg.dark,
        tabsBackground: c.bg.main,
        noTabsBackground: c.bg.main,
        border: lightBackground(c.bg.main),
      })

      // Виджеты редактора
      .addGroup('editorWidget', {
        foreground: c.fg.light,
        background: mix(c.bg.main, c.neutral.dark, 0.15),
        border: borderColor(c.bg.main, c.blue.main),
        resizeBorder: borderColor(c.bg.main, c.blue.main),
      })
      .add('widget.shadow', softShadow(c.ui.black))
      .addGroup('editorHoverWidget', {
        background: mix(c.bg.light, c.blue.main, 0.1),
        border: borderColor(c.bg.main, c.blue.main),
      })
      .addGroup('editorSuggestWidget', {
        background: c.bg.main,
        border: borderColor(c.bg.main, c.blue.main),
        selectedBackground: mediumHighlight(c.blue.main),
        highlightForeground: c.neutral.light,
      })

      // Вспомогательные элементы
      .add('editorCodeLens.foreground', c.fg.dark)
      .add('editorLightBulb.foreground', c.yellow.main)
      .add('editorLightBulbAutoFix.foreground', c.yellow.main)
      .add('editorInlayHint.foreground', c.neutral.main)
      .add('editorGhostText.foreground', c.neutral.dark)

      // Peek view (панель предварительного просмотра)
      .addGroup('peekView', {
        border: borderColor(c.bg.main, c.blue.main),
      })
      .add('peekViewEditor.background', c.bg.main)
      .add(
        'peekViewEditor.matchHighlightBackground',
        alpha(c.neutral.light, 0.4)
      )
      .addGroup('peekViewTitle', {
        background: c.bg.dark,
        labelForeground: c.fg.light,
        descriptionForeground: c.fg.main,
      })
      .addGroup('peekViewResult', {
        background: c.bg.main,
        selectionForeground: c.fg.light,
        selectionBackground: mediumHighlight(c.blue.main),
        lineForeground: c.fg.light,
        fileForeground: c.fg.main,
        matchHighlightBackground: alpha(c.neutral.light, 0.4),
      })
      .build()
  )
}
