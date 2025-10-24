import { palette } from '../../palette'
import { ensureContrast } from '../../utils/contrast'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg, ui, elements, border, special } = palette

  return {
    'activityBar.background': bg.main,
    'activityBar.foreground': ensureContrast(
      palette.accessibility.contrast.medium,
      bg.main,
      4.5
    ),
    'activityBar.inactiveForeground': ensureContrast(fg.medium, bg.main, 4.5),
    'activityBar.border': ensureContrast(border.ui, bg.main, 2.0),
    'activityBarBadge.background': ensureContrast(special.badge, bg.main, 3.0),
    'activityBarBadge.foreground': ensureContrast(
      ui.badgeForeground,
      special.badge,
      4.5
    ),
    'activityBarTop.foreground': ensureContrast(
      palette.accessibility.contrast.medium,
      bg.main,
      4.5
    ),
    'activityBarTop.inactiveForeground': ensureContrast(
      fg.medium,
      bg.main,
      4.5
    ),
    'tree.indentGuidesStroke': ensureContrast(
      elements.indentGuides,
      bg.main,
      1.5
    ),
    'sideBar.foreground': ensureContrast(fg.medium, bg.main, 4.5),
    'sideBar.background': bg.main,
    'sideBar.border': ensureContrast(border.ui, bg.main, 2.0),
    'sideBarTitle.foreground': ensureContrast(fg.medium, bg.main, 4.5),
    'sideBarSectionHeader.background': bg.main,
    'sideBarSectionHeader.foreground': ensureContrast(
      fg.brighter,
      bg.main,
      4.5
    ),
    'sideBarSectionHeader.border': ensureContrast(border.ui, bg.main, 2.0),
    'sideBar.dropBackground': bg.lighter,
  }
}
