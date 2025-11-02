import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { generateTheme } from '../src/theme'
import { sanitizeLogOutput } from '../src/theme/utils/logger'
import {
  validateCriticalContrast,
  validateTheme,
} from '../src/theme/utils/validation'

function buildTheme(): void {
  try {
    console.log('Generating Tokyo Night theme...')

    const theme = generateTheme()

    console.log('Validating theme...')
    const validation = validateTheme(theme)
    let contrastValidation: ReturnType<typeof validateCriticalContrast>
    try {
      contrastValidation = validateCriticalContrast(theme)
    } catch (validationError) {
      console.error('Failed to validate contrast:')
      console.error(
        sanitizeLogOutput(
          validationError instanceof Error
            ? validationError.message
            : String(validationError)
        )
      )
      process.exit(1)
    }

    if (!validation.valid) {
      console.error('Theme validation failed')
      validation.errors.forEach((error) => {
        console.error(sanitizeLogOutput(error))
      })
      process.exit(1)
    }

    if (validation.warnings.length > 0) {
      console.log('Validation warnings:')
      validation.warnings.forEach((warning) => {
        console.warn(sanitizeLogOutput(warning))
      })
    }

    if (!contrastValidation.valid) {
      console.error('Contrast validation failed')
      contrastValidation.errors.forEach((error) => {
        console.error(sanitizeLogOutput(error))
      })
      process.exit(1)
    }

    if (contrastValidation.warnings.length > 0) {
      console.log('Contrast warnings:')
      contrastValidation.warnings.forEach((warning) => {
        console.warn(sanitizeLogOutput(warning))
      })
    }

    const outputPath = join(
      __dirname,
      '../themes/tokyo-modern-color-theme.json'
    )

    try {
      writeFileSync(outputPath, JSON.stringify(theme, null, 2))
    } catch (writeError) {
      console.error('Failed to write theme file:')
      console.error(
        sanitizeLogOutput(
          writeError instanceof Error ? writeError.message : String(writeError)
        )
      )
      process.exit(1)
    }

    console.log('Theme generated successfully!')
    console.log('Output:', sanitizeLogOutput(outputPath))
    console.log('Stats:')
    console.log('   - UI Colors:', Object.keys(theme.colors).length)
    console.log('   - Token Rules:', theme.tokenColors.length)
    console.log(
      '   - Semantic Tokens:',
      Object.keys(theme.semanticTokenColors).length
    )
  } catch (error) {
    console.error('Theme build failed:')
    console.error(
      sanitizeLogOutput(error instanceof Error ? error.message : String(error))
    )
    process.exit(1)
  }
}

buildTheme()
