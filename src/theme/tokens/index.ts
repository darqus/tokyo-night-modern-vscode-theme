import type { TokenColor } from '../token-utils'
import { commonTokens } from './modules/common'
import { cppTokens } from './modules/cpp'
import { csharpTokens } from './modules/csharp'
import { cssTokens } from './modules/css'
import { goTokens } from './modules/go'
import { haskellTokens } from './modules/haskell'
import { htmlTokens } from './modules/html'
import { javaTokens } from './modules/java'
import { javascriptTokens } from './modules/javascript'
import { jsonTokens } from './modules/json'
import { kotlinTokens } from './modules/kotlin'
import { markdownTokens } from './modules/markdown'
import { phpTokens } from './modules/php'
import { pythonTokens } from './modules/python'
import { rubyTokens } from './modules/ruby'
import { rustTokens } from './modules/rust'
import { swiftTokens } from './modules/swift'
import { typescriptTokens } from './modules/typescript'
import { vueTokens } from './modules/vue'
import { yamlTokens } from './modules/yaml'

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
  ...goTokens,
  ...haskellTokens,
  ...rustTokens,
  ...vueTokens,
  ...csharpTokens,
  ...phpTokens,
  ...rubyTokens,
  ...kotlinTokens,
  ...swiftTokens,
]
