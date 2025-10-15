/**
 * Скрипт для валидации токенов при генерации
 * 
 * Этот скрипт запускает валидацию дизайн-токенов во время процесса генерации
 * и проверяет корректность значений токенов перед их экспортом.
 */

import { tokenValidation } from '../src/theme/token-validation'
import { cssGenerator } from '../src/theme/token-utils'
import { writeFileSync } from 'fs'
import { join } from 'path'

// Запускаем валидацию всех токенов
const validationResults = tokenValidation.runAllValidations()

console.log('🔍 Token Validation Results')
console.log('='.repeat(50))

if (validationResults.isValid) {
  console.log('✅ All tokens are valid!')
} else {
  console.log('❌ Validation errors found:')
  validationResults.errors.forEach(error => console.error(`  ❌ ${error}`))
}

if (validationResults.warnings.length > 0) {
  console.log('\n⚠️  Warnings:')
  validationResults.warnings.forEach(warning => console.warn(`  ⚠️ ${warning}`))
}

console.log('='.repeat(50))

// Создаем отчет о валидации
const validationReport = {
  timestamp: new Date().toISOString(),
  isValid: validationResults.isValid,
  errors: validationResults.errors,
  warnings: validationResults.warnings,
  summary: {
    errorCount: validationResults.errors.length,
    warningCount: validationResults.warnings.length
  }
}

const reportPath = join(__dirname, '../dist/validation-report.json')
writeFileSync(reportPath, JSON.stringify(validationReport, null, 2))

console.log(`📊 Validation report saved to: ${reportPath}`)

// Также генерируем CSS переменные только если валидация пройдена успешно
if (validationResults.isValid) {
  console.log('\n🎨 Generating CSS variables...')
  
  // Генерация CSS переменных для темной и светлой тем
 const completeCSS = cssGenerator.generateCompleteCSS()
  
  // Запись в файл
  const outputPath = join(__dirname, '../dist/theme-variables.css')
  writeFileSync(outputPath, completeCSS)
  
  console.log(`✅ CSS variables generated: ${outputPath}`)
} else {
  console.log('\n❌ Skipping CSS generation due to validation errors')
  process.exit(1) // Завершаем с ошибкой, если есть ошибки валидации
}

// Возвращаем результат для возможного использования в CI/CD
process.exit(validationResults.isValid ? 0 : 1)