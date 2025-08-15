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
    // Top-level and base - улучшенная контрастность
    foreground: palette.fg.primary,
    descriptionForeground: palette.fg.muted,
    disabledForeground: palette.fg.inactive,
    focusBorder: withAlpha(palette.brand.primary, '33'),
    errorForeground: palette.accent.red,
    'widget.shadow': withAlpha(palette.fg.subtle, '00'),
    'scrollbar.shadow': withAlpha(palette.fg.subtle, '33'),

    // Badges, icons, settings - улучшенная видимость
    'badge.background': withAlpha(palette.brand.primary, 'DD'),
    'badge.foreground': '#FFFFFF',
    'icon.foreground': palette.fg.soft,
    'settings.headerForeground': palette.fg.primary,

    // Window + sash
    'window.activeBorder': '#0d0f17',
    'window.inactiveBorder': '#0d0f17',
    'sash.hoverBorder': '#29355a',

    // Extension buttons/badges - стандартизация с VS Code
    'extensionButton.prominentBackground': palette.brand.primary,
    'extensionButton.prominentHoverBackground': withAlpha(
      palette.brand.primary,
      'AA'
    ),
    'extensionButton.prominentForeground': '#ffffff',
    'extensionBadge.remoteBackground': palette.brand.primary,
    'extensionBadge.remoteForeground': '#ffffff',

    // Buttons / progress - улучшенный контраст
    'button.background': palette.brand.primary,
    'button.hoverBackground': withAlpha(palette.brand.primary, 'AA'),
    'button.foreground': '#ffffff',
    'button.secondaryBackground': withAlpha(palette.fg.subtle, '20'),
    'button.secondaryHoverBackground': withAlpha(palette.fg.subtle, '30'),
    'button.secondaryForeground': palette.fg.primary,
    'progressBar.background': palette.brand.primary,

    // Inputs - улучшенная доступность
    'input.background': palette.bg.input,
    'input.foreground': palette.fg.primary,
    'input.border': palette.line.border,
    'input.placeholderForeground': withAlpha(palette.fg.subtle, '60'),
    'inputOption.activeForeground': palette.fg.onSelection,
    'inputOption.activeBackground': palette.bg.selection.active,
    'inputValidation.infoForeground': palette.fg.primary,
    'inputValidation.infoBackground': withAlpha(palette.accent.cyan, '20'),
    'inputValidation.infoBorder': palette.accent.cyan,
    'inputValidation.warningForeground': palette.fg.primary,
    'inputValidation.warningBackground': withAlpha(palette.accent.yellow, '20'),
    'inputValidation.warningBorder': palette.accent.yellow,
    'inputValidation.errorForeground': palette.fg.primary,
    'inputValidation.errorBackground': withAlpha(palette.accent.red, '20'),
    'inputValidation.errorBorder': palette.accent.red,

    // Dropdowns
    'dropdown.foreground': palette.fg.muted,
    'dropdown.background': palette.bg.input,
    'dropdown.listBackground': palette.bg.input,

    // Activity bar - стандартизация с VS Code
    'activityBar.background': palette.bg.base,
    'activityBar.foreground': palette.fg.primary,
    'activityBar.activeBorder': palette.brand.primary,
    'activityBar.activeBackground': palette.bg.elevated,
    'activityBar.inactiveForeground': palette.fg.subtle,
    'activityBar.border': palette.line.border,
    'activityBarBadge.background': palette.brand.primary,
    'activityBarBadge.foreground': '#ffffff',

    // Side bar - улучшенная иерархия
    'tree.indentGuidesStroke': palette.line.border,
    'sideBar.foreground': palette.fg.primary,
    'sideBar.background': palette.bg.sunken,
    'sideBar.border': palette.line.border,
    'sideBarTitle.foreground': palette.fg.softTitle,
    'sideBarSectionHeader.background': palette.bg.elevated,
    'sideBarSectionHeader.foreground': palette.fg.primary,
    'sideBarSectionHeader.border': palette.line.border,
    'sideBar.dropBackground': palette.bg.drop,

    // Lists - улучшенная контрастность
    'list.dropBackground': palette.bg.drop,
    'list.deemphasizedForeground': palette.fg.subtle,
    'list.activeSelectionBackground': palette.bg.selection.active,
    'list.activeSelectionForeground': palette.fg.onSelection,
    'list.inactiveSelectionBackground': palette.bg.selection.inactive,
    'list.inactiveSelectionForeground': palette.fg.subtle,
    'list.focusBackground': palette.bg.selection.focus,
    'list.focusForeground': palette.fg.onSelection,
    // When the list container is not focused but item has focus
    'list.inactiveFocusBackground': palette.bg.selection.inactive,
    // Keep the text subdued in inactive focus
    'list.inactiveFocusForeground': palette.fg.subtle,
    'list.hoverBackground': palette.bg.hover,
    'list.hoverForeground': palette.fg.primary,
    'list.highlightForeground': palette.brand.primary,
    'list.invalidItemForeground': palette.accent.yellow,
    'list.errorForeground': palette.accent.red,
    'list.warningForeground': palette.accent.yellow,

    'listFilterWidget.background': palette.line.border,
    'listFilterWidget.outline': palette.brand.primary,
    'listFilterWidget.noMatchesOutline': '#a6333f',

    // Picker - улучшенная читаемость
    'pickerGroup.foreground': palette.fg.primary,
    'pickerGroup.border': palette.line.border,
    'pickerGroup.background': palette.bg.elevated,

    // Scrollbar slider - улучшенная видимость
    'scrollbarSlider.background': withAlpha(palette.fg.subtle, '40'),
    'scrollbarSlider.hoverBackground': withAlpha(palette.fg.subtle, '60'),
    'scrollbarSlider.activeBackground': withAlpha(palette.fg.subtle, '80'),

    // Bracket highlight/guide - улучшенная видимость
    'editorBracketHighlight.foreground1': palette.accent.blue,
    'editorBracketHighlight.foreground2': palette.accent.cyan,
    'editorBracketHighlight.foreground3': palette.accent.magenta,
    'editorBracketHighlight.foreground4': palette.accent.teal,
    'editorBracketHighlight.foreground5': palette.accent.orange,
    'editorBracketHighlight.foreground6': palette.accent.yellow,
    'editorBracketHighlight.unexpectedBracket.foreground': palette.accent.red,
    'editorBracketPairGuide.activeBackground1': withAlpha(
      palette.accent.blue,
      '30'
    ),
    'editorBracketPairGuide.activeBackground2': withAlpha(
      palette.accent.cyan,
      '30'
    ),
    'editorBracketPairGuide.activeBackground3': withAlpha(
      palette.accent.magenta,
      '30'
    ),
    'editorBracketPairGuide.activeBackground4': withAlpha(
      palette.accent.teal,
      '30'
    ),
    'editorBracketPairGuide.activeBackground5': withAlpha(
      palette.accent.orange,
      '30'
    ),
    'editorBracketPairGuide.activeBackground6': withAlpha(
      palette.accent.yellow,
      '30'
    ),

    // Selections & highlights - улучшенная контрастность
    'selection.background': palette.bg.selection.active,
    'editor.background': palette.bg.base,
    'editor.foreground': palette.fg.primary,
    'editor.foldBackground': withAlpha(palette.bg.elevated, '4a'),
    'editorLink.activeForeground': palette.accent.cyan,
    'editor.selectionBackground': palette.bg.selection.active,
    // Use the same cool selection hue but lighter alpha for inactive selection
    'editor.inactiveSelectionBackground': palette.bg.selection.inactive,
    'editor.findMatchBackground': withAlpha(palette.brand.primary, '66'),
    'editor.findMatchBorder': palette.accent.yellow,
    'editor.findMatchHighlightBackground': withAlpha(
      palette.brand.primary,
      '66'
    ),
    'editor.findRangeHighlightBackground': withAlpha(palette.fg.subtle, '33'),
    'editor.rangeHighlightBackground': withAlpha(palette.fg.subtle, '20'),
    'editor.wordHighlightBackground': withAlpha(
      palette.bg.selection.active,
      '60'
    ),
    'editor.wordHighlightStrongBackground': withAlpha(
      palette.bg.selection.active,
      '80'
    ),
    'editor.selectionHighlightBackground': withAlpha(
      palette.bg.selection.active,
      '60'
    ),

    // Cursor/indent/line/whitespace - улучшенная видимость
    'editorCursor.foreground': palette.fg.primary,
    'editorIndentGuide.background1': withAlpha(palette.fg.subtle, '20'),
    'editorIndentGuide.activeBackground1': withAlpha(palette.fg.subtle, '40'),
    'editorLineNumber.foreground': palette.fg.subtle,
    'editorLineNumber.activeForeground': palette.fg.primary,
    'editor.lineHighlightBackground': palette.bg.lineHighlight,
    'editorWhitespace.foreground': withAlpha(palette.fg.subtle, '40'),

    // Editor widgets/hover - улучшенная контрастность
    'editorMarkerNavigation.background': palette.bg.elevated,
    'editorHoverWidget.background': palette.bg.elevated,
    'editorHoverWidget.border': palette.line.border,
    'editorHoverWidget.foreground': palette.fg.primary,

    // Bracket match - улучшенная видимость
    'editorBracketMatch.background': palette.bg.bracketMatch,
    'editorBracketMatch.border': palette.accent.blue,

    // Overview ruler
    'editorOverviewRuler.border': palette.line.border,
    'editorOverviewRuler.errorForeground': '#db4b4b',
    'editorOverviewRuler.warningForeground': palette.accent.yellow,
    'editorOverviewRuler.infoForeground': '#1abc9c',
    'editorOverviewRuler.bracketMatchForeground': palette.bg.overlay,
    'editorOverviewRuler.findMatchForeground': withAlpha(
      palette.fg.primary,
      '44'
    ),
    'editorOverviewRuler.rangeHighlightForeground': withAlpha(
      palette.fg.primary,
      '44'
    ),
    'editorOverviewRuler.selectionHighlightForeground': withAlpha(
      palette.fg.primary,
      '22'
    ),
    'editorOverviewRuler.wordHighlightForeground': withAlpha(
      palette.accent.magenta,
      '55'
    ),
    'editorOverviewRuler.wordHighlightStrongForeground': withAlpha(
      palette.accent.magenta,
      '66'
    ),
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
    'editorGroup.dropBackground': palette.bg.lineHighlight,
    'editorGroupHeader.tabsBorder': palette.line.border,
    'editorGroupHeader.tabsBackground': palette.bg.tabs,
    'editorGroupHeader.noTabsBackground': palette.bg.tabs,
    'editorGroupHeader.border': palette.line.border,
    'editorPane.background': palette.bg.base,

    // Editor widgets/suggest
    'editorWidget.background': palette.bg.base,
    'editorWidget.resizeBorder': withAlpha(palette.fg.subtle, '33'),
    'editorSuggestWidget.background': palette.bg.base,
    'editorSuggestWidget.border': withAlpha(palette.ansi.black, '00'),
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
    'peekViewEditor.matchHighlightBackground': withAlpha(
      palette.brand.primary,
      '66'
    ),
    'peekViewTitle.background': palette.line.border,
    'peekViewTitleLabel.foreground': palette.fg.primary,
    'peekViewTitleDescription.foreground': palette.fg.muted,
    'peekViewResult.background': palette.bg.base,
    'peekViewResult.selectionForeground': palette.fg.primary,
    'peekViewResult.selectionBackground': withAlpha(
      palette.brand.primary,
      '33'
    ),
    'peekViewResult.lineForeground': palette.fg.primary,
    'peekViewResult.fileForeground': palette.fg.muted,
    'peekViewResult.matchHighlightBackground': withAlpha(
      palette.brand.primary,
      '66'
    ),

    // Diff editor
    'diffEditor.insertedTextBackground': withAlpha(palette.accent.cyan, '22'),
    'diffEditor.removedTextBackground': withAlpha(palette.accent.red, '22'),

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
    'statusBarItem.activeBackground': palette.bg.active,
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
    'editor.stackFrameHighlightBackground': withAlpha(
      palette.accent.yellow,
      '20'
    ),
    'editor.focusedStackFrameHighlightBackground': withAlpha(
      palette.accent.teal,
      '20'
    ),
    'debugView.stateLabelForeground': palette.fg.muted,
    'debugView.stateLabelBackground': '#1e1e25',
    'debugView.valueChangedHighlight': withAlpha(palette.brand.primary, 'aa'),
    'debugTokenExpression.name': palette.accent.cyan,
    'debugTokenExpression.value': '#9aa5ce',
    'debugTokenExpression.string': '#9ece6a',
    'debugTokenExpression.boolean': palette.accent.orange,
    'debugTokenExpression.number': palette.accent.orange,
    'debugTokenExpression.error': '#bb616b',

    // Terminal
    'terminal.background': palette.bg.base,
    'terminal.foreground': palette.fg.primary,
    'terminal.selectionBackground': withAlpha(palette.fg.subtle, '30'),
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
    'merge.currentHeaderBackground': withAlpha(palette.accent.teal, 'aa'),
    'merge.currentContentBackground': withAlpha(palette.accent.teal, '44'),
    'merge.incomingHeaderBackground': withAlpha(palette.brand.primary, 'aa'),
    'merge.incomingContentBackground': withAlpha(palette.brand.primary, '44'),

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
