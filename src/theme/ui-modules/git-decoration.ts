/**
 * Git decoration colors - colors for Git status indicators in UI
 * These colors are used for Git decorations in the editor and file explorer
 */
import { foundationColors } from '../palette/foundation/colors'

export const gitDecorationTokens = {
  // Modified resource - for files that have been modified
  'gitDecoration.modifiedResourceForeground': foundationColors.purple500,

  // Ignored resource - for files that are ignored by Git
  'gitDecoration.ignoredResourceForeground': foundationColors.gray500,

  // Deleted resource - for files that have been deleted
  'gitDecoration.deletedResourceForeground': foundationColors.red500,

  // Renamed resource - for files that have been renamed
  'gitDecoration.renamedResourceForeground': foundationColors.blue500,

  // Added resource - for files that have been added
  'gitDecoration.addedResourceForeground': foundationColors.blue500,

  // Untracked resource - for files that are not tracked by Git
  'gitDecoration.untrackedResourceForeground': foundationColors.cyan500,

  // Conflicting resource - for files with merge conflicts
  'gitDecoration.conflictingResourceForeground': foundationColors.yellow500,

  // Stage deleted resource - for deleted files in the staging area
  'gitDecoration.stageDeletedResourceForeground': foundationColors.red500,

  // Stage modified resource - for modified files in the staging area
  'gitDecoration.stageModifiedResourceForeground': foundationColors.purple500,
}
