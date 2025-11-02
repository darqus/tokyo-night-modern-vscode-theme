import { generateSemanticTokenColors } from '../src/theme/generator/semantic'

console.log(
  '🎨 Демонстрация расширенных семантических токенов Tokyo Modern\n'
)

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
      console.log(`  ${tokenName.padEnd(25)} ${color.padEnd(10)} ${style}`)
    }
  })
  console.log()
})

// Сравнение с оригинальной реализацией
console.log('📈 Сравнение с оригинальной реализацией:')
console.log(`  Оригинал: 8 токенов`)
console.log(`  Расширенная: ${tokenCount} токенов`)
console.log(`  Увеличение: +${Math.round(((tokenCount - 8) / 8) * 100)}%\n`)

// Пример использования в коде
console.log('🎯 Пример визуального различия:')
console.log(`
  const userName: string = 'Tokyo'     // variable + string
  readonly config: Config = {}          // variable.readonly + type
  static API_URL = 'https://api.dev'    // property.static

  async function fetchData(): Promise<Data> {  // function.async + typescript.generic
    const response = await fetch(API_URL)      // variable + function.defaultLibrary
    return response.json()                     // method
  }

  const [data, setData] = useState<Data>()     // react.hook + typescript.generic
`)

console.log('✨ Расширенные семантические токены успешно интегрированы!')
