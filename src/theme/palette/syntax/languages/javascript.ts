import { baseSyntaxColors } from '../base'
import { foundationColors } from '../../foundation/colors'

export const javascriptSyntaxColors = {
  // Inherit base colors
  ...baseSyntaxColors,

  // JavaScript-specific overrides and additions
  keyword: {
    ...baseSyntaxColors.keyword,
    // Specific keywords
    const: foundationColors.blue600,
    let: foundationColors.blue600,
    var: foundationColors.blue500,
    function: foundationColors.yellow400,
    class: foundationColors.yellow500,
    extends: foundationColors.purple400,
    import: foundationColors.cyan500,
    export: foundationColors.cyan500,
    from: foundationColors.cyan400,
    async: foundationColors.purple500,
    await: foundationColors.purple500,
    try: foundationColors.red400,
    catch: foundationColors.red400,
    finally: foundationColors.red400,
    throw: foundationColors.red500,
    return: foundationColors.purple400,
    yield: foundationColors.purple400,
    new: foundationColors.yellow400,
    this: foundationColors.red300,
    super: foundationColors.red300,
  },

  // Object and array literals
  object: {
    key: foundationColors.cyan400,
    value: baseSyntaxColors.string,
    bracket: foundationColors.gray400,
  },

  array: {
    bracket: foundationColors.gray400,
  },

  // Template literals
  template: {
    string: foundationColors.green400,
    interpolation: foundationColors.orange300,
    bracket: foundationColors.orange400,
  },

  // JSX (if applicable)
  jsx: {
    tag: foundationColors.blue300,
    attribute: foundationColors.cyan300,
    attributeValue: foundationColors.green300,
    expression: foundationColors.orange400,
  },

  // Special JavaScript constructs
  module: foundationColors.teal400,
  global: foundationColors.red200,
  builtin: foundationColors.blue400,
} as const

export type JavaScriptSyntaxToken = keyof typeof javascriptSyntaxColors
