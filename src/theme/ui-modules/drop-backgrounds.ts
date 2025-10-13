import { palette } from '../palette/index'

/**
 * Drop Backgrounds UI элементы
 * Эти токены отвечают за оформление фона при перетаскивании в VS Code
 */
export const dropBackgroundColors = {
  // Drop Backgrounds
  'editorGroup.dropBackground': palette.special.highlight + '33', // Фон при перетаскивании в группу редакторов
  'list.dropBackground': palette.special.highlight + '33', // Фон при перетаскивании в список
  'panelSection.dropBackground': palette.special.highlight + '33', // Фон при перетаскивании в секцию панели
  'terminal.dropBackground': palette.special.highlight + '33', // Фон при перетаскивании в терминал
}
