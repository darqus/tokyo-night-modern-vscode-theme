import { universalPalette as palette } from '../src/theme/palette/index.js'
import { checkContrast } from '../src/theme/utils/contrast.js'
import { sanitizeLogOutput } from '../src/theme/utils/logger.js'

interface ContrastIssue {
  name: string
  fg: string
  bg: string
  ratio: number
  aa: boolean
  aaa: boolean
}

const issues: ContrastIssue[] = []
let totalChecks = 0

function check(name: string, fg: string, bg: string) {
  totalChecks++
  const result = checkContrast(fg, bg)
  if (!result.aa) {
    issues.push({ name, fg, bg, ...result })
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
  console.log(
    `  ${sanitizeLogOutput(name)}: ${result.ratio}:1 ${result.aa ? '✅ AA' : '❌'} ${result.aaa ? '✅ AAA' : '❌'}${colorInfo}`
  )
}

console.log('🔍 Tokyo Modern theme contrast check\n')

// Main combinations
console.log('📊 Main combinations:')
const mainFg = check(
  'Main text',
  palette.foreground.primary.light,
  palette.background.base.light
)
logContrastResult('Main text', mainFg)

const dimFg = check(
  'Dim text',
  palette.foreground.primary.dark,
  palette.background.base.light
)
logContrastResult('Dim text', dimFg)

const brightFg = check(
  'Bright text',
  palette.foreground.primary.bright ?? palette.foreground.primary.light,
  palette.background.base.light
)
logContrastResult('Bright text', brightFg)

// Accent colors
console.log('\n🎨 Accent colors on background:')
const blue = check(
  'Blue',
  palette.chromatic.blue.main,
  palette.background.base.light
)
logContrastResult('Blue', blue)

const cyan = check(
  'Cyan',
  palette.chromatic.cyan.light,
  palette.background.base.light
)
logContrastResult('Cyan', cyan)

const green = check(
  'Green',
  palette.chromatic.green.main,
  palette.background.base.light
)
logContrastResult('Green', green)

const yellow = check(
  'Yellow',
  palette.chromatic.yellow.main,
  palette.background.base.light
)
logContrastResult('Yellow', yellow)

const red = check(
  'Red',
  palette.chromatic.red.main,
  palette.background.base.light
)
logContrastResult('Red', red)

const purple = check(
  'Purple',
  palette.chromatic.purple.light,
  palette.background.base.light
)
logContrastResult('Purple', purple)

// UI elements
console.log('\n🖥️  UI elements:')
const sidebarFg = check(
  'Sidebar',
  palette.foreground.primary.main,
  palette.background.base.dark
)
logContrastResult('Sidebar', sidebarFg)

const tabActive = check(
  'Active Tab',
  palette.foreground.primary.light,
  palette.background.base.main
)
logContrastResult('Active Tab', tabActive)

const tabInactive = check(
  'Inactive Tab',
  palette.foreground.primary.main,
  palette.background.base.light
)
logContrastResult('Inactive Tab', tabInactive)

// Hover tooltips
// Using the same text color but with the new mixed background
async function checkTooltipContrast() {
  const { mix } = await import('../src/theme/utils/color.js')
  const newTooltipBg = mix(
    palette.background.base.light,
    palette.chromatic.blue.main,
    0.1
  )
  const tooltipFg = check(
    'Tooltip text',
    palette.foreground.primary.light,
    newTooltipBg
  )
  logContrastResult(
    'Tooltip text',
    tooltipFg,
    palette.foreground.primary.light,
    newTooltipBg
  )
}

await checkTooltipContrast()

// List error foreground on tab background
const listErrorOnTab = check(
  'List error on tab',
  palette.chromatic.red.main,
  palette.background.base.dark
)
logContrastResult(
  'List error on tab',
  listErrorOnTab,
  palette.chromatic.red.main,
  palette.background.base.dark
)

// Summary
const compliancePercentage =
  issues.length === 0
    ? 100
    : Math.round(((totalChecks - issues.length) / totalChecks) * 100)

console.log('\n📋 Summary:')
console.log(`  Total checked: ${totalChecks}`)
console.log(`  AA issues: ${issues.length}`)
console.log(
  `  WCAG AA compliance: ${issues.length === 0 ? '✅' : '❌'} ${sanitizeLogOutput(String(compliancePercentage))}%`
)

if (issues.length > 0) {
  console.log('\n⚠️  Contrast issues:')
  issues.forEach((issue) => {
    console.log(
      `  ${sanitizeLogOutput(issue.name)}: ${sanitizeLogOutput(String(issue.ratio))}:1 (needs ≥4.5:1)`
    )
  })
}
