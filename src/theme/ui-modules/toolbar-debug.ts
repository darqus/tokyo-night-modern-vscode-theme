import { palette } from '../palette/index'

/**
 * Toolbar & Debug UI элементы
 * Эти токены отвечают за оформление панели инструментов и отладки в VS Code
 */
export const toolbarDebugColors = {
  'debugConsole.errorForeground': palette.error, // Замена для redDark2
  'debugConsole.infoForeground': palette.text, // Замена для foregroundAlt3
  'debugConsole.sourceForeground': palette.text, // Замена для foregroundAlt3
  'debugConsole.warningForeground': palette.warning, // Замена для yellowDark
  'debugConsoleInputIcon.foreground': palette.info, // Замена для cyanDark
  'debugTokenExpression.boolean': palette.warning, // Замена для orange
  'debugTokenExpression.error': palette.error, // Замена для redDark2
  'debugTokenExpression.name': palette.cyan,
  'debugTokenExpression.number': palette.warning, // Замена для orange
  'debugTokenExpression.string': palette.green,
  'debugTokenExpression.value': palette.text, // Замена для foregroundAlt2
  'debugToolBar.background': palette.backgrounds.secondary, // Замена для backgroundAlt
  'debugView.stateLabelBackground': palette.backgrounds.secondary, // Замена для backgroundAlt
  'debugView.stateLabelForeground': palette.text, // Замена для foregroundAlt3
}
