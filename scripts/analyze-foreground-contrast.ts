import { universalPalette as palette } from '../src/theme/palette/index.js'
import { checkContrast, getLuminance } from '../src/theme/utils/contrast.js'
import { sanitizeLogOutput } from '../src/theme/utils/logger.js'

interface ContrastIssue {
  name: string
  fg: string
  bg: string
  ratio: number
  aa: boolean
  aaa: boolean
  context: string
}

interface ColorAnalysis {
  color: string
  name: string
  luminance: number
  contrastWithBackground: { [key: string]: number }
}

const issues: ContrastIssue[] = []
const analysis: ColorAnalysis[] = []
let totalChecks = 0

function check(name: string, fg: string, bg: string, context: string = '') {
  totalChecks++
  const result = checkContrast(fg, bg)
  if (!result.aa) {
    issues.push({ name, fg, bg, ...result, context })
  }

  // Сохраняем анализ для каждого цвета
  const existingAnalysis = analysis.find((a) => a.color === fg)
  if (existingAnalysis) {
    existingAnalysis.contrastWithBackground[context || bg] = result.ratio
  } else {
    analysis.push({
      color: fg,
      name,
      luminance: getLuminance(fg),
      contrastWithBackground: { [context || bg]: result.ratio },
    })
  }

  return result
}

function logContrastResult(
  name: string,
  result: { ratio: number; aa: boolean; aaa: boolean },
  fg?: string,
  bg?: string
) {
  const colorInfo =
    fg && bg ? ` (${sanitizeLogOutput(fg)} on ${sanitizeLogOutput(bg)})` : ''
  const status = `${result.aa ? '✅ AA' : '❌ AA'} ${result.aaa ? '✅ AAA' : '❌ AAA'}`
  console.log(
    `  ${sanitizeLogOutput(name)}: ${result.ratio.toFixed(2)}:1 ${status}${colorInfo}`
  )
}

console.log('🔍 Анализ контрастности текстовых цветов в Tokyo Modern theme\n')

// Анализ базовых цветов текста
console.log('📝 Базовые цвета текста:')

const primaryLight = check(
  'Primary Light',
  palette.foreground.primary.light,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Primary Light', primaryLight)

const primaryMain = check(
  'Primary Main',
  palette.foreground.primary.main,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Primary Main', primaryMain)

const primaryDark = check(
  'Primary Dark',
  palette.foreground.primary.dark,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Primary Dark', primaryDark)

const secondaryLight = check(
  'Secondary Light',
  palette.foreground.secondary.light,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Secondary Light', secondaryLight)

const secondaryMain = check(
  'Secondary Main',
  palette.foreground.secondary.main,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Secondary Main', secondaryMain)

const secondaryDark = check(
  'Secondary Dark',
  palette.foreground.secondary.dark,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Secondary Dark', secondaryDark)

const mutedLight = check(
  'Muted Light',
  palette.foreground.muted.light,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Muted Light', mutedLight)

const mutedMain = check(
  'Muted Main',
  palette.foreground.muted.main,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Muted Main', mutedMain)

const mutedDark = check(
  'Muted Dark',
  palette.foreground.muted.dark,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Muted Dark', mutedDark)

const disabledLight = check(
  'Disabled Light',
  palette.foreground.disabled.light,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Disabled Light', disabledLight)

const disabledMain = check(
  'Disabled Main',
  palette.foreground.disabled.main,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Disabled Main', disabledMain)

const disabledDark = check(
  'Disabled Dark',
  palette.foreground.disabled.dark,
  palette.background.base.light,
  'light_bg'
)
logContrastResult('Disabled Dark', disabledDark)

// Анализ на разных фонах
console.log('\n🎨 Цвета на разных фонах:')

// На темном фоне
const primaryOnDark = check(
  'Primary on Dark',
  palette.foreground.primary.light,
  palette.background.base.dark,
  'dark_bg'
)
logContrastResult('Primary on Dark', primaryOnDark)

const secondaryOnDark = check(
  'Secondary on Dark',
  palette.foreground.secondary.main,
  palette.background.base.dark,
  'dark_bg'
)
logContrastResult('Secondary on Dark', secondaryOnDark)

const mutedOnDark = check(
  'Muted on Dark',
  palette.foreground.muted.main,
  palette.background.base.dark,
  'dark_bg'
)
logContrastResult('Muted on Dark', mutedOnDark)

// На elevated фоне
const primaryOnElevated = check(
  'Primary on Elevated',
  palette.foreground.primary.light,
  palette.background.elevated.light,
  'elevated_bg'
)
logContrastResult('Primary on Elevated', primaryOnElevated)

const secondaryOnElevated = check(
  'Secondary on Elevated',
  palette.foreground.secondary.main,
  palette.background.elevated.light,
  'elevated_bg'
)
logContrastResult('Secondary on Elevated', secondaryOnElevated)

// Анализ акцентных цветов как текста
console.log('\n🌈 Акцентные цвета как текст:')

const blueText = check(
  'Blue Text',
  palette.chromatic.blue.main,
  palette.background.base.light,
  'accent_text'
)
logContrastResult('Blue Text', blueText)

const redText = check(
  'Red Text',
  palette.chromatic.red.main,
  palette.background.base.light,
  'accent_text'
)
logContrastResult('Red Text', redText)

const greenText = check(
  'Green Text',
  palette.chromatic.green.main,
  palette.background.base.light,
  'accent_text'
)
logContrastResult('Green Text', greenText)

const yellowText = check(
  'Yellow Text',
  palette.chromatic.yellow.main,
  palette.background.base.light,
  'accent_text'
)
logContrastResult('Yellow Text', yellowText)

const purpleText = check(
  'Purple Text',
  palette.chromatic.purple.main,
  palette.background.base.light,
  'accent_text'
)
logContrastResult('Purple Text', purpleText)

const cyanText = check(
  'Cyan Text',
  palette.chromatic.cyan.main,
  palette.background.base.light,
  'accent_text'
)
logContrastResult('Cyan Text', cyanText)

// Анализ акцентных цветов (light варианты)
console.log('\n✨ Светлые варианты акцентных цветов:')

const blueLightText = check(
  'Blue Light Text',
  palette.chromatic.blue.light,
  palette.background.base.light,
  'accent_light'
)
logContrastResult('Blue Light Text', blueLightText)

const redLightText = check(
  'Red Light Text',
  palette.chromatic.red.light,
  palette.background.base.light,
  'accent_light'
)
logContrastResult('Red Light Text', redLightText)

const greenLightText = check(
  'Green Light Text',
  palette.chromatic.green.light,
  palette.background.base.light,
  'accent_light'
)
logContrastResult('Green Light Text', greenLightText)

const yellowLightText = check(
  'Yellow Light Text',
  palette.chromatic.yellow.light,
  palette.background.base.light,
  'accent_light'
)
logContrastResult('Yellow Light Text', yellowLightText)

const purpleLightText = check(
  'Purple Light Text',
  palette.chromatic.purple.light,
  palette.background.base.light,
  'accent_light'
)
logContrastResult('Purple Light Text', purpleLightText)

// Анализ проблемных комбинаций из UI конфигураций
console.log('\n⚠️  Потенциально проблемные UI комбинации:')

// Проверяем цвета из UI конфигураций
const buttonFg = check(
  'Button Foreground',
  palette.foreground.primary.light,
  '#2a2f4a',
  'button_bg'
) // Пример темного фона кнопки
logContrastResult('Button Foreground', buttonFg)

const badgeFg = check(
  'Badge Foreground',
  palette.foreground.primary.light,
  '#403757',
  'badge_bg'
) // Пример фона бейджа
logContrastResult('Badge Foreground', badgeFg)

const inputPlaceholder = check(
  'Input Placeholder',
  palette.foreground.primary.main,
  palette.background.base.dark,
  'input_placeholder'
)
logContrastResult('Input Placeholder', inputPlaceholder)

const disabledFg = check(
  'Disabled Foreground',
  palette.foreground.disabled.dark,
  palette.background.base.light,
  'disabled'
)
logContrastResult('Disabled Foreground', disabledFg)

// Сводка по проблемам
const compliancePercentage = Math.round(
  ((totalChecks - issues.length) / totalChecks) * 100
)

console.log('\n📋 Сводка:')
console.log(`  Всего проверено: ${totalChecks}`)
console.log(`  Проблем с AA: ${issues.length}`)
console.log(
  `  Соответствие WCAG AA: ${issues.length === 0 ? '✅' : '❌'} ${compliancePercentage}%`
)

if (issues.length > 0) {
  console.log('\n⚠️  Проблемы контрастности:')
  issues.forEach((issue) => {
    console.log(
      `  ${sanitizeLogOutput(issue.name)} (${issue.context}): ${issue.ratio.toFixed(2)}:1 (требуется ≥4.5:1)`
    )
    console.log(`    Цвет текста: ${sanitizeLogOutput(issue.fg)}`)
    console.log(`    Цвет фона: ${sanitizeLogOutput(issue.bg)}`)
  })
}

// Анализ яркости цветов
console.log('\n📊 Анализ яркости текстовых цветов:')
const sortedByLuminance = analysis
  .filter(
    (a) =>
      a.name.includes('Primary') ||
      a.name.includes('Secondary') ||
      a.name.includes('Muted') ||
      a.name.includes('Disabled')
  )
  .sort((a, b) => b.luminance - a.luminance)

sortedByLuminance.forEach((item) => {
  console.log(
    `  ${sanitizeLogOutput(item.name)}: яркость ${item.luminance.toFixed(3)} (${item.color})`
  )
})

// Рекомендации
console.log('\n💡 Рекомендации:')

if (issues.length > 0) {
  console.log('  1. Исправить цвета с недостаточной контрастностью')

  const redIssues = issues.filter((i) => i.name.includes('Red'))
  if (redIssues.length > 0) {
    console.log(
      '  2. Рассмотреть возможность использования более светлого оттенка красного (#ff6b6b или #ff5252)'
    )
  }

  const disabledIssues = issues.filter((i) => i.name.includes('Disabled'))
  if (disabledIssues.length > 0) {
    console.log('  3. Увеличить контрастность отключенных элементов')
  }
} else {
  console.log('  ✅ Все текстовые цвета соответствуют стандартам WCAG AA')
}

console.log('\n🎯 Приоритетные улучшения для лучшей читаемости:')
console.log(
  '  1. Рассмотреть увеличение контрастности акцентных красных цветов'
)
console.log(
  '  2. Проверить контрастность на различных фонах в реальных условиях использования'
)
console.log(
  '  3. Убедиться, что все цвета текста доступны при различных состояниях интерфейса'
)
