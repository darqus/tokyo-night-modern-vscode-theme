import type { NestedTokens } from '../palette/types'

/**
 * Разворачивает вложенную модель workbench в плоскую карту цветов VS Code.
 * @param n Вложенная модель workbench токенов
 * @returns Плоская карта цветов для секции colors темы VS Code
 */
export function flattenWorkbenchToColors(n: NestedTokens['workbench']): Record<string, string> {
  return {
    'editor.background': n.editor.base.background,
    'editor.foreground': n.editor.base.foreground,
    'editor.selectionBackground': n.editor.selection.background,
    'editor.inactiveSelectionBackground': n.editor.selection.inactiveBackground,
    'editor.selectionHighlightBackground': n.editor.selection.highlight,
    'editor.findMatchBackground': n.editor.find.match.background,
    'editor.findMatchBorder': n.editor.find.match.border,
    'editor.findMatchHighlightBackground': n.editor.find.highlight.background,
    'editor.findRangeHighlightBackground': n.editor.find.rangeHighlight.background,
    'editorCursor.foreground': n.editor.cursor.foreground,
    'editorWhitespace.foreground': n.editor.whitespace.foreground,
    'editor.lineHighlightBackground': n.editor.lineHighlight.background,
    'editorIndentGuide.background1': n.editor.indentGuide.background1,
    'editorIndentGuide.activeBackground1': n.editor.indentGuide.activeBackground1,
    'editorLineNumber.foreground': n.editor.lineNumber.foreground,
    'editorLineNumber.activeForeground': n.editor.lineNumber.activeForeground,
    'editorHoverWidget.background': n.editor.hoverWidget.background,
    'editorHoverWidget.border': n.editor.hoverWidget.border,
    'editorBracketMatch.background': n.editor.bracketMatch.background,
    'editorBracketMatch.border': n.editor.bracketMatch.border,
    'terminal.background': n.terminal.background,
    'terminal.foreground': n.terminal.foreground,
    'terminal.selectionBackground': n.terminal.selectionBackground,
    'terminal.ansiBlack': n.terminal.ansi.black,
    'terminal.ansiRed': n.terminal.ansi.red,
    'terminal.ansiGreen': n.terminal.ansi.green,
    'terminal.ansiYellow': n.terminal.ansi.yellow,
    'terminal.ansiBlue': n.terminal.ansi.blue,
    'terminal.ansiMagenta': n.terminal.ansi.magenta,
    'terminal.ansiCyan': n.terminal.ansi.cyan,
    'terminal.ansiWhite': n.terminal.ansi.white,
    'terminal.ansiBrightBlack': n.terminal.ansi.brightBlack,
    'terminal.ansiBrightRed': n.terminal.ansi.brightRed,
    'terminal.ansiBrightGreen': n.terminal.ansi.brightGreen,
    'terminal.ansiBrightYellow': n.terminal.ansi.brightYellow,
    'terminal.ansiBrightBlue': n.terminal.ansi.brightBlue,
    'terminal.ansiBrightMagenta': n.terminal.ansi.brightMagenta,
    'terminal.ansiBrightCyan': n.terminal.ansi.brightCyan,
    'peekView.border': n.peekView.border,
    'peekViewEditor.background': n.peekView.editor.background,
    'peekViewEditor.matchHighlightBackground': n.peekView.editor.matchHighlightBackground,
    'peekViewTitle.background': n.peekView.title.background,
    'peekViewTitleLabel.foreground': n.peekView.title.label,
    'peekViewTitleDescription.foreground': n.peekView.title.description,
    'peekViewResult.background': n.peekView.result.background,
    'peekViewResult.selectionForeground': n.peekView.result.selectionForeground,
    'peekViewResult.selectionBackground': n.peekView.result.selectionBackground,
    'peekViewResult.lineForeground': n.peekView.result.lineForeground,
    'peekViewResult.fileForeground': n.peekView.result.fileForeground,
    'peekViewResult.matchHighlightBackground': n.peekView.result.matchHighlightBackground,
    'terminal.ansiBrightWhite': n.terminal.ansi.brightWhite,
    'debugToolBar.background': n.debug?.toolBarBackground || '#101014',
    'debugExceptionWidget.background': n.debug?.exceptionWidgetBackground || '#101014',
    'debugExceptionWidget.border': n.debug?.exceptionWidgetBorder || '#963c47',
    'debugConsole.infoForeground': n.debug?.consoleInfoForeground || '#787c99',
    'debugConsole.errorForeground': n.debug?.consoleErrorForeground || '#bb616b',
    'debugConsole.sourceForeground': n.debug?.consoleSourceForeground || '#787c99',
    'debugConsole.warningForeground': n.debug?.consoleWarningForeground || '#c49a5a',
    'debugConsoleInputIcon.foreground': n.debug?.consoleInputIconForeground || '#73daca',
    'editor.stackFrameHighlightBackground': n.debug?.editorStackFrameHighlightBackground || '#E2BD3A20',
    'editor.focusedStackFrameHighlightBackground': n.debug?.editorFocusedStackFrameHighlightBackground || '#73daca20',
    'debugView.stateLabelForeground': n.debug?.stateLabelForeground || '#787c99',
    'debugView.stateLabelBackground': n.debug?.stateLabelBackground || '#14141b',
    'debugView.valueChangedHighlight': n.debug?.valueChangedHighlight || '#3d59a1aa',
    'debugTokenExpression.name': n.debug?.tokenExpressionName || '#7dcfff',
    'debugTokenExpression.value': n.debug?.tokenExpressionValue || '#9aa5ce',
    'debugTokenExpression.string': n.debug?.tokenExpressionString || '#9ece6a',
    'debugTokenExpression.boolean': n.debug?.tokenExpressionBoolean || '#ff9e64',
    'debugTokenExpression.number': n.debug?.tokenExpressionNumber || '#ff9e64',
    'debugTokenExpression.error': n.debug?.tokenExpressionError || '#bb616b',
    'debugIcon.breakpointForeground': n.debug?.iconBreakpointForeground || '#db4b4b',
    'debugIcon.breakpointDisabledForeground': n.debug?.iconBreakpointDisabledForeground || '#414761',
    'debugIcon.breakpointUnverifiedForeground': n.debug?.iconBreakpointUnverifiedForeground || '#c24242',
     'gitDecoration.modifiedResourceForeground': n.gitDecoration?.modifiedResourceForeground || '#6183bb',
     'gitDecoration.ignoredResourceForeground': n.gitDecoration?.ignoredResourceForeground || '#515670',
     'gitDecoration.deletedResourceForeground': n.gitDecoration?.deletedResourceForeground || '#914c54',
     'gitDecoration.renamedResourceForeground': n.gitDecoration?.renamedResourceForeground || '#449dab',
     'gitDecoration.addedResourceForeground': n.gitDecoration?.addedResourceForeground || '#449dab',
     'gitDecoration.untrackedResourceForeground': n.gitDecoration?.untrackedResourceForeground || '#449dab',
     'gitDecoration.conflictingResourceForeground': n.gitDecoration?.conflictingResourceForeground || '#e0af68cc',
     'gitDecoration.stageDeletedResourceForeground': n.gitDecoration?.stageDeletedResourceForeground || '#914c54',
     'gitDecoration.stageModifiedResourceForeground': n.gitDecoration?.stageModifiedResourceForeground || '#6183bb',
     'notebook.editorBackground': n.notebook?.editorBackground || '#1a1b26',
     'notebook.cellEditorBackground': n.notebook?.cellEditorBackground || '#16161e',
     'notebook.cellBorderColor': n.notebook?.cellBorderColor || '#101014',
     'notebook.focusedCellBorder': n.notebook?.focusedCellBorder || '#29355a',
     'notebook.cellStatusBarItemHoverBackground': n.notebook?.cellStatusBarItemHoverBackground || '#1c1d29',
  }
}

/**
 * Разворачивает вложенную модель semantic токенов в формат semanticTokenColors VS Code.
 * @param n Вложенная модель semantic токенов
 * @returns Карта semanticTokenColors для темы VS Code
 */
export function flattenSemanticToVSCode(n: NestedTokens['semantic']): Record<string, { foreground: string }> {
  return {
    parameter: { foreground: n.tokens.parameter.base },
    'parameter.declaration': { foreground: n.tokens.parameter.declaration },
    property: { foreground: n.tokens.property.base },
    'property.declaration': { foreground: n.tokens.property.declaration },
    'property.defaultLibrary': { foreground: n.tokens.property.defaultLibrary },
    variable: { foreground: n.tokens.variable.base },
    'variable.declaration': { foreground: n.tokens.variable.declaration },
    'variable.defaultLibrary': { foreground: n.tokens.variable.defaultLibrary },
  }
}

/**
 * Конвертирует вложенную модель TextMate токенов в массив правил tokenColors.
 * @param n Вложенная модель TextMate токенов
 * @returns Массив правил tokenColors для темы VS Code
 */
export function convertTextmateNestedToArray(
  n: NestedTokens['tokens']['textmate']
): Array<{ name?: string; scope: string | string[]; settings: { foreground?: string; fontStyle?: string } }> {
  return [
    {
      name: 'Comments',
      scope: ['comment', 'comment.line', 'comment.block'],
      settings: { foreground: n.comments.primary },
    },
    {
      name: 'Strings',
      scope: ['string', 'string.quoted', 'string.unquoted'],
      settings: { foreground: n.strings.primary },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'keyword.control', 'keyword.operator'],
      settings: { foreground: n.keywords.primary },
    },
    {
      name: 'Numbers',
      scope: ['constant.numeric', 'constant.language'],
      settings: { foreground: n.numbers.primary },
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: n.functions.primary },
    },
    {
      name: 'Variables',
      scope: ['variable', 'support.variable'],
      settings: { foreground: n.variables.primary },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation', 'punctuation.separator', 'punctuation.terminator'],
      settings: { foreground: n.punctuation.primary },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator'],
      settings: { foreground: n.operators.primary },
    },
    {
      name: 'Types',
      scope: ['support.type', 'entity.name.type'],
      settings: { foreground: n.types.primary },
    },
    {
      name: 'Tags',
      scope: ['entity.name.tag'],
      settings: { foreground: n.tags.primary },
    },
  ]
}