import { generateSemanticTokenColors as generateExpandedSemanticTokenColors } from './semantic/index'

// Сохраняем обратную совместимость с текущей реализацией
export function generateSemanticTokenColors() {
  return generateExpandedSemanticTokenColors()
}

// Экспортируем расширенную функцию для прямого использования
export { generateExpandedSemanticTokenColors }
