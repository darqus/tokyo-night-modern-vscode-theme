import type { SemanticTokenStyle } from '../types';
import { palette } from '../palette';

export function generateSemanticTokenColors(): Record<string, SemanticTokenStyle> {
  const { yellow, fg, teal, purple } = palette;

  return {
    'parameter.declaration': {
      foreground: yellow.main,
    },
    'parameter': {
      foreground: '#d9d4cd',
    },
    'property.declaration': {
      foreground: teal.main,
    },
    'property.defaultLibrary': {
      foreground: '#2ac3de',
    },
    '*.defaultLibrary': {
      foreground: '#2ac3de',
    },
    'variable.defaultLibrary': {
      foreground: '#2ac3de',
    },
    'variable.declaration': {
      foreground: purple.light,
    },
    'variable': {
      foreground: fg.brightest,
    },
  };
}
