import { palette } from '../palette'
import { core } from '../palette.core'
import { withAlpha, darkenToward, lightenToward } from '../utils/color'
import { buildColors } from '../build'
import { tokenColors } from '../tokenColors'
import { semanticTokenColors } from '../semanticTokenColors'

/**
 * Интерфейс конфигурации темы
 */
export interface ThemeConfig {
  name: string
  displayName: string
  type: 'dark'
  description?: string
}

/**
 * Строитель темы Tokyo Night Lod
 */
export class ThemeBuilder {
  /**
   * Создать стандартную тему
   */
  static buildStandard(): any {
    return {
      name: 'Tokyo Night Lod',
      displayName: 'Tokyo Night Lod',
      author: 'lod',
      maintainers: ['lod'],
      type: 'dark',
      semanticClass: 'tokyo-night',
      semanticTokenColors: semanticTokenColors,
      colors: buildColors(),
      tokenColors: tokenColors,
    }
  }
}
