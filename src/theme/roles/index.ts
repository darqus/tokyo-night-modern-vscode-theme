import { interfaceColors } from '../palette/semantic/interface'
import { typographyColors } from '../palette/semantic/typography'
import { borderColors } from '../palette/semantic/borders'
import { semanticColors } from '../palette/semantic'
import { ColorRoleDefinition } from './types'

export const colorRoles: ColorRoleDefinition = {
  // Background roles
  'background.primary': {
    name: 'Primary Background',
    description: 'Main background color for the application',
    category: 'background',
    value: interfaceColors.background.primary,
    usage: ['editor background', 'main panels'],
    accessibility: { contrastRatio: 4.5, wcagLevel: 'AA' },
  },
  'background.secondary': {
    name: 'Secondary Background',
    description: 'Secondary background for panels and sidebars',
    category: 'background',
    value: interfaceColors.background.secondary,
    usage: ['sidebars', 'secondary panels'],
    accessibility: { contrastRatio: 4.5, wcagLevel: 'AA' },
  },

  // Surface roles
  'surface.primary': {
    name: 'Primary Surface',
    description: 'Primary surface color for cards and containers',
    category: 'surface',
    value: interfaceColors.surface.primary,
    usage: ['cards', 'modals', 'dropdowns'],
  },
  'surface.hover': {
    name: 'Surface Hover',
    description: 'Surface color for hover states',
    category: 'surface',
    value: interfaceColors.surface.hover,
    usage: ['hover states on surfaces'],
  },

  // Text roles
  'text.primary': {
    name: 'Primary Text',
    description: 'Primary text color for high contrast content',
    category: 'text',
    value: typographyColors.text.primary,
    usage: ['headings', 'important text'],
    accessibility: { contrastRatio: 4.5, wcagLevel: 'AA' },
  },
  'text.secondary': {
    name: 'Secondary Text',
    description: 'Secondary text color for less important content',
    category: 'text',
    value: typographyColors.text.secondary,
    usage: ['descriptions', 'metadata'],
    accessibility: { contrastRatio: 4.5, wcagLevel: 'AA' },
  },

  // Interactive roles
  'interactive.primary': {
    name: 'Primary Interactive',
    description: 'Primary color for buttons and interactive elements',
    category: 'interactive',
    value: interfaceColors.ui.button.primary,
    usage: ['primary buttons', 'links'],
    accessibility: { contrastRatio: 4.5, wcagLevel: 'AA' },
  },
  'interactive.focus': {
    name: 'Focus Ring',
    description: 'Color for focus indicators',
    category: 'interactive',
    value: borderColors.focusRing.default,
    usage: ['focus rings', 'keyboard navigation'],
  },

  // Border roles
  'border.default': {
    name: 'Default Border',
    description: 'Default border color for UI elements',
    category: 'border',
    value: borderColors.border.default,
    usage: ['input borders', 'card borders'],
  },
  'border.divider': {
    name: 'Divider',
    description: 'Color for dividers and separators',
    category: 'border',
    value: borderColors.divider.default,
    usage: ['dividers', 'separators'],
  },

  // Status roles
  'status.success': {
    name: 'Success',
    description: 'Color for success states and messages',
    category: 'status',
    value: semanticColors.success,
    usage: ['success messages', 'checkmarks'],
  },
  'status.error': {
    name: 'Error',
    description: 'Color for error states and messages',
    category: 'status',
    value: semanticColors.error,
    usage: ['error messages', 'validation errors'],
  },
  'status.warning': {
    name: 'Warning',
    description: 'Color for warning states and messages',
    category: 'status',
    value: semanticColors.warning,
    usage: ['warning messages', 'caution indicators'],
  },

  // Syntax roles (subset for common use)
  'syntax.keyword': {
    name: 'Syntax Keyword',
    description: 'Color for programming language keywords',
    category: 'syntax',
    value: semanticColors.primary,
    usage: ['keywords', 'control flow'],
  },
  'syntax.string': {
    name: 'Syntax String',
    description: 'Color for string literals',
    category: 'syntax',
    value: semanticColors.text,
    usage: ['strings', 'literals'],
  },
  'syntax.comment': {
    name: 'Syntax Comment',
    description: 'Color for comments',
    category: 'syntax',
    value: semanticColors.textSecondary,
    usage: ['comments', 'documentation'],
  },
}

export function getColorRole(roleName: keyof typeof colorRoles): string {
  return colorRoles[roleName].value
}

export function getColorRolesByCategory(category: string): ColorRoleDefinition {
  return Object.fromEntries(
    Object.entries(colorRoles).filter(([_, role]) => role.category === category)
  )
}
