import { getToken } from '../design-tokens'

/**
 * Badges UI элементы
 * Эти токены отвечают за оформление значков (badges) в VS Code
 */
export const badgeColors = {
  'badge.background': getToken('color.interactive.secondary'),
  'badge.foreground': getToken('color.interactive.secondary-text'),
  'activityBarBadge.background': getToken('color.interactive.secondary'),
  'activityBarBadge.foreground': getToken('color.interactive.secondary-text'),
  'extensionBadge.remoteBackground': getToken('color.interactive.secondary'),
  'extensionBadge.remoteForeground': getToken(
    'color.interactive.secondary-text'
  ),
}
