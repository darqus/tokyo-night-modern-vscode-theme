/**
 * Foundation Colors - Primitive color palette
 * Базовые цвета, которые используются для создания семантических цветов
 * НЕ используются напрямую в UI компонентах
 */

import { foundationColors as foundationColorsImport } from './foundation/colors'

export const foundationColors = foundationColorsImport

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

  // Teals
  teal50: string
  teal100: string
  teal200: string
  teal300: string
  teal400: string
  teal500: string
  teal600: string
  teal700: string
  teal800: string
  teal900: string

  // Oranges
  orange50: string
  orange100: string
  orange200: string
  orange300: string
  orange400: string
  orange500: string
  orange600: string
  orange700: string
  orange800: string
  orange900: string

  // Magentas
  magenta50: string
  magenta100: string
  magenta200: string
  magenta300: string
  magenta400: string
  magenta500: string
  magenta600: string
  magenta700: string
  magenta800: string
  magenta900: string

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