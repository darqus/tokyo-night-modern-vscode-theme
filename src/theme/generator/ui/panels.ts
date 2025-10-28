import { palette } from '../../palette'
import { lighten } from '../../utils/color'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, blue } = palette

  return {
    'panel.background': bg.light,
    'panel.border': lighten(bg.light, 0.04),
    'panelTitle.activeForeground': fg.brighter,
    'panelTitle.inactiveForeground': fg.medium,
    'panelTitle.activeBorder': blue.light,
    'panelInput.border': lighten(bg.light, 0.04),
    'panelStickyScroll.background': bg.light,
    'statusBar.foreground': fg.medium,
    'statusBar.background': bg.light,
    'statusBar.border': lighten(bg.light, 0.04),
    'statusBar.focusBorder': lighten(bg.light, 0.04),
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': bg.main,
    'statusBar.debuggingForeground': fg.medium,
    'statusBarItem.activeBackground': bg.darker,
    'statusBarItem.hoverBackground': bg.main,
    'statusBarItem.prominentBackground': bg.darker,
    'statusBarItem.prominentHoverBackground': bg.main,
    'statusBarItem.focusBorder': lighten(bg.light, 0.04),
    'titleBar.activeForeground': fg.medium,
    'titleBar.inactiveForeground': fg.medium,
    'titleBar.activeBackground': bg.light,
    'titleBar.inactiveBackground': bg.light,
    'titleBar.border': lighten(bg.light, 0.04),
  }
}
