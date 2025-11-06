import { palette } from '../src/theme/palette/index.js'
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
const mainFg = check('Main text', palette.fg.light, palette.bg.light)
logContrastResult('Main text', mainFg)

const dimFg = check('Dim text', palette.fg.dark, palette.bg.light)
logContrastResult('Dim text', dimFg)

const brightFg = check(
  'Bright text',
  palette.fg.bright ?? palette.fg.light,
  palette.bg.light
)
logContrastResult('Bright text', brightFg)

// Accent colors
console.log('\n🎨 Accent colors on background:')
const blue = check('Blue', palette.blue.main, palette.bg.light)
logContrastResult('Blue', blue)

const cyan = check('Cyan', palette.cyan.light, palette.bg.light)
logContrastResult('Cyan', cyan)

const green = check('Green', palette.green.main, palette.bg.light)
logContrastResult('Green', green)

const yellow = check('Yellow', palette.yellow.main, palette.bg.light)
logContrastResult('Yellow', yellow)

const red = check('Red', palette.red.main, palette.bg.light)
logContrastResult('Red', red)

const purple = check('Purple', palette.purple.light, palette.bg.light)
logContrastResult('Purple', purple)

// UI elements
console.log('\n🖥️  UI elements:')
const sidebarFg = check('Sidebar', palette.fg.main, palette.bg.dark)
logContrastResult('Sidebar', sidebarFg)

const tabActive = check('Active Tab', palette.fg.light, palette.bg.main)
logContrastResult('Active Tab', tabActive)

const tabInactive = check('Inactive Tab', palette.fg.main, palette.bg.light)
logContrastResult('Inactive Tab', tabInactive)

// Hover tooltips
// Using the same text color but with the new mixed background
const { mix } = await import('../src/theme/utils/color.js')
const newTooltipBg = mix(palette.bg.light, palette.blue.main, 0.1)
const tooltipFg = check('Tooltip text', palette.fg.light, newTooltipBg)
logContrastResult('Tooltip text', tooltipFg, palette.fg.light, newTooltipBg)

// List error foreground on tab background
const listErrorOnTab = check('List error on tab', '#ff6b7a', '#18162c')
logContrastResult('List error on tab', listErrorOnTab, '#ff6b7a', '#18162c')

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
