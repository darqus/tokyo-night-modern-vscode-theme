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
export const primitiveColors: PrimitiveColors = {
  // Blues - основные синие оттенки
  blue50: '#e3f2fd', // Very light blue (not in original)
  blue100: '#bbdefb', // Light blue (not in original)
  blue200: '#90caf9', // Light blue (not in original)
  blue300: '#64b5f6', // Light blue (not in original)
  blue400: '#42a5f5', // Light blue (not in original)
  blue500: '#7aa2f7', // Primary blue - основной синий
  blue600: '#4e6ab2', // Medium blue - средний синий
  blue700: '#394b70', // Dark blue - темный синий
  blue800: '#2c3e5a', // Darker blue (not in original)
  blue900: '#1a2332', // Darkest blue (not in original)

  // Purples - фиолетовые оттенки
  purple50: '#f3e5f5', // Very light purple (not in original)
  purple100: '#e1bee7', // Light purple (not in original)
  purple200: '#ce93d8', // Light purple (not in original)
  purple300: '#ba68c8', // Light purple (not in original)
  purple400: '#ab47bc', // Light purple (not in original)
  purple500: '#bb9af7', // Primary purple - основной фиолетовый
  purple600: '#9d7cd8', // Medium purple - средний фиолетовый
  purple700: '#7256a3', // Dark purple - темный фиолетовый
  purple800: '#5d3a87', // Darker purple (not in original)
  purple900: '#4a2c6b', // Darkest purple (not in original)

  // Greens - зеленые оттенки
  green50: '#e8f5e8', // Very light green (not in original)
  green100: '#c8e6c9', // Light green (not in original)
  green200: '#a5d6a7', // Light green (not in original)
  green300: '#81c784', // Light green (not in original)
  green400: '#66bb6a', // Light green (not in original)
  green500: '#9ece6a', // Primary green - основной зеленый
  green600: '#80a856', // Medium green - средний зеленый
  green700: '#164846', // Dark green - темный зеленый
  green800: '#0f3634', // Darker green (not in original)
  green900: '#0a2625', // Darkest green (not in original)

  // Yellows - желтые оттенки
  yellow50: '#fffde7', // Very light yellow (not in original)
  yellow100: '#fff9c4', // Light yellow (not in original)
  yellow200: '#fff59d', // Light yellow (not in original)
  yellow300: '#fff176', // Light yellow (not in original)
  yellow400: '#ffee58', // Light yellow (not in original)
  yellow500: '#e0af68', // Primary yellow - основной желтый
  yellow600: '#c49a5a', // Medium yellow - средний желтый
  yellow700: '#a67c3a', // Dark yellow (not in original)
  yellow800: '#8b691f', // Darker yellow (not in original)
  yellow900: '#6d4c0f', // Darkest yellow (not in original)

  // Reds - красные оттенки
  red50: '#ffebee', // Very light red (not in original)
  red100: '#ffcdd2', // Light red (not in original)
  red200: '#ef9a9a', // Light red (not in original)
  red300: '#e57373', // Light red (not in original)
  red400: '#ef5350', // Light red (not in original)
  red500: '#ff5370', // Primary red - основной красный
  red600: '#db4b4b', // Medium red - средний красный
  red700: '#963c47', // Dark red - темный красный
  red800: '#7a3039', // Darker red (not in original)
  red900: '#5e242c', // Darkest red (not in original)

  // Cyans - голубые оттенки
  cyan50: '#e0f7fa', // Very light cyan (not in original)
  cyan100: '#b2ebf2', // Light cyan (not in original)
  cyan200: '#80deea', // Light cyan (not in original)
  cyan300: '#4dd0e1', // Light cyan (not in original)
  cyan400: '#26c6da', // Light cyan (not in original)
  cyan500: '#7dcfff', // Primary cyan - основной голубой
  cyan600: '#41a6b5', // Medium cyan - средний голубой
  cyan700: '#0da0ba', // Dark cyan - темный голубой
  cyan800: '#0a7f95', // Darker cyan (not in original)
  cyan900: '#075e70', // Darkest cyan (not in original)

  // Grays - серые оттенки
  gray50: '#fafafa', // Very light gray (not in original)
  gray100: '#f5f5f5', // Light gray (not in original)
  gray200: '#eeeeee', // Light gray (not in original)
  gray300: '#e0e0e0', // Light gray (not in original)
  gray400: '#bdbdbd', // Light gray (not in original)
  gray500: '#a9b1d6', // Primary gray - основной серый
  gray600: '#82859e', // Medium gray - средний серый
  gray700: '#515670', // Dark gray - темный серый
  gray800: '#2a2f40', // Darker gray (not in original)
  gray900: '#0f1722', // Darkest gray - самый темный серый

  // Special colors
  white: '#ffffff',
  black: '#000000',
  transparent: '#000000',
}

/**
 * Utility function to get color by name
 */
export function getPrimitiveColor(colorName: keyof PrimitiveColors): string {
  return primitiveColors[colorName]
}

/**
 * Utility function to get color with opacity
 */
export function getPrimitiveColorWithOpacity(
  colorName: keyof PrimitiveColors,
  opacity: string
): string {
  return `${primitiveColors[colorName]}${opacity}`
}
