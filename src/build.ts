/// <reference types="node" />
import { palette } from './palette'
import { withAlpha } from './utils/color'
import * as fs from 'node:fs'
import * as path from 'node:path'

/**
 * Minimal TS generator. For the first step, we only ensure we can write the existing theme file.
 * Next iterations can migrate colors step-by-step to use palette and helpers.
 */

const root = path.resolve(__dirname, '..')
const themePath = path.join(root, 'themes', 'tokyo-night-dark-color-theme.json')

// For initial run, just read existing file and rewrite it back (no-op),
// so the pipeline is wired. Then we'll start replacing values programmatically.

function main() {
  const original = fs.readFileSync(themePath, 'utf8')
  const theme = JSON.parse(original) as Record<string, any>

  // Ensure structure
  theme.colors = theme.colors ?? {}

  // Apply a minimal subset via palette (no visual changes intended)
  const c = theme.colors as Record<string, string>

  c['activityBar.background'] = palette.bg.base // #16161c
  c['activityBarBadge.background'] = palette.brand.primary // #3d59a1
  c['list.highlightForeground'] = palette.accent.blue // #7aa2f7
  c['button.background'] = withAlpha(palette.brand.primary, 'dd') // #3d59a1dd
  c['button.hoverBackground'] = withAlpha(palette.brand.primary, 'aa') // #3d59a1aa
  c['editor.background'] = palette.bg.elevated // #1a1a22
  c['editor.foreground'] = palette.fg.primary // #a9b1d6
  c['titleBar.activeForeground'] = palette.fg.muted // #8a8ea8
  c['titleBar.inactiveForeground'] = palette.fg.subtle // #545c7e

  // Terminal ANSI mapping via palette
  c['terminal.ansiBlack'] = palette.ansi.black
  c['terminal.ansiBrightBlack'] = palette.ansi.brightBlack
  c['terminal.ansiRed'] = palette.ansi.red
  c['terminal.ansiBrightRed'] = palette.ansi.brightRed
  c['terminal.ansiGreen'] = palette.ansi.green
  c['terminal.ansiBrightGreen'] = palette.ansi.brightGreen
  c['terminal.ansiYellow'] = palette.ansi.yellow
  c['terminal.ansiBrightYellow'] = palette.ansi.brightYellow
  c['terminal.ansiBlue'] = palette.ansi.blue
  c['terminal.ansiBrightBlue'] = palette.ansi.brightBlue
  c['terminal.ansiMagenta'] = palette.ansi.magenta
  c['terminal.ansiBrightMagenta'] = palette.ansi.brightMagenta
  c['terminal.ansiCyan'] = palette.ansi.cyan
  c['terminal.ansiBrightCyan'] = palette.ansi.brightCyan
  c['terminal.ansiWhite'] = palette.ansi.white
  c['terminal.ansiBrightWhite'] = palette.ansi.brightWhite

  const out = JSON.stringify(theme, null, 2) + '\n'
  fs.writeFileSync(themePath, out, 'utf8')
}

main()
