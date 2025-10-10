// Корневой модуль для токенов синтаксиса
export {
  TokenColor,
  TokenModule,
  createToken,
  combineTokenModules,
  updateTokenColors,
  filterTokensByLanguage,
  filterTokensByScope,
} from '../token-utils'

// Импорты модулей токенов для разных языков
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
import { commonTokens } from './common'

// Объединение всех токенов в один массив
export const allTokens = [
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
]
