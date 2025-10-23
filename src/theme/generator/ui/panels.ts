import { palette } from '../../palette'
import { alpha } from '../../utils'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, special } = palette

  return {
    'panel.background': bg.main,
    'panel.border': alpha(special.border, 0.5),
    'panelTitle.activeForeground': fg.medium,
    'panelTitle.inactiveForeground': palette.special.indentActive,
    'panelTitle.activeBorder': bg.main,
    'panelInput.border': bg.main,
    'statusBar.foreground': fg.medium,
    'statusBar.background': bg.main,
    'statusBar.border': alpha(special.border, 0.5),
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': bg.main,
    'statusBar.debuggingForeground': fg.medium,
    'statusBarItem.activeBackground': bg.darker,
    'statusBarItem.hoverBackground': palette.interactive.selected,
    'statusBarItem.prominentBackground': bg.darker,
    'statusBarItem.prominentHoverBackground': palette.interactive.selected,
    'titleBar.activeForeground': fg.medium,
    'titleBar.inactiveForeground': fg.medium,
    'titleBar.activeBackground': bg.main,
    'titleBar.inactiveBackground': bg.main,
    'titleBar.border': alpha(special.border, 0.5),
  }
}
