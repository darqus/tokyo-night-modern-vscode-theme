import { TokenColor } from '../token-utils'
import { commonTokens } from './common'
import { javascriptTokens } from './javascript'
import { typescriptTokens } from './typescript'
import { htmlTokens } from './html'
import { cssTokens } from './css'
import { markdownTokens } from './markdown'
import { jsonTokens } from './json'
import { yamlTokens } from './yaml'
import { pythonTokens } from './python'
import { javaTokens } from './java'
import { cppTokens } from './cpp'
import { vueTokens } from './vue'

// Объединение всех токенов в один массив для использования в теме
export const allTokens: TokenColor[] = [
  ...commonTokens,
  ...javascriptTokens,
  ...typescriptTokens,
  ...htmlTokens,
  ...cssTokens,
  ...markdownTokens,
  ...jsonTokens,
  ...yamlTokens,
  ...pythonTokens,
  ...javaTokens,
  ...cppTokens,
  ...vueTokens,
]
