import { c, colorRules } from '../../utils/color-builder.js'

export function generateSidebarColors(): Record<string, string> {
  return colorRules()
    .addGroup('sideBar', {
      background: c.bg.dark,
      foreground: c.fg.main,
      border: c.neutral.main,
      dropBackground: `${c.blue.main}40`,
      shadow: c.shadow.main,
      titleForeground: c.fg.bright,
    })
    .addGroup('sideBarTitle', {
      foreground: c.fg.bright,
      background: c.bg.dark,
    })
    .addGroup('sideBarSectionHeader', {
      background: c.bg.main,
      foreground: c.fg.main,
      border: c.neutral.main,
    })
    .addGroup('sideBarDropBackground', {
      background: `${c.blue.main}40`,
    })
    .addGroup('activityBar', {
      foreground: c.fg.main,
      activeBorder: c.blue.main,
      activeBackground: c.bg.main,
      activeFocusBorder: c.blue.main,
      inactiveForeground: c.fg.dark,
      badgeBackground: c.ui.badge,
      badgeForeground: c.ui.white,
      border: c.neutral.main,
      dropBorder: c.blue.light,
      shadow: c.shadow.main,
    })
    .addGroup('activityBarTop', {
      foreground: c.fg.main,
      background: c.bg.dark,
      border: c.neutral.main,
      activeBorder: c.blue.main,
      activeBackground: c.bg.main,
      inactiveForeground: c.fg.dark,
      badgeBackground: c.ui.badge,
      badgeForeground: c.ui.white,
    })
    .addGroup('activityBarBadge', {
      foreground: c.ui.white,
      background: c.ui.badge,
    })
    .addGroup('remote', {
      foreground: c.blue.light,
      background: c.bg.main,
    })
    .addGroup('remoteExplorer', {
      baseForeground: c.fg.main,
      baseBackground: c.bg.main,
      baseBorder: c.neutral.main,
      folderForegroundColor: c.blue.main,
      folderBackground: c.bg.main,
      folderBorder: c.neutral.main,
    })
    .build()
}
