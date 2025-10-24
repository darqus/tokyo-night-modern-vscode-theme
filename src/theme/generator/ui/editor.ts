import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateEditorColors(): Record<string, string> {
  const {
    bg,
    fg,
    blue,
    cyan,
    yellow,
    red,
    purple,
    ui,
    brackets,
    git,
    interactive,
    elements,
    special,
    border,
  } = palette

  // Улучшенные цвета с обеспечением контрастности
  const enhancedSelection = ensureContrast(special.selection, bg.editor, 3.0)
  const enhancedSelectionBright = ensureContrast(
    special.selectionBright,
    bg.editor,
    4.5
  )
  const enhancedSearchMatch = ensureContrast(
    special.searchMatch,
    bg.editor,
    3.5
  )
  const enhancedWordHighlight = ensureContrast(
    special.wordHighlight,
    bg.editor,
    3.0
  )

  return {
    'selection.background': alpha(enhancedSelectionBright, 0.4), // Увеличил непрозрачность
    'editor.background': bg.editor,
    'editor.foreground': ensureContrast(fg.brighter, bg.editor, 4.5), // Обеспечиваем WCAG AA
    'editor.foldBackground': alpha(elements.foldBackground, 0.35), // Увеличил контрастность
    'editorLink.activeForeground': ensureContrast(
      ui.linkActive,
      bg.editor,
      4.5
    ),
    'editor.selectionBackground': alpha(enhancedSelection, 0.6), // Увеличил непрозрачность
    'editor.inactiveSelectionBackground': alpha(enhancedSelection, 0.3), // Увеличил непрозрачность
    'editor.findMatchBackground': alpha(enhancedSearchMatch, 0.7), // Увеличил непрозрачность
    'editor.findMatchBorder': ensureContrast(
      special.searchCurrent,
      bg.editor,
      3.0
    ),
    'editor.findMatchHighlightBackground': alpha(enhancedSearchMatch, 0.4), // Увеличил непрозрачность
    'editor.findRangeHighlightBackground': alpha(enhancedSelection, 0.35), // Увеличил непрозрачность
    'editor.rangeHighlightBackground': alpha(enhancedSelection, 0.25), // Увеличил непрозрачность
    'editor.wordHighlightBackground': alpha(enhancedWordHighlight, 0.5), // Увеличил непрозрачность
    'editor.wordHighlightStrongBackground': alpha(enhancedWordHighlight, 0.7), // Увеличил непрозрачность
    'editor.selectionHighlightBackground': alpha(enhancedSelectionBright, 0.35), // Увеличил непрозрачность
    'editorCursor.foreground': ensureContrast(fg.brightest, bg.editor, 4.5),
    'editorIndentGuide.background1': ensureContrast(
      elements.indentGuidesBackground,
      bg.editor,
      1.5
    ),
    'editorIndentGuide.activeBackground1': ensureContrast(
      special.indentActive,
      bg.editor,
      2.0
    ),
    'editorLineNumber.foreground': ensureContrast(
      special.indentActive,
      bg.editor,
      2.0
    ),
    'editorLineNumber.activeForeground': ensureContrast(
      fg.medium,
      bg.editor,
      3.0
    ),
    'editor.lineHighlightBackground': alpha(bg.lighter, 0.15), // Сделал более заметным
    'editorWhitespace.foreground': ensureContrast(
      special.indentActive,
      bg.editor,
      1.8
    ),
    'editorMarkerNavigation.background': bg.main,
    'editorHoverWidget.background': lighten(bg.main, 0.02),
    'editorHoverWidget.border': ensureContrast(border.ui, bg.main, 2.0),
    'editorBracketMatch.background': alpha(bg.main, 0.8),
    'editorBracketMatch.border': ensureContrast(
      special.indentActive,
      bg.main,
      3.0
    ),
    'editorBracketHighlight.foreground1': ensureContrast(
      brackets.blue,
      bg.editor,
      3.0
    ),
    'editorBracketHighlight.foreground2': ensureContrast(
      brackets.cyan,
      bg.editor,
      3.0
    ),
    'editorBracketHighlight.foreground3': ensureContrast(
      brackets.purple,
      bg.editor,
      3.0
    ),
    'editorBracketHighlight.foreground4': ensureContrast(
      brackets.teal,
      bg.editor,
      3.0
    ),
    'editorBracketHighlight.foreground5': ensureContrast(
      brackets.green,
      bg.editor,
      3.0
    ),
    'editorBracketHighlight.foreground6': ensureContrast(
      yellow.muted,
      bg.editor,
      3.0
    ),
    'editorBracketHighlight.unexpectedBracket.foreground': ensureContrast(
      red.dark,
      bg.editor,
      4.5
    ),
    'editorBracketPairGuide.activeBackground1': alpha(
      ensureContrast(brackets.blue, bg.editor, 2.5),
      0.6
    ),
    'editorBracketPairGuide.activeBackground2': alpha(
      ensureContrast(brackets.cyan, bg.editor, 2.5),
      0.6
    ),
    'editorBracketPairGuide.activeBackground3': alpha(
      ensureContrast(brackets.purple, bg.editor, 2.5),
      0.6
    ),
    'editorBracketPairGuide.activeBackground4': alpha(
      ensureContrast(brackets.teal, bg.editor, 2.5),
      0.6
    ),
    'editorBracketPairGuide.activeBackground5': alpha(
      ensureContrast(brackets.green, bg.editor, 2.5),
      0.6
    ),
    'editorBracketPairGuide.activeBackground6': alpha(
      ensureContrast(yellow.muted, bg.editor, 2.5),
      0.6
    ),
    'editorOverviewRuler.border': ensureContrast(border.ui, bg.main, 2.0),
    'editorOverviewRuler.errorForeground': ensureContrast(
      red.dark,
      bg.main,
      3.0
    ),
    'editorOverviewRuler.warningForeground': ensureContrast(
      yellow.main,
      bg.main,
      3.0
    ),
    'editorOverviewRuler.infoForeground': ensureContrast(
      elements.info,
      bg.main,
      3.0
    ),
    'editorOverviewRuler.bracketMatchForeground': alpha(bg.darker, 0.5),
    'editorOverviewRuler.findMatchForeground': alpha(
      ensureContrast(fg.brighter, bg.main, 2.0),
      0.4
    ),
    'editorOverviewRuler.rangeHighlightForeground': alpha(
      ensureContrast(fg.brighter, bg.main, 2.0),
      0.4
    ),
    'editorOverviewRuler.selectionHighlightForeground': alpha(
      ensureContrast(fg.brighter, bg.main, 2.0),
      0.2
    ),
    'editorOverviewRuler.wordHighlightForeground': alpha(
      ensureContrast(purple.light, bg.main, 2.5),
      0.4
    ),
    'editorOverviewRuler.wordHighlightStrongForeground': alpha(
      ensureContrast(purple.light, bg.main, 3.0),
      0.5
    ),
    'editorOverviewRuler.modifiedForeground': git.modified,
    'editorOverviewRuler.addedForeground': git.added,
    'editorOverviewRuler.deletedForeground': git.deleted,
    'editorRuler.foreground': bg.darker,
    'editorError.foreground': ensureContrast(red.dark, bg.editor, 4.5),
    'editorWarning.foreground': ensureContrast(yellow.main, bg.editor, 4.5),
    'editorInfo.foreground': ensureContrast(cyan.medium, bg.editor, 4.5),
    'editorHint.foreground': ensureContrast(cyan.medium, bg.editor, 3.0),
    'editorGutter.modifiedBackground': ensureContrast(
      git.modified,
      bg.editor,
      2.5
    ),
    'editorGutter.addedBackground': ensureContrast(git.added, bg.editor, 2.5),
    'editorGutter.deletedBackground': ensureContrast(
      git.deletedDark,
      bg.editor,
      2.5
    ),
    'editorGhostText.foreground': ensureContrast(
      special.ghostText,
      bg.editor,
      2.0
    ),
    'minimapGutter.modifiedBackground': git.modifiedMinimap,
    'minimapGutter.addedBackground': git.addedMinimap,
    'minimapGutter.deletedBackground': git.deletedMinimap,
    'sideBySideEditor.border': ensureContrast(border.ui, bg.editor, 2.0),
    'editorGroup.border': ensureContrast(border.ui, bg.editor, 2.0),
    'editorGroup.dropBackground': alpha(bg.lighter, 0.3),
    'editorGroupHeader.tabsBorder': ensureContrast(bg.darker, bg.main, 1.5),
    'editorGroupHeader.tabsBackground': bg.main,
    'editorGroupHeader.noTabsBackground': bg.main,
    'editorGroupHeader.border': ensureContrast(border.ui, bg.main, 2.0),
    'editorPane.background': bg.editor,
    'editorWidget.foreground': ensureContrast(fg.medium, bg.main, 4.5),
    'editorWidget.background': bg.main,
    'editorWidget.border': ensureContrast(border.ui, bg.main, 2.0),
    'editorWidget.resizeBorder': alpha(
      ensureContrast(special.disabled, bg.main, 2.0),
      0.5
    ),
    'editorSuggestWidget.background': bg.main,
    'editorSuggestWidget.border': ensureContrast(border.ui, bg.main, 2.0),
    'editorSuggestWidget.selectedBackground': ensureContrast(
      interactive.selected,
      bg.main,
      2.0
    ),
    'editorSuggestWidget.highlightForeground': ensureContrast(
      blue.light,
      bg.main,
      4.5
    ),
    'editorCodeLens.foreground': ensureContrast(ui.codeLens, bg.editor, 2.5),
    'editorLightBulb.foreground': ensureContrast(yellow.main, bg.editor, 4.5),
    'editorLightBulbAutoFix.foreground': ensureContrast(
      yellow.main,
      bg.editor,
      4.5
    ),
    'editorInlayHint.foreground': ensureContrast(
      special.ghostText,
      bg.editor,
      2.5
    ),
    'peekView.border': ensureContrast(border.ui, bg.main, 2.0),
    'peekViewEditor.background': bg.main,
    'peekViewEditor.matchHighlightBackground': alpha(enhancedSearchMatch, 0.7),
    'peekViewTitle.background': bg.darker,
    'peekViewTitleLabel.foreground': ensureContrast(
      fg.brighter,
      bg.darker,
      4.5
    ),
    'peekViewTitleDescription.foreground': ensureContrast(
      fg.medium,
      bg.darker,
      3.0
    ),
    'peekViewResult.background': bg.darker,
    'peekViewResult.selectionForeground': ensureContrast(
      fg.brighter,
      enhancedSearchMatch,
      4.5
    ),
    'peekViewResult.selectionBackground': alpha(enhancedSearchMatch, 0.5),
    'peekViewResult.lineForeground': ensureContrast(
      fg.brighter,
      bg.darker,
      4.5
    ),
    'peekViewResult.fileForeground': ensureContrast(fg.medium, bg.darker, 3.0),
    'peekViewResult.matchHighlightBackground': alpha(enhancedSearchMatch, 0.5),
  }
}
