import { generateSemanticTokenColors } from '../theme/generator/semantic'

describe('Semantic Tokens Tests', () => {
  test('Должен генерировать расширенные семантические токены', () => {
    const tokens = generateSemanticTokenColors()

    // Проверяем базовые токены
    expect(tokens.variable).toBeDefined()
    expect(tokens.parameter).toBeDefined()
    expect(tokens.property).toBeDefined()
    expect(tokens.function).toBeDefined()
    expect(tokens.method).toBeDefined()

    // Проверяем расширенные токены
    expect(tokens['variable.readonly']).toBeDefined()
    expect(tokens['property.static']).toBeDefined()
    expect(tokens['function.declaration']).toBeDefined()
    expect(tokens['method.async']).toBeDefined()

    // Проверяем токены современных фреймворков
    expect(tokens['react.hook']).toBeDefined()
    expect(tokens['react.component']).toBeDefined()
    expect(tokens['typescript.generic']).toBeDefined()
    expect(tokens['graphql.type']).toBeDefined()
    expect(tokens['test.describe']).toBeDefined()
  })

  test('Должен содержать правильные цвета для токенов', () => {
    const tokens = generateSemanticTokenColors()

    // Проверяем цвета переменных
    expect(tokens.variable?.foreground).toBe('#7aa2f7') // blue.medium
    expect(tokens['variable.readonly']?.foreground).toBe('#6183bb') // blue.light

    // Проверяем цвета функций
    expect(tokens.function?.foreground).toBe('#bb9af7') // purple.light
    expect(tokens['function.declaration']?.foreground).toBe('#b267e6') // purple.bright

    // Проверяем цвета React
    expect(tokens['react.hook']?.foreground).toBe('#b267e6') // purple.bright
    expect(tokens['react.component']?.foreground).toBe('#7dcfff') // cyan.light
  })

  test('Должен содержать правильные стили для токенов', () => {
    const tokens = generateSemanticTokenColors()

    // Проверяем стили readonly
    expect(tokens['variable.readonly']?.fontStyle).toBe('italic')
    expect(tokens['property.readonly']?.fontStyle).toBe('italic')

    // Проверяем стили declaration
    expect(tokens['function.declaration']?.fontStyle).toBe('bold')
    expect(tokens['property.declaration']?.fontStyle).toBe('bold')

    // Проверяем стили static
    expect(tokens['property.static']?.fontStyle).toBe('bold')
    expect(tokens['method.static']?.fontStyle).toBe('bold')

    // Проверяем стили async
    expect(tokens['function.async']?.fontStyle).toBe('italic')
    expect(tokens['method.async']?.fontStyle).toBe('italic')
  })

  test('Должен генерировать больше токенов чем оригинальная реализация', () => {
    const tokens = generateSemanticTokenColors()
    const tokenCount = Object.keys(tokens).length

    // Оригинальная реализация имела 8 токенов
    // Новая должна иметь значительно больше
    expect(tokenCount).toBeGreaterThan(20)
  })

  test('Должен поддерживать токены стандартной библиотеки', () => {
    const tokens = generateSemanticTokenColors()

    expect(tokens['property.defaultLibrary']).toBeDefined()
    expect(tokens['variable.defaultLibrary']).toBeDefined()
    expect(tokens['*.defaultLibrary']).toBeDefined()
    expect(tokens['function.defaultLibrary']).toBeDefined()

    // Проверяем, что они используют правильный цвет
    const defaultLibraryColor = '#2ac3de' // ui.defaultLibrary
    expect(tokens['property.defaultLibrary']?.foreground).toBe(
      defaultLibraryColor
    )
    expect(tokens['variable.defaultLibrary']?.foreground).toBe(
      defaultLibraryColor
    )
  })
})
