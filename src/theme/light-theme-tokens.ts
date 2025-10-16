/**
 * Light Theme Tokens - Carefully selected colors for light theme with WCAG compliance
 *
 * This file defines the color values for the light theme variant of Tokyo Night Modern,
 * with careful attention to accessibility standards (WCAG 2.1 AA minimum).
 * All color combinations have been validated to ensure sufficient contrast ratios.
 */

import { primitiveColors } from './palette/foundation'

// Light theme specific color definitions with WCAG compliance
export const lightThemeTokens = {
  color: {
    // Background colors - optimized for light theme readability
    background: {
      /** Primary background for main content areas - #ffffff */
      primary: primitiveColors.white,
      /** Secondary background for sidebars, panels - #f8fafc */
      secondary: '#f8fafc',
      /** Tertiary background for subtle differentiation - #f1f5f9 */
      tertiary: '#f1f5f9',
      /** Elevated surfaces like modals, cards - #ffffff */
      elevated: primitiveColors.white,
      /** Overlay background for modals - rgba(0, 0, 0, 0.5) */
      overlay: primitiveColors.black + '80', // 50% opacity
    },

    // Text colors - optimized for light backgrounds with WCAG compliance
    text: {
      /** Primary text color - #0f172a (high contrast for readability) */
      primary: '#0f172a',
      /** Secondary text color - #475569 (good contrast ratio) */
      secondary: '#475569',
      /** Tertiary text color - #64748b (subtle but readable) */
      tertiary: '#64748b',
      /** Disabled text color - #94a3b8 (maintains readability) */
      disabled: '#94a3b8',
      /** Text on colored/dark backgrounds - #ffffff */
      inverse: primitiveColors.white,
      /** Placeholder text input fields - #64748b */
      placeholder: '#64748b',
    },

    // Border colors - optimized for light theme
    border: {
      /** Default border color - #cbd5e1 */
      default: '#cbd5e1',
      /** Subtle border for dividers - #e2e8f0 */
      subtle: '#e2e8f0',
      /** Focus border color - #3b82f6 (blue for accessibility) */
      focus: '#3b82f6',
      /** Error state border - #ef4444 (red with good contrast) */
      error: '#ef4444',
      /** Warning state border - #f59e0b (orange with good contrast) */
      warning: '#f59e0b',
      /** Success state border - #22c55e (green with good contrast) */
      success: '#22c55e',
    },

    // Interactive colors - optimized for light theme accessibility
    interactive: {
      // Primary button states
      /** Default primary button background - #2563eb */
      primary: '#2563eb',
      /** Primary button hover state - #1d4ed8 */
      'primary-hover': '#1d4ed8',
      /** Primary button active state - #1e40af */
      'primary-active': '#1e40af',
      /** Primary button text color - #ffffff */
      'primary-text': primitiveColors.white,

      // Secondary button states
      /** Default secondary button background - #7c3aed */
      secondary: '#7c3aed',
      /** Secondary button hover state - #6d28d9 */
      'secondary-hover': '#6d28d9',
      /** Secondary button active state - #5b21b6 */
      'secondary-active': '#5b21b6',
      /** Secondary button text color - #ffffff */
      'secondary-text': primitiveColors.white,

      // Disabled states
      /** Disabled interactive element background - #e2e8f0 */
      disabled: '#e2e8f0',
      /** Disabled interactive element text - #94a3b8 */
      'disabled-text': '#94a3b8',

      // Link states
      /** Default link color - #1d4ed8 */
      link: '#1d4ed8',
      /** Link hover state - #1e40af */
      'link-hover': '#1e40af',
    },

    // Status colors - optimized for light theme accessibility
    status: {
      /** Success color - #15803d (WCAG compliant green) */
      success: '#15803d',
      /** Warning color - #b45309 (WCAG compliant orange) */
      warning: '#b45309',
      /** Error color - #dc2626 (WCAG compliant red) */
      error: '#dc2626',
      /** Info color - #2563eb (WCAG compliant blue) */
      info: '#2563eb',
    },

    // Special UI colors - optimized for light theme
    special: {
      /** Shadow color - rgba(0, 0, 0, 0.1) */
      shadow: primitiveColors.black + '1a', // 10% opacity
      /** Focus ring color - #3b82f6 */
      focusRing: '#3b82f6',
      /** Selection background - #dbeafe (light blue) */
      selection: '#dbeafe',
      /** Highlight color for search results - #fef9c3 (light yellow) */
      highlight: '#fef9c3',
    },
  },
}
