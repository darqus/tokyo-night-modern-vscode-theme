import { buildNestedTokens } from '../palette/primitives'
import { flattenWorkbenchToColors, flattenSemanticToVSCode, convertTextmateNestedToArray } from './flatten'

export function generateNestedTheme() {
  const nested = buildNestedTokens()

  const colors = flattenWorkbenchToColors(nested.workbench)
  const semanticTokenColors = flattenSemanticToVSCode(nested.semantic)
  const tokenColors = convertTextmateNestedToArray(nested.tokens.textmate)

  return {
    name: 'Tokyo Night',
    type: 'dark' as const,
    semanticHighlighting: true,
    colors,
    semanticTokenColors,
    tokenColors,
  }
}
