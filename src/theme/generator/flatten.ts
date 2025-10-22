import type { NestedTokens } from '../palette/primitives'

// Flatten workbench nested tokens to VS Code colors flat map
export function flattenWorkbenchToColors(workbench: NestedTokens['workbench']): Record<string, string> {
  const colors: Record<string, string> = {}

  // editor base
  if (workbench.editor?.base) {
    const { background, foreground } = workbench.editor.base
    if (background) colors['editor.background'] = background
    if (foreground) colors['editor.foreground'] = foreground
  }

  // editor selection
  if (workbench.editor?.selection) {
    const sel = workbench.editor.selection
    if (sel.background) colors['editor.selectionBackground'] = sel.background
    if (sel.inactiveBackground) colors['editor.inactiveSelectionBackground'] = sel.inactiveBackground
    if (sel.highlight) colors['editor.selectionHighlightBackground'] = sel.highlight
  }

  // editor find
  if (workbench.editor?.find) {
    const { match, highlight, rangeHighlight } = workbench.editor.find
    if (match?.background) colors['editor.findMatchBackground'] = match.background
    if (match?.border) colors['editor.findMatchBorder'] = match.border
    if (highlight?.background) colors['editor.findMatchHighlightBackground'] = highlight.background
    if (rangeHighlight?.background) colors['editor.findRangeHighlightBackground'] = rangeHighlight.background
  }

  // cursor
  if (workbench.editor?.cursor?.foreground) {
    colors['editorCursor.foreground'] = workbench.editor.cursor.foreground
  }

  // whitespace
  if (workbench.editor?.whitespace?.foreground) {
    colors['editorWhitespace.foreground'] = workbench.editor.whitespace.foreground
  }

  // line highlight
  if (workbench.editor?.lineHighlight?.background) {
    colors['editor.lineHighlightBackground'] = workbench.editor.lineHighlight.background
  }

  // indent guides
  if (workbench.editor?.indentGuide) {
    const ig = workbench.editor.indentGuide
    if (ig.background1) colors['editorIndentGuide.background1'] = ig.background1
    if (ig.activeBackground1) colors['editorIndentGuide.activeBackground1'] = ig.activeBackground1
  }

  // line numbers
  if (workbench.editor?.lineNumber) {
    const ln = workbench.editor.lineNumber
    if (ln.foreground) colors['editorLineNumber.foreground'] = ln.foreground
    if (ln.activeForeground) colors['editorLineNumber.activeForeground'] = ln.activeForeground
  }

  // hover widget
  if (workbench.editor?.hoverWidget) {
    const hw = workbench.editor.hoverWidget
    if (hw.background) colors['editorHoverWidget.background'] = hw.background
    if (hw.border) colors['editorHoverWidget.border'] = hw.border
  }

  // bracket match
  if (workbench.editor?.bracketMatch) {
    const bm = workbench.editor.bracketMatch
    if (bm.background) colors['editorBracketMatch.background'] = bm.background
    if (bm.border) colors['editorBracketMatch.border'] = bm.border
  }

  // terminal
  if (workbench.terminal) {
    const t = workbench.terminal
    if (t.background) colors['terminal.background'] = t.background
    if (t.foreground) colors['terminal.foreground'] = t.foreground
    if (t.selectionBackground) colors['terminal.selectionBackground'] = t.selectionBackground
    if (t.ansi) {
      if (t.ansi.black) colors['terminal.ansiBlack'] = t.ansi.black
      if (t.ansi.red) colors['terminal.ansiRed'] = t.ansi.red
      if (t.ansi.green) colors['terminal.ansiGreen'] = t.ansi.green
      if (t.ansi.yellow) colors['terminal.ansiYellow'] = t.ansi.yellow
      if (t.ansi.blue) colors['terminal.ansiBlue'] = t.ansi.blue
      if (t.ansi.magenta) colors['terminal.ansiMagenta'] = t.ansi.magenta
      if (t.ansi.cyan) colors['terminal.ansiCyan'] = t.ansi.cyan
      if (t.ansi.white) colors['terminal.ansiWhite'] = t.ansi.white
      if (t.ansi.brightBlack) colors['terminal.ansiBrightBlack'] = t.ansi.brightBlack
      if (t.ansi.brightRed) colors['terminal.ansiBrightRed'] = t.ansi.brightRed
      if (t.ansi.brightGreen) colors['terminal.ansiBrightGreen'] = t.ansi.brightGreen
      if (t.ansi.brightYellow) colors['terminal.ansiBrightYellow'] = t.ansi.brightYellow
      if (t.ansi.brightBlue) colors['terminal.ansiBrightBlue'] = t.ansi.brightBlue
      if (t.ansi.brightMagenta) colors['terminal.ansiBrightMagenta'] = t.ansi.brightMagenta
      if (t.ansi.brightCyan) colors['terminal.ansiBrightCyan'] = t.ansi.brightCyan
      if (t.ansi.brightWhite) colors['terminal.ansiBrightWhite'] = t.ansi.brightWhite
    }
  }

  return colors
}

// Flatten semantic nested tokens to VS Code semanticTokenColors
export function flattenSemanticToVSCode(semantic: NestedTokens['semantic']): Record<string, { foreground: string }> {
  const out: Record<string, { foreground: string }> = {}
  const t = semantic.tokens
  if (t?.parameter) {
    if (t.parameter.base) out['parameter'] = { foreground: t.parameter.base }
    if (t.parameter.declaration) out['parameter.declaration'] = { foreground: t.parameter.declaration }
  }
  if (t?.property) {
    if (t.property.base) out['property'] = { foreground: t.property.base }
    if (t.property.declaration) out['property.declaration'] = { foreground: t.property.declaration }
    if (t.property.defaultLibrary) out['property.defaultLibrary'] = { foreground: t.property.defaultLibrary }
  }
  if (t?.variable) {
    if (t.variable.base) out['variable'] = { foreground: t.variable.base }
    if (t.variable.declaration) out['variable.declaration'] = { foreground: t.variable.declaration }
    if (t.variable.defaultLibrary) out['variable.defaultLibrary'] = { foreground: t.variable.defaultLibrary }
  }
  return out
}

// Minimal TextMate conversion based on basic groups
export function convertTextmateNestedToArray(textmate: NestedTokens['tokens']['textmate']) {
  const arr: Array<{ name?: string; scope: string | string[]; settings: { foreground?: string; fontStyle?: string } }> = []

  const push = (name: string, scope: string | string[], color?: string, fontStyle?: string) => {
    const settings: { foreground?: string; fontStyle?: string } = {}
    if (color) settings.foreground = color
    if (fontStyle) settings.fontStyle = fontStyle
    arr.push({ name, scope, settings })
  }

  if (textmate.comments?.primary) {
    push('Comment', ['comment', 'punctuation.definition.comment'], textmate.comments.primary)
  }
  if (textmate.strings?.primary) {
    push('String', ['string', 'constant.other.symbol'], textmate.strings.primary)
  }
  if (textmate.keywords?.primary) {
    push('Keyword', ['keyword', 'storage.type'], textmate.keywords.primary)
  }
  if (textmate.numbers?.primary) {
    push('Number/Boolean/Null', ['constant.numeric', 'constant.language'], textmate.numbers.primary)
  }
  if (textmate.functions?.primary) {
    push('Function', ['entity.name.function', 'support.function'], textmate.functions.primary)
  }
  if (textmate.variables?.primary) {
    push('Variable', ['variable', 'support.variable'], textmate.variables.primary)
  }
  if (textmate.punctuation?.primary) {
    push('Punctuation', 'punctuation', textmate.punctuation.primary)
  }
  if (textmate.operators?.primary) {
    push('Operator', 'keyword.operator', textmate.operators.primary)
  }
  if (textmate.types?.primary) {
    push('Type', ['support.type', 'entity.name.type'], textmate.types.primary)
  }
  if (textmate.tags?.primary) {
    push('Tag', 'entity.name.tag', textmate.tags.primary)
  }

  return arr
}
