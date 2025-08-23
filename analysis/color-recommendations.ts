/**
 * Рекомендуемые замены теплых цветов на холодные аналоги
 * для сохранения холодной цветовой схемы Tokyo Night
 */

import type { Hex } from '../src/types/palette'

export interface ColorReplacement {
  current: Hex
  recommended: Hex
  reason: string
  priority: 'high' | 'medium' | 'low'
  category: string
}

export const colorReplacements: ColorReplacement[] = [
  // Высокий приоритет - основные акценты
  {
    current: '#e0af68',
    recommended: '#7dd3fc', // холодный голубо-желтый
    reason: 'Основной желтый акцент слишком теплый для Tokyo Night',
    priority: 'high',
    category: 'accent.yellow',
  },
  {
    current: '#ff9e64',
    recommended: '#6366f1', // холодный индиго
    reason: 'Оранжевый акцент нарушает холодную схему',
    priority: 'high',
    category: 'accent.orange',
  },
  {
    current: '#ffdb69',
    recommended: '#22d3ee', // холодный циан
    reason: 'Предупреждения должны быть холодными но заметными',
    priority: 'high',
    category: 'warnings',
  },

  // Средний приоритет - CSS и синтаксис
  {
    current: '#ff9e64',
    recommended: '#60a5fa', // холодный синий
    reason: 'CSS at-правила должны соответствовать холодной схеме',
    priority: 'medium',
    category: 'token.cssAtRule',
  },
  {
    current: '#ff9e64',
    recommended: '#34d399', // холодный зеленый
    reason: 'CSS значения лучше представлять холодным цветом',
    priority: 'medium',
    category: 'token.cssValue',
  },
  {
    current: '#e0af68',
    recommended: '#38bdf8', // холодный голубой
    reason: 'JSON ключи должны быть холодными',
    priority: 'medium',
    category: 'token.jsonKey4',
  },
  {
    current: '#e0af68',
    recommended: '#fbbf24', // менее теплый желтый -> холодный аналог
    reason: 'Аргументы функций важны, но должны быть холоднее',
    priority: 'medium',
    category: 'token.functionArg',
  },

  // Низкий приоритет - UI элементы
  {
    current: '#ff9e64',
    recommended: '#8b5cf6', // холодный фиолетовый
    reason: 'Границы модифицированных вкладок',
    priority: 'low',
    category: 'ui.tab.activeModifiedBorder',
  },
  {
    current: '#e0af68',
    recommended: '#06b6d4', // холодный циан
    reason: 'Неактивные модифицированные вкладки',
    priority: 'low',
    category: 'ui.tab.inactiveModifiedBorder',
  },
  {
    current: '#e0af68',
    recommended: '#14b8a6', // холодный тeal
    reason: 'Git конфликты лучше показать холодным цветом',
    priority: 'low',
    category: 'ui.git.conflicting',
  },
]

// Цвета, которые СЛЕДУЕТ ОСТАВИТЬ (семантически важные)
export const keepWarmColors: Array<{
  color: Hex
  reason: string
  category: string
}> = [
  {
    color: '#f7768e',
    reason: 'Красный семантически важен для ошибок',
    category: 'accent.red',
  },
  {
    color: '#f7768e',
    reason: 'Невалидный код должен быть красным',
    category: 'token.invalid',
  },
  {
    color: '#f7768e',
    reason: 'HTML теги традиционно красные',
    category: 'token.tag',
  },
  {
    color: '#ffffff',
    reason: 'Максимальный контраст для выделений',
    category: 'selection text',
  },
  {
    color: '#db4b4b',
    reason: 'Удаленное содержимое семантически красное',
    category: 'deleted content',
  },
]

// Функция для применения рекомендаций
export function applyColorRecommendations(
  priority: 'high' | 'medium' | 'low' = 'high'
) {
  const recommendations = colorReplacements.filter((r) => {
    if (priority === 'high') return r.priority === 'high'
    if (priority === 'medium') return ['high', 'medium'].includes(r.priority)
    return true // все приоритеты
  })

  console.log(
    `\n=== РЕКОМЕНДАЦИИ ПО ЗАМЕНЕ (${priority.toUpperCase()} ПРИОРИТЕТ) ===\n`
  )

  recommendations.forEach((rec) => {
    console.log(`${rec.category}:`)
    console.log(`  Текущий:      ${rec.current}`)
    console.log(`  Рекомендуемый: ${rec.recommended}`)
    console.log(`  Причина:      ${rec.reason}`)
    console.log(`  Приоритет:    ${rec.priority}`)
    console.log('')
  })

  return recommendations
}

// Холодные цвета-кандидаты для замены теплых
export const coldColorCandidates: Record<string, Hex[]> = {
  // Холодные желтые (для замены теплых желтых)
  coldYellow: [
    '#22d3ee', // циан-желтый
    '#7dd3fc', // голубо-желтый
    '#38bdf8', // небесно-голубой
    '#0ea5e9', // океанский синий
  ],

  // Холодные оранжевые (для замены теплых оранжевых)
  coldOrange: [
    '#6366f1', // индиго
    '#8b5cf6', // фиолетовый
    '#a78bfa', // светло-фиолетовый
    '#60a5fa', // синий
  ],

  // Холодные зеленые (улучшенные)
  coldGreen: [
    '#34d399', // изумрудный
    '#10b981', // зеленый
    '#14b8a6', // teal
    '#06b6d4', // циан
  ],

  // Нейтральные холодные
  neutralCold: [
    '#94a3b8', // сланцево-серый
    '#cbd5e1', // светло-сланцевый
    '#e2e8f0', // очень светлый сланцевый
    '#f1f5f9', // почти белый сланцевый
  ],
}

export { colorReplacements as default }
