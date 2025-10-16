import { baseSyntaxColors } from '../base'
import { foundationColors } from '../../foundation/colors'

export const pythonSyntaxColors = {
  // Inherit base colors
  ...baseSyntaxColors,

  // Python-specific overrides and additions
  keyword: {
    // Specific keywords
    def: foundationColors.blue600,
    class: foundationColors.yellow500,
    lambda: foundationColors.purple500,
    if: foundationColors.purple400,
    elif: foundationColors.purple400,
    else: foundationColors.purple400,
    for: foundationColors.purple400,
    while: foundationColors.purple400,
    try: foundationColors.red400,
    except: foundationColors.red400,
    finally: foundationColors.red400,
    with: foundationColors.purple400,
    as: foundationColors.purple400,
    import: foundationColors.cyan500,
    from: foundationColors.cyan400,
    return: foundationColors.purple400,
    yield: foundationColors.purple400,
    raise: foundationColors.red500,
    pass: foundationColors.gray500,
    break: foundationColors.red400,
    continue: foundationColors.red400,
    global: foundationColors.red300,
    nonlocal: foundationColors.red300,
    assert: foundationColors.orange500,
    del: foundationColors.red400,
    async: foundationColors.purple500,
    await: foundationColors.purple500,
    in: foundationColors.purple400,
    is: foundationColors.purple400,
    not: foundationColors.purple400,
    and: foundationColors.purple400,
    or: foundationColors.purple400,
    None: foundationColors.red400,
    True: foundationColors.green400,
    False: foundationColors.green400,
  },

  // Python-specific constructs
  decorator: foundationColors.magenta500,
  decoratorParameter: foundationColors.cyan700,
  self: foundationColors.red300,
  cls: foundationColors.red300,

  // Built-in functions and types
  builtin: {
    function: foundationColors.blue400,
    type: foundationColors.teal500,
    exception: foundationColors.red400,
    constant: foundationColors.orange500,
  },

  // String prefixes
  stringPrefix: foundationColors.orange400,
  fString: foundationColors.green400,
  rawString: foundationColors.green500,
  bytesString: foundationColors.yellow400,

  // Special Python tokens
  parameter: foundationColors.paramColor,
  typeHint: foundationColors.teal400,
  typeAnnotation: foundationColors.teal300,

  // Docstrings
  docstring: foundationColors.docCommentColor,

  // Special methods
  dunder: foundationColors.magenta400,
  magic: foundationColors.magenta400,

  // Operators (defined as separate tokens rather than extending base operator)
  comparisonOperator: foundationColors.purple400,
  arithmeticOperator: foundationColors.blue400,
  logicalOperator: foundationColors.purple500,
  assignmentOperator: foundationColors.purple400,

  // Data structures
  list: {
    bracket: foundationColors.gray400,
  },
  dict: {
    key: foundationColors.cyan400,
    value: baseSyntaxColors.string,
    bracket: foundationColors.gray400,
  },
  tuple: {
    bracket: foundationColors.gray400,
  },

  // Comments
  comment: foundationColors.commentColor,
  docComment: foundationColors.docCommentColor,
  docTag: foundationColors.docTagColor,
} as const

export type PythonSyntaxToken = keyof typeof pythonSyntaxColors
