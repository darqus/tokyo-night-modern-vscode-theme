import { palette } from '../../palette'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg, ui, elements, special, border } = palette

  return {
    'activityBar.background': bg.main,
    'activityBar.foreground': fg.medium,
    'activityBar.inactiveForeground': special.inactive,
    'activityBar.border': border.ui,
    'activityBarBadge.background': special.badge,
    'activityBarBadge.foreground': ui.white,
    'activityBarTop.foreground': fg.medium,
    'activityBarTop.inactiveForeground': special.inactive,
    'tree.indentGuidesStroke': elements.indentGuides,
    'sideBar.foreground': fg.medium,
    'sideBar.background': bg.darkest,
    'sideBar.border': border.ui,
    'sideBarTitle.foreground': fg.medium,
    'sideBarSectionHeader.background': bg.main,
    'sideBarSectionHeader.foreground': fg.brighter,
    'sideBarSectionHeader.border': border.ui,
    'sideBar.dropBackground': bg.lighter,
  }
}
