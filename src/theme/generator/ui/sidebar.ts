import { palette } from '../../palette'
import { lighten } from '../../utils'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg, ui, elements, special } = palette

  return {
    'activityBar.background': bg.light,
    'activityBar.foreground': fg.bright,
    'activityBar.inactiveForeground': fg.muted,
    'activityBar.border': lighten(bg.light, 0.02),
    'activityBarBadge.background': special.badge,
    'activityBarBadge.foreground': ui.white,
    'activityBarTop.foreground': fg.medium,
    'activityBarTop.inactiveForeground': special.inactive,
    'tree.indentGuidesStroke': elements.indentGuides,
    'sideBar.foreground': fg.medium,
    'sideBar.background': bg.darkest,
    'sideBar.border': lighten(bg.darkest, 0.02),
    'sideBarTitle.foreground': fg.medium,
    'sideBarSectionHeader.background': bg.main,
    'sideBarSectionHeader.foreground': fg.brighter,
    'sideBarSectionHeader.border': lighten(bg.main, 0.02),
    'sideBar.dropBackground': bg.lighter,
  }
}
