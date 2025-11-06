import { darken, lighten, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'

export const generateSidebarColors = (): Record<string, string> => {
  const { bg, fg, ui, blue } = c
  const builder = colorRules()

  return builder
    .addGroup('activityBar', {
      background: bg.dark,
      foreground: fg.dark,
      inactiveForeground: mix(darken(fg.dark, 0.4), bg.dark, 0.2),
      activeBorder: blue.main,
      activeBackground: lighten(bg.dark, 0.03),
      border: lighten(bg.dark, 0.02),
    })
    .addGroup('activityBarBadge', {
      background: ui.badge,
      foreground: ui.white,
    })
    .addGroup('activityBarTop', {
      foreground: fg.main,
      inactiveForeground: fg.dark,
    })
    .add('tree.indentGuidesStroke', lighten(bg.main, 0.08))
    .addGroup('sideBar', {
      foreground: fg.main,
      background: lighten(bg.dark, 0.02),
      border: lighten(bg.dark, 0.04),
      dropBackground: bg.light,
    })
    .addGroup('sideBarTitle', {
      foreground: fg.dark,
    })
    .addGroup('sideBarSectionHeader', {
      background: lighten(bg.dark, 0.04),
      foreground: fg.dark,
      border: lighten(bg.dark, 0.06),
    })
    .build()
}
