import { palette } from '../../palette'
import { ensureContrast } from '../../utils/contrast'

export function generatePanelColors(): Record<string, string> {
  const { bg, fg, border } = palette

  return {
    'panel.background': bg.main,
    'panel.border': ensureContrast(border.ui, bg.main, 2.0),
    'panelTitle.activeForeground': ensureContrast(
      palette.accessibility.contrast.medium,
      bg.main,
      4.5
    ),
    'panelTitle.inactiveForeground': ensureContrast(fg.medium, bg.main, 4.5),
    'panelTitle.activeBorder': ensureContrast(bg.main, bg.main, 1.5),
    'panelInput.border': ensureContrast(border.ui, bg.main, 2.5),
    'statusBar.foreground': ensureContrast(fg.medium, bg.main, 4.5),
    'statusBar.background': bg.main,
    'statusBar.border': ensureContrast(border.ui, bg.main, 2.0),
    'statusBar.focusBorder': ensureContrast(border.ui, bg.main, 2.0),
    'statusBar.noFolderBackground': bg.main,
    'statusBar.debuggingBackground': bg.main,
    'statusBar.debuggingForeground': ensureContrast(fg.medium, bg.main, 4.5),
    'statusBarItem.activeBackground': ensureContrast(bg.darker, bg.main, 1.5),
    'statusBarItem.hoverBackground': ensureContrast(
      palette.interactive.selected,
      bg.main,
      2.0
    ),
    'statusBarItem.prominentBackground': ensureContrast(
      bg.darker,
      bg.main,
      1.5
    ),
    'statusBarItem.prominentHoverBackground': ensureContrast(
      palette.interactive.selected,
      bg.main,
      2.0
    ),
    'statusBarItem.focusBorder': ensureContrast(border.ui, bg.main, 2.0),
    'titleBar.activeForeground': ensureContrast(
      palette.accessibility.contrast.medium,
      bg.main,
      4.5
    ),
    'titleBar.inactiveForeground': ensureContrast(fg.medium, bg.main, 4.5),
    'titleBar.activeBackground': bg.main,
    'titleBar.inactiveBackground': bg.main,
    'titleBar.border': ensureContrast(border.ui, bg.main, 2.0),
  }
}
