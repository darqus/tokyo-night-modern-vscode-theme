import { palette } from '../../palette'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg, ui, elements, special } = palette

  return {
    'activityBar.background': bg.light,
    'activityBar.foreground': fg.bright,
    'activityBar.inactiveForeground': fg.muted,
    'activityBar.border': bg.lighter,
    'activityBarBadge.background': special.badge,
    'activityBarBadge.foreground': ui.white,
    'activityBarTop.foreground': fg.medium,
    'activityBarTop.inactiveForeground': special.inactive,
    'tree.indentGuidesStroke': elements.indentGuides,
    'sideBar.foreground': fg.medium,
    'sideBar.background': bg.darkest,
    'sideBar.border': bg.lighter,
    'sideBarTitle.foreground': fg.medium,
    'sideBarSectionHeader.background': bg.main,
    'sideBarSectionHeader.foreground': fg.brighter,
    'sideBarSectionHeader.border': bg.lighter,
    'sideBar.dropBackground': bg.lighter,
  }
}
