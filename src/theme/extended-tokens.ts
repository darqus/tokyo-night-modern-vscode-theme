/**
 * Extended Tokens - Additional token categories beyond color
 * 
 * This file defines additional token categories such as spacing, typography,
 * and other design system properties to extend the design token system.
 */

// Spacing tokens - using a consistent scale based on 4px increments
export const spaceTokens = {
  // Spacing scale based on 4px increments
  space: {
    /** 0px - No spacing */
    none: '0px',
    /** 4px - Extra small spacing */
    'xs': '4px',
    /** 8px - Small spacing */
    'sm': '8px',
    /** 12px - Medium small spacing */
    'md-sm': '12px',
    /** 16px - Medium spacing */
    'md': '16px',
    /** 20px - Medium large spacing */
    'md-lg': '20px',
    /** 24px - Large spacing */
    'lg': '24px',
    /** 32px - Extra large spacing */
    'xl': '32px',
    /** 40px - Extra extra large spacing */
    '2xl': '40px',
    /** 48px - Extra extra extra large spacing */
    '3xl': '48px',
    /** 64px - Huge spacing */
    '4xl': '64px',
  }
};

// Typography tokens
export const typographyTokens = {
  typography: {
    // Font families
    'font-family': {
      /** Primary font family for UI elements */
      primary: "'Segoe WPC', 'Segoe UI', 'HelveticaNeue-Light', 'Ubuntu', 'Droid Sans', sans-serif",
      /** Font family for code elements */
      code: "Consolas, 'Courier New', monospace",
      /** Font family for headings */
      heading: "'Segoe WPC', 'Segoe UI', 'HelveticaNeue-Light', 'Ubuntu', 'Droid Sans', sans-serif",
    },

    // Font sizes
    'font-size': {
      /** Extra large font size for main headings */
      'xl': '20px',
      /** Large font size for headings */
      'lg': '16px',
      /** Medium font size for UI elements */
      'md': '13px',
      /** Small font size for secondary text */
      'sm': '12px',
      /** Extra small font size for fine details */
      'xs': '11px',
    },

    // Font weights
    'font-weight': {
      /** Thin font weight */
      thin: '100',
      /** Extra light font weight */
      'extra-light': '200',
      /** Light font weight */
      light: '300',
      /** Normal font weight */
      normal: '400',
      /** Medium font weight */
      medium: '500',
      /** Semi bold font weight */
      'semi-bold': '600',
      /** Bold font weight */
      bold: '700',
      /** Extra bold font weight */
      'extra-bold': '800',
      /** Black font weight */
      black: '900',
    },

    // Line heights
    'line-height': {
      /** Extra tight line height */
      'xs': '1',
      /** Tight line height */
      'sm': '1.25',
      /** Normal line height */
      'md': '1.5',
      /** Loose line height */
      'lg': '1.75',
      /** Extra loose line height */
      'xl': '2',
    },

    // Letter spacing
    'letter-spacing': {
      /** Extra tight letter spacing */
      'tight-xl': '-0.04em',
      /** Tight letter spacing */
      'tight-lg': '-0.03em',
      /** Medium tight letter spacing */
      'tight-md': '-0.02em',
      /** Small tight letter spacing */
      'tight-sm': '-0.01em',
      /** Normal letter spacing */
      'normal': '0',
      /** Small loose letter spacing */
      'loose-sm': '0.01em',
      /** Medium loose letter spacing */
      'loose-md': '0.02em',
      /** Loose letter spacing */
      'loose-lg': '0.03em',
      /** Extra loose letter spacing */
      'loose-xl': '0.04em',
    },
  }
};

// Border tokens
export const borderTokens = {
  border: {
    // Border widths
    'width': {
      /** No border */
      'none': '0',
      /** Thin border */
      'thin': '1px',
      /** Medium border */
      'md': '2px',
      /** Thick border */
      'thick': '3px',
    },

    // Border styles
    'style': {
      /** Solid border */
      'solid': 'solid',
      /** Dashed border */
      'dashed': 'dashed',
      /** Dotted border */
      'dotted': 'dotted',
      /** Double border */
      'double': 'double',
    },
  }
};

// Radius tokens
export const radiusTokens = {
  radius: {
    /** No radius - sharp corners */
    'none': '0px',
    /** Extra small radius */
    'xs': '2px',
    /** Small radius */
    'sm': '4px',
    /** Medium radius */
    'md': '6px',
    /** Large radius */
    'lg': '8px',
    /** Extra large radius */
    'xl': '12px',
    /** Full radius - pill shape */
    'full': '9999px',
  }
};

// Shadow tokens
export const shadowTokens = {
  shadow: {
    /** No shadow */
    'none': 'none',
    /** Small inner shadow */
    'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    /** Inner shadow */
    'inner': 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    /** Large inner shadow */
    'inner-lg': 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.15)',
    /** Small shadow */
    'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    /** Medium shadow */
    'md': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    /** Large shadow */
    'lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    /** Extra large shadow */
    'xl': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    /** 2x large shadow */
    '2xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    /** 3x large shadow */
    '3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  }
};

// Z-index tokens
export const zIndexTokens = {
  'z-index': {
    /** Auto z-index */
    'auto': 'auto',
    /** Zero z-index */
    '0': '0',
    /** Low z-index */
    '10': '10',
    /** Medium z-index */
    '20': '20',
    /** High z-index */
    '30': '30',
    /** Higher z-index */
    '40': '40',
    /** Highest z-index */
    '50': '50',
    /** Dropdown z-index */
    'dropdown': '1000',
    /** Sticky z-index */
    'sticky': '1020',
    /** Fixed z-index */
    'fixed': '1030',
    /** Overlay z-index */
    'overlay': '1040',
    /** Modal z-index */
    'modal': '1050',
    /** Modal backdrop z-index */
    'modal-backdrop': '1040',
    /** Popover z-index */
    'popover': '1060',
    /** Tooltip z-index */
    'tooltip': '1070',
  }
};

// Combined extended tokens
export const extendedTokens = {
  ...spaceTokens,
  ...typographyTokens,
  ...borderTokens,
  ...radiusTokens,
  ...shadowTokens,
  ...zIndexTokens,
};