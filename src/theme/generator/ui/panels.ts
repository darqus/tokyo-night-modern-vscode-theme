import { palette } from '../../palette'
import { darken, lighten } from '../../utils/color'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, blue, purple } = palette

  return {
    'panel.background': bg.main,
    'panel.border': lighten(bg.light, 0.04),
    'panelTitle.activeForeground': fg.brighter,
    'panelTitle.inactiveForeground': fg.medium,
    'panelTitle.activeBorder': blue.light,
    'panelInput.border': lighten(bg.light, 0.04),
    'panelStickyScroll.background': bg.light,
    'statusBar.foreground': fg.medium,
    'statusBar.background': bg.lighter,
    'statusBar.border': lighten(bg.light, 0.04),
    'statusBar.focusBorder': lighten(bg.light, 0.04),
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': darken(purple.bright, 0.8),
    'statusBar.debuggingForeground': fg.medium,
    'statusBarItem.activeBackground': bg.darker,
    'statusBarItem.hoverBackground': bg.main,
    'statusBarItem.prominentBackground': blue.primary,
    'statusBarItem.prominentHoverBackground': bg.main,
    'statusBarItem.focusBorder': lighten(bg.light, 0.04),
    'statusBarItem.remoteBackground': blue.primary,
    'titleBar.activeForeground': fg.medium,
    'titleBar.inactiveForeground': fg.medium,
    'titleBar.activeBackground': bg.main,
    'titleBar.inactiveBackground': bg.darker,
    'titleBar.border': lighten(bg.light, 0.04),
  }
}
