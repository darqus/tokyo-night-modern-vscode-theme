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
  black: '#000000',
}

// 2. Акцентные цвета (для выделения)
const accentColors: ColorPalette = {
  blue: '#7aa2f7',
  blueAlt: '#3d59a1',
  purple: '#bb9af7',
  purpleAlt: '#9d7cd8',
  green: '#9ece6a',
  yellow: '#e0af68',
  orange: '#ff9e64',
  red: '#f7768e',
  cyan: '#7dcfff',
  teal: '#4db1b8',
  pink: '#fae4fc',
}

// 3. Цвета для синтаксиса
const syntaxColors: ColorPalette = {
  commentDoc: '#565f89',
  jsdocTag: '#e0af68',
  keywordAccess: '#bb9af7',
  keywordAsync: '#7aa2f7',
  interface: '#7aa2f7',
  enum: '#c097d7',
  namespace: '#c097d7',
  typeParam: '#c097d7',
  builtinType: '#e0af68',
  comparisonOp: '#89ddff',
  assignOp: '#89ddff',
  spreadOp: '#bb9af7',
  annotation: '#e0af68',
  attribute: '#73daca',
  pragma: '#e0af68',
  mdHeading: '#bb9af7',
  mdCode: '#9ece6a',
  bracket: '#c0caf5',
  delimiter: '#89ddff',
  deprecated: '#9d7cd8', // Alpha will be applied in token
  variable: '#c0caf5',
  funcParam: '#e0af68',
  regexp: '#b4f9f8',
  accessor: '#7aa2f7',
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
  terminalBrightRed: '#ff8b99',
  terminalBrightGreen: '#b9f27c',
  terminalBrightYellow: '#ffdd7a',
  terminalBrightMagenta: '#ff8dce',
  hoverWidgetHighlight: '#565f89',

  // Special selections and highlights
  selection: '#2358ca',

  // Adapted Status Bar Colors (using theme's color palette)
  statusBarBackground: baseColors.backgroundAlt, // '#1f2230' - использовать основной фон боковой панели
  statusBarForeground: baseColors.foregroundAlt, // '#7b87b6' - использовать альтернативный текстовый цвет темы
  statusBarBorder: baseColors.border, // '#202230' - использовать общий цвет границ
  statusBarNoFolderBackground: baseColors.backgroundAlt, // '#1f2230' - фон без папки как основной фон строки состояния
  statusBarDebuggingBackground: accentColors.red, // '#f7768e' - использовать красный акцент для отладки
  statusBarDebuggingForeground: baseColors.white, // '#ffffff' - белый текст при отладке
  statusBarItemHoverBackground: baseColors.backgroundPanel, // '#232739' - использовать цвет фона панели при наведении
  statusBarItemHoverForeground: baseColors.foreground, // '#9aaae9' - использовать основной цвет текста при наведении
  statusBarItemActiveBackground: baseColors.border, // '#202230' - использовать цвет границы для активного элемента
  statusBarItemProminentBackground: accentColors.red, // '#f7768e' - использовать красный акцент для выделенных элементов
  statusBarItemProminentForeground: baseColors.white, // '#ffffff' - белый текст для выделенных элементов
  statusBarItemProminentHoverBackground: accentColors.orange, // '#ff9e64' - использовать оранжевый акцент при наведении на выделенный элемент
  statusBarItemProminentHoverForeground: baseColors.white, // '#ffffff' - белый текст при наведении на выделенный элемент
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
