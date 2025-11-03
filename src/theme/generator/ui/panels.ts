import { palette } from '../../palette'
import { darken, lighten, mix } from '../../utils/color'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, blue, purple } = palette

  return {
    'panel.background': bg.main,
    'panel.border': lighten(bg.main, 0.02),
    'panelTitle.activeForeground': fg.light,
    'panelTitle.inactiveForeground': fg.main,
    'panelTitle.activeBorder': blue.light,
    'panelInput.border': lighten(bg.main, 0.02),
    'panelStickyScroll.background': bg.light,
    'statusBar.foreground': fg.light,
    'statusBar.background': mix(bg.dark, blue.dark, 0.25),
    'statusBar.border': lighten(mix(bg.dark, blue.dark, 0.25), 0.02),
    'statusBar.focusBorder': lighten(mix(bg.dark, blue.dark, 0.25), 0.02),
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': darken(purple.light, 0.8),
    'statusBar.debuggingForeground': fg.main,
    'statusBarItem.activeBackground': bg.dark,
    'statusBarItem.hoverBackground': mix(bg.dark, blue.dark, 0.45),
    'statusBarItem.prominentBackground': blue.dark,
    'statusBarItem.prominentHoverBackground': bg.main,
    'statusBarItem.focusBorder': lighten(bg.light, 0.02),
    'statusBarItem.remoteBackground': blue.dark,
    'titleBar.activeForeground': fg.main,
    'titleBar.inactiveForeground': fg.main,
    'titleBar.activeBackground': bg.main,
    'titleBar.inactiveBackground': bg.dark,
    'titleBar.border': lighten(bg.main, 0.02),
  }
}
