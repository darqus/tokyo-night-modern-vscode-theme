/**
 * Enhanced theme generator with dependency injection and caching
 */

import type { ThemeConfig } from '../config/color-config-dsl.js'
import { generateFromConfig } from '../config/unified-generator.js'
import { THEME_CONFIG } from '../config.js'
import type { UniversalPalette } from '../palette/universal-base.js'
import type { VSCodeTheme } from '../types/index.js'
import { clearCache, memoize as memoizeFn } from '../utils/cache.js'

/**
 * Generator dependencies interface for dependency injection
 */
export interface GeneratorDependencies {
  palette: UniversalPalette
  config: ThemeConfig
}

/**
 * Enhanced theme generator with caching and dependency injection
 */
export class ThemeGenerator {
  private dependencies: GeneratorDependencies
  private memoizedGenerate: () => Promise<VSCodeTheme>

  constructor(dependencies: GeneratorDependencies) {
    this.dependencies = dependencies
    this.memoizedGenerate = memoizeFn(this.generateThemeInternal.bind(this))
  }

  /**
   * Generates theme with memoization for performance
   */
  async generateTheme(): Promise<VSCodeTheme> {
    return this.memoizedGenerate()
  }

  /**
   * Internal theme generation method
   */
  private async generateThemeInternal(): Promise<VSCodeTheme> {
    const { palette, config } = this.dependencies

    const generated = await generateFromConfig(config, palette)

    return {
      name: THEME_CONFIG.name,
      type: THEME_CONFIG.type,
      semanticHighlighting: THEME_CONFIG.semanticHighlighting,
      colors: generated.colors,
      tokenColors: generated.tokenColors,
      semanticTokenColors: generated.semanticTokenColors,
    }
  }

  /**
   * Updates palette and clears cache
   */
  updatePalette(newPalette: UniversalPalette): void {
    this.dependencies.palette = newPalette
    clearCache()
    this.memoizedGenerate = memoizeFn(this.generateThemeInternal.bind(this))
  }

  /**
   * Updates config and clears cache
   */
  updateConfig(newConfig: ThemeConfig): void {
    this.dependencies.config = newConfig
    clearCache()
    this.memoizedGenerate = memoizeFn(this.generateThemeInternal.bind(this))
  }

  /**
   * Gets current dependencies
   */
  getDependencies(): GeneratorDependencies {
    return { ...this.dependencies }
  }
}

/**
 * Factory function to create theme generator with default dependencies
 */
export async function createThemeGenerator(
  customConfig?: Partial<ThemeConfig>
): Promise<ThemeGenerator> {
  const { universalPalette } = await import('../palette/index.js')

  // Create default config if not provided
  const defaultConfig: ThemeConfig = {
    ui: {},
    tokens: {},
    semantic: {},
  }

  const config = customConfig
    ? { ...defaultConfig, ...customConfig }
    : defaultConfig

  return new ThemeGenerator({
    palette: universalPalette,
    config,
  })
}
