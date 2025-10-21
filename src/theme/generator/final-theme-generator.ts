/**
 * Tokyo Night Theme - Генератор финальной темы
 * Создание готового JSON-файла темы "Tokyo Night"
 */

import { generateTokyoNightTheme } from './tokyo-night-generators'

/**
 * Генерация финального JSON-представления темы
 */
export const generateFinalThemeJSON = (): string => {
  const theme = generateTokyoNightTheme()

  return JSON.stringify(theme, null, 2)
}

/**
 * Генерация финальной темы как объекта
 */
export const generateFinalThemeObject = () => generateTokyoNightTheme()
