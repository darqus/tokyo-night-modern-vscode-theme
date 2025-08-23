/**
 * Анализ цветовой температуры в палитре Tokyo Night
 * Поиск теплых цветов, которые могут не соответствовать холодной цветовой схеме
 */

import { palette } from '../src/palette'
import { RGB, HSL, ColorTemperature, ColorAnalysisResult } from './types'

// Функция для конвертации hex в RGB (поддерживает альфа-канал)
function hexToRgb(hex: string): RGB {
  // Убираем # если есть
  hex = hex.replace('#', '')

  // Обрабатываем цвета с альфа-каналом (8 символов) - берем только RGB часть
  if (hex.length === 8) {
    hex = hex.substring(0, 6)
  }

  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) throw new Error(`Неверный hex цвет: ${hex}`)

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

// Функция для конвертации RGB в HSL
function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0 // ахроматический
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

// Функция для определения цветовой температуры
function getColorTemperature(hex: string): ColorTemperature {
  const rgb = hexToRgb(hex)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Определяем цветовую температуру по оттенку (H в HSL)
  // Теплые цвета: 0-60° (красный, оранжевый, желтый) и 300-360° (пурпурно-красный)
  // Холодные цвета: 180-300° (голубой, синий, фиолетовый)
  // Нейтральные: 60-180° (желто-зеленый, зеленый, зелено-голубой)

  if ((hsl.h >= 0 && hsl.h <= 60) || (hsl.h >= 300 && hsl.h <= 360)) {
    return 'теплый'
  } else if (hsl.h >= 180 && hsl.h <= 300) {
    return 'холодный'
  } else {
    return 'нейтральный'
  }
}

// Функция для анализа всей палитры
function analyzePalette() {
  const results: ColorAnalysisResult[] = []

  // Функция для обхода объекта палитры
  function traverseObject(obj: Record<string, unknown>, path: string = '') {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key

      if (typeof value === 'string' && value.startsWith('#')) {
        const rgb = hexToRgb(value)
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
        const temperature = getColorTemperature(value)

        let concern = ''
        if (temperature === 'теплый') {
          concern = '⚠️ ТЕПЛЫЙ ЦВЕТ - может нарушать холодную цветовую схему'
        } else if (
          temperature === 'нейтральный' &&
          hsl.h >= 60 &&
          hsl.h <= 120
        ) {
          concern = '⚡ НЕЙТРАЛЬНЫЙ (зеленоватый) - проверить соответствие'
        }

        results.push({
          category: path || 'root',
          name: currentPath,
          hex: value,
          temperature,
          hsl,
          concern,
        })
      } else if (typeof value === 'object' && value !== null) {
        traverseObject(value as Record<string, unknown>, currentPath)
      }
    }
  }

  traverseObject(palette as unknown as Record<string, unknown>)
  return results
}

// Проводим анализ
const analysis = analyzePalette()

// Фильтруем проблемные цвета
const warmColors = analysis.filter((color) => color.temperature === 'теплый')
const neutralConcerns = analysis.filter((color) =>
  color.concern.includes('НЕЙТРАЛЬНЫЙ')
)
const allConcerns = analysis.filter((color) => color.concern !== '')

console.log('=== АНАЛИЗ ЦВЕТОВОЙ ТЕМПЕРАТУРЫ TOKYO NIGHT THEME ===\n')

console.log(`Всего цветов проанализировано: ${analysis.length}`)
console.log(
  `Холодных цветов: ${
    analysis.filter((c) => c.temperature === 'холодный').length
  }`
)
console.log(
  `Нейтральных цветов: ${
    analysis.filter((c) => c.temperature === 'нейтральный').length
  }`
)
console.log(`Теплых цветов: ${warmColors.length}`)
console.log(`Всего проблемных: ${allConcerns.length}\n`)

if (warmColors.length > 0) {
  console.log('🔥 ТЕПЛЫЕ ЦВЕТА (потенциальные проблемы):')
  console.log('='.repeat(60))
  warmColors.forEach((color) => {
    console.log(`${color.name}`)
    console.log(`  Цвет: ${color.hex}`)
    console.log(`  HSL: H=${color.hsl.h}° S=${color.hsl.s}% L=${color.hsl.l}%`)
    console.log(`  ${color.concern}`)
    console.log('')
  })
}

if (neutralConcerns.length > 0) {
  console.log('⚡ НЕЙТРАЛЬНЫЕ ЦВЕТА (требуют проверки):')
  console.log('='.repeat(60))
  neutralConcerns.forEach((color) => {
    console.log(`${color.name}`)
    console.log(`  Цвет: ${color.hex}`)
    console.log(`  HSL: H=${color.hsl.h}° S=${color.hsl.s}% L=${color.hsl.l}%`)
    console.log(`  ${color.concern}`)
    console.log('')
  })
}

// Группировка по категориям для лучшего понимания
console.log('📊 СТАТИСТИКА ПО КАТЕГОРИЯМ:')
console.log('='.repeat(40))
const categories = [...new Set(analysis.map((c) => c.category))]
categories.forEach((category) => {
  const categoryColors = analysis.filter((c) => c.category === category)
  const warm = categoryColors.filter((c) => c.temperature === 'теплый').length
  const cold = categoryColors.filter((c) => c.temperature === 'холодный').length
  const neutral = categoryColors.filter(
    (c) => c.temperature === 'нейтральный'
  ).length

  console.log(
    `${category}: ${categoryColors.length} цветов (🔥${warm} ❄️${cold} ⚡${neutral})`
  )
})

// Рекомендации
console.log('\n💡 РЕКОМЕНДАЦИИ:')
console.log('='.repeat(50))

if (warmColors.length > 0) {
  console.log('1. КРИТИЧЕСКИЕ ТЕПЛЫЕ ЦВЕТА:')
  warmColors.forEach((color) => {
    if (color.hsl.h >= 0 && color.hsl.h <= 30) {
      console.log(
        `   - ${color.name} (${color.hex}) - красноватый, рассмотреть замену на холодный красный`
      )
    } else if (color.hsl.h >= 30 && color.hsl.h <= 60) {
      console.log(
        `   - ${color.name} (${color.hex}) - оранжево/желтый, рассмотреть замену на холодный аналог`
      )
    } else if (color.hsl.h >= 300) {
      console.log(
        `   - ${color.name} (${color.hex}) - пурпурно-красный, возможно приемлем в контексте`
      )
    }
  })
}

if (neutralConcerns.length > 0) {
  console.log('\n2. НЕЙТРАЛЬНЫЕ ЦВЕТА К ПРОВЕРКЕ:')
  neutralConcerns.forEach((color) => {
    console.log(
      `   - ${color.name} (${color.hex}) - может быть слишком зеленым для темы`
    )
  })
}

console.log('\n3. ОБЩИЕ РЕКОМЕНДАЦИИ:')
console.log(
  '   - Tokyo Night должна использовать преимущественно холодные цвета (синие, фиолетовые, голубые)'
)
console.log(
  '   - Теплые акценты допустимы только для критически важных элементов (ошибки, предупреждения)'
)
console.log(
  '   - Рассмотрите замену теплых цветов на их холодные аналоги с сохранением контрастности'
)

export { analyzePalette, getColorTemperature, hexToRgb, rgbToHsl }
