/**
 * Палитра подсветки синтаксиса
 * Прямой маппинг токенов на базовые цвета
 */
import { basePalette } from './palette'
import { mix } from './utils'
import type { SyntaxPalette } from '../types/theme'

export const syntaxPalette: SyntaxPalette = {
  // Основные токены
  keyword: basePalette.magenta,      // Ключевые слова (const, function, class)
  string: basePalette.green,         // Строки
  number: basePalette.orange,        // Числа
  comment: basePalette.gray,         // Комментарии
  
  // Идентификаторы
  variable: basePalette.cyan,        // Переменные
  function: basePalette.blue,        // Функции и методы
  class: basePalette.yellow,         // Классы и типы
  type: basePalette.teal,           // Типы данных
  
  // Операторы и пунктуация
  operator: basePalette.purple,      // Операторы (+, -, =, &&)
  punctuation: basePalette.white,    // Скобки, точки, запятые
  
  // Специальные
  constant: basePalette.orange,      // Константы (true, false, null)
  property: basePalette.cyan,        // Свойства объектов
  tag: basePalette.red,             // HTML теги
  attribute: basePalette.magenta,    // HTML атрибуты
  
  // Состояния
  invalid: basePalette.red,          // Ошибки в коде
  deprecated: mix(basePalette.white, basePalette.gray, 0.7), // Устаревший код
}