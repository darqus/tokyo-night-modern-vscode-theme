import { universalPalette as palette } from '../src/theme/palette/index.js'
import { checkContrast } from '../src/theme/utils/contrast.js'
import { sanitizeLogOutput } from '../src/theme/utils/logger.js'

console.log('🔍 Badge Contrast Analysis\n')

// Current badge colors
const badgeBg = palette.chromatic.rose.main // #ff5998 (rose)
const currentFg = palette.ui.black // #000000

console.log('Current badge configuration:')
const currentResult = checkContrast(currentFg, badgeBg)
console.log(
  `  Black text on rose background: ${currentResult.ratio}:1 ${currentResult.aa ? '✅ AA' : '❌'} ${currentResult.aaa ? '✅ AAA' : '❌'}`
)

// Test alternative text colors
const alternatives = [
  { name: 'Black', color: palette.ui.black },
  { name: 'Foreground Primary Light', color: palette.foreground.primary.light },
  { name: 'Foreground Primary Main', color: palette.foreground.primary.main },
  { name: 'Foreground Primary Dark', color: palette.foreground.primary.dark },
  { name: 'Chromatic Dark (Rose)', color: palette.chromatic.rose.dark },
  { name: 'Chromatic Dark (Red)', color: palette.chromatic.red.dark },
  { name: 'Chromatic Main (Neutral)', color: palette.chromatic.neutral.main },
]

console.log('\n🎨 Alternative text colors on badge background:')

const results = alternatives.map(({ name, color }) => {
  const result = checkContrast(color, badgeBg)
  console.log(
    `  ${name}: ${result.ratio}:1 ${result.aa ? '✅ AA' : '❌'} ${result.aaa ? '✅ AAA' : '❌'} (${sanitizeLogOutput(color)} on ${sanitizeLogOutput(badgeBg)})`
  )
  return { name, color, ...result }
})

// Find best options
const sortedResults = results.sort((a, b) => b.ratio - a.ratio)

console.log('\n🏆 Best options (sorted by contrast ratio):')
sortedResults.slice(0, 3).forEach((result, index) => {
  console.log(
    `  ${index + 1}. ${result.name}: ${result.ratio}:1 ${result.aa ? '✅ AA' : '❌'} ${result.aaa ? '✅ AAA' : '❌'}`
  )
})

// Recommendation
const best = sortedResults[0]
console.log(
  `\n💡 Recommendation: Use "${best.name}" (${sanitizeLogOutput(best.color)}) for badge text`
)
console.log(
  `   Contrast ratio: ${best.ratio}:1 ${best.aa ? '✅ AA' : '❌'} ${best.aaa ? '✅ AAA' : '❌'}`
)
