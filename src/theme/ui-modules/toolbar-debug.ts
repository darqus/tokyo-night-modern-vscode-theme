import { palette } from '../palette'

/**
 * Toolbar & Debug UI элементы
 * Эти токены отвечают за оформление панели инструментов и отладки в VS Code
 */
export const toolbarDebugColors = {
  'debugConsole.errorForeground': palette.redDark2,
  'debugConsole.infoForeground': palette.foregroundAlt3,
  'debugConsole.sourceForeground': palette.foregroundAlt3,
  'debugConsole.warningForeground': palette.yellowDark,
  'debugConsoleInputIcon.foreground': palette.cyanDark,
  'debugTokenExpression.boolean': palette.orange,
  'debugTokenExpression.error': palette.redDark2,
  'debugTokenExpression.name': palette.cyan,
  'debugTokenExpression.number': palette.orange,
  'debugTokenExpression.string': palette.green,
  'debugTokenExpression.value': palette.foregroundAlt2,
  'debugToolBar.background': palette.backgroundAlt,
  'debugView.stateLabelBackground': palette.backgroundAlt,
  'debugView.stateLabelForeground': palette.foregroundAlt3,
}
