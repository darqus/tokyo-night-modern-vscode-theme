import { palette } from '../../palette/index.js'
import { alpha } from '../../utils/color.js'

export function generateGitColors(): Record<string, string> {
  const { blue, fg, red, teal, yellow } = palette

  return {
    'gitDecoration.modifiedResourceForeground': blue.light,
    'gitDecoration.ignoredResourceForeground': fg.dark,
    'gitDecoration.deletedResourceForeground': red.dark,
    'gitDecoration.renamedResourceForeground': teal.dark,
    'gitDecoration.addedResourceForeground': teal.dark,
    'gitDecoration.untrackedResourceForeground': teal.dark,
    'gitDecoration.conflictingResourceForeground': alpha(yellow.main, 0.8),
    'gitDecoration.stageDeletedResourceForeground': red.dark,
    'gitDecoration.stageModifiedResourceForeground': blue.light,
  }
}
