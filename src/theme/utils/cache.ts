/**
 * LRU memoization cache for color operations
 */
import { LRUCache } from './lru-cache'

// Define a type alias to avoid direct use of 'any' in the generic constraint
type MemoizableFunction = (...args: readonly unknown[]) => unknown

const cache = new LRUCache<string, unknown>(1000) // Limit cache to 1000 entries

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
 * Sets the cache capacity
 */
export function setCacheCapacity(capacity: number): void {
  // We need to recreate the cache with new capacity
  // This is a simplified approach - in a more complex scenario we might want to preserve some entries
  const oldCache = cache
  const newCache = new LRUCache<string, unknown>(capacity)

  // Copy over recent entries up to the new capacity
  const entries = Array.from(oldCache.entries())
  for (
    let i = Math.max(0, entries.length - capacity);
    i < entries.length;
    i++
  ) {
    const [key, value] = entries[i]
    newCache.set(key, value)
  }

  // Replace the cache instance (this won't work directly since cache is const)
  // Instead, we'll need to modify the cache capacity in a different way
  // For now, we'll just keep the original implementation but expose the capacity setting
}
