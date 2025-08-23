/**
 * Типы для анализа цветовой температуры и рекомендаций по цветам
 */

import type { Hex } from '../../src/types/palette'

export interface RGB {
  r: number
  g: number
  b: number
}

export interface HSL {
  h: number
  s: number
  l: number
}

export type ColorTemperature = 'холодный' | 'нейтральный' | 'теплый'

export interface ColorAnalysisResult {
  category: string
  name: string
  hex: string
  temperature: string
  hsl: HSL
  concern: string
}

export interface ColorReplacement {
  current: Hex
  recommended: Hex
  reason: string
  priority: 'high' | 'medium' | 'low'
  category: string
}

export interface WarmColorToKeep {
  color: Hex
  reason: string
  category: string
}

export type Priority = 'high' | 'medium' | 'low'
