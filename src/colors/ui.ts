import { palette } from '../palette'
import { withAlpha } from '../utils/color'

/**
 * VS Code user interface colors
 * Includes basic elements, buttons, input fields, etc.
 */
export function buildUIColors(): Record<string, string> {
  return {
    // Basic colors
    foreground: palette.fg.muted,
    descriptionForeground: '#515670',
    disabledForeground: palette.fg.inactive,
    focusBorder: withAlpha(palette.fg.subtle, '33'),
    errorForeground: '#515670',

    // Shadows and effects
    'widget.shadow': withAlpha(palette.ansi.white, '00'),
    'scrollbar.shadow': withAlpha(palette.ansi.black, '33'),

    // Icons and badges
    'badge.background': withAlpha(palette.fg.muted, '30'),
    'badge.foreground': '#c8d2f0',
    'icon.foreground': palette.fg.soft,

    // Windows
    'window.activeBorder': '#0d0f17',
    'window.inactiveBorder': '#0d0f17',
    'sash.hoverBorder': '#29355a',

    // Buttons
    'button.background': withAlpha(palette.brand.primary, 'dd'),
    'button.hoverBackground': withAlpha(palette.brand.primary, 'aa'),
    'button.foreground': '#ffffff',

    // Progress bar
    'progressBar.background': palette.brand.primary,
  }
}
