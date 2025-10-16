import { foundationColors } from '../foundation/colors'

export const baseSyntaxColors = {
  // Basic tokens
  keyword: foundationColors.blue500,
  operator: foundationColors.opColor,
  punctuation: foundationColors.gray400,
  delimiter: foundationColors.gray500,

  // Literals
  string: foundationColors.strColor,
  number: foundationColors.numColor,
  boolean: foundationColors.purple500,
  null: foundationColors.red400,

  // Comments
  comment: foundationColors.commentColor,
  docComment: foundationColors.docCommentColor,
  docTag: foundationColors.docTagColor,

  // Variables and identifiers
  variable: foundationColors.varColor,
  parameter: foundationColors.paramColor,
  property: foundationColors.cyan500,
  constant: foundationColors.constColor,

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
  regex: foundationColors.regexColor,
  escape: foundationColors.orange400,
  interpolation: foundationColors.orange300,

  // Markup (for HTML-like languages)
  tag: foundationColors.htmlTagColor,
  attribute: foundationColors.htmlAttrColor,
  attributeValue: foundationColors.strColor,

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
