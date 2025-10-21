import { baseColors } from '../palette/base-colors'
import { withAlpha } from '../palette/generators'
import { baseTokenColors } from '../palette/token-colors'
import type { VSCodeTheme } from '../palette/types'

/**
 * Генератор семантических токенов для Tokyo Night
 */
export const generateTokyoNightSemanticTokenColors = () => {
  return {
    'parameter.declaration': {
      foreground: baseTokenColors.semantic['parameter.declaration'],
    },
    parameter: {
      foreground: baseTokenColors.semantic.parameter,
    },
    'property.declaration': {
      foreground: baseTokenColors.semantic['property.declaration'],
    },
    'property.defaultLibrary': {
      foreground: baseTokenColors.semantic['property.defaultLibrary'],
    },
    '*.defaultLibrary': {
      foreground: baseTokenColors.semantic['variable.defaultLibrary'],
    },
    'variable.defaultLibrary': {
      foreground: baseTokenColors.semantic['variable.defaultLibrary'],
    },
    'variable.declaration': {
      foreground: baseTokenColors.semantic['variable.declaration'],
    },
    variable: {
      foreground: baseTokenColors.semantic.variable,
    },
    namespace: {
      foreground: baseTokenColors.semantic.namespace,
    },
    type: {
      foreground: baseTokenColors.semantic.type,
    },
    class: {
      foreground: baseTokenColors.semantic.class,
    },
    interface: {
      foreground: baseTokenColors.semantic.interface,
      fontStyle: 'italic',
    },
    'variable.readonly': {
      foreground: baseTokenColors.semantic['variable.readonly'],
    },
    method: {
      foreground: baseTokenColors.semantic.method,
    },
    function: {
      foreground: baseTokenColors.semantic.function,
    },
    enum: {
      foreground: baseTokenColors.semantic.enum,
    },
    enumMember: {
      foreground: baseTokenColors.semantic.enumMember,
    },
    struct: {
      foreground: baseTokenColors.semantic.struct,
    },
    typeParameter: {
      foreground: baseTokenColors.semantic.typeParameter,
    },
    macro: {
      foreground: baseTokenColors.semantic.macro,
    },
    label: {
      foreground: baseTokenColors.semantic.label,
    },
    comment: {
      foreground: baseTokenColors.semantic.comment,
    },
    string: {
      foreground: baseTokenColors.semantic.string,
    },
    number: {
      foreground: baseTokenColors.semantic.number,
    },
    boolean: {
      foreground: baseTokenColors.semantic.boolean,
    },
    regexp: {
      foreground: baseTokenColors.semantic.regexp,
    },
    operator: {
      foreground: baseTokenColors.semantic.operator,
    },
    keyword: {
      foreground: baseTokenColors.semantic.keyword,
    },
    modifier: {
      foreground: baseTokenColors.semantic.modifier,
    },
    decorator: {
      foreground: baseTokenColors.semantic.decorator,
    },
    selfKeyword: {
      foreground: baseTokenColors.semantic.selfKeyword,
    },
    selfTypeKeyword: {
      foreground: baseTokenColors.semantic.selfTypeKeyword,
    },
    this: {
      foreground: baseTokenColors.semantic.this,
    },
    nil: {
      foreground: baseTokenColors.semantic.nil,
    },
    null: {
      foreground: baseTokenColors.semantic.null,
    },
    undefined: {
      foreground: baseTokenColors.semantic.undefined,
    },
  }
}

/**
 * Генератор цветов интерфейса (workbench colors) для Tokyo Night
 */
export const generateTokyoNightWorkbenchColors = () => {
  // Используем точные цвета из оригинальной темы
  return {
    foreground: baseColors.foreground.secondary,
    descriptionForeground: baseColors.foreground.hint,
    disabledForeground: baseColors.foreground.disabled,
    focusBorder: withAlpha(baseColors.foreground.disabled, 0.2),
    errorForeground: baseColors.foreground.hint,
    'widget.shadow': '#ffffff0',
    'scrollbar.shadow': '#0003',
    'badge.background': withAlpha(baseColors.accent.primary, 0.19),
    'badge.foreground': baseColors.neutral.light,
    'icon.foreground': baseColors.foreground.secondary,
    'settings.headerForeground': '#6183bb',
    'window.activeBorder': baseColors.neutral.dark,
    'window.inactiveBorder': baseColors.neutral.dark,
    'sash.hoverBorder': '#29355a',
    'toolbar.activeBackground': '#202330',
    'toolbar.hoverBackground': '#202330',
    'extensionButton.prominentBackground': withAlpha(
      baseColors.accent.primary,
      0.87
    ),
    'extensionButton.prominentHoverBackground': withAlpha(
      baseColors.accent.primary,
      0.67
    ),
    'extensionButton.prominentForeground': '#ffffff',
    'extensionBadge.remoteBackground': baseColors.accent.primary,
    'extensionBadge.remoteForeground': '#ffffff',
    'button.background': withAlpha(baseColors.accent.primary, 0.87),
    'button.hoverBackground': withAlpha(baseColors.accent.primary, 0.67),
    'button.secondaryBackground':
      baseColors.uiComponents.buttonSecondaryBackground,
    'button.foreground': '#ffffff',
    'progressBar.background': baseColors.accent.primary,
    'input.background': baseColors.background.tertiary,
    'input.foreground': baseColors.foreground.primary,
    'input.border': '#0f0f14',
    'input.placeholderForeground': baseColors.uiComponents.inputPlaceholder,
    'inputOption.activeForeground': baseColors.foreground.emphasis,
    'inputOption.activeBackground': withAlpha(baseColors.accent.primary, 0.27),
    'inputValidation.infoForeground':
      baseColors.uiComponents.inputValidationInfo,
    'inputValidation.infoBackground': withAlpha(
      baseColors.accent.primary,
      0.36
    ),
    'inputValidation.infoBorder': baseColors.accent.primary,
    'inputValidation.warningForeground': '#000',
    'inputValidation.warningBackground': '#c2985b',
    'inputValidation.warningBorder': baseColors.errorWarning.warning,
    'inputValidation.errorForeground':
      baseColors.uiComponents.inputValidationInfo,
    'inputValidation.errorBackground': '#85353e',
    'inputValidation.errorBorder': '#963c47',
    'dropdown.foreground': baseColors.foreground.secondary,
    'dropdown.background': baseColors.background.tertiary,
    'dropdown.listBackground': baseColors.background.tertiary,
    'activityBar.background': baseColors.background.secondary,
    'activityBar.foreground': baseColors.foreground.secondary,
    'activityBar.inactiveForeground':
      baseColors.uiComponents.activityBarInactiveForeground,
    'activityBar.border': baseColors.background.secondary,
    'activityBarBadge.background': baseColors.accent.primary,
    'activityBarBadge.foreground': '#fff',
    'activityBarTop.foreground': baseColors.foreground.secondary,
    'activityBarTop.inactiveForeground':
      baseColors.uiComponents.activityBarInactiveForeground,
    'tree.indentGuidesStroke': baseColors.uiComponents.treeIndentGuidesStroke,
    'sideBar.foreground': baseColors.foreground.secondary,
    'sideBar.background': baseColors.background.secondary,
    'sideBar.border': baseColors.background.border,
    'sideBarTitle.foreground': baseColors.foreground.secondary,
    'sideBarSectionHeader.background': baseColors.background.secondary,
    'sideBarSectionHeader.foreground': baseColors.foreground.primary,
    'sideBarSectionHeader.border': baseColors.background.border,
    'sideBar.dropBackground': '#1e202e',
    'list.dropBackground': '#1e202e',
    'list.deemphasizedForeground':
      baseColors.uiComponents.listDeemphasizedForeground,
    'list.activeSelectionBackground': '#202330',
    'list.activeSelectionForeground': baseColors.foreground.primary,
    'list.inactiveSelectionBackground': '#1c1d29',
    'list.inactiveSelectionForeground': baseColors.foreground.primary,
    'list.focusBackground': '#1c1d29',
    'list.focusForeground': baseColors.foreground.primary,
    'list.hoverBackground': '#131a',
    'list.hoverForeground': baseColors.foreground.primary,
    'list.highlightForeground': '#668ac4',
    'list.invalidItemForeground':
      baseColors.uiComponents.listInvalidItemForeground,
    'list.errorForeground': baseColors.uiComponents.listError,
    'list.warningForeground': baseColors.uiComponents.listWarning,
    'listFilterWidget.background': baseColors.background.border,
    'listFilterWidget.outline': baseColors.accent.primary,
    'listFilterWidget.noMatchesOutline': '#a633f',
    'pickerGroup.foreground': baseColors.foreground.primary,
    'pickerGroup.border': baseColors.background.border,
    'scrollbarSlider.background':
      baseColors.uiComponents.scrollbarSliderBackground,
    'scrollbarSlider.hoverBackground':
      baseColors.uiComponents.scrollbarSliderHoverBackground,
    'scrollbarSlider.activeBackground':
      baseColors.uiComponents.scrollbarSliderActiveBackground,
    'editorBracketHighlight.foreground1':
      baseColors.uiComponents.editorBracketHighlightForeground1,
    'editorBracketHighlight.foreground2':
      baseColors.uiComponents.editorBracketHighlightForeground2,
    'editorBracketHighlight.foreground3':
      baseColors.uiComponents.editorBracketHighlightForeground3,
    'editorBracketHighlight.foreground4':
      baseColors.uiComponents.editorBracketHighlightForeground4,
    'editorBracketHighlight.foreground5':
      baseColors.uiComponents.editorBracketHighlightForeground5,
    'editorBracketHighlight.foreground6':
      baseColors.uiComponents.editorBracketHighlightForeground6,
    'editorBracketHighlight.unexpectedBracket.foreground':
      baseColors.uiComponents.editorBracketHighlightUnexpected,
    'editorBracketPairGuide.activeBackground1':
      baseColors.uiComponents.editorBracketHighlightForeground1,
    'editorBracketPairGuide.activeBackground2':
      baseColors.uiComponents.editorBracketHighlightForeground2,
    'editorBracketPairGuide.activeBackground3':
      baseColors.uiComponents.editorBracketHighlightForeground3,
    'editorBracketPairGuide.activeBackground4':
      baseColors.uiComponents.editorBracketHighlightForeground4,
    'editorBracketPairGuide.activeBackground5':
      baseColors.uiComponents.editorBracketHighlightForeground5,
    'editorBracketPairGuide.activeBackground6':
      baseColors.uiComponents.editorBracketHighlightForeground6,
    'selection.background': baseColors.uiComponents.selectionBackground,
    'editor.background': baseColors.background.primary,
    'editor.foreground': baseColors.foreground.primary,
    'editor.foldBackground': baseColors.uiComponents.editorFoldBackground,
    'editorLink.activeForeground': baseColors.uiComponents.editorLinkActive,
    'editor.selectionBackground': '#515c7e4d',
    'editor.inactiveSelectionBackground': '#515c7e25',
    'editor.findMatchBackground':
      baseColors.uiComponents.editorFindMatchHighlight,
    'editor.findMatchBorder': baseColors.uiComponents.editorFindMatchBorder,
    'editor.findMatchHighlightBackground':
      baseColors.uiComponents.editorFindMatchHighlight,
    'editor.findRangeHighlightBackground': '#515c7e33',
    'editor.rangeHighlightBackground':
      baseColors.uiComponents.editorRangeHighlight,
    'editor.wordHighlightBackground':
      baseColors.uiComponents.editorWordHighlight,
    'editor.wordHighlightStrongBackground':
      baseColors.uiComponents.editorWordHighlightStrong,
    'editor.selectionHighlightBackground':
      baseColors.uiComponents.editorSelectionHighlight,
    'editorCursor.foreground': baseColors.foreground.emphasis,
    'editorIndentGuide.background1':
      baseColors.uiComponents.editorIndentGuideBackground,
    'editorIndentGuide.activeBackground1':
      baseColors.uiComponents.editorIndentGuideActiveBackground,
    'editorLineNumber.foreground':
      baseColors.uiComponents.editorIndentGuideActiveBackground,
    'editorLineNumber.activeForeground': baseColors.foreground.secondary,
    'editor.lineHighlightBackground': '#1e202e',
    'editorWhitespace.foreground':
      baseColors.uiComponents.editorIndentGuideActiveBackground,
    'editorMarkerNavigation.background': baseColors.background.secondary,
    'editorHoverWidget.background': baseColors.background.secondary,
    'editorHoverWidget.border': baseColors.background.border,
    'editorBracketMatch.background': baseColors.background.secondary,
    'editorBracketMatch.border': '#42465d',
    'editorOverviewRuler.border': baseColors.background.border,
    'editorOverviewRuler.errorForeground': baseColors.errorWarning.error,
    'editorOverviewRuler.warningForeground': baseColors.errorWarning.warning,
    'editorOverviewRuler.infoForeground': '#1abc9c',
    'editorOverviewRuler.bracketMatchForeground': baseColors.background.border,
    'editorOverviewRuler.findMatchForeground': withAlpha(
      baseColors.foreground.primary,
      0.27
    ),
    'editorOverviewRuler.rangeHighlightForeground': withAlpha(
      baseColors.foreground.primary,
      0.27
    ),
    'editorOverviewRuler.selectionHighlightForeground': withAlpha(
      baseColors.foreground.primary,
      0.13
    ),
    'editorOverviewRuler.wordHighlightForeground': withAlpha(
      baseColors.syntax.keyword,
      0.33
    ),
    'editorOverviewRuler.wordHighlightStrongForeground': withAlpha(
      baseColors.syntax.keyword,
      0.4
    ),
    'editorOverviewRuler.modifiedForeground':
      baseColors.uiComponents.editorOverviewRulerModified,
    'editorOverviewRuler.addedForeground':
      baseColors.uiComponents.editorOverviewRulerAdded,
    'editorOverviewRuler.deletedForeground':
      baseColors.uiComponents.editorOverviewRulerDeleted,
    'editorRuler.foreground': baseColors.background.border,
    'editorError.foreground': baseColors.errorWarning.error,
    'editorWarning.foreground': baseColors.errorWarning.warning,
    'editorInfo.foreground': baseColors.accent.info,
    'editorHint.foreground': baseColors.accent.info,
    'editorGutter.modifiedBackground':
      baseColors.uiComponents.editorGutterModified,
    'editorGutter.addedBackground': baseColors.uiComponents.editorGutterAdded,
    'editorGutter.deletedBackground':
      baseColors.uiComponents.editorGutterDeleted,
    'editorGhostText.foreground': baseColors.uiComponents.editorGhostText,
    'minimapGutter.modifiedBackground':
      baseColors.uiComponents.minimapGutterModified,
    'minimapGutter.addedBackground': baseColors.uiComponents.minimapGutterAdded,
    'minimapGutter.deletedBackground':
      baseColors.uiComponents.minimapGutterDeleted,
    'editorGroup.border': baseColors.background.border,
    'editorGroup.dropBackground': '#1e202e',
    'editorGroupHeader.tabsBorder': baseColors.background.border,
    'editorGroupHeader.tabsBackground': baseColors.background.secondary,
    'editorGroupHeader.noTabsBackground': baseColors.background.secondary,
    'editorGroupHeader.border': baseColors.background.border,
    'editorPane.background': baseColors.background.primary,
    'editorWidget.foreground': baseColors.foreground.secondary,
    'editorWidget.background': baseColors.background.secondary,
    'editorWidget.border': baseColors.background.border,
    'editorWidget.resizeBorder': withAlpha(baseColors.foreground.disabled, 0.2),
    'editorSuggestWidget.background': baseColors.background.secondary,
    'editorSuggestWidget.border': baseColors.background.border,
    'editorSuggestWidget.selectedBackground': '#2022c',
    'editorSuggestWidget.highlightForeground': '#6183bb',
    'editorCodeLens.foreground': baseColors.uiComponents.editorCodeLens,
    'editorLightBulb.foreground': baseColors.errorWarning.warning,
    'editorLightBulbAutoFix.foreground': baseColors.errorWarning.warning,
    'editorInlayHint.foreground': baseColors.uiComponents.editorInlayHint,
    'peekView.border': baseColors.background.border,
    'peekViewEditor.background': baseColors.background.secondary,
    'peekViewEditor.matchHighlightBackground':
      baseColors.uiComponents.peekViewEditorMatchHighlight,
    'peekViewTitle.background': baseColors.background.border,
    'peekViewTitleLabel.foreground': baseColors.foreground.primary,
    'peekViewTitleDescription.foreground': baseColors.foreground.secondary,
    'peekViewResult.background': baseColors.background.border,
    'peekViewResult.selectionForeground': baseColors.foreground.primary,
    'peekViewResult.selectionBackground': withAlpha(
      baseColors.accent.primary,
      0.2
    ),
    'peekViewResult.lineForeground': baseColors.foreground.primary,
    'peekViewResult.fileForeground': baseColors.foreground.secondary,
    'peekViewResult.matchHighlightBackground':
      baseColors.uiComponents.peekViewResultMatchHighlight,
    'diffEditor.insertedTextBackground':
      baseColors.uiComponents.diffEditorInsertedText,
    'diffEditor.removedTextBackground':
      baseColors.uiComponents.diffEditorRemovedText,
    'diffEditor.insertedLineBackground':
      baseColors.uiComponents.diffEditorInsertedLine,
    'diffEditor.removedLineBackground':
      baseColors.uiComponents.diffEditorRemovedLine,
    'diffEditorGutter.insertedLineBackground':
      baseColors.uiComponents.diffEditorGutterInserted,
    'diffEditorGutter.removedLineBackground':
      baseColors.uiComponents.diffEditorGutterRemoved,
    'diffEditorOverview.insertedForeground':
      baseColors.uiComponents.diffEditorOverviewInserted,
    'diffEditorOverview.removedForeground':
      baseColors.uiComponents.diffEditorOverviewRemoved,
    'diffEditor.diagonalFill': '#292e42',
    'diffEditor.unchangedCodeBackground': '#282a3b66',
    'multiDiffEditor.headerBackground': baseColors.background.primary,
    'multiDiffEditor.border': baseColors.background.primary,
    'breadcrumb.background': baseColors.background.secondary,
    'breadcrumbPicker.background': baseColors.background.secondary,
    'breadcrumb.foreground': baseColors.foreground.hint,
    'breadcrumb.focusForeground': baseColors.foreground.primary,
    'breadcrumb.activeSelectionForeground': baseColors.foreground.primary,
    'tab.activeBackground': baseColors.background.secondary,
    'tab.inactiveBackground': baseColors.background.secondary,
    'tab.activeForeground': baseColors.foreground.primary,
    'tab.hoverForeground': baseColors.uiComponents.tabHoverForeground,
    'tab.activeBorder': baseColors.accent.primary,
    'tab.inactiveForeground': baseColors.foreground.secondary,
    'tab.border': baseColors.background.border,
    'tab.unfocusedActiveForeground':
      baseColors.uiComponents.tabUnfocusedActiveForeground,
    'tab.unfocusedInactiveForeground':
      baseColors.uiComponents.tabUnfocusedInactiveForeground,
    'tab.unfocusedHoverForeground':
      baseColors.uiComponents.tabUnfocusedHoverForeground,
    'tab.activeModifiedBorder': baseColors.background.primary,
    'tab.inactiveModifiedBorder': '#1f202e',
    'tab.unfocusedActiveBorder': '#1f202e',
    'tab.lastPinnedBorder': '#233',
    'panel.background': baseColors.background.secondary,
    'panel.border': baseColors.background.border,
    'panelTitle.activeForeground': baseColors.foreground.secondary,
    'panelTitle.inactiveForeground': '#42465d',
    'panelTitle.activeBorder': baseColors.background.secondary,
    'panelInput.border': baseColors.background.secondary,
    'statusBar.foreground': baseColors.foreground.secondary,
    'statusBar.background': baseColors.background.secondary,
    'statusBar.border': baseColors.background.border,
    'statusBar.noFolderBackground': baseColors.background.secondary,
    'statusBar.debuggingBackground': baseColors.background.secondary,
    'statusBar.debuggingForeground': baseColors.foreground.secondary,
    'statusBarItem.activeBackground': baseColors.background.border,
    'statusBarItem.hoverBackground': '#20222c',
    'statusBarItem.prominentBackground': baseColors.background.border,
    'statusBarItem.prominentHoverBackground': '#20222c',
    'titleBar.activeForeground': baseColors.foreground.secondary,
    'titleBar.inactiveForeground': baseColors.foreground.secondary,
    'titleBar.activeBackground': baseColors.background.secondary,
    'titleBar.inactiveBackground': baseColors.background.secondary,
    'titleBar.border': baseColors.background.border,
    'walkThrough.embeddedEditorBackground': baseColors.background.secondary,
    'textLink.foreground': '#6183bb',
    'textLink.activeForeground': '#7dcfff',
    'textPreformat.foreground': '#9699a8',
    'textBlockQuote.background': baseColors.background.secondary,
    'textCodeBlock.background': baseColors.background.secondary,
    'textSeparator.foreground': baseColors.uiComponents.textSeparator,
    'debugExceptionWidget.border':
      baseColors.uiComponents.debugExceptionWidgetBorder,
    'debugExceptionWidget.background': baseColors.background.border,
    'debugToolBar.background': baseColors.background.border,
    'debugConsole.infoForeground': baseColors.uiComponents.debugConsoleInfo,
    'debugConsole.errorForeground': baseColors.uiComponents.debugConsoleError,
    'debugConsole.sourceForeground': baseColors.uiComponents.debugConsoleSource,
    'debugConsole.warningForeground':
      baseColors.uiComponents.debugConsoleWarning,
    'debugConsoleInputIcon.foreground':
      baseColors.uiComponents.debugConsoleInputIcon,
    'editor.stackFrameHighlightBackground': '#E2BD3A20',
    'editor.focusedStackFrameHighlightBackground':
      baseColors.uiComponents.editorFocusedStackFrameHighlight,
    'debugView.stateLabelForeground': baseColors.foreground.secondary,
    'debugView.stateLabelBackground': baseColors.background.tertiary,
    'debugView.valueChangedHighlight':
      baseColors.uiComponents.debugViewValueChangedHighlight,
    'debugTokenExpression.name': baseTokenColors.variables.primary,
    'debugTokenExpression.value': baseTokenColors.special.constant,
    'debugTokenExpression.string': baseTokenColors.strings.primary,
    'debugTokenExpression.boolean': baseTokenColors.special.boolean,
    'debugTokenExpression.number': baseTokenColors.special.number,
    'debugTokenExpression.error': baseTokenColors.special.invalid,
    'debugIcon.breakpointForeground': baseColors.errorWarning.error,
    'debugIcon.breakpointDisabledForeground': '#414761',
    'debugIcon.breakpointUnverifiedForeground':
      baseColors.uiComponents.debugIconBreakpointUnverified,
    'terminal.background': baseColors.background.secondary,
    'terminal.foreground': baseColors.foreground.secondary,
    'terminal.selectionBackground': '#515c7e4d',
    'terminal.ansiBlack': baseColors.terminal.black,
    'terminal.ansiRed': baseColors.terminal.red,
    'terminal.ansiGreen': baseColors.terminal.green,
    'terminal.ansiYellow': baseColors.terminal.yellow,
    'terminal.ansiBlue': baseColors.terminal.blue,
    'terminal.ansiMagenta': baseColors.terminal.magenta,
    'terminal.ansiCyan': baseColors.terminal.cyan,
    'terminal.ansiWhite': baseColors.terminal.white,
    'terminal.ansiBrightBlack': baseColors.terminal.brightBlack,
    'terminal.ansiBrightRed': baseColors.terminal.brightRed,
    'terminal.ansiBrightGreen': baseColors.terminal.brightGreen,
    'terminal.ansiBrightYellow': baseColors.terminal.brightYellow,
    'terminal.ansiBrightBlue': baseColors.terminal.brightBlue,
    'terminal.ansiBrightMagenta': baseColors.terminal.brightMagenta,
    'terminal.ansiBrightCyan': baseColors.terminal.brightCyan,
    'terminal.ansiBrightWhite': baseColors.terminal.brightWhite,
    'gitDecoration.modifiedResourceForeground':
      baseColors.uiComponents.gitDecorationModified,
    'gitDecoration.ignoredResourceForeground':
      baseColors.uiComponents.gitDecorationIgnored,
    'gitDecoration.deletedResourceForeground':
      baseColors.uiComponents.gitDecorationDeleted,
    'gitDecoration.renamedResourceForeground':
      baseColors.uiComponents.gitDecorationRenamed,
    'gitDecoration.addedResourceForeground':
      baseColors.uiComponents.gitDecorationAdded,
    'gitDecoration.untrackedResourceForeground':
      baseColors.uiComponents.gitDecorationUntracked,
    'gitDecoration.conflictingResourceForeground': withAlpha(
      baseColors.errorWarning.warning,
      0.8
    ),
    'gitDecoration.stageDeletedResourceForeground':
      baseColors.uiComponents.gitDecorationDeleted,
    'gitDecoration.stageModifiedResourceForeground':
      baseColors.uiComponents.gitDecorationModified,
    'notebook.editorBackground': baseColors.background.primary,
    'notebook.cellEditorBackground': baseColors.background.secondary,
    'notebook.cellBorderColor': baseColors.background.border,
    'notebook.focusedCellBorder': '#2935a',
    'notebook.cellStatusBarItemHoverBackground':
      baseColors.uiComponents.notebookCellStatusBarItemHoverBackground,
    'charts.red': baseColors.terminal.red,
    'charts.blue': baseColors.terminal.blue,
    'charts.yellow': baseColors.terminal.yellow,
    'charts.orange': baseColors.charts.orange,
    'charts.green': baseColors.terminal.green,
    'charts.purple': baseColors.charts.purple,
    'charts.foreground': baseColors.charts.foreground,
    'charts.lines': baseColors.uiComponents.chartsLines,
    'scmGraph.historyItemHoverLabelForeground':
      baseColors.uiComponents.scmGraphHistoryItemHoverLabel,
    'scmGraph.foreground1': baseColors.uiComponents.scmGraphForeground1,
    'scmGraph.foreground2': baseColors.uiComponents.scmGraphForeground2,
    'scmGraph.foreground3': baseColors.uiComponents.scmGraphForeground3,
    'scmGraph.foreground4': baseColors.uiComponents.scmGraphForeground4,
    'scmGraph.foreground5': baseColors.uiComponents.scmGraphForeground5,
    'scmGraph.historyItemHoverAdditionsForeground':
      baseColors.uiComponents.scmGraphHistoryItemHoverAdditions,
    'scmGraph.historyItemHoverDeletionsForeground':
      baseColors.uiComponents.scmGraphHistoryItemHoverDeletions,
    'scmGraph.historyItemRefColor': '#506FCA',
    'scmGraph.historyItemRemoteRefColor':
      baseColors.uiComponents.scmGraphHistoryItemHoverAdditions,
    'scmGraph.historyItemBaseRefColor':
      baseColors.uiComponents.scmGraphHistoryItemBaseRef,
    'scmGraph.historyItemHoverDefaultLabelForeground':
      baseColors.foreground.primary,
    'merge.currentHeaderBackground':
      baseColors.uiComponents.mergeCurrentHeaderBackground,
    'merge.currentContentBackground':
      baseColors.uiComponents.mergeCurrentContentBackground,
    'merge.incomingHeaderBackground':
      baseColors.uiComponents.mergeIncomingHeaderBackground,
    'merge.incomingContentBackground':
      baseColors.uiComponents.mergeIncomingContentBackground,
    'mergeEditor.change.background':
      baseColors.uiComponents.mergeEditorChangeBackground,
    'mergeEditor.change.word.background':
      baseColors.uiComponents.mergeEditorChangeWordBackground,
    'mergeEditor.conflict.unhandledUnfocused.border':
      baseColors.uiComponents.mergeEditorConflictUnhandledUnfocusedBorder,
    'mergeEditor.conflict.unhandledFocused.border':
      baseColors.uiComponents.mergeEditorConflictUnhandledFocusedBorder,
    'mergeEditor.conflict.handledUnfocused.border':
      baseColors.uiComponents.mergeEditorConflictHandledUnfocusedBorder,
    'mergeEditor.conflict.handledFocused.border':
      baseColors.uiComponents.mergeEditorConflictHandledFocusedBorder,
    'mergeEditor.conflict.handled.minimapOverViewRuler': '#49dab',
    'mergeEditor.conflict.unhandled.minimapOverViewRuler':
      baseColors.errorWarning.warning,
    'gitlens.trailingLineForegroundColor':
      baseColors.uiComponents.gitlensTrailingLine,
    'gitlens.gutterUncommittedForegroundColor': baseColors.terminal.blue,
    'gitlens.gutterForegroundColor': baseColors.foreground.secondary,
    'gitlens.gutterBackgroundColor': baseColors.background.secondary,
    'notificationCenterHeader.background': baseColors.background.border,
    'notifications.background': baseColors.background.border,
    'notificationLink.foreground': '#6183bb',
    'notificationsErrorIcon.foreground':
      baseColors.uiComponents.notificationsErrorIcon,
    'notificationsWarningIcon.foreground':
      baseColors.uiComponents.notificationsWarningIcon,
    'notificationsInfoIcon.foreground': baseColors.accent.info,
    'menubar.selectionForeground': baseColors.foreground.primary,
    'menubar.selectionBackground': '#1e202e',
    'menubar.selectionBorder': baseColors.uiComponents.menubarSelectionBorder,
    'menu.foreground': baseColors.foreground.secondary,
    'menu.background': baseColors.background.secondary,
    'menu.selectionForeground': baseColors.foreground.primary,
    'menu.selectionBackground': '#1e202e',
    'menu.separatorBackground': baseColors.background.border,
    'menu.border': baseColors.background.border,
    'chat.requestBorder': baseColors.uiComponents.chatRequestBorder,
    'chat.avatarBackground': baseColors.uiComponents.chatAvatarBackground,
    'chat.avatarForeground': baseColors.uiComponents.chatAvatarForeground,
    'chat.slashCommandBackground': baseColors.background.tertiary,
    'chat.slashCommandForeground': baseColors.terminal.blue,
    'inlineChat.foreground': baseColors.foreground.primary,
    'inlineChatInput.background': baseColors.background.tertiary,
    'inlineChatDiff.inserted': baseColors.uiComponents.inlineChatDiffInserted,
    'inlineChatDiff.removed': baseColors.uiComponents.inlineChatDiffRemoved,
  }
}

/**
 * Генератор токенов подсветки синтаксиса для Tokyo Night
 */
export const generateTokyoNightTokenColors = () => {
  return [
    {
      name: 'Italics - Comments, Storage, Keyword Flow, Vue attributes, Decorators',
      scope: [
        'comment',
        'meta.var.expr storage.type',
        'keyword.control.flow',
        'keyword.control.return',
        'meta.directive.vue punctuation.separator.key-value.html',
        'meta.directive.vue entity.other.attribute-name.html',
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
        'storage.modifier',
        'string.quoted.docstring.multi',
        'string.quoted.docstring.multi.python punctuation.definition.string.begin',
        'string.quoted.docstring.multi.python punctuation.definition.string.end',
        'string.quoted.docstring.multi.python constant.character.escape',
      ],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Fix YAML block scalar, Python Logical',
      scope: [
        'keyword.control.flow.block-scalar.literal',
        'keyword.control.flow.python',
      ],
    },
    {
      name: 'Comment',
      scope: [
        'comment',
        'comment.block.documentation',
        'punctuation.definition.comment',
        'comment.block.documentation punctuation',
        'string.quoted.docstring.multi',
        'string.quoted.docstring.multi.python punctuation.definition.string.begin',
        'string.quoted.docstring.multi.python punctuation.definition.string.end',
        'string.quoted.docstring.multi.python constant.character.escape',
      ],
      settings: {
        foreground: baseTokenColors.comments.primary,
      },
    },
    {
      name: 'Comment Doc',
      scope: [
        'keyword.operator.assignment.jsdoc',
        'comment.block.documentation variable',
        'comment.block.documentation storage',
        'comment.block.documentation keyword',
        'comment.block.documentation support',
        'comment.block.documentation markup',
        'comment.block.documentation markup.inline.raw.string.markdown',
        'meta.other.type.phpdoc.php keyword.other.type.php',
        'meta.other.type.phpdoc.php support.other.namespace.php',
        'meta.other.type.phpdoc.php punctuation.separator.inheritance.php',
        'meta.other.type.phpdoc.php support.class',
        'keyword.other.phpdoc.php',
        'log.date',
      ],
      settings: {
        foreground: baseTokenColors.comments.doc,
      },
    },
    {
      name: 'Comment Doc Emphasized',
      scope: [
        'meta.other.type.phpdoc.php support.class',
        'comment.block.documentation storage.type',
        'comment.block.documentation punctuation.definition.block.tag',
        'comment.block.documentation entity.name.type.instance',
      ],
      settings: {
        foreground: baseTokenColors.comments.emphasized,
      },
    },
    {
      name: 'Number, Boolean, Undefined, Null',
      scope: [
        'variable.other.constant',
        'punctuation.definition.constant',
        'constant.language',
        'constant.numeric',
        'support.constant',
        'constant.other.caps',
      ],
      settings: {
        foreground: baseTokenColors.special.number,
      },
    },
    {
      name: 'String, Symbols',
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'meta.attribute-selector',
        'string constant.character',
      ],
      settings: {
        foreground: baseTokenColors.strings.primary,
      },
    },
    {
      name: 'Colors',
      scope: [
        'constant.other.color',
        'constant.other.color.rgb-value.hex punctuation.definition.constant',
      ],
      settings: {
        foreground: baseTokenColors.special.constant,
      },
    },
    {
      name: 'Invalid',
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: baseTokenColors.special.invalid,
      },
    },
    {
      name: 'Invalid deprecated',
      scope: 'invalid.deprecated',
      settings: {
        foreground: baseTokenColors.special.deprecated,
      },
    },
    {
      name: 'Storage Type',
      scope: 'storage.type',
      settings: {
        foreground: baseTokenColors.keywords.declaration,
      },
    },
    {
      name: 'Storage - modifier, var, const, let',
      scope: ['meta.var.expr storage.type', 'storage.modifier'],
      settings: {
        foreground: baseTokenColors.keywords.declaration,
      },
    },
    {
      name: 'Interpolation, PHP tags, Smarty tags',
      scope: [
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
        'meta.embedded.line.tag.smarty',
        'support.constant.handlebars',
        'punctuation.section.tag.twig',
      ],
      settings: {
        foreground: baseTokenColors.keywords.importExport,
      },
    },
    {
      name: 'Blade, Twig, Smarty Handlebars keywords',
      scope: [
        'keyword.control.smarty',
        'keyword.control.twig',
        'support.constant.handlebars keyword.control',
        'keyword.operator.comparison.twig',
        'keyword.blade',
        'entity.name.function.blade',
        'meta.tag.blade keyword.other.type.php',
      ],
      settings: {
        foreground: baseTokenColors.special.tag,
      },
    },
    {
      name: 'Spread',
      scope: ['keyword.operator.spread', 'keyword.operator.rest'],
      settings: {
        foreground: baseTokenColors.special.tag,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Operator, Misc',
      scope: [
        'keyword.operator',
        'keyword.control.as',
        'keyword.other',
        'keyword.operator.bitwise.shift',
        'punctuation',
        'expression.embbeded.vue punctuation.definition.tag',
        'text.html.twig meta.tag.inline.any.html',
        'meta.tag.template.value.twig meta.function.arguments.twig',
        'meta.directive.vue punctuation.separator.key-value.html',
        'punctuation.definition.constant.markdown',
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
        'text.html.vue-html meta.tag',
        'meta.attribute.directive',
        'punctuation.definition.keyword',
        'punctuation.terminator.rule',
        'punctuation.definition.entity',
        'punctuation.separator.inheritance.php',
        'keyword.other.template',
        'keyword.other.substitution',
        'entity.name.operator',
        'meta.property-list punctuation.separator.key-value',
        'meta.at-rule.mixin punctuation.separator.key-value',
        'meta.at-rule.function variable.parameter.url',
        'meta.embedded.inline.phpx punctuation.definition.tag.begin.html',
        'meta.embedded.inline.phpx punctuation.definition.tag.end.html',
      ],
      settings: {
        foreground: baseTokenColors.operators.primary,
      },
    },
    {
      name: 'Import, Export, From, Default',
      scope: [
        'keyword.control.module.js',
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.from',
        'keyword.control.default',
        'meta.import keyword.other',
      ],
      settings: {
        foreground: baseTokenColors.keywords.importExport,
      },
    },
    {
      name: 'Keyword',
      scope: ['keyword', 'keyword.control', 'keyword.other.important'],
      settings: {
        foreground: baseTokenColors.keywords.primary,
      },
    },
    {
      name: 'Keyword SQL',
      scope: 'keyword.other.DML',
      settings: {
        foreground: baseTokenColors.keywords.importExport,
      },
    },
    {
      name: 'Keyword Operator Logical, Arrow, Ternary, Comparison',
      scope: [
        'keyword.operator.logical',
        'storage.type.function',
        'keyword.operator.bitwise',
        'keyword.operator.ternary',
        'keyword.operator.comparison',
        'keyword.operator.relational',
        'keyword.operator.or.regexp',
      ],
      settings: {
        foreground: baseTokenColors.keywords.operator,
      },
    },
    {
      name: 'Tag',
      scope: 'entity.name.tag',
      settings: {
        foreground: baseTokenColors.special.tag,
      },
    },
    {
      name: 'Tag - Custom / Unrecognized',
      scope: [
        'entity.name.tag support.class.component',
        'meta.tag.custom entity.name.tag',
        'meta.tag.other.unrecognized.html.derivative entity.name.tag',
        'meta.tag',
      ],
      settings: {
        foreground: baseColors.tokenColors.tagCustom,
      },
    },
    {
      name: 'Tag Punctuation',
      scope: [
        'punctuation.definition.tag',
        'text.html.php meta.embedded.block.html meta.tag.metadata.script.end.html punctuation.definition.tag.begin.html text.html.basic',
      ],
      settings: {
        foreground: baseColors.tokenColors.tagPunctuation,
      },
    },
    {
      name: 'Globals, PHP Constants, etc',
      scope: [
        'constant.other.php',
        'variable.other.global.safer',
        'variable.other.global.safer punctuation.definition.variable',
        'variable.other.global',
        'variable.other.global punctuation.definition.variable',
        'constant.other',
      ],
      settings: {
        foreground: baseTokenColors.special.constant,
      },
    },
    {
      name: 'Variables',
      scope: [
        'variable',
        'support.variable',
        'string constant.other.placeholder',
        'variable.parameter.handlebars',
        'variable.other.object',
        'meta.fstring',
        'meta.function-call meta.function-call.arguments',
        'meta.embedded.inline.phpx constant.other.php',
      ],
      settings: {
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Variable Array Key',
      scope: 'meta.array.literal variable',
      settings: {
        foreground: baseTokenColors.keywords.importExport,
      },
    },
    {
      name: 'Object Key',
      scope: [
        'meta.object-literal.key',
        'entity.name.type.hcl',
        'string.alias.graphql',
        'string.unquoted.graphql',
        'string.unquoted.alias.graphql',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
        'meta.field.declaration.ts variable.object.property',
        'meta.block entity.name.label',
      ],
      settings: {
        foreground: baseTokenColors.variables.property,
      },
    },
    {
      name: 'Object Property',
      scope: [
        'variable.other.property',
        'support.variable.property',
        'support.variable.property.dom',
        'meta.function-call variable.other.object.property',
      ],
      settings: {
        foreground: baseTokenColors.keywords.importExport,
      },
    },
    {
      name: 'Object Property',
      scope: 'variable.other.object.property',
      settings: {
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Object Literal Member lvl 3 (Vue Prop Validation)',
      scope:
        'meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key',
      settings: {
        foreground: baseColors.tokenColors.objectLiteralMemberLvl3,
      },
    },
    {
      name: 'C-related Block Level Variables',
      scope: 'source.cpp meta.block variable.other',
      settings: {
        foreground: baseColors.tokenColors.cBlockLevelVariables,
      },
    },
    {
      name: 'Other Variable',
      scope: 'support.other.variable',
      settings: {
        foreground: baseColors.tokenColors.otherVariable,
      },
    },
    {
      name: 'Methods',
      scope: [
        'meta.class-method.js entity.name.function.js',
        'entity.name.method.js',
        'variable.function.constructor',
        'keyword.other.special-method',
        'storage.type.cs',
      ],
      settings: {
        foreground: baseTokenColors.functions.method,
      },
    },
    {
      name: 'Function Definition',
      scope: [
        'entity.name.function',
        'variable.other.enummember',
        'meta.function-call',
        'meta.function-call entity.name.function',
        'variable.function',
        'meta.definition.method entity.name.function',
        'meta.object-literal entity.name.function',
      ],
      settings: {
        foreground: baseTokenColors.functions.primary,
      },
    },
    {
      name: 'Function Argument',
      scope: [
        'variable.parameter.function.language.special',
        'variable.parameter',
        'meta.function.parameters punctuation.definition.variable',
        'meta.function.parameter variable',
      ],
      settings: {
        foreground: baseTokenColors.variables.parameter,
      },
    },
    {
      name: 'Constant, Tag Attribute',
      scope: [
        'keyword.other.type.php',
        'storage.type.php',
        'constant.character',
        'constant.escape',
        'keyword.other.unit',
      ],
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'Variable Definition',
      scope: [
        'meta.definition.variable variable.other.constant',
        'meta.definition.variable variable.other.readwrite',
        'variable.declaration.hcl variable.other.readwrite.hcl',
        'meta.mapping.key.hcl variable.other.readwrite.hcl',
        'variable.other.declaration',
      ],
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'Inherited Class',
      scope: 'entity.other.inherited-class',
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'Class, Support, DOM, etc',
      scope: [
        'support.class',
        'support.type',
        'variable.other.readwrite.alias',
        'support.orther.namespace.use.php',
        'meta.use.php',
        'support.other.namespace.php',
        'support.type.sys-types',
        'support.variable.dom',
        'support.constant.math',
        'support.type.object.module',
        'support.constant.json',
        'entity.name.namespace',
        'meta.import.qualifier',
        'variable.other.constant.object',
      ],
      settings: {
        foreground: baseTokenColors.types.class,
      },
    },
    {
      name: 'Class Name',
      scope: 'entity.name',
      settings: {
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Support Function',
      scope: 'support.function',
      settings: {
        foreground: baseTokenColors.types.class,
      },
    },
    {
      name: 'CSS Class and Support',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
        'support.type.property-name.css',
        'support.type.vendored.property-name',
        'support.type.map.key',
      ],
      settings: {
        foreground: baseTokenColors.functions.primary,
      },
    },
    {
      name: 'CSS Font',
      scope: ['support.constant.font-name', 'meta.definition.variable'],
      settings: {
        foreground: baseColors.tokenColors.cssFont,
      },
    },
    {
      name: 'CSS Class',
      scope: [
        'entity.other.attribute-name.class',
        'meta.at-rule.mixin.scss entity.name.function.scss',
      ],
      settings: {
        foreground: baseColors.tokenColors.cssFont,
      },
    },
    {
      name: 'CSS ID',
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: baseColors.tokenColors.cssId,
      },
    },
    {
      name: 'CSS Tag',
      scope: 'entity.name.tag.css',
      settings: {
        foreground: baseColors.tokenColors.cssTag,
      },
    },
    {
      name: 'CSS Tag Reference, Pseudo & Class Punctuation',
      scope: [
        'entity.other.attribute-name.pseudo-class punctuation.definition.entity',
        'entity.other.attribute-name.pseudo-element punctuation.definition.entity',
        'entity.other.attribute-name.class punctuation.definition.entity',
        'entity.name.tag.reference',
      ],
      settings: {
        foreground: baseColors.tokenColors.cssTagReference,
      },
    },
    {
      name: 'CSS Punctuation',
      scope: 'meta.property-list',
      settings: {
        foreground: baseColors.tokenColors.cssPunctuation,
      },
    },
    {
      name: 'CSS at-rule fix',
      scope: [
        'meta.property-list meta.at-rule.if',
        'meta.at-rule.return variable.parameter.url',
        'meta.property-list meta.at-rule.else',
      ],
      settings: {
        foreground: baseColors.tokenColors.cssAtRule,
      },
    },
    {
      name: 'CSS Parent Selector Entity',
      scope: [
        'entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity.css',
      ],
      settings: {
        foreground: baseTokenColors.variables.property,
      },
    },
    {
      name: 'CSS Punctuation comma fix',
      scope: 'meta.property-list meta.property-list',
      settings: {
        foreground: baseColors.tokenColors.cssPunctuation,
      },
    },
    {
      name: 'SCSS @',
      scope: [
        'meta.at-rule.mixin keyword.control.at-rule.mixin',
        'meta.at-rule.include entity.name.function.scss',
        'meta.at-rule.include keyword.control.at-rule.include',
      ],
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'SCSS Mixins, Extends, Include Keyword',
      scope: [
        'keyword.control.at-rule.include punctuation.definition.keyword',
        'keyword.control.at-rule.mixin punctuation.definition.keyword',
        'meta.at-rule.include keyword.control.at-rule.include',
        'keyword.control.at-rule.extend punctuation.definition.keyword',
        'meta.at-rule.extend keyword.control.at-rule.extend',
        'entity.other.attribute-name.placeholder.css punctuation.definition.entity.css',
        'meta.at-rule.media keyword.control.at-rule.media',
        'meta.at-rule.mixin keyword.control.at-rule.mixin',
        'meta.at-rule.function keyword.control.at-rule.function',
        'keyword.control punctuation.definition.keyword',
      ],
      settings: {
        foreground: baseColors.tokenColors.scssMixinExtend,
      },
    },
    {
      name: 'SCSS Include Mixin Argument',
      scope: 'meta.property-list meta.at-rule.include',
      settings: {
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'CSS value',
      scope: 'support.constant.property-value',
      settings: {
        foreground: baseTokenColors.special.number,
      },
    },
    {
      name: 'Sub-methods',
      scope: [
        'entity.name.module.js',
        'variable.import.parameter.js',
        'variable.other.class.js',
      ],
      settings: {
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Language methods',
      scope: 'variable.language',
      settings: {
        foreground: baseColors.tokenColors.languageMethods,
      },
    },
    {
      name: 'Variable punctuation',
      scope: 'variable.other punctuation.definition.variable',
      settings: {
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Keyword this with Punctuation, ES7 Bind Operator',
      scope: [
        'source.js constant.other.object.key.js string.unquoted.label.js',
        'variable.language.this punctuation.definition.variable',
        'keyword.other.this',
      ],
      settings: {
        foreground: baseTokenColors.special.tag,
      },
    },
    {
      name: 'HTML Attributes',
      scope: [
        'entity.other.attribute-name',
        'text.html.basic entity.other.attribute-name.html',
        'text.html.basic entity.other.attribute-name',
      ],
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'HTML Character Entity',
      scope: 'text.html constant.character.entity',
      settings: {
        foreground: baseColors.tokenColors.htmlCharacterEntity,
      },
    },
    {
      name: 'Vue (Vetur / deprecated) Template attributes',
      scope: [
        'entity.other.attribute-name.id.html',
        'meta.directive.vue entity.other.attribute-name.html',
      ],
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: "CSS ID's",
      scope: 'source.sass keyword.control',
      settings: {
        foreground: baseTokenColors.functions.primary,
      },
    },
    {
      name: 'CSS psuedo selectors',
      scope: [
        'entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.placeholder',
        'meta.property-list meta.property-value',
      ],
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'Inserted',
      scope: 'markup.inserted',
      settings: {
        foreground: baseColors.uiComponents.listDeemphasizedForeground,
      },
    },
    {
      name: 'Deleted',
      scope: 'markup.deleted',
      settings: {
        foreground: baseColors.uiComponents.gitDecorationDeleted,
      },
    },
    {
      name: 'Changed',
      scope: 'markup.changed',
      settings: {
        foreground: baseColors.uiComponents.gitDecorationModified,
      },
    },
    {
      name: 'Regular Expressions',
      scope: 'string.regexp',
      settings: {
        foreground: baseTokenColors.strings.regex,
      },
    },
    {
      name: 'Regular Expressions - Punctuation',
      scope: 'punctuation.definition.group',
      settings: {
        foreground: baseTokenColors.special.tag,
      },
    },
    {
      name: 'Regular Expressions - Character Class',
      scope: ['constant.other.character-class.regexp'],
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'Regular Expressions - Character Class Set',
      scope: [
        'constant.other.character-class.set.regexp',
        'punctuation.definition.character-class.regexp',
      ],
      settings: {
        foreground: baseTokenColors.special.constant,
      },
    },
    {
      name: 'Regular Expressions - Quantifier',
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: baseTokenColors.operators.primary,
      },
    },
    {
      name: 'Regular Expressions - Backslash',
      scope: 'constant.character.escape.backslash',
      settings: {
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Escape Characters',
      scope: 'constant.character.escape',
      settings: {
        foreground: baseTokenColors.operators.primary,
      },
    },
    {
      name: 'Decorators',
      scope: [
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
      ],
      settings: {
        foreground: baseTokenColors.functions.primary,
      },
    },
    {
      name: 'CSS Units',
      scope: 'keyword.other.unit',
      settings: {
        foreground: baseTokenColors.special.tag,
      },
    },
    {
      name: 'JSON Key - Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.functions.primary,
      },
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.types.class,
      },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.keywords.importExport,
      },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.special.constant,
      },
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.types.class,
      },
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'source.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.variables.property,
      },
    },
    {
      name: 'JSON Key - Level 7',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.special.tag,
      },
    },
    {
      name: 'JSON Key - Level 8',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: baseTokenColors.strings.primary,
      },
    },
    {
      name: 'Plain Punctuation',
      scope: 'punctuation.definition.list_item.markdown',
      settings: {
        foreground: baseColors.tokenColors.cssPunctuation,
      },
    },
    {
      name: 'Block Punctuation',
      scope: [
        'meta.block',
        'meta.brace',
        'punctuation.definition.block',
        'punctuation.definition.use',
        'punctuation.definition.class',
        'punctuation.definition.begin.bracket',
        'punctuation.definition.end.bracket',
        'punctuation.definition.switch-expression.begin.bracket',
        'punctuation.definition.switch-expression.end.bracket',
        'punctuation.definition.section.switch-block.begin.bracket',
        'punctuation.definition.section.switch-block.end.bracket',
        'punctuation.definition.group.shell',
        'punctuation.definition.parameters',
        'punctuation.definition.arguments',
        'punctuation.definition.dictionary',
        'punctuation.definition.array',
        'punctuation.section',
      ],
      settings: {
        foreground: baseColors.tokenColors.cssPunctuation,
      },
    },
    {
      name: 'Markdown - Plain',
      scope: ['meta.embedded.block'],
      settings: {
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'HTML text',
      scope: [
        'meta.tag JSXNested',
        'meta.jsx.children',
        'text.html',
        'text.log',
      ],
      settings: {
        foreground: baseTokenColors.special.constant,
      },
    },
    {
      name: 'Markdown - Markup Raw Inline',
      scope: 'text.html.markdown markup.inline.raw.markdown',
      settings: {
        foreground: baseTokenColors.variables.constant,
      },
    },
    {
      name: 'Markdown - Markup Raw Inline Punctuation',
      scope:
        'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
      settings: {
        foreground: baseTokenColors.comments.doc,
      },
    },
    {
      name: 'Markdown - Heading 1',
      scope: [
        'heading.1.markdown entity.name',
        'heading.1.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: baseColors.tokenColors.markdownHeading1,
      },
    },
    {
      name: 'Markdown - Heading 2',
      scope: [
        'heading.2.markdown entity.name',
        'heading.2.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: baseColors.tokenColors.markdownHeading2,
      },
    },
    {
      name: 'Markdown - Heading 3',
      scope: [
        'heading.3.markdown entity.name',
        'heading.3.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: baseColors.tokenColors.markdownHeading3,
      },
    },
    {
      name: 'Markdown - Heading 4',
      scope: [
        'heading.4.markdown entity.name',
        'heading.4.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: baseColors.tokenColors.markdownHeading4,
      },
    },
    {
      name: 'Markdown - Heading 5',
      scope: [
        'heading.5.markdown entity.name',
        'heading.5.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: baseColors.tokenColors.markdownHeading5,
      },
    },
    {
      name: 'Markdown - Heading 6',
      scope: [
        'heading.6.markdown entity.name',
        'heading.6.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: baseColors.tokenColors.markdownHeading6,
      },
    },
    {
      name: 'Markup - Italic',
      scope: ['markup.italic', 'markup.italic punctuation'],
      settings: {
        fontStyle: 'italic',
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Markup - Bold',
      scope: ['markup.bold', 'markup.bold punctuation'],
      settings: {
        fontStyle: 'bold',
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Markup - Bold-Italic',
      scope: [
        'markup.bold markup.italic',
        'markup.bold markup.italic punctuation',
      ],
      settings: {
        fontStyle: 'bold italic',
        foreground: baseTokenColors.variables.primary,
      },
    },
    {
      name: 'Markup - Underline',
      scope: ['markup.underline', 'markup.underline punctuation'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: 'markup.quote punctuation.definition.blockquote.markdown',
      settings: {
        foreground: baseTokenColors.comments.doc,
      },
    },
    {
      name: 'Markup - Quote',
      scope: 'markup.quote',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown - Link',
      scope: [
        'string.other.link',
        'markup.underline.link',
        'constant.other.reference.link.markdown',
        'string.other.link.description.title.markdown',
      ],
      settings: {
        foreground: baseTokenColors.variables.property,
      },
    },
    {
      name: 'Markdown - Fenced Code Block',
      scope: [
        'markup.fenced_code.block.markdown',
        'markup.inline.raw.string.markdown',
        'variable.language.fenced.markdown',
      ],
      settings: {
        foreground: baseTokenColors.operators.primary,
      },
    },
    {
      name: 'Markdown - Separator',
      scope: 'meta.separator',
      settings: {
        fontStyle: 'bold',
        foreground: baseColors.tokenColors.markdownSeparator,
      },
    },
    {
      name: 'Markup - Table',
      scope: 'markup.table',
      settings: {
        foreground: baseColors.tokenColors.markupTable,
      },
    },
    {
      name: 'Token - Info',
      scope: 'token.info-token',
      settings: {
        foreground: baseColors.tokenColors.tokenInfo,
      },
    },
    {
      name: 'Token - Warn',
      scope: 'token.warn-token',
      settings: {
        foreground: baseColors.tokenColors.tokenWarn,
      },
    },
    {
      name: 'Token - Error',
      scope: 'token.error-token',
      settings: {
        foreground: baseColors.tokenColors.tokenError,
      },
    },
    {
      name: 'Token - Debug',
      scope: 'token.debug-token',
      settings: {
        foreground: baseColors.tokenColors.tokenDebug,
      },
    },
    {
      name: 'Apache Tag',
      scope: 'entity.tag.apacheconf',
      settings: {
        foreground: baseColors.tokenColors.apacheTag,
      },
    },
    {
      name: 'Preprocessor',
      scope: ['meta.preprocessor'],
      settings: {
        foreground: baseColors.tokenColors.preprocessor,
      },
    },
    {
      name: 'ENV value',
      scope: 'source.env',
      settings: {
        foreground: baseTokenColors.functions.primary,
      },
    },
  ]
}

/**
 * Генерация полной темы Tokyo Night
 */
export const generateTokyoNightTheme = (): VSCodeTheme => {
  return {
    name: 'Tokyo Night',
    type: 'dark',
    semanticHighlighting: true,
    semanticTokenColors: generateTokyoNightSemanticTokenColors(),
    colors: generateTokyoNightWorkbenchColors(),
    tokenColors: generateTokyoNightTokenColors(),
  }
}
