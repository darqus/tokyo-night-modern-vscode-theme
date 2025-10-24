import { palette } from '../../palette'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, special, border } = palette

  return {
    'panel.background': bg.main,
    'panel.border': border.ui,
    'panelTitle.activeForeground': fg.medium,
    'panelTitle.inactiveForeground': special.indentActive,
    'panelTitle.activeBorder': bg.main,
    'panelInput.border': border.ui,
    'statusBar.foreground': fg.medium,
    'statusBar.background': bg.main,
    'statusBar.border': border.ui,
    'statusBar.focusBorder': border.ui,
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': bg.main,
    'statusBar.debuggingForeground': fg.medium,
    'statusBarItem.activeBackground': bg.darker,
    'statusBarItem.hoverBackground': palette.interactive.selected,
    'statusBarItem.prominentBackground': bg.darker,
    'statusBarItem.prominentHoverBackground': palette.interactive.selected,
    'statusBarItem.focusBorder': border.ui,
    'titleBar.activeForeground': fg.medium,
    'titleBar.inactiveForeground': fg.medium,
    'titleBar.activeBackground': bg.main,
    'titleBar.inactiveBackground': bg.main,
    'titleBar.border': border.ui,
  }
}
