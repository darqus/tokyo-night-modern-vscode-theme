import { palette } from '../../palette'
import { alpha } from '../../utils/color'
import { ensureContrast } from '../../utils/contrast'

export function generateGitColors(): Record<string, string> {
  const { blue, fg, red, teal, yellow, bg } = palette

  return {
    'gitDecoration.modifiedResourceForeground': ensureContrast(
      blue.light,
      bg.main,
      4.5
    ),
    'gitDecoration.ignoredResourceForeground': ensureContrast(
      fg.dim,
      bg.main,
      2.5
    ),
    'gitDecoration.deletedResourceForeground': ensureContrast(
      red.muted,
      bg.main,
      3.5
    ),
    'gitDecoration.renamedResourceForeground': ensureContrast(
      teal.dark,
      bg.main,
      4.5
    ),
    'gitDecoration.addedResourceForeground': ensureContrast(
      teal.dark,
      bg.main,
      4.5
    ),
    'gitDecoration.untrackedResourceForeground': ensureContrast(
      teal.dark,
      bg.main,
      4.5
    ),
    'gitDecoration.conflictingResourceForeground': ensureContrast(
      alpha(yellow.main, 0.9),
      bg.main,
      4.5
    ), // Увеличил непрозрачность
    'gitDecoration.stageDeletedResourceForeground': ensureContrast(
      red.muted,
      bg.main,
      3.5
    ),
    'gitDecoration.stageModifiedResourceForeground': ensureContrast(
      blue.light,
      bg.main,
      4.5
    ),
  }
}
