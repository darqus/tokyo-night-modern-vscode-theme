import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { generateTheme } from '../src/theme'

function buildTheme() {
  console.log('🎨 Generating Tokyo Night theme...')

  const theme = generateTheme()
  const outputPath = join(__dirname, '../themes/tokyo-night-color-theme.json')

  writeFileSync(outputPath, JSON.stringify(theme, null, 2))

  console.log('✅ Theme generated successfully!')
  console.log(`📁 Output: ${outputPath}`)
  console.log(`📊 Stats:`)
  console.log(`   - UI Colors: ${Object.keys(theme.colors).length}`)
  console.log(`   - Token Rules: ${theme.tokenColors.length}`)
  console.log(
    `   - Semantic Tokens: ${Object.keys(theme.semanticTokenColors).length}`
  )
}

buildTheme()
