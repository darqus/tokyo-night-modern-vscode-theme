import { TokenColor } from '../token-utils'
import { commonTokens } from './modules/common'
import { javascriptTokens } from './modules/javascript'
import { typescriptTokens } from './modules/typescript'
import { htmlTokens } from './modules/html'
import { cssTokens } from './modules/css'
import { markdownTokens } from './modules/markdown'
import { jsonTokens } from './modules/json'
import { yamlTokens } from './modules/yaml'
import { pythonTokens } from './modules/python'
import { javaTokens } from './modules/java'
import { cppTokens } from './modules/cpp'
import { vueTokens } from './modules/vue'

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
