import {
  createColorPalette,
  validatePalette,
  AlphaValues,
  ColorPalette,
} from './color-utils'

// 1. Базовые цвета (основа темы)
const baseColors: ColorPalette = {
  background: '#1a1b26',
  backgroundAlt: '#1f2230',
  backgroundSidebar: '#181923',
  backgroundPanel: '#232739',
  border: '#202230',
  borderAlt: '#363c55',
  foreground: '#9aaae9',
  foregroundAlt: '#7b87b6',
  foregroundInactive: '#6b78a8',
  white: '#ffffff',
  black: '#1a1b26',
}

// 2. Акцентные цвета (для выделения)
const accentColors: ColorPalette = {
  blue: '#7dcfff',
  blueAlt: '#29acf8',
  purple: '#b18af8',
  purpleAlt: '#9d7cd8',
  green: '#a7c785',
  yellow: '#f7de70',
  orange: '#f0ac74',
  red: '#f38095',
  cyan: '#73daca',
  teal: '#96cab6',
  pink: '#af7c9f',
}

// 3. Цвета для синтаксиса
const syntaxColors: ColorPalette = {
  commentDoc: '#7d909e',
  jsdocTag: '#729bcb',
  keywordAccess: '#a582e5',
  keywordAsync: '#7aa2f7',
  interface: '#c6d8a9',
  enum: '#f4c572',
  namespace: '#87b6f3',
  typeParam: '#e1d6a5',
  builtinType: '#77bee1',
  comparisonOp: '#a783e8',
  assignOp: '#a893e1',
  spreadOp: '#7cbdfc',
  annotation: '#f4c572',
  attribute: '#f5cf71',
  pragma: '#729bcb',
  mdHeading: '#7aa2f7',
  mdCode: '#95af90',
  bracket: '#c0caf5',
  delimiter: '#a6b1de',
  deprecated: '#8591bf', // Alpha will be applied in token
  variable: '#c0caf5',
  funcParam: '#accbf8',
  regexp: '#bfce7f',
  accessor: '#7dcfff',
}

// 4. Цвета для специфических элементов UI
const uiColors: ColorPalette = {
  // Blues
  blueStrong: '#0078d4',
  blueHover: '#1f88d9',
  blueSeparator: '#202230',
  blueSecondary: '#232634',

  // Badges
  badgeBlue: '#0078d4',
  badgeYellow: '#f7de70',
  badgeRed: '#f38095',

  // Grays
  grayDark: '#363c54',
  grayLight: '#dfe2db',
  grayMenu: '#363c55',
  grayShadow: '#282d43', // Alpha 'e6' will be added automatically
  grayScrollbar: '#272b40',
  grayWidgetBorder: '#363c55',
  grayEditorLineNumberActive: '#6f89b9',
  activityBarInactive: '#4f577b',

  // Terminal Colors
  terminalBrightRed: '#f593a5',
  terminalBrightGreen: '#b4cf97',
  terminalBrightYellow: '#f8e385',
  terminalBrightMagenta: '#bd9cf9',
  hoverWidgetHighlight: '#43b6f9',

  // Special selections and highlights
  selectionBlue: '#88b0ff',
}

// 5. Альфа-значения (единственный источник правды для прозрачности)
const alphaValues: AlphaValues = {
  '00': '00',
  '0d': '0d',
  '0f': '0f',
  '14': '14',
  '1a': '1a',
  '1f': '1f',
  '29': '29',
  '2e': '2e',
  '33': '33',
  '3d': '3d',
  '40': '40',
  '59': '59',
  '66': '66',
  '80': '80',
  '99': '99',
  b3: 'b3',
  cc: 'cc',
  e6: 'e6',
}

// 6. Создание финальной палитры
//    Объединяем все цветовые группы и генерируем альфа-варианты.
export const palette: ColorPalette = createColorPalette(
  [baseColors, accentColors, syntaxColors, uiColors],
  alphaValues
)

// 7. Валидация палитры
//    Проверяем, что все сгенерированные цвета имеют корректный формат.
validatePalette(palette, 'palette.ts')