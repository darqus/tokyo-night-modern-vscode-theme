/**
 * Calm Clarity Theme - Скрипт сборки
 * Скрипт для генерации и сохранения темы "Спокойная Четкость"
 */

import * as fs from 'node:fs'
import * as path from 'node:path'
import { generateFinalThemeJSON } from '../src/theme/generator/final-theme-generator'

// Генерируем JSON темы
const themeJSON = generateFinalThemeJSON()

// Определяем путь для сохранения файла темы
const outputPath = path.join(
  __dirname,
  '..',
  'themes',
  'calm-clarity-color-theme.json'
)

// Создаем директорию, если она не существует
const outputDir = path.dirname(outputPath)
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Записываем JSON в файл
fs.writeFileSync(outputPath, themeJSON)

console.log(`Тема "Calm Clarity" успешно собрана и сохранена в ${outputPath}`)
