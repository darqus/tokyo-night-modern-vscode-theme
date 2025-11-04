/**
 * Utilities for parallel processing of theme generation tasks
 */

/**
 * Simple parallel processing for arrays
 * Uses Promise.all to process array items concurrently
 */
export async function parallelMap<T, R>(
  array: T[],
  mapper: (item: T, index: number) => R,
  options: { concurrency?: number } = {}
): Promise<R[]> {
  const { concurrency = 4 } = options

  // Split array into chunks to limit concurrency
  const chunks: T[][] = []
  const chunkSize = Math.ceil(array.length / concurrency)

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }

  // Process chunks sequentially to respect concurrency limit
  const results: R[] = []
  for (const chunk of chunks) {
    const chunkResults = await Promise.all(
      chunk.map((item, index) =>
        Promise.resolve(mapper(item, index + results.length))
      )
    )
    results.push(...chunkResults)
  }

  return results
}

/**
 * Parallel reduce function
 */
export async function parallelReduce<T, R>(
  array: T[],
  reducer: (acc: R, item: T, index: number) => R,
  initialValue: R
): Promise<R> {
  // For reduce operation, we need to maintain order, so we'll just use regular reduce
  // but allow async operations within the reducer
  let accumulator = initialValue
  for (let i = 0; i < array.length; i++) {
    accumulator = await Promise.resolve(reducer(accumulator, array[i], i))
  }

  return accumulator
}

/**
 * Execute multiple async operations in parallel with controlled concurrency
 */
export async function withConcurrencyLimit<T>(
  tasks: (() => Promise<T>)[],
  limit: number = 4
): Promise<T[]> {
  const results: T[] = []

  for (let i = 0; i < tasks.length; i += limit) {
    const batch = tasks.slice(i, i + limit)
    const batchResults = await Promise.all(batch.map((task) => task()))
    results.push(...batchResults)
  }

  return results
}
