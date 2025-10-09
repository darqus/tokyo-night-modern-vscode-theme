// Валидация структуры темы VS Code
import fs from 'fs'
import path from 'path'

const themePath = path.join(
  __dirname,
  '../themes/tokyo-night-modern-color-theme.json'
)
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'))

// Проверка: все значения colors — строки (HEX или rgba)
for (const [key, value] of Object.entries(theme.colors)) {
  if (typeof value !== 'string') {
    throw new Error(`Color value for ${key} is not a string: ${value}`)
  }
}

// Проверка: все tokenColors имеют name, scope, settings
for (const [i, token] of theme.tokenColors.entries()) {
  if (!token.name || !token.scope || !token.settings) {
    throw new Error(`TokenColor at index ${i} is missing required fields`)
  }
  if (
    typeof token.settings.foreground !== 'undefined' &&
    typeof token.settings.foreground !== 'string'
  ) {
    throw new Error(`TokenColor at index ${i} has invalid foreground`)
  }
}

console.log('Theme structure is valid.')
