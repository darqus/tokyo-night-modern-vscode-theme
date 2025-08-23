import { core } from './palette.core'
import { mix, lightenToward, darkenToward } from './utils/color'

// Производные цвета для замены legacy-цветов
export const tealSoft = lightenToward(core.accent.teal, core.accent.cyan, 0.25)
export const skyLight = lightenToward(core.accent.cyan, core.accent.blue, 0.35)
export const indigo = mix(core.accent.blue, core.accent.purple, 0.5)
export const rose = lightenToward(core.accent.red, core.accent.magenta, 0.3)
export const azureLight = lightenToward(
  core.accent.cyan,
  core.accent.blue,
  0.18
)
export const tealDeep = darkenToward(core.accent.teal, core.accent.blue, 0.25)
export const bluePunctuation = darkenToward(
  core.accent.blue,
  core.accent.purple,
  0.18
)

// Оптимизированные цвета для различных типов скобок и пунктуации - соответствие мировым стандартам и холодной схеме
export const bracketRound = lightenToward(
  core.accent.cyan,
  core.accent.blue,
  0.15
) // Круглые скобки - холодный голубой (стандарт: основной тип скобок)
export const bracketSquare = lightenToward(
  core.accent.teal,
  core.accent.cyan,
  0.25
) // Квадратные скобки - холодный бирюзовый (стандарт: массивы/индексы)
export const bracketCurly = lightenToward(
  core.accent.magenta,
  core.accent.purple,
  0.25
) // Фигурные скобки - холодный пурпурный (стандарт: объекты/блоки)
export const bracketAngle = lightenToward(
  core.accent.blue,
  core.accent.cyan,
  0.35
) // Угловые скобки - холодный голубой (стандарт: дженерики/теги)
export const punctuationComma = lightenToward(
  core.accent.cyan,
  core.accent.blue,
  0.45
) // Запятые - холодный голубой (стандарт: разделители)
export const punctuationDot = lightenToward(
  core.accent.blue,
  core.accent.cyan,
  0.25
) // Точки - холодный голубой (стандарт: доступ к свойствам)
export const punctuationColon = mix(core.accent.teal, core.accent.cyan, 0.3) // Двоеточия - холодный бирюзовый (стандарт: типы/объекты)
export const punctuationSemicolon = mix(
  core.accent.purple,
  core.accent.magenta,
  0.25
) // Точка с запятой - холодный пурпурный (стандарт: терминаторы)
export const punctuationOperator = mix(core.accent.teal, core.accent.cyan, 0.4) // Операторы - холодный бирюзовый (стандарт: операции)
export const blue400 = lightenToward(core.accent.blue, core.accent.cyan, 0.18)
export const mint = lightenToward(core.accent.green, core.accent.cyan, 0.18)
export const lilac = lightenToward(core.accent.magenta, core.accent.blue, 0.18)
export const pinkMuted = mix(core.accent.red, core.accent.magenta, 0.5)
export const azure = lightenToward(core.accent.cyan, core.accent.blue, 0.12)
export const maroon = darkenToward(core.accent.red, core.accent.purple, 0.18)
export const blueMuted = mix(core.accent.blue, core.text.muted, 0.4)
export const sky = lightenToward(core.accent.cyan, core.accent.blue, 0.22)
export const grayBlue400 = mix(core.accent.blue, core.text.subtle, 0.5)
export const blueBright = lightenToward(
  core.accent.blue,
  core.accent.cyan,
  0.25
)
export const blueSoft = lightenToward(core.accent.blue, core.text.subtle, 0.18)
export const violet = lightenToward(core.accent.purple, core.accent.blue, 0.18)
export const cyan500 = darkenToward(core.accent.cyan, core.accent.blue, 0.18)
export const slate = mix(core.accent.blue, core.accent.cyan, 0.3)
export const steel = darkenToward(core.accent.blue, core.text.muted, 0.35)
export const steelAlt = lightenToward(core.accent.blue, core.text.muted, 0.18)
export const steelMuted = mix(core.accent.blue, core.text.muted, 0.8)
export const brick = darkenToward(core.accent.red, core.accent.orange, 0.18)
export const redMuted = mix(core.accent.red, core.text.muted, 0.5)
export const badgeBase = lightenToward(core.accent.blue, core.accent.cyan, 0.35)
export const windowBorder = darkenToward(
  core.accent.blue,
  core.text.muted,
  0.22
)
