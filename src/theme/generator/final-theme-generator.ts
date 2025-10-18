/**
 * Calm Clarity Theme - Генератор финальной темы
 * Создание готового JSON-файла темы "Спокойная Четкость"
 */

import { getContrastReport } from '../validation/contrast-validation'
import { generateCalmClarityTheme } from './calm-clarity-theme'

/**
 * Генерация финального JSON-представления темы
 */
export function generateFinalThemeJSON(): string {
  const theme = generateCalmClarityTheme()

  // Добавим метаданные к теме
  const finalTheme = {
    ...theme,
    // Добавим метаданные
    _metadata: {
      name: 'Calm Clarity',
      version: '1.0.0',
      description:
        'Темная тема с приглушенной, но не блеклой цветовой палитрой, спроектированная с акцентом на эргономику, читаемость и долгосрочный комфорт, минимизируя зрительное напряжение.',
      author: 'Calm Clarity Theme Generator',
      date: new Date().toISOString(),
      contrastValidation: getContrastReport(),
    },
  }

  return JSON.stringify(finalTheme, null, 2)
}

/**
 * Генерация финальной темы как объекта
 */
export function generateFinalThemeObject() {
  const theme = generateCalmClarityTheme()

  // Добавим метаданные к теме
  return {
    ...theme,
    // Добавим метаданные
    _metadata: {
      name: 'Calm Clarity',
      version: '1.0.0',
      description:
        'Темная тема с приглушенной, но не блеклой цветовой палитрой, спроектированная с акцентом на эргономику, читаемость и долгосрочный комфорт, минимизируя зрительное напряжение.',
      author: 'Calm Clarity Theme Generator',
      date: new Date().toISOString(),
      contrastValidation: getContrastReport(),
    },
  }
}
