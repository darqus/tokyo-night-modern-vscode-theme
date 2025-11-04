import { describe, expect, it } from 'vitest'
import { generateSemanticTokenColors } from '../../src/theme/generator/semantic'
import { generateFunctionTokens } from '../../src/theme/generator/semantic/functions'
import { generateModernFrameworkTokens } from '../../src/theme/generator/semantic/modern-frameworks'
import { generateVariableTokens } from '../../src/theme/generator/semantic/variables'

describe('Semantic Generator Tests', () => {
  describe('Function Tokens', () => {
    it('should generate function tokens', () => {
      const tokens = generateFunctionTokens()
      expect(tokens).toBeDefined()
      expect(typeof tokens).toBe('object')
      expect(Object.keys(tokens).length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const [key, token] of Object.entries(tokens)) {
        expect(key).toBeDefined()
        expect(token).toBeDefined()
        if (token.foreground) {
          expect(token.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.fontStyle)
        }
      }
    })

    it('should include expected function token types', () => {
      const tokens = generateFunctionTokens()
      const tokenKeys = Object.keys(tokens)

      expect(tokenKeys).toContain('function')
      expect(tokenKeys).toContain('function.declaration')
      expect(tokenKeys).toContain('function.defaultLibrary')
      expect(tokenKeys).toContain('method')
      expect(tokenKeys).toContain('method.declaration')
      expect(tokenKeys).toContain('method.static')
      expect(tokenKeys).toContain('method.readonly')
      expect(tokenKeys).toContain('constructor')
      expect(tokenKeys).toContain('function.async')
      expect(tokenKeys).toContain('method.async')
    })
  })

  describe('Variable Tokens', () => {
    it('should generate variable tokens', () => {
      const tokens = generateVariableTokens()
      expect(tokens).toBeDefined()
      expect(typeof tokens).toBe('object')
      expect(Object.keys(tokens).length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const [key, token] of Object.entries(tokens)) {
        expect(key).toBeDefined()
        expect(token).toBeDefined()
        if (token.foreground) {
          expect(token.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.fontStyle)
        }
      }
    })

    it('should include expected variable token types', () => {
      const tokens = generateVariableTokens()
      const tokenKeys = Object.keys(tokens)

      expect(tokenKeys).toContain('variable')
      expect(tokenKeys).toContain('variable.readonly')
      expect(tokenKeys).toContain('variable.readonly.default')
      expect(tokenKeys).toContain('parameter')
      expect(tokenKeys).toContain('parameter.readonly')
      expect(tokenKeys).toContain('parameter.type')
      expect(tokenKeys).toContain('property')
      expect(tokenKeys).toContain('property.readonly')
      expect(tokenKeys).toContain('property.static')
      expect(tokenKeys).toContain('property.declaration')
      expect(tokenKeys).toContain('property.defaultLibrary')
      expect(tokenKeys).toContain('variable.defaultLibrary')
      expect(tokenKeys).toContain('*.defaultLibrary')
    })
  })

  describe('Modern Framework Tokens', () => {
    it('should generate modern framework tokens', () => {
      const tokens = generateModernFrameworkTokens()
      expect(tokens).toBeDefined()
      expect(typeof tokens).toBe('object')
      expect(Object.keys(tokens).length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const [key, token] of Object.entries(tokens)) {
        expect(key).toBeDefined()
        expect(token).toBeDefined()
        if (token.foreground) {
          expect(token.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.fontStyle)
        }
      }
    })

    it('should include expected modern framework token types', () => {
      const tokens = generateModernFrameworkTokens()
      const tokenKeys = Object.keys(tokens)

      // React
      expect(tokenKeys).toContain('react.hook')
      expect(tokenKeys).toContain('react.component')
      expect(tokenKeys).toContain('react.props')
      expect(tokenKeys).toContain('react.state')

      // Vue
      expect(tokenKeys).toContain('vue.composable')
      expect(tokenKeys).toContain('vue.directive')
      expect(tokenKeys).toContain('vue.ref')

      // TypeScript
      expect(tokenKeys).toContain('typescript.generic')
      expect(tokenKeys).toContain('typescript.utility')
      expect(tokenKeys).toContain('typescript.mapped')

      // GraphQL
      expect(tokenKeys).toContain('graphql.type')
      expect(tokenKeys).toContain('graphql.field')
      expect(tokenKeys).toContain('graphql.directive')

      // Testing
      expect(tokenKeys).toContain('test.describe')
      expect(tokenKeys).toContain('test.assertion')
      expect(tokenKeys).toContain('test.mock')
      expect(tokenKeys).toContain('test.fixture')

      // Rust
      expect(tokenKeys).toContain('macro.rust')
      expect(tokenKeys).toContain('lifetime.rust')
      expect(tokenKeys).toContain('trait.rust')
      expect(tokenKeys).toContain('derive.rust')

      // Go
      expect(tokenKeys).toContain('interface.go')
      expect(tokenKeys).toContain('goroutine.go')
      expect(tokenKeys).toContain('channel.go')

      // Python
      expect(tokenKeys).toContain('decorator.python')
      expect(tokenKeys).toContain('typeParameter.python')
      expect(tokenKeys).toContain('async.python')

      // Solid.js
      expect(tokenKeys).toContain('signal.solid')
      expect(tokenKeys).toContain('store.solid')
      expect(tokenKeys).toContain('effect.solid')

      // Svelte
      expect(tokenKeys).toContain('store.svelte')
      expect(tokenKeys).toContain('action.svelte')
      expect(tokenKeys).toContain('transition.svelte')

      // Astro
      expect(tokenKeys).toContain('component.astro')
      expect(tokenKeys).toContain('island.astro')

      // ORM
      expect(tokenKeys).toContain('model.orm')
      expect(tokenKeys).toContain('relation.orm')
      expect(tokenKeys).toContain('migration.orm')

      // Frameworks
      expect(tokenKeys).toContain('procedure.trpc')
      expect(tokenKeys).toContain('middleware.framework')
      expect(tokenKeys).toContain('router.framework')

      // Validation
      expect(tokenKeys).toContain('schema.validation')

      // TanStack Query
      expect(tokenKeys).toContain('query.tanstack')
      expect(tokenKeys).toContain('mutation.tanstack')

      // CSS Utilities
      expect(tokenKeys).toContain('utility.css')

      // Runtime
      expect(tokenKeys).toContain('runtime.modern')
    })
  })

  describe('Full Semantic Token Colors', () => {
    it('should generate all semantic token colors', () => {
      const tokens = generateSemanticTokenColors()
      expect(tokens).toBeDefined()
      expect(typeof tokens).toBe('object')
      expect(Object.keys(tokens).length).toBeGreaterThan(0)

      // Check that each token has required properties
      for (const [key, token] of Object.entries(tokens)) {
        expect(key).toBeDefined()
        expect(token).toBeDefined()
        if (token.foreground) {
          expect(token.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
        }
        if (token.fontStyle) {
          expect([
            'italic',
            'bold',
            'underline',
            'bold italic',
            'italic bold',
            'normal',
          ]).toContain(token.fontStyle)
        }
      }
    })

    it('should include tokens from all semantic categories', () => {
      const tokens = generateSemanticTokenColors()
      const tokenKeys = Object.keys(tokens)

      // Check that tokens from all categories are present
      expect(tokenKeys.some((key) => key.startsWith('function'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('variable'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('parameter'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('property'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('react'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('vue'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('typescript'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('graphql'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('test'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('macro'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('interface'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('decorator'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('signal'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('store'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('model'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('procedure'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('schema'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('query'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('utility'))).toBe(true)
      expect(tokenKeys.some((key) => key.startsWith('runtime'))).toBe(true)
    })

    it('should have valid type tokens', () => {
      const tokens = generateSemanticTokenColors()

      expect(tokens.type).toBeDefined()
      expect(tokens.type?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.interface).toBeDefined()
      expect(tokens.interface?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.interface?.fontStyle).toBe('italic')
      expect(tokens.class).toBeDefined()
      expect(tokens.class?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.class?.fontStyle).toBe('bold')
      expect(tokens.enum).toBeDefined()
      expect(tokens.enum?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.typeParameter).toBeDefined()
      expect(tokens.typeParameter?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.struct).toBeDefined()
      expect(tokens.struct?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
    })

    it('should have valid modifier tokens', () => {
      const tokens = generateSemanticTokenColors()

      expect(tokens.public).toBeDefined()
      expect(tokens.public?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.private).toBeDefined()
      expect(tokens.private?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.protected).toBeDefined()
      expect(tokens.protected?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.static).toBeDefined()
      expect(tokens.static?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.static?.fontStyle).toBe('italic')
      expect(tokens.readonly).toBeDefined()
      expect(tokens.readonly?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.readonly?.fontStyle).toBe('italic')
      expect(tokens.abstract).toBeDefined()
      expect(tokens.abstract?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.abstract?.fontStyle).toBe('italic')
      expect(tokens.async).toBeDefined()
      expect(tokens.async?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.async?.fontStyle).toBe('italic')
    })

    it('should have valid literal tokens', () => {
      const tokens = generateSemanticTokenColors()

      expect(tokens.string).toBeDefined()
      expect(tokens.string?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.number).toBeDefined()
      expect(tokens.number?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.boolean).toBeDefined()
      expect(tokens.boolean?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.regexp).toBeDefined()
      expect(tokens.regexp?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.null).toBeDefined()
      expect(tokens.null?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.undefined).toBeDefined()
      expect(tokens.undefined?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
    })

    it('should have valid comment tokens', () => {
      const tokens = generateSemanticTokenColors()

      expect(tokens.comment).toBeDefined()
      expect(tokens.comment?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens.comment?.fontStyle).toBe('italic')
      expect(tokens['comment.documentation']).toBeDefined()
      expect(tokens['comment.documentation']?.foreground).toMatch(
        /^#[0-9a-fA-F]{6,8}$/
      )
      expect(tokens['comment.line']).toBeDefined()
      expect(tokens['comment.line']?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens['comment.line']?.fontStyle).toBe('italic')
      expect(tokens['comment.block']).toBeDefined()
      expect(tokens['comment.block']?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens['comment.block']?.fontStyle).toBe('italic')
    })

    it('should have valid error handling tokens', () => {
      const tokens = generateSemanticTokenColors()

      expect(tokens['keyword.try']).toBeDefined()
      expect(tokens['keyword.try']?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens['keyword.try']?.fontStyle).toBe('bold')
      expect(tokens['keyword.catch']).toBeDefined()
      expect(tokens['keyword.catch']?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens['keyword.catch']?.fontStyle).toBe('bold')
      expect(tokens['keyword.throw']).toBeDefined()
      expect(tokens['keyword.throw']?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
      expect(tokens['keyword.throw']?.fontStyle).toBe('bold')
      expect(tokens['keyword.finally']).toBeDefined()
      expect(tokens['keyword.finally']?.foreground).toMatch(
        /^#[0-9a-fA-F]{6,8}$/
      )
      expect(tokens['keyword.finally']?.fontStyle).toBe('bold')
      expect(tokens.exception).toBeDefined()
      expect(tokens.exception?.foreground).toMatch(/^#[0-9a-fA-F]{6,8}$/)
    })
  })
})
