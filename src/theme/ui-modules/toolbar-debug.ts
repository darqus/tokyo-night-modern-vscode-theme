import { palette } from '../palette/index'

/**
 * Toolbar & Debug UI элементы
 * Эти токены отвечают за оформление панели инструментов и отладки в VS Code
 */
export const toolbarDebugColors = {
  'debugConsole.errorForeground': palette.error,
  'debugConsole.infoForeground': palette.text,
  'debugConsole.sourceForeground': palette.text,
  'debugConsole.warningForeground': palette.warning,
  'debugConsoleInputIcon.foreground': palette.info,
  'debugTokenExpression.boolean': palette.warning,
  'debugTokenExpression.error': palette.error,
  'debugTokenExpression.name': palette.cyan,
  'debugTokenExpression.number': palette.warning,
  'debugTokenExpression.string': palette.green,
  'debugTokenExpression.value': palette.text,
  'debugToolBar.background': palette.backgrounds.secondary,
  'debugView.stateLabelBackground': palette.backgrounds.secondary,
  'debugView.stateLabelForeground': palette.text,
}
