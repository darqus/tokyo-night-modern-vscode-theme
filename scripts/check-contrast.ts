import { palette } from '../src/theme/palette'
import { checkContrast } from '../src/theme/utils/contrast'
import { sanitizeLogOutput } from '../src/theme/utils/logger'

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
const mainFg = check('Main text', palette.fg.brighter, palette.bg.editor)
logContrastResult('Main text', mainFg)

const dimFg = check('Dim text', palette.fg.dim, palette.bg.editor)
logContrastResult('Dim text', dimFg)

const brightFg = check('Bright text', palette.fg.brightest, palette.bg.editor)
logContrastResult('Bright text', brightFg)

// Accent colors
console.log('\n🎨 Accent colors on background:')
const blue = check('Blue', palette.blue.medium, palette.bg.editor)
logContrastResult('Blue', blue)

const cyan = check('Cyan', palette.cyan.light, palette.bg.editor)
logContrastResult('Cyan', cyan)

const green = check('Green', palette.green.main, palette.bg.editor)
logContrastResult('Green', green)

const yellow = check('Yellow', palette.yellow.main, palette.bg.editor)
logContrastResult('Yellow', yellow)

const red = check('Red', palette.red.main, palette.bg.editor)
logContrastResult('Red', red)

const purple = check('Purple', palette.purple.light, palette.bg.editor)
logContrastResult('Purple', purple)

// UI elements
console.log('\n🖥️  UI elements:')
const sidebarFg = check('Sidebar', palette.fg.medium, palette.bg.darkest)
logContrastResult('Sidebar', sidebarFg)

const tabActive = check('Active Tab', palette.fg.brighter, palette.bg.main)
logContrastResult('Active Tab', tabActive)

const tabInactive = check('Inactive Tab', palette.fg.medium, palette.bg.light)
logContrastResult('Inactive Tab', tabInactive)

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
