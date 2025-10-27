import { palette } from '../../palette'
import { lighten } from '../../utils/color'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, special } = palette

  return {
    'panel.background': bg.light,
    'panel.border': lighten(bg.light, 0.08),
    'panelTitle.activeForeground': fg.medium,
    'panelTitle.inactiveForeground': special.indentActive,
    'panelTitle.activeBorder': bg.main,
    'panelInput.border': lighten(bg.light, 0.08),
    'statusBar.foreground': fg.medium,
    'statusBar.background': bg.light,
    'statusBar.border': lighten(bg.light, 0.08),
    'statusBar.focusBorder': lighten(bg.light, 0.08),
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': bg.main,
    'statusBar.debuggingForeground': fg.medium,
    'statusBarItem.activeBackground': bg.darker,
    'statusBarItem.hoverBackground': bg.main,
    'statusBarItem.prominentBackground': bg.darker,
    'statusBarItem.prominentHoverBackground': bg.main,
    'statusBarItem.focusBorder': lighten(bg.light, 0.08),
    'titleBar.activeForeground': fg.medium,
    'titleBar.inactiveForeground': fg.medium,
    'titleBar.activeBackground': bg.light,
    'titleBar.inactiveBackground': bg.light,
    'titleBar.border': lighten(bg.light, 0.08),
  }
}
