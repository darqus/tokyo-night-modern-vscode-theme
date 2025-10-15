/**
 * Design Tokens - The single source of truth for all visual design decisions.
 *
 * This file defines a structured and semantic system of design tokens, derived
 * from the foundational color palette. These tokens are intended to be used
 * across all UI components to ensure consistency, scalability, and ease of
 * theme maintenance.
 *
 * The structure is organized hierarchically:
 * [category].[property].[variant]-[state]
 *
 * Example: `color.background.primary-hover`
 *
 * This system is designed to be easily translatable to CSS Custom Properties
 * or used within JavaScript/TypeScript-based styling solutions.
 */

import { primitiveColors } from './palette/foundation'

// Import light theme tokens
import { lightThemeTokens } from './light-theme-tokens'

// Export light theme tokens
export { lightThemeTokens }

// =========================================================================
//
// CORE TOKEN STRUCTURE
//
// =========================================================================

export const tokens = {
  color: {
    // =================================================================
    // ** Background Colors **
    // Used for surfaces and container backgrounds.
    // =================================================================
    background: {
      /** The primary background color for the main content area. */
      primary: primitiveColors.gray900,
      /** A secondary background color for sidebars, panels, and less prominent surfaces. */
      secondary: primitiveColors.gray800,
      /** A tertiary background for elements needing subtle differentiation. */
      tertiary: primitiveColors.blue900,
      /** For elements that are elevated above the primary background (e.g., modals, cards). Originally '#1c1d29'. */
      elevated: primitiveColors.blue900,
      /** For overlays and backdrops. */
      overlay: primitiveColors.black,
    },

    // =================================================================
    // ** Text Colors **
    // Used for all text content.
    // =================================================================
    text: {
      /** The primary text color for body content. */
      primary: primitiveColors.gray500,
      /** A secondary text color for less important information. */
      secondary: primitiveColors.gray600,
      /** A tertiary text color for subtle hints and metadata. */
      tertiary: primitiveColors.gray500,
      /** For disabled text content. */
      disabled: primitiveColors.gray700,
      /** For text on dark/colored backgrounds. */
      inverse: primitiveColors.white,
      /** For placeholder text input fields. */
      placeholder: primitiveColors.gray700,
    },

    // =================================================================
    // ** Border Colors **
    // Used for element borders and separators.
    // =================================================================
    border: {
      /** The default border color for most elements. */
      default: primitiveColors.blue600,
      /** A more subtle border for secondary elements or dividers. */
      subtle: primitiveColors.gray700,
      /** The border color for focused elements. */
      focus: primitiveColors.blue400,
      /** The border color for elements in an error state. */
      error: primitiveColors.red600,
      /** The border color for elements in a warning state. */
      warning: primitiveColors.yellow500,
      /** The border color for elements in a success state. */
      success: primitiveColors.green500,
    },

    // =================================================================
    // ** Interactive Colors **
    // Used for interactive UI elements like buttons and links.
    // =================================================================
    interactive: {
      // --- Primary Button (Blue) ---
      /** The default background color for primary buttons. */
      primary: primitiveColors.blue500,
      /** The background color for primary buttons on hover. */
      'primary-hover': primitiveColors.blue600,
      /** The background color for primary buttons when active/pressed. */
      'primary-active': primitiveColors.blue700,
      /** The text color for primary buttons. */
      'primary-text': primitiveColors.white,

      // --- Secondary Button (Purple) ---
      /** The default background color for secondary buttons. */
      secondary: primitiveColors.purple500,
      /** The background color for secondary buttons on hover. */
      'secondary-hover': primitiveColors.purple600,
      /** The background color for secondary buttons when active/pressed. */
      'secondary-active': primitiveColors.purple700,
      /** The text color for secondary buttons. */
      'secondary-text': primitiveColors.white,

      // --- Disabled State ---
      /** The background color for disabled interactive elements. */
      disabled: primitiveColors.gray800,
      /** The text color for disabled interactive elements. */
      'disabled-text': primitiveColors.gray700,

      // --- Links ---
      /** The default color for links. */
      link: primitiveColors.cyan500,
      /** The color for links on hover. */
      'link-hover': primitiveColors.cyan400,

      // --- General interactive states ---
      /** Hover state background */
      hover: primitiveColors.blue600,
      /** Active state background */
      active: primitiveColors.blue700,
      /** Selected state background */
      selected: primitiveColors.blue800,
      /** Pressed state background */
      pressed: primitiveColors.blue700,
    },

    // =================================================================
    // ** Status & Feedback Colors **
    // Used for conveying success, warning, error, and info states.
    // =================================================================
    status: {
      /** Color for success messages and indicators. */
      success: primitiveColors.green500,
      /** Color for warning messages and indicators. */
      warning: primitiveColors.yellow500,
      /** Color for error messages and indicators. */
      error: primitiveColors.red500,
      /** Color for informational messages and indicators. */
      info: primitiveColors.cyan500,
    },

    // =================================================================
    // ** Special UI Colors **
    // For unique UI elements like shadows, selections, etc.
    // =================================================================
    special: {
      /** The color used for shadows. Typically black with alpha. */
      shadow: primitiveColors.black,
      /** The color for focus rings around interactive elements. */
      focusRing: primitiveColors.blue400,
      /** The background color for selected text or items. */
      selection: primitiveColors.blue600,
      /** The color for highlighting important items or search results. */
      highlight: primitiveColors.yellow500,
    },

    // =================================================================
    // ** Legacy Mappings **
    // For backward compatibility with existing palette references.
    // =================================================================
    legacy: {
      // Background mappings
      backgrounds: {
        primary: primitiveColors.gray900,
        secondary: primitiveColors.gray800,
        tertiary: primitiveColors.blue900,
        elevated: primitiveColors.blue900,
        overlay: primitiveColors.black,
      },

      // Text mappings
      text: {
        primary: primitiveColors.gray500,
        secondary: primitiveColors.gray600,
        disabled: primitiveColors.gray700,
      },

      // Border mappings
      borders: {
        subtle: primitiveColors.gray700,
      },

      // Interactive mappings
      interactive: {
        hover: primitiveColors.blue600,
        active: primitiveColors.blue700,
        selected: primitiveColors.blue800,
        pressed: primitiveColors.blue700,
      },

      // Special mappings
      special: {
        highlight: primitiveColors.yellow500,
        shadow: primitiveColors.black,
        selection: primitiveColors.blue600,
        focusRing: primitiveColors.blue400,
      },

      // Status mappings
      status: {
        error: primitiveColors.red500,
        warning: primitiveColors.yellow500,
        success: primitiveColors.green500,
        info: primitiveColors.cyan500,
      },

      // Other legacy mappings
      background: primitiveColors.gray900,
      foreground: primitiveColors.gray500,
      border: primitiveColors.blue600,
      borderFocus: primitiveColors.blue400,
      transparent: primitiveColors.transparent,
      selection: primitiveColors.blue600,
    },
  },

  // =================================================================
  // ** Accent Colors **
  // Used for primary brand and accent elements.
  // =================================================================
  accent: {
    /** Primary brand color (blue) */
    primary: primitiveColors.blue500,
    /** Secondary brand color (purple) */
    secondary: primitiveColors.purple500,
    /** Success color */
    success: primitiveColors.green500,
    /** Warning color */
    warning: primitiveColors.yellow500,
    /** Error color */
    error: primitiveColors.red500,
    /** Info color */
    info: primitiveColors.cyan500,
  },

  // =================================================================
  // ** Primitive Colors **
  // Direct access to primitive color variants when needed.
  // =================================================================
  primitive: {
    blue: {
      '500': primitiveColors.blue500,
      '600': primitiveColors.blue600,
      '700': primitiveColors.blue700,
      '800': primitiveColors.blue800,
    },
    cyan: {
      '800': primitiveColors.cyan800,
      '900': primitiveColors.cyan900,
    },
    purple: {
      '800': primitiveColors.purple800,
    },
    red: {
      '800': primitiveColors.red800,
    },
    yellow: {
      '800': primitiveColors.yellow800,
    },
    green: {
      '800': primitiveColors.green800,
    },
    gray: {
      '800': primitiveColors.gray800,
      '900': primitiveColors.gray900,
    },
    white: primitiveColors.white,
    black: primitiveColors.black,
  },

  // =================================================================
  // ** Space Tokens **
  // Used for spacing, padding, margins, and sizing.
  // =================================================================

  space: {
    /** No space - 0px */
    none: '0px',
    /** Extra small space - 4px */
    xs: '4px',
    /** Small space - 8px */
    sm: '8px',
    /** Medium-small space - 12px */
    'md-sm': '12px',
    /** Medium space - 16px */
    md: '16px',
    /** Medium-large space - 20px */
    'md-lg': '20px',
    /** Large space - 24px */
    lg: '24px',
    /** Extra large space - 32px */
    xl: '32px',
    /** 2x extra large space - 40px */
    '2xl': '40px',
    /** 3x extra large space - 48px */
    '3xl': '48px',
    /** 4x extra large space - 64px */
    '4xl': '64px',
  },

  // =================================================================
  // ** Typography Tokens **
  // Used for font families, sizes, weights, and line heights.
  // =================================================================

  typography: {
    // Font families
    'font-family': {
      /** Primary font family for general text */
      primary:
        "'Cascadia Code', 'Fira Code', Consolas, 'Courier New', monospace",
      /** Font family for code elements */
      code: "'Cascadia Code', 'Fira Code', Consolas, 'Courier New', monospace",
      /** Font family for headings */
      heading: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },

    // Font sizes
    'font-size': {
      /** Extra large font size - 20px */
      xl: '20px',
      /** Large font size - 16px */
      lg: '16px',
      /** Medium font size - 13px */
      md: '13px',
      /** Small font size - 12px */
      sm: '12px',
      /** Extra small font size - 11px */
      xs: '11px',
    },

    // Font weights
    'font-weight': {
      /** Thin font weight - 100 */
      thin: '100',
      /** Extra light font weight - 200 */
      'extra-light': '200',
      /** Light font weight - 300 */
      light: '300',
      /** Normal font weight - 40 */
      normal: '400',
      /** Medium font weight - 50 */
      medium: '500',
      /** Semi bold font weight - 600 */
      'semi-bold': '600',
      /** Bold font weight - 700 */
      bold: '700',
      /** Extra bold font weight - 800 */
      'extra-bold': '800',
      /** Black font weight - 900 */
      black: '900',
    },

    // Line heights
    'line-height': {
      /** Extra small line height - 1 */
      xs: '1',
      /** Small line height - 1.25 */
      sm: '1.25',
      /** Medium line height - 1.5 */
      md: '1.5',
      /** Large line height - 1.75 */
      lg: '1.75',
      /** Extra large line height - 2 */
      xl: '2',
    },

    // Letter spacing
    'letter-spacing': {
      /** Extra tight letter spacing - -0.04em */
      'tight-xl': '-0.04em',
      /** Extra tight letter spacing - -0.03em */
      'tight-lg': '-0.03em',
      /** Tight letter spacing - -0.02em */
      'tight-md': '-0.02em',
      /** Tight letter spacing - -0.01em */
      'tight-sm': '-0.01em',
      /** Normal letter spacing - 0 */
      normal: '0',
      /** Loose letter spacing - 0.01em */
      'loose-sm': '0.01em',
      /** Loose letter spacing - 0.02em */
      'loose-md': '0.02em',
      /** Loose letter spacing - 0.03em */
      'loose-lg': '0.03em',
      /** Extra loose letter spacing - 0.04em */
      'loose-xl': '0.04em',
    },
  },

  // =================================================================
  // ** Border Tokens **
  // Used for border widths, styles, and radii.
  // =================================================================

  border: {
    // Border widths
    width: {
      /** No border - 0 */
      none: '0',
      /** Thin border - 1px */
      thin: '1px',
      /** Medium border - 2px */
      md: '2px',
      /** Thick border - 3px */
      thick: '3px',
    },

    // Border styles
    style: {
      /** Solid border */
      solid: 'solid',
      /** Dashed border */
      dashed: 'dashed',
      /** Dotted border */
      dotted: 'dotted',
      /** Double border */
      double: 'double',
    },
  },

  // =================================================================
  // ** Radius Tokens **
  // Used for border radius values.
  // =================================================================

  radius: {
    /** No radius - 0px */
    none: '0px',
    /** Extra small radius - 2px */
    xs: '2px',
    /** Small radius - 4px */
    sm: '4px',
    /** Medium radius - 6px */
    md: '6px',
    /** Large radius - 8px */
    lg: '8px',
    /** Extra large radius - 12px */
    xl: '12px',
    /** Full radius - 999px */
    full: '999px',
  },

  // =================================================================
  // ** Shadow Tokens **
  // Used for box-shadow and text-shadow values.
  // =================================================================

  shadow: {
    /** No shadow */
    none: 'none',
    /** Small inner shadow */
    'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    /** Inner shadow */
    inner: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    /** Large inner shadow */
    'inner-lg': 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.15)',
    /** Small shadow */
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    /** Medium shadow */
    md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    /** Large shadow */
    lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    /** Extra large shadow */
    xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    /** 2x extra large shadow */
    '2xl':
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    /** 3x extra large shadow */
    '3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },

  // =================================================================
  // ** Z-Index Tokens **
  // Used for z-index values.
  // =================================================================

  'z-index': {
    /** Auto z-index */
    auto: 'auto',
    /** Z-index 0 */
    '0': '0',
    /** Z-index 10 */
    '10': '10',
    /** Z-index 20 */
    '20': '20',
    /** Z-index 30 */
    '30': '30',
    /** Z-index 40 */
    '40': '40',
    /** Z-index 50 */
    '50': '50',
    /** Dropdown z-index */
    dropdown: '1000',
    /** Sticky z-index */
    sticky: '1020',
    /** Fixed z-index */
    fixed: '1030',
    /** Overlay z-index */
    overlay: '1040',
    /** Modal z-index */
    modal: '1050',
    /** Modal backdrop z-index */
    'modal-backdrop': '1040',
    /** Popover z-index */
    popover: '1060',
    /** Tooltip z-index */
    tooltip: '1070',
  },
}

// =========================================================================
//
// UTILITY FUNCTIONS
//
// =========================================================================

/**
 * Retrieves a token value from the design token system.
 * @param path - A dot-separated path to the token (e.g., 'color.background.primary').
 * @param theme - The theme to use ('dark' or 'light'). Defaults to 'dark'.
 * @returns The token value.
 * @throws If the token path is invalid.
 */
export function getToken(
  path: string,
  theme: 'dark' | 'light' = 'dark'
): string {
  const tokenStore = theme === 'light' ? lightThemeTokens : tokens
  const keys = path.split('.')
  let current: any = tokenStore

  for (const key of keys) {
    current = current?.[key]
    if (current === undefined) {
      throw new Error(`Design token not found: ${path}`)
    }
  }

  if (typeof current !== 'string') {
    throw new Error(
      `Invalid token path: ${path}. Path does not resolve to a string value.`
    )
  }

  return current
}
