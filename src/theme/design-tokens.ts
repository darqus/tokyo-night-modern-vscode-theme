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

import { primitiveColors } from './palette/foundation';

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
      /** For placeholder text in input fields. */
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
  },
};

// =========================================================================
//
// LIGHT THEME TOKEN OVERRIDES (EXAMPLE)
//
// =========================================================================

// This is a placeholder to demonstrate how a light theme would be structured.
// The actual values would need to be carefully selected.
export const lightThemeTokens = {
  color: {
    background: {
      primary: primitiveColors.white,
      secondary: primitiveColors.gray50,
      tertiary: primitiveColors.gray100,
      elevated: primitiveColors.white,
      overlay: primitiveColors.gray900,
    },
    text: {
      primary: primitiveColors.gray900,
      secondary: primitiveColors.gray700,
      tertiary: primitiveColors.gray600,
      disabled: primitiveColors.gray400,
      inverse: primitiveColors.white,
      placeholder: primitiveColors.gray500,
    },
    border: {
      default: primitiveColors.gray300,
      subtle: primitiveColors.gray200,
      focus: primitiveColors.blue500,
      error: primitiveColors.red500,
      warning: primitiveColors.yellow600,
      success: primitiveColors.green600,
    },
  },
};

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
export function getToken(path: string, theme: 'dark' | 'light' = 'dark'): string {
  const tokenStore = theme === 'light' ? lightThemeTokens : tokens;
  const keys = path.split('.');
  let current: any = tokenStore;

  for (const key of keys) {
    current = current?.[key];
    if (current === undefined) {
      throw new Error(`Design token not found: ${path}`);
    }
  }

  if (typeof current !== 'string') {
    throw new Error(`Invalid token path: ${path}. Path does not resolve to a string value.`);
  }

  return current;
}