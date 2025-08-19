import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getBaseColors = () => ({
  // Верхний уровень и основа
  foreground: palette.fg.primary,
  descriptionForeground: palette.fg.muted,
  disabledForeground: palette.fg.inactive,
  focusBorder: withAlpha(palette.ui.badge.base, '40%'), // Используем цвет бейджа для фокуса
  errorForeground: palette.accent.red,
  'widget.border': palette.line.border, // Граница для виджетов поиска/замены
  'widget.shadow': palette.ui.shadow.widget,
  'scrollbar.shadow': palette.ui.shadow.scrollbar,

  // Значки, иконки, настройки - улучшенная видимость
  'badge.background': palette.ui.badge.base,
  'badge.foreground': palette.ui.badge.fg,
  'icon.foreground': palette.fg.soft,
  'settings.headerForeground': palette.fg.primary,

  // Окно и разделитель
  'window.activeBorder': palette.ui.window.border,
  'window.inactiveBorder': palette.ui.window.border,
  'sash.hoverBorder': palette.ui.sash.hover,

  // Кнопки/значки расширений - стандартизация с VS Code
  'extensionButton.prominentBackground': palette.brand.primary,
  'extensionButton.prominentHoverBackground': withAlpha(
    palette.brand.primary,
    '67%'
  ),
  'extensionButton.prominentForeground': palette.fg.selectionText,
  'extensionBadge.remoteBackground': palette.ui.badge.base,
  'extensionBadge.remoteForeground': palette.ui.badge.fg,

  // Ползунок полосы прокрутки - улучшенная видимость
  'scrollbarSlider.background': withAlpha(palette.ui.scrollbarBase, '25%'),
  'scrollbarSlider.hoverBackground': withAlpha(palette.ui.scrollbarBase, '38%'),
  'scrollbarSlider.activeBackground': withAlpha(
    palette.ui.scrollbarBase,
    '50%'
  ),

  // Текст
  'walkThrough.embeddedEditorBackground': palette.bg.sunken,
  'textLink.foreground': palette.ui.settingsHeader,
  'textLink.activeForeground': palette.accent.cyan,
  'textPreformat.foreground': palette.ui.text.preformat,
  'textBlockQuote.background': palette.bg.sunken,
  'textCodeBlock.background': palette.bg.sunken,
  'textSeparator.foreground': palette.ui.text.separator,

  // Заголовок окна
  'titleBar.activeForeground': palette.fg.muted,
  'titleBar.inactiveForeground': palette.fg.inactive,
  'titleBar.activeBackground': palette.bg.base,
  'titleBar.inactiveBackground': palette.bg.base,
  'titleBar.border': palette.line.border,

  // Command Center (новое меню в заголовке окна)
  'commandCenter.foreground': palette.fg.muted,
  'commandCenter.activeForeground': palette.fg.primary,
  'commandCenter.inactiveForeground': palette.fg.inactive,
  'commandCenter.background': palette.bg.base,
  'commandCenter.activeBackground': palette.bg.hover,
  'commandCenter.border': palette.line.border,
  'commandCenter.inactiveBorder': palette.line.border,

  // Баннер
  'banner.background': palette.bg.elevated, // Фон баннера
  'banner.foreground': palette.fg.primary, // Текст баннера
  'banner.iconForeground': palette.brand.primary, // Иконка баннера

  // Подписи клавиш
  'keybindingLabel.background': withAlpha(palette.bg.elevated, '60%'), // Фон подписи клавиш
  'keybindingLabel.foreground': palette.fg.primary, // Текст подписи клавиш
  'keybindingLabel.border': palette.line.border, // Граница подписи клавиш
  'keybindingLabel.bottomBorder': withAlpha(palette.line.border, '67%'), // Нижняя граница подписи клавиш
})
