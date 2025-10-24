import { palette } from '../../palette'
import { alpha, lighten } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateMiscColors(): Record<string, string> {
  const {
    bg,
    fg,
    blue,
    yellow,
    red,
    cyan,
    green,
    purple,
    orange,
    teal,
    special,
    border,
  } = palette

  return {
    'walkThrough.embeddedEditorBackground': bg.main,
    'textLink.foreground': ensureContrast(cyan.light, bg.main, 4.5),
    'textLink.activeForeground': ensureContrast(
      lighten(cyan.light, 0.2),
      bg.main,
      4.5
    ),
    'textPreformat.foreground': ensureContrast(
      palette.ui.preformat,
      bg.main,
      4.5
    ),
    'textBlockQuote.background': bg.main,
    'textCodeBlock.background': bg.main,
    'textSeparator.foreground': ensureContrast(
      special.indentActive,
      bg.main,
      3.0
    ),
    'debugExceptionWidget.border': ensureContrast(
      palette.ui.debugException,
      bg.darker,
      3.0
    ),
    'debugExceptionWidget.background': bg.darker,
    'debugToolBar.background': bg.darker,
    'debugConsole.infoForeground': ensureContrast(fg.medium, bg.darker, 4.5),
    'debugConsole.errorForeground': ensureContrast(
      palette.ui.debugError,
      bg.darker,
      4.5
    ),
    'debugConsole.sourceForeground': ensureContrast(fg.medium, bg.darker, 4.5),
    'debugConsole.warningForeground': ensureContrast(
      yellow.muted,
      bg.darker,
      4.5
    ),
    'debugConsoleInputIcon.foreground': ensureContrast(
      teal.main,
      bg.darker,
      4.5
    ),
    'editor.stackFrameHighlightBackground': alpha(
      ensureContrast(palette.ui.stackFrameHighlight, bg.editor, 2.0),
      0.2
    ),
    'editor.focusedStackFrameHighlightBackground': alpha(
      ensureContrast(teal.main, bg.editor, 2.5),
      0.2
    ),
    'debugView.stateLabelForeground': ensureContrast(fg.medium, bg.dark, 4.5),
    'debugView.stateLabelBackground': bg.dark,
    'debugView.valueChangedHighlight': alpha(
      ensureContrast(blue.primary, bg.dark, 3.0),
      0.7
    ),
    'debugTokenExpression.name': ensureContrast(cyan.light, bg.darker, 4.5),
    'debugTokenExpression.value': ensureContrast(fg.bright, bg.darker, 4.5),
    'debugTokenExpression.string': ensureContrast(green.main, bg.darker, 4.5),
    'debugTokenExpression.boolean': ensureContrast(orange, bg.darker, 4.5),
    'debugTokenExpression.number': ensureContrast(orange, bg.darker, 4.5),
    'debugTokenExpression.error': ensureContrast(
      palette.ui.debugError,
      bg.darker,
      4.5
    ),
    'debugIcon.breakpointForeground': ensureContrast(red.dark, bg.main, 4.5),
    'debugIcon.breakpointDisabledForeground': ensureContrast(
      palette.ui.debugBreakpointDisabled,
      bg.main,
      3.0
    ),
    'debugIcon.breakpointUnverifiedForeground': ensureContrast(
      palette.ui.debugBreakpointUnverified,
      bg.main,
      3.0
    ),
    'notebook.editorBackground': bg.editor,
    'notebook.cellEditorBackground': bg.main,
    'notebook.cellBorderColor': ensureContrast(bg.darker, bg.main, 1.5),
    'notebook.focusedCellBorder': ensureContrast(border.ui, bg.main, 2.0),
    'notebook.cellStatusBarItemHoverBackground': alpha(bg.light, 0.3),
    'charts.red': ensureContrast(red.main, bg.main, 4.5),
    'charts.blue': ensureContrast(blue.medium, bg.main, 4.5),
    'charts.yellow': ensureContrast(yellow.main, bg.main, 4.5),
    'charts.orange': ensureContrast(orange, bg.main, 4.5),
    'charts.green': ensureContrast(green.dark, bg.main, 4.5),
    'charts.purple': ensureContrast(purple.dark, bg.main, 4.5),
    'charts.foreground': ensureContrast(fg.bright, bg.main, 4.5),
    'charts.lines': bg.main,
    'scmGraph.historyItemHoverLabelForeground': ensureContrast(
      palette.ui.scmGraphHover,
      bg.main,
      4.5
    ),
    'scmGraph.foreground1': ensureContrast(orange, bg.main, 4.5),
    'scmGraph.foreground2': ensureContrast(yellow.main, bg.main, 4.5),
    'scmGraph.foreground3': ensureContrast(green.dark, bg.main, 4.5),
    'scmGraph.foreground4': ensureContrast(blue.medium, bg.main, 4.5),
    'scmGraph.foreground5': ensureContrast(purple.light, bg.main, 4.5),
    'scmGraph.historyItemHoverAdditionsForeground': ensureContrast(
      green.dark,
      bg.main,
      4.5
    ),
    'scmGraph.historyItemHoverDeletionsForeground': ensureContrast(
      red.main,
      bg.main,
      4.5
    ),
    'scmGraph.historyItemRefColor': ensureContrast(
      palette.ui.scmGraphRef,
      bg.main,
      3.0
    ),
    'scmGraph.historyItemRemoteRefColor': ensureContrast(
      green.dark,
      bg.main,
      4.5
    ),
    'scmGraph.historyItemBaseRefColor': ensureContrast(
      purple.dark,
      bg.main,
      4.5
    ),
    'scmGraph.historyItemHoverDefaultLabelForeground': ensureContrast(
      fg.brighter,
      bg.main,
      4.5
    ),
    'merge.currentHeaderBackground': alpha(
      ensureContrast(green.dark, bg.editor, 2.5),
      0.2
    ),
    'merge.currentContentBackground': alpha(
      ensureContrast(teal.dark, bg.editor, 2.0),
      0.3
    ),
    'merge.incomingHeaderBackground': alpha(
      ensureContrast(blue.primary, bg.editor, 3.0),
      0.7
    ),
    'merge.incomingContentBackground': alpha(
      ensureContrast(blue.primary, bg.editor, 2.0),
      0.3
    ),
    'mergeEditor.change.background': alpha(
      ensureContrast(green.dark, bg.editor, 2.0),
      0.2
    ),
    'mergeEditor.change.word.background': alpha(
      ensureContrast(green.dark, bg.editor, 2.5),
      0.3
    ),
    'mergeEditor.conflict.unhandledUnfocused.border': alpha(
      ensureContrast(yellow.main, bg.editor, 3.0),
      0.6
    ),
    'mergeEditor.conflict.unhandledFocused.border': alpha(
      ensureContrast(yellow.main, bg.editor, 3.5),
      0.7
    ),
    'mergeEditor.conflict.handledUnfocused.border': alpha(
      ensureContrast(green.dark, bg.editor, 2.0),
      0.2
    ),
    'mergeEditor.conflict.handledFocused.border': alpha(
      ensureContrast(green.dark, bg.editor, 2.5),
      0.4
    ),
    'mergeEditor.conflict.handled.minimapOverViewRuler': ensureContrast(
      teal.dark,
      bg.main,
      3.0
    ),
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': ensureContrast(
      yellow.main,
      bg.main,
      3.5
    ),
    'gitlens.trailingLineForegroundColor': ensureContrast(
      special.ghostText,
      bg.editor,
      2.5
    ),
    'gitlens.gutterUncommittedForegroundColor': ensureContrast(
      blue.medium,
      bg.main,
      4.5
    ),
    'gitlens.gutterForegroundColor': ensureContrast(fg.medium, bg.main, 4.5),
    'gitlens.gutterBackgroundColor': bg.main,
    'notificationCenterHeader.background': bg.darker,
    'notifications.background': bg.darker,
    'notificationLink.foreground': ensureContrast(blue.light, bg.darker, 4.5),
    'notificationsErrorIcon.foreground': ensureContrast(
      palette.ui.notificationError,
      bg.darker,
      4.5
    ),
    'notificationsWarningIcon.foreground': ensureContrast(
      palette.ui.notificationWarning,
      bg.darker,
      4.5
    ),
    'notificationsInfoIcon.foreground': ensureContrast(
      cyan.medium,
      bg.darker,
      4.5
    ),
    'menubar.selectionForeground': ensureContrast(fg.brighter, bg.lighter, 4.5),
    'menubar.selectionBackground': bg.lighter,
    'menubar.selectionBorder': ensureContrast(
      palette.ui.menubarSelection,
      bg.main,
      2.0
    ),
    'menu.foreground': ensureContrast(fg.medium, bg.main, 4.5),
    'menu.background': bg.main,
    'menu.selectionForeground': ensureContrast(fg.brighter, bg.lighter, 4.5),
    'menu.selectionBackground': bg.lighter,
    'menu.separatorBackground': ensureContrast(border.ui, bg.main, 2.0),
    'menu.border': ensureContrast(border.ui, bg.main, 2.0),
    'chat.requestBorder': ensureContrast(bg.lighter, bg.main, 2.0),
    'chat.avatarBackground': ensureContrast(blue.primary, bg.main, 3.0),
    'chat.avatarForeground': ensureContrast(fg.brighter, blue.primary, 4.5),
    'chat.slashCommandBackground': bg.dark,
    'chat.slashCommandForeground': ensureContrast(blue.medium, bg.dark, 4.5),
    'inlineChat.foreground': ensureContrast(fg.brighter, bg.main, 4.5),
    'inlineChatInput.background': bg.dark,
    'inlineChatDiff.inserted': alpha(
      ensureContrast(green.dark, bg.main, 3.0),
      0.3
    ),
    'inlineChatDiff.removed': alpha(
      ensureContrast(red.dark, bg.main, 3.0),
      0.3
    ),
  }
}
