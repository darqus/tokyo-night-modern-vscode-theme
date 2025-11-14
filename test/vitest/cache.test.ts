import { describe, expect, it } from 'vitest'
import { clearCache, getCacheSize, memoize } from '../../src/theme/utils/cache'

describe('Cache Utils', () => {
  describe('memoize', () => {
    it('should cache function results', () => {
      let callCount = 0
      const fn = memoize((...args: readonly unknown[]) => {
        const x = args[0] as number
        callCount++
        return x * 2
      }) as (x: number) => number

      expect(fn(5)).toBe(10)
      expect(callCount).toBe(1)

      // Second call should use cache
      expect(fn(5)).toBe(10)
      expect(callCount).toBe(1)

      // Different argument should call function again
      expect(fn(10)).toBe(20)
      expect(callCount).toBe(2)
    })

    it('should handle multiple arguments', () => {
      let callCount = 0
      const fn = memoize((...args: readonly unknown[]) => {
        const a = args[0] as number
        const b = args[1] as number
        callCount++
        return a + b
      }) as (a: number, b: number) => number

      expect(fn(1, 2)).toBe(3)
      expect(callCount).toBe(1)

      expect(fn(1, 2)).toBe(3)
      expect(callCount).toBe(1)

      expect(fn(2, 3)).toBe(5)
      expect(callCount).toBe(2)
    })

    it('should handle functions with no arguments', () => {
      let callCount = 0
      const fn = memoize((..._args: readonly unknown[]) => {
        callCount++
        return 'result'
      }) as () => string

      expect(fn()).toBe('result')
      expect(callCount).toBe(1)

      expect(fn()).toBe('result')
      expect(callCount).toBe(1)
    })
  })

  describe('clearCache', () => {
    it('should clear the cache', () => {
      // Test that clearCache function exists and can be called
      expect(() => clearCache()).not.toThrow()
    })
  })

  describe('getCacheSize', () => {
    it('should return cache size', () => {
      clearCache()
      expect(getCacheSize()).toBe(0)

      const fn = memoize(
        (...args: readonly unknown[]) => (args[0] as number) * 2
      ) as (x: number) => number
      fn(1)
      fn(2)
      fn(3)

      expect(getCacheSize()).toBe(3)
    })
  })
})
