export type ColorCategory =
  | 'background'
  | 'surface'
  | 'text'
  | 'border'
  | 'interactive'
  | 'syntax'
  | 'status'

export interface ColorRole {
  name: string
  description: string
  category: ColorCategory
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
