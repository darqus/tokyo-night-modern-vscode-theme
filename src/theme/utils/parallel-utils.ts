/**
 * Utilities for parallel processing of theme generation tasks
 */

/**
 * Simple parallel processing for arrays
 * Uses Promise.all to process array items with controlled concurrency
 */
export async function parallelMap<T, R>(
  array: T[],
  mapper: (item: T, index: number) => R,
  options: { concurrency?: number } = {}
): Promise<R[]> {
  const { concurrency = 4 } = options

  if (array.length === 0) {
    return []
  }

  // Create an array of tasks that return promises
  const tasks = array.map(
    (item, index) => () => Promise.resolve(mapper(item, index))
  )

  // Use the withConcurrencyLimit function to process with concurrency control
  return withConcurrencyLimit(tasks, concurrency)
}

/**
 * Parallel reduce function
 */
export async function parallelReduce<T, R>(
  array: T[],
  reducer: (acc: R, item: T, index: number) => R,
  initialValue: R
): Promise<R> {
  let accumulator = initialValue
  for (let i = 0; i < array.length; i++) {
    // biome-ignore lint/performance/noAwaitInLoops: Reduce operations must maintain order, so await in loop is unavoidable
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
  if (tasks.length === 0) {
    return []
  }

  // Implement a proper concurrency limiter using a queue-based approach
  return new Promise<T[]>((resolve, reject) => {
    const results: T[] = new Array(tasks.length)
    let activeCount = 0
    let nextIndex = 0
    let completedCount = 0
    let hasError = false

    const executeTask = () => {
      if (hasError || nextIndex >= tasks.length || activeCount >= limit) {
        return
      }

      const currentIndex = nextIndex++
      activeCount++

      tasks[currentIndex]()
        .then((result) => {
          if (!hasError) {
            results[currentIndex] = result
            completedCount++

            if (completedCount === tasks.length) {
              resolve(results)
            } else {
              activeCount--
              executeTask() // Process next task
            }
          }
        })
        .catch((error) => {
          if (!hasError) {
            hasError = true
            reject(error)
          }
        })

      // Continue scheduling tasks if under limit
      executeTask()
    }

    // Start processing up to 'limit' tasks
    for (let i = 0; i < Math.min(limit, tasks.length); i++) {
      executeTask()
    }

    // Handle the case where there are no tasks to run
    if (tasks.length === 0) {
      resolve([])
    }
  })
}
