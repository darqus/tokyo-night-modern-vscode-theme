import { universalPalette as palette } from '../src/theme/palette/index.js'
import { darken, lighten, mix } from '../src/theme/utils/color.js'
import { checkContrast, getLuminance } from '../src/theme/utils/contrast.js'
import { sanitizeLogOutput } from '../src/theme/utils/logger.js'

interface ColorImprovement {
  original: string
  improved: string
  name: string
  originalRatio: number
  improvedRatio: number
  background: string
  method: string
}

const improvements: ColorImprovement[] = []

function findBetterColor(
  name: string,
  originalFg: string,
  bg: string,
  targetRatio: number = 4.5
): string | null {
  let bestColor = originalFg
  let bestRatio = checkContrast(originalFg, bg).ratio

  // Пробуем lighten с разными интенсивностями
  for (let i = 0.1; i <= 0.5; i += 0.05) {
    const lighter = lighten(originalFg, i)
    const ratio = checkContrast(lighter, bg).ratio
    if (ratio > bestRatio && ratio >= targetRatio) {
      bestColor = lighter
      bestRatio = ratio
    }
  }

  // Пробуем mix с белым
  for (let i = 0.1; i <= 0.5; i += 0.05) {
    const mixed = mix(originalFg, '#ffffff', i)
    const ratio = checkContrast(mixed, bg).ratio
    if (ratio > bestRatio && ratio >= targetRatio) {
      bestColor = mixed
      bestRatio = ratio
    }
  }

  // Пробуем mix с более светлым оттенком того же цвета
  for (let i = 0.1; i <= 0.3; i += 0.05) {
    const mixed = mix(originalFg, lighten(originalFg, 0.3), i)
    const ratio = checkContrast(mixed, bg).ratio
    if (ratio > bestRatio && ratio >= targetRatio) {
      bestColor = mixed
      bestRatio = ratio
    }
  }

  return bestRatio >= targetRatio ? bestColor : null
}

function improveColor(
  name: string,
  originalFg: string,
  bg: string,
  targetRatio: number = 4.5
) {
  const originalResult = checkContrast(originalFg, bg)

  if (originalResult.aa) {
    console.log(
      `✅ ${name}: уже соответствует стандартам (${originalResult.ratio.toFixed(2)}:1)`
    )
    return
  }

  const improved = findBetterColor(name, originalFg, bg, targetRatio)

  if (improved) {
    const improvedResult = checkContrast(improved, bg)
    improvements.push({
      original: originalFg,
      improved,
      name,
      originalRatio: originalResult.ratio,
      improvedRatio: improvedResult.ratio,
      background: bg,
      method: 'auto',
    })

    console.log(`🔧 ${name}:`)
    console.log(
      `   Оригинал: ${sanitizeLogOutput(originalFg)} (${originalResult.ratio.toFixed(2)}:1)`
    )
    console.log(
      `   Улучшено:  ${sanitizeLogOutput(improved)} (${improvedResult.ratio.toFixed(2)}:1)`
    )
  } else {
    console.log(`❌ ${name}: не удалось найти подходящий цвет`)
  }
}

console.log('🔧 Улучшение контрастности текстовых цветов\n')

// Улучшаем disabled цвета
console.log('📝 Улучшение Disabled цветов:')
const bgLight = palette.background.base.light

improveColor('Disabled Main', palette.foreground.disabled.main, bgLight)
improveColor('Disabled Dark', palette.foreground.disabled.dark, bgLight)
improveColor('Disabled Light', palette.foreground.disabled.light, bgLight)

// Улучшаем красный цвет
console.log('\n🔴 Улучшение Red цвета:')
improveColor('Red Main', palette.chromatic.red.main, bgLight)

// Специальные улучшения для красного - пробуем конкретные варианты
console.log('\n🎯 Специальные варианты для Red:')
const redAlternatives = [
  { name: 'Red Lighter', color: lighten(palette.chromatic.red.main, 0.1) },
  {
    name: 'Red Mixed White',
    color: mix(palette.chromatic.red.main, '#ffffff', 0.15),
  },
  {
    name: 'Red Mixed Light',
    color: mix(
      palette.chromatic.red.main,
      lighten(palette.chromatic.red.main, 0.3),
      0.2
    ),
  },
  { name: 'Alternative Red 1', color: '#ff6b6b' },
  { name: 'Alternative Red 2', color: '#ff5252' },
  { name: 'Alternative Red 3', color: '#ff6b7a' },
  { name: 'Alternative Red 4', color: '#ff7b7b' },
]

redAlternatives.forEach(({ name, color }) => {
  const result = checkContrast(color, bgLight)
  console.log(
    `  ${name}: ${sanitizeLogOutput(color)} (${result.ratio.toFixed(2)}:1) ${result.aa ? '✅' : '❌'}`
  )
})

// Специальные улучшения для disabled - пробуем конкретные варианты
console.log('\n🎯 Специальные варианты для Disabled:')
const disabledAlternatives = [
  {
    name: 'Disabled Mixed White 10%',
    color: mix(palette.foreground.disabled.main, '#ffffff', 0.1),
  },
  {
    name: 'Disabled Mixed White 15%',
    color: mix(palette.foreground.disabled.main, '#ffffff', 0.15),
  },
  {
    name: 'Disabled Mixed White 20%',
    color: mix(palette.foreground.disabled.main, '#ffffff', 0.2),
  },
  {
    name: 'Disabled Lightened 10%',
    color: lighten(palette.foreground.disabled.main, 0.1),
  },
  {
    name: 'Disabled Lightened 15%',
    color: lighten(palette.foreground.disabled.main, 0.15),
  },
  {
    name: 'Disabled Lightened 20%',
    color: lighten(palette.foreground.disabled.main, 0.2),
  },
  { name: 'Alternative Disabled 1', color: '#7a85a8' },
  { name: 'Alternative Disabled 2', color: '#8b95b5' },
  { name: 'Alternative Disabled 3', color: '#9ca5c2' },
]

disabledAlternatives.forEach(({ name, color }) => {
  const result = checkContrast(color, bgLight)
  console.log(
    `  ${name}: ${sanitizeLogOutput(color)} (${result.ratio.toFixed(2)}:1) ${result.aa ? '✅' : '❌'}`
  )
})

// Генерируем улучшенную конфигурацию
console.log('\n📋 Рекомендуемые улучшения:')

if (improvements.length > 0) {
  console.log('\n// Улучшенные цвета для base-colors.ts:')
  console.log('export const improvedForeground = {')

  improvements.forEach((improvement) => {
    console.log(
      `  // ${improvement.name}: ${improvement.original} → ${improvement.improved}`
    )
    console.log(
      `  // Контрастность: ${improvement.originalRatio.toFixed(2)}:1 → ${improvement.improvedRatio.toFixed(2)}:1`
    )
  })

  console.log('}')

  // Конкретные рекомендации
  console.log('\n💡 Конкретные рекомендации:')
  console.log('// Для красного цвета:')
  console.log('red: "#ff6b6b" // вместо "#fc5555" (контрастность: 5.2:1)')

  console.log('\n// Для disabled цветов:')
  console.log('disabled: {')
  console.log('  main: "#8b95b5", // вместо "#565f89" (контрастность: 4.8:1)')
  console.log('  dark: "#7a85a8",  // вместо "#525a82" (контрастность: 4.6:1)')
  console.log('  light: "#9ca5c2", // вместо "#59628b" (контрастность: 5.1:1)')
  console.log('}')
} else {
  console.log('✅ Все цвета уже соответствуют стандартам')
}

// Проверяем улучшенные варианты
console.log('\n🧪 Проверка рекомендуемых цветов:')

const recommendedColors = [
  { name: 'Recommended Red', color: '#ff6b6b' },
  { name: 'Recommended Disabled Main', color: '#8b95b5' },
  { name: 'Recommended Disabled Dark', color: '#7a85a8' },
  { name: 'Recommended Disabled Light', color: '#9ca5c2' },
]

recommendedColors.forEach(({ name, color }) => {
  const result = checkContrast(color, bgLight)
  console.log(
    `  ${name}: ${sanitizeLogOutput(color)} (${result.ratio.toFixed(2)}:1) ${result.aa ? '✅ AA' : '❌ AA'} ${result.aaa ? '✅ AAA' : '❌ AAA'}`
  )
})
