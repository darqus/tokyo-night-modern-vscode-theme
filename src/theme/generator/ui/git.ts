import { palette } from '../../palette';
import { alpha } from '../../utils/color';

export function generateGitColors(): Record<string, string> {
  const { blue, fg, red, teal, yellow } = palette;

  return {
    'gitDecoration.modifiedResourceForeground': blue.light,
    'gitDecoration.ignoredResourceForeground': fg.dim,
    'gitDecoration.deletedResourceForeground': red.muted,
    'gitDecoration.renamedResourceForeground': teal.dark,
    'gitDecoration.addedResourceForeground': teal.dark,
    'gitDecoration.untrackedResourceForeground': teal.dark,
    'gitDecoration.conflictingResourceForeground': alpha(yellow.main, 0.80),
    'gitDecoration.stageDeletedResourceForeground': red.muted,
    'gitDecoration.stageModifiedResourceForeground': blue.light,
  };
}
