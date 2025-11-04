/**
 * LRU (Least Recently Used) Cache implementation
 * Provides bounded cache with O(1) get and set operations
 */
export class LRUCache<K, V> {
  private cache = new Map<K, V>()
  private readonly capacity: number

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error('Cache capacity must be positive')
    }
    this.capacity = capacity
  }

  get(key: K): V | undefined {
    if (!this.cache.has(key)) {
      return undefined
    }

    // Move to end to mark as recently used
    const value = this.cache.get(key)
    this.cache.delete(key)
    if (value !== undefined) {
      this.cache.set(key, value)
    }
    return value
  }

  set(key: K, value: V): void {
    // If key already exists, delete it to update position
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      // Delete least recently used item (first item in Map)
      const firstKey = this.cache.keys().next()
      if (!firstKey.done) {
        this.cache.delete(firstKey.value)
      }
    }

    this.cache.set(key, value)
  }

  has(key: K): boolean {
    return this.cache.has(key)
  }

  clear(): void {
    this.cache.clear()
  }

  size(): number {
    return this.cache.size
  }

  keys(): IterableIterator<K> {
    return this.cache.keys()
  }

  values(): IterableIterator<V> {
    return this.cache.values()
  }

  entries(): IterableIterator<[K, V]> {
    return this.cache.entries()
  }

  forEach(callback: (value: V, key: K, map: Map<K, V>) => void): void {
    // Create array of entries to avoid modification during iteration
    const entries = Array.from(this.cache.entries())
    for (const [key, value] of entries) {
      callback(value, key, this.cache)
    }
  }
}
