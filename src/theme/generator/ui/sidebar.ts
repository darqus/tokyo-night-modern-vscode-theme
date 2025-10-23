import { palette } from '../../palette'
import { alpha } from '../../utils'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg, blue, special, ui, elements } = palette

  return {
    'activityBar.background': bg.main,
    'activityBar.foreground': fg.medium,
    'activityBar.inactiveForeground': special.inactive,
    'activityBar.border': bg.main,
    'activityBarBadge.background': blue.primary,
    'activityBarBadge.foreground': ui.white,
    'activityBarTop.foreground': fg.medium,
    'activityBarTop.inactiveForeground': special.inactive,
    'tree.indentGuidesStroke': elements.indentGuides,
    'sideBar.foreground': fg.medium,
    'sideBar.background': bg.main,
    'sideBar.border': alpha(special.border, 0.5),
    'sideBarTitle.foreground': fg.medium,
    'sideBarSectionHeader.background': bg.main,
    'sideBarSectionHeader.foreground': fg.brighter,
    'sideBarSectionHeader.border': alpha(special.border, 0.5),
    'sideBar.dropBackground': bg.lighter,
  }
}
