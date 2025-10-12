// Утилиты для работы с токенами синтаксиса
export interface TokenColor {
  name: string
  scope: string | string[]
  settings: {
    foreground?: string
    background?: string
    fontStyle?: string
  }
}

export interface TokenModule {
  language: string
  tokens: TokenColor[]
}

/**
 * Создает токен синтаксиса
 * @param name Название токена
 * @param scope Область применения (scope)
 * @param settings Настройки (цвета, стиль)
 * @returns TokenColor объект
 */
export function createToken(
  name: string,
  scope: string | string[],
  settings: TokenColor['settings']
): TokenColor {
  return { name, scope, settings }
}

/**
 * Создает токены для нескольких языков
 * @param modules Модули токенов для разных языков
 * @returns Объединенный массив токенов
 */
export function combineTokenModules(...modules: TokenModule[]): TokenColor[] {
  return modules.flatMap((module) =>
    module.tokens.map((token) => ({
      ...token,
      name: `${module.language}: ${token.name}`,
    }))
  )
}

/**
 * Обновляет цвета в токенах с использованием новой палитры
 * @param tokens Массив токенов
 * @param colorMap Карта соответствия старых цветов новым
 * @returns Новые токены с обновленными цветами
 */
export function updateTokenColors(
  tokens: TokenColor[],
  colorMap: Record<string, string>
): TokenColor[] {
  return tokens.map((token) => {
    const newSettings = { ...token.settings }

    if (newSettings.foreground && colorMap[newSettings.foreground]) {
      newSettings.foreground = colorMap[newSettings.foreground]
    }

    if (newSettings.background && colorMap[newSettings.background]) {
      newSettings.background = colorMap[newSettings.background]
    }

    return {
      ...token,
      settings: newSettings,
    }
  })
}

/**
 * Фильтрует токены по языку
 * @param tokens Массив токенов
 * @param language Язык для фильтрации
 * @returns Отфильтрованный массив токенов
 */
export function filterTokensByLanguage(
  tokens: TokenColor[],
  language: string
): TokenColor[] {
  return tokens.filter((token) => token.name.startsWith(`${language}: `))
}

/**
 * Фильтрует токены по scope
 * @param tokens Массив токенов
 * @param scope Паттерн scope для фильтрации
 * @returns Отфильтрованный массив токенов
 */
export function filterTokensByScope(
  tokens: TokenColor[],
  scope: string
): TokenColor[] {
  return tokens.filter((token) => {
    if (typeof token.scope === 'string') {
      return token.scope.includes(scope)
    } else {
      return token.scope.some((s) => s.includes(scope))
    }
  })
}
