import { basePalette } from './palette.base'
import { interfaceColors } from './palette.interface'
import { withAlpha, mix, lightenToward, darkenToward } from './utils/color'

export const aquaLight = lightenToward(basePalette.cyan, basePalette.teal, 0.18)

export const bgElevated = lightenToward(
  interfaceColors.editorBg,
  basePalette.black,
  0.04
)

export const bgOverlay = lightenToward(
  interfaceColors.editorBg,
  basePalette.black,
  0.08
)

export const bgSunken = lightenToward(
  interfaceColors.editorBg,
  basePalette.black,
  0.12
)

export const bgInput = mix(interfaceColors.editorBg, basePalette.gray, 0.15)

export const bgHover = lightenToward(
  interfaceColors.editorBg,
  basePalette.white,
  0.1
)

export const bgActive = lightenToward(
  interfaceColors.editorBg,
  basePalette.blue,
  0.07
)

export const bgDrop = darkenToward(
  interfaceColors.editorBg,
  basePalette.black,
  0.12
)

export const bgLineHighlight = lightenToward(
  interfaceColors.editorBg,
  basePalette.blue,
  0.04
)

export const bgBracketMatch = lightenToward(
  interfaceColors.editorBg,
  basePalette.cyan,
  0.06
)

export const bgSelectionActive = withAlpha(basePalette.blue, 0.18)
export const bgSelectionInactive = withAlpha(basePalette.blue, 0.1)
export const bgSelectionFocus = withAlpha(basePalette.cyan, 0.18)
export const bgSelectionMenu = withAlpha(basePalette.cyan, 0.18)

export const bgStateLabel = darkenToward(
  interfaceColors.editorBg,
  basePalette.black,
  0.06
)

export const border = lightenToward(basePalette.black, basePalette.white, 0.1)

export const textPrimary = darkenToward(
  basePalette.black,
  basePalette.white,
  0.65
)

export const textMuted = mix(interfaceColors.editorFg, basePalette.gray, 0.3)

export const textInactive = mix(interfaceColors.editorFg, basePalette.gray, 0.5)

export const textSoft = lightenToward(
  interfaceColors.editorFg,
  basePalette.white,
  0.12
)

export const textSubtle2 = mix(interfaceColors.editorFg, basePalette.gray, 0.4)

export const textGray600 = darkenToward(
  basePalette.gray,
  basePalette.black,
  0.2
)

export const textComment = lightenToward(
  interfaceColors.editorBg,
  basePalette.gray,
  0.1
)

export const textCommentDoc = lightenToward(
  interfaceColors.editorBg,
  basePalette.gray,
  0.1
)

export const textCommentDocEmphasized = lightenToward(
  interfaceColors.editorBg,
  basePalette.gray,
  0.1
)

export const textPreformat = lightenToward(
  interfaceColors.editorFg,
  basePalette.gray,
  0.1
)

export const textPlaceholder = mix(
  interfaceColors.editorFg,
  basePalette.gray,
  0.5
)

export const textEditorLinkActive = lightenToward(
  interfaceColors.editorFg,
  basePalette.blue,
  0.18
)

export const brandButtonPrimary = mix(
  interfaceColors.editorBg,
  basePalette.blue,
  0.25
)

export const brandButtonHover = mix(
  interfaceColors.editorBg,
  basePalette.blue,
  0.3
)

export const uiShadow = withAlpha(basePalette.blue, 0.2)

export const uiSelectionWash = withAlpha(basePalette.cyan, 0.18)

export const uiScrollbarBase = mix(basePalette.blue, basePalette.gray, 0.4)

export const uiTabUnfocusedActive = darkenToward(
  basePalette.blue,
  basePalette.black,
  0.18
)

export const uiGitIgnored = darkenToward(
  textComment,
  interfaceColors.editorBg,
  0.4
)

export const uiGitDeleted = darkenToward(
  basePalette.red,
  interfaceColors.editorBg,
  0.3
)

export const uiGitConflicting = darkenToward(
  aquaLight,
  interfaceColors.editorBg,
  0.3
)

export const uiGitStageDeleted = darkenToward(
  basePalette.red,
  interfaceColors.editorBg,
  0.2
)

export const uiGitStageModified = darkenToward(
  basePalette.blue,
  interfaceColors.editorBg,
  0.2
)
