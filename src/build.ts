/// <reference types="node" />
import { palette } from './palette'
import { withAlpha } from './utils/color'
import { tokenColors } from './tokenColors'
import { semanticTokenColors } from './semanticTokenColors'
import * as fs from 'node:fs'
import * as path from 'node:path'

/**
 * Minimal TS generator. For the first step, we only ensure we can write the existing theme file.
 * Next iterations can migrate colors step-by-step to use palette and helpers.
 */

const root = path.resolve(__dirname, '..')
const themePath = path.join(root, 'themes', 'tokyo-night-dark-color-theme.json')

export function buildColors(): Record<string, string> {
  return {
    // Top-level and base
    foreground: palette.fg.muted,
    descriptionForeground: '#515670',
    disabledForeground: palette.fg.inactive,
    focusBorder: '#545c7e33',
    errorForeground: '#515670',
    'widget.shadow': '#ffffff00',
    'scrollbar.shadow': '#00000033',

    // Badges, icons, settings
    'badge.background': '#7e83b230',
    'badge.foreground': '#c8d2f0',
    'icon.foreground': palette.fg.soft,
    'settings.headerForeground': '#6183bb',

    // Window + sash
    'window.activeBorder': '#0d0f17',
    'window.inactiveBorder': '#0d0f17',
    'sash.hoverBorder': '#29355a',

    // Extension buttons/badges
    'extensionButton.prominentBackground': '#3d59a1DD',
    'extensionButton.prominentHoverBackground': '#3d59a1AA',
    'extensionButton.prominentForeground': '#ffffff',
    'extensionBadge.remoteBackground': palette.brand.primary,
    'extensionBadge.remoteForeground': '#ffffff',

    // Buttons / progress
    'button.background': withAlpha(palette.brand.primary, 'dd'),
    'button.hoverBackground': withAlpha(palette.brand.primary, 'aa'),
    'button.foreground': '#ffffff',
    'progressBar.background': palette.brand.primary,

    // Inputs
    'input.background': '#141419',
    'input.foreground': palette.fg.primary,
    'input.border': '#0f0f14',
    'input.placeholderForeground': '#787c998A',
    'inputOption.activeForeground': '#c0caf5',
    'inputOption.activeBackground': '#3d59a144',
    'inputValidation.infoForeground': '#000000',
    'inputValidation.infoBackground': '#0da0ba',
    'inputValidation.infoBorder': '#0db9d7',
    'inputValidation.warningForeground': '#000000',
    'inputValidation.warningBackground': '#c2985b',
    'inputValidation.warningBorder': palette.accent.yellow,
    'inputValidation.errorForeground': '#bbc2e0',
    'inputValidation.errorBackground': '#85353e',
    'inputValidation.errorBorder': '#963c47',

    // Dropdowns
    'dropdown.foreground': palette.fg.muted,
    'dropdown.background': '#141419',
    'dropdown.listBackground': '#141419',

    // Activity bar
    'activityBar.background': palette.bg.base,
    'activityBar.foreground': palette.fg.soft,
    'activityBar.activeBorder': '#3b3e52',
    'activityBar.activeBackground': '#1f1f24',
    'activityBar.inactiveForeground': palette.fg.inactive,
    'activityBar.border': palette.line.border,
    'activityBarBadge.background': palette.brand.primary,
    'activityBarBadge.foreground': '#fff',

    // Side bar
    'tree.indentGuidesStroke': '#404050',
    'sideBar.foreground': palette.fg.soft,
    'sideBar.background': palette.bg.base,
    'sideBar.border': palette.line.border,
    'sideBarTitle.foreground': palette.fg.softTitle,
    'sideBarSectionHeader.background': palette.bg.base,
    'sideBarSectionHeader.foreground': palette.fg.selectionText,
    'sideBarSectionHeader.border': palette.line.border,
    'sideBar.dropBackground': '#1a1c28',

    // Lists
    'list.dropBackground': '#1a1c28',
    'list.deemphasizedForeground': palette.accent.blue,
    'list.activeSelectionBackground': palette.bg.selection.active,
    'list.activeSelectionForeground': palette.fg.onSelection,
    'list.inactiveSelectionBackground': palette.bg.selection.inactive,
    'list.inactiveSelectionForeground': palette.fg.inactive,
    'list.focusBackground': palette.bg.selection.focus,
    'list.focusForeground': palette.fg.onSelection,
    // When the list container is not focused but item has focus
    'list.inactiveFocusBackground': palette.bg.selection.inactive,
    // Keep the text subdued in inactive focus
    'list.inactiveFocusForeground': palette.fg.inactive,
    'list.hoverBackground': '#0f0f18',
    'list.hoverForeground': palette.fg.onSelection,
    'list.highlightForeground': palette.accent.blue,
    'list.invalidItemForeground': palette.accent.yellow,
    'list.errorForeground': palette.accent.red,
    'list.warningForeground': palette.accent.yellow,

    'listFilterWidget.background': palette.line.border,
    'listFilterWidget.outline': palette.brand.primary,
    'listFilterWidget.noMatchesOutline': '#a6333f',

    // Picker
    'pickerGroup.foreground': palette.fg.primary,
    'pickerGroup.border': palette.line.border,

    // Scrollbar slider
    'scrollbarSlider.background': '#868bc440',
    'scrollbarSlider.hoverBackground': '#868bc460',
    'scrollbarSlider.activeBackground': '#868bc480',

    // Bracket highlight/guide
    'editorBracketHighlight.foreground1': '#698cd6',
    'editorBracketHighlight.foreground2': '#68b3de',
    'editorBracketHighlight.foreground3': '#9a7ecc',
    'editorBracketHighlight.foreground4': '#25aac2',
    'editorBracketHighlight.foreground5': '#80a856',
    'editorBracketHighlight.foreground6': '#c49a5a',
    'editorBracketHighlight.unexpectedBracket.foreground': '#db4b4b',
    'editorBracketPairGuide.activeBackground1': '#698cd6',
    'editorBracketPairGuide.activeBackground2': '#68b3de',
    'editorBracketPairGuide.activeBackground3': '#9a7ecc',
    'editorBracketPairGuide.activeBackground4': '#25aac2',
    'editorBracketPairGuide.activeBackground5': '#80a856',
    'editorBracketPairGuide.activeBackground6': '#c49a5a',

    // Selections & highlights
    'selection.background': '#515c7e40',
    'editor.background': palette.bg.elevated,
    'editor.foreground': palette.fg.primary,
    'editor.foldBackground': '#1b1b214a',
    'editorLink.activeForeground': '#acb0d0',
    'editor.selectionBackground': '#515c7e40',
    // Use the same cool selection hue but lighter alpha for inactive selection
    'editor.inactiveSelectionBackground': '#515c7e25',
    'editor.findMatchBackground': '#3d59a166',
    'editor.findMatchBorder': palette.accent.yellow,
    'editor.findMatchHighlightBackground': '#3d59a166',
    'editor.findRangeHighlightBackground': '#515c7e33',
    'editor.rangeHighlightBackground': '#515c7e20',
    'editor.wordHighlightBackground': '#515c7e44',
    'editor.wordHighlightStrongBackground': '#515c7e55',
    'editor.selectionHighlightBackground': '#515c7e44',

    // Cursor/indent/line/whitespace
    'editorCursor.foreground': '#c0caf5',
    'editorIndentGuide.background1': '#282a38',
    'editorIndentGuide.activeBackground1': '#363b54',
    'editorLineNumber.foreground': '#363b54',
    'editorLineNumber.activeForeground': '#737aa2',
    'editor.lineHighlightBackground': '#282a38',
    'editorWhitespace.foreground': '#363b54',

    // Editor widgets/hover
    'editorMarkerNavigation.background': palette.bg.base,
    'editorHoverWidget.background': palette.bg.base,
    'editorHoverWidget.border': withAlpha(palette.line.border, '00'),
    'editorHoverWidget.foreground': palette.fg.primary,

    // Bracket match
    'editorBracketMatch.background': '#16161e',
    'editorBracketMatch.border': '#42465d',

    // Overview ruler
    'editorOverviewRuler.border': palette.line.border,
    'editorOverviewRuler.errorForeground': '#db4b4b',
    'editorOverviewRuler.warningForeground': palette.accent.yellow,
    'editorOverviewRuler.infoForeground': '#1abc9c',
    'editorOverviewRuler.bracketMatchForeground': palette.bg.overlay,
    'editorOverviewRuler.findMatchForeground': '#a9b1d644',
    'editorOverviewRuler.rangeHighlightForeground': '#a9b1d644',
    'editorOverviewRuler.selectionHighlightForeground': '#a9b1d622',
    'editorOverviewRuler.wordHighlightForeground': '#bb9af755',
    'editorOverviewRuler.wordHighlightStrongForeground': '#bb9af766',
    'editorOverviewRuler.modifiedForeground': '#394b70',
    'editorOverviewRuler.addedForeground': '#164846',
    'editorOverviewRuler.deletedForeground': '#703438',

    // Ruler/messages
    'editorRuler.foreground': palette.line.border,
    'editorError.foreground': '#db4b4b',
    'editorWarning.foreground': palette.accent.yellow,
    'editorInfo.foreground': '#0da0ba',
    'editorHint.foreground': '#0da0ba',

    // Gutter + minimap
    'editorGutter.modifiedBackground': '#394b70',
    'editorGutter.addedBackground': '#164846',
    'editorGutter.deletedBackground': '#823c41',
    'minimapGutter.modifiedBackground': '#425882',
    'minimapGutter.addedBackground': '#1C5957',
    'minimapGutter.deletedBackground': '#944449',

    // Editor groups/headers
    'editorGroup.border': palette.line.border,
    'editorGroup.dropBackground': '#282a38',
    'editorGroupHeader.tabsBorder': palette.line.border,
    'editorGroupHeader.tabsBackground': '#121214',
    'editorGroupHeader.noTabsBackground': '#121214',
    'editorGroupHeader.border': palette.line.border,
    'editorPane.background': palette.bg.base,

    // Editor widgets/suggest
    'editorWidget.background': palette.bg.base,
    'editorWidget.resizeBorder': '#545c7e33',
    'editorSuggestWidget.background': palette.bg.base,
    'editorSuggestWidget.border': '#00000000',
    'editorSuggestWidget.foreground': palette.fg.primary,
    'editorSuggestWidget.selectedBackground': palette.bg.selection.menu,
    'editorSuggestWidget.selectedForeground': palette.fg.onSelection,
    'editorSuggestWidget.highlightForeground': '#6183bb',
    'editorCodeLens.foreground': '#484f70',
    'editorLightBulb.foreground': palette.accent.yellow,
    'editorLightBulbAutoFix.foreground': palette.accent.yellow,

    // Peek view
    'peekView.border': palette.line.border,
    'peekViewEditor.background': palette.bg.base,
    'peekViewEditor.matchHighlightBackground': '#3d59a166',
    'peekViewTitle.background': palette.line.border,
    'peekViewTitleLabel.foreground': palette.fg.primary,
    'peekViewTitleDescription.foreground': palette.fg.muted,
    'peekViewResult.background': palette.bg.base,
    'peekViewResult.selectionForeground': palette.fg.primary,
    'peekViewResult.selectionBackground': '#3d59a133',
    'peekViewResult.lineForeground': palette.fg.primary,
    'peekViewResult.fileForeground': palette.fg.muted,
    'peekViewResult.matchHighlightBackground': '#3d59a166',

    // Diff editor
    'diffEditor.insertedTextBackground': '#41a6b522',
    'diffEditor.removedTextBackground': '#db4b4b22',

    // Breadcrumbs
    'breadcrumb.background': palette.bg.base,
    'breadcrumbPicker.background': palette.bg.base,
    'breadcrumb.foreground': '#515670',
    'breadcrumb.focusForeground': palette.fg.primary,
    'breadcrumb.activeSelectionForeground': palette.fg.primary,

    // Tabs
    'tab.activeBackground': palette.bg.elevated,
    'tab.inactiveBackground': palette.bg.base,
    'tab.activeForeground': palette.fg.onSelection,
    'tab.hoverForeground': palette.fg.onSelection,
    'tab.activeBorder': '#5a7bc4',
    'tab.inactiveForeground': palette.fg.inactive,
    'tab.border': palette.line.border,
    'tab.unfocusedActiveForeground': palette.fg.soft,
    'tab.unfocusedInactiveForeground': palette.fg.inactive,
    'tab.unfocusedHoverForeground': palette.fg.soft,
    'tab.activeModifiedBorder': '#1a1b26',
    'tab.inactiveModifiedBorder': '#1f202e',
    'tab.unfocusedActiveBorder': '#1f202e',
    'tab.lastPinnedBorder': '#222333',

    // Panels
    'panel.background': palette.bg.base,
    'panel.border': palette.line.border,
    'panelTitle.activeForeground': palette.fg.activeTitle,
    'panelTitle.inactiveForeground': palette.fg.inactive,
    'panelTitle.activeBorder': palette.bg.sunken,
    'panelInput.border': palette.bg.sunken,

    // Status bar
    'statusBar.foreground': palette.fg.muted,
    'statusBar.background': palette.bg.base,
    'statusBar.border': palette.line.border,
    'statusBar.noFolderBackground': palette.bg.sunken,
    'statusBar.debuggingBackground': palette.bg.sunken,
    'statusBar.debuggingForeground': palette.fg.muted,
    'statusBarItem.activeBackground': '#1f1f24',
    'statusBarItem.hoverBackground': '#252732',
    'statusBarItem.prominentBackground': palette.bg.overlay,
    'statusBarItem.prominentHoverBackground': '#20222c',

    // Title bar
    'titleBar.activeForeground': palette.fg.muted,
    'titleBar.inactiveForeground': palette.fg.inactive,
    'titleBar.activeBackground': palette.bg.base,
    'titleBar.inactiveBackground': palette.bg.base,
    'titleBar.border': palette.line.border,

    // Text
    'walkThrough.embeddedEditorBackground': palette.bg.sunken,
    'textLink.foreground': '#6183bb',
    'textLink.activeForeground': palette.accent.cyan,
    'textPreformat.foreground': '#9699a8',
    'textBlockQuote.background': palette.bg.sunken,
    'textCodeBlock.background': palette.bg.sunken,
    'textSeparator.foreground': '#363b54',

    // Debug
    'debugExceptionWidget.border': '#963c47',
    'debugExceptionWidget.background': palette.bg.base,
    'debugToolBar.background': palette.bg.base,
    'debugConsole.infoForeground': palette.fg.muted,
    'debugConsole.errorForeground': '#bb616b',
    'debugConsole.sourceForeground': palette.fg.muted,
    'debugConsole.warningForeground': '#c49a5a',
    'debugConsoleInputIcon.foreground': palette.accent.teal,
    'editor.stackFrameHighlightBackground': '#E2BD3A20',
    'editor.focusedStackFrameHighlightBackground': '#73daca20',
    'debugView.stateLabelForeground': palette.fg.muted,
    'debugView.stateLabelBackground': '#1e1e25',
    'debugView.valueChangedHighlight': '#3d59a1aa',
    'debugTokenExpression.name': palette.accent.cyan,
    'debugTokenExpression.value': '#9aa5ce',
    'debugTokenExpression.string': '#9ece6a',
    'debugTokenExpression.boolean': palette.accent.orange,
    'debugTokenExpression.number': palette.accent.orange,
    'debugTokenExpression.error': '#bb616b',

    // Terminal
    'terminal.background': palette.bg.base,
    'terminal.foreground': palette.fg.primary,
    'terminal.selectionBackground': '#515c7e30',
    'terminalCursor.background': '',
    'terminalCursor.foreground': '',
    'terminal.ansiBlack': palette.ansi.black,
    'terminal.ansiRed': palette.ansi.red,
    'terminal.ansiGreen': palette.ansi.green,
    'terminal.ansiYellow': palette.ansi.yellow,
    'terminal.ansiBlue': palette.ansi.blue,
    'terminal.ansiMagenta': palette.ansi.magenta,
    'terminal.ansiCyan': palette.ansi.cyan,
    'terminal.ansiWhite': palette.ansi.white,
    'terminal.ansiBrightBlack': palette.ansi.brightBlack,
    'terminal.ansiBrightRed': palette.ansi.brightRed,
    'terminal.ansiBrightGreen': palette.ansi.brightGreen,
    'terminal.ansiBrightYellow': palette.ansi.brightYellow,
    'terminal.ansiBrightBlue': palette.ansi.brightBlue,
    'terminal.ansiBrightMagenta': palette.ansi.brightMagenta,
    'terminal.ansiBrightCyan': palette.ansi.brightCyan,
    'terminal.ansiBrightWhite': palette.ansi.brightWhite,

    // Git decorations
    'gitDecoration.modifiedResourceForeground': palette.accent.blue,
    'gitDecoration.ignoredResourceForeground': '#515670',
    'gitDecoration.deletedResourceForeground': '#914c54',
    'gitDecoration.renamedResourceForeground': palette.accent.teal,
    'gitDecoration.addedResourceForeground': palette.accent.teal,
    'gitDecoration.untrackedResourceForeground': palette.accent.teal,
    'gitDecoration.conflictingResourceForeground': '#bb7a61',
    'gitDecoration.stageDeletedResourceForeground': '#914c54',
    'gitDecoration.stageModifiedResourceForeground': '#6183bb',

    // Charts
    'charts.red': palette.accent.red,
    'charts.blue': palette.accent.blue,
    'charts.yellow': palette.accent.yellow,
    'charts.orange': palette.accent.orange,
    'charts.green': palette.accent.teal,
    'charts.purple': palette.accent.purple,
    'charts.foreground': '#9aa5ce',
    'charts.lines': palette.line.border,

    // Merge
    'merge.currentHeaderBackground': '#007a75aa',
    'merge.currentContentBackground': '#007a7544',
    'merge.incomingHeaderBackground': '#3d59a1aa',
    'merge.incomingContentBackground': '#3d59a144',

    // GitLens
    'gitlens.trailingLineForegroundColor': '#444b6a',
    'gitlens.gutterUncommittedForegroundColor': '#444b6a',
    'gitlens.gutterForegroundColor': '#444b6a',

    // Notifications
    'notificationCenterHeader.background': palette.bg.base,
    'notifications.background': palette.bg.base,
    'notificationLink.foreground': '#6183bb',
    'notificationsErrorIcon.foreground': palette.accent.red,
    'notificationsWarningIcon.foreground': palette.accent.yellow,
    'notificationsInfoIcon.foreground': palette.accent.blue,
    'notificationToast.border': palette.line.border,
    'notifications.border': palette.line.border,
    'notifications.foreground': palette.fg.primary,

    // Menus
    'menubar.selectionForeground': palette.fg.selectionText,
    'menubar.selectionBackground': palette.bg.selection.menu,
    'menubar.selectionBorder': palette.line.menu,
    'menu.foreground': palette.fg.soft,
    'menu.background': palette.bg.base,
    'menu.selectionForeground': palette.fg.selectionText,
    'menu.selectionBackground': palette.bg.selection.menu,
    'menu.separatorBackground': palette.line.border,
    'menu.border': withAlpha(palette.line.border, '00'),
    // Quick input (Command Palette, Quick Fix picker)
    'quickInput.background': palette.bg.base,
    'quickInput.foreground': palette.fg.primary,
    'quickInputTitle.background': palette.bg.sunken,
    'quickInputList.focusBackground': palette.bg.selection.focus,
    'quickInputList.focusForeground': palette.fg.onSelection,
  }
}

function main() {
  const original = fs.readFileSync(themePath, 'utf8')
  const theme = JSON.parse(original) as Record<string, any>

  theme.colors = buildColors()
  theme.tokenColors = tokenColors
  theme.semanticTokenColors = semanticTokenColors

  const out = JSON.stringify(theme, null, 2) + '\n'
  fs.writeFileSync(themePath, out, 'utf8')
}

if (require.main === module) {
  main()
}
