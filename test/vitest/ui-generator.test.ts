import { describe, expect, it } from 'vitest'
import { generateButtonColors } from '../../src/theme/generator/ui/buttons'
import { generateCoreColors } from '../../src/theme/generator/ui/core'
import { generateDiffColors } from '../../src/theme/generator/ui/diff'
import { generateEditorColors } from '../../src/theme/generator/ui/editor'
import { generateGitColors } from '../../src/theme/generator/ui/git'
import { generateInputColors } from '../../src/theme/generator/ui/inputs'
import { generateListColors } from '../../src/theme/generator/ui/lists'
import { generateMiscColors } from '../../src/theme/generator/ui/misc'
import { generatePanelColors } from '../../src/theme/generator/ui/panels'
import { generateSidebarColors } from '../../src/theme/generator/ui/sidebar'
import { generateTabColors } from '../../src/theme/generator/ui/tabs'
import { generateTerminalColors } from '../../src/theme/generator/ui/terminal'

describe('UI Generator Tests', () => {
  describe('Core Colors', () => {
    it('should generate core colors', () => {
      const colors = generateCoreColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')
      expect(colors.foreground).toBeDefined()
      expect(colors.descriptionForeground).toBeDefined()
      expect(colors.disabledForeground).toBeDefined()
      expect(colors.focusBorder).toBeDefined()
      expect(colors.errorForeground).toBeDefined()
      expect(colors['widget.shadow']).toBeDefined()
      expect(colors['scrollbar.shadow']).toBeDefined()
      expect(colors['badge.background']).toBeDefined()
      expect(colors['badge.foreground']).toBeDefined()
      expect(colors['icon.foreground']).toBeDefined()
      expect(colors['settings.headerForeground']).toBeDefined()
      expect(colors['window.activeBorder']).toBeDefined()
      expect(colors['window.inactiveBorder']).toBeDefined()
      expect(colors['sash.hoverBorder']).toBeDefined()
      expect(colors['toolbar.activeBackground']).toBeDefined()
      expect(colors['toolbar.hoverBackground']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateCoreColors()
      for (const [, value] of Object.entries(colors)) {
        expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      }
    })
  })

  describe('Button Colors', () => {
    it('should generate button colors', () => {
      const colors = generateButtonColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')
      expect(colors['extensionButton.prominentBackground']).toBeDefined()
      expect(colors['extensionButton.prominentHoverBackground']).toBeDefined()
      expect(colors['extensionButton.prominentForeground']).toBeDefined()
      expect(colors['extensionBadge.remoteBackground']).toBeDefined()
      expect(colors['extensionBadge.remoteForeground']).toBeDefined()
      expect(colors['button.background']).toBeDefined()
      expect(colors['button.hoverBackground']).toBeDefined()
      expect(colors['button.secondaryBackground']).toBeDefined()
      expect(colors['button.foreground']).toBeDefined()
      expect(colors['progressBar.background']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateButtonColors()
      for (const [, value] of Object.entries(colors)) {
        expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      }
    })
  })

  describe('Editor Colors', () => {
    it('should generate editor colors', () => {
      const colors = generateEditorColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check a sample of important editor colors
      expect(colors['selection.background']).toBeDefined()
      expect(colors['editor.background']).toBeDefined()
      expect(colors['editor.foreground']).toBeDefined()
      expect(colors['editor.foldBackground']).toBeDefined()
      expect(colors['editor.selectionBackground']).toBeDefined()
      expect(colors['editorCursor.foreground']).toBeDefined()
      expect(colors['editorIndentGuide.background1']).toBeDefined()
      expect(colors['editorLineNumber.foreground']).toBeDefined()
      expect(colors['editorHoverWidget.background']).toBeDefined()
      expect(colors['editorBracketMatch.background']).toBeDefined()
      expect(colors['editorOverviewRuler.errorForeground']).toBeDefined()
      expect(colors['editorGroup.border']).toBeDefined()
      expect(colors['editorWidget.background']).toBeDefined()
      expect(colors['editorSuggestWidget.background']).toBeDefined()
      expect(colors['peekViewEditor.background']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateEditorColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('Diff Colors', () => {
    it('should generate diff colors', () => {
      const colors = generateDiffColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that diff colors are generated
      expect(colors['diffEditor.insertedTextBackground']).toBeDefined()
      expect(colors['diffEditor.insertedLineBackground']).toBeDefined()
      expect(colors['diffEditor.removedTextBackground']).toBeDefined()
      expect(colors['diffEditor.removedLineBackground']).toBeDefined()
      expect(colors['diffEditor.diagonalFill']).toBeDefined()
      expect(colors['diffEditor.unchangedCodeBackground']).toBeDefined()
      expect(colors['multiDiffEditor.headerBackground']).toBeDefined()
      expect(colors['multiDiffEditor.border']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateDiffColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('Git Colors', () => {
    it('should generate git colors', () => {
      const colors = generateGitColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that git colors are generated
      expect(colors['gitDecoration.modifiedResourceForeground']).toBeDefined()
      expect(colors['gitDecoration.ignoredResourceForeground']).toBeDefined()
      expect(colors['gitDecoration.deletedResourceForeground']).toBeDefined()
      expect(colors['gitDecoration.addedResourceForeground']).toBeDefined()
      expect(colors['gitDecoration.untrackedResourceForeground']).toBeDefined()
      expect(
        colors['gitDecoration.conflictingResourceForeground']
      ).toBeDefined()
      expect(colors['gitDecoration.renamedResourceForeground']).toBeDefined()
      expect(
        colors['gitDecoration.stageDeletedResourceForeground']
      ).toBeDefined()
      expect(
        colors['gitDecoration.stageModifiedResourceForeground']
      ).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateGitColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('Input Colors', () => {
    it('should generate input colors', () => {
      const colors = generateInputColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that input colors are generated
      expect(colors['input.background']).toBeDefined()
      expect(colors['input.foreground']).toBeDefined()
      expect(colors['input.border']).toBeDefined()
      expect(colors['input.placeholderForeground']).toBeDefined()
      expect(colors['inputOption.activeForeground']).toBeDefined()
      expect(colors['inputOption.activeForeground']).toBeDefined()
      expect(colors['inputOption.activeBackground']).toBeDefined()
      expect(colors['dropdown.foreground']).toBeDefined()
      expect(colors['dropdown.background']).toBeDefined()
      expect(colors['dropdown.listBackground']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateInputColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('List Colors', () => {
    it('should generate list colors', () => {
      const colors = generateListColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that list colors are generated
      expect(colors['list.dropBackground']).toBeDefined()
      expect(colors['list.deemphasizedForeground']).toBeDefined()
      expect(colors['list.activeSelectionBackground']).toBeDefined()
      expect(colors['list.activeSelectionForeground']).toBeDefined()
      expect(colors['list.inactiveSelectionBackground']).toBeDefined()
      expect(colors['list.inactiveSelectionForeground']).toBeDefined()
      expect(colors['list.focusBackground']).toBeDefined()
      expect(colors['list.focusForeground']).toBeDefined()
      expect(colors['list.hoverBackground']).toBeDefined()
      expect(colors['list.hoverForeground']).toBeDefined()
      expect(colors['list.highlightForeground']).toBeDefined()
      expect(colors['list.invalidItemForeground']).toBeDefined()
      expect(colors['list.errorForeground']).toBeDefined()
      expect(colors['list.warningForeground']).toBeDefined()
      expect(colors['listFilterWidget.background']).toBeDefined()
      expect(colors['listFilterWidget.outline']).toBeDefined()
      expect(colors['listFilterWidget.noMatchesOutline']).toBeDefined()
      expect(colors['pickerGroup.foreground']).toBeDefined()
      expect(colors['pickerGroup.border']).toBeDefined()
      expect(colors['scrollbarSlider.background']).toBeDefined()
      expect(colors['scrollbarSlider.hoverBackground']).toBeDefined()
      expect(colors['scrollbarSlider.activeBackground']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateListColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('Misc Colors', () => {
    it('should generate misc colors', () => {
      const colors = generateMiscColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that misc colors are generated
      expect(colors['walkThrough.embeddedEditorBackground']).toBeDefined()
      expect(colors['textLink.foreground']).toBeDefined()
      expect(colors['textLink.activeForeground']).toBeDefined()
      expect(colors['textPreformat.foreground']).toBeDefined()
      expect(colors['textBlockQuote.background']).toBeDefined()
      expect(colors['textCodeBlock.background']).toBeDefined()
      expect(colors['textSeparator.foreground']).toBeDefined()
      expect(colors['debugExceptionWidget.border']).toBeDefined()
      expect(colors['debugExceptionWidget.background']).toBeDefined()
      expect(colors['debugToolBar.background']).toBeDefined()
      expect(colors['debugConsole.infoForeground']).toBeDefined()
      expect(colors['debugConsole.errorForeground']).toBeDefined()
      expect(colors['debugConsole.sourceForeground']).toBeDefined()
      expect(colors['debugConsole.warningForeground']).toBeDefined()
      expect(colors['debugConsoleInputIcon.foreground']).toBeDefined()
      expect(colors['editor.stackFrameHighlightBackground']).toBeDefined()
      expect(
        colors['editor.focusedStackFrameHighlightBackground']
      ).toBeDefined()
      expect(colors['debugView.stateLabelForeground']).toBeDefined()
      expect(colors['debugView.stateLabelBackground']).toBeDefined()
      expect(colors['debugView.valueChangedHighlight']).toBeDefined()
      expect(colors['debugTokenExpression.name']).toBeDefined()
      expect(colors['debugTokenExpression.value']).toBeDefined()
      expect(colors['debugTokenExpression.string']).toBeDefined()
      expect(colors['debugTokenExpression.boolean']).toBeDefined()
      expect(colors['debugTokenExpression.number']).toBeDefined()
      expect(colors['debugTokenExpression.error']).toBeDefined()
      expect(colors['debugIcon.breakpointForeground']).toBeDefined()
      expect(colors['debugIcon.breakpointDisabledForeground']).toBeDefined()
      expect(colors['debugIcon.breakpointUnverifiedForeground']).toBeDefined()
      expect(colors['notebook.editorBackground']).toBeDefined()
      expect(colors['notebook.cellEditorBackground']).toBeDefined()
      expect(colors['notebook.cellBorderColor']).toBeDefined()
      expect(colors['notebook.focusedCellBorder']).toBeDefined()
      expect(colors['notebook.cellStatusBarItemHoverBackground']).toBeDefined()
      expect(colors['charts.red']).toBeDefined()
      expect(colors['charts.blue']).toBeDefined()
      expect(colors['charts.yellow']).toBeDefined()
      expect(colors['charts.orange']).toBeDefined()
      expect(colors['charts.green']).toBeDefined()
      expect(colors['charts.purple']).toBeDefined()
      expect(colors['charts.foreground']).toBeDefined()
      expect(colors['charts.lines']).toBeDefined()
      expect(colors['scmGraph.historyItemHoverLabelForeground']).toBeDefined()
      expect(colors['scmGraph.foreground1']).toBeDefined()
      expect(colors['scmGraph.foreground2']).toBeDefined()
      expect(colors['scmGraph.foreground3']).toBeDefined()
      expect(colors['scmGraph.foreground4']).toBeDefined()
      expect(colors['scmGraph.foreground5']).toBeDefined()
      expect(
        colors['scmGraph.historyItemHoverAdditionsForeground']
      ).toBeDefined()
      expect(
        colors['scmGraph.historyItemHoverDeletionsForeground']
      ).toBeDefined()
      expect(colors['scmGraph.historyItemRefColor']).toBeDefined()
      expect(colors['scmGraph.historyItemRemoteRefColor']).toBeDefined()
      expect(colors['scmGraph.historyItemBaseRefColor']).toBeDefined()
      expect(
        colors['scmGraph.historyItemHoverDefaultLabelForeground']
      ).toBeDefined()
      expect(colors['merge.currentHeaderBackground']).toBeDefined()
      expect(colors['merge.currentContentBackground']).toBeDefined()
      expect(colors['merge.incomingHeaderBackground']).toBeDefined()
      expect(colors['merge.incomingContentBackground']).toBeDefined()
      expect(colors['mergeEditor.change.background']).toBeDefined()
      expect(colors['mergeEditor.change.word.background']).toBeDefined()
      expect(
        colors['mergeEditor.conflict.unhandledUnfocused.border']
      ).toBeDefined()
      expect(
        colors['mergeEditor.conflict.unhandledFocused.border']
      ).toBeDefined()
      expect(
        colors['mergeEditor.conflict.handledUnfocused.border']
      ).toBeDefined()
      expect(colors['mergeEditor.conflict.handledFocused.border']).toBeDefined()
      expect(
        colors['mergeEditor.conflict.handled.minimapOverViewRuler']
      ).toBeDefined()
      expect(
        colors['mergeEditor.conflict.unhandled.minimapOverViewRuler']
      ).toBeDefined()
      expect(colors['gitlens.trailingLineForegroundColor']).toBeDefined()
      expect(colors['gitlens.gutterUncommittedForegroundColor']).toBeDefined()
      expect(colors['gitlens.gutterForegroundColor']).toBeDefined()
      expect(colors['gitlens.gutterBackgroundColor']).toBeDefined()
      expect(colors['notificationCenterHeader.background']).toBeDefined()
      expect(colors['notifications.background']).toBeDefined()
      expect(colors['notificationLink.foreground']).toBeDefined()
      expect(colors['notificationsErrorIcon.foreground']).toBeDefined()
      expect(colors['notificationsWarningIcon.foreground']).toBeDefined()
      expect(colors['notificationsInfoIcon.foreground']).toBeDefined()
      expect(colors['menubar.selectionForeground']).toBeDefined()
      expect(colors['menubar.selectionBackground']).toBeDefined()
      expect(colors['menubar.selectionBorder']).toBeDefined()
      expect(colors['menu.foreground']).toBeDefined()
      expect(colors['menu.background']).toBeDefined()
      expect(colors['menu.selectionForeground']).toBeDefined()
      expect(colors['menu.selectionBackground']).toBeDefined()
      expect(colors['menu.separatorBackground']).toBeDefined()
      expect(colors['menu.border']).toBeDefined()
      expect(colors['chat.requestBorder']).toBeDefined()
      expect(colors['chat.avatarBackground']).toBeDefined()
      expect(colors['chat.avatarForeground']).toBeDefined()
      expect(colors['chat.slashCommandBackground']).toBeDefined()
      expect(colors['chat.slashCommandForeground']).toBeDefined()
      expect(colors['inlineChat.foreground']).toBeDefined()
      expect(colors['inlineChatInput.background']).toBeDefined()
      expect(colors['inlineChatDiff.inserted']).toBeDefined()
      expect(colors['inlineChatDiff.removed']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateMiscColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('Panel Colors', () => {
    it('should generate panel colors', () => {
      const colors = generatePanelColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that panel colors are generated
      expect(colors['panel.background']).toBeDefined()
      expect(colors['panel.border']).toBeDefined()
      expect(colors['panelTitle.activeForeground']).toBeDefined()
      expect(colors['panelTitle.inactiveForeground']).toBeDefined()
      expect(colors['panelTitle.activeBorder']).toBeDefined()
      expect(colors['panelInput.border']).toBeDefined()
      expect(colors['panelStickyScroll.background']).toBeDefined()
      expect(colors['statusBar.foreground']).toBeDefined()
      expect(colors['statusBar.background']).toBeDefined()
      expect(colors['statusBar.border']).toBeDefined()
      expect(colors['statusBar.focusBorder']).toBeDefined()
      expect(colors['statusBar.noFolderBackground']).toBeDefined()
      expect(colors['statusBar.debuggingBackground']).toBeDefined()
      expect(colors['statusBar.debuggingForeground']).toBeDefined()
      expect(colors['statusBarItem.activeBackground']).toBeDefined()
      expect(colors['statusBarItem.hoverBackground']).toBeDefined()
      expect(colors['statusBarItem.prominentBackground']).toBeDefined()
      expect(colors['statusBarItem.prominentHoverBackground']).toBeDefined()
      expect(colors['statusBarItem.focusBorder']).toBeDefined()
      expect(colors['statusBarItem.remoteBackground']).toBeDefined()
      expect(colors['titleBar.activeForeground']).toBeDefined()
      expect(colors['titleBar.inactiveForeground']).toBeDefined()
      expect(colors['titleBar.activeBackground']).toBeDefined()
      expect(colors['titleBar.inactiveBackground']).toBeDefined()
      expect(colors['titleBar.border']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generatePanelColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('Sidebar Colors', () => {
    it('should generate sidebar colors', () => {
      const colors = generateSidebarColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that sidebar colors are generated
      expect(colors['sideBar.background']).toBeDefined()
      expect(colors['sideBar.foreground']).toBeDefined()
      expect(colors['sideBar.border']).toBeDefined()
      expect(colors['sideBar.dropBackground']).toBeDefined()
      expect(colors['sideBarTitle.foreground']).toBeDefined()
      expect(colors['sideBarSectionHeader.background']).toBeDefined()
      expect(colors['sideBarSectionHeader.foreground']).toBeDefined()
      expect(colors['sideBarSectionHeader.border']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateSidebarColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('Tab Colors', () => {
    it('should generate tab colors', () => {
      const colors = generateTabColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that tab colors are generated
      expect(colors['breadcrumb.background']).toBeDefined()
      expect(colors['breadcrumbPicker.background']).toBeDefined()
      expect(colors['breadcrumb.foreground']).toBeDefined()
      expect(colors['breadcrumb.focusForeground']).toBeDefined()
      expect(colors['breadcrumb.activeSelectionForeground']).toBeDefined()
      expect(colors['tab.activeBackground']).toBeDefined()
      expect(colors['tab.inactiveBackground']).toBeDefined()
      expect(colors['tab.activeForeground']).toBeDefined()
      expect(colors['tab.hoverForeground']).toBeDefined()
      expect(colors['tab.activeBorderTop']).toBeDefined()
      expect(colors['tab.inactiveForeground']).toBeDefined()
      expect(colors['tab.border']).toBeDefined()
      expect(colors['tab.unfocusedActiveForeground']).toBeDefined()
      expect(colors['tab.unfocusedInactiveForeground']).toBeDefined()
      expect(colors['tab.unfocusedHoverForeground']).toBeDefined()
      expect(colors['tab.activeModifiedBorder']).toBeDefined()
      expect(colors['tab.inactiveModifiedBorder']).toBeDefined()
      expect(colors['tab.unfocusedActiveModifiedBorder']).toBeDefined()
      expect(colors['tab.unfocusedInactiveModifiedBorder']).toBeDefined()
      expect(colors['tab.unfocusedActiveBorder']).toBeDefined()
      expect(colors['tab.lastPinnedBorder']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateTabColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })

  describe('Terminal Colors', () => {
    it('should generate terminal colors', () => {
      const colors = generateTerminalColors()
      expect(colors).toBeDefined()
      expect(typeof colors).toBe('object')

      // Check that terminal colors are generated
      expect(colors['terminal.background']).toBeDefined()
      expect(colors['terminal.foreground']).toBeDefined()
      expect(colors['terminal.ansiBlack']).toBeDefined()
      expect(colors['terminal.ansiRed']).toBeDefined()
      expect(colors['terminal.ansiGreen']).toBeDefined()
      expect(colors['terminal.ansiYellow']).toBeDefined()
      expect(colors['terminal.ansiBlue']).toBeDefined()
      expect(colors['terminal.ansiMagenta']).toBeDefined()
      expect(colors['terminal.ansiCyan']).toBeDefined()
      expect(colors['terminal.ansiWhite']).toBeDefined()
      expect(colors['terminal.ansiBrightBlack']).toBeDefined()
      expect(colors['terminal.ansiBrightRed']).toBeDefined()
      expect(colors['terminal.ansiBrightGreen']).toBeDefined()
      expect(colors['terminal.ansiBrightYellow']).toBeDefined()
      expect(colors['terminal.ansiBrightBlue']).toBeDefined()
      expect(colors['terminal.ansiBrightMagenta']).toBeDefined()
      expect(colors['terminal.ansiBrightCyan']).toBeDefined()
      expect(colors['terminal.ansiBrightWhite']).toBeDefined()
      expect(colors['terminal.selectionBackground']).toBeDefined()
      expect(colors['terminalCursor.background']).toBeDefined()
      expect(colors['terminalCursor.foreground']).toBeDefined()
    })

    it('should have valid color values', () => {
      const colors = generateTerminalColors()
      for (const [, value] of Object.entries(colors)) {
        if (typeof value === 'string') {
          expect(value).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
      }
    })
  })
})
