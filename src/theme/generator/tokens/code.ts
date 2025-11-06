import type { TokenColor } from '../../types/index.js'
import { c, colorRules } from '../../utils/color-builder.js'
import {
  borderColor,
  mediumHighlight,
  subtleHighlight,
} from '../../utils/color-helpers.js'
import {
  codeTokenDefinitions,
  convertRulesToTokens,
} from '../../utils/token-helpers.js'

export function generateCodeTokens(): TokenColor[] {
  const { fg, indigo, lime, purple, teal } = c

  // Используем builder для логической группировки токенов
  const builder = colorRules()

  // Structural elements: Tags
  builder.addGroup('tag', {
    entityNameTag: purple.main,
    punctuationDefinitionTag: fg.main,
  })

  // Variable-related elements
  builder.addGroup('variable', {
    variableSupport: lime.main,
    variableParameter: indigo.main,
  })

  // Object-related elements
  builder.addGroup('object', {
    metaObjectLiteralKey: purple.main,
    variableOtherProperty: purple.main,
  })

  // Function-related elements
  builder.addGroup('function', {
    entityNameMethod: purple.main,
    entityNameFunction: purple.main,
  })

  // Constant values
  builder.addGroup('constant', {
    constantCharacter: lime.main,
  })

  // Class and type-related elements
  builder.addGroup('class', {
    entityOtherInherited: purple.main,
    supportClassType: teal.main,
    entityName: teal.main,
  })

  // Convert builder rules to TokenColor format
  return convertRulesToTokens(builder.build(), codeTokenDefinitions)
}
