/**
 * Foundation Colors - Primitive color palette
 * Базовые цвета, которые используются для создания семантических цветов
 * НЕ используются напрямую в UI компонентах
 */

export interface PrimitiveColors {
  // Blues
  blue50: string
  blue100: string
  blue200: string
  blue300: string
  blue400: string
  blue500: string
  blue600: string
  blue700: string
  blue800: string
  blue900: string

  // Purples
  purple50: string
  purple100: string
  purple200: string
  purple300: string
  purple400: string
  purple500: string
  purple600: string
  purple700: string
  purple800: string
  purple900: string

  // Greens
  green50: string
  green100: string
  green200: string
  green300: string
  green400: string
  green500: string
  green600: string
  green700: string
  green800: string
  green900: string

  // Yellows
  yellow50: string
  yellow100: string
  yellow200: string
  yellow300: string
  yellow400: string
  yellow500: string
  yellow600: string
  yellow700: string
  yellow800: string
  yellow900: string

  // Reds
  red50: string
  red100: string
  red200: string
  red300: string
  red400: string
  red500: string
  red600: string
  red700: string
  red800: string
  red900: string

  // Cyans
  cyan50: string
  cyan100: string
  cyan200: string
  cyan300: string
  cyan400: string
  cyan500: string
  cyan600: string
  cyan700: string
  cyan800: string
  cyan900: string

  // Grays
  gray50: string
  gray100: string
  gray200: string
  gray300: string
  gray400: string
  gray500: string
  gray600: string
  gray700: string
  gray800: string
  gray900: string

  // Special
  white: string
  black: string
  transparent: string
}

/**
 * Primitive color palette based on Tokyo Night Modern theme
 * Извлечены из оригинальной палитры и организованы в систематическом порядке
 */
export const foundationColors: PrimitiveColors = {
  // Blues - основные синие оттенки
  blue50: '#e3f2fd',
  blue100: '#bbdefb',
  blue200: '#90caf9',
  blue300: '#64b5f6',
  blue400: '#42a5f5',
  blue500: '#7aa2f7',
  blue600: '#4e6ab2',
  blue700: '#394b70',
  blue800: '#2c3e5a',
  blue900: '#1a2332',

  // Purples - фиолетовые оттенки
  purple50: '#f3e5f5',
  purple100: '#e1bee7',
  purple200: '#ce93d8',
  purple300: '#ba68c8',
  purple400: '#ab47bc',
  purple500: '#bb9af7',
  purple600: '#9d7cd8',
  purple700: '#7256a3',
  purple800: '#5d3a87',
  purple900: '#4a2c6b',

  // Greens - зеленые оттенки
  green50: '#e8f5e8',
  green100: '#c8e6c9',
  green200: '#a5d6a7',
  green300: '#81c784',
  green400: '#66bb6a',
  green500: '#9ece6a',
  green600: '#80a856',
  green700: '#164846',
  green800: '#0f3634',
  green900: '#0a2625',

  // Yellows - желтые оттенки
  yellow50: '#fffde7',
  yellow100: '#fff9c4',
  yellow200: '#fff59d',
  yellow300: '#fff176',
  yellow400: '#ffee58',
  yellow500: '#e0af68',
  yellow600: '#c49a5a',
  yellow700: '#a67c3a',
  yellow800: '#8b691f',
  yellow900: '#6d4c0f',

  // Reds - красные оттенки
  red50: '#ffebee',
  red100: '#ffcdd2',
  red200: '#ef9a9a',
  red300: '#e57373',
  red400: '#ef5350',
  red500: '#ff5370',
  red600: '#db4b4b',
  red700: '#963c47',
  red800: '#7a3039',
  red900: '#5e242c',

  // Cyans - голубые оттенки
  cyan50: '#e0f7fa',
  cyan100: '#b2ebf2',
  cyan200: '#80deea',
  cyan300: '#4dd0e1',
  cyan400: '#26c6da',
  cyan500: '#7dcfff',
  cyan600: '#41a6b5',
  cyan700: '#0da0ba',
  cyan800: '#0a7f95',
  cyan900: '#075e70',

  // Grays - серые оттенки
  gray50: '#fafafa',
  gray100: '#f5f5f5',
  gray200: '#eeeeee',
  gray300: '#e0e0e0',
  gray400: '#bdbdbd',
  gray500: '#97a2d3',
  gray600: '#6c7097',
  gray700: '#4b5172',
  gray800: '#282e41',
  gray900: '#151b24',

  // Special colors
  white: '#ffffff',
  black: '#000000',
  transparent: '#000000',
}

/**
 * Utility function to get color by name
 */
export function getPrimitiveColor(colorName: keyof PrimitiveColors): string {
  return foundationColors[colorName]
}

/**
 * Utility function to get color with opacity
 */
export function getPrimitiveColorWithOpacity(
  colorName: keyof PrimitiveColors,
  opacity: string
): string {
  return `${foundationColors[colorName]}${opacity}`
}
