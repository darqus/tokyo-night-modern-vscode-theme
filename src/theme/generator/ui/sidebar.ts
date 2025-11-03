import { palette } from '../../palette'
import { lighten } from '../../utils'

export function generateSidebarColors(): Record<string, string> {
  const { bg, fg, ui, blue } = palette

  return {
    'activityBar.background': bg.dark,
    'activityBar.foreground': fg.light,
    'activityBar.inactiveForeground': fg.dark,
    'activityBar.activeBorder': blue.main,
    'activityBar.activeBackground': lighten(bg.dark, 0.03),
    'activityBar.border': lighten(bg.dark, 0.02),
    'activityBarBadge.background': ui.badge,
    'activityBarBadge.foreground': ui.white,
    'activityBarTop.foreground': fg.main,
    'activityBarTop.inactiveForeground': fg.dark,
    'tree.indentGuidesStroke': lighten(bg.main, 0.08),
    'sideBar.foreground': fg.main,
    'sideBar.background': lighten(bg.dark, 0.02),
    'sideBar.border': lighten(bg.dark, 0.04),
    'sideBarTitle.foreground': fg.light,
    'sideBarSectionHeader.background': lighten(bg.dark, 0.04),
    'sideBarSectionHeader.foreground': fg.light,
    'sideBarSectionHeader.border': lighten(bg.dark, 0.06),
    'sideBar.dropBackground': bg.light,
  }
}
