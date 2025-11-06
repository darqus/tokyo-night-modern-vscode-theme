import { alpha, darken, lighten, mix } from '../../utils/color.js'
import { c, colorRules } from '../../utils/color-builder.js'
import {
  ADJUST,
  borderColor,
  MIX_RATIO,
  OPACITY,
} from '../../utils/color-helpers.js'

export const generatePanelColors = (): Record<string, string> => {
  const { bg, fg, purple, blue } = c

  return colorRules()
    .addGroup('panel', {
      background: darken(bg.main, ADJUST.TINY),
      border: borderColor(bg.main, blue.main),
    })
    .add('panelInput.border', lighten(bg.main, ADJUST.TINY))
    .add('panelStickyScroll.background', bg.light)
    .addGroup('panelTitle', {
      activeForeground: fg.dark,
      inactiveForeground: darken(fg.dark, ADJUST.STRONG),
      activeBorder: blue.main,
    })
    .addGroup('statusBar', {
      foreground: fg.dark,
      background: bg.dark,
      border: lighten(bg.dark, ADJUST.TINY),
      focusBorder: blue.main,
      noFolderBackground: bg.dark,
      debuggingBackground: mix(purple.dark, bg.dark, MIX_RATIO.BALANCED),
      debuggingForeground: fg.dark,
    })
    .addGroup('statusBarItem', {
      activeBackground: alpha(blue.main, OPACITY.VERY_STRONG),
      hoverBackground: alpha(blue.main, OPACITY.SUBTLE),
      prominentBackground: alpha(blue.main, OPACITY.VERY_STRONG),
      prominentHoverBackground: alpha(blue.main, OPACITY.MEDIUM),
      focusBorder: blue.main,
      remoteBackground: alpha(blue.main, OPACITY.VERY_STRONG),
      remoteHoverForeground: fg.bright,
    })
    .addGroup('titleBar', {
      activeForeground: fg.dark,
      inactiveForeground: darken(fg.dark, ADJUST.LIGHT),
      activeBackground: bg.main,
      inactiveBackground: darken(bg.main, ADJUST.SLIGHT),
      border: lighten(bg.main, ADJUST.TINY),
    })
    .build()
}
