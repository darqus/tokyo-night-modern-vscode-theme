import { calmClarityPalette } from '../palette/calm-clarity'
import { syntaxTokenPalette } from '../palette/calm-clarity-syntax'
import { darken, withAlpha } from '../palette/generators'
import type { VSCodeTheme } from '../palette/types'

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

/**
 * Генерация цветов интерфейса (workbench colors) на основе палитры
 */
const generateWorkbenchColors = () => {
  const {
    workbench,
    button,
    syntax,
    neutral,
    controls,
    minimap,
    overviewRuler,
    scmGraph,
    shadow,
  } = calmClarityPalette

  return {
    // Activity Bar
    'activityBar.background': workbench.background.activityBar,
    'activityBar.foreground': workbench.accent.primary,
    'activityBar.inactiveForeground': withAlpha(syntax.text, 0.6),
    'activityBar.border': workbench.border.main,
    'activityBar.activeBorder': workbench.border.main,
    'activityBarBadge.background': darken(workbench.accent.primary, 0.2),
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
    'editorLineNumber.foreground': darken(neutral.subtle, 0.1),
    'editorLineNumber.activeForeground': neutral.subtle,
    'editorCursor.foreground': workbench.accent.primary,
    'editor.selectionBackground': withAlpha(neutral.highlight, 0.2),
    'editor.inactiveSelectionBackground': withAlpha(neutral.subtle, 0.2),
    'editor.selectionHighlightBackground': withAlpha(syntax.yellow, 0.2),
    'editor.wordHighlightBackground': withAlpha(neutral.subtle, 0.2),
    'editor.wordHighlightStrongBackground': withAlpha(neutral.highlight, 0.2),
    'editor.findMatchBackground': withAlpha(syntax.cyan, 0.4),
    'editor.findMatchHighlightBackground': withAlpha(syntax.purple, 0.2),
    'editor.lineHighlightBackground': withAlpha(neutral.surface, 0.4),
    'editorBracketMatch.background': withAlpha(neutral.highlight, 0.2),
    'editorBracketMatch.border': workbench.border.main,
    'editorIndentGuide.background1': withAlpha(neutral.subtle, 0.2),
    'editorIndentGuide.activeBackground1': withAlpha(neutral.highlight, 0.2),
    'editorGutter.background': workbench.background.base,
    'editorHoverWidget.background': workbench.background.secondary,
    'editorHoverWidget.border': workbench.border.main,

    'editorHoverWidget.foreground': workbench.foreground.secondary,
    'editorSuggestWidget.background': workbench.background.secondary,
    'editorSuggestWidget.border': workbench.border.main,
    'editorSuggestWidget.foreground': syntax.text,
    'editorSuggestWidget.selectedBackground': withAlpha(
      workbench.accent.primary,
      0.2
    ),

    // Status Bar
    'statusBar.background': workbench.background.statusbar,
    'statusBar.foreground': withAlpha(syntax.text, 0.8),
    'statusBar.debuggingBackground': syntax.warning,
    'statusBar.debuggingForeground': workbench.background.base,
    'statusBar.noFolderBackground': workbench.background.secondary,
    'statusBarItem.hoverBackground': workbench.background.tertiary,
    'statusBarItem.activeBackground': withAlpha(workbench.accent.hover, 0.4),

    // Panels
    'panel.background': workbench.background.base,
    'panel.border': workbench.border.main,
    'panelTitle.activeForeground': neutral.base,
    'panelTitle.inactiveForeground': neutral.subtle,
    'panelTitle.activeBorder': neutral.highlight,

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
    'inputValidation.infoBorder': controls.inputValidationInfoBorder,
    'inputValidation.warningBorder': controls.inputValidationWarningBorder,
    'inputValidation.errorBorder': controls.inputValidationErrorBorder,
    'inputValidation.infoBackground': workbench.background.base,
    'inputValidation.warningBackground': workbench.background.base,
    'inputValidation.errorBackground': workbench.background.base,

    // Checkbox
    'checkbox.background': controls.checkboxBackground,
    'checkbox.foreground': syntax.text,
    'checkbox.border': controls.checkboxBorder,

    // Dropdown
    'dropdown.listBackground': workbench.background.secondary,

    // Minimap
    'minimapSlider.background': minimap.sliderBackground,
    'minimapSlider.hoverBackground': minimap.sliderHoverBackground,
    'minimapSlider.activeBackground': minimap.sliderActiveBackground,
    'minimapGutter.addedBackground': minimap.gutterAddedBackground,
    'minimapGutter.modifiedBackground': minimap.gutterModifiedBackground,
    'minimapGutter.deletedBackground': minimap.gutterDeletedBackground,

    // Editor Overview Ruler
    'editorOverviewRuler.errorForeground': overviewRuler.errorForeground,
    'editorOverviewRuler.warningForeground': overviewRuler.warningForeground,
    'editorOverviewRuler.infoForeground': overviewRuler.infoForeground,

    // Panels
    'panelSection.border': workbench.border.main,
    'panelInput.border': workbench.border.main,

    // Lists & Trees
    'tree.indentGuidesStroke': workbench.border.main,
    'list.invalidItemForeground': syntax.error,

    // Diff Editor
    'diffEditor.unchangedRegionBackground': withAlpha(
      workbench.background.base,
      0.2
    ),
    'diffEditor.unchangedRegionForeground': workbench.accent.secondary,

    // Lists and Trees
    'list.focusBackground': withAlpha(workbench.accent.primary, 0.2),
    'list.focusForeground': syntax.text,
    'list.activeSelectionBackground': withAlpha(workbench.accent.primary, 0.2),
    'list.activeSelectionForeground': workbench.accent.primary,
    'list.inactiveSelectionBackground': withAlpha(
      workbench.accent.secondary,
      0.2
    ),
    'list.inactiveSelectionForeground': workbench.accent.secondary,
    'list.hoverBackground': withAlpha(workbench.accent.hover, 0.2),
    'list.hoverForeground': syntax.text,
    'list.highlightForeground': workbench.accent.primary,
    'list.dropBackground': withAlpha(workbench.background.base, 0.2),

    // Badges
    'badge.background': darken(workbench.accent.primary, 0.2),
    'badge.foreground': workbench.foreground.badge,

    // Scrollbar
    'scrollbarSlider.background': withAlpha(workbench.background.base, 0.2),
    'scrollbarSlider.hoverBackground': withAlpha(
      workbench.background.base,
      0.4
    ),
    'scrollbarSlider.activeBackground': withAlpha(
      workbench.background.base,
      0.6
    ),
    'scrollbar.shadow': shadow.scrollbar,

    // Sticky Scroll Shadows
    'editorStickyScroll.shadow': shadow.editorStickyScroll,
    'panelStickyScroll.shadow': shadow.panelStickyScroll,
    'sideBarStickyScroll.shadow': shadow.sideBarStickyScroll,
    'listFilterWidget.shadow': shadow.listFilterWidget,

    // Progress Bar
    'progressBar.background': workbench.accent.primary,

    // Focus and Selection
    focusBorder: workbench.accent.focus,
    'selection.background': withAlpha(workbench.accent.primary, 0.4),

    // Text Colors
    'textLink.foreground': workbench.accent.primary,
    'textLink.activeForeground': workbench.accent.hover,
    'textPreformat.foreground': syntax.string,
    'textBlockQuote.background': workbench.background.secondary,
    'textBlockQuote.border': workbench.border.main,
    'textCodeBlock.background': workbench.background.secondary,

    // Merge Conflicts
    'merge.currentHeaderBackground': withAlpha(workbench.accent.primary, 0.2),
    'merge.currentContentBackground': withAlpha(workbench.accent.primary, 0.2),
    'merge.incomingHeaderBackground': withAlpha(
      workbench.accent.secondary,
      0.2
    ),
    'merge.incomingContentBackground': withAlpha(
      workbench.accent.secondary,
      0.2
    ),

    // Notifications
    'notifications.background': workbench.background.secondary,
    'notifications.foreground': syntax.text,
    'notifications.border': workbench.border.main,
    'notificationLink.foreground': workbench.accent.primary,

    // Peek View
    'peekView.border': workbench.border.main,
    'peekViewEditor.background': workbench.background.secondary,
    'peekViewEditor.matchHighlightBackground': withAlpha(syntax.warning, 0.4),
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
    'menu.selectionBackground': withAlpha(workbench.accent.primary, 0.2),
    'menu.selectionForeground': workbench.accent.primary,
    'menu.separatorBackground': workbench.border.main,
    'menubar.selectionBackground': withAlpha(workbench.accent.primary, 0.2),
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
    'widget.shadow': shadow.widget,
    'editorWidget.background': workbench.background.secondary,
    'editorWidget.border': workbench.border.main,
    'editorMarkerNavigation.background': workbench.background.secondary,

    // Minimap
    'minimap.findMatchHighlight': withAlpha(syntax.warning, 0.4),
    'minimap.selectionHighlight': withAlpha(workbench.accent.primary, 0.2),
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
    'inlineChat.shadow': shadow.inlineChat,

    // Diff Editor v2
    'diffEditor.border': workbench.border.main,
    'diffEditor.diagonalFill': workbench.accent.secondary,
    'diffEditor.insertedLineBackground': withAlpha(syntax.success, 0.2),
    'diffEditor.removedLineBackground': withAlpha(syntax.error, 0.2),
    'diffEditor.insertedTextBackground': withAlpha(syntax.success, 0.2),
    'diffEditor.removedTextBackground': withAlpha(syntax.error, 0.2),
    'diffEditorOverview.insertedForeground': withAlpha(syntax.success, 0.4),
    'diffEditorOverview.removedForeground': withAlpha(syntax.error, 0.4),

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
      scmGraph.historyItemHoverLabelForeground,
    'scmGraph.foreground1': scmGraph.foreground1,
    'scmGraph.foreground2': scmGraph.foreground2,
    'scmGraph.foreground3': scmGraph.foreground3,
    'scmGraph.foreground4': scmGraph.foreground4,
    'scmGraph.foreground5': scmGraph.foreground5,
    'scmGraph.historyItemHoverAdditionsForeground':
      scmGraph.historyItemHoverAdditionsForeground,
    'scmGraph.historyItemHoverDeletionsForeground':
      scmGraph.historyItemHoverDeletionsForeground,
    'scmGraph.historyItemRefColor': scmGraph.historyItemRefColor,
    'scmGraph.historyItemRemoteRefColor': scmGraph.historyItemRemoteRefColor,
    'scmGraph.historyItemBaseRefColor': scmGraph.historyItemBaseRefColor,
    'scmGraph.historyItemHoverDefaultLabelBackground':
      scmGraph.historyItemHoverDefaultLabelBackground,
    'scmGraph.historyItemHoverDefaultLabelForeground':
      scmGraph.historyItemHoverDefaultLabelForeground,
    'charts.purple': syntax.boolean,
  }
}

/**
 * Генерация токенов подсветки синтаксиса
 */
const generateTokenColors = () => {
  const { workbench, syntax } = calmClarityPalette

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
        foreground: syntax.error,
      },
    },

    // Errors
    {
      name: 'Errors',
      scope: ['message.error', 'punctuation.definition.error', 'markup.error'],
      settings: {
        foreground: syntax.error,
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
        foreground: syntax.warning,
      },
    },

    // Info
    {
      name: 'Info',
      scope: ['message.info', 'punctuation.definition.info', 'markup.info'],
      settings: {
        foreground: syntax.info,
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
        foreground: syntax.success,
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
        foreground: workbench.accent.primary,
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
        foreground: workbench.accent.primary,
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
        foreground: workbench.accent.hover,
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
    author: 'darqus',
    maintainers: ['darqus <voladores@inbox.ru>'],
    semanticClass: 'tokyo-night',
    type: 'dark',
    semanticHighlighting: true,
    colors: generateWorkbenchColors(),
    tokenColors: generateTokenColors(),
    semanticTokenColors: generateSemanticTokenColors(),
  }
}

/**
 * Генерация оригинальной темы Tokyo Night
 */
export const generateTokyoNightClarityTheme = (): VSCodeTheme => {
  return {
    name: 'Tokyo Night',
    author: 'Enkia',
    maintainers: ['Enkia <enki77@gmail.com>'],
    type: 'dark',
    semanticHighlighting: true,
    semanticTokenColors: {
      'parameter.declaration': {
        foreground: '#e0af68',
      },
      parameter: {
        foreground: '#d9d4cd',
      },
      'property.declaration': {
        foreground: '#73daca',
      },
      'property.defaultLibrary': {
        foreground: '#2ac3de',
      },
      '*.defaultLibrary': {
        foreground: '#2ac3de',
      },
      'variable.defaultLibrary': {
        foreground: '#2ac3de',
      },
      'variable.declaration': {
        foreground: '#bb9af7',
      },
      variable: {
        foreground: '#c0caf5',
      },
    },
    semanticClass: 'tokyo-night',
    colors: {
      foreground: '#787c99',
      descriptionForeground: '#515670',
      disabledForeground: '#545c7e',
      focusBorder: '#545c7e33',
      errorForeground: '#515670',
      'widget.shadow': '#ffffff00',
      'scrollbar.shadow': '#00000033',
      'badge.background': '#7e83b230',
      'badge.foreground': '#acb0d0',
      'icon.foreground': '#787c99',
      'settings.headerForeground': '#6183bb',
      'window.activeBorder': '#0d0f17',
      'window.inactiveBorder': '#0d0f17',
      'sash.hoverBorder': '#29355a',
      'toolbar.activeBackground': '#202330',
      'toolbar.hoverBackground': '#202330',
      'extensionButton.prominentBackground': '#3d59a1DD',
      'extensionButton.prominentHoverBackground': '#3d59a1AA',
      'extensionButton.prominentForeground': '#ffffff',
      'extensionBadge.remoteBackground': '#3d59a1',
      'extensionBadge.remoteForeground': '#ffffff',
      'button.background': '#3d59a1dd',
      'button.hoverBackground': '#3d59a1AA',
      'button.secondaryBackground': '#3b3e52',
      'button.foreground': '#ffffff',
      'progressBar.background': '#3d59a1',
      'input.background': '#14141b',
      'input.foreground': '#a9b1d6',
      'input.border': '#0f0f14',
      'input.placeholderForeground': '#787c998A',
      'inputOption.activeForeground': '#c0caf5',
      'inputOption.activeBackground': '#3d59a144',
      'inputValidation.infoForeground': '#bbc2e0',
      'inputValidation.infoBackground': '#3d59a15c',
      'inputValidation.infoBorder': '#3d59a1',
      'inputValidation.warningForeground': '#00000',
      'inputValidation.warningBackground': '#c2985b',
      'inputValidation.warningBorder': '#e0af68',
      'inputValidation.errorForeground': '#bbc2e0',
      'inputValidation.errorBackground': '#85353e',
      'inputValidation.errorBorder': '#963c47',
      'dropdown.foreground': '#787c99',
      'dropdown.background': '#14141b',
      'dropdown.listBackground': '#14141b',
      'activityBar.background': '#16161e',
      'activityBar.foreground': '#787c99',
      'activityBar.inactiveForeground': '#3b3e52',
      'activityBar.border': '#16161e',
      'activityBarBadge.background': '#3d59a1',
      'activityBarBadge.foreground': '#fff',
      'activityBarTop.foreground': '#787c99',
      'activityBarTop.inactiveForeground': '#3b3e52',
      'tree.indentGuidesStroke': '#2b2b3b',
      'sideBar.foreground': '#787c99',
      'sideBar.background': '#16161e',
      'sideBar.border': '#101014',
      'sideBarTitle.foreground': '#787c99',
      'sideBarSectionHeader.background': '#16161e',
      'sideBarSectionHeader.foreground': '#a9b1d6',
      'sideBarSectionHeader.border': '#101014',
      'sideBar.dropBackground': '#1e202e',
      'list.dropBackground': '#1e202e',
      'list.deemphasizedForeground': '#787c99',
      'list.activeSelectionBackground': '#202330',
      'list.activeSelectionForeground': '#a9b1d6',
      'list.inactiveSelectionBackground': '#1c1d29',
      'list.inactiveSelectionForeground': '#a9b1d6',
      'list.focusBackground': '#1c1d29',
      'list.focusForeground': '#a9b1d6',
      'list.hoverBackground': '#13131a',
      'list.hoverForeground': '#a9b1d6',
      'list.highlightForeground': '#68ac4',
      'list.invalidItemForeground': '#c97018',
      'list.errorForeground': '#bb616b',
      'list.warningForeground': '#c49a5a',
      'listFilterWidget.background': '#101014',
      'listFilterWidget.outline': '#3d59a1',
      'listFilterWidget.noMatchesOutline': '#a6333f',
      'pickerGroup.foreground': '#a9b1d6',
      'pickerGroup.border': '#101014',
      'scrollbarSlider.background': '#868bc415',
      'scrollbarSlider.hoverBackground': '#868bc410',
      'scrollbarSlider.activeBackground': '#868bc42',
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
      'selection.background': '#515c7e40',
      'editor.background': '#1a1b26',
      'editor.foreground': '#a9b1d6',
      'editor.foldBackground': '#111174a',
      'editorLink.activeForeground': '#acb0d0',
      'editor.selectionBackground': '#515c7e4d',
      'editor.inactiveSelectionBackground': '#515c7e25',
      'editor.findMatchBackground': '#3d59a166',
      'editor.findMatchBorder': '#e0af68',
      'editor.findMatchHighlightBackground': '#3d59a16',
      'editor.findRangeHighlightBackground': '#515c7e33',
      'editor.rangeHighlightBackground': '#515c7e20',
      'editor.wordHighlightBackground': '#515c7e44',
      'editor.wordHighlightStrongBackground': '#515c7e55',
      'editor.selectionHighlightBackground': '#515c7e44',
      'editorCursor.foreground': '#c0caf5',
      'editorIndentGuide.background1': '#232433',
      'editorIndentGuide.activeBackground1': '#363b54',
      'editorLineNumber.foreground': '#363b54',
      'editorLineNumber.activeForeground': '#787c99',
      'editor.lineHighlightBackground': '#1e202e',
      'editorWhitespace.foreground': '#363b54',
      'editorMarkerNavigation.background': '#16161e',
      'editorHoverWidget.background': '#16161e',
      'editorHoverWidget.border': '#101014',
      'editorBracketMatch.background': '#16161e',
      'editorBracketMatch.border': '#42465d',
      'editorOverviewRuler.border': '#1014',
      'editorOverviewRuler.errorForeground': '#db4b4b',
      'editorOverviewRuler.warningForeground': '#e0af68',
      'editorOverviewRuler.infoForeground': '#1abc9c',
      'editorOverviewRuler.bracketMatchForeground': '#101014',
      'editorOverviewRuler.findMatchForeground': '#a9b1d644',
      'editorOverviewRuler.rangeHighlightForeground': '#a9b1d644',
      'editorOverviewRuler.selectionHighlightForeground': '#a9b1d622',
      'editorOverviewRuler.wordHighlightForeground': '#bb9af755',
      'editorOverviewRuler.wordHighlightStrongForeground': '#bb9af766',
      'editorOverviewRuler.modifiedForeground': '#394b70',
      'editorOverviewRuler.addedForeground': '#164846',
      'editorOverviewRuler.deletedForeground': '#703438',
      'editorRuler.foreground': '#101014',
      'editorError.foreground': '#db4b4b',
      'editorWarning.foreground': '#e0af68',
      'editorInfo.foreground': '#0da0ba',
      'editorHint.foreground': '#0da0ba',
      'editorGutter.modifiedBackground': '#394b70',
      'editorGutter.addedBackground': '#164846',
      'editorGutter.deletedBackground': '#823c41',
      'editorGhostText.foreground': '#646e9c',
      'minimapGutter.modifiedBackground': '#425882',
      'minimapGutter.addedBackground': '#1C5957',
      'minimapGutter.deletedBackground': '#944449',
      'editorGroup.border': '#101014',
      'editorGroup.dropBackground': '#1e202e',
      'editorGroupHeader.tabsBorder': '#101014',
      'editorGroupHeader.tabsBackground': '#16161e',
      'editorGroupHeader.noTabsBackground': '#16161e',
      'editorGroupHeader.border': '#101014',
      'editorPane.background': '#1a1b26',
      'editorWidget.foreground': '#787c99',
      'editorWidget.background': '#161e',
      'editorWidget.border': '#1014',
      'editorWidget.resizeBorder': '#545c7e33',
      'editorSuggestWidget.background': '#16161e',
      'editorSuggestWidget.border': '#101014',
      'editorSuggestWidget.selectedBackground': '#20222c',
      'editorSuggestWidget.highlightForeground': '#6183bb',
      'editorCodeLens.foreground': '#51597d',
      'editorLightBulb.foreground': '#e0af68',
      'editorLightBulbAutoFix.foreground': '#e0af68',
      'editorInlayHint.foreground': '#646e9c',
      'peekView.border': '#101014',
      'peekViewEditor.background': '#16161e',
      'peekViewEditor.matchHighlightBackground': '#3d59a166',
      'peekViewTitle.background': '#101014',
      'peekViewTitleLabel.foreground': '#a9b1d6',
      'peekViewTitleDescription.foreground': '#787c99',
      'peekViewResult.background': '#101014',
      'peekViewResult.selectionForeground': '#a9b1d6',
      'peekViewResult.selectionBackground': '#3d59a133',
      'peekViewResult.lineForeground': '#a9b1d6',
      'peekViewResult.fileForeground': '#787c99',
      'peekViewResult.matchHighlightBackground': '#3d59a166',
      'diffEditor.insertedTextBackground': '#41a6b520',
      'diffEditor.removedTextBackground': '#db4b4b22',
      'diffEditor.insertedLineBackground': '#41a6b520',
      'diffEditor.removedLineBackground': '#db4b4b22',
      'diffEditorGutter.insertedLineBackground': '#41a6b525',
      'diffEditorGutter.removedLineBackground': '#db4b4b22',
      'diffEditorOverview.insertedForeground': '#41a6b525',
      'diffEditorOverview.removedForeground': '#db4b4b22',
      'diffEditor.diagonalFill': '#292e42',
      'diffEditor.unchangedCodeBackground': '#282a3b66',
      'multiDiffEditor.headerBackground': '#1a1b26',
      'multiDiffEditor.border': '#1a1b26',
      'breadcrumb.background': '#161e',
      'breadcrumbPicker.background': '#161e',
      'breadcrumb.foreground': '#515670',
      'breadcrumb.focusForeground': '#a9b1d6',
      'breadcrumb.activeSelectionForeground': '#a9b1d6',
      'tab.activeBackground': '#16161e',
      'tab.inactiveBackground': '#16161e',
      'tab.activeForeground': '#a9b1d6',
      'tab.hoverForeground': '#a9b1d6',
      'tab.activeBorder': '#3d59a1',
      'tab.inactiveForeground': '#787c99',
      'tab.border': '#1014',
      'tab.unfocusedActiveForeground': '#a9b1d6',
      'tab.unfocusedInactiveForeground': '#787c99',
      'tab.unfocusedHoverForeground': '#a9b1d6',
      'tab.activeModifiedBorder': '#1a1b26',
      'tab.inactiveModifiedBorder': '#1f202e',
      'tab.unfocusedActiveBorder': '#1f202e',
      'tab.lastPinnedBorder': '#222333',
      'panel.background': '#16161e',
      'panel.border': '#101014',
      'panelTitle.activeForeground': '#787c99',
      'panelTitle.inactiveForeground': '#42465d',
      'panelTitle.activeBorder': '#16161e',
      'panelInput.border': '#161e',
      'statusBar.foreground': '#787c99',
      'statusBar.background': '#161e',
      'statusBar.border': '#101014',
      'statusBar.noFolderBackground': '#16161e',
      'statusBar.debuggingBackground': '#16161e',
      'statusBar.debuggingForeground': '#787c99',
      'statusBarItem.activeBackground': '#1014',
      'statusBarItem.hoverBackground': '#20222c',
      'statusBarItem.prominentBackground': '#101014',
      'statusBarItem.prominentHoverBackground': '#20222c',
      'titleBar.activeForeground': '#787c99',
      'titleBar.inactiveForeground': '#787c99',
      'titleBar.activeBackground': '#16161e',
      'titleBar.inactiveBackground': '#16161e',
      'titleBar.border': '#101014',
      'walkThrough.embeddedEditorBackground': '#16161e',
      'textLink.foreground': '#6183bb',
      'textLink.activeForeground': '#7dcfff',
      'textPreformat.foreground': '#9699a8',
      'textBlockQuote.background': '#16161e',
      'textCodeBlock.background': '#16161e',
      'textSeparator.foreground': '#363b54',
      'debugExceptionWidget.border': '#963c47',
      'debugExceptionWidget.background': '#1014',
      'debugToolBar.background': '#101014',
      'debugConsole.infoForeground': '#787c99',
      'debugConsole.errorForeground': '#bb616b',
      'debugConsole.sourceForeground': '#787c99',
      'debugConsole.warningForeground': '#c49a5a',
      'debugConsoleInputIcon.foreground': '#73daca',
      'editor.stackFrameHighlightBackground': '#E2BD3A20',
      'editor.focusedStackFrameHighlightBackground': '#73daca20',
      'debugView.stateLabelForeground': '#787c9',
      'debugView.stateLabelBackground': '#14141b',
      'debugView.valueChangedHighlight': '#3d59a1aa',
      'debugTokenExpression.name': '#7dcfff',
      'debugTokenExpression.value': '#9aa5ce',
      'debugTokenExpression.string': '#9ece6a',
      'debugTokenExpression.boolean': '#ff9e64',
      'debugTokenExpression.number': '#ff9e64',
      'debugTokenExpression.error': '#bb616b',
      'debugIcon.breakpointForeground': '#db4b4b',
      'debugIcon.breakpointDisabledForeground': '#414761',
      'debugIcon.breakpointUnverifiedForeground': '#c24242',
      'terminal.background': '#16161e',
      'terminal.foreground': '#787c99',
      'terminal.selectionBackground': '#515c7e4d',
      'terminal.ansiBlack': '#363b54',
      'terminal.ansiRed': '#f7768e',
      'terminal.ansiGreen': '#73daca',
      'terminal.ansiYellow': '#e0af68',
      'terminal.ansiBlue': '#7aa2f7',
      'terminal.ansiMagenta': '#bb9af7',
      'terminal.ansiCyan': '#7dcfff',
      'terminal.ansiWhite': '#787c99',
      'terminal.ansiBrightBlack': '#363b54',
      'terminal.ansiBrightRed': '#f7768e',
      'terminal.ansiBrightGreen': '#73daca',
      'terminal.ansiBrightYellow': '#e0af68',
      'terminal.ansiBrightBlue': '#7aa2f7',
      'terminal.ansiBrightMagenta': '#bb9af7',
      'terminal.ansiBrightCyan': '#7dcfff',
      'terminal.ansiBrightWhite': '#acb0d0',
      'gitDecoration.modifiedResourceForeground': '#6183bb',
      'gitDecoration.ignoredResourceForeground': '#515670',
      'gitDecoration.deletedResourceForeground': '#914c54',
      'gitDecoration.renamedResourceForeground': '#449dab',
      'gitDecoration.addedResourceForeground': '#449dab',
      'gitDecoration.untrackedResourceForeground': '#449dab',
      'gitDecoration.conflictingResourceForeground': '#e0af68cc',
      'gitDecoration.stageDeletedResourceForeground': '#914c54',
      'gitDecoration.stageModifiedResourceForeground': '#6183bb',
      'notebook.editorBackground': '#1a1b26',
      'notebook.cellEditorBackground': '#16161e',
      'notebook.cellBorderColor': '#101014',
      'notebook.focusedCellBorder': '#2935a',
      'notebook.cellStatusBarItemHoverBackground': '#1c1d29',
      'charts.red': '#f7768e',
      'charts.blue': '#7aa2f7',
      'charts.yellow': '#e0af68',
      'charts.orange': '#ff9e64',
      'charts.green': '#41a6b5',
      'charts.purple': '#9d7cd8',
      'charts.foreground': '#9AA5CE',
      'charts.lines': '#161e',
      'scmGraph.historyItemHoverLabelForeground': '#1b1e2e',
      'scmGraph.foreground1': '#ff9e64',
      'scmGraph.foreground2': '#e0af68',
      'scmGraph.foreground3': '#41a6b5',
      'scmGraph.foreground4': '#7aa2f7',
      'scmGraph.foreground5': '#bb9af7',
      'scmGraph.historyItemHoverAdditionsForeground': '#41a6b5',
      'scmGraph.historyItemHoverDeletionsForeground': '#f7768e',
      'scmGraph.historyItemRefColor': '#506FCA',
      'scmGraph.historyItemRemoteRefColor': '#41a6b5',
      'scmGraph.historyItemBaseRefColor': '#9d7cd8',
      'scmGraph.historyItemHoverDefaultLabelForeground': '#a9b1d6',
      'merge.currentHeaderBackground': '#41a6b525',
      'merge.currentContentBackground': '#007a7544',
      'merge.incomingHeaderBackground': '#3d59a1aa',
      'merge.incomingContentBackground': '#3d59a14',
      'mergeEditor.change.background': '#41a6b525',
      'mergeEditor.change.word.background': '#41a6b540',
      'mergeEditor.conflict.unhandledUnfocused.border': '#e0af6888',
      'mergeEditor.conflict.unhandledFocused.border': '#e0af68b0',
      'mergeEditor.conflict.handledUnfocused.border': '#41a6b525',
      'mergeEditor.conflict.handledFocused.border': '#41a6b565',
      'mergeEditor.conflict.handled.minimapOverViewRuler': '#449dab',
      'mergeEditor.conflict.unhandled.minimapOverViewRuler': '#e0af68',
      'gitlens.trailingLineForegroundColor': '#646e9c',
      'gitlens.gutterUncommittedForegroundColor': '#7aa2f7',
      'gitlens.gutterForegroundColor': '#787c99',
      'gitlens.gutterBackgroundColor': '#16161e',
      'notificationCenterHeader.background': '#101014',
      'notifications.background': '#101014',
      'notificationLink.foreground': '#6183bb',
      'notificationsErrorIcon.foreground': '#bb616b',
      'notificationsWarningIcon.foreground': '#bba461',
      'notificationsInfoIcon.foreground': '#0da0ba',
      'menubar.selectionForeground': '#a9b1d6',
      'menubar.selectionBackground': '#1e202e',
      'menubar.selectionBorder': '#1b1e2e',
      'menu.foreground': '#787c99',
      'menu.background': '#16161e',
      'menu.selectionForeground': '#a9b1d6',
      'menu.selectionBackground': '#1e202e',
      'menu.separatorBackground': '#1014',
      'menu.border': '#101014',
      'chat.requestBorder': '#0f0f14',
      'chat.avatarBackground': '#3d59a1',
      'chat.avatarForeground': '#a9b1d6',
      'chat.slashCommandBackground': '#14141b',
      'chat.slashCommandForeground': '#7aa2f7',
      'inlineChat.foreground': '#a9b1d6',
      'inlineChatInput.background': '#14141b',
      'inlineChatDiff.inserted': '#41a6b540',
      'inlineChatDiff.removed': '#db4b4b42',
    },
    tokenColors: [
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
        settings: {
          fontStyle: '',
        },
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
          foreground: '#51597d',
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
          foreground: '#5a638c',
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
          foreground: '#646e9c',
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
          foreground: '#ff9e64',
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
          fontStyle: '',
          foreground: '#9ece6a',
        },
      },
      {
        name: 'Colors',
        scope: [
          'constant.other.color',
          'constant.other.color.rgb-value.hex punctuation.definition.constant',
        ],
        settings: {
          foreground: '#9aa5ce',
        },
      },
      {
        name: 'Invalid',
        scope: ['invalid', 'invalid.illegal'],
        settings: {
          foreground: '#ff5370',
        },
      },
      {
        name: 'Invalid deprecated',
        scope: 'invalid.deprecated',
        settings: {
          foreground: '#bb9af7',
        },
      },
      {
        name: 'Storage Type',
        scope: 'storage.type',
        settings: {
          foreground: '#bb9af7',
        },
      },
      {
        name: 'Storage - modifier, var, const, let',
        scope: ['meta.var.expr storage.type', 'storage.modifier'],
        settings: {
          foreground: '#9d7cd8',
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
          foreground: '#7dcfff',
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
          foreground: '#0db9d7',
        },
      },
      {
        name: 'Spread',
        scope: ['keyword.operator.spread', 'keyword.operator.rest'],
        settings: {
          foreground: '#f7768e',
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
          foreground: '#89ddff',
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
          foreground: '#7dcfff',
        },
      },
      {
        name: 'Keyword',
        scope: ['keyword', 'keyword.control', 'keyword.other.important'],
        settings: {
          foreground: '#bb9af7',
        },
      },
      {
        name: 'Keyword SQL',
        scope: 'keyword.other.DML',
        settings: {
          foreground: '#7dcfff',
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
          foreground: '#bb9af7',
        },
      },
      {
        name: 'Tag',
        scope: 'entity.name.tag',
        settings: {
          foreground: '#f7768e',
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
          foreground: '#de5971',
        },
      },
      {
        name: 'Tag Punctuation',
        scope: [
          'punctuation.definition.tag',
          'text.html.php meta.embedded.block.html meta.tag.metadata.script.end.html punctuation.definition.tag.begin.html text.html.basic',
        ],
        settings: {
          foreground: '#ba3c97',
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
          foreground: '#e0af68',
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
          foreground: '#c0caf5',
        },
      },
      {
        name: 'Variable Array Key',
        scope: 'meta.array.literal variable',
        settings: {
          foreground: '#7dcfff',
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
          foreground: '#73daca',
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
          foreground: '#7dcfff',
        },
      },
      {
        name: 'Object Property',
        scope: 'variable.other.object.property',
        settings: {
          foreground: '#c0caf5',
        },
      },
      {
        name: 'Object Literal Member lvl 3 (Vue Prop Validation)',
        scope:
          'meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key',
        settings: {
          foreground: '#41a6b5',
        },
      },
      {
        name: 'C-related Block Level Variables',
        scope: 'source.cpp meta.block variable.other',
        settings: {
          foreground: '#f7768e',
        },
      },
      {
        name: 'Other Variable',
        scope: 'support.other.variable',
        settings: {
          foreground: '#f7768e',
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
          foreground: '#7aa2f7',
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
          foreground: '#7aa2f7',
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
          foreground: '#e0af68',
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
          foreground: '#bb9af7',
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
          foreground: '#bb9af7',
        },
      },
      {
        name: 'Inherited Class',
        scope: 'entity.other.inherited-class',
        settings: {
          fontStyle: '',
          foreground: '#bb9af7',
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
          foreground: '#0db9d7',
        },
      },
      {
        name: 'Class Name',
        scope: 'entity.name',
        settings: {
          foreground: '#c0caf5',
        },
      },
      {
        name: 'Support Function',
        scope: 'support.function',
        settings: {
          foreground: '#0db9d7',
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
          foreground: '#7aa2f7',
        },
      },
      {
        name: 'CSS Font',
        scope: ['support.constant.font-name', 'meta.definition.variable'],
        settings: {
          foreground: '#9ece6a',
        },
      },
      {
        name: 'CSS Class',
        scope: [
          'entity.other.attribute-name.class',
          'meta.at-rule.mixin.scss entity.name.function.scss',
        ],
        settings: {
          foreground: '#9ece6a',
        },
      },
      {
        name: 'CSS ID',
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: '#fc7b7b',
        },
      },
      {
        name: 'CSS Tag',
        scope: 'entity.name.tag.css',
        settings: {
          foreground: '#0db9d7',
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
          foreground: '#e0af68',
        },
      },
      {
        name: 'CSS Punctuation',
        scope: 'meta.property-list',
        settings: {
          foreground: '#9abdf5',
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
          foreground: '#ff9e64',
        },
      },
      {
        name: 'CSS Parent Selector Entity',
        scope: [
          'entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity.css',
        ],
        settings: {
          foreground: '#73daca',
        },
      },
      {
        name: 'CSS Punctuation comma fix',
        scope: 'meta.property-list meta.property-list',
        settings: {
          foreground: '#9abdf5',
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
          foreground: '#bb9af7',
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
          foreground: '#9d7cd8',
        },
      },
      {
        name: 'SCSS Include Mixin Argument',
        scope: 'meta.property-list meta.at-rule.include',
        settings: {
          foreground: '#c0caf5',
        },
      },
      {
        name: 'CSS value',
        scope: 'support.constant.property-value',
        settings: {
          foreground: '#ff9e64',
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
          foreground: '#c0caf5',
        },
      },
      {
        name: 'Language methods',
        scope: 'variable.language',
        settings: {
          foreground: '#f7768e',
        },
      },
      {
        name: 'Variable punctuation',
        scope: 'variable.other punctuation.definition.variable',
        settings: {
          foreground: '#c0caf5',
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
          foreground: '#f7768e',
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
          foreground: '#bb9af7',
        },
      },
      {
        name: 'HTML Character Entity',
        scope: 'text.html constant.character.entity',
        settings: {
          foreground: '#0DB9D7',
        },
      },
      {
        name: 'Vue (Vetur / deprecated) Template attributes',
        scope: [
          'entity.other.attribute-name.id.html',
          'meta.directive.vue entity.other.attribute-name.html',
        ],
        settings: {
          foreground: '#bb9af7',
        },
      },
      {
        name: "CSS ID's",
        scope: 'source.sass keyword.control',
        settings: {
          foreground: '#7aa2f7',
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
          foreground: '#bb9af7',
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
          foreground: '#914c54',
        },
      },
      {
        name: 'Changed',
        scope: 'markup.changed',
        settings: {
          foreground: '#6183bb',
        },
      },
      {
        name: 'Regular Expressions',
        scope: 'string.regexp',
        settings: {
          foreground: '#b4f9f8',
        },
      },
      {
        name: 'Regular Expressions - Punctuation',
        scope: 'punctuation.definition.group',
        settings: {
          foreground: '#f7768e',
        },
      },
      {
        name: 'Regular Expressions - Character Class',
        scope: ['constant.other.character-class.regexp'],
        settings: {
          foreground: '#bb9af7',
        },
      },
      {
        name: 'Regular Expressions - Character Class Set',
        scope: [
          'constant.other.character-class.set.regexp',
          'punctuation.definition.character-class.regexp',
        ],
        settings: {
          foreground: '#e0af68',
        },
      },
      {
        name: 'Regular Expressions - Quantifier',
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: '#89ddff',
        },
      },
      {
        name: 'Regular Expressions - Backslash',
        scope: 'constant.character.escape.backslash',
        settings: {
          foreground: '#c0caf5',
        },
      },
      {
        name: 'Escape Characters',
        scope: 'constant.character.escape',
        settings: {
          foreground: '#89ddff',
        },
      },
      {
        name: 'Decorators',
        scope: [
          'tag.decorator.js entity.name.tag.js',
          'tag.decorator.js punctuation.definition.tag.js',
        ],
        settings: {
          foreground: '#7aa2f7',
        },
      },
      {
        name: 'CSS Units',
        scope: 'keyword.other.unit',
        settings: {
          foreground: '#f7768e',
        },
      },
      {
        name: 'JSON Key - Level 0',
        scope: [
          'source.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#7aa2f7',
        },
      },
      {
        name: 'JSON Key - Level 1',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#0db9d7',
        },
      },
      {
        name: 'JSON Key - Level 2',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#7dcfff',
        },
      },
      {
        name: 'JSON Key - Level 3',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#bb9af7',
        },
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#e0af68',
        },
      },
      {
        name: 'JSON Key - Level 5',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#0db9d7',
        },
      },
      {
        name: 'JSON Key - Level 6',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#73daca',
        },
      },
      {
        name: 'JSON Key - Level 7',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#f7768e',
        },
      },
      {
        name: 'JSON Key - Level 8',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: '#9ece6a',
        },
      },
      {
        name: 'Plain Punctuation',
        scope: 'punctuation.definition.list_item.markdown',
        settings: {
          foreground: '#9abdf5',
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
          foreground: '#9abdf5',
        },
      },
      {
        name: 'Markdown - Plain',
        scope: ['meta.embedded.block'],
        settings: {
          foreground: '#c0caf5',
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
          foreground: '#9aa5ce',
        },
      },
      {
        name: 'Markdown - Markup Raw Inline',
        scope: 'text.html.markdown markup.inline.raw.markdown',
        settings: {
          foreground: '#bb9af7',
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
          foreground: '#89ddff',
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
          foreground: '#61bdf2',
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
          foreground: '#7aa2f7',
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
          foreground: '#6d91de',
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
          foreground: '#9aa5ce',
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
          foreground: '#747ca1',
        },
      },
      {
        name: 'Markup - Italic',
        scope: ['markup.italic', 'markup.italic punctuation'],
        settings: {
          fontStyle: 'italic',
          foreground: '#c0caf5',
        },
      },
      {
        name: 'Markup - Bold',
        scope: ['markup.bold', 'markup.bold punctuation'],
        settings: {
          fontStyle: 'bold',
          foreground: '#c0caf5',
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
          foreground: '#c0caf5',
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
          foreground: '#73daca',
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
          foreground: '#89ddff',
        },
      },
      {
        name: 'Markdown - Separator',
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: '#51597d',
        },
      },
      {
        name: 'Markup - Table',
        scope: 'markup.table',
        settings: {
          foreground: '#c0cefc',
        },
      },
      {
        name: 'Token - Info',
        scope: 'token.info-token',
        settings: {
          foreground: '#0db9d7',
        },
      },
      {
        name: 'Token - Warn',
        scope: 'token.warn-token',
        settings: {
          foreground: '#ffdb69',
        },
      },
      {
        name: 'Token - Error',
        scope: 'token.error-token',
        settings: {
          foreground: '#db4b4b',
        },
      },
      {
        name: 'Token - Debug',
        scope: 'token.debug-token',
        settings: {
          foreground: '#b267e6',
        },
      },
      {
        name: 'Apache Tag',
        scope: 'entity.tag.apacheconf',
        settings: {
          foreground: '#f7768e',
        },
      },
      {
        name: 'Preprocessor',
        scope: ['meta.preprocessor'],
        settings: {
          foreground: '#73daca',
        },
      },
      {
        name: 'ENV value',
        scope: 'source.env',
        settings: {
          foreground: '#7aa2f7',
        },
      },
    ],
  }
}
