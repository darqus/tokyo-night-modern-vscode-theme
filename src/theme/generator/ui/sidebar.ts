import { palette } from '../../palette'
import { lighten } from '../../utils/color'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg, ui, elements, special } = palette

  return {
    'activityBar.background': bg.light,
    'activityBar.foreground': fg.bright,
    'activityBar.inactiveForeground': special.inactive,
    'activityBar.border': lighten(bg.light, 0.04),
    'activityBarBadge.background': special.badge,
    'activityBarBadge.foreground': ui.white,
    'activityBarTop.foreground': fg.medium,
    'activityBarTop.inactiveForeground': special.inactive,
    'tree.indentGuidesStroke': elements.indentGuides,
    'sideBar.foreground': fg.medium,
    'sideBar.background': bg.darkest,
    'sideBar.border': lighten(bg.light, 0.04),
    'sideBarTitle.foreground': fg.medium,
    'sideBarSectionHeader.background': bg.main,
    'sideBarSectionHeader.foreground': fg.brighter,
    'sideBarSectionHeader.border': lighten(bg.light, 0.04),
    'sideBar.dropBackground': bg.lighter,
  }
}
