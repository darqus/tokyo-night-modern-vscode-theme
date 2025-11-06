import { alpha, lighten, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'

export function generateMiscColors(): Record<string, string> {
  const {
    bg,
    fg,
    blue,
    yellow,
    red,
    cyan,
    pink,
    magenta,
    green,
    purple,
    orange,
    teal,
    neutral,
  } = c

  const builder = colorRules()

  return builder
    .add('walkThrough.embeddedEditorBackground', bg.main)
    .add('textLink.foreground', blue.light)
    .add('textLink.activeForeground', lighten(blue.light, 0.2))
    .add('textPreformat.foreground', fg.main)
    .add('textBlockQuote.background', bg.main)
    .add('textCodeBlock.background', bg.main)
    .add('textSeparator.foreground', lighten(bg.main, 0.15))
    .add('debugExceptionWidget.border', red.dark)
    .add('debugExceptionWidget.background', bg.dark)
    .add('debugToolBar.background', bg.dark)
    .add('debugConsole.infoForeground', fg.main)
    .add('debugConsole.errorForeground', red.dark)
    .add('debugConsole.sourceForeground', fg.main)
    .add('debugConsole.warningForeground', yellow.dark)
    .add('debugConsoleInputIcon.foreground', teal.main)
    .add('editor.stackFrameHighlightBackground', alpha(yellow.dark, 0.125))
    .add('editor.focusedStackFrameHighlightBackground', alpha(teal.main, 0.125))
    .add('debugView.stateLabelForeground', fg.main)
    .add('debugView.stateLabelBackground', bg.dark)
    .add('debugView.valueChangedHighlight', alpha(blue.dark, 0.67))
    .add('debugTokenExpression.name', cyan.light)
    .add('debugTokenExpression.value', fg.light)
    .add('debugTokenExpression.string', green.main)
    .add('debugTokenExpression.boolean', orange.main)
    .add('debugTokenExpression.number', orange.main)
    .add('debugTokenExpression.error', red.dark)
    .add('debugIcon.breakpointForeground', red.dark)
    .add('debugIcon.breakpointDisabledForeground', bg.light)
    .add('debugIcon.breakpointUnverifiedForeground', red.dark)
    .add('notebook.editorBackground', bg.light)
    .add('notebook.cellEditorBackground', bg.main)
    .add('notebook.cellBorderColor', bg.dark)
    .add('notebook.focusedCellBorder', mix(bg.main, blue.main, 0.2))
    .add('notebook.cellStatusBarItemHoverBackground', alpha(blue.main, 0.15))
    .add('charts.red', red.main)
    .add('charts.blue', blue.main)
    .add('charts.yellow', yellow.main)
    .add('charts.orange', orange.main)
    .add('charts.green', blue.main)
    .add('charts.purple', purple.dark)
    .add('charts.foreground', fg.light)
    .add('charts.lines', bg.main)
    .add('scmGraph.historyItemHoverLabelForeground', bg.dark)
    .add('scmGraph.foreground1', blue.main)
    .add('scmGraph.foreground2', purple.main)
    .add('scmGraph.foreground3', cyan.main)
    .add('scmGraph.foreground4', pink.main)
    .add('scmGraph.foreground5', magenta.main)
    .add('scmGraph.historyItemHoverAdditionsForeground', green.dark)
    .add('scmGraph.historyItemHoverDeletionsForeground', red.main)
    .add('scmGraph.historyItemRefColor', blue.main)
    .add('scmGraph.historyItemRemoteRefColor', purple.main)
    .add('scmGraph.historyItemBaseRefColor', cyan.main)
    .add('scmGraph.historyItemHoverDefaultLabelForeground', fg.light)
    .add('merge.currentHeaderBackground', alpha(green.dark, 0.15))
    .add('merge.currentContentBackground', alpha(teal.dark, 0.27))
    .add('merge.incomingHeaderBackground', alpha(blue.dark, 0.67))
    .add('merge.incomingContentBackground', alpha(blue.dark, 0.27))
    .add('mergeEditor.change.background', alpha(green.dark, 0.15))
    .add('mergeEditor.change.word.background', alpha(green.dark, 0.25))
    .add(
      'mergeEditor.conflict.unhandledUnfocused.border',
      alpha(yellow.main, 0.53)
    )
    .add(
      'mergeEditor.conflict.unhandledFocused.border',
      alpha(yellow.main, 0.69)
    )
    .add(
      'mergeEditor.conflict.handledUnfocused.border',
      alpha(green.dark, 0.15)
    )
    .add('mergeEditor.conflict.handledFocused.border', alpha(green.dark, 0.4))
    .add('mergeEditor.conflict.handled.minimapOverViewRuler', teal.dark)
    .add('mergeEditor.conflict.unhandled.minimapOverViewRuler', yellow.main)
    .add('gitlens.trailingLineForegroundColor', neutral.dark)
    .add('gitlens.gutterUncommittedForegroundColor', blue.main)
    .add('gitlens.gutterForegroundColor', fg.main)
    .add('gitlens.gutterBackgroundColor', bg.main)
    .add('notificationCenterHeader.background', bg.main)
    .add('notifications.background', bg.main)
    .add('notificationLink.foreground', blue.light)
    .add('notificationsErrorIcon.foreground', red.dark)
    .add('notificationsWarningIcon.foreground', yellow.main)
    .add('notificationsInfoIcon.foreground', cyan.main)
    .add('menubar.selectionForeground', fg.light)
    .add('menubar.selectionBackground', alpha(blue.main, 0.2))
    .add('menubar.selectionBorder', lighten(bg.main, 0.04))
    .add('menu.foreground', fg.main)
    .add('menu.background', bg.main)
    .add('menu.selectionForeground', lighten(fg.light, 0.4))
    .add('menu.selectionBackground', alpha(blue.main, 0.25))
    .add('menu.separatorBackground', lighten(bg.main, 0.06))
    .add('menu.border', mix(bg.main, blue.main, 0.2))
    .add('chat.requestBorder', bg.light)
    .add('chat.avatarBackground', blue.dark)
    .add('chat.avatarForeground', fg.light)
    .add('chat.slashCommandBackground', bg.dark)
    .add('chat.slashCommandForeground', blue.main)
    .add('inlineChat.foreground', fg.light)
    .add('inlineChatInput.background', bg.light)
    .add('inlineChatDiff.inserted', alpha(green.dark, 0.25))
    .add('inlineChatDiff.removed', alpha(red.dark, 0.26))
    .build()
}
