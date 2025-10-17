export enum ColorCategory {
  background = 'background',
  surface = 'surface',
  text = 'text',
  border = 'border',
  interactive = 'interactive',
  syntax = 'syntax',
  status = 'status',
}

export interface ColorRole {
  id: string
  name: string
  description: string
  category: ColorCategory
  subcategory: string
  value: string
  usage: string[]
  accessibility?: {
    contrastRatio?: number
    wcagLevel?: 'AA' | 'AAA'
  }
}

export interface ColorRoleDefinition {
  [key: string]: ColorRole
}

export type ColorRoleName = keyof ColorRoleDefinition

// Define subcategories for each category
export const ColorSubcategories = {
  [ColorCategory.background]: [
    'primary',
    'secondary',
    'tertiary',
    'elevated',
    'overlay',
    'transparent',
  ] as const,
  [ColorCategory.surface]: [
    'primary',
    'secondary',
    'tertiary',
    'hover',
    'active',
    'pressed',
    'selected',
  ] as const,
  [ColorCategory.text]: [
    'primary',
    'secondary',
    'tertiary',
    'disabled',
    'inverse',
    'placeholder',
  ] as const,
  [ColorCategory.border]: [
    'default',
    'subtle',
    'focus',
    'error',
    'warning',
    'success',
  ] as const,
  [ColorCategory.interactive]: [
    'primary',
    'secondary',
    'hover',
    'active',
    'selected',
    'disabled',
    'pressed',
  ] as const,
  [ColorCategory.syntax]: [
    'keyword',
    'string',
    'number',
    'comment',
    'function',
    'class',
    'type',
    'variable',
    'property',
    'tag',
    'attribute',
    'constant',
    'regexp',
    'decorator',
    'annotation',
    'invalid',
    'deprecated',
  ] as const,
  [ColorCategory.status]: ['success', 'warning', 'error', 'info'] as const,
} as const

// Create a type for subcategories based on category
export type SubcategoryType<C extends ColorCategory> =
  C extends ColorCategory.background
    ? (typeof ColorSubcategories)[ColorCategory.background][number]
    : C extends ColorCategory.surface
      ? (typeof ColorSubcategories)[ColorCategory.surface][number]
      : C extends ColorCategory.text
        ? (typeof ColorSubcategories)[ColorCategory.text][number]
        : C extends ColorCategory.border
          ? (typeof ColorSubcategories)[ColorCategory.border][number]
          : C extends ColorCategory.interactive
            ? (typeof ColorSubcategories)[ColorCategory.interactive][number]
            : C extends ColorCategory.syntax
              ? (typeof ColorSubcategories)[ColorCategory.syntax][number]
              : C extends ColorCategory.status
                ? (typeof ColorSubcategories)[ColorCategory.status][number]
                : never
