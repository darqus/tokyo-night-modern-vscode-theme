import { palette } from '../../palette'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg } = palette

  return {
    'panel.background': bg.main,
    'panel.border': bg.darker,
    'panelTitle.activeForeground': fg.medium,
    'panelTitle.inactiveForeground': palette.special.indentActive,
    'panelTitle.activeBorder': bg.main,
    'panelInput.border': bg.main,
    'statusBar.foreground': fg.medium,
    'statusBar.background': bg.main,
    'statusBar.border': bg.darker,
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': bg.main,
    'statusBar.debuggingForeground': fg.medium,
    'statusBarItem.activeBackground': bg.darker,
    'statusBarItem.hoverBackground': '#20222c',
    'statusBarItem.prominentBackground': bg.darker,
    'statusBarItem.prominentHoverBackground': '#20222c',
    'titleBar.activeForeground': fg.medium,
    'titleBar.inactiveForeground': fg.medium,
    'titleBar.activeBackground': bg.main,
    'titleBar.inactiveBackground': bg.main,
    'titleBar.border': bg.darker,
  }
}
