import type { TokenColor } from '../../types/index.js'
import { c, colorRules } from '../../utils/color-builder.js'

export function generateCssTokens(): TokenColor[] {
  const { blue, fg, teal, lime, magenta, amber } = c
  const rules = colorRules()

  // CSS Property rules
  rules.addGroup('css.property', {
    'support.type.property-name': blue.main,
  })

  // CSS Class rules
  rules.addGroup('css.class', {
    'entity.other.attribute-name.class': lime.main,
  })

  // CSS ID rules
  rules.addGroup('css.id', {
    'entity.other.attribute-name.id': blue.light,
  })

  // CSS Tag rules
  rules.addGroup('css.tag', {
    'entity.name.tag.css': teal.main,
  })

  // CSS Punctuation rules
  rules.addGroup('css.punctuation', {
    'punctuation.definition.entity': fg.main,
  })

  // CSS at-rules
  rules.addGroup('css.at-rules', {
    'keyword.control.at-rule': magenta.main,
  })

  // CSS value rules
  rules.addGroup('css.value', {
    'support.constant.property-value': amber.main,
  })

  // CSS pseudo selectors
  rules.addGroup('css.pseudo', {
    'entity.other.attribute-name.pseudo-class': magenta.main,
    'entity.other.attribute-name.pseudo-element': magenta.main,
  })

  const builtRules = rules.build()

  return [
    {
      name: 'CSS Property',
      scope: ['support.type.property-name'],
      settings: {
        foreground: builtRules['css.property.support.type.property-name'],
      },
    },
    {
      name: 'CSS Class',
      scope: ['entity.other.attribute-name.class'],
      settings: {
        foreground: builtRules['css.class.entity.other.attribute-name.class'],
      },
    },
    {
      name: 'CSS ID',
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: builtRules['css.id.entity.other.attribute-name.id'],
      },
    },
    {
      name: 'CSS Tag',
      scope: 'entity.name.tag.css',
      settings: { foreground: builtRules['css.tag.entity.name.tag.css'] },
    },
    {
      name: 'CSS Punctuation',
      scope: ['punctuation.definition.entity'],
      settings: {
        foreground: builtRules['css.punctuation.punctuation.definition.entity'],
      },
    },
    {
      name: 'CSS at-rules',
      scope: ['keyword.control.at-rule'],
      settings: {
        foreground: builtRules['css.at-rules.keyword.control.at-rule'],
      },
    },
    {
      name: 'CSS value',
      scope: 'support.constant.property-value',
      settings: {
        foreground: builtRules['css.value.support.constant.property-value'],
      },
    },
    {
      name: 'CSS pseudo selectors',
      scope: [
        'entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element',
      ],
      settings: {
        foreground:
          builtRules['css.pseudo.entity.other.attribute-name.pseudo-class'],
      },
    },
  ]
}
