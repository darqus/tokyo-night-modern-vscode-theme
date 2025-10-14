// Импорт UI модулей с новой семантической системой
import { commandCenterColors } from './ui-modules/command-center'
import { diffColors } from './ui-modules/diffs'
import { mergeColors } from './ui-modules/merges'
import { generalUIColors } from './ui-modules/general-ui'
import { editorColors } from './ui-modules/editor'
import { sideBarColors } from './ui-modules/side-bar'
import { activityBarColors } from './ui-modules/activity-bar'
import { statusBarColors } from './ui-modules/status-bar'
import { tabColors } from './ui-modules/tabs'
import { textColors } from './ui-modules/text'
import { titleBarColors } from './ui-modules/title-bar'
import { editorGroupsPanelsColors } from './ui-modules/editor-groups-panels'
import { listColors } from './ui-modules/lists'
import { inputsButtonsColors } from './ui-modules/inputs-buttons'
import { badgeColors } from './ui-modules/badges'
import { menuDropdownColors } from './ui-modules/menus-dropdowns'
import { terminalColors } from './ui-modules/terminal'
import { notificationWidgetColors } from './ui-modules/notifications-widgets'
import { peekViewColors } from './ui-modules/peek-view'
import { findSearchColors } from './ui-modules/find-search'
import { highlightColors } from './ui-modules/highlights'
import { toolbarDebugColors } from './ui-modules/toolbar-debug'
import { inlineChatColors } from './ui-modules/inline-chat'
import { scrollbarMinimapColors } from './ui-modules/scrollbar-minimap'
import { dropBackgroundColors } from './ui-modules/drop-backgrounds'
import { gitDecorationTokens } from './ui-modules/git-decoration'

/**
 * Объединенный объект цветов UI
 * Содержит все токены цветов пользовательского интерфейса для темы Tokyo Night Modern
 *
 * Использует новую семантическую цветовую систему:
 * - Семантическая иерархия: primitive → semantic → UI → syntax
 * - 97% сокращение избыточности (с 4503 до 174 цветов)
 * - Улучшенная поддерживаемость и масштабируемость
 * - Полная обратная совместимость
 */
export const colors = {
  ...commandCenterColors,
  ...diffColors,
  ...mergeColors,
  ...generalUIColors,
  ...editorColors,
  ...sideBarColors,
  ...activityBarColors,
  ...statusBarColors,
  ...tabColors,
  ...textColors,
  ...titleBarColors,
  ...editorGroupsPanelsColors,
  ...listColors,
  ...inputsButtonsColors,
  ...badgeColors,
  ...menuDropdownColors,
  ...terminalColors,
  ...notificationWidgetColors,
  ...peekViewColors,
  ...findSearchColors,
  ...highlightColors,
  ...toolbarDebugColors,
  ...inlineChatColors,
  ...scrollbarMinimapColors,
  ...dropBackgroundColors,
  ...gitDecorationTokens,
}