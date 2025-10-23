import { palette } from '../../palette'

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
    'sideBar.border': bg.darker,
    'sideBarTitle.foreground': fg.medium,
    'sideBarSectionHeader.background': bg.main,
    'sideBarSectionHeader.foreground': fg.brighter,
    'sideBarSectionHeader.border': bg.darker,
    'sideBar.dropBackground': bg.lighter,
  }
}
