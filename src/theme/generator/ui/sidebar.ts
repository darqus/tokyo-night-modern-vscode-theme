import { palette } from '../../palette'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg } = palette

  return {
    'activityBar.background': bg.main,
    'activityBar.foreground': fg.medium,
    'activityBar.inactiveForeground': palette.special.inactive,
    'activityBar.border': bg.main,
    'activityBarBadge.background': palette.blue.primary,
    'activityBarBadge.foreground': '#ffffff',
    'activityBarTop.foreground': fg.medium,
    'activityBarTop.inactiveForeground': palette.special.inactive,
    'tree.indentGuidesStroke': '#2b2b3b',
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
