import type { TokenColor } from '../../types'
import { palette } from '../../palette'

export function generateCommentTokens(): TokenColor[] {
  const { fg, special } = palette

  return [
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
      settings: { fontStyle: 'italic' },
    },
    {
      name: 'Fix YAML block scalar, Python Logical',
      scope: [
        'keyword.control.flow.block-scalar.literal',
        'keyword.control.flow.python',
      ],
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
      settings: { foreground: fg.muted },
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
      settings: { foreground: '#5a638c' },
    },
    {
      name: 'Comment Doc Emphasized',
      scope: [
        'meta.other.type.phpdoc.php support.class',
        'comment.block.documentation storage.type',
        'comment.block.documentation punctuation.definition.block.tag',
        'comment.block.documentation entity.name.type.instance',
      ],
      settings: { foreground: special.ghostText },
    },
  ]
}
