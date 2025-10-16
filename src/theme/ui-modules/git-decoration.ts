/**
 * Git decoration colors - colors for Git status indicators in UI
 * These colors are used for Git decorations in the editor and file explorer
 */
import { palette } from '../palette/index'

export const gitDecorationTokens = {
  // Modified resource - for files that have been modified
  'gitDecoration.modifiedResourceForeground': palette.purple,

  // Ignored resource - for files that are ignored by Git
  'gitDecoration.ignoredResourceForeground': palette.textDisabled,

  // Deleted resource - for files that have been deleted
  'gitDecoration.deletedResourceForeground': palette.error,

  // Renamed resource - for files that have been renamed
  'gitDecoration.renamedResourceForeground': palette.secondary,

  // Added resource - for files that have been added
  'gitDecoration.addedResourceForeground': palette.secondary,

  // Untracked resource - for files that are not tracked by Git
  'gitDecoration.untrackedResourceForeground': palette.info,

  // Conflicting resource - for files with merge conflicts
  'gitDecoration.conflictingResourceForeground': palette.warning,

  // Stage deleted resource - for deleted files in the staging area
  'gitDecoration.stageDeletedResourceForeground': palette.error,

  // Stage modified resource - for modified files in the staging area
  'gitDecoration.stageModifiedResourceForeground': palette.purple,
}
