/// <reference types="node" />
import { palette } from './palette'
import { tokenColors } from './tokenColors'
import { semanticTokenColors } from './semanticTokenColors'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { getBaseColors } from './theme/base'
import { getButtonColors } from './theme/buttons'
import { getInputColors } from './theme/inputs'
import { getActivityBarColors } from './theme/activityBar'
import { getSideBarColors } from './theme/sideBar'
import { getListColors } from './theme/lists'
import { getEditorColors } from './theme/editor'
import { getTabColors } from './theme/tabs'
import { getStatusBarColors } from './theme/statusBar'
import { getTerminalColors } from './theme/terminal'
import { getGitColors } from './theme/git'
import { getNotificationColors } from './theme/notifications'
import { getMenuColors } from './theme/menus'
import { getPeekViewColors } from './theme/peekView'
import { getDiffEditorColors } from './theme/diffEditor'
import { getMergeColors } from './theme/merge'
import { getChartColors } from './theme/charts'
import { getDebugColors } from './theme/debug'
import { getQuickInputColors } from './theme/quickInput'
import { getMiscColors } from './theme/misc'

/**
 * Минимальный генератор на TS. На первом этапе мы просто гарантируем, что можем записать существующий файл темы.
 * В следующих итерациях можно будет постепенно переносить цвета для использования палитры и вспомогательных функций.
 */

const root = path.resolve(__dirname, '..')
const themePath = path.join(root, 'themes', 'tokyo-night-dark-color-theme.json')

export const buildColors = (): Record<string, string> => {
  return {
    ...getBaseColors(),
    ...getButtonColors(),
    ...getInputColors(),
    ...getActivityBarColors(),
    ...getSideBarColors(),
    ...getListColors(),
    ...getEditorColors(),
    ...getTabColors(),
    ...getStatusBarColors(),
    ...getTerminalColors(),
    ...getGitColors(),
    ...getNotificationColors(),
    ...getMenuColors(),
    ...getPeekViewColors(),
    ...getDiffEditorColors(),
    ...getMergeColors(),
    ...getChartColors(),
    ...getDebugColors(),
    ...getQuickInputColors(),
    ...getMiscColors(),
  }
}

const main = () => {
  const original = fs.readFileSync(themePath, 'utf8')
  const theme = JSON.parse(original) as Record<string, any>

  theme.colors = buildColors()
  theme.tokenColors = tokenColors
  theme.semanticTokenColors = semanticTokenColors

  const out = JSON.stringify(theme, null, 2) + '\n'
  fs.writeFileSync(themePath, out, 'utf8')
}

if (require.main === module) {
  main()
}