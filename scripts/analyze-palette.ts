import { basePalette } from '../src/theme/palette/base.js'
import { getLuminance } from '../src/theme/utils/contrast.js'

interface ColorVariant {
  dark: string
  main: string
  light: string
  bright: string
}

interface PaletteAnalysis {
  [key: string]: {
    dark: { hex: string; luminance: number }
    main: { hex: string; luminance: number }
    light: { hex: string; luminance: number }
    bright: { hex: string; luminance: number }
  }
}

function analyzePalette(): PaletteAnalysis {
  const analysis: PaletteAnalysis = {}

  for (const [colorName, colorValues] of Object.entries(basePalette)) {
    if (colorName === 'ui') {
      continue // Skip the ui object as it has different structure
    }

    const variant = colorValues as ColorVariant
    analysis[colorName] = {
      dark: {
        hex: variant.dark,
        luminance: getLuminance(variant.dark),
      },
      main: {
        hex: variant.main,
        luminance: getLuminance(variant.main),
      },
      light: {
        hex: variant.light,
        luminance: getLuminance(variant.light),
      },
      bright: {
        hex: variant.bright,
        luminance: getLuminance(variant.bright),
      },
    }
  }

  return analysis
}

function checkLogicalProgression(analysis: PaletteAnalysis): void {
  console.log('=== АНАЛИЗ ПРОГРЕССИИ ОТТЕНКОВ ===\n')

  let hasIssues = false

  for (const [colorName, variants] of Object.entries(analysis)) {
    const { dark, main, light, bright } = variants

    console.log(`Цвет: ${colorName}`)
    console.log(`  dark:  ${dark.hex} (яркость: ${dark.luminance.toFixed(4)})`)
    console.log(`  main: ${main.hex} (яркость: ${main.luminance.toFixed(4)})`)
    console.log(
      `  light: ${light.hex} (яркость: ${light.luminance.toFixed(4)})`
    )
    console.log(
      `  bright: ${bright.hex} (яркость: ${bright.luminance.toFixed(4)})`
    )

    // Проверяем логическую прогрессию: dark <= main <= light <= bright
    const progressionIssues: string[] = []

    if (dark.luminance > main.luminance) {
      progressionIssues.push(
        `dark (${dark.luminance.toFixed(4)}) темнее чем main (${main.luminance.toFixed(4)})`
      )
    }
    if (main.luminance > light.luminance) {
      progressionIssues.push(
        `main (${main.luminance.toFixed(4)}) темнее чем light (${light.luminance.toFixed(4)})`
      )
    }
    if (light.luminance > bright.luminance) {
      progressionIssues.push(
        `light (${light.luminance.toFixed(4)}) темнее чем bright (${bright.luminance.toFixed(4)})`
      )
    }

    if (progressionIssues.length > 0) {
      hasIssues = true
      console.log('  ❌ НЕСООТВЕТСТВИЯ:')
      for (const issue of progressionIssues) {
        console.log(`    - ${issue}`)
      }
    } else {
      console.log('  ✅ Прогрессия корректна')
    }

    console.log('')
  }

  if (!hasIssues) {
    console.log('✅ Все цвета следуют логической прогрессии темноты к светлоте')
  } else {
    console.log('❌ Обнаружены проблемы с прогрессией оттенков')
  }
}

function generateDetailedReport(analysis: PaletteAnalysis): void {
  console.log('\n=== ПОДРОБНЫЙ ОТЧЕТ ===\n')

  console.log('Структура палитры:')
  console.log('- Цвета организованы в 12 основных категорий:')
  console.log(
    '  background, foreground, blue, cyan, teal, green, purple, orange, yellow, red, pink, neutral'
  )
  console.log('- Каждый цвет имеет 4 оттенка: dark, main, light, bright')
  console.log(
    '- Прогрессия оттенков предполагает увеличение светлоты от dark к bright\n'
  )

  let totalIssues = 0
  const allIssues: {
    color: string
    issue: string
    values: Record<string, { hex: string; luminance: number }>
  }[] = []

  for (const [colorName, variants] of Object.entries(analysis)) {
    const { dark, main, light, bright } = variants
    const issues: string[] = []

    if (dark.luminance > main.luminance) {
      issues.push(`dark темнее чем main`)
      allIssues.push({
        color: colorName,
        issue: `dark темнее чем main`,
        values: {
          dark: { hex: dark.hex, luminance: dark.luminance },
          main: { hex: main.hex, luminance: main.luminance },
        },
      })
      totalIssues++
    }
    if (main.luminance > light.luminance) {
      issues.push(`main темнее чем light`)
      allIssues.push({
        color: colorName,
        issue: `main темнее чем light`,
        values: {
          main: { hex: main.hex, luminance: main.luminance },
          light: { hex: light.hex, luminance: light.luminance },
        },
      })
      totalIssues++
    }
    if (light.luminance > bright.luminance) {
      issues.push(`light темнее чем bright`)
      allIssues.push({
        color: colorName,
        issue: `light темнее чем bright`,
        values: {
          light: { hex: light.hex, luminance: light.luminance },
          bright: { hex: bright.hex, luminance: bright.luminance },
        },
      })
      totalIssues++
    }
  }

  console.log(`Обнаружено проблем: ${totalIssues}`)

  if (totalIssues > 0) {
    console.log('\nДетали проблем:')
    for (const issue of allIssues) {
      console.log(`- ${issue.color}: ${issue.issue}`)
      console.log(`  Значения:`, issue.values)
    }
  }

  // Анализ диапазона яркости
  console.log('\nАнализ диапазона яркости:')
  for (const [colorName, variants] of Object.entries(analysis)) {
    const { dark, bright } = variants
    const range = bright.luminance - dark.luminance
    console.log(
      `- ${colorName}: ${dark.luminance.toFixed(4)} → ${bright.luminance.toFixed(4)} (диапазон: ${range.toFixed(4)})`
    )
  }
}

// Основная функция
function main(): void {
  console.log('Анализ структуры палитры Tokyo Modern VSCode Theme\n')

  const analysis = analyzePalette()
  checkLogicalProgression(analysis)
  generateDetailedReport(analysis)
}

main()
