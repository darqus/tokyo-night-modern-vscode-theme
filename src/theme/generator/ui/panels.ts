import { c, colorRules } from '../../utils/color-builder.js'

export function generatePanelColors(): Record<string, string> {
  return colorRules()
    .add('panelInput.border', c.neutral.main)
    .add('panelStickyScroll.background', c.bg.dark)
    .addGroup('panel', {
      background: c.bg.main,
      border: c.neutral.main,
      dropBorder: c.blue.light,
      titleSeparatorBorder: c.neutral.main,
      activeTitleForeground: c.fg.bright,
      activeTitleBorder: c.blue.main,
      inactiveTitleForeground: c.fg.main,
      inputBorder: c.neutral.main,
      sectionHeaderBackground: c.bg.dark,
      sectionHeaderForeground: c.fg.bright,
      sectionHeaderBorder: c.neutral.main,
      stickyScrollBackground: c.bg.dark,
      stickyScrollBorder: c.neutral.main,
      outline: c.blue.main,
    })
    .addGroup('panelTitle', {
      activeForeground: c.fg.bright,
      activeBorder: c.blue.main,
      inactiveForeground: c.fg.main,
      inactiveBorder: c.neutral.main,
    })
    .addGroup('statusBar', {
      foreground: c.fg.main,
      background: c.bg.dark,
      border: c.neutral.main,
      focusBorder: c.blue.main,
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
      itemInactiveForeground: c.fg.main,
      itemInactiveBackground: c.bg.dark,
      itemHoverForeground: c.fg.bright,
      itemActiveBorder: c.blue.main,
      itemFocusBorder: c.blue.main,
      itemSecondaryForeground: c.fg.main,
      itemErrorBackground: c.red.dark,
      itemErrorForeground: c.red.main,
      itemWarningBackground: c.yellow.dark,
      itemWarningForeground: c.yellow.main,
    })
    .addGroup('statusBarItem', {
      activeBackground: c.bg.main,
      hoverBackground: c.bg.dark,
      focusBorder: c.blue.main,
      prominentForeground: c.fg.main,
      prominentBackground: c.bg.light,
      prominentHoverBackground: c.bg.main,
      remoteBackground: c.blue.main,
      remoteForeground: c.ui.white,
      errorBackground: c.red.main,
      errorForeground: c.ui.white,
    })
    .addGroup('titleBar', {
      activeForeground: c.fg.main,
      activeBackground: c.bg.dark,
      inactiveForeground: c.fg.dark,
      inactiveBackground: c.bg.dark,
      border: c.neutral.main,
    })
    .addGroup('menubar', {
      selectionForeground: c.fg.bright,
      selectionBackground: c.bg.dark,
      selectionBorder: c.blue.main,
      separatorBackground: c.neutral.main,
    })
    .addGroup('menu', {
      foreground: c.fg.main,
      background: c.bg.dark,
      selectionForeground: c.fg.bright,
      selectionBackground: c.blue.main,
      selectionBorder: c.blue.main,
      separatorBackground: c.neutral.main,
      border: c.neutral.main,
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
      shadow: '#00000033',
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
    .build()
}
