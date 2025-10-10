import { palette } from '../palette';

/**
 * Notifications & Widgets UI элементы
 * Эти токены отвечают за оформление уведомлений и виджетов в VS Code
 */
export const notificationWidgetColors = {
  // Notifications & Widgets
 'notifications.background': palette.backgroundAlt,              // Фон уведомлений
  'notifications.foreground': palette.foreground,                 // Цвет текста уведомлений
 'notifications.border': palette.border,                         // Граница уведомлений
  'editorHoverWidget.background': palette.background,             // Фон всплывающего виджета редактора
  'editorHoverWidget.border': palette.grayWidgetBorder,           // Граница всплывающего виджета редактора
  'editorHoverWidget.highlightForeground': palette.hoverWidgetHighlight, // Цвет подсветки в виджете редактора
  'editorHoverWidget.foreground': palette.foreground,             // Цвет текста в виджете редактора
 'editorSuggestWidget.background': palette.backgroundPanel,      // Фон виджета предложений редактора
  'editorSuggestWidget.border': palette.grayWidgetBorder,         // Граница виджета предложений редактора
  'editorSuggestWidget.highlightForeground': palette.blueAlt,     // Цвет подсветки в виджете предложений
  'editorSuggestWidget.selectedBackground': palette.selectionAlpha33, // Фон выбранного элемента в виджете предложений
  'editorSuggestWidget.selectedForeground': palette.foreground,   // Цвет текста выбранного элемента виджете предложений
  'editorSuggestWidget.selectedIconForeground': palette.foreground, // Цвет иконки выбранного элемента виджете предложений
  'quickInput.background': palette.backgroundAlt,                 // Фон быстрого ввода
  'editorWidget.background': palette.backgroundAlt,               // Фон виджета редактора
 'widget.border': palette.grayWidgetBorder,                      // Граница виджета
  'widget.shadow': palette.grayShadowAlphae6,                     // Тень виджета
  'editorWidget.border': palette.grayWidgetBorder,                // Граница виджета редактора
  'quickInput.foreground': palette.foreground,                    // Цвет текста быстрого ввода
  'quickInputTitle.background': palette.backgroundPanel,          // Фон заголовка быстрого ввода
  'quickInputList.focusBackground': palette.selectionAlpha33, // Фон списка в фокусе быстрого ввода
  'quickInputList.focusForeground': palette.foreground,           // Цвет текста списка в фокусе быстрого ввода
};
