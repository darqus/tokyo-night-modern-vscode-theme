import { TokenColor } from '../token-utils'
import { palette } from '../palette'

export const typescriptTokens: TokenColor[] = [
  {
    name: 'TypeScript: Primitive Type',
    scope: 'support.type.primitive.ts',
    settings: { foreground: palette.builtinType },
  },
  {
    name: 'TypeScript: Keyword',
    scope: 'keyword.typescript',
    settings: { foreground: palette.purple },
  },
  {
    name: 'TypeScript: Decorator',
    scope: 'meta.decorator.ts entity.name.function.ts',
    settings: { foreground: palette.annotation },
  },
  {
    name: 'TypeScript: Type Parameter',
    scope: 'entity.name.type.parameter.ts',
    settings: { foreground: palette.typeParam },
  },
  {
    name: 'TypeScript: Enum Member',
    scope: 'variable.other.enummember.ts',
    settings: { foreground: palette.orange },
  },
  {
    name: 'TypeScript: Namespace',
    scope: 'entity.name.namespace.ts',
    settings: { foreground: palette.namespace },
  },
  {
    name: 'TypeScript: JSDoc Tags',
    scope: [
      'storage.type.class.jsdoc',
      'entity.name.type.instance.jsdoc',
      'variable.other.jsdoc',
    ],
    settings: { foreground: palette.jsdocTag },
  },
]