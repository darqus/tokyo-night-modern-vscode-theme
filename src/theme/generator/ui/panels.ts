import { palette } from '../../palette/index.js'
import { alpha, darken, lighten, mix } from '../../utils/color.js'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, purple, neutral, ui } = palette

  return {
    'panel.background': darken(bg.main, 0.02),
    'panel.activeBackground': mix(bg.main, fg.dark, 0.05),
    'panel.hoverBackground': alpha(bg.main, 0.92),
    'panel.shadow': alpha(bg.dark, 0.12),
    'panel.border': lighten(bg.main, 0.02),
    'panelTitle.activeForeground': fg.dark,
    'panelTitle.inactiveForeground': darken(fg.dark, 0.5),
    'panelTitle.activeBorder': purple.main,
    'panelInput.border': lighten(bg.main, 0.02),
    'panelStickyScroll.background': bg.light,
    'statusBar.foreground': fg.dark,
    'statusBar.background': bg.dark,
    'statusBar.border': lighten(bg.dark, 0.02),
    'statusBar.focusBorder': ui.badge,
    'statusBar.noFolderBackground': bg.dark,
    'statusBar.debuggingBackground': mix(purple.dark, bg.dark, 0.5),
    'statusBar.debuggingForeground': fg.dark,
    'statusBarItem.activeBackground': lighten(bg.dark, 0.05),
    'statusBarItem.hoverBackground': mix(bg.dark, neutral.dark, 0.15),
    'statusBarItem.prominentBackground': purple.dark,
    'statusBarItem.prominentHoverBackground': purple.main,
    'statusBarItem.focusBorder': ui.badge,
    'statusBarItem.remoteBackground': purple.dark,
    'titleBar.activeForeground': fg.dark,
    'titleBar.inactiveForeground': darken(fg.dark, 0.5),
    'titleBar.activeBackground': bg.main,
    'titleBar.hoverBackground': alpha(bg.main, 0.96),
    'titleBar.shadow': alpha(bg.dark, 0.1),
    'titleBar.inactiveBackground': darken(bg.main, 0.03),
    'titleBar.border': lighten(bg.main, 0.02),
  }
}
