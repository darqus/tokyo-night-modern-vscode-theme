/**
 * Скрипт для экспорта дизайн-токенов в JSON формат для других платформ
 *
 * Этот скрипт экспортирует дизайн-токены в формате JSON, который может
 * использоваться в других системах и платформах (Figma, React, и т.д.).
 */

import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tokenConverter } from '../src/theme/token-utils'

// Экспорт токенов для темной темы
const darkTokensJSON = tokenConverter.tokensToJSON('dark')
const darkOutputPath = join(__dirname, '../dist/tokens-dark.json')
writeFileSync(darkOutputPath, darkTokensJSON)

// Экспорт токенов для светлой темы
const lightTokensJSON = tokenConverter.tokensToJSON('light')
const lightOutputPath = join(__dirname, '../dist/tokens-light.json')
writeFileSync(lightOutputPath, lightTokensJSON)

// Экспорт токенов в формате, совместимом с Figma
const figmaTokensDark = tokenConverter.tokensToFigma('dark')
const figmaTokensDarkPath = join(__dirname, '../dist/tokens-figma-dark.json')
writeFileSync(figmaTokensDarkPath, JSON.stringify(figmaTokensDark, null, 2))

const figmaTokensLight = tokenConverter.tokensToFigma('light')
const figmaTokensLightPath = join(__dirname, '../dist/tokens-figma-light.json')
writeFileSync(figmaTokensLightPath, JSON.stringify(figmaTokensLight, null, 2))

// Также создадим плоский JSON с токенами для обеих тем
const darkFlatTokens = tokenConverter.flattenTokens(
  require('../src/theme/design-tokens').tokens
)
const lightFlatTokens = tokenConverter.flattenTokens(
  require('../src/theme/light-theme-tokens').lightThemeTokens
)

const combinedTokens = {
  dark: darkFlatTokens,
  light: lightFlatTokens,
}

const combinedOutputPath = join(__dirname, '../dist/tokens-combined.json')
writeFileSync(combinedOutputPath, JSON.stringify(combinedTokens, null, 2))

console.log('🎨 Design Tokens Exported!')
console.log('='.repeat(50))
console.log(`📁 Dark theme tokens: ${darkOutputPath}`)
console.log(`📁 Light theme tokens: ${lightOutputPath}`)
console.log(`📁 Figma format dark: ${figmaTokensDarkPath}`)
console.log(`📁 Figma format light: ${figmaTokensLightPath}`)
console.log(`📁 Combined tokens: ${combinedOutputPath}`)
console.log(`💡 Exported in multiple formats for different platforms`)
console.log('='.repeat(50))
