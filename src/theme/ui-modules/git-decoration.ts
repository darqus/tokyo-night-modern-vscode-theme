/**
 * Git decoration colors - colors for Git status indicators in UI
 * These colors are used for Git decorations in the editor and file explorer
 */
import { getToken } from '../design-tokens'

export const gitDecorationTokens = {
  // Modified resource - for files that have been modified
  'gitDecoration.modifiedResourceForeground': getToken('color.interactive.secondary'),

  // Ignored resource - for files that are ignored by Git
  'gitDecoration.ignoredResourceForeground': getToken('color.text.secondary'),

  // Deleted resource - for files that have been deleted
  'gitDecoration.deletedResourceForeground': getToken('accent.error'),

  // Renamed resource - for files that have been renamed
  'gitDecoration.renamedResourceForeground': getToken('accent.primary'),

  // Added resource - for files that have been added
  'gitDecoration.addedResourceForeground': getToken('accent.primary'),

  // Untracked resource - for files that are not tracked by Git
 'gitDecoration.untrackedResourceForeground': getToken('accent.info'),

  // Conflicting resource - for files with merge conflicts
  'gitDecoration.conflictingResourceForeground': getToken('accent.warning'),

  // Stage deleted resource - for deleted files in the staging area
  'gitDecoration.stageDeletedResourceForeground': getToken('accent.error'),

  // Stage modified resource - for modified files in the staging area
  'gitDecoration.stageModifiedResourceForeground': getToken('color.interactive.secondary'),
}