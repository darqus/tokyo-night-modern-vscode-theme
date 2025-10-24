/**
 * Простая система кэширования для оптимизации производительности
 */
class ThemeCache<T = unknown> {
  private cache = new Map<
    string,
    { value: T; timestamp: number; ttl: number }
  >()
  private maxSize = 100
  private ttl = 5 * 60 * 1000 // 5 минут

  set(key: string, value: T, customTtl?: number): void {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value
      if (firstKey) {
        this.cache.delete(firstKey)
      }
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      ttl: customTtl || this.ttl,
    })
  }

  get(key: string): T | null {
    const item = this.cache.get(key)

    if (!item) return null

    const ttl = item.ttl || this.ttl
    if (Date.now() - item.timestamp > ttl) {
      this.cache.delete(key)
      return null
    }

    return item.value
  }

  clear(): void {
    this.cache.clear()
  }

  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  has(key: string): boolean {
    const item = this.cache.get(key)
    if (!item) return false

    const ttl = item.ttl || this.ttl
    if (Date.now() - item.timestamp > ttl) {
      this.cache.delete(key)
      return false
    }

    return true
  }

  size(): number {
    return this.cache.size
  }

  cleanup(): void {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      const ttl = item.ttl || this.ttl
      if (now - item.timestamp > ttl) {
        this.cache.delete(key)
      }
    }
  }
}

export const themeCache = new ThemeCache()

/**
 * Декоратор для кэширования результатов функций
 */
export const cached =
  (ttl?: number) =>
  (
    _target: unknown,
    propertyName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor => {
    const method = descriptor.value

    descriptor.value = (...args: unknown[]) => {
      const key = `${propertyName}_${JSON.stringify(args)}`

      const cached = themeCache.get(key)
      if (cached) return cached

      const result = method.apply(this, args)
      themeCache.set(key, result, ttl)

      return result
    }

    return descriptor
  }

/**
 * Мемоизация функций с автоматической очисткой
 */
export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args)

    const cachedValue = cache.get(key)
    if (cachedValue !== undefined) {
      return cachedValue
    }

    const result = fn(...args) as ReturnType<T>
    cache.set(key, result)

    // Ограничение размера кэша
    if (cache.size > 50) {
      const firstKey = cache.keys().next().value
      if (firstKey) {
        cache.delete(firstKey)
      }
    }

    return result
  }) as T
}

/**
 * Периодическая очистка кэша
 */
setInterval(() => {
  themeCache.cleanup()
}, 60 * 1000) // Каждую минуту
