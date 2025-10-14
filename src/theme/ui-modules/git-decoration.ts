/**
 * Git decoration colors - colors for Git status indicators in UI
 * These colors are used for Git decorations in the editor and file explorer
 */

export const gitDecorationTokens = {
  // Modified resource - for files that have been modified
  'gitDecoration.modifiedResourceForeground': '#B79DFF',
  
  // Ignored resource - for files that are ignored by Git
  'gitDecoration.ignoredResourceForeground': '#515C7E',
  
  // Deleted resource - for files that have been deleted
  'gitDecoration.deletedResourceForeground': '#FF5370',
  
  // Renamed resource - for files that have been renamed
  'gitDecoration.renamedResourceForeground': '#A779F3',
  
  // Added resource - for files that have been added
  'gitDecoration.addedResourceForeground': '#A779F3',
  
  // Untracked resource - for files that are not tracked by Git
  'gitDecoration.untrackedResourceForeground': '#7BCCFC',
  
  // Conflicting resource - for files with merge conflicts
  'gitDecoration.conflictingResourceForeground': '#F2B04E',
  
  // Stage deleted resource - for deleted files in the staging area
  'gitDecoration.stageDeletedResourceForeground': '#FF5370',
  
  // Stage modified resource - for modified files in the staging area
  'gitDecoration.stageModifiedResourceForeground': '#B79DFF',
}