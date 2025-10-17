/**
 * Скрипт для синхронизации дизайн-токенов между различными форматами
 *
 * Этот скрипт проверяет синхронизацию между исходными дизайн-токенами
 * и их экспортированными версиями в различных форматах.
 */

import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { lightThemeTokens, tokens } from '../src/theme/design-tokens'
import { tokenConverter } from '../src/theme/token-utils'
import { tokenValidation } from '../src/theme/token-validation'

interface ValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

// Функция для проверки синхронизации токенов
function checkTokenSynchronization(): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Получаем плоские версии токенов
  const sourceDarkTokens = tokenConverter.flattenTokens(tokens)
  const sourceLightTokens = tokenConverter.flattenTokens(lightThemeTokens)

  try {
    // Проверяем наличие экспортированных токенов
    const exportedDarkPath = join(__dirname, '../dist/tokens-dark.json')
    const exportedLightPath = join(__dirname, '../dist/tokens-light.json')

    const exportedDarkTokens = JSON.parse(
      readFileSync(exportedDarkPath, 'utf8')
    )
    const exportedLightTokens = JSON.parse(
      readFileSync(exportedLightPath, 'utf8')
    )

    // Проверяем, что все исходные токены присутствуют в экспортированных
    for (const [path, value] of Object.entries(sourceDarkTokens)) {
      if (!(path in exportedDarkTokens)) {
        errors.push(`Dark theme token missing in exported file: ${path}`)
      } else if (exportedDarkTokens[path] !== value) {
        errors.push(
          `Dark theme token value mismatch for ${path}: source="${value}", exported="${exportedDarkTokens[path]}"`
        )
      }
    }

    for (const [path, value] of Object.entries(sourceLightTokens)) {
      if (!(path in exportedLightTokens)) {
        errors.push(`Light theme token missing in exported file: ${path}`)
      } else if (exportedLightTokens[path] !== value) {
        errors.push(
          `Light theme token value mismatch for ${path}: source="${value}", exported="${exportedLightTokens[path]}"`
        )
      }
    }

    // Проверяем, что в экспортированных токенах нет лишних токенов
    for (const path of Object.keys(exportedDarkTokens)) {
      if (!(path in sourceDarkTokens)) {
        warnings.push(`Extra token in exported dark theme: ${path}`)
      }
    }

    for (const path of Object.keys(exportedLightTokens)) {
      if (!(path in sourceLightTokens)) {
        warnings.push(`Extra token in exported light theme: ${path}`)
      }
    }
  } catch (e) {
    errors.push(`Error reading exported token files: ${(e as Error).message}`)
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

// Проверка структурной согласованности между темами
function checkStructureConsistency(): ValidationResult {
  return tokenValidation.validateStructureConsistency()
}

// Основная функция синхронизации
function syncTokens(): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Проверяем синхронизацию
  const syncResult = checkTokenSynchronization()
  errors.push(...syncResult.errors)
  warnings.push(...syncResult.warnings)

  // Проверяем структурную согласованность
  const structureResult = checkStructureConsistency()
  errors.push(...structureResult.errors)
  warnings.push(...structureResult.warnings)

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  }
}

// Выполняем синхронизацию
const syncResult = syncTokens()

console.log('🔄 Token Synchronization Check')
console.log('='.repeat(50))

if (syncResult.isValid) {
  console.log('✅ All tokens are synchronized!')
} else {
  console.log('❌ Synchronization issues found:')
  syncResult.errors.forEach((error) => {
    console.error(`  ❌ ${error}`)
  })
}

if (syncResult.warnings.length > 0) {
  console.log('\n⚠️ Warnings:')
  syncResult.warnings.forEach((warning) => {
    console.warn(`  ⚠️ ${warning}`)
  })
}

console.log('='.repeat(50))

// Также выполним общую валидацию токенов
const validationResults = tokenValidation.runAllValidations()
if (!validationResults.isValid) {
  console.log('\n🔍 Additional validation issues:')
  validationResults.errors.forEach((error) => {
    console.error(`  ❌ ${error}`)
  })
  validationResults.warnings.forEach((warning) => {
    console.warn(`  ⚠️ ${warning}`)
  })
}

// Возвращаем результат для возможного использования в CI/CD
process.exit(syncResult.isValid && validationResults.isValid ? 0 : 1)
