import { palette } from '../src/theme/palette'
import { checkContrast } from '../src/theme/utils/contrast'

interface ContrastIssue {
  name: string
  fg: string
  bg: string
  ratio: number
  aa: boolean
  aaa: boolean
}

const issues: ContrastIssue[] = []

function check(name: string, fg: string, bg: string) {
  const result = checkContrast(fg, bg)
  if (!result.aa) {
    issues.push({ name, fg, bg, ...result })
  }
  return result
}

console.log('🔍 Проверка контрастности темы Tokyo Night Modern\n')

// Основные комбинации
console.log('📊 Основные комбинации:')
const mainFg = check('Основной текст', palette.fg.brighter, palette.bg.editor)
console.log(
  `  Основной текст: ${mainFg.ratio}:1 ${mainFg.aa ? '✅ AA' : '❌'} ${mainFg.aaa ? '✅ AAA' : '❌'}`
)

const dimFg = check('Тусклый текст', palette.fg.dim, palette.bg.editor)
console.log(
  `  Тусклый текст: ${dimFg.ratio}:1 ${dimFg.aa ? '✅ AA' : '❌'} ${dimFg.aaa ? '✅ AAA' : '❌'}`
)

const brightFg = check('Яркий текст', palette.fg.brightest, palette.bg.editor)
console.log(
  `  Яркий текст: ${brightFg.ratio}:1 ${brightFg.aa ? '✅ AA' : '❌'} ${brightFg.aaa ? '✅ AAA' : '❌'}`
)

// Акцентные цвета
console.log('\n🎨 Акцентные цвета на фоне:')
const blue = check('Blue', palette.blue.medium, palette.bg.editor)
console.log(
  `  Blue: ${blue.ratio}:1 ${blue.aa ? '✅ AA' : '❌'} ${blue.aaa ? '✅ AAA' : '❌'}`
)

const cyan = check('Cyan', palette.cyan.light, palette.bg.editor)
console.log(
  `  Cyan: ${cyan.ratio}:1 ${cyan.aa ? '✅ AA' : '❌'} ${cyan.aaa ? '✅ AAA' : '❌'}`
)

const green = check('Green', palette.green.main, palette.bg.editor)
console.log(
  `  Green: ${green.ratio}:1 ${green.aa ? '✅ AA' : '❌'} ${green.aaa ? '✅ AAA' : '❌'}`
)

const yellow = check('Yellow', palette.yellow.main, palette.bg.editor)
console.log(
  `  Yellow: ${yellow.ratio}:1 ${yellow.aa ? '✅ AA' : '❌'} ${yellow.aaa ? '✅ AAA' : '❌'}`
)

const red = check('Red', palette.red.main, palette.bg.editor)
console.log(
  `  Red: ${red.ratio}:1 ${red.aa ? '✅ AA' : '❌'} ${red.aaa ? '✅ AAA' : '❌'}`
)

const purple = check('Purple', palette.purple.light, palette.bg.editor)
console.log(
  `  Purple: ${purple.ratio}:1 ${purple.aa ? '✅ AA' : '❌'} ${purple.aaa ? '✅ AAA' : '❌'}`
)

// UI элементы
console.log('\n🖥️  UI элементы:')
const sidebarFg = check('Sidebar', palette.fg.medium, palette.bg.darkest)
console.log(
  `  Sidebar: ${sidebarFg.ratio}:1 ${sidebarFg.aa ? '✅ AA' : '❌'} ${sidebarFg.aaa ? '✅ AAA' : '❌'}`
)

const tabActive = check('Active Tab', palette.fg.brighter, palette.bg.main)
console.log(
  `  Active Tab: ${tabActive.ratio}:1 ${tabActive.aa ? '✅ AA' : '❌'} ${tabActive.aaa ? '✅ AAA' : '❌'}`
)

const tabInactive = check('Inactive Tab', palette.fg.medium, palette.bg.light)
console.log(
  `  Inactive Tab: ${tabInactive.ratio}:1 ${tabInactive.aa ? '✅ AA' : '❌'} ${tabInactive.aaa ? '✅ AAA' : '❌'}`
)

// Итоги
console.log('\n📋 Итоги:')
console.log(`  Всего проверено: ${issues.length + 10}`)
console.log(`  Проблем с AA: ${issues.length}`)
console.log(
  `  Соответствие WCAG AA: ${issues.length === 0 ? '✅ 100%' : `❌ ${Math.round((1 - issues.length / 10) * 100)}%`}`
)

if (issues.length > 0) {
  console.log('\n⚠️  Проблемы с контрастностью:')
  issues.forEach((issue) => {
    console.log(`  ${issue.name}: ${issue.ratio}:1 (нужно ≥4.5:1)`)
  })
}
