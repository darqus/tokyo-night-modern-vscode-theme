import { c, colorRules } from '../../utils/color-builder.js'
import { borderColor } from '../../utils/color-helpers.js'

export function generateMiscColors(): Record<string, string> {
  return colorRules()
    .addGroup('walkThrough', {
      embeddedEditorBackground: c.bg.main,
    })
    .add('textPreformat.foreground', c.blue.main)
    .add('textBlockQuote.background', c.bg.dark)
    .add('textCodeBlock.background', c.bg.dark)
    .add('textSeparator.foreground', c.neutral.main)
    .add('debugConsole.infoForeground', c.blue.main)
    .add('debugConsole.errorForeground', c.red.main)
    .add('debugConsole.sourceForeground', c.fg.main)
    .add('debugConsole.warningForeground', c.yellow.main)
    .add('debugConsoleInputIcon.foreground', c.blue.main)
    .add('editor.stackFrameHighlightBackground', `${c.yellow.main}40`)
    .add('editor.focusedStackFrameHighlightBackground', `${c.green.main}40`)
    .add('debugView.stateLabelForeground', c.fg.main)
    .add('debugView.stateLabelBackground', c.bg.dark)
    .add('debugView.valueChangedHighlight', c.yellow.main)
    .add('debugTokenExpression.name', c.blue.main)
    .add('debugTokenExpression.value', c.fg.bright)
    .add('debugTokenExpression.string', c.green.bright)
    .add('debugTokenExpression.boolean', c.orange.main)
    .add('debugTokenExpression.number', c.orange.bright)
    .add('debugTokenExpression.error', c.red.main)
    .add('debugIcon.breakpointForeground', c.red.main)
    .add('debugIcon.breakpointDisabledForeground', c.red.dark)
    .add('debugIcon.breakpointUnverifiedForeground', c.yellow.main)
    .add('notebook.editorBackground', c.bg.main)
    .add('notebook.cellEditorBackground', c.bg.main)
    .add('notebook.cellBorderColor', c.neutral.main)
    .add('notebook.focusedCellBorder', c.blue.main)
    .add('notebook.cellStatusBarItemHoverBackground', c.bg.main)
    .add('merge.currentHeaderBackground', `${c.green.main}40`)
    .add('merge.currentContentBackground', `${c.green.main}20`)
    .add('merge.incomingHeaderBackground', `${c.blue.main}40`)
    .add('merge.incomingContentBackground', `${c.blue.main}20`)
    .add('mergeEditor.change.background', `${c.blue.main}20`)
    .add('mergeEditor.change.word.background', `${c.blue.main}40`)
    .add('mergeEditor.conflict.unhandledUnfocused.border', c.orange.main)
    .add('mergeEditor.conflict.unhandledFocused.border', c.orange.light)
    .add('mergeEditor.conflict.handledUnfocused.border', c.blue.main)
    .add('mergeEditor.conflict.handledFocused.border', c.blue.light)
    .add('mergeEditor.conflict.handled.minimapOverViewRuler', c.blue.main)
    .add('mergeEditor.conflict.unhandled.minimapOverViewRuler', c.orange.main)
    .add('gitlens.trailingLineForegroundColor', c.fg.dark)
    .add('gitlens.gutterUncommittedForegroundColor', c.blue.main)
    .add('gitlens.gutterForegroundColor', c.fg.main)
    .add('gitlens.gutterBackgroundColor', c.bg.dark)
    .add('notificationCenterHeader.background', c.bg.main)
    .add('notifications.background', c.bg.dark)
    .add('notificationLink.foreground', c.blue.main)
    .add('notificationsErrorIcon.foreground', c.red.main)
    .add('notificationsWarningIcon.foreground', c.yellow.main)
    .add('notificationsInfoIcon.foreground', c.blue.main)
    .addGroup('text', {
      blockQuoteBackground: c.bg.dark,
      blockQuoteBorder: c.blue.main,
      codeBlockBackground: c.bg.dark,
      codeBlockForeground: c.fg.bright,
      linkActiveForeground: c.blue.light,
      linkForeground: c.blue.main,
      preformatForeground: c.blue.main,
      separatorForeground: c.neutral.main,
    })
    .addGroup('textLink', {
      foreground: c.blue.main,
      activeForeground: c.blue.light,
    })
    .addGroup('debug', {
      tokenExpressionName: c.blue.main,
      tokenExpressionValue: c.fg.bright,
      tokenExpressionString: c.green.bright,
      tokenExpressionBoolean: c.orange.main,
      tokenExpressionNumber: c.orange.bright,
      tokenExpressionError: c.red.main,
      viewExceptionLabelForeground: c.fg.main,
      viewStateExceptionLabelForeground: c.fg.main,
      viewStateLabelForeground: c.fg.main,
      viewValueChangedHighlight: c.yellow.main,
      consoleInputIconForeground: c.blue.main,
      toolbarIconHoverBackground: c.bg.main,
      toolbarBackground: c.bg.dark,
      toolbarHoverBackground: c.bg.main,
      breakpointForeground: c.red.main,
      breakpointDisabledForeground: c.red.dark,
      breakpointUnverifiedForeground: c.yellow.main,
      breakpointCurrentStackframeForeground: c.yellow.bright,
      breakpointStackframeForeground: c.orange.bright,
      debugConsoleInfoForeground: c.blue.main,
      debugConsoleWarningForeground: c.yellow.main,
      debugConsoleErrorForeground: c.red.main,
      debugConsoleSourceForeground: c.fg.main,
      debugTokenExpressionString: c.green.bright,
      debugTokenExpressionBoolean: c.orange.main,
      debugTokenExpressionNumber: c.orange.bright,
      debugTokenExpressionError: c.red.main,
      debugViewValueAttributeForeground: c.fg.bright,
      debugViewValueHintForeground: c.fg.main,
      debugViewValueChangedHighlight: c.yellow.main,
    })
    .addGroup('debugExceptionWidget', {
      border: borderColor(c.bg.main, c.red.main),
      background: c.bg.dark,
    })
    .addGroup('debugToolBar', {
      background: c.bg.dark,
    })
    .addGroup('editor', {
      stackFrameHighlightBackground: `${c.yellow.main}40`,
      focusedStackFrameHighlightBackground: `${c.green.main}40`,
      warningHighlightBackground: `${c.yellow.main}40`,
      rulerForeground: c.neutral.dark,
    })
    .addGroup('editorBracketMatch', {
      background: `${c.blue.main}40`,
      border: c.blue.light,
    })
    .addGroup('editorCursor', {
      background: c.bg.main,
      foreground: c.blue.main,
    })
    .addGroup('editorError', {
      background: `${c.red.dark}20`,
      border: c.red.main,
      foreground: c.red.main,
    })
    .addGroup('editorHint', {
      border: c.green.main,
      foreground: c.green.main,
    })
    .addGroup('editorInfo', {
      background: `${c.blue.dark}20`,
      border: c.blue.main,
      foreground: c.blue.main,
    })
    .addGroup('editorWarning', {
      background: `${c.yellow.dark}20`,
      border: c.yellow.main,
      foreground: c.yellow.main,
    })
    .addGroup('editorUnnecessary', {
      background: `${c.red.dark}20`,
      foreground: c.fg.dark,
    })
    .addGroup('editorGutter', {
      commentRangeForeground: c.fg.dark,
      commentForeground: c.blue.main,
      commentUnresolvedForeground: c.blue.light,
    })
    .addGroup('editorHint', {
      border: c.green.main,
    })
    .addGroup('problems', {
      errorIconForeground: c.red.main,
      warningIconForeground: c.yellow.main,
      infoIconForeground: c.blue.main,
    })
    .addGroup('charts', {
      foreground: c.fg.main,
      lines: c.neutral.main,
      red: c.red.main,
      blue: c.blue.main,
      yellow: c.yellow.main,
      orange: c.orange.main,
      green: c.green.main,
      purple: c.purple.main,
    })
    .addGroup('notebook', {
      editorBackground: c.bg.main,
      cellBorderColor: c.neutral.dark,
      focusedCellBorder: c.blue.main,
      selectedCellBorder: c.neutral.main,
      cellStatusBarItemHoverBackground: c.bg.main,
      cellToolbarSeparator: c.neutral.main,
      insetBorderColor: c.neutral.main,
      outputContainerBorderColor: c.neutral.main,
      symbolIconVariableForeground: c.cyan.bright,
      symbolIconFieldForeground: c.cyan.main,
      symbolIconMethodForeground: c.purple.light,
    })
    .addGroup('scmGraph', {
      historyItemHoverLabelForeground: c.fg.bright,
      foreground1: c.blue.main,
      foreground2: c.green.main,
      foreground3: c.yellow.main,
      foreground4: c.red.main,
      foreground5: c.purple.main,
      historyItemHoverAdditionsForeground: c.green.main,
      historyItemHoverDeletionsForeground: c.red.main,
      historyItemRefColor: c.orange.main,
      historyItemRemoteRefColor: c.purple.main,
      historyItemBaseRefColor: c.yellow.main,
      historyItemHoverDefaultLabelForeground: c.fg.main,
    })
    .addGroup('merge', {
      currentHeaderBackground: `${c.green.main}40`,
      currentContentBackground: `${c.green.main}20`,
      incomingHeaderBackground: `${c.blue.main}40`,
      incomingContentBackground: `${c.blue.main}20`,
      border: c.neutral.main,
      incomingContent: c.blue.main,
      incomingHeader: c.blue.light,
      currentContent: c.green.main,
      currentHeader: c.green.light,
    })
    .addGroup('mergeEditor', {
      changeBackground: `${c.blue.main}20`,
      changeWordBackground: `${c.blue.main}40`,
      conflictUnhandledUnfocusedBorder: c.orange.main,
      conflictUnhandledFocusedBorder: c.orange.light,
      conflictHandledUnfocusedBorder: c.blue.main,
      conflictHandledFocusedBorder: c.blue.light,
      conflictHandledMinimapOverViewRuler: c.blue.main,
      conflictUnhandledMinimapOverViewRuler: c.orange.main,
      conflictLabelForeground: c.fg.main,
      headingBackground: c.bg.dark,
      headingForeground: c.fg.main,
    })
    .addGroup('gitlens', {
      trailingLineForegroundColor: c.fg.dark,
      gutterUncommittedForegroundColor: c.blue.main,
      gutterForegroundColor: c.fg.main,
      gutterBackgroundColor: c.bg.dark,
      blameHighlightBackgroundColor: c.bg.light,
      blameHighlightForegroundColor: c.fg.main,
      lineHighlightBackgroundColor: c.bg.light,
      lineHighlightForegroundColor: c.fg.main,
      commandIconForegroundColor: c.fg.main,
      decorationsAddedForegroundColor: c.green.main,
      decorationsModifiedForegroundColor: c.yellow.main,
      decorationsDeletedForegroundColor: c.red.main,
      decorationsRenamedForegroundColor: c.blue.light,
      decorationsUntrackedForegroundColor: c.blue.main,
      decorationsIgnoredForegroundColor: c.fg.dark,
      decorationsStageAddedForegroundColor: c.green.light,
      decorationsStageDeletedForegroundColor: c.red.light,
      decorationsStagedForegroundColor: c.blue.main,
      decorationsWorkspaceAddedForegroundColor: c.green.main,
      decorationsWorkspaceModifiedForegroundColor: c.yellow.main,
      decorationsWorkspaceDeletedForegroundColor: c.red.main,
      decorationsWorkspaceRenamedForegroundColor: c.blue.light,
      decorationsWorkspaceUntrackedForegroundColor: c.blue.main,
    })
    .addGroup('notifications', {
      background: c.bg.dark,
      foreground: c.fg.main,
      errorIconForeground: c.red.main,
      warningIconForeground: c.yellow.main,
      infoIconForeground: c.blue.main,
      buttonBackground: c.blue.main,
      buttonForeground: c.ui.white,
      buttonHoverBackground: c.blue.light,
      buttonSecondaryBackground: c.neutral.main,
      buttonSecondaryForeground: c.ui.white,
      buttonSecondaryHoverBackground: c.neutral.light,
      toastBorder: c.blue.main,
    })
    .addGroup('notificationCenter', {
      headerForeground: c.fg.main,
      headerBackground: c.bg.main,
      border: c.neutral.main,
    })
    .addGroup('notificationLink', {
      foreground: c.blue.main,
    })
    .addGroup('menubar', {
      selectionForeground: c.fg.bright,
      selectionBackground: c.bg.dark,
      selectionBorder: c.blue.main,
    })
    .addGroup('menu', {
      foreground: c.fg.main,
      background: c.bg.dark,
      selectionForeground: c.fg.bright,
      selectionBackground: c.blue.main,
      selectionBorder: c.blue.main,
      separatorBackground: c.neutral.main,
      border: c.neutral.main,
    })
    .addGroup('chat', {
      requestBorder: c.neutral.main,
      avatarBackground: c.bg.light,
      avatarForeground: c.fg.main,
      slashCommandBackground: c.bg.main,
      slashCommandForeground: c.blue.main,
    })
    .addGroup('inlineChat', {
      background: c.bg.dark,
      border: c.neutral.main,
      regionHeaderBackground: c.bg.main,
      regionHeaderBorder: c.neutral.main,
      regionInputBorder: c.neutral.main,
      regionContentBackground: c.bg.main,
      regionContentBorder: c.neutral.main,
      foreground: c.fg.main,
    })
    .addGroup('inlineChatInput', {
      background: c.bg.main,
      border: c.neutral.main,
    })
    .addGroup('inlineChatDiff', {
      inserted: `${c.green.main}40`,
      removed: `${c.red.main}40`,
    })
    .build()
}
