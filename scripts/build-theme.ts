/**
 * Calm Clarity и Tokyo Night Темы - Скрипт сборки
 * Скрипт для генерации и сохранения тем "Спокойная Четкость" и "Tokyo Night"
 */

import * as fs from 'node:fs'
import * as path from 'node:path'
import { generateFinalThemeJSON } from '../src/theme/generator/final-theme-generator'

import { validatePaletteContrastOnBuild } from '../src/theme/validation/contrast-validation'

// Проверяем контрастность палитры перед сборкой
validatePaletteContrastOnBuild()

// Функция для создания директории, если она не существует
const ensureDirectoryExists = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// Генерируем JSON темы Tokyo Night
const tokyoNightThemeJSON = generateFinalThemeJSON()

// Определяем путь для сохранения файла темы Tokyo Night
const tokyoNightOutputPath = path.join(
  __dirname,
  '..',
  'themes',
  'tokyo-night-color-theme.json'
)

// Создаем директорию для темы Tokyo Night, если она не существует
const tokyoNightOutputDir = path.dirname(tokyoNightOutputPath)
ensureDirectoryExists(tokyoNightOutputDir)

// Записываем JSON темы Tokyo Night в файл
fs.writeFileSync(tokyoNightOutputPath, tokyoNightThemeJSON)

console.log(
  `Тема "Tokyo Night" успешно собрана и сохранена в ${tokyoNightOutputPath}`
)