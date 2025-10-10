import { palette } from '../palette'

/**
 * Editor Groups & Panels UI элементы
 * Эти токены отвечают за оформление групп редакторов и панелей в VS Code
 */
export const editorGroupsPanelsColors = {
  // Editor Groups & Panels
  'editorGroupHeader.tabsBackground': palette.backgroundAlt, // Фон заголовка группы редакторов с вкладками
  'editorGroupHeader.noTabsBackground': palette.backgroundAlt, // Фон заголовка группы редакторов без вкладок
  'editorGroupHeader.tabsBorder': palette.border, // Граница вкладок группы редакторов
  'editorGroup.border': palette.border, // Граница группы редакторов
  'editorGroup.emptyBackground': palette.background, // Фон пустой группы редакторов
  'editorGroup.focusedEmptyBorder': palette.blue, // Граница пустой группы редакторов в фокусе
  'panel.background': palette.background, // Фон панели
  'panel.border': palette.border, // Граница панели
  'panelSectionHeader.background': palette.background, // Фон заголовка секции панели
  'panelSectionHeader.foreground': palette.foreground, // Цвет текста заголовка секции панели
  'panelTitle.activeForeground': palette.foreground, // Цвет активного заголовка панели
  'panelTitle.inactiveForeground': palette.foregroundAlt, // Цвет неактивного заголовка панели
  'panelTitle.activeBorder': palette.blue, // Активная граница заголовка панели
  'panelTitle.border': palette.border, // Граница заголовка панели
  'panel.dropBorder': palette.blue, // Граница при перетаскивании на панель
  'panelTitleBadge.background': palette.blueStrong, // Фон значка заголовка панели
  'panelTitleBadge.foreground': palette.white, // Цвет значка заголовка панели
  'panelSection.border': palette.grayDark, // Граница секции панели
  'panelSectionHeader.border': palette.grayDark, // Граница заголовка секции панели
}
