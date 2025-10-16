import { foundationColors } from '../palette/foundation/colors'

/**
 * Toolbar & Debug UI элементы
 * Эти токены отвечают за оформление панели инструментов и отладки в VS Code
 */
export const toolbarDebugColors = {
  'debugConsole.errorForeground': foundationColors.red500,
  'debugConsole.infoForeground': foundationColors.gray100,
  'debugConsole.sourceForeground': foundationColors.gray100,
  'debugConsole.warningForeground': foundationColors.yellow500,
  'debugConsoleInputIcon.foreground': foundationColors.cyan500,
  'debugTokenExpression.boolean': foundationColors.yellow500,
  'debugTokenExpression.error': foundationColors.red500,
  'debugTokenExpression.name': foundationColors.cyan500,
  'debugTokenExpression.number': foundationColors.yellow500,
  'debugTokenExpression.string': foundationColors.green500,
  'debugTokenExpression.value': foundationColors.gray100,
  'debugToolBar.background': foundationColors.gray800,
  'debugView.stateLabelBackground': foundationColors.gray800,
  'debugView.stateLabelForeground': foundationColors.gray100,
}
