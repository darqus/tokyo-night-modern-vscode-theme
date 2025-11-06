import { colorRules, c } from '../../utils/color-builder.js'
import { alpha } from '../../utils/color.js'
import { OPACITY } from '../../utils/color-helpers.js'

export function generateGitColors(): Record<string, string> {
  return colorRules()
    .addGroup('gitDecoration', {
      modifiedResourceForeground: c.blue.light,
      ignoredResourceForeground: c.fg.dark,
      deletedResourceForeground: c.red.dark,
      renamedResourceForeground: c.teal.dark,
      addedResourceForeground: c.teal.dark,
      untrackedResourceForeground: c.teal.dark,
      conflictingResourceForeground: alpha(c.yellow.main, OPACITY.VERY_STRONG),
      stageDeletedResourceForeground: c.red.dark,
      stageModifiedResourceForeground: c.blue.light,
    })
    .build()
}
