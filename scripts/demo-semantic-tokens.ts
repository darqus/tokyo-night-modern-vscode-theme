import { generateSemanticTokenColors } from '../src/theme/generator/semantic'

console.log('🎨 Демонстрация расширенных семантических токенов Tokyo Modern\n')

const ORIGINAL_TOKEN_COUNT = 8
const tokens = generateSemanticTokenColors()
const tokenCount = Object.keys(tokens).length

console.log(`📊 Всего сгенерировано токенов: ${tokenCount}\n`)

// Группируем токены по категориям
const categories = {
  '🟦 Переменные и параметры': [
    'variable',
    'variable.readonly',
    'variable.readonly.default',
    'parameter',
    'parameter.readonly',
    'parameter.type',
  ],
  '🔵 Свойства': [
    'property',
    'property.readonly',
    'property.static',
    'property.declaration',
    'property.defaultLibrary',
  ],
  '🟣 Функции и методы': [
    'function',
    'function.declaration',
    'function.async',
    'method',
    'method.declaration',
    'method.static',
    'method.async',
    'constructor',
  ],
  '🟢 Стандартная библиотека': [
    'variable.defaultLibrary',
    'function.defaultLibrary',
    'property.defaultLibrary',
    '*.defaultLibrary',
  ],
  '🌟 Современные фреймворки': [
    'react.hook',
    'react.component',
    'react.props',
    'vue.composable',
    'vue.directive',
    'typescript.generic',
    'typescript.utility',
    'graphql.type',
    'graphql.field',
    'test.describe',
    'test.assertion',
    'test.mock',
  ],
}

Object.entries(categories).forEach(([category, tokenNames]) => {
  console.log(`${category}:`)
  tokenNames.forEach((tokenName) => {
    const token = tokens[tokenName]
    if (token) {
      const color = token.foreground || 'N/A'
      const style = token.fontStyle || 'normal'
      const sanitizedTokenName = tokenName
        .split('')
        .filter((c) => c.charCodeAt(0) > 31 && c.charCodeAt(0) < 127)
        .join('')
      const sanitizedColor = color
        .split('')
        .filter((c) => c.charCodeAt(0) > 31 && c.charCodeAt(0) < 127)
        .join('')
      const sanitizedStyle = style
        .split('')
        .filter((c) => c.charCodeAt(0) > 31 && c.charCodeAt(0) < 127)
        .join('')
      console.log(
        `  ${sanitizedTokenName.padEnd(25)} ${sanitizedColor.padEnd(10)} ${sanitizedStyle}`
      )
    }
  })
  console.log()
})

// Сравнение с оригинальной реализацией
console.log('📈 Сравнение с оригинальной реализацией:')
console.log(`  Оригинал: ${ORIGINAL_TOKEN_COUNT} токенов`)
console.log(`  Расширенная: ${tokenCount} токенов`)
console.log(
  `  Увеличение: +${Math.round(((tokenCount - ORIGINAL_TOKEN_COUNT) / ORIGINAL_TOKEN_COUNT) * 100)}%\n`
)

// Пример использования в коде
console.log('🎯 Пример визуального различия:')
console.log("\n  const userName: string = 'Tokyo'     // variable + string")
console.log(
  '  readonly config: Config = {}          // variable.readonly + type'
)
console.log("  static API_URL = 'https://api.dev'    // property.static")
console.log('')
console.log(
  '  async function fetchData(): Promise<Data> {  // function.async + typescript.generic'
)
console.log(
  '    const response = await fetch(API_URL)      // variable + function.defaultLibrary'
)
console.log('    return response.json()                     // method')
console.log('  }')
console.log('')
console.log(
  '  const [data, setData] = useState<Data>()     // react.hook + typescript.generic'
)

console.log('✨ Расширенные семантические токены успешно интегрированы!')
