#!/usr/bin/env ts-node

/**
 * Migration script for color references
 * Скрипт для миграции ссылок на цвета к новой семантической структуре
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import { palette as newPalette } from '../src/theme/palette/index'

interface ColorMapping {
  oldColor: string
  newColor: string
  reason: string
}

interface MigrationResult {
  file: string
  changes: number
  mappings: ColorMapping[]
}

class ColorMigrator {
  private mappings: Record<string, string> = {}
  private results: MigrationResult[] = []

  constructor() {
    this.initializeMappings()
  }

  /**
   * Initialize color mappings from analysis
   */
  private initializeMappings(): void {
    // Based on the analysis report, create mappings for duplicate colors
    this.mappings = {
      // Duplicate colors - keep the first one, map others to it
      blueLight: 'cyan', // blueLight and cyan are identical
      pink: 'purple', // pink and purple are identical

      // Map to semantic colors
      blue: 'primary',
      purple: 'secondary',
      green: 'success',
      yellow: 'warning',
      red: 'error',
      cyan: 'info',

      // Map to UI colors
      background: 'backgrounds.primary',
      backgroundAlt: 'backgrounds.secondary',
      backgroundAlt2: 'backgrounds.tertiary',
      backgroundAlt3: 'backgrounds.elevated',

      foreground: 'text.primary',
      foregroundAlt: 'text.secondary',
      foregroundAlt2: 'text.tertiary',
      foregroundAlt3: 'text.disabled',

      border: 'borders.default',
      borderAlt: 'borders.subtle',
      borderFocus: 'borders.focus',

      // Map to syntax colors
      function: 'function',
      keyword: 'keyword',
      string: 'string',
      comment: 'comment',
      variable: 'variable',
      type: 'type',
      class: 'class',
    }
  }

  /**
   * Migrate all files in the theme directory
   */
  public migrateThemeFiles(): void {
    console.log('🔄 Начинаем миграцию цветовых ссылок...')

    const themeDir = join(__dirname, '../src/theme')
    this.migrateDirectory(themeDir)

    this.printResults()
    this.saveMigrationReport()
  }

  /**
   * Migrate a directory recursively
   */
  private migrateDirectory(dirPath: string): void {
    const items = readdirSync(dirPath)

    for (const item of items) {
      const itemPath = join(dirPath, item)
      const stat = statSync(itemPath)

      if (stat.isDirectory() && !item.includes('backup')) {
        this.migrateDirectory(itemPath)
      } else if (stat.isFile() && item.endsWith('.ts')) {
        this.migrateFile(itemPath)
      }
    }
  }

  /**
   * Migrate a single file
   */
  private migrateFile(filePath: string): void {
    try {
      const content = readFileSync(filePath, 'utf-8')
      const originalContent = content

      let changes = 0
      const mappings: ColorMapping[] = []

      // Apply mappings
      for (const [oldColor, newColor] of Object.entries(this.mappings)) {
        const regex = new RegExp(`\\b${oldColor}\\b`, 'g')
        const matches = content.match(regex)

        if (matches) {
          content.replace(regex, newColor)
          changes += matches.length
          mappings.push({
            oldColor,
            newColor,
            reason: `Migrated to semantic color`,
          })
        }
      }

      // Write back if changes were made
      if (changes > 0) {
        writeFileSync(filePath, content, 'utf-8')
        this.results.push({
          file: filePath,
          changes,
          mappings,
        })
        console.log(`✅ ${filePath}: ${changes} изменений`)
      }
    } catch (error) {
      console.error(`❌ Ошибка при обработке ${filePath}:`, error)
    }
  }

  /**
   * Print migration results
   */
  private printResults(): void {
    console.log('\n📊 РЕЗУЛЬТАТЫ МИГРАЦИИ')
    console.log('='.repeat(50))

    const totalFiles = this.results.length
    const totalChanges = this.results.reduce(
      (sum, result) => sum + result.changes,
      0
    )

    console.log(`\n📈 Статистика:`)
    console.log(`   Обработано файлов: ${totalFiles}`)
    console.log(`   Всего изменений: ${totalChanges}`)

    if (totalFiles > 0) {
      console.log(`\n📝 Детали по файлам:`)
      this.results.forEach((result, index) => {
        console.log(`   ${index + 1}. ${result.file}`)
        console.log(`      Изменений: ${result.changes}`)
        result.mappings.forEach((mapping) => {
          console.log(`      ${mapping.oldColor} → ${mapping.newColor}`)
        })
      })
    }
  }

  /**
   * Save migration report
   */
  private saveMigrationReport(): void {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.results.length,
        totalChanges: this.results.reduce(
          (sum, result) => sum + result.changes,
          0
        ),
      },
      mappings: this.mappings,
      results: this.results,
    }

    const reportPath = join(__dirname, '../docs/migration-report.json')
    writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8')
    console.log(`\n💾 Отчет о миграции сохранен в: ${reportPath}`)
  }

  /**
   * Validate migration results
   */
  public validateMigration(): boolean {
    console.log('\n🔍 Валидация результатов миграции...')

    let isValid = true

    // Check that all mapped colors exist in new palette
    for (const [oldColor, newColor] of Object.entries(this.mappings)) {
      if (!this.colorExistsInNewPalette(newColor)) {
        console.error(`❌ Цвет ${newColor} не найден в новой палитре`)
        isValid = false
      }
    }

    if (isValid) {
      console.log('✅ Все мигрированные цвета найдены в новой палитре')
    }

    return isValid
  }

  /**
   * Check if color exists in new palette
   */
  private colorExistsInNewPalette(colorName: string): boolean {
    // Handle nested properties like 'backgrounds.primary'
    if (colorName.includes('.')) {
      const [parent, child] = colorName.split('.')
      return newPalette[parent] && newPalette[parent][child]
    }

    return newPalette[colorName] !== undefined
  }
}

// Main execution
function main() {
  try {
    const migrator = new ColorMigrator()

    // Run migration
    migrator.migrateThemeFiles()

    // Validate results
    const isValid = migrator.validateMigration()

    if (isValid) {
      console.log('\n✅ Миграция завершена успешно!')
    } else {
      console.log('\n⚠️ Миграция завершена с предупреждениями')
      process.exit(1)
    }
  } catch (error) {
    console.error('❌ Ошибка при миграции:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

export { ColorMigrator }
