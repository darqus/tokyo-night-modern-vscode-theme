/**
 * LRU memoization cache for color operations
 */
import { LRUCache } from './lru-cache.js'

// Define a type alias to avoid direct use of 'any' in the generic constraint
type MemoizableFunction = (...args: readonly unknown[]) => unknown

let cache = new LRUCache<string, unknown>(1000) // Limit cache to 1000 entries

export function memoize<T extends MemoizableFunction>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T {
  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)

    const cached = cache.get(key)
    if (cached !== undefined) {
      return cached as ReturnType<T>
    }

    const result = fn(...args)
    cache.set(key, result)
    return result as ReturnType<T>
  }) as T
}

export function clearCache(): void {
  cache.clear()
}

export function getCacheSize(): number {
  return cache.size()
}

/**
 * Sets the cache capacity and preserves recent entries
 */
export function setCacheCapacity(capacity: number): void {
  if (capacity <= 0) {
    throw new Error('Cache capacity must be positive')
  }

  const oldCache = cache
  const newCache = new LRUCache<string, unknown>(capacity)

  // Copy over recent entries up to the new capacity
  const entries = Array.from(oldCache.entries())
  const startIndex = Math.max(0, entries.length - capacity)

  for (let i = startIndex; i < entries.length; i++) {
    const [key, value] = entries[i]
    newCache.set(key, value)
  }

  // Replace the cache instance
  cache = newCache
}

/**
 * Gets cache statistics for monitoring
 */
export function getCacheStats() {
  return {
    size: cache.size(),
    capacity: 1000, // This should be tracked separately in a real implementation
  }
}
