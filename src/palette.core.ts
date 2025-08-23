import { basePalette } from './palette.base'
import { interfaceColors } from './palette.interface'
import * as derived from './palette.core.derived'

export const core = {
  bg: {
    base: interfaceColors.editorBg,
    elevated: derived.bgElevated,
    overlay: derived.bgOverlay,
    input: derived.bgInput,
    hover: derived.bgHover,
    active: derived.bgActive,
    drop: derived.bgDrop,
    lineHighlight: derived.bgLineHighlight,
    bracketMatch: derived.bgBracketMatch,
    tabs: interfaceColors.editorBg,
    selection: {
      active: derived.bgSelectionActive,
      inactive: derived.bgSelectionInactive,
      focus: derived.bgSelectionFocus,
      menu: derived.bgSelectionMenu,
    },
    stateLabel: derived.bgStateLabel,
  },
  border: derived.border,
  text: {
    primary: derived.textPrimary,
    muted: derived.textMuted,
    subtle: basePalette.gray,
    inactive: derived.textInactive,
    soft: derived.textSoft,
    selection: basePalette.white,
    subtle2: derived.textSubtle2,
    gray600: derived.textGray600,
    comment: derived.textComment,
    commentDoc: derived.textCommentDoc,
    commentDocEmphasized: derived.textCommentDocEmphasized,
    preformat: derived.textPreformat,
    placeholder: derived.textPlaceholder,
    editorLinkActive: derived.textEditorLinkActive,
  },
  accent: {
    blue: basePalette.blue,
    cyan: basePalette.cyan,
    teal: basePalette.teal,
    purple: basePalette.purple,
    magenta: basePalette.magenta,
    red: basePalette.red,
    green: basePalette.green,
    yellow: basePalette.yellow,
    orange: basePalette.orange,
  },
  brand: {
    button: {
      primary: derived.brandButtonPrimary,
      hover: derived.brandButtonHover,
    },
  },
  ui: {
    shadow: derived.uiShadow,
    selectionWash: derived.uiSelectionWash,
    scrollbarBase: derived.uiScrollbarBase,
    tab: {
      activeModified: basePalette.purple,
      inactiveModified: basePalette.cyan,
      unfocusedActive: derived.uiTabUnfocusedActive,
    },
    git: {
      ignored: derived.uiGitIgnored,
      deleted: derived.uiGitDeleted,
      conflicting: derived.uiGitConflicting,
      stageDeleted: derived.uiGitStageDeleted,
      stageModified: derived.uiGitStageModified,
    },
  },
} as const
