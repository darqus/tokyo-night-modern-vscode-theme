import { vi } from 'vitest'
import { baseColors } from '../../src/theme/palette/config/base-colors.js'
import {
  ColorRuleBuilder,
  c,
  colorRules,
} from '../../src/theme/utils/color-builder'

// Mock the palette object
vi.mock('../../src/theme/palette/index.js', () => ({
  universalPalette: {
    chromatic: {
      blue: {
        dark: '#3b86c6', // darken('#4aaaf8', 0.2)
      },
    },
    ui: {
      white: baseColors.ui.white,
    },
  },
}))

describe('ColorRuleBuilder', () => {
  it('colorRules should return an instance of ColorRuleBuilder', () => {
    expect(colorRules()).toBeInstanceOf(ColorRuleBuilder)
  })

  it('should add a single rule', () => {
    const rules = colorRules().add('key', 'value').build()
    expect(rules).toEqual({ key: 'value' })
  })

  it('should add a group of rules', () => {
    const rules = colorRules()
      .addGroup('prefix', {
        rule1: 'value1',
        rule2: 'value2',
      })
      .build()
    expect(rules).toEqual({
      'prefix.rule1': 'value1',
      'prefix.rule2': 'value2',
    })
  })

  it('should add multiple keys with the same value', () => {
    const rules = colorRules().addMultiple(['key1', 'key2'], 'value').build()
    expect(rules).toEqual({
      key1: 'value',
      key2: 'value',
    })
  })

  it('should chain methods correctly', () => {
    const rules = colorRules()
      .add('key1', 'value1')
      .addGroup('prefix', { rule: 'value' })
      .addMultiple(['key2', 'key3'], 'value2')
      .build()
    expect(rules).toEqual({
      key1: 'value1',
      'prefix.rule': 'value',
      key2: 'value2',
      key3: 'value2',
    })
  })

  it('build() should return a copy of the rules', () => {
    const builder = colorRules().add('key', 'value')
    const rules1 = builder.build()
    const rules2 = builder.build()
    expect(rules1).toEqual({ key: 'value' })
    expect(rules2).toEqual({ key: 'value' })
    expect(rules1).not.toBe(rules2)
  })

  it('should handle empty chains', () => {
    const rules = colorRules().build()
    expect(rules).toEqual({})
  })
})

describe('Palette alias', () => {
  it('c should be an alias for universalPalette', () => {
    expect(c).toBeDefined()
  })
})
