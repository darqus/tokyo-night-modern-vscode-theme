import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { generateTheme } from '../src/theme'
import {
  validateCriticalContrast,
  validateTheme,
} from '../src/theme/utils/validation'

function buildTheme() {
  console.log('🎨 Generating Tokyo Night theme...')

  const theme = generateTheme()

  // Валидация темы
  console.log('🔍 Validating theme...')
  const validation = validateTheme(theme)
  const contrastValidation = validateCriticalContrast(theme)

  if (!validation.valid) {
    console.error('❌ Theme validation failed:')
    validation.errors.forEach((error) => {
      console.error(`   ✗ ${error}`)
    })
    process.exit(1)
  }

  if (validation.warnings.length > 0) {
    console.log('⚠️  Validation warnings:')
    validation.warnings.forEach((warning) => {
      console.warn(`   ⚠ ${warning}`)
    })
  }

  if (!contrastValidation.valid) {
    console.error('❌ Contrast validation failed:')
    contrastValidation.errors.forEach((error) => {
      console.error(`   ✗ ${error}`)
    })
    process.exit(1)
  }

  if (contrastValidation.warnings.length > 0) {
    console.log('⚠️  Contrast warnings:')
    contrastValidation.warnings.forEach((warning) => {
      console.warn(`   ⚠ ${warning}`)
    })
  }

  const outputPath = join(__dirname, '../themes/tokyo-night-color-theme.json')

  writeFileSync(outputPath, JSON.stringify(theme, null, 2))

  console.log('✅ Theme generated successfully!')
  console.log(`📁 Output: ${outputPath}`)
  console.log(`📊 Stats:`)
  console.log(`   - UI Colors: ${Object.keys(theme.colors).length}`)
  console.log(`   - Token Rules: ${theme.tokenColors.length}`)
  console.log(
    `   - Semantic Tokens: ${Object.keys(theme.semanticTokenColors).length}`
  )
}

buildTheme()
