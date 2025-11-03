import { palette } from '../../palette'
import { lighten, mix } from '../../utils'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg, ui, blue } = palette

  return {
    'activityBar.background': mix(bg.dark, blue.dark, 0.1),
    'activityBar.foreground': fg.light,
    'activityBar.inactiveForeground': fg.dark,
    'activityBar.activeBorder': blue.dark,
    'activityBar.activeBackground': mix(bg.dark, blue.dark, 0.1),
    'activityBar.border': lighten(mix(bg.dark, blue.dark, 0.1), 0.02),
    'activityBarBadge.background': ui.badge,
    'activityBarBadge.foreground': ui.white,
    'activityBarTop.foreground': fg.main,
    'activityBarTop.inactiveForeground': bg.light,
    'tree.indentGuidesStroke': lighten(bg.main, 0.08),
    'sideBar.foreground': fg.main,
    'sideBar.background': bg.dark,
    'sideBar.border': lighten(bg.dark, 0.02),
    'sideBarTitle.foreground': fg.main,
    'sideBarSectionHeader.background': bg.main,
    'sideBarSectionHeader.foreground': fg.light,
    'sideBarSectionHeader.border': lighten(bg.main, 0.02),
    'sideBar.dropBackground': bg.light,
  }
}
