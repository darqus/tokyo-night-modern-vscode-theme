import { describe, expect, it } from 'vitest'
import { generateCssTokens } from '../../src/theme/generator/tokens/css'

describe('Extended CSS Tokens Tests', () => {
  describe('CSS Grid and Flexbox Properties', () => {
    it('should include CSS Grid and Flexbox tokens', () => {
      const tokens = generateCssTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('CSS Grid and Flexbox Properties')
    })

    it('should have proper styling for Grid/Flexbox', () => {
      const tokens = generateCssTokens()
      const gridFlexToken = tokens.find(
        (token) => token.name === 'CSS Grid and Flexbox Properties'
      )

      expect(gridFlexToken).toBeDefined()
      expect(gridFlexToken?.settings).toBeDefined()
      expect(gridFlexToken?.scope).toContain('support.type.property-name.grid')
      expect(gridFlexToken?.scope).toContain(
        'support.type.property-name.flexbox'
      )
    })
  })

  describe('CSS Custom Properties', () => {
    it('should include CSS Custom Properties tokens', () => {
      const tokens = generateCssTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('CSS Custom Properties (CSS Variables)')
    })

    it('should have proper styling for CSS Variables', () => {
      const tokens = generateCssTokens()
      const customPropsToken = tokens.find(
        (token) => token.name === 'CSS Custom Properties (CSS Variables)'
      )

      expect(customPropsToken).toBeDefined()
      expect(customPropsToken?.settings).toBeDefined()
      expect(customPropsToken?.scope).toContain('variable.other.css')
      expect(customPropsToken?.scope).toContain('keyword.other.var.css')
    })
  })

  describe('CSS Functions', () => {
    it('should include CSS Functions tokens', () => {
      const tokens = generateCssTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('CSS Functions')
    })

    it('should have proper styling for CSS Functions', () => {
      const tokens = generateCssTokens()
      const functionsToken = tokens.find(
        (token) => token.name === 'CSS Functions'
      )

      expect(functionsToken).toBeDefined()
      expect(functionsToken?.settings).toBeDefined()
      expect(functionsToken?.scope).toContain('support.function.calc.css')
      expect(functionsToken?.scope).toContain('support.function.clamp.css')
      expect(functionsToken?.scope).toContain('support.function.var.css')
    })
  })

  describe('CSS Logical Properties', () => {
    it('should include CSS Logical Properties tokens', () => {
      const tokens = generateCssTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('CSS Logical Properties')
    })

    it('should have proper styling for Logical Properties', () => {
      const tokens = generateCssTokens()
      const logicalPropsToken = tokens.find(
        (token) => token.name === 'CSS Logical Properties'
      )

      expect(logicalPropsToken).toBeDefined()
      expect(logicalPropsToken?.settings).toBeDefined()
      expect(logicalPropsToken?.scope).toContain(
        'support.type.property-name.logical'
      )
      expect(logicalPropsToken?.scope).toContain(
        'support.type.property-name.inline'
      )
    })
  })

  describe('SCSS Control Directives', () => {
    it('should include SCSS Control Directives tokens', () => {
      const tokens = generateCssTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('SCSS Control Directives')
    })

    it('should have proper styling for SCSS Control Directives', () => {
      const tokens = generateCssTokens()
      const controlDirectivesToken = tokens.find(
        (token) => token.name === 'SCSS Control Directives'
      )

      expect(controlDirectivesToken).toBeDefined()
      expect(controlDirectivesToken?.settings).toBeDefined()
      expect(controlDirectivesToken?.scope).toContain(
        'keyword.control.at-rule.if.scss'
      )
      expect(controlDirectivesToken?.scope).toContain(
        'keyword.control.at-rule.each.scss'
      )
      expect(controlDirectivesToken?.scope).toContain(
        'keyword.control.at-rule.for.scss'
      )
    })
  })

  describe('SCSS Maps and Lists', () => {
    it('should include SCSS Maps and Lists tokens', () => {
      const tokens = generateCssTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('SCSS Maps and Lists')
    })

    it('should have proper styling for SCSS Maps and Lists', () => {
      const tokens = generateCssTokens()
      const mapsListsToken = tokens.find(
        (token) => token.name === 'SCSS Maps and Lists'
      )

      expect(mapsListsToken).toBeDefined()
      expect(mapsListsToken?.settings).toBeDefined()
      expect(mapsListsToken?.scope).toContain(
        'entity.name.function.map-get.scss'
      )
      expect(mapsListsToken?.scope).toContain(
        'entity.name.function.list.append.scss'
      )
    })
  })

  describe('SCSS String Interpolation', () => {
    it('should include SCSS String Interpolation tokens', () => {
      const tokens = generateCssTokens()
      const tokenNames = tokens.map((token) => token.name)

      expect(tokenNames).toContain('SCSS String Interpolation')
    })

    it('should have proper styling for SCSS String Interpolation', () => {
      const tokens = generateCssTokens()
      const interpolationToken = tokens.find(
        (token) => token.name === 'SCSS String Interpolation'
      )

      expect(interpolationToken).toBeDefined()
      expect(interpolationToken?.settings).toBeDefined()
      expect(interpolationToken?.scope).toContain('string.interpolated.scss')
      expect(interpolationToken?.scope).toContain(
        'punctuation.definition.interpolation.begin.scss'
      )
    })
  })

  describe('Modern CSS @rules', () => {
    it('should include modern CSS @rules', () => {
      const tokens = generateCssTokens()
      const atRulesToken = tokens.find((token) => token.name === 'CSS @rules')

      expect(atRulesToken).toBeDefined()
      expect(atRulesToken?.scope).toContain('keyword.control.at-rule.container')
      expect(atRulesToken?.scope).toContain('keyword.control.at-rule.layer')
      expect(atRulesToken?.scope).toContain('keyword.control.at-rule.property')
    })
  })

  describe('Token Structure Validation', () => {
    it('should have valid token structures for all new CSS tokens', () => {
      const tokens = generateCssTokens()
      const newTokenNames = [
        'CSS Grid and Flexbox Properties',
        'CSS Custom Properties (CSS Variables)',
        'CSS Functions',
        'CSS Logical Properties',
        'SCSS Control Directives',
        'SCSS Maps and Lists',
        'SCSS String Interpolation',
      ]

      newTokenNames.forEach((tokenName) => {
        const token = tokens.find((t) => t.name === tokenName)
        expect(token).toBeDefined()
        expect(typeof token?.name).toBe('string')
        expect(token?.scope).toBeDefined()
        expect(token?.settings).toBeDefined()

        if (token?.settings?.foreground) {
          expect(token.settings.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }

        if (token?.settings?.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.settings.fontStyle)
        }
      })
    })
  })

  describe('Color Consistency', () => {
    it('should use consistent colors for related token types', () => {
      const tokens = generateCssTokens()

      // CSS Grid/Flexbox should use teal color
      const gridFlexToken = tokens.find(
        (token) => token.name === 'CSS Grid and Flexbox Properties'
      )
      expect(gridFlexToken?.settings?.foreground).toBeDefined()

      // CSS Custom Properties should use cyan color
      const customPropsToken = tokens.find(
        (token) => token.name === 'CSS Custom Properties (CSS Variables)'
      )
      expect(customPropsToken?.settings?.foreground).toBeDefined()

      // CSS Functions should use purple color
      const functionsToken = tokens.find(
        (token) => token.name === 'CSS Functions'
      )
      expect(functionsToken?.settings?.foreground).toBeDefined()

      // SCSS Control Directives should use orange color
      const controlDirectivesToken = tokens.find(
        (token) => token.name === 'SCSS Control Directives'
      )
      expect(controlDirectivesToken?.settings?.foreground).toBeDefined()
    })
  })

  describe('Font Style Consistency', () => {
    it('should apply appropriate font styles', () => {
      const tokens = generateCssTokens()

      // CSS Functions should be bold
      const functionsToken = tokens.find(
        (token) => token.name === 'CSS Functions'
      )
      expect(functionsToken?.settings?.fontStyle).toBe('bold')

      // CSS Custom Properties should be italic
      const customPropsToken = tokens.find(
        (token) => token.name === 'CSS Custom Properties (CSS Variables)'
      )
      expect(customPropsToken?.settings?.fontStyle).toBe('italic')

      // CSS Logical Properties should be italic
      const logicalPropsToken = tokens.find(
        (token) => token.name === 'CSS Logical Properties'
      )
      expect(logicalPropsToken?.settings?.fontStyle).toBe('italic')

      // SCSS Control Directives should be bold
      const controlDirectivesToken = tokens.find(
        (token) => token.name === 'SCSS Control Directives'
      )
      expect(controlDirectivesToken?.settings?.fontStyle).toBe('bold')
    })
  })
})
