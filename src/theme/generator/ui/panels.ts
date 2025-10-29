import { palette } from '../../palette'
import { darken } from '../../utils/color'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, blue, purple } = palette

  return {
    'panel.background': bg.main,
    'panel.border': bg.lighter,
    'panelTitle.activeForeground': fg.brighter,
    'panelTitle.inactiveForeground': fg.medium,
    'panelTitle.activeBorder': blue.light,
    'panelInput.border': bg.lighter,
    'panelStickyScroll.background': bg.light,
    'statusBar.foreground': fg.bright,
    'statusBar.background': bg.lighter,
    'statusBar.border': bg.lighter,
    'statusBar.focusBorder': bg.lighter,
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': darken(purple.bright, 0.8),
    'statusBar.debuggingForeground': fg.medium,
    'statusBarItem.activeBackground': bg.darker,
    'statusBarItem.hoverBackground': bg.main,
    'statusBarItem.prominentBackground': blue.primary,
    'statusBarItem.prominentHoverBackground': bg.main,
    'statusBarItem.focusBorder': bg.lighter,
    'statusBarItem.remoteBackground': blue.primary,
    'titleBar.activeForeground': fg.medium,
    'titleBar.inactiveForeground': fg.medium,
    'titleBar.activeBackground': bg.main,
    'titleBar.inactiveBackground': bg.darker,
    'titleBar.border': bg.lighter,
  }
}
