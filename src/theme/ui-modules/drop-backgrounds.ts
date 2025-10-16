import { foundationColors } from '../palette/foundation/colors'

/**
 * Drop Backgrounds UI элементы
 * Эти токены отвечают за оформление фона при перетаскивании в VS Code
 */
export const dropBackgroundColors = {
  // Drop Backgrounds
  'editorGroup.dropBackground': foundationColors.blue500 + '33', // Фон при перетаскивании в группу редакторов
  'list.dropBackground': foundationColors.blue500 + '33', // Фон при перетаскивании в список
  'panelSection.dropBackground': foundationColors.blue500 + '33', // Фон при перетаскивании в секцию панели
  'terminal.dropBackground': foundationColors.blue500 + '33', // Фон при перетаскивании в терминал
}
