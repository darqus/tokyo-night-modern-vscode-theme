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
    'activityBar.background': workbench.activityBar,
    'activityBar.foreground': workbench.accentPrimary,
    'activityBar.inactiveForeground': calmClarityPalette.getColorWithAlpha(
      syntax.text,
      'active'
    ),
    'activityBar.border': workbench.border,
    'activityBar.activeBorder': workbench.border,
    'activityBarBadge.background': workbench.accentPrimary,
    'activityBarBadge.foreground': workbench.badgeForeground,

    // Side Bar
    'sideBar.background': workbench.sidebar,
    'sideBar.foreground': syntax.text,
    'sideBar.border': workbench.border,
    'sideBarTitle.foreground': workbench.accentPrimary,
    'sideBarSectionHeader.background': workbench.backgroundSecondary,
    'sideBarSectionHeader.foreground': syntax.text,

    // Title Bar
    'titleBar.activeBackground': workbench.titlebar,
    'titleBar.activeForeground': syntax.text,
    'titleBar.inactiveBackground': workbench.background,
    'titleBar.inactiveForeground': syntax.text,

    // Tab Bar
    'tab.activeBackground': workbench.tabbar,
    'tab.activeForeground': workbench.accentPrimary,
    'tab.inactiveBackground': workbench.backgroundSecondary,
    'tab.inactiveForeground': workbench.accentSecondary,
    'tab.border': workbench.border,
    'tab.activeBorder': workbench.accentPrimary,
    'tab.hoverBackground': workbench.backgroundTertiary,
    'editorGroupHeader.tabsBackground': workbench.background,

    // Editor
    'editor.background': workbench.background,
    'editor.foreground': syntax.text,
    'editorLineNumber.foreground': calmClarityPalette.neutral.highlight,
    'editorLineNumber.activeForeground': calmClarityPalette.neutral.base,
    'editorCursor.foreground': workbench.accentPrimary,
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
    'editorBracketMatch.border': workbench.border,
    'editorIndentGuide.background1': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.subtle,
      'subtle'
    ),
    'editorIndentGuide.activeBackground1': calmClarityPalette.getColorWithAlpha(
      calmClarityPalette.neutral.highlight,
      'subtle'
    ),
    'editorGutter.background': workbench.background,
    'editorHoverWidget.background': workbench.backgroundSecondary,
    'editorHoverWidget.border': workbench.border,
    'editorSuggestWidget.background': workbench.backgroundSecondary,
    'editorSuggestWidget.border': workbench.border,
    'editorSuggestWidget.foreground': syntax.text,
    'editorSuggestWidget.selectedBackground':
      calmClarityPalette.getColorWithAlpha(workbench.accentPrimary, 'subtle'),

    // Status Bar
    'statusBar.background': workbench.statusbar,
    'statusBar.foreground': calmClarityPalette.getColorWithAlpha(
      syntax.text,
      'semiOpaque'
    ),
    'statusBar.debuggingBackground': syntax.warning,
    'statusBar.debuggingForeground': workbench.background,
    'statusBar.noFolderBackground': workbench.backgroundSecondary,
    'statusBarItem.hoverBackground':
      calmClarityPalette.workbench.backgroundTertiary,
    'statusBarItem.activeBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentHover,
      'hover'
    ),

    // Panels
    'panel.background': workbench.background,
    'panel.border': workbench.border,
    'panelTitle.activeForeground': calmClarityPalette.neutral.base,
    'panelTitle.inactiveForeground': calmClarityPalette.neutral.subtle,
    'panelTitle.activeBorder': calmClarityPalette.neutral.highlight,

    // Terminal
    'terminal.background': workbench.background,
    'terminal.foreground': syntax.text,
    'terminal.ansiBlack': workbench.accentSecondary,
    'terminal.ansiRed': syntax.error,
    'terminal.ansiGreen': syntax.success,
    'terminal.ansiYellow': syntax.warning,
    'terminal.ansiBlue': workbench.accentPrimary,
    'terminal.ansiMagenta': syntax.boolean,
    'terminal.ansiCyan': workbench.accentSecondary,
    'terminal.ansiWhite': syntax.text,
    'terminal.ansiBrightBlack': workbench.accentSecondary,
    'terminal.ansiBrightRed': syntax.error,
    'terminal.ansiBrightGreen': syntax.success,
    'terminal.ansiBrightYellow': syntax.warning,
    'terminal.ansiBrightBlue': workbench.accentPrimary,
    'terminal.ansiBrightMagenta': syntax.boolean,
    'terminal.ansiBrightCyan': workbench.accentSecondary,
    'terminal.ansiBrightWhite': syntax.text,

    // Buttons and Inputs
    'button.background': button.primaryBackground,
    'button.foreground': button.primaryForeground,
    'button.hoverBackground': button.primaryHoverBackground,
    'button.secondaryBackground': button.secondaryBackground,
    'button.secondaryForeground': button.secondaryForeground,
    'button.secondaryHoverBackground': button.secondaryHoverBackground,
    'button.border': button.border,
    'input.background': workbench.backgroundSecondary,
    'input.border': workbench.border,
    'input.foreground': syntax.text,
    'input.placeholderForeground': workbench.accentSecondary,
    'inputOption.activeBackground': workbench.accentPrimary,
    'inputOption.activeBorder': workbench.accentPrimary,

    // Input & Validation
    'inputValidation.infoBorder': calmClarityPalette.controls.inputValidationInfoBorder,
    'inputValidation.warningBorder': calmClarityPalette.controls.inputValidationWarningBorder,
    'inputValidation.errorBorder': calmClarityPalette.controls.inputValidationErrorBorder,
    'inputValidation.infoBackground': workbench.background,
    'inputValidation.warningBackground': workbench.background,
    'inputValidation.errorBackground': workbench.background,

    // Checkbox
    'checkbox.background': calmClarityPalette.controls.checkboxBackground,
    'checkbox.foreground': syntax.text,
    'checkbox.border': calmClarityPalette.controls.checkboxBorder,

    // Dropdown
    'dropdown.listBackground': workbench.backgroundSecondary,

    // Minimap
    'minimapSlider.background': calmClarityPalette.minimap.sliderBackground,
    'minimapSlider.hoverBackground': calmClarityPalette.minimap.sliderHoverBackground,
    'minimapSlider.activeBackground': calmClarityPalette.minimap.sliderActiveBackground,
    'minimapGutter.addedBackground': calmClarityPalette.minimap.gutterAddedBackground,
    'minimapGutter.modifiedBackground': calmClarityPalette.minimap.gutterModifiedBackground,
    'minimapGutter.deletedBackground': calmClarityPalette.minimap.gutterDeletedBackground,
    
    // Editor Overview Ruler
    'editorOverviewRuler.errorForeground': calmClarityPalette.overviewRuler.errorForeground,
    'editorOverviewRuler.warningForeground': calmClarityPalette.overviewRuler.warningForeground,
    'editorOverviewRuler.infoForeground': calmClarityPalette.overviewRuler.infoForeground,

    // Panels
    'panelSection.border': workbench.border,
    'panelInput.border': workbench.border,

    // Lists & Trees
    'tree.indentGuidesStroke': workbench.border,
    'list.invalidItemForeground': syntax.error,

    // Diff Editor
    'diffEditor.unchangedRegionBackground': calmClarityPalette.getColorWithAlpha(workbench.background, 'subtle'),
    'diffEditor.unchangedRegionForeground': workbench.accentSecondary,
    // Lists and Trees
    'list.focusBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentPrimary,
      'subtle'
    ),
    'list.focusForeground': syntax.text,
    'list.activeSelectionBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentPrimary,
      'subtle'
    ),
    'list.activeSelectionForeground': workbench.accentPrimary,
    'list.inactiveSelectionBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentSecondary,
      'subtle'
    ),
    'list.inactiveSelectionForeground': workbench.accentSecondary,
    'list.hoverBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentHover,
      'subtle'
    ),
    'list.hoverForeground': syntax.text,
    'list.highlightForeground': workbench.accentPrimary,
    'list.dropBackground': calmClarityPalette.getColorWithAlpha(
      workbench.background,
      'subtle'
    ),

    // Badges
    'badge.background': workbench.accentPrimary,
    'badge.foreground': workbench.badgeForeground,

    // Scrollbar
    'scrollbarSlider.background': calmClarityPalette.getColorWithAlpha(
      workbench.background,
      'subtle'
    ),
    'scrollbarSlider.hoverBackground': calmClarityPalette.getColorWithAlpha(
      workbench.background,
      'hover'
    ),
    'scrollbarSlider.activeBackground': calmClarityPalette.getColorWithAlpha(
      workbench.background,
      'active'
    ),
    'scrollbar.shadow': calmClarityPalette.shadow.scrollbar,

    // Sticky Scroll Shadows
    'editorStickyScroll.shadow': calmClarityPalette.shadow.editorStickyScroll,
    'panelStickyScroll.shadow': calmClarityPalette.shadow.panelStickyScroll,
    'sideBarStickyScroll.shadow': calmClarityPalette.shadow.sideBarStickyScroll,
    'listFilterWidget.shadow': calmClarityPalette.shadow.listFilterWidget,

    // Progress Bar
    'progressBar.background': workbench.accentPrimary,

    // Focus and Selection
    focusBorder: workbench.accentFocus,
    'selection.background': calmClarityPalette.getColorWithAlpha(
      workbench.accentPrimary,
      'hover'
    ),

    // Text Colors
    'textLink.foreground': workbench.accentPrimary,
    'textLink.activeForeground': workbench.accentHover,
    'textPreformat.foreground': syntax.string,
    'textBlockQuote.background': workbench.backgroundSecondary,
    'textBlockQuote.border': workbench.border,
    'textCodeBlock.background': workbench.backgroundSecondary,

    // Merge Conflicts
    'merge.currentHeaderBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentPrimary,
      'subtle'
    ),
    'merge.currentContentBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentPrimary,
      'subtle'
    ),
    'merge.incomingHeaderBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentSecondary,
      'subtle'
    ),
    'merge.incomingContentBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentSecondary,
      'subtle'
    ),

    // Notifications
    'notifications.background': workbench.backgroundSecondary,
    'notifications.foreground': syntax.text,
    'notifications.border': workbench.border,
    'notificationLink.foreground': workbench.accentPrimary,

    // Peek View
    'peekView.border': workbench.border,
    'peekViewEditor.background': workbench.backgroundSecondary,
    'peekViewEditor.matchHighlightBackground':
      calmClarityPalette.getColorWithAlpha(syntax.warning, 'hover'),
    'peekViewResult.background': workbench.backgroundSecondary,
    'peekViewResult.fileForeground': syntax.text,
    'peekViewResult.lineForeground': workbench.accentSecondary,
    'peekViewTitle.background': workbench.backgroundSecondary,
    'peekViewTitleDescription.foreground': workbench.accentSecondary,
    'peekViewTitleLabel.foreground': workbench.accentPrimary,

    // Git Colors
    'gitDecoration.addedResourceForeground': syntax.success,
    'gitDecoration.modifiedResourceForeground': syntax.info,
    'gitDecoration.deletedResourceForeground': syntax.error,
    'gitDecoration.untrackedResourceForeground': workbench.accentHover,
    'gitDecoration.ignoredResourceForeground': workbench.accentSecondary,
    'gitDecoration.conflictingResourceForeground': syntax.warning,
    'gitDecoration.submoduleResourceForeground': workbench.accentSecondary,

    // Menu
    'menu.background': workbench.backgroundSecondary,
    'menu.foreground': syntax.text,
    'menu.selectionBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentPrimary,
      'subtle'
    ),
    'menu.selectionForeground': workbench.accentPrimary,
    'menu.separatorBackground': workbench.border,
    'menubar.selectionBackground': calmClarityPalette.getColorWithAlpha(
      workbench.accentPrimary,
      'subtle'
    ),
    'menubar.selectionForeground': workbench.accentPrimary,

    // Dropdown
    'dropdown.background': workbench.backgroundSecondary,
    'dropdown.foreground': syntax.text,
    'dropdown.border': workbench.border,

    // Breadcrumbs
    'breadcrumb.foreground': workbench.accentSecondary,
    'breadcrumb.focusForeground': workbench.accentPrimary,
    'breadcrumb.activeSelectionForeground': workbench.accentPrimary,
    'breadcrumbPicker.background': workbench.backgroundSecondary,

    // Widget
    'widget.shadow': calmClarityPalette.shadow.widget,
    'editorWidget.background': workbench.backgroundSecondary,
    'editorWidget.border': workbench.border,
    'editorMarkerNavigation.background': workbench.backgroundSecondary,

    // Minimap
    'minimap.findMatchHighlight': calmClarityPalette.getColorWithAlpha(
      syntax.warning,
      'hover'
    ),
    'minimap.selectionHighlight': calmClarityPalette.getColorWithAlpha(
      workbench.accentPrimary,
      'subtle'
    ),
    'minimap.errorHighlight': syntax.error,
    'minimap.warningHighlight': syntax.warning,
    'minimap.background': workbench.background,

    // Symbol Icons
    'symbolIcon.arrayForeground': syntax.type,
    'symbolIcon.booleanForeground': syntax.boolean,
    'symbolIcon.classForeground': workbench.accentHover,
    'symbolIcon.colorForeground': syntax.string,
    'symbolIcon.constantForeground': syntax.constant,
    'symbolIcon.constructorForeground': workbench.accentFocus,
    'symbolIcon.enumeratorForeground': syntax.enum,
    'symbolIcon.enumeratorMemberForeground': syntax.enum,
    'symbolIcon.eventForeground': workbench.accentHover,
    'symbolIcon.fieldForeground': syntax.property,
    'symbolIcon.fileForeground': workbench.accentSecondary,
    'symbolIcon.folderForeground': workbench.accentSecondary,
    'symbolIcon.functionForeground': syntax.function,
    'symbolIcon.interfaceForeground': syntax.interface,
    'symbolIcon.keyForeground': syntax.property,
    'symbolIcon.keywordForeground': syntax.keyword,
    'symbolIcon.methodForeground': syntax.method,
    'symbolIcon.moduleForeground': workbench.accentSecondary,
    'symbolIcon.namespaceForeground': workbench.accentSecondary,
    'symbolIcon.nullForeground': syntax.boolean,
    'symbolIcon.numberForeground': syntax.number,
    'symbolIcon.objectForeground': syntax.object,
    'symbolIcon.operatorForeground': syntax.operator,
    'symbolIcon.packageForeground': workbench.accentSecondary,
    'symbolIcon.propertyForeground': syntax.property,
    'symbolIcon.referenceForeground': workbench.accentSecondary,
    'symbolIcon.snippetForeground': syntax.string,
    'symbolIcon.stringForeground': syntax.string,
    'symbolIcon.structForeground': syntax.type,
    'symbolIcon.textForeground': syntax.text,
    'symbolIcon.typeParameterForeground': syntax.type,
    'symbolIcon.unitForeground': syntax.number,
    'symbolIcon.variableForeground': syntax.variable,

    // Debug
    'debugToolBar.background': workbench.backgroundSecondary,
    'debugExceptionWidget.background': workbench.backgroundSecondary,
    'debugExceptionWidget.border': syntax.error,
    'debugTokenExpression.name': workbench.accentPrimary,
    'debugTokenExpression.value': syntax.text,
    'debugTokenExpression.string': syntax.string,
    'debugTokenExpression.boolean': syntax.boolean,
    'debugTokenExpression.number': syntax.number,
    'debugTokenExpression.error': syntax.error,

    // Settings Editor
    'settings.headerForeground': workbench.accentPrimary,
    'settings.modifiedItemIndicator': syntax.warning,
    'settings.dropdownBackground': workbench.backgroundSecondary,
    'settings.dropdownForeground': syntax.text,
    'settings.dropdownBorder': workbench.border,
    'settings.dropdownListBorder': workbench.border,
    'settings.checkboxBackground': workbench.backgroundSecondary,
    'settings.checkboxForeground': syntax.text,
    'settings.checkboxBorder': workbench.border,
    'settings.textInputBackground': workbench.backgroundSecondary,
    'settings.textInputForeground': syntax.text,
    'settings.textInputBorder': workbench.border,
    'settings.numberInputBackground': workbench.backgroundSecondary,
    'settings.numberInputForeground': syntax.text,
    'settings.numberInputBorder': workbench.border,

    // Problems
    'problemsErrorIcon.foreground': syntax.error,
    'problemsWarningIcon.foreground': syntax.warning,
    'problemsInfoIcon.foreground': syntax.info,

    // Inline Chat
    'inlineChat.background': workbench.backgroundSecondary,
    'inlineChat.border': workbench.border,
    'inlineChat.shadow': calmClarityPalette.shadow.inlineChat,

    // Diff Editor v2
    'diffEditor.border': workbench.border,
    'diffEditor.diagonalFill': workbench.accentSecondary,
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
    'charts.lines': workbench.accentSecondary,
    'charts.red': syntax.error,
    'charts.blue': workbench.accentPrimary,
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
        foreground: calmClarityPalette.workbench.accentPrimary,
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
        foreground: calmClarityPalette.workbench.accentPrimary,
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
        foreground: calmClarityPalette.workbench.accentHover,
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
