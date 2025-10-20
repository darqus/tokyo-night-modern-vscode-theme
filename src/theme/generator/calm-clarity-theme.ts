import { calmClarityPalette } from '../palette/calm-clarity'
import { syntaxTokenPalette } from '../palette/calm-clarity-syntax'
import { generateSemanticTokenColors } from './semantic-token-colors'

/**
 * Генератор темы "Спокойная Четкость" для VS Code
 *
 * Архитектура:
 * - Использует базовую палитру calmClarityPalette
 * - Структурированные цвета интерфейса (workbench colors)
 * - Семантически сгруппированные правила подсветки синтаксиса
 * - Поддержка альфа-канала для полупрозрачности
 */

interface VSCodeTheme {
  name: string
  type: 'dark' | 'light'
  colors: Record<string, string>
  tokenColors: Array<{
    name?: string
    scope: string | string[]
    settings: {
      foreground?: string
      background?: string
      fontStyle?: string
    }
  }>
  semanticHighlighting: boolean
  semanticTokenColors?: Record<string, unknown>
}

/**
 * Генерация цветов интерфейса (workbench colors) на основе палитры
 */
const generateWorkbenchColors = () => {
  const { workbench, button, syntax } = calmClarityPalette

  return {
    // Activity Bar
    'activityBar.background': workbench.background.activityBar,
    'activityBar.foreground': workbench.accent.primary,
    'activityBar.inactiveForeground': calmClarityPalette.getColorWithAlpha(
      syntax.text,
      'active'
    ),
    'activityBar.border': workbench.border.main,
    'activityBar.activeBorder': workbench.border.main,
    'activityBarBadge.background': workbench.accent.primary,
    'activityBarBadge.foreground': workbench.foreground.badge,

    // Side Bar
    'sideBar.background': workbench.background.sidebar,
    'sideBar.foreground': syntax.text,
    'sideBar.border': workbench.border.main,
    'sideBarTitle.foreground': workbench.accent.primary,
    'sideBarSectionHeader.background': workbench.background.secondary,
    'sideBarSectionHeader.foreground': syntax.text,

    // Title Bar
    'titleBar.activeBackground': workbench.background.titlebar,
    'titleBar.activeForeground': syntax.text,
    'titleBar.inactiveBackground': workbench.background.base,
    'titleBar.inactiveForeground': syntax.text,

    // Icon Foreground
    'icon.foreground': workbench.foreground.secondary,
    // Tab Bar
    'tab.activeBackground': workbench.background.tabbar,
    'tab.activeForeground': workbench.accent.primary,
    'tab.inactiveBackground': workbench.background.secondary,
    'tab.inactiveForeground': workbench.accent.secondary,
    'tab.border': workbench.border.main,
    'tab.activeBorder': workbench.accent.primary,
    'tab.hoverBackground': workbench.background.tertiary,
    'editorGroupHeader.tabsBackground': workbench.background.base,

    // Editor
    'editor.background': workbench.background.base,
    'editor.foreground': syntax.text,
    'editorLineNumber.foreground': calmClarityPalette.neutral.highlight,
    'editorLineNumber.activeForeground': calmClarityPalette.neutral.base,
    'editorCursor.foreground': workbench.accent.primary,
    'editor.selectionBackground': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.highlight,
      'subtle'
    ),
    'editor.inactiveSelectionBackground': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.subtle,
      'subtle'
    ),
    'editor.selectionHighlightBackground': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.syntax.yellow,
      'subtle'
    ),
    'editor.wordHighlightBackground': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.subtle,
      'subtle'
    ),
    'editor.wordHighlightStrongBackground':
      calmClarityPalette.getColorWithAlpha(
        calmClarityPalette.neutral.highlight,
        'subtle'
      ),
    'editor.findMatchBackground': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.syntax.cyan,
      'hover'
    ),
    'editor.findMatchHighlightBackground': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.syntax.purple,
      'subtle'
    ),
    'editor.lineHighlightBackground': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.surface,
      'hover'
    ),
    'editorBracketMatch.background': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.highlight,
      'subtle'
    ),
    'editorBracketMatch.border': workbench.border.main,
    'editorIndentGuide.background1': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.subtle,
      'subtle'
    ),
    'editorIndentGuide.activeBackground1': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.highlight,
      'subtle'
    ),
    'editorGutter.background': workbench.background.base,
    'editorHoverWidget.background': workbench.background.secondary,
    'editorHoverWidget.border': workbench.border.main,

    'editorHoverWidget.foreground': workbench.foreground.secondary,
    'editorSuggestWidget.background': workbench.background.secondary,
    'editorSuggestWidget.border': workbench.border.main,
    'editorSuggestWidget.foreground': syntax.text,
    'editorSuggestWidget.selectedBackground':
      calmClarityPalette.getColorWithAlpha(workbench.accent.primary, 'subtle'),

    // Status Bar
    'statusBar.background': workbench.background.statusbar,
    'statusBar.foreground': calmClarityPalette.getColorWithAlpha(
      syntax.text,
      'semiOpaque'
    ),
    'statusBar.debuggingBackground': syntax.warning,
    'statusBar.debuggingForeground': workbench.background.base,
    'statusBar.noFolderBackground': workbench.background.secondary,
    'statusBarItem.hoverBackground':
      calmClarityPalette.workbench.background.tertiary,
    'statusBarItem.activeBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.hover,
      'hover'
    ),

    // Panels
    'panel.background': workbench.background.base,
    'panel.border': workbench.border.main,
    'panelTitle.activeForeground': calmClarityPalette.neutral.base,
    'panelTitle.inactiveForeground': calmClarityPalette.neutral.subtle,
    'panelTitle.activeBorder': calmClarityPalette.neutral.highlight,

    // Terminal
    'terminal.background': workbench.background.base,
    'terminal.foreground': syntax.text,
    'terminal.ansiBlack': workbench.accent.secondary,
    'terminal.ansiRed': syntax.error,
    'terminal.ansiGreen': syntax.success,
    'terminal.ansiYellow': syntax.warning,
    'terminal.ansiBlue': workbench.accent.primary,
    'terminal.ansiMagenta': syntax.boolean,
    'terminal.ansiCyan': workbench.accent.secondary,
    'terminal.ansiWhite': syntax.text,
    'terminal.ansiBrightBlack': workbench.accent.secondary,
    'terminal.ansiBrightRed': syntax.error,
    'terminal.ansiBrightGreen': syntax.success,
    'terminal.ansiBrightYellow': syntax.warning,
    'terminal.ansiBrightBlue': workbench.accent.primary,
    'terminal.ansiBrightMagenta': syntax.boolean,
    'terminal.ansiBrightCyan': workbench.accent.secondary,
    'terminal.ansiBrightWhite': syntax.text,

    // Buttons and Inputs
    'button.background': button.primaryBackground,
    'button.foreground': button.primaryForeground,
    'button.hoverBackground': button.primaryHoverBackground,
    'button.secondaryBackground': button.secondaryBackground,
    'button.secondaryForeground': button.secondaryForeground,
    'button.secondaryHoverBackground': button.secondaryHoverBackground,
    'button.border': button.border,
    'input.background': workbench.background.secondary,
    'input.border': workbench.border.main,
    'input.foreground': syntax.text,
    'input.placeholderForeground': workbench.accent.secondary,
    'inputOption.activeBackground': workbench.accent.primary,
    'inputOption.activeBorder': workbench.accent.primary,

    // Input & Validation
    'inputValidation.infoBorder':
      calmClarityPalette.controls.inputValidationInfoBorder,
    'inputValidation.warningBorder':
      calmClarityPalette.controls.inputValidationWarningBorder,
    'inputValidation.errorBorder':
      calmClarityPalette.controls.inputValidationErrorBorder,
    'inputValidation.infoBackground': workbench.background.base,
    'inputValidation.warningBackground': workbench.background.base,
    'inputValidation.errorBackground': workbench.background.base,

    // Checkbox
    'checkbox.background': calmClarityPalette.controls.checkboxBackground,
    'checkbox.foreground': syntax.text,
    'checkbox.border': calmClarityPalette.controls.checkboxBorder,

    // Dropdown
    'dropdown.listBackground': workbench.background.secondary,

    // Minimap
    'minimapSlider.background': calmClarityPalette.minimap.sliderBackground,
    'minimapSlider.hoverBackground':
      calmClarityPalette.minimap.sliderHoverBackground,
    'minimapSlider.activeBackground':
      calmClarityPalette.minimap.sliderActiveBackground,
    'minimapGutter.addedBackground':
      calmClarityPalette.minimap.gutterAddedBackground,
    'minimapGutter.modifiedBackground':
      calmClarityPalette.minimap.gutterModifiedBackground,
    'minimapGutter.deletedBackground':
      calmClarityPalette.minimap.gutterDeletedBackground,

    // Editor Overview Ruler
    'editorOverviewRuler.errorForeground':
      calmClarityPalette.overviewRuler.errorForeground,
    'editorOverviewRuler.warningForeground':
      calmClarityPalette.overviewRuler.warningForeground,
    'editorOverviewRuler.infoForeground':
      calmClarityPalette.overviewRuler.infoForeground,

    // Panels
    'panelSection.border': workbench.border.main,
    'panelInput.border': workbench.border.main,

    // Lists & Trees
    'tree.indentGuidesStroke': workbench.border.main,
    'list.invalidItemForeground': syntax.error,

    // Diff Editor
    'diffEditor.unchangedRegionBackground':
      calmClarityPalette.getColorWithAlpha(workbench.background.base, 'subtle'),
    'diffEditor.unchangedRegionForeground': workbench.accent.secondary,
    // Lists and Trees
    'list.focusBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.primary,
      'subtle'
    ),
    'list.focusForeground': syntax.text,
    'list.activeSelectionBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.primary,
      'subtle'
    ),
    'list.activeSelectionForeground': workbench.accent.primary,
    'list.inactiveSelectionBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.secondary,
      'subtle'
    ),
    'list.inactiveSelectionForeground': workbench.accent.secondary,
    'list.hoverBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.hover,
      'subtle'
    ),
    'list.hoverForeground': syntax.text,
    'list.highlightForeground': workbench.accent.primary,
    'list.dropBackground': calmClarityPalette.getColorWithAlpha(
      workbench.background.base,
      'subtle'
    ),

    // Badges
    'badge.background': workbench.accent.primary,
    'badge.foreground': workbench.foreground.badge,

    // Scrollbar
    'scrollbarSlider.background': calmClarityPalette.getColorWithAlpha(
      workbench.background.base,
      'subtle'
    ),
    'scrollbarSlider.hoverBackground': calmClarityPalette.getColorWithAlpha(
      workbench.background.base,
      'hover'
    ),
    'scrollbarSlider.activeBackground': calmClarityPalette.getColorWithAlpha(
      workbench.background.base,
      'active'
    ),
    'scrollbar.shadow': calmClarityPalette.shadow.scrollbar,

    // Sticky Scroll Shadows
    'editorStickyScroll.shadow': calmClarityPalette.shadow.editorStickyScroll,
    'panelStickyScroll.shadow': calmClarityPalette.shadow.panelStickyScroll,
    'sideBarStickyScroll.shadow': calmClarityPalette.shadow.sideBarStickyScroll,
    'listFilterWidget.shadow': calmClarityPalette.shadow.listFilterWidget,

    // Progress Bar
    'progressBar.background': workbench.accent.primary,

    // Focus and Selection
    focusBorder: workbench.accent.focus,
    'selection.background': calmClarityPalette.getColorWithAlpha(
      workbench.accent.primary,
      'hover'
    ),

    // Text Colors
    'textLink.foreground': workbench.accent.primary,
    'textLink.activeForeground': workbench.accent.hover,
    'textPreformat.foreground': syntax.string,
    'textBlockQuote.background': workbench.background.secondary,
    'textBlockQuote.border': workbench.border.main,
    'textCodeBlock.background': workbench.background.secondary,

    // Merge Conflicts
    'merge.currentHeaderBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.primary,
      'subtle'
    ),
    'merge.currentContentBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.primary,
      'subtle'
    ),
    'merge.incomingHeaderBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.secondary,
      'subtle'
    ),
    'merge.incomingContentBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.secondary,
      'subtle'
    ),

    // Notifications
    'notifications.background': workbench.background.secondary,
    'notifications.foreground': syntax.text,
    'notifications.border': workbench.border.main,
    'notificationLink.foreground': workbench.accent.primary,

    // Peek View
    'peekView.border': workbench.border.main,
    'peekViewEditor.background': workbench.background.secondary,
    'peekViewEditor.matchHighlightBackground':
      calmClarityPalette.getColorWithAlpha(syntax.warning, 'hover'),
    'peekViewResult.background': workbench.background.secondary,
    'peekViewResult.fileForeground': syntax.text,
    'peekViewResult.lineForeground': workbench.accent.secondary,
    'peekViewTitle.background': workbench.background.secondary,
    'peekViewTitleDescription.foreground': workbench.accent.secondary,
    'peekViewTitleLabel.foreground': workbench.accent.primary,

    // Git Colors
    'gitDecoration.addedResourceForeground': syntax.success,
    'gitDecoration.modifiedResourceForeground': syntax.info,
    'gitDecoration.deletedResourceForeground': syntax.error,
    'gitDecoration.untrackedResourceForeground': workbench.accent.hover,
    'gitDecoration.ignoredResourceForeground': workbench.accent.secondary,
    'gitDecoration.conflictingResourceForeground': syntax.warning,
    'gitDecoration.submoduleResourceForeground': workbench.accent.secondary,

    // Menu
    'menu.background': workbench.background.secondary,
    'menu.foreground': syntax.text,
    'menu.selectionBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.primary,
      'subtle'
    ),
    'menu.selectionForeground': workbench.accent.primary,
    'menu.separatorBackground': workbench.border.main,
    'menubar.selectionBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accent.primary,
      'subtle'
    ),
    'menubar.selectionForeground': workbench.accent.primary,

    // Dropdown
    'dropdown.background': workbench.background.secondary,
    'dropdown.foreground': syntax.text,
    'dropdown.border': workbench.border.main,

    // Breadcrumbs
    'breadcrumb.foreground': workbench.accent.secondary,
    'breadcrumb.focusForeground': workbench.accent.primary,
    'breadcrumb.activeSelectionForeground': workbench.accent.primary,
    'breadcrumbPicker.background': workbench.background.secondary,

    // Widget
    'widget.shadow': calmClarityPalette.shadow.widget,
    'editorWidget.background': workbench.background.secondary,
    'editorWidget.border': workbench.border.main,
    'editorMarkerNavigation.background': workbench.background.secondary,

    // Minimap
    'minimap.findMatchHighlight': calmClarityPalette.getColorWithAlpha(
      syntax.warning,
      'hover'
    ),
    'minimap.selectionHighlight': calmClarityPalette.getColorWithAlpha(
      workbench.accent.primary,
      'subtle'
    ),
    'minimap.errorHighlight': syntax.error,
    'minimap.warningHighlight': syntax.warning,
    'minimap.background': workbench.background.base,

    // Symbol Icons
    'symbolIcon.arrayForeground': syntax.type,
    'symbolIcon.booleanForeground': syntax.boolean,
    'symbolIcon.classForeground': workbench.accent.hover,
    'symbolIcon.colorForeground': syntax.string,
    'symbolIcon.constantForeground': syntax.constant,
    'symbolIcon.constructorForeground': workbench.accent.focus,
    'symbolIcon.enumeratorForeground': syntax.enum,
    'symbolIcon.enumeratorMemberForeground': syntax.enum,
    'symbolIcon.eventForeground': workbench.accent.hover,
    'symbolIcon.fieldForeground': syntax.property,
    'symbolIcon.fileForeground': workbench.accent.secondary,
    'symbolIcon.folderForeground': workbench.accent.secondary,
    'symbolIcon.functionForeground': syntax.function,
    'symbolIcon.interfaceForeground': syntax.interface,
    'symbolIcon.keyForeground': syntax.property,
    'symbolIcon.keywordForeground': syntax.keyword,
    'symbolIcon.methodForeground': syntax.method,
    'symbolIcon.moduleForeground': workbench.accent.secondary,
    'symbolIcon.namespaceForeground': workbench.accent.secondary,
    'symbolIcon.nullForeground': syntax.boolean,
    'symbolIcon.numberForeground': syntax.number,
    'symbolIcon.objectForeground': syntax.object,
    'symbolIcon.operatorForeground': syntax.operator,
    'symbolIcon.packageForeground': workbench.accent.secondary,
    'symbolIcon.propertyForeground': syntax.property,
    'symbolIcon.referenceForeground': workbench.accent.secondary,
    'symbolIcon.snippetForeground': syntax.string,
    'symbolIcon.stringForeground': syntax.string,
    'symbolIcon.structForeground': syntax.type,
    'symbolIcon.textForeground': syntax.text,
    'symbolIcon.typeParameterForeground': syntax.type,
    'symbolIcon.unitForeground': syntax.number,
    'symbolIcon.variableForeground': syntax.variable,

    // Debug
    'debugToolBar.background': workbench.background.secondary,
    'debugExceptionWidget.background': workbench.background.secondary,
    'debugExceptionWidget.border': syntax.error,
    'debugTokenExpression.name': workbench.accent.primary,
    'debugTokenExpression.value': syntax.text,
    'debugTokenExpression.string': syntax.string,
    'debugTokenExpression.boolean': syntax.boolean,
    'debugTokenExpression.number': syntax.number,
    'debugTokenExpression.error': syntax.error,

    // Settings Editor
    'settings.headerForeground': workbench.accent.primary,
    'settings.modifiedItemIndicator': syntax.warning,
    'settings.dropdownBackground': workbench.background.secondary,
    'settings.dropdownForeground': syntax.text,
    'settings.dropdownBorder': workbench.border.main,
    'settings.dropdownListBorder': workbench.border.main,
    'settings.checkboxBackground': workbench.background.secondary,
    'settings.checkboxForeground': syntax.text,
    'settings.checkboxBorder': workbench.border.main,
    'settings.textInputBackground': workbench.background.secondary,
    'settings.textInputForeground': syntax.text,
    'settings.textInputBorder': workbench.border.main,
    'settings.numberInputBackground': workbench.background.secondary,
    'settings.numberInputForeground': syntax.text,
    'settings.numberInputBorder': workbench.border.main,

    // Problems
    'problemsErrorIcon.foreground': syntax.error,
    'problemsWarningIcon.foreground': syntax.warning,
    'problemsInfoIcon.foreground': syntax.info,

    // Inline Chat
    'inlineChat.background': workbench.background.secondary,
    'inlineChat.border': workbench.border.main,
    'inlineChat.shadow': calmClarityPalette.shadow.inlineChat,

    // Diff Editor v2
    'diffEditor.border': workbench.border.main,
    'diffEditor.diagonalFill': workbench.accent.secondary,
    'diffEditor.insertedLineBackground': calmClarityPalette.getColorWithAlpha(
      syntax.success,
      'subtle'
    ),
    'diffEditor.removedLineBackground': calmClarityPalette.getColorWithAlpha(
      syntax.error,
      'subtle'
    ),
    'diffEditor.insertedTextBackground': calmClarityPalette.getColorWithAlpha(
      syntax.success,
      'subtle'
    ),
    'diffEditor.removedTextBackground': calmClarityPalette.getColorWithAlpha(
      syntax.error,
      'subtle'
    ),
    'diffEditorOverview.insertedForeground':
      calmClarityPalette.getColorWithAlpha(syntax.success, 'hover'),
    'diffEditorOverview.removedForeground':
      calmClarityPalette.getColorWithAlpha(syntax.error, 'hover'),

    // Chart
    'charts.foreground': syntax.text,
    'charts.lines': workbench.accent.secondary,
    'charts.red': syntax.error,
    'charts.blue': workbench.accent.primary,
    'charts.yellow': syntax.warning,
    'charts.orange': syntax.warning,
    'charts.green': syntax.success,
    // SCM Graph
    'scmGraph.historyItemHoverLabelForeground':
      calmClarityPalette.scmGraph.historyItemHoverLabelForeground,
    'scmGraph.foreground1': calmClarityPalette.scmGraph.foreground1,
    'scmGraph.foreground2': calmClarityPalette.scmGraph.foreground2,
    'scmGraph.foreground3': calmClarityPalette.scmGraph.foreground3,
    'scmGraph.foreground4': calmClarityPalette.scmGraph.foreground4,
    'scmGraph.foreground5': calmClarityPalette.scmGraph.foreground5,
    'scmGraph.historyItemHoverAdditionsForeground':
      calmClarityPalette.scmGraph.historyItemHoverAdditionsForeground,
    'scmGraph.historyItemHoverDeletionsForeground':
      calmClarityPalette.scmGraph.historyItemHoverDeletionsForeground,
    'scmGraph.historyItemRefColor':
      calmClarityPalette.scmGraph.historyItemRefColor,
    'scmGraph.historyItemRemoteRefColor':
      calmClarityPalette.scmGraph.historyItemRemoteRefColor,
    'scmGraph.historyItemBaseRefColor':
      calmClarityPalette.scmGraph.historyItemBaseRefColor,
    'scmGraph.historyItemHoverDefaultLabelBackground':
      calmClarityPalette.scmGraph.historyItemHoverDefaultLabelBackground,
    'scmGraph.historyItemHoverDefaultLabelForeground':
      calmClarityPalette.scmGraph.historyItemHoverDefaultLabelForeground,
    'charts.purple': syntax.boolean,
  }
}

/**
 * Генерация токенов подсветки синтаксиса
 */
const generateTokenColors = () => {
  return [
    // Comments
    {
      name: 'Comments',
      scope: [
        'comment',
        'punctuation.definition.comment',
        'comment.block.documentation',
        'comment.line.double-slash',
        'comment.line.number-sign',
      ],
      settings: {
        foreground: syntaxTokenPalette.comments,
        fontStyle: '',
      },
    },

    // Strings
    {
      name: 'Strings',
      scope: [
        'string',
        'string.quoted',
        'string.unquoted',
        'punctuation.definition.string',
      ],
      settings: {
        foreground: syntaxTokenPalette.strings,
      },
    },

    // Numbers
    {
      name: 'Numbers',
      scope: ['constant.numeric', 'variable.other.constant.number'],
      settings: {
        foreground: syntaxTokenPalette.numbers,
      },
    },

    // Booleans
    {
      name: 'Booleans',
      scope: ['constant.language.boolean', 'keyword.constant'],
      settings: {
        foreground: syntaxTokenPalette.booleans,
      },
    },

    // Null and Undefined
    {
      name: 'Null and Undefined',
      scope: ['constant.language.null', 'constant.language.undefined'],
      settings: {
        foreground: syntaxTokenPalette.nullUndefined,
      },
    },

    // Keywords
    {
      name: 'Keywords',
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.delete',
        'keyword.operator.sizeof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
      ],
      settings: {
        foreground: syntaxTokenPalette.keywords,
      },
    },

    // Storage keywords
    {
      name: 'Storage Keywords',
      scope: [
        'storage.modifier',
        'storage.type',
        'storage.type.built-in',
        'storage.type.primitive',
      ],
      settings: {
        foreground: syntaxTokenPalette.storage,
      },
    },

    // Operators
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'punctuation.accessor',
        'punctuation.separator',
        'punctuation.terminator',
      ],
      settings: {
        foreground: syntaxTokenPalette.operators,
      },
    },

    // Punctuation
    {
      name: 'Punctuation',
      scope: [
        'punctuation',
        'punctuation.section',
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
      ],
      settings: {
        foreground: syntaxTokenPalette.punctuation,
      },
    },

    // Types
    {
      name: 'Types',
      scope: [
        'support.type',
        'support.type.primitive',
        'storage.type.cs',
        'meta.type.annotation',
        'meta.return.type',
        'meta.type.parameters',
      ],
      settings: {
        foreground: syntaxTokenPalette.types,
      },
    },

    // Classes
    {
      name: 'Classes',
      scope: [
        'entity.name.type.class',
        'support.class',
        'entity.other.inherited-class',
        'meta.class',
        'meta.class.identifier',
      ],
      settings: {
        foreground: syntaxTokenPalette.classes,
        fontStyle: 'bold',
      },
    },

    // Interfaces
    {
      name: 'Interfaces',
      scope: ['entity.name.type.interface', 'support.type.interface'],
      settings: {
        foreground: syntaxTokenPalette.interfaces,
      },
    },

    // Enums
    {
      name: 'Enums',
      scope: ['entity.name.type.enum', 'support.type.enum'],
      settings: {
        foreground: syntaxTokenPalette.enums,
      },
    },

    // Functions
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call',
        'variable.function',
      ],
      settings: {
        foreground: syntaxTokenPalette.functions,
      },
    },

    // Methods
    {
      name: 'Methods',
      scope: ['entity.name.function.member', 'variable.other.method'],
      settings: {
        foreground: syntaxTokenPalette.methods,
      },
    },

    // Variables
    {
      name: 'Variables',
      scope: [
        'variable',
        'variable.other',
        'variable.other.readwrite',
        'support.variable',
      ],
      settings: {
        foreground: syntaxTokenPalette.variables,
      },
    },

    // Parameters
    {
      name: 'Parameters',
      scope: ['variable.parameter', 'meta.function.parameters'],
      settings: {
        foreground: syntaxTokenPalette.parameters,
      },
    },

    // Constants
    {
      name: 'Constants',
      scope: ['variable.other.constant', 'constant.other', 'support.constant'],
      settings: {
        foreground: syntaxTokenPalette.constants,
      },
    },

    // Properties
    {
      name: 'Properties',
      scope: [
        'variable.other.property',
        'support.variable.property',
        'meta.object-literal.key',
      ],
      settings: {
        foreground: syntaxTokenPalette.properties,
      },
    },

    // Tags
    {
      name: 'Tags',
      scope: ['entity.name.tag', 'meta.tag'],
      settings: {
        foreground: syntaxTokenPalette.tags,
      },
    },

    // Attributes
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name', 'meta.attribute'],
      settings: {
        foreground: syntaxTokenPalette.attributes,
      },
    },

    // Invalid
    {
      name: 'Invalid',
      scope: [
        'invalid',
        'invalid.illegal',
        'invalid.broken',
        'invalid.deprecated',
        'invalid.unimplemented',
      ],
      settings: {
        foreground: calmClarityPalette.syntax.error,
      },
    },

    // Errors
    {
      name: 'Errors',
      scope: ['message.error', 'punctuation.definition.error', 'markup.error'],
      settings: {
        foreground: calmClarityPalette.syntax.error,
      },
    },

    // Warnings
    {
      name: 'Warnings',
      scope: [
        'message.warning',
        'punctuation.definition.warning',
        'markup.warning',
      ],
      settings: {
        foreground: calmClarityPalette.syntax.warning,
      },
    },

    // Info
    {
      name: 'Info',
      scope: ['message.info', 'punctuation.definition.info', 'markup.info'],
      settings: {
        foreground: calmClarityPalette.syntax.info,
      },
    },

    // Success
    {
      name: 'Success',
      scope: [
        'message.success',
        'punctuation.definition.success',
        'markup.success',
      ],
      settings: {
        foreground: calmClarityPalette.syntax.success,
      },
    },

    // Decorators
    {
      name: 'Decorators',
      scope: ['meta.decorator', 'punctuation.decorator', 'tag.decorator'],
      settings: {
        foreground: syntaxTokenPalette.decorators,
      },
    },

    // Annotations
    {
      name: 'Annotations',
      scope: ['storage.type.annotation', 'meta.annotation.identifier'],
      settings: {
        foreground: syntaxTokenPalette.annotations,
      },
    },

    // Regular Expressions
    {
      name: 'Regular Expressions',
      scope: [
        'string.regexp',
        'constant.other.character-class',
        'keyword.operator.quantifier',
      ],
      settings: {
        foreground: syntaxTokenPalette.strings,
      },
    },

    // Escape Characters
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape', 'constant.other.character'],
      settings: {
        foreground: syntaxTokenPalette.strings,
      },
    },

    // Markdown specific
    {
      name: 'Markdown Headings',
      scope: [
        'markup.heading',
        'entity.name.section.markdown',
        'punctuation.definition.heading.markdown',
      ],
      settings: {
        foreground: calmClarityPalette.workbench.accent.primary,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Links',
      scope: [
        'markup.underline.link',
        'meta.link',
        'constant.other.reference.link',
      ],
      settings: {
        foreground: calmClarityPalette.workbench.accent.primary,
      },
    },
    {
      name: 'Markdown Code',
      scope: ['markup.inline.raw', 'markup.fenced_code.block'],
      settings: {
        foreground: syntaxTokenPalette.strings,
      },
    },
    {
      name: 'Markdown Lists',
      scope: ['markup.list', 'beginning.punctuation.definition.list'],
      settings: {
        foreground: calmClarityPalette.workbench.accent.hover,
      },
    },
    {
      name: 'Markdown Bold',
      scope: ['markup.bold', 'punctuation.definition.bold'],
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown Italic',
      scope: ['markup.italic', 'punctuation.definition.italic'],
      settings: {
        fontStyle: 'italic',
      },
    },

    // JSON specific
    {
      name: 'JSON Keys',
      scope: ['support.type.property-name.json'],
      settings: {
        foreground: syntaxTokenPalette.properties,
      },
    },

    // CSS/SCSS/LESS specific
    {
      name: 'CSS Selectors',
      scope: [
        'entity.name.tag.css',
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.id.css',
      ],
      settings: {
        foreground: syntaxTokenPalette.tags,
      },
    },
    {
      name: 'CSS Properties',
      scope: ['support.type.property-name.css'],
      settings: {
        foreground: syntaxTokenPalette.properties,
      },
    },
    {
      name: 'CSS Values',
      scope: [
        'support.constant.property-value.css',
        'support.constant.font-name.css',
      ],
      settings: {
        foreground: syntaxTokenPalette.strings,
      },
    },

    // HTML specific
    {
      name: 'HTML Tags',
      scope: ['entity.name.tag.html'],
      settings: {
        foreground: syntaxTokenPalette.tags,
      },
    },
    {
      name: 'HTML Attributes',
      scope: ['entity.other.attribute-name.html'],
      settings: {
        foreground: syntaxTokenPalette.attributes,
      },
    },

    // JavaScript/TypeScript specific
    {
      name: 'TS Type Parameters',
      scope: ['meta.type.parameters'],
      settings: {
        foreground: syntaxTokenPalette.types,
      },
    },
    {
      name: 'JS Template Strings',
      scope: [
        'string.template',
        'punctuation.definition.template-expression',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: syntaxTokenPalette.strings,
      },
    },
    {
      name: 'JS Import/Export',
      scope: [
        'keyword.control.import',
        'keyword.control.export',
        'keyword.operator.accessor',
      ],
      settings: {
        foreground: syntaxTokenPalette.keywords,
      },
    },

    // Python specific
    {
      name: 'Python Decorators',
      scope: [
        'entity.name.function.decorator',
        'punctuation.definition.decorator',
      ],
      settings: {
        foreground: syntaxTokenPalette.decorators,
      },
    },
    {
      name: 'Python Builtin Functions',
      scope: ['support.function.builtin.python'],
      settings: {
        foreground: syntaxTokenPalette.functions,
      },
    },

    // Java specific
    {
      name: 'Java Imports',
      scope: ['storage.modifier.import.java'],
      settings: {
        foreground: syntaxTokenPalette.keywords,
      },
    },
    {
      name: 'Java Annotations',
      scope: [
        'storage.type.annotation.java',
        'meta.annotation.identifier.java',
      ],
      settings: {
        foreground: syntaxTokenPalette.annotations,
      },
    },

    // C# specific
    {
      name: 'C# Attributes',
      scope: ['meta.attribute.cs'],
      settings: {
        foreground: syntaxTokenPalette.decorators,
      },
    },
    {
      name: 'C# Preprocessor',
      scope: ['keyword.preprocessor'],
      settings: {
        foreground: syntaxTokenPalette.keywords,
      },
    },

    // Go specific
    {
      name: 'Go Package',
      scope: ['entity.name.type.package.go'],
      settings: {
        foreground: syntaxTokenPalette.storage,
      },
    },
    {
      name: 'Go Receiver',
      scope: ['meta.function.receiver.go'],
      settings: {
        foreground: syntaxTokenPalette.variables,
      },
    },

    // Ruby specific
    {
      name: 'Ruby Symbols',
      scope: ['constant.other.symbol'],
      settings: {
        foreground: syntaxTokenPalette.constants,
      },
    },
    {
      name: 'Ruby Punctuation Separator',
      scope: ['punctuation.separator'],
      settings: {
        foreground: syntaxTokenPalette.operators,
      },
    },

    // PHP specific
    {
      name: 'PHP Variables',
      scope: ['variable.other.php', 'variable.other.property.php'],
      settings: {
        foreground: syntaxTokenPalette.variables,
      },
    },

    // SQL specific
    {
      name: 'SQL Keywords',
      scope: [
        'keyword.other.DML',
        'keyword.other.ddl',
        'keyword.other.data-type',
      ],
      settings: {
        foreground: syntaxTokenPalette.keywords,
      },
    },
    {
      name: 'SQL Functions',
      scope: ['support.function.aggregate.sql'],
      settings: {
        foreground: syntaxTokenPalette.functions,
      },
    },

    // YAML specific
    {
      name: 'YAML Keys',
      scope: ['entity.name.tag.yaml'],
      settings: {
        foreground: syntaxTokenPalette.properties,
      },
    },
    {
      name: 'YAML Values',
      scope: ['string.unquoted.yaml', 'string.quoted.yaml'],
      settings: {
        foreground: syntaxTokenPalette.strings,
      },
    },
  ]
}

/**
 * Генерация полной темы "Спокойная Четкость"
 */
export const generateCalmClarityTheme = (): VSCodeTheme => {
  return {
    name: 'Calm Clarity',
    type: 'dark',
    semanticHighlighting: true,
    colors: generateWorkbenchColors(),
    tokenColors: generateTokenColors(),
    semanticTokenColors: generateSemanticTokenColors(),
  }
}