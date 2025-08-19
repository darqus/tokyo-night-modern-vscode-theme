import { palette } from '../palette'
import { withAlpha } from '../utils/color'

export const getGitColors = () => ({
  // Оформление Git
  'gitDecoration.modifiedResourceForeground': palette.accent.blue, // Измененные файлы
  'gitDecoration.ignoredResourceForeground': palette.ui.git.ignored, // Игнорируемые файлы
  'gitDecoration.deletedResourceForeground': palette.ui.git.deleted, // Удаленные файлы
  'gitDecoration.renamedResourceForeground': palette.accent.teal, // Переименованные файлы
  'gitDecoration.addedResourceForeground': palette.accent.teal, // Добавленные файлы
  'gitDecoration.untrackedResourceForeground': palette.accent.teal, // Неотслеживаемые файлы
  'gitDecoration.conflictingResourceForeground': palette.ui.git.conflicting, // Конфликтующие файлы
  'gitDecoration.stageDeletedResourceForeground': palette.ui.git.stageDeleted, // Удаленные в стейдже
  'gitDecoration.stageModifiedResourceForeground': palette.ui.git.stageModified, // Измененные в стейдже
  'git.blame.editorDecorationForeground': withAlpha(palette.fg.subtle, '50%'), // Git blame аннотации
})
