/**
 * Calm Clarity и Tokyo Night Темы - Скрипт сборки
 * Скрипт для генерации и сохранения тем "Спокойная Четкость" и "Tokyo Night"
 */

import * as fs from 'node:fs'
import * as path from 'node:path'
import { generateFinalThemeJSON, generateFinalThemeObject } from '../src/theme/generator/final-theme-generator'
import { generateNestedTheme } from '../src/theme/generator/nested-theme-generator'

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

// Генерируем объект старой темы для сравнения
const oldTheme = generateFinalThemeObject()

// Генерируем объект новой темы
const newTheme = generateNestedTheme()

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

// Сравнение секции colors между старым и новым генераторами
const oldColors = oldTheme.colors || {}
const newColors = newTheme.colors || {}

console.log('\n=== Сравнение секции colors ===')

// Ключи и значения цветов, которые есть в новом объекте, но отсутствуют в старом
const newKeys = Object.keys(newColors).filter(key => !(key in oldColors))
if (newKeys.length > 0) {
  console.log('\nНовые ключи в новом генераторе:')
  newKeys.forEach(key => {
    console.log(`  ${key}: ${newColors[key]}`)
  })
} else {
  console.log('\nНет новых ключей в новом генераторе.')
}

// Ключи, для которых значения цветов в старом и новом объектах не совпадают
const differingKeys = Object.keys(newColors).filter(key => key in oldColors && oldColors[key] !== newColors[key])
if (differingKeys.length > 0) {
  console.log('\nКлючи с отличающимися значениями:')
  differingKeys.forEach(key => {
    console.log(`  ${key}:`)
    console.log(`    Старое: ${oldColors[key]}`)
    console.log(`    Новое:  ${newColors[key]}`)
  })
} else {
  console.log('\nНет отличий в значениях цветов.')
}