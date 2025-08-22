import type { Hex } from './palette'

/**
 * Основные типы для улучшенной архитектуры темы
 */

export interface ThemeVariant {
  id: string
  name: string
  displayName: string
  baseConfig: ThemeConfig
}

export interface ThemeConfig {
  contrast: 'low' | 'normal' | 'high'
  saturation: 'muted' | 'normal' | 'vibrant'
  brightness: 'darker' | 'normal' | 'lighter'
}

export interface ComponentStates {
  default: ComponentStyle
  hover?: ComponentStyle
  active?: ComponentStyle
  focus?: ComponentStyle
  disabled?: ComponentStyle
}

export interface ComponentStyle {
  background?: Hex | 'transparent'
  foreground?: Hex
  border?: Hex | 'transparent'
  shadow?: string
}

export interface UIComponent {
  name: string
  states: ComponentStates
  variants?: ComponentVariants
}

export interface ComponentVariants {
  [key: string]: ComponentStates
}

export interface ColorScale {
  50: Hex // Самый светлый
  100: Hex
  200: Hex
  300: Hex
  400: Hex
  500: Hex // Базовый
  600: Hex
  700: Hex
  800: Hex
  900: Hex // Самый темный
}

export interface ValidationRule {
  name: string
  description: string
  validate: (theme: ThemeData) => ValidationResult
}

export interface ValidationResult {
  passed: boolean
  issues: ValidationIssue[]
}

export interface ValidationIssue {
  severity: 'error' | 'warning' | 'info'
  message: string
  suggestion?: string
}

export interface ThemeData {
  name: string
  type: 'dark' | 'light'
  colors: Record<string, string>
  tokenColors: any[]
  semanticTokenColors: Record<string, any>
}

export interface ThemePlugin {
  name: string
  version: string
  description: string
  apply: (theme: ThemeData, config?: any) => ThemeData
  isCompatible: (themeVersion: string) => boolean
}

export interface ThemeSettings {
  variant: string
  contrast: 'low' | 'normal' | 'high'

  syntax: {
    enableSemanticHighlighting: boolean
    bracketPairColorization: boolean
    customLanguageSupport: string[]
  }

  ui: {
    activityBarPosition: 'left' | 'right'
    tabBarStyle: 'classic' | 'modern' | 'minimal'
    statusBarStyle: 'minimal' | 'full'
  }

  customColors?: Record<string, string>
}
