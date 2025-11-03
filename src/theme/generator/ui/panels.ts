import { palette } from '../../palette'
import { darken, lighten, mix } from '../../utils/color'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, purple, blue, ui } = palette

  return {
    'panel.background': darken(bg.main, 0.02),
    'panel.border': lighten(bg.main, 0.02),
    'panelTitle.activeForeground': fg.light,
    'panelTitle.inactiveForeground': fg.dark,
    'panelTitle.activeBorder': purple.main,
    'panelInput.border': lighten(bg.main, 0.02),
    'panelStickyScroll.background': bg.light,
    'statusBar.foreground': fg.light,
    'statusBar.background': bg.dark,
    'statusBar.border': lighten(bg.dark, 0.02),
    'statusBar.focusBorder': ui.badge,
    'statusBar.noFolderBackground': bg.dark,
    'statusBar.debuggingBackground': mix(purple.dark, bg.dark, 0.5),
    'statusBar.debuggingForeground': fg.light,
    'statusBarItem.activeBackground': lighten(bg.dark, 0.05),
    'statusBarItem.hoverBackground': mix(bg.dark, blue.dark, 0.15),
    'statusBarItem.prominentBackground': purple.dark,
    'statusBarItem.prominentHoverBackground': purple.main,
    'statusBarItem.focusBorder': ui.badge,
    'statusBarItem.remoteBackground': purple.dark,
    'titleBar.activeForeground': fg.light,
    'titleBar.inactiveForeground': fg.dark,
    'titleBar.activeBackground': bg.main,
    'titleBar.inactiveBackground': darken(bg.main, 0.03),
    'titleBar.border': lighten(bg.main, 0.02),
  }
}
