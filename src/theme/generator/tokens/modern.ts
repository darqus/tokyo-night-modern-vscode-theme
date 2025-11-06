import type { TokenColor } from '../../types'
import { c, colorRules } from '../../utils/color-builder.js'
import {
  convertRulesToTokens,
  modernTokenDefinitions,
} from '../../utils/token-helpers.js'

export function generateModernTokens(): TokenColor[] {
  const { teal, blue, green, magenta, peach, rose } = c

  // Используем builder для логической группировки токенов
  const builder = colorRules()

  // Frontend Frameworks
  builder.addGroup('reactVue', {
    components: peach.light,
  })

  // TypeScript
  builder.addGroup('typescript', {
    types: magenta.light,
  })

  // GraphQL
  builder.addGroup('graphql', {
    schema: magenta.main,
  })

  // Styling
  builder.addGroup('tailwind', {
    classes: teal.main,
  })

  // React-specific
  builder.addGroup('reactHooks', {
    hooks: rose.main,
  })

  // Testing
  builder.addGroup('testing', {
    frameworks: green.main,
  })

  // Modern Frameworks and Libraries
  builder.addGroup('modernFrameworks', {
    general: blue.main,
  })

  // Convert builder rules to TokenColor format
  return convertRulesToTokens(builder.build(), modernTokenDefinitions)
}
