import { universalPalette as basePalette } from '../src/theme/palette/universal-generated.js'
import { getLuminance } from '../src/theme/utils/contrast.js'

// interface ColorVariant {
//   dark: string
//   main: string
//   light: string
//   bright: string
// }

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

  // Анализируем background
  for (const [bgName, bgValues] of Object.entries(basePalette.background)) {
    analysis[`background.${bgName}`] = {
      dark: {
        hex: bgValues.dark,
        luminance: getLuminance(bgValues.dark),
      },
      main: {
        hex: bgValues.main,
        luminance: getLuminance(bgValues.main),
      },
      light: {
        hex: bgValues.light,
        luminance: getLuminance(bgValues.light),
      },
      bright: {
        hex: bgValues.bright,
        luminance: getLuminance(bgValues.bright),
      },
    }
  }

  // Анализируем foreground
  for (const [fgName, fgValues] of Object.entries(basePalette.foreground)) {
    analysis[`foreground.${fgName}`] = {
      dark: {
        hex: fgValues.dark,
        luminance: getLuminance(fgValues.dark),
      },
      main: {
        hex: fgValues.main,
        luminance: getLuminance(fgValues.main),
      },
      light: {
        hex: fgValues.light,
        luminance: getLuminance(fgValues.light),
      },
      bright: {
        hex: fgValues.bright,
        luminance: getLuminance(fgValues.bright),
      },
    }
  }

  // Анализируем semantic
  for (const [semanticName, semanticValues] of Object.entries(
    basePalette.semantic
  )) {
    analysis[`semantic.${semanticName}`] = {
      dark: {
        hex: semanticValues.dark,
        luminance: getLuminance(semanticValues.dark),
      },
      main: {
        hex: semanticValues.main,
        luminance: getLuminance(semanticValues.main),
      },
      light: {
        hex: semanticValues.light,
        luminance: getLuminance(semanticValues.light),
      },
      bright: {
        hex: semanticValues.bright,
        luminance: getLuminance(semanticValues.bright),
      },
    }
  }

  // Анализируем chromatic
  for (const [chromaticName, chromaticValues] of Object.entries(
    basePalette.chromatic
  )) {
    analysis[`chromatic.${chromaticName}`] = {
      dark: {
        hex: chromaticValues.dark,
        luminance: getLuminance(chromaticValues.dark),
      },
      main: {
        hex: chromaticValues.main,
        luminance: getLuminance(chromaticValues.main),
      },
      light: {
        hex: chromaticValues.light,
        luminance: getLuminance(chromaticValues.light),
      },
      bright: {
        hex: chromaticValues.bright,
        luminance: getLuminance(chromaticValues.bright),
      },
    }
  }

  // Анализируем ui
  for (const [uiName, uiValue] of Object.entries(basePalette.ui)) {
    if (typeof uiValue === 'string') {
      // Пропускаем простые строковые значения
      continue
    }
    analysis[`ui.${uiName}`] = {
      dark: {
        hex: uiValue.dark,
        luminance: getLuminance(uiValue.dark),
      },
      main: {
        hex: uiValue.main,
        luminance: getLuminance(uiValue.main),
      },
      light: {
        hex: uiValue.light,
        luminance: getLuminance(uiValue.light),
      },
      bright: {
        hex: uiValue.bright,
        luminance: getLuminance(uiValue.bright),
      },
    }
  }

  // Анализируем shadow
  analysis.shadow = {
    dark: {
      hex: basePalette.shadow.dark,
      luminance: getLuminance(basePalette.shadow.dark),
    },
    main: {
      hex: basePalette.shadow.main,
      luminance: getLuminance(basePalette.shadow.main),
    },
    light: {
      hex: basePalette.shadow.light,
      luminance: getLuminance(basePalette.shadow.light),
    },
    bright: {
      hex: basePalette.shadow.bright,
      luminance: getLuminance(basePalette.shadow.bright),
    },
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
