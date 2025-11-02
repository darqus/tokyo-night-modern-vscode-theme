/**
 * Simple memoization cache for color operations
 */

const cache = new Map<string, unknown>()

export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T {
  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>
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
  return cache.size
}
