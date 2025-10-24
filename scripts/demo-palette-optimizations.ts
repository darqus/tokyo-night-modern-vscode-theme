import { generateThemeFromPalette } from '../src/theme/generator/theme-factory'
import { generateThemeVariants } from '../src/theme/generator/variants'
import { palette } from '../src/theme/palette'
import {
  adjustHue,
  darken,
  getAnalogous,
  getComplementary,
  getTriadic,
  hexToRgb,
  lighten,
} from '../src/theme/utils/color'
import { getContrastRatio, getLuminance } from '../src/theme/utils/contrast'
import {
  createAccentPalette,
  createAdaptivePalette,
  getPaletteStats,
  optimizeForColorBlindness,
  optimizePaletteForAccessibility,
  validatePaletteAccessibility,
} from '../src/theme/utils/palette-utils'

console.log('🎨 Tokyo Night Modern - Palette Optimization Demo\n')

// 1. Базовая статистика палитры
console.log('📊 Base Palette Statistics:')
const baseStats = getPaletteStats(palette)
console.log(`   Total colors: ${baseStats.totalColors}`)
console.log(`   Unique colors: ${baseStats.uniqueColors}`)
console.log(`   Contrast violations: ${baseStats.contrastViolations}`)
console.log(`   Accessibility score: ${baseStats.accessibilityScore}%`)

// 2. Валидация доступности
console.log('\n🔍 Accessibility Validation:')
const validation = validatePaletteAccessibility(palette)
console.log(`   Valid: ${validation.isValid ? '✅' : '❌'}`)
if (validation.violations.length > 0) {
  console.log('   Violations:')
  validation.violations.forEach((violation, index) => {
    console.log(`     ${index + 1}. ${violation.element}`)
    console.log(
      `        Contrast: ${violation.contrastRatio.toFixed(2)} (required: ${violation.requiredRatio})`
    )
  })
}

// 3. Оптимизированная палитра
console.log('\n✨ Optimized Palette:')
const optimizedPalette = optimizePaletteForAccessibility(palette)
const optimizedStats = getPaletteStats(optimizedPalette)
const optimizedValidation = validatePaletteAccessibility(optimizedPalette)
console.log(`   Valid: ${optimizedValidation.isValid ? '✅' : '❌'}`)
console.log(`   Accessibility score: ${optimizedStats.accessibilityScore}%`)

// 4. Адаптивные палитры
console.log('\n🌅 Adaptive Palettes:')
const dayPalette = createAdaptivePalette(palette, 'day')
const nightPalette = createAdaptivePalette(palette, 'night')

console.log(
  `   Day brightness: ${getLuminance({ r: 255, g: 255, b: 255 }).toFixed(2)}`
)
console.log(
  `   Night brightness: ${getLuminance({ r: 0, g: 0, b: 0 }).toFixed(2)}`
)
console.log(
  `   Editor luminance (day): ${getLuminance(hexToRgb(dayPalette.bg.editor)).toFixed(2)}`
)
console.log(
  `   Editor luminance (night): ${getLuminance(hexToRgb(nightPalette.bg.editor)).toFixed(2)}`
)

// 5. Акцентные палитры
console.log('\n🎯 Accent Palettes:')
const redAccent = createAccentPalette(palette, '#ff0000', 'red')
const blueAccent = createAccentPalette(palette, '#0066cc', 'blue')
const greenAccent = createAccentPalette(palette, '#00aa00', 'green')

console.log(`   Red accent primary: ${redAccent.blue.primary}`)
console.log(`   Blue accent primary: ${blueAccent.blue.primary}`)
console.log(`   Green accent primary: ${greenAccent.blue.primary}`)

// 6. Оптимизация для цветовой слепоты
console.log('\n👁️ Color Blindness Optimization:')
const colorBlindOptimized = optimizeForColorBlindness(palette)
console.log(
  `   Red main: ${palette.red.main} → ${colorBlindOptimized.red.main}`
)
console.log(
  `   Green main: ${palette.green.main} → ${colorBlindOptimized.green.main}`
)
console.log(
  `   Blue primary: ${palette.blue.primary} → ${colorBlindOptimized.blue.primary}`
)

// 7. Варианты тем
console.log('\n🎭 Theme Variants:')
const variants = generateThemeVariants()
Object.keys(variants).forEach((variant) => {
  const theme = variants[variant as keyof typeof variants]
  console.log(
    `   ${variant}: ${theme.name || 'Tokyo Night'} (${Object.keys(theme.colors || {}).length} colors)`
  )
})

// 8. Цветовые утилиты
console.log('\n🛠️ Color Utilities Demo:')
const baseColor = '#7aa2f7'
console.log(`   Base color: ${baseColor}`)
console.log(`   Lightened: ${lighten(baseColor, 0.3)}`)
console.log(`   Darkened: ${darken(baseColor, 0.3)}`)
console.log(`   Hue adjusted: ${adjustHue(baseColor, 90)}`)
console.log(`   Complementary: ${getComplementary(baseColor)}`)

const analogous = getAnalogous(baseColor)
console.log(
  `   Analogous: ${analogous.left} ← ${baseColor} → ${analogous.right}`
)

const triadic = getTriadic(baseColor)
console.log(
  `   Triadic: ${triadic.color1}, ${triadic.color2}, ${triadic.color3}`
)

// 9. Контрастные примеры
console.log('\n📐 Contrast Examples:')
const contrastExamples = [
  { fg: palette.fg.brightest, bg: palette.bg.darkest },
  { fg: palette.fg.medium, bg: palette.bg.editor },
  { fg: palette.ui.badgeForeground, bg: palette.bg.light },
  { fg: palette.special.disabled, bg: palette.bg.editor },
]

contrastExamples.forEach((example, index) => {
  const ratio = getContrastRatio(example.fg, example.bg)
  const wcag = ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'Fail'
  console.log(`   ${index + 1}. ${example.fg} on ${example.bg}`)
  console.log(`      Ratio: ${ratio.toFixed(2)} (${wcag})`)
})

// 10. Генерация тем
console.log('\n⚡ Theme Generation Performance:')
const startTime = performance.now()

const standardTheme = generateThemeFromPalette(palette, 'Tokyo Night Standard')
const optimizedTheme = generateThemeFromPalette(
  optimizedPalette,
  'Tokyo Night Optimized'
)
const brightTheme = generateThemeFromPalette(dayPalette, 'Tokyo Night Bright')

const endTime = performance.now()
const generationTime = endTime - startTime

console.log(
  `   Standard theme: ${Object.keys(standardTheme.colors).length} colors, ${standardTheme.tokenColors.length} tokens`
)
console.log(
  `   Optimized theme: ${Object.keys(optimizedTheme.colors).length} colors, ${optimizedTheme.tokenColors.length} tokens`
)
console.log(
  `   Bright theme: ${Object.keys(brightTheme.colors).length} colors, ${brightTheme.tokenColors.length} tokens`
)
console.log(`   Generation time: ${generationTime.toFixed(2)}ms`)

console.log(
  '\n🎉 Demo completed! Check the generated themes and optimizations.'
)
