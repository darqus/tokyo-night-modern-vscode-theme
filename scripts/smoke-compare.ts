/// <reference types="node" />
import * as fs from 'node:fs'
import * as path from 'node:path'
import { buildColors } from '../src/build'
import { tokenColors } from '../src/tokenColors'
import { semanticTokenColors } from '../src/semanticTokenColors'

/**
 * Smoke test that checks that the generated sections equal the existing theme JSON sections.
 * Exits with non-zero code and prints a compact diff summary if any mismatches are found.
 */

const root = path.resolve(__dirname, '..')
const themePath = path.join(root, 'themes', 'tokyo-night-dark-color-theme.json')

const loadTheme = (): any => {
  const json = fs.readFileSync(themePath, 'utf8')
  return JSON.parse(json)
}

const stable = <T>(obj: T): string => {
  return JSON.stringify(obj, Object.keys(obj as any).sort(), 2)
}

const diffObjects = (a: any, b: any): string[] => {
  const issues: string[] = []
  const aKeys = new Set(Object.keys(a || {}))
  const bKeys = new Set(Object.keys(b || {}))
  for (const k of new Set([...Array.from(aKeys), ...Array.from(bKeys)])) {
    const av = a?.[k]
    const bv = b?.[k]
    if (typeof av === 'object' && typeof bv === 'object' && av && bv) {
      if (JSON.stringify(av) !== JSON.stringify(bv)) {
        issues.push(
          `Mismatch at key ${k}:\n  expected: ${JSON.stringify(
            av
          )}\n  actual:   ${JSON.stringify(bv)}`
        )
      }
    } else if (av !== bv) {
      issues.push(`Mismatch at key ${k}: expected ${av} vs actual ${bv}`)
    }
  }
  return issues
}

const main = () => {
  const theme = loadTheme()

  // colors - используем только buildColors, поскольку динамические цвета теперь встроены
  const genColors = buildColors()
  const colorsIssues = diffObjects(genColors, theme.colors)

  // tokenColors
  const tokenIssues: string[] = []
  const genTokenColors = tokenColors
  if (JSON.stringify(genTokenColors) !== JSON.stringify(theme.tokenColors)) {
    tokenIssues.push('tokenColors array mismatch')
  }

  // semanticTokenColors
  const genSemantic = semanticTokenColors
  const semIssues = diffObjects(genSemantic, theme.semanticTokenColors)

  const allIssues = [...colorsIssues, ...tokenIssues, ...semIssues]
  if (allIssues.length) {
    console.error('Smoke compare failed:')
    for (const msg of allIssues) console.error(' -', msg)
    process.exit(1)
  }
  console.log('Smoke compare OK')
}

if (require.main === module) {
  main()
}
