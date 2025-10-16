import { semanticColors } from '../semantic'

export const baseSyntaxColors = {
  // Basic tokens
  keyword: foundationColors.blue500,
  operator: semanticColors.secondary,
  punctuation: foundationColors.gray400,
  delimiter: foundationColors.gray500,

  // Literals
  string: semanticColors.text,
  number: semanticColors.warning,
  boolean: foundationColors.purple500,
  null: foundationColors.red400,

  // Comments
  comment: semanticColors.textSecondary,
  docComment: semanticColors.textSecondary,
  docTag: semanticColors.secondary,

  // Variables and identifiers
  variable: semanticColors.text,
  parameter: semanticColors.textSecondary,
  property: foundationColors.cyan500,
  constant: semanticColors.warning,

  // Functions and methods
  function: foundationColors.blue400,
  method: foundationColors.blue400,
  constructor: foundationColors.yellow500,

  // Types
  type: foundationColors.teal500,
  interface: foundationColors.teal400,
  enum: foundationColors.orange500,
  class: foundationColors.yellow400,

  // Control flow
  control: foundationColors.purple400,
  conditional: foundationColors.purple400,
  loop: foundationColors.purple400,

  // Special tokens
  regex: semanticColors.info,
  escape: foundationColors.orange400,
  interpolation: foundationColors.orange300,

  // Markup (for HTML-like languages)
  tag: semanticColors.primary,
  attribute: semanticColors.secondary,
  attributeValue: semanticColors.text,

  // CSS-specific
  selector: foundationColors.blue300,
  propertyName: foundationColors.cyan400,
  unit: foundationColors.orange500,

  // Meta
  namespace: foundationColors.teal300,
  decorator: foundationColors.magenta500,
  annotation: foundationColors.magenta400,
} as const

export type BaseSyntaxToken = keyof typeof baseSyntaxColors
