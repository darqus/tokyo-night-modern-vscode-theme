import { colorRules, c } from '../../utils/color-builder.js'
import {
  subtleBackground,
  subtleHighlight,
  mediumHighlight,
  ADJUST,
} from '../../utils/color-helpers.js'
import { lighten } from '../../utils/color.js'

export function generateDiffColors(): Record<string, string> {
  return colorRules()
    .add('diffEditor.insertedTextBackground', subtleBackground(c.green.dark))
    .add('diffEditor.removedTextBackground', subtleBackground(c.red.dark))
    .add('diffEditor.insertedLineBackground', subtleBackground(c.green.dark))
    .add('diffEditor.removedLineBackground', subtleBackground(c.red.dark))
    .add(
      'diffEditorGutter.insertedLineBackground',
      subtleHighlight(c.green.dark)
    )
    .add('diffEditorGutter.removedLineBackground', subtleBackground(c.red.dark))
    .add(
      'diffEditorOverview.insertedForeground',
      subtleHighlight(c.green.dark)
    )
    .add('diffEditorOverview.removedForeground', subtleBackground(c.red.dark))
    .add('diffEditor.diagonalFill', lighten(c.bg.main, ADJUST.SMALL))
    .add(
      'diffEditor.unchangedCodeBackground',
      mediumHighlight(lighten(c.bg.main, ADJUST.SLIGHT))
    )
    .add('multiDiffEditor.headerBackground', c.bg.light)
    .add('multiDiffEditor.border', c.bg.light)
    .build()
}
