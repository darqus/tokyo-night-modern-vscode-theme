// Генератор итогового JSON-файла темы VS Code (идентичный исходному)
import { colors } from '../src/theme/ui'
import { tokenColors } from '../src/theme/tokens'
import { semanticTokenColors } from '../src/theme/semantic'
import { writeFileSync } from 'fs'
import { join } from 'path'

/**
 * @description Основной объект темы, который будет преобразован в JSON.
 * @property {string} name - Название темы.
 * @property {string} type - Тип темы ('dark' или 'light').
 * @property {boolean} semanticHighlighting - Включает семантическую подсветку.
 * @property {object} colors - Цвета интерфейса.
 * @property {object} tokenColors - Цвета токенов для синтаксической подсветки.
 * @property {object} semanticTokenColors - Цвета для семантической подсветки.
 */
const theme = {
  name: 'Tokyo Night Modern',
  type: 'dark',
  semanticHighlighting: true,
  colors,
  tokenColors,
  semanticTokenColors,
}

const outPath = join(__dirname, '../themes/tokyo-night-modern-color-theme.json')
writeFileSync(outPath, JSON.stringify(theme, null, 2) + '\n')

console.log('Theme generated at', outPath)
