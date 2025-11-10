import { universalPalette } from '../../palette/index.js'
import { c, colorRules } from '../../utils/color-builder.js'

export function generatePanelColors(): Record<string, string> {
  return colorRules()
    .add('panelInput.border', c.neutral.main)
    .add('panelStickyScroll.background', c.bg.dark)
    .addGroup('panel', {
      background: c.bg.main,
      border: c.neutral.main,
      dropBorder: c.indigo.light,
      titleSeparatorBorder: c.neutral.main,
      activeTitleForeground: c.fg.bright,
      activeTitleBorder: c.indigo.main,
      inactiveTitleForeground: universalPalette.foreground.disabled.dark,
      inputBorder: c.neutral.main,
      sectionHeaderBackground: c.bg.dark,
      sectionHeaderForeground: c.fg.bright,
      sectionHeaderBorder: c.neutral.main,
      stickyScrollBackground: c.bg.dark,
      stickyScrollBorder: c.neutral.main,
      outline: c.indigo.main,
    })
    .addGroup('panelTitle', {
      activeForeground: c.fg.bright,
      activeBorder: c.indigo.main,
      inactiveForeground: universalPalette.foreground.disabled.dark,
      inactiveBorder: c.neutral.main,
    })
    .addGroup('statusBar', {
      foreground: c.fg.main,
      background: c.bg.dark,
      border: c.neutral.main,
      focusBorder: c.indigo.main,
      noFolderBackground: c.bg.dark,
      noFolderForeground: c.fg.main,
      noFolderBorder: c.neutral.main,
      debuggingForeground: c.ui.white,
      debuggingBackground: c.orange.main,
      debuggingBorder: c.orange.light,
      prominentForeground: c.fg.bright,
      prominentBackground: c.bg.light,
      prominentHoverForeground: c.fg.bright,
      prominentHoverBackground: c.bg.main,
      itemActiveBackground: c.bg.main,
      itemHoverBackground: c.bg.dark,
      itemActiveForeground: c.fg.bright,
      itemInactiveForeground: universalPalette.foreground.disabled.dark,
      itemInactiveBackground: c.bg.dark,
      itemHoverForeground: c.fg.bright,
      itemActiveBorder: c.indigo.main,
      itemFocusBorder: c.indigo.main,
      itemSecondaryForeground: c.fg.main,
      itemErrorBackground: c.red.dark,
      itemErrorForeground: c.red.main,
      itemWarningBackground: c.yellow.dark,
      itemWarningForeground: c.yellow.main,
    })
    .addGroup('statusBarItem', {
      activeBackground: c.bg.main,
      hoverBackground: c.bg.dark,
      focusBorder: c.indigo.main,
      prominentForeground: c.fg.main,
      prominentBackground: c.bg.light,
      prominentHoverBackground: c.bg.main,
      remoteBackground: c.indigo.main,
      remoteForeground: c.ui.white,
      errorBackground: c.red.main,
      errorForeground: c.ui.white,
    })
    .addGroup('titleBar', {
      activeForeground: c.fg.main,
      activeBackground: c.bg.dark,
      inactiveForeground: universalPalette.foreground.disabled.dark,
      inactiveBackground: c.bg.dark,
      border: c.neutral.main,
    })
    .addGroup('menubar', {
      selectionForeground: c.fg.bright,
      selectionBackground: c.bg.dark,
      selectionBorder: c.indigo.main,
      separatorBackground: c.neutral.main,
    })
    .addGroup('menu', {
      foreground: c.fg.main,
      background: c.bg.dark,
      selectionForeground: c.fg.bright,
      selectionBackground: c.indigo.main,
      selectionBorder: c.indigo.main,
      separatorBackground: c.neutral.main,
      border: c.neutral.main,
    })
    .addGroup('activityBar', {
      foreground: c.fg.main,
      activeBorder: c.indigo.main,
      activeBackground: c.bg.main,
      activeFocusBorder: c.indigo.main,
      inactiveForeground: universalPalette.foreground.disabled.dark,
      badgeBackground: c.ui.badge,
      badgeForeground: c.ui.white,
      border: c.neutral.main,
      dropBorder: c.indigo.light,
      shadow: c.shadow.main,
    })
    .addGroup('activityBarTop', {
      foreground: c.fg.main,
      background: c.bg.dark,
      border: c.neutral.main,
      activeBorder: c.indigo.main,
      activeBackground: c.bg.main,
      inactiveForeground: c.fg.dark,
      badgeBackground: c.ui.badge,
      badgeForeground: c.ui.white,
    })
    .addGroup('activityBarBadge', {
      foreground: c.ui.white,
      background: c.ui.badge,
    })
    .build()
}
