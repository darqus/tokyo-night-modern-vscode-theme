#!/usr/bin/env node
/**
 * Автогенерация документации по цветам
 */
import * as fs from 'node:fs'
import * as path from 'node:path'
import { basePalette } from '../src/core/palette'

const generateColorDocs = () => {
  console.log('📚 Генерация документации по цветам...')
  
  const colors = Object.entries(basePalette)
  
  // Генерация таблицы цветов
  const colorTable = [
    '# 🎨 Цветовая палитра Tokyo Night',
    '',
    '## Базовые цвета',
    '',
    '| Название | Hex | Предпросмотр | Использование |',
    '|----------|-----|--------------|---------------|',
    ...colors.map(([name, hex]) => {
      const usage = getColorUsage(name)
      const preview = `![${hex}](https://via.placeholder.com/20/${hex.slice(1)}/${hex.slice(1)})`
      return `| **${name}** | \`${hex}\` | ${preview} | ${usage} |`
    }),
    '',
    '## Цветовые группы',
    '',
    '### Нейтральные',
    '- **black** - Основной фон редактора',
    '- **gray** - Комментарии и неактивные элементы', 
    '- **white** - Основной текст',
    '',
    '### Холодные акценты',
    '- **blue** - Функции и методы',
    '- **cyan** - Переменные и данные',
    '- **teal** - Типы и интерфейсы',
    '- **purple** - Операторы и модификаторы',
    '',
    '### Теплые акценты',
    '- **green** - Строки и содержимое',
    '- **yellow** - Классы и константы',
    '- **orange** - Числовые значения',
    '- **red** - Ошибки и предупреждения',
    '- **magenta** - Атрибуты и теги',
    '',
    `*Документация сгенерирована автоматически ${new Date().toISOString()}*`
  ].join('\n')
  
  const docsPath = path.join(__dirname, '..', 'docs', 'COLORS.md')
  fs.writeFileSync(docsPath, colorTable, 'utf8')
  
  console.log(`✅ Документация создана: ${docsPath}`)
}

const getColorUsage = (colorName: string): string => {
  const usageMap: Record<string, string> = {
    black: 'Фон редактора, панелей',
    gray: 'Комментарии, неактивные элементы',
    white: 'Основной текст, пунктуация',
    blue: 'Функции, методы, ключевые слова',
    cyan: 'Переменные, импорты, данные',
    teal: 'Типы, интерфейсы, свойства',
    purple: 'Операторы, модификаторы',
    green: 'Строки, содержимое',
    yellow: 'Классы, константы',
    orange: 'Числа, значения',
    red: 'Ошибки, теги, предупреждения',
    magenta: 'Атрибуты, HTML теги'
  }
  
  return usageMap[colorName] || 'Специальное использование'
}

// Запуск если вызван напрямую
if (require.main === module) {
  generateColorDocs()
}

export { generateColorDocs }