/**
 * Safe logging utilities with output sanitization
 */

export function sanitizeLogOutput(text: unknown): string {
  if (typeof text !== 'string') {
    text = String(text)
  }
  return (text as string)
    .split('')
    .filter((char) => {
      const code = char.charCodeAt(0)
      return !(code >= 0 && code <= 31) && !(code >= 127 && code <= 159)
    })
    .join('')
    .replace(/[\r\n]/g, '')
    .trim()
}

export const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.log(sanitizeLogOutput(message), ...args.map(sanitizeLogOutput))
  },

  warn: (message: string, ...args: unknown[]) => {
    console.warn(sanitizeLogOutput(message), ...args.map(sanitizeLogOutput))
  },

  error: (message: string, ...args: unknown[]) => {
    console.error(sanitizeLogOutput(message), ...args.map(sanitizeLogOutput))
  },

  debug: (message: string, ...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(sanitizeLogOutput(message), ...args.map(sanitizeLogOutput))
    }
  },
}
