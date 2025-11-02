import { execSync } from 'node:child_process'

export interface ExecOptions {
  silent?: boolean
  cwd?: string
}

export class SafeExecError extends Error {
  constructor(
    message: string,
    public readonly command: string,
    public readonly code?: number
  ) {
    super(message)
    this.name = 'SafeExecError'
  }
}

const ALLOWED_COMMANDS = new Set(['git', 'npm', 'npx', 'gh', 'node', 'vsce'])

function sanitizeCommand(command: string): string {
  const trimmed = command.trim()
  if (!trimmed) {
    throw new SafeExecError('Empty command not allowed', command)
  }

  const firstWord = trimmed.split(/\s+/)[0]
  if (!ALLOWED_COMMANDS.has(firstWord)) {
    throw new SafeExecError(`Command not allowed: ${firstWord}`, command)
  }

  return trimmed
}

export function safeExec(command: string, options: ExecOptions = {}): string {
  try {
    const sanitized = sanitizeCommand(command)
    const result = execSync(sanitized, {
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      cwd: options.cwd || process.cwd(),
      timeout: 30000,
    })
    return typeof result === 'string' ? result.trim() : ''
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error)
    const status =
      error && typeof error === 'object' && 'status' in error
        ? (error as { status: number }).status
        : undefined
    throw new SafeExecError(`Command failed: ${message}`, command, status)
  }
}
