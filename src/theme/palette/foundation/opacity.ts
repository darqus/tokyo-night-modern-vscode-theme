/**
 * Система прозрачности цветов
 * Определяет стандартные уровни прозрачности и функции для работы с ними
 */

/**
 * Стандартные уровни прозрачности
 * Значения выбраны на основе анализа существующего использования
 */
export const opacityLevels = {
  subtle: '10', // Едва заметные эффекты
  light: '20', // Легкие эффекты
  medium: '40', // Средний уровень прозрачности
  strong: '60', // Сильная прозрачность
  solid: '80', // Почти непрозрачный
} as const

export type OpacityLevel = keyof typeof opacityLevels

/**
 * Получает hex-цвет с указанной прозрачностью
 * @param color - Цвет в формате hex (#RRGGBB)
 * @param level - Уровень прозрачности из opacityLevels
 * @returns Цвет с прозрачностью в формате #RRGGBBAA
 */
export function getColorWithOpacity(
  color: string,
  level: OpacityLevel
): string {
  // Проверяем корректность формата цвета
  if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
    throw new Error(`Invalid color format: ${color}. Expected format: #RRGGBB`)
  }

  const opacity = opacityLevels[level]
  return `${color}${opacity}`
}

/**
 * Создает набор вариантов цвета с разной прозрачностью
 * @param color - Базовый цвет
 * @returns Объект с вариантами прозрачности
 */
export function createOpacityVariants(
  color: string
): Record<OpacityLevel, string> {
  return {
    subtle: getColorWithOpacity(color, 'subtle'),
    light: getColorWithOpacity(color, 'light'),
    medium: getColorWithOpacity(color, 'medium'),
    strong: getColorWithOpacity(color, 'strong'),
    solid: getColorWithOpacity(color, 'solid'),
  }
}
