/**
 * Скрипт для генерации CSS Custom Properties из дизайн-токенов
 * 
 * Этот скрипт преобразует дизайн-токены в формат CSS Custom Properties,
 * который может использоваться в веб-приложениях для темизации.
 */

import { cssGenerator } from '../src/theme/token-utils'
import { writeFileSync } from 'fs'
import { join } from 'path'

// Генерация CSS переменных для темной и светлой тем
const completeCSS = cssGenerator.generateCompleteCSS()

// Запись в файл
const outputPath = join(__dirname, '../dist/theme-variables.css')
writeFileSync(outputPath, completeCSS)

console.log('🎨 CSS Custom Properties Generated!')
console.log('='.repeat(50))
console.log(`📁 Output: ${outputPath}`)
console.log(`💡 Generated both dark and light theme variables`)
console.log(`✅ CSS variables format: --tokyo-night-[path]: [value]`)
console.log('='.repeat(50))

// Также создадим отдельные файлы для каждой темы
const darkCSS = cssGenerator.generateDarkThemeCSS()
const darkOutputPath = join(__dirname, '../dist/theme-variables-dark.css')
writeFileSync(darkOutputPath, darkCSS)

const lightCSS = cssGenerator.generateLightThemeCSS()
const lightOutputPath = join(__dirname, '../dist/theme-variables-light.css')
writeFileSync(lightOutputPath, lightCSS)

console.log(`📁 Dark theme CSS: ${darkOutputPath}`)
console.log(`📁 Light theme CSS: ${lightOutputPath}`)