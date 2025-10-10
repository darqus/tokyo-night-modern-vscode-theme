import { TokenColor } from '../../token-utils'
import { palette } from '../../palette'

export const rustTokens: TokenColor[] = [
  {
    name: 'Rust: Storage Modifier Lifetime',
    scope: 'storage.modifier.lifetime.rust',
    settings: { foreground: palette.variable },
  },
  {
    name: 'Rust: Support Function Standard Library',
    scope: 'support.function.std.rust',
    settings: { foreground: palette.keywordAsync },
  },
  {
    name: 'Rust: Entity Name Lifetime',
    scope: 'entity.name.lifetime.rust',
    settings: { foreground: palette.yellow },
  },
  {
    name: 'Rust: Variable Language',
    scope: 'variable.language.rust',
    settings: { foreground: palette.red },
  },
  {
    name: 'Rust: Keyword Operator Misc',
    scope: 'keyword.operator.misc.rust',
    settings: { foreground: palette.variable },
  },
  {
    name: 'Rust: Keyword Operator Sigil',
    scope: 'keyword.operator.sigil.rust',
    settings: { foreground: palette.purple },
  },
  {
    name: 'Rust: Support Constant Core',
    scope: 'support.constant.core.rust',
    settings: { foreground: palette.orange },
  },
]