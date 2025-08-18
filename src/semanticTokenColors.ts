import type { Hex } from './palette'
import { palette } from './palette'

export type SemanticTokenStyle = {
  foreground?: Hex
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
}

export const semanticTokenColors: Record<string, SemanticTokenStyle> = {
  // Существующие базовые правила
  'parameter.declaration': { foreground: palette.accent.yellow },
  parameter: { foreground: palette.fg.muted },
  'property.declaration': { foreground: palette.accent.teal },
  'property.defaultLibrary': { foreground: palette.accent.cyan },
  '*.defaultLibrary': { foreground: palette.accent.cyan },
  'variable.defaultLibrary': { foreground: palette.accent.cyan },
  'variable.declaration': { foreground: palette.accent.magenta },
  variable: { foreground: palette.fg.primary },

  // РАСШИРЕННЫЕ СЕМАНТИЧЕСКИЕ ПРАВИЛА - Phase 1.3
  // Переменные с модификаторами
  'variable.readonly': { foreground: palette.accent.cyan },
  'variable.mutable': { foreground: palette.fg.primary },
  'variable.static': { foreground: palette.accent.magenta, bold: true },
  'variable.local': { foreground: palette.fg.primary },
  'variable.global': { foreground: palette.accent.red },

  // Функции и методы
  'function.declaration': { foreground: palette.accent.blue },
  'function.async': { foreground: palette.accent.magenta },
  'method.declaration': { foreground: palette.accent.blue },
  'method.static': { foreground: palette.accent.blue, bold: true },

  // Типы и классы
  'class.declaration': { foreground: palette.accent.orange },
  'class.defaultLibrary': { foreground: palette.accent.cyan },
  'interface.declaration': { foreground: palette.accent.teal },
  'enum.declaration': { foreground: palette.accent.yellow },
  'type.declaration': { foreground: palette.accent.orange },
  typeParameter: { foreground: palette.accent.teal },
  struct: { foreground: palette.accent.orange },

  // Модули и пространства имен
  namespace: { foreground: palette.accent.blue },
  'namespace.declaration': { foreground: palette.accent.blue, bold: true },
  module: { foreground: palette.accent.blue },

  // Макросы и препроцессор
  macro: { foreground: palette.accent.red },
  'macro.declaration': { foreground: palette.accent.red, bold: true },

  // Language-specific правила
  // Rust
  'lifetime:rust': { foreground: palette.accent.yellow },
  'generic:rust': { foreground: palette.accent.teal },
  'attribute:rust': { foreground: palette.accent.magenta },
  'selfKeyword:rust': { foreground: palette.accent.red, bold: true },
  'trait:rust': { foreground: palette.accent.teal },
  'union:rust': { foreground: palette.accent.orange },

  // Python
  'decorator:python': { foreground: palette.accent.blue },
  'selfParameter:python': { foreground: palette.accent.red },
  'clsParameter:python': { foreground: palette.accent.red },
  'magicFunction:python': { foreground: palette.accent.magenta },

  // TypeScript/JavaScript
  'interface:typescript': { foreground: palette.accent.teal },
  'type:typescript': { foreground: palette.accent.orange },
  'enum:typescript': { foreground: palette.accent.yellow },
  'enumMember:typescript': { foreground: palette.accent.yellow },
  'decorator:typescript': { foreground: palette.accent.blue },

  // Go
  'type:go': { foreground: palette.accent.orange },
  'interface:go': { foreground: palette.accent.teal },
  'struct:go': { foreground: palette.accent.orange },
  'package:go': { foreground: palette.accent.blue },

  // C/C++
  'macro:c': { foreground: palette.accent.red },
  'macro:cpp': { foreground: palette.accent.red },
  'class:cpp': { foreground: palette.accent.orange },
  'namespace:cpp': { foreground: palette.accent.blue },
  'template:cpp': { foreground: palette.accent.teal },

  // Java
  'annotation:java': { foreground: palette.accent.blue },
  'class:java': { foreground: palette.accent.orange },
  'interface:java': { foreground: palette.accent.teal },
  'package:java': { foreground: palette.accent.blue },

  // C#
  'class:csharp': { foreground: palette.accent.orange },
  'interface:csharp': { foreground: palette.accent.teal },
  'namespace:csharp': { foreground: palette.accent.blue },
  'attribute:csharp': { foreground: palette.accent.blue },

  // HTML/XML
  'attribute:html': { foreground: palette.accent.magenta },
  'tag:html': { foreground: palette.accent.red },
  'element:xml': { foreground: palette.accent.red },

  // CSS/SCSS
  'property:css': { foreground: palette.accent.blue },
  'class:css': { foreground: palette.fg.primary },
  'id:css': { foreground: palette.accent.magenta },
  'pseudoClass:css': { foreground: palette.accent.magenta },
  'pseudoElement:css': { foreground: palette.accent.magenta },
  'variable:scss': { foreground: palette.accent.teal },
  'mixin:scss': { foreground: palette.accent.magenta },

  // Markdown
  'heading:markdown': { foreground: palette.accent.blue, bold: true },
  'emphasis:markdown': { foreground: palette.fg.primary, italic: true },
  'strong:markdown': { foreground: palette.fg.primary, bold: true },
  'code:markdown': { foreground: palette.accent.magenta },
  'codeBlock:markdown': { foreground: palette.accent.cyan },
  'link:markdown': { foreground: palette.accent.teal },

  // JSON
  'property:json': { foreground: palette.accent.blue },
  'string:json': { foreground: palette.token.string },
  'number:json': { foreground: palette.accent.yellow },

  // YAML
  'property:yaml': { foreground: palette.accent.blue },
  'anchor:yaml': { foreground: palette.accent.cyan },
  'alias:yaml': { foreground: palette.accent.cyan },

  // ДОПОЛНИТЕЛЬНЫЕ СЕМАНТИЧЕСКИЕ ПРАВИЛА - Phase 1.4
  // Константы и литералы
  constant: { foreground: palette.accent.yellow },
  'constant.readonly': { foreground: palette.accent.yellow, bold: true },
  number: { foreground: palette.accent.yellow },
  string: { foreground: palette.token.string },
  boolean: { foreground: palette.accent.magenta },
  null: { foreground: palette.accent.magenta },
  undefined: { foreground: palette.accent.magenta },

  // Операторы и ключевые слова
  operator: { foreground: palette.accent.magenta },
  keyword: { foreground: palette.accent.magenta },
  'keyword.control': { foreground: palette.accent.magenta, bold: true },
  'keyword.operator': { foreground: palette.accent.magenta },
  'keyword.type': { foreground: palette.accent.blue },
  'keyword.modifier': { foreground: palette.accent.cyan },

  // Комментарии и документация
  comment: { foreground: palette.token.comment },
  'comment.documentation': { foreground: palette.token.comment, italic: true },
  'comment.keyword': { foreground: palette.accent.blue, italic: true },

  // Ошибки и предупреждения
  error: { foreground: palette.token.error, underline: true },
  warning: { foreground: palette.token.warning, underline: true },
  deprecated: { foreground: palette.fg.inactive, strikethrough: true },

  // Регулярные выражения
  regexp: { foreground: palette.accent.red },
  'regexp.characterClass': { foreground: palette.accent.yellow },
  'regexp.escape': { foreground: palette.accent.cyan },

  // Декораторы и аннотации
  decorator: { foreground: palette.accent.blue },
  annotation: { foreground: palette.accent.blue },

  // Параметры и аргументы
  'parameter.type': { foreground: palette.accent.cyan },
  'parameter.name': { foreground: palette.accent.yellow },
  argument: { foreground: palette.fg.primary },

  // Метки и ссылки
  label: { foreground: palette.accent.blue },
  reference: { foreground: palette.accent.teal },

  // Специальные токены
  escapeSequence: { foreground: palette.accent.cyan },
  formatSpecifier: { foreground: palette.accent.yellow },
  punctuation: { foreground: palette.fg.primary },
  'punctuation.delimiter': { foreground: palette.fg.muted },
  'punctuation.bracket': { foreground: palette.fg.primary },
  'punctuation.special': { foreground: palette.accent.magenta },
}
