import { palette } from '../palette'

export const getQuickInputColors = () => ({
  // Быстрый ввод (Палитра команд, выборщик быстрых исправлений)
  'quickInput.background': palette.bg.elevated, // Фон палитры команд - осветлен для лучшей видимости
  'quickInput.foreground': palette.fg.primary, // Текст палитры команд
  'quickInputTitle.background': palette.bg.elevated, // Фон заголовка палитры команд
  'quickInputList.focusBackground': palette.bg.selection.focus, // Фон выбранного элемента в палитре команд
  'quickInputList.focusForeground': palette.fg.onSelection, // Текст выбранного элемента в палитре команд
  'quickInputList.focusIconForeground': palette.fg.onSelection, // Иконка выбранного элемента в палитре команд
})
