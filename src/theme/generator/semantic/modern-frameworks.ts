import type { SemanticTokenStyle } from '../../types/index.js'
import { lighten, mix } from '../../utils/color.js'
import { c } from '../../utils/color-builder.js'
import { boldToken, token } from '../../utils/semantic-helpers.js'

/**
 * Builder для создания семантических токенов
 */
class SemanticTokenBuilder {
  private rules: Record<string, SemanticTokenStyle> = {}

  add = (key: string, value: SemanticTokenStyle): this => {
    this.rules[key] = value
    return this
  }

  addGroup = (
    prefix: string,
    rules: Record<string, SemanticTokenStyle>
  ): this => {
    for (const [key, value] of Object.entries(rules)) {
      this.rules[`${prefix}.${key}`] = value
    }
    return this
  }

  build = (): Record<string, SemanticTokenStyle> => ({ ...this.rules })
}

const semanticTokens = (): SemanticTokenBuilder => new SemanticTokenBuilder()

export function generateModernFrameworkTokens(): Record<
  string,
  SemanticTokenStyle
> {
  const { blue, cyan, teal, green, purple } = c

  return (
    semanticTokens()
      // React tokens
      .addGroup('react', {
        hook: boldToken(mix(purple.light, cyan.light, 0.3)),
        component: boldToken(lighten(cyan.light, 0.1)),
      })
      // Vue tokens
      .addGroup('vue', {
        component: boldToken(lighten(green.light, 0.1)),
        templateTag: token(mix(green.main, cyan.light, 0.3)),
        directive: boldToken(mix(teal.main, green.light, 0.2)),
      })
      // Angular tokens
      .addGroup('angular', {
        component: boldToken(lighten(teal.light, 0.1)),
        directive: boldToken(mix(teal.light, blue.main, 0.3)),
        decorator: boldToken(mix(purple.light, teal.main, 0.4)),
      })
      // TypeScript tokens
      .add('typescript.generic', token(mix(cyan.light, blue.main, 0.3)))
      // GraphQL tokens
      .add('graphql.type', boldToken(mix(cyan.main, teal.main, 0.35)))
      .addGroup('graphql', {
        field: token(mix(blue.light, cyan.main, 0.4)),
        argument: token(mix(teal.light, blue.main, 0.3)),
      })
      // Svelte tokens
      .addGroup('svelte', {
        component: boldToken(lighten(purple.light, 0.1)),
        tag: token(mix(purple.main, cyan.light, 0.3)),
        directive: boldToken(mix(teal.main, purple.light, 0.2)),
      })
      // Testing tokens
      .addGroup('test', {
        describe: boldToken(mix(green.main, cyan.light, 0.3)),
        it: boldToken(mix(green.dark, cyan.light, 0.2)),
        assertion: token(mix(green.light, blue.main, 0.3)),
      })
      // Modern frameworks general
      .add('framework.token', token(blue.main))
      .build()
  )
}
