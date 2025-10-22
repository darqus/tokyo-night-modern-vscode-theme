import { baseColors } from '../palette/base-colors'
import { baseTokenColors } from '../palette/token-colors'
import { tokyoNightColors } from '../palette/tokyo-night-colors'
import type { VSCodeTheme } from '../palette/types'

/**
 * Генератор семантических токенов для Tokyo Night
 */
export const generateTokyoNightSemanticTokenColors = () => ({
  'parameter.declaration': {
    foreground: tokyoNightColors.semantic['parameter.declaration'],
  },
  parameter: {
    foreground: tokyoNightColors.semantic.parameter,
  },
  'property.declaration': {
    foreground: tokyoNightColors.semantic['property.declaration'],
  },
  'property.defaultLibrary': {
    foreground: tokyoNightColors.semantic['property.defaultLibrary'],
  },
  '*.defaultLibrary': {
    foreground: tokyoNightColors.semantic['*.defaultLibrary'],
  },
  'variable.defaultLibrary': {
    foreground: tokyoNightColors.semantic['variable.defaultLibrary'],
  },
  'variable.declaration': {
    foreground: tokyoNightColors.semantic['variable.declaration'],
  },
  variable: {
    foreground: tokyoNightColors.semantic.variable,
  },
})

/**
 * Генератор цветов интерфейса (workbench colors) для Tokyo Night
 */
export const generateTokyoNightWorkbenchColors = () => ({
  foreground: tokyoNightColors.workbench.foreground,
  descriptionForeground: tokyoNightColors.workbench.descriptionForeground,
  disabledForeground: tokyoNightColors.workbench.disabledForeground,
  focusBorder: tokyoNightColors.workbench.focusBorder,
  errorForeground: tokyoNightColors.workbench.errorForeground,
  'widget.shadow': tokyoNightColors.workbench['widget.shadow'],
  'scrollbar.shadow': tokyoNightColors.workbench['scrollbar.shadow'],
  'badge.background': tokyoNightColors.workbench['badge.background'],
  'badge.foreground': tokyoNightColors.workbench['badge.foreground'],
  'icon.foreground': tokyoNightColors.workbench['icon.foreground'],
  'settings.headerForeground':
    tokyoNightColors.workbench['settings.headerForeground'],
  'window.activeBorder': tokyoNightColors.workbench['window.activeBorder'],
  'window.inactiveBorder': tokyoNightColors.workbench['window.inactiveBorder'],
  'sash.hoverBorder': tokyoNightColors.workbench['sash.hoverBorder'],
  'toolbar.activeBackground':
    tokyoNightColors.workbench['toolbar.activeBackground'],
  'toolbar.hoverBackground':
    tokyoNightColors.workbench['toolbar.hoverBackground'],
  'extensionButton.prominentBackground':
    tokyoNightColors.workbench['extensionButton.prominentBackground'],
  'extensionButton.prominentHoverBackground':
    tokyoNightColors.workbench['extensionButton.prominentHoverBackground'],
  'extensionButton.prominentForeground':
    tokyoNightColors.workbench['extensionButton.prominentForeground'],
  'extensionBadge.remoteBackground':
    tokyoNightColors.workbench['extensionBadge.remoteBackground'],
  'extensionBadge.remoteForeground':
    tokyoNightColors.workbench['extensionBadge.remoteForeground'],
  'button.background': tokyoNightColors.workbench['button.background'],
  'button.hoverBackground':
    tokyoNightColors.workbench['button.hoverBackground'],
  'button.secondaryBackground':
    tokyoNightColors.workbench['button.secondaryBackground'],
  'button.foreground': tokyoNightColors.workbench['button.foreground'],
  'progressBar.background':
    tokyoNightColors.workbench['progressBar.background'],
  'input.background': tokyoNightColors.workbench['input.background'],
  'input.foreground': tokyoNightColors.workbench['input.foreground'],
  'input.border': tokyoNightColors.workbench['input.border'],
  'input.placeholderForeground':
    tokyoNightColors.workbench['input.placeholderForeground'],
  'inputOption.activeForeground':
    tokyoNightColors.workbench['inputOption.activeForeground'],
  'inputOption.activeBackground':
    tokyoNightColors.workbench['inputOption.activeBackground'],
  'inputValidation.infoForeground':
    tokyoNightColors.workbench['inputValidation.infoForeground'],
  'inputValidation.infoBackground':
    tokyoNightColors.workbench['inputValidation.infoBackground'],
  'inputValidation.infoBorder':
    tokyoNightColors.workbench['inputValidation.infoBorder'],
  'inputValidation.warningForeground':
    tokyoNightColors.workbench['inputValidation.warningForeground'],
  'inputValidation.warningBackground':
    tokyoNightColors.workbench['inputValidation.warningBackground'],
  'inputValidation.warningBorder':
    tokyoNightColors.workbench['inputValidation.warningBorder'],
  'inputValidation.errorForeground':
    tokyoNightColors.workbench['inputValidation.errorForeground'],
  'inputValidation.errorBackground':
    tokyoNightColors.workbench['inputValidation.errorBackground'],
  'inputValidation.errorBorder':
    tokyoNightColors.workbench['inputValidation.errorBorder'],
  'dropdown.foreground': tokyoNightColors.workbench['dropdown.foreground'],
  'dropdown.background': tokyoNightColors.workbench['dropdown.background'],
  'dropdown.listBackground':
    tokyoNightColors.workbench['dropdown.listBackground'],
  'activityBar.background':
    tokyoNightColors.workbench['activityBar.background'],
  'activityBar.foreground':
    tokyoNightColors.workbench['activityBar.foreground'],
  'activityBar.inactiveForeground':
    tokyoNightColors.workbench['activityBar.inactiveForeground'],
  'activityBar.border': tokyoNightColors.workbench['activityBar.border'],
  'activityBarBadge.background':
    tokyoNightColors.workbench['activityBarBadge.background'],
  'activityBarBadge.foreground':
    tokyoNightColors.workbench['activityBarBadge.foreground'],
  'activityBarTop.foreground':
    tokyoNightColors.workbench['activityBarTop.foreground'],
  'activityBarTop.inactiveForeground':
    tokyoNightColors.workbench['activityBarTop.inactiveForeground'],
  'tree.indentGuidesStroke':
    tokyoNightColors.workbench['tree.indentGuidesStroke'],
  'sideBar.foreground': tokyoNightColors.workbench['sideBar.foreground'],
  'sideBar.background': tokyoNightColors.workbench['sideBar.background'],
  'sideBar.border': tokyoNightColors.workbench['sideBar.border'],
  'sideBarTitle.foreground':
    tokyoNightColors.workbench['sideBarTitle.foreground'],
  'sideBarSectionHeader.background':
    tokyoNightColors.workbench['sideBarSectionHeader.background'],
  'sideBarSectionHeader.foreground':
    tokyoNightColors.workbench['sideBarSectionHeader.foreground'],
  'sideBarSectionHeader.border':
    tokyoNightColors.workbench['sideBarSectionHeader.border'],
  'sideBar.dropBackground':
    tokyoNightColors.workbench['sideBar.dropBackground'],
  'list.dropBackground': tokyoNightColors.workbench['list.dropBackground'],
  'list.deemphasizedForeground':
    tokyoNightColors.workbench['list.deemphasizedForeground'],
  'list.activeSelectionBackground':
    tokyoNightColors.workbench['list.activeSelectionBackground'],
  'list.activeSelectionForeground':
    tokyoNightColors.workbench['list.activeSelectionForeground'],
  'list.inactiveSelectionBackground':
    tokyoNightColors.workbench['list.inactiveSelectionBackground'],
  'list.inactiveSelectionForeground':
    tokyoNightColors.workbench['list.inactiveSelectionForeground'],
  'list.focusBackground': tokyoNightColors.workbench['list.focusBackground'],
  'list.focusForeground': tokyoNightColors.workbench['list.focusForeground'],
  'list.hoverBackground': tokyoNightColors.workbench['list.hoverBackground'],
  'list.hoverForeground': tokyoNightColors.workbench['list.hoverForeground'],
  'list.highlightForeground':
    tokyoNightColors.workbench['list.highlightForeground'],
  'list.invalidItemForeground':
    tokyoNightColors.workbench['list.invalidItemForeground'],
  'list.errorForeground': tokyoNightColors.workbench['list.errorForeground'],
  'list.warningForeground':
    tokyoNightColors.workbench['list.warningForeground'],
  'listFilterWidget.background':
    tokyoNightColors.workbench['listFilterWidget.background'],
  'listFilterWidget.outline':
    tokyoNightColors.workbench['listFilterWidget.outline'],
  'listFilterWidget.noMatchesOutline':
    tokyoNightColors.workbench['listFilterWidget.noMatchesOutline'],
  'pickerGroup.foreground':
    tokyoNightColors.workbench['pickerGroup.foreground'],
  'pickerGroup.border': tokyoNightColors.workbench['pickerGroup.border'],
  'scrollbarSlider.background':
    tokyoNightColors.workbench['scrollbarSlider.background'],
  'scrollbarSlider.hoverBackground':
    tokyoNightColors.workbench['scrollbarSlider.hoverBackground'],
  'scrollbarSlider.activeBackground':
    tokyoNightColors.workbench['scrollbarSlider.activeBackground'],
  'editorBracketHighlight.foreground1':
    tokyoNightColors.workbench['editorBracketHighlight.foreground1'],
  'editorBracketHighlight.foreground2':
    tokyoNightColors.workbench['editorBracketHighlight.foreground2'],
  'editorBracketHighlight.foreground3':
    tokyoNightColors.workbench['editorBracketHighlight.foreground3'],
  'editorBracketHighlight.foreground4':
    tokyoNightColors.workbench['editorBracketHighlight.foreground4'],
  'editorBracketHighlight.foreground5':
    tokyoNightColors.workbench['editorBracketHighlight.foreground5'],
  'editorBracketHighlight.foreground6':
    tokyoNightColors.workbench['editorBracketHighlight.foreground6'],
  'editorBracketHighlight.unexpectedBracket.foreground':
    tokyoNightColors.workbench[
      'editorBracketHighlight.unexpectedBracket.foreground'
    ],
  'editorBracketPairGuide.activeBackground1':
    tokyoNightColors.workbench['editorBracketPairGuide.activeBackground1'],
  'editorBracketPairGuide.activeBackground2':
    tokyoNightColors.workbench['editorBracketPairGuide.activeBackground2'],
  'editorBracketPairGuide.activeBackground3':
    tokyoNightColors.workbench['editorBracketPairGuide.activeBackground3'],
  'editorBracketPairGuide.activeBackground4':
    tokyoNightColors.workbench['editorBracketPairGuide.activeBackground4'],
  'editorBracketPairGuide.activeBackground5':
    tokyoNightColors.workbench['editorBracketPairGuide.activeBackground5'],
  'editorBracketPairGuide.activeBackground6':
    tokyoNightColors.workbench['editorBracketPairGuide.activeBackground6'],
  'selection.background': tokyoNightColors.workbench['selection.background'],
  'editor.background': tokyoNightColors.workbench['editor.background'],
  'editor.foreground': tokyoNightColors.workbench['editor.foreground'],
  'editor.foldBackground': tokyoNightColors.workbench['editor.foldBackground'],
  'editorLink.activeForeground':
    tokyoNightColors.workbench['editorLink.activeForeground'],
  'editor.selectionBackground':
    tokyoNightColors.workbench['editor.selectionBackground'],
  'editor.inactiveSelectionBackground':
    tokyoNightColors.workbench['editor.inactiveSelectionBackground'],
  'editor.findMatchBackground':
    tokyoNightColors.workbench['editor.findMatchBackground'],
  'editor.findMatchBorder':
    tokyoNightColors.workbench['editor.findMatchBorder'],
  'editor.findMatchHighlightBackground':
    tokyoNightColors.workbench['editor.findMatchHighlightBackground'],
  'editor.findRangeHighlightBackground':
    tokyoNightColors.workbench['editor.findRangeHighlightBackground'],
  'editor.rangeHighlightBackground':
    tokyoNightColors.workbench['editor.rangeHighlightBackground'],
  'editor.wordHighlightBackground':
    tokyoNightColors.workbench['editor.wordHighlightBackground'],
  'editor.wordHighlightStrongBackground':
    tokyoNightColors.workbench['editor.wordHighlightStrongBackground'],
  'editor.selectionHighlightBackground':
    tokyoNightColors.workbench['editor.selectionHighlightBackground'],
  'editorCursor.foreground':
    tokyoNightColors.workbench['editorCursor.foreground'],
  'editorIndentGuide.background1':
    tokyoNightColors.workbench['editorIndentGuide.background1'],
  'editorIndentGuide.activeBackground1':
    tokyoNightColors.workbench['editorIndentGuide.activeBackground1'],
  'editorLineNumber.foreground':
    tokyoNightColors.workbench['editorLineNumber.foreground'],
  'editorLineNumber.activeForeground':
    tokyoNightColors.workbench['editorLineNumber.activeForeground'],
  'editor.lineHighlightBackground':
    tokyoNightColors.workbench['editor.lineHighlightBackground'],
  'editorWhitespace.foreground':
    tokyoNightColors.workbench['editorWhitespace.foreground'],
  'editorMarkerNavigation.background':
    tokyoNightColors.workbench['editorMarkerNavigation.background'],
  'editorHoverWidget.background':
    tokyoNightColors.workbench['editorHoverWidget.background'],
  'editorHoverWidget.border':
    tokyoNightColors.workbench['editorHoverWidget.border'],
  'editorBracketMatch.background':
    tokyoNightColors.workbench['editorBracketMatch.background'],
  'editorBracketMatch.border':
    tokyoNightColors.workbench['editorBracketMatch.border'],
  'editorOverviewRuler.border':
    tokyoNightColors.workbench['editorOverviewRuler.border'],
  'editorOverviewRuler.errorForeground':
    tokyoNightColors.workbench['editorOverviewRuler.errorForeground'],
  'editorOverviewRuler.warningForeground':
    tokyoNightColors.workbench['editorOverviewRuler.warningForeground'],
  'editorOverviewRuler.infoForeground':
    tokyoNightColors.workbench['editorOverviewRuler.infoForeground'],
  'editorOverviewRuler.bracketMatchForeground':
    tokyoNightColors.workbench['editorOverviewRuler.bracketMatchForeground'],
  'editorOverviewRuler.findMatchForeground':
    tokyoNightColors.workbench['editorOverviewRuler.findMatchForeground'],
  'editorOverviewRuler.rangeHighlightForeground':
    tokyoNightColors.workbench['editorOverviewRuler.rangeHighlightForeground'],
  'editorOverviewRuler.selectionHighlightForeground':
    tokyoNightColors.workbench[
      'editorOverviewRuler.selectionHighlightForeground'
    ],
  'editorOverviewRuler.wordHighlightForeground':
    tokyoNightColors.workbench['editorOverviewRuler.wordHighlightForeground'],
  'editorOverviewRuler.wordHighlightStrongForeground':
    tokyoNightColors.workbench[
      'editorOverviewRuler.wordHighlightStrongForeground'
    ],
  'editorOverviewRuler.modifiedForeground':
    tokyoNightColors.workbench['editorOverviewRuler.modifiedForeground'],
  'editorOverviewRuler.addedForeground':
    tokyoNightColors.workbench['editorOverviewRuler.addedForeground'],
  'editorOverviewRuler.deletedForeground':
    tokyoNightColors.workbench['editorOverviewRuler.deletedForeground'],
  'editorRuler.foreground':
    tokyoNightColors.workbench['editorRuler.foreground'],
  'editorError.foreground':
    tokyoNightColors.workbench['editorError.foreground'],
  'editorWarning.foreground':
    tokyoNightColors.workbench['editorWarning.foreground'],
  'editorInfo.foreground': tokyoNightColors.workbench['editorInfo.foreground'],
  'editorHint.foreground': tokyoNightColors.workbench['editorHint.foreground'],
  'editorGutter.modifiedBackground':
    tokyoNightColors.workbench['editorGutter.modifiedBackground'],
  'editorGutter.addedBackground':
    tokyoNightColors.workbench['editorGutter.addedBackground'],
  'editorGutter.deletedBackground':
    tokyoNightColors.workbench['editorGutter.deletedBackground'],
  'editorGhostText.foreground':
    tokyoNightColors.workbench['editorGhostText.foreground'],
  'minimapGutter.modifiedBackground':
    tokyoNightColors.workbench['minimapGutter.modifiedBackground'],
  'minimapGutter.addedBackground':
    tokyoNightColors.workbench['minimapGutter.addedBackground'],
  'minimapGutter.deletedBackground':
    tokyoNightColors.workbench['minimapGutter.deletedBackground'],
  'editorGroup.border': tokyoNightColors.workbench['editorGroup.border'],
  'editorGroup.dropBackground':
    tokyoNightColors.workbench['editorGroup.dropBackground'],
  'editorGroupHeader.tabsBorder':
    tokyoNightColors.workbench['editorGroupHeader.tabsBorder'],
  'editorGroupHeader.tabsBackground':
    tokyoNightColors.workbench['editorGroupHeader.tabsBackground'],
  'editorGroupHeader.noTabsBackground':
    tokyoNightColors.workbench['editorGroupHeader.noTabsBackground'],
  'editorGroupHeader.border':
    tokyoNightColors.workbench['editorGroupHeader.border'],
  'editorPane.background': tokyoNightColors.workbench['editorPane.background'],
  'editorWidget.foreground':
    tokyoNightColors.workbench['editorWidget.foreground'],
  'editorWidget.background':
    tokyoNightColors.workbench['editorWidget.background'],
  'editorWidget.border': tokyoNightColors.workbench['editorWidget.border'],
  'editorWidget.resizeBorder':
    tokyoNightColors.workbench['editorWidget.resizeBorder'],
  'editorSuggestWidget.background':
    tokyoNightColors.workbench['editorSuggestWidget.background'],
  'editorSuggestWidget.border':
    tokyoNightColors.workbench['editorSuggestWidget.border'],
  'editorSuggestWidget.selectedBackground':
    tokyoNightColors.workbench['editorSuggestWidget.selectedBackground'],
  'editorSuggestWidget.highlightForeground':
    tokyoNightColors.workbench['editorSuggestWidget.highlightForeground'],
  'editorCodeLens.foreground':
    tokyoNightColors.workbench['editorCodeLens.foreground'],
  'editorLightBulb.foreground':
    tokyoNightColors.workbench['editorLightBulb.foreground'],
  'editorLightBulbAutoFix.foreground':
    tokyoNightColors.workbench['editorLightBulbAutoFix.foreground'],
  'editorInlayHint.foreground':
    tokyoNightColors.workbench['editorInlayHint.foreground'],
  'peekView.border': tokyoNightColors.workbench['peekView.border'],
  'peekViewEditor.background':
    tokyoNightColors.workbench['peekViewEditor.background'],
  'peekViewEditor.matchHighlightBackground':
    tokyoNightColors.workbench['peekViewEditor.matchHighlightBackground'],
  'peekViewTitle.background':
    tokyoNightColors.workbench['peekViewTitle.background'],
  'peekViewTitleLabel.foreground':
    tokyoNightColors.workbench['peekViewTitleLabel.foreground'],
  'peekViewTitleDescription.foreground':
    tokyoNightColors.workbench['peekViewTitleDescription.foreground'],
  'peekViewResult.background':
    tokyoNightColors.workbench['peekViewResult.background'],
  'peekViewResult.selectionForeground':
    tokyoNightColors.workbench['peekViewResult.selectionForeground'],
  'peekViewResult.selectionBackground':
    tokyoNightColors.workbench['peekViewResult.selectionBackground'],
  'peekViewResult.lineForeground':
    tokyoNightColors.workbench['peekViewResult.lineForeground'],
  'peekViewResult.fileForeground':
    tokyoNightColors.workbench['peekViewResult.fileForeground'],
  'peekViewResult.matchHighlightBackground':
    tokyoNightColors.workbench['peekViewResult.matchHighlightBackground'],
  'diffEditor.insertedTextBackground':
    tokyoNightColors.workbench['diffEditor.insertedTextBackground'],
  'diffEditor.removedTextBackground':
    tokyoNightColors.workbench['diffEditor.removedTextBackground'],
  'diffEditor.insertedLineBackground':
    tokyoNightColors.workbench['diffEditor.insertedLineBackground'],
  'diffEditor.removedLineBackground':
    tokyoNightColors.workbench['diffEditor.removedLineBackground'],
  'diffEditorGutter.insertedLineBackground':
    tokyoNightColors.workbench['diffEditorGutter.insertedLineBackground'],
  'diffEditorGutter.removedLineBackground':
    tokyoNightColors.workbench['diffEditorGutter.removedLineBackground'],
  'diffEditorOverview.insertedForeground':
    tokyoNightColors.workbench['diffEditorOverview.insertedForeground'],
  'diffEditorOverview.removedForeground':
    tokyoNightColors.workbench['diffEditorOverview.removedForeground'],
  'diffEditor.diagonalFill':
    tokyoNightColors.workbench['diffEditor.diagonalFill'],
  'diffEditor.unchangedCodeBackground':
    tokyoNightColors.workbench['diffEditor.unchangedCodeBackground'],
  'multiDiffEditor.headerBackground':
    tokyoNightColors.workbench['multiDiffEditor.headerBackground'],
  'multiDiffEditor.border':
    tokyoNightColors.workbench['multiDiffEditor.border'],
  'breadcrumb.background': tokyoNightColors.workbench['breadcrumb.background'],
  'breadcrumbPicker.background':
    tokyoNightColors.workbench['breadcrumbPicker.background'],
  'breadcrumb.foreground': tokyoNightColors.workbench['breadcrumb.foreground'],
  'breadcrumb.focusForeground':
    tokyoNightColors.workbench['breadcrumb.focusForeground'],
  'breadcrumb.activeSelectionForeground':
    tokyoNightColors.workbench['breadcrumb.activeSelectionForeground'],
  'tab.activeBackground': tokyoNightColors.workbench['tab.activeBackground'],
  'tab.inactiveBackground':
    tokyoNightColors.workbench['tab.inactiveBackground'],
  'tab.activeForeground': tokyoNightColors.workbench['tab.activeForeground'],
  'tab.hoverForeground': tokyoNightColors.workbench['tab.hoverForeground'],
  'tab.activeBorder': tokyoNightColors.workbench['tab.activeBorder'],
  'tab.inactiveForeground':
    tokyoNightColors.workbench['tab.inactiveForeground'],
  'tab.border': tokyoNightColors.workbench['tab.border'],
  'tab.unfocusedActiveForeground':
    tokyoNightColors.workbench['tab.unfocusedActiveForeground'],
  'tab.unfocusedInactiveForeground':
    tokyoNightColors.workbench['tab.unfocusedInactiveForeground'],
  'tab.unfocusedHoverForeground':
    tokyoNightColors.workbench['tab.unfocusedHoverForeground'],
  'tab.activeModifiedBorder':
    tokyoNightColors.workbench['tab.activeModifiedBorder'],
  'tab.inactiveModifiedBorder':
    tokyoNightColors.workbench['tab.inactiveModifiedBorder'],
  'tab.unfocusedActiveBorder':
    tokyoNightColors.workbench['tab.unfocusedActiveBorder'],
  'tab.lastPinnedBorder': tokyoNightColors.workbench['tab.lastPinnedBorder'],
  'panel.background': tokyoNightColors.workbench['panel.background'],
  'panel.border': tokyoNightColors.workbench['panel.border'],
  'panelTitle.activeForeground':
    tokyoNightColors.workbench['panelTitle.activeForeground'],
  'panelTitle.inactiveForeground':
    tokyoNightColors.workbench['panelTitle.inactiveForeground'],
  'panelTitle.activeBorder':
    tokyoNightColors.workbench['panelTitle.activeBorder'],
  'panelInput.border': tokyoNightColors.workbench['panelInput.border'],
  'statusBar.foreground': tokyoNightColors.workbench['statusBar.foreground'],
  'statusBar.background': tokyoNightColors.workbench['statusBar.background'],
  'statusBar.border': tokyoNightColors.workbench['statusBar.border'],
  'statusBar.noFolderBackground':
    tokyoNightColors.workbench['statusBar.noFolderBackground'],
  'statusBar.debuggingBackground':
    tokyoNightColors.workbench['statusBar.debuggingBackground'],
  'statusBar.debuggingForeground':
    tokyoNightColors.workbench['statusBar.debuggingForeground'],
  'statusBarItem.activeBackground':
    tokyoNightColors.workbench['statusBarItem.activeBackground'],
  'statusBarItem.hoverBackground':
    tokyoNightColors.workbench['statusBarItem.hoverBackground'],
  'statusBarItem.prominentBackground':
    tokyoNightColors.workbench['statusBarItem.prominentBackground'],
  'statusBarItem.prominentHoverBackground':
    tokyoNightColors.workbench['statusBarItem.prominentHoverBackground'],
  'titleBar.activeForeground':
    tokyoNightColors.workbench['titleBar.activeForeground'],
  'titleBar.inactiveForeground':
    tokyoNightColors.workbench['titleBar.inactiveForeground'],
  'titleBar.activeBackground':
    tokyoNightColors.workbench['titleBar.activeBackground'],
  'titleBar.inactiveBackground':
    tokyoNightColors.workbench['titleBar.inactiveBackground'],
  'titleBar.border': tokyoNightColors.workbench['titleBar.border'],
  'walkThrough.embeddedEditorBackground':
    tokyoNightColors.workbench['walkThrough.embeddedEditorBackground'],
  'textLink.foreground': tokyoNightColors.workbench['textLink.foreground'],
  'textLink.activeForeground':
    tokyoNightColors.workbench['textLink.activeForeground'],
  'textPreformat.foreground':
    tokyoNightColors.workbench['textPreformat.foreground'],
  'textBlockQuote.background':
    tokyoNightColors.workbench['textBlockQuote.background'],
  'textCodeBlock.background':
    tokyoNightColors.workbench['textCodeBlock.background'],
  'textSeparator.foreground':
    tokyoNightColors.workbench['textSeparator.foreground'],
  'debugExceptionWidget.border':
    tokyoNightColors.workbench['debugExceptionWidget.border'],
  'debugExceptionWidget.background':
    tokyoNightColors.workbench['debugExceptionWidget.background'],
  'debugToolBar.background':
    tokyoNightColors.workbench['debugToolBar.background'],
  'debugConsole.infoForeground':
    tokyoNightColors.workbench['debugConsole.infoForeground'],
  'debugConsole.errorForeground':
    tokyoNightColors.workbench['debugConsole.errorForeground'],
  'debugConsole.sourceForeground':
    tokyoNightColors.workbench['debugConsole.sourceForeground'],
  'debugConsole.warningForeground':
    tokyoNightColors.workbench['debugConsole.warningForeground'],
  'debugConsoleInputIcon.foreground':
    tokyoNightColors.workbench['debugConsoleInputIcon.foreground'],
  'editor.stackFrameHighlightBackground':
    tokyoNightColors.workbench['editor.stackFrameHighlightBackground'],
  'editor.focusedStackFrameHighlightBackground':
    tokyoNightColors.workbench['editor.focusedStackFrameHighlightBackground'],
  'debugView.stateLabelForeground':
    tokyoNightColors.workbench['debugView.stateLabelForeground'],
  'debugView.stateLabelBackground':
    tokyoNightColors.workbench['debugView.stateLabelBackground'],
  'debugView.valueChangedHighlight':
    tokyoNightColors.workbench['debugView.valueChangedHighlight'],
  'debugTokenExpression.name':
    tokyoNightColors.workbench['debugTokenExpression.name'],
  'debugTokenExpression.value':
    tokyoNightColors.workbench['debugTokenExpression.value'],
  'debugTokenExpression.string':
    tokyoNightColors.workbench['debugTokenExpression.string'],
  'debugTokenExpression.boolean':
    tokyoNightColors.workbench['debugTokenExpression.boolean'],
  'debugTokenExpression.number':
    tokyoNightColors.workbench['debugTokenExpression.number'],
  'debugTokenExpression.error':
    tokyoNightColors.workbench['debugTokenExpression.error'],
  'debugIcon.breakpointForeground':
    tokyoNightColors.workbench['debugIcon.breakpointForeground'],
  'debugIcon.breakpointDisabledForeground':
    tokyoNightColors.workbench['debugIcon.breakpointDisabledForeground'],
  'debugIcon.breakpointUnverifiedForeground':
    tokyoNightColors.workbench['debugIcon.breakpointUnverifiedForeground'],
  'terminal.background': tokyoNightColors.workbench['terminal.background'],
  'terminal.foreground': tokyoNightColors.workbench['terminal.foreground'],
  'terminal.selectionBackground':
    tokyoNightColors.workbench['terminal.selectionBackground'],
  'terminal.ansiBlack': tokyoNightColors.workbench['terminal.ansiBlack'],
  'terminal.ansiRed': tokyoNightColors.workbench['terminal.ansiRed'],
  'terminal.ansiGreen': tokyoNightColors.workbench['terminal.ansiGreen'],
  'terminal.ansiYellow': tokyoNightColors.workbench['terminal.ansiYellow'],
  'terminal.ansiBlue': tokyoNightColors.workbench['terminal.ansiBlue'],
  'terminal.ansiMagenta': tokyoNightColors.workbench['terminal.ansiMagenta'],
  'terminal.ansiCyan': tokyoNightColors.workbench['terminal.ansiCyan'],
  'terminal.ansiWhite': tokyoNightColors.workbench['terminal.ansiWhite'],
  'terminal.ansiBrightBlack':
    tokyoNightColors.workbench['terminal.ansiBrightBlack'],
  'terminal.ansiBrightRed':
    tokyoNightColors.workbench['terminal.ansiBrightRed'],
  'terminal.ansiBrightGreen':
    tokyoNightColors.workbench['terminal.ansiBrightGreen'],
  'terminal.ansiBrightYellow':
    tokyoNightColors.workbench['terminal.ansiBrightYellow'],
  'terminal.ansiBrightBlue':
    tokyoNightColors.workbench['terminal.ansiBrightBlue'],
  'terminal.ansiBrightMagenta':
    tokyoNightColors.workbench['terminal.ansiBrightMagenta'],
  'terminal.ansiBrightCyan':
    tokyoNightColors.workbench['terminal.ansiBrightCyan'],
  'terminal.ansiBrightWhite':
    tokyoNightColors.workbench['terminal.ansiBrightWhite'],
  'gitDecoration.modifiedResourceForeground':
    tokyoNightColors.workbench['gitDecoration.modifiedResourceForeground'],
  'gitDecoration.ignoredResourceForeground':
    tokyoNightColors.workbench['gitDecoration.ignoredResourceForeground'],
  'gitDecoration.deletedResourceForeground':
    tokyoNightColors.workbench['gitDecoration.deletedResourceForeground'],
  'gitDecoration.renamedResourceForeground':
    tokyoNightColors.workbench['gitDecoration.renamedResourceForeground'],
  'gitDecoration.addedResourceForeground':
    tokyoNightColors.workbench['gitDecoration.addedResourceForeground'],
  'gitDecoration.untrackedResourceForeground':
    tokyoNightColors.workbench['gitDecoration.untrackedResourceForeground'],
  'gitDecoration.conflictingResourceForeground':
    tokyoNightColors.workbench['gitDecoration.conflictingResourceForeground'],
  'gitDecoration.stageDeletedResourceForeground':
    tokyoNightColors.workbench['gitDecoration.stageDeletedResourceForeground'],
  'gitDecoration.stageModifiedResourceForeground':
    tokyoNightColors.workbench['gitDecoration.stageModifiedResourceForeground'],
  'notebook.editorBackground':
    tokyoNightColors.workbench['notebook.editorBackground'],
  'notebook.cellEditorBackground':
    tokyoNightColors.workbench['notebook.cellEditorBackground'],
  'notebook.cellBorderColor':
    tokyoNightColors.workbench['notebook.cellBorderColor'],
  'notebook.focusedCellBorder':
    tokyoNightColors.workbench['notebook.focusedCellBorder'],
  'notebook.cellStatusBarItemHoverBackground':
    tokyoNightColors.workbench['notebook.cellStatusBarItemHoverBackground'],
  'charts.red': tokyoNightColors.workbench['charts.red'],
  'charts.blue': tokyoNightColors.workbench['charts.blue'],
  'charts.yellow': tokyoNightColors.workbench['charts.yellow'],
  'charts.orange': tokyoNightColors.workbench['charts.orange'],
  'charts.green': tokyoNightColors.workbench['charts.green'],
  'charts.purple': tokyoNightColors.workbench['charts.purple'],
  'charts.foreground': tokyoNightColors.workbench['charts.foreground'],
  'charts.lines': tokyoNightColors.workbench['charts.lines'],
  'scmGraph.historyItemHoverLabelForeground':
    tokyoNightColors.workbench['scmGraph.historyItemHoverLabelForeground'],
  'scmGraph.foreground1': tokyoNightColors.workbench['scmGraph.foreground1'],
  'scmGraph.foreground2': tokyoNightColors.workbench['scmGraph.foreground2'],
  'scmGraph.foreground3': tokyoNightColors.workbench['scmGraph.foreground3'],
  'scmGraph.foreground4': tokyoNightColors.workbench['scmGraph.foreground4'],
  'scmGraph.foreground5': tokyoNightColors.workbench['scmGraph.foreground5'],
  'scmGraph.historyItemHoverAdditionsForeground':
    tokyoNightColors.workbench['scmGraph.historyItemHoverAdditionsForeground'],
  'scmGraph.historyItemHoverDeletionsForeground':
    tokyoNightColors.workbench['scmGraph.historyItemHoverDeletionsForeground'],
  'scmGraph.historyItemRefColor':
    tokyoNightColors.workbench['scmGraph.historyItemRefColor'],
  'scmGraph.historyItemRemoteRefColor':
    tokyoNightColors.workbench['scmGraph.historyItemRemoteRefColor'],
  'scmGraph.historyItemBaseRefColor':
    tokyoNightColors.workbench['scmGraph.historyItemBaseRefColor'],
  'scmGraph.historyItemHoverDefaultLabelForeground':
    tokyoNightColors.workbench[
      'scmGraph.historyItemHoverDefaultLabelForeground'
    ],
  'merge.currentHeaderBackground':
    tokyoNightColors.workbench['merge.currentHeaderBackground'],
  'merge.currentContentBackground':
    tokyoNightColors.workbench['merge.currentContentBackground'],
  'merge.incomingHeaderBackground':
    tokyoNightColors.workbench['merge.incomingHeaderBackground'],
  'merge.incomingContentBackground':
    tokyoNightColors.workbench['merge.incomingContentBackground'],
  'mergeEditor.change.background':
    tokyoNightColors.workbench['mergeEditor.change.background'],
  'mergeEditor.change.word.background':
    tokyoNightColors.workbench['mergeEditor.change.word.background'],
  'mergeEditor.conflict.unhandledUnfocused.border':
    tokyoNightColors.workbench[
      'mergeEditor.conflict.unhandledUnfocused.border'
    ],
  'mergeEditor.conflict.unhandledFocused.border':
    tokyoNightColors.workbench['mergeEditor.conflict.unhandledFocused.border'],
  'mergeEditor.conflict.handledUnfocused.border':
    tokyoNightColors.workbench['mergeEditor.conflict.handledUnfocused.border'],
  'mergeEditor.conflict.handledFocused.border':
    tokyoNightColors.workbench['mergeEditor.conflict.handledFocused.border'],
  'mergeEditor.conflict.handled.minimapOverViewRuler':
    tokyoNightColors.workbench[
      'mergeEditor.conflict.handled.minimapOverViewRuler'
    ],
  'mergeEditor.conflict.unhandled.minimapOverViewRuler':
    tokyoNightColors.workbench[
      'mergeEditor.conflict.unhandled.minimapOverViewRuler'
    ],
  'gitlens.trailingLineForegroundColor':
    tokyoNightColors.workbench['gitlens.trailingLineForegroundColor'],
  'gitlens.gutterUncommittedForegroundColor':
    tokyoNightColors.workbench['gitlens.gutterUncommittedForegroundColor'],
  'gitlens.gutterForegroundColor':
    tokyoNightColors.workbench['gitlens.gutterForegroundColor'],
  'gitlens.gutterBackgroundColor':
    tokyoNightColors.workbench['gitlens.gutterBackgroundColor'],
  'notificationCenterHeader.background':
    tokyoNightColors.workbench['notificationCenterHeader.background'],
  'notifications.background':
    tokyoNightColors.workbench['notifications.background'],
  'notificationLink.foreground':
    tokyoNightColors.workbench['notificationLink.foreground'],
  'notificationsErrorIcon.foreground':
    tokyoNightColors.workbench['notificationsErrorIcon.foreground'],
  'notificationsWarningIcon.foreground':
    tokyoNightColors.workbench['notificationsWarningIcon.foreground'],
  'notificationsInfoIcon.foreground':
    tokyoNightColors.workbench['notificationsInfoIcon.foreground'],
  'menubar.selectionForeground':
    tokyoNightColors.workbench['menubar.selectionForeground'],
  'menubar.selectionBackground':
    tokyoNightColors.workbench['menubar.selectionBackground'],
  'menubar.selectionBorder':
    tokyoNightColors.workbench['menubar.selectionBorder'],
  'menu.foreground': tokyoNightColors.workbench['menu.foreground'],
  'menu.background': tokyoNightColors.workbench['menu.background'],
  'menu.selectionForeground':
    tokyoNightColors.workbench['menu.selectionForeground'],
  'menu.selectionBackground':
    tokyoNightColors.workbench['menu.selectionBackground'],
  'menu.separatorBackground':
    tokyoNightColors.workbench['menu.separatorBackground'],
  'menu.border': tokyoNightColors.workbench['menu.border'],
  'chat.requestBorder': tokyoNightColors.workbench['chat.requestBorder'],
  'chat.avatarBackground': tokyoNightColors.workbench['chat.avatarBackground'],
  'chat.avatarForeground': tokyoNightColors.workbench['chat.avatarForeground'],
  'chat.slashCommandBackground':
    tokyoNightColors.workbench['chat.slashCommandBackground'],
  'chat.slashCommandForeground':
    tokyoNightColors.workbench['chat.slashCommandForeground'],
  'inlineChat.foreground': tokyoNightColors.workbench['inlineChat.foreground'],
  'inlineChatInput.background':
    tokyoNightColors.workbench['inlineChatInput.background'],
  'inlineChatDiff.inserted':
    tokyoNightColors.workbench['inlineChatDiff.inserted'],
  'inlineChatDiff.removed':
    tokyoNightColors.workbench['inlineChatDiff.removed'],
})

/**
 * Генератор токенов подсветки синтаксиса для Tokyo Night
 */
export const generateTokyoNightTokenColors = () => [
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
      foreground: tokyoNightColors.tokenColors.comment,
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
      foreground: tokyoNightColors.tokenColors.commentDoc,
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
      foreground: tokyoNightColors.tokenColors.commentDocEmphasized,
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
      foreground: tokyoNightColors.tokenColors.numberBooleanUndefinedNull,
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
      foreground: tokyoNightColors.tokenColors.string,
    },
  },
  {
    name: 'Colors',
    scope: [
      'constant.other.color',
      'constant.other.color.rgb-value.hex punctuation.definition.constant',
    ],
    settings: {
      foreground: tokyoNightColors.tokenColors.stringConstant,
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: {
      foreground: tokyoNightColors.tokenColors.invalid,
    },
  },
  {
    name: 'Invalid deprecated',
    scope: 'invalid.deprecated',
    settings: {
      foreground: tokyoNightColors.tokenColors.invalidDeprecated,
    },
  },
  {
    name: 'Storage Type',
    scope: 'storage.type',
    settings: {
      foreground: tokyoNightColors.tokenColors.storageType,
    },
  },
  {
    name: 'Storage - modifier, var, const, let',
    scope: ['meta.var.expr storage.type', 'storage.modifier'],
    settings: {
      foreground: tokyoNightColors.tokenColors.storageModifier,
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
      foreground: tokyoNightColors.tokenColors.interpolation,
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
      foreground: tokyoNightColors.tokenColors.bladeTwigKeywords,
    },
  },
  {
    name: 'Spread',
    scope: ['keyword.operator.spread', 'keyword.operator.rest'],
    settings: {
      foreground: tokyoNightColors.tokenColors.spread,
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
      foreground: tokyoNightColors.tokenColors.operatorMisc,
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
      foreground: tokyoNightColors.tokenColors.importExportFromDefault,
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword', 'keyword.control', 'keyword.other.important'],
    settings: {
      foreground: tokyoNightColors.tokenColors.keyword,
    },
  },
  {
    name: 'Keyword SQL',
    scope: 'keyword.other.DML',
    settings: {
      foreground: tokyoNightColors.tokenColors.keywordSQL,
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
      foreground: tokyoNightColors.tokenColors.keywordOperator,
    },
  },
  {
    name: 'Tag',
    scope: 'entity.name.tag',
    settings: {
      foreground: tokyoNightColors.tokenColors.tag,
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
      foreground: tokyoNightColors.tokenColors.tagCustom,
    },
  },
  {
    name: 'Tag Punctuation',
    scope: [
      'punctuation.definition.tag',
      'text.html.php meta.embedded.block.html meta.tag.metadata.script.end.html punctuation.definition.tag.begin.html text.html.basic',
    ],
    settings: {
      foreground: tokyoNightColors.tokenColors.tagPunctuation,
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
      foreground: tokyoNightColors.tokenColors.globals,
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
      foreground: tokyoNightColors.tokenColors.variables,
    },
  },
  {
    name: 'Variable Array Key',
    scope: 'meta.array.literal variable',
    settings: {
      foreground: tokyoNightColors.tokenColors.variableArrayKey,
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
      foreground: tokyoNightColors.tokenColors.objectKey,
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
      foreground: tokyoNightColors.tokenColors.objectProperty,
    },
  },
  {
    name: 'Object Property',
    scope: 'variable.other.object.property',
    settings: {
      foreground: tokyoNightColors.tokenColors.objectPropertyOther,
    },
  },
  {
    name: 'Object Literal Member lvl 3 (Vue Prop Validation)',
    scope:
      'meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key',
    settings: {
      foreground: tokyoNightColors.tokenColors.objectLiteralMemberLvl3,
    },
  },
  {
    name: 'C-related Block Level Variables',
    scope: 'source.cpp meta.block variable.other',
    settings: {
      foreground: tokyoNightColors.tokenColors.cBlockLevelVariables,
    },
  },
  {
    name: 'Other Variable',
    scope: 'support.other.variable',
    settings: {
      foreground: tokyoNightColors.tokenColors.otherVariable,
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
      foreground: tokyoNightColors.tokenColors.methods,
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
      foreground: tokyoNightColors.tokenColors.functionDefinition,
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
      foreground: tokyoNightColors.tokenColors.functionArgument,
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
      foreground: tokyoNightColors.tokenColors.constantTagAttribute,
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
      foreground: tokyoNightColors.tokenColors.variableDefinition,
    },
  },
  {
    name: 'Inherited Class',
    scope: 'entity.other.inherited-class',
    settings: {
      foreground: tokyoNightColors.tokenColors.inheritedClass,
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
      foreground: tokyoNightColors.tokenColors.classSupportDOM,
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
      foreground: '#449dab',
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
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
    ],
    settings: {
      foreground: baseTokenColors.variables.property,
    },
  },
  {
    name: 'JSON Key - Level 7',
    scope: [
      'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
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
    scope: ['meta.tag JSXNested', 'meta.jsx.children', 'text.html', 'text.log'],
    settings: {
      foreground: '#9aa5ce',
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
      foreground: '#4E5579',
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
      foreground: '#4e5579',
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

/**
 * Генерация полной темы Tokyo Night
 */
export const generateTokyoNightTheme = (): VSCodeTheme => ({
  name: 'Tokyo Night',
  type: 'dark',
  semanticHighlighting: true,
  semanticTokenColors: generateTokyoNightSemanticTokenColors(),
  colors: generateTokyoNightWorkbenchColors(),
  tokenColors: generateTokyoNightTokenColors(),
})
