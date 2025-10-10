import { palette } from '../src/theme/palette'

// Проверяем конкретные проблемные ключи
const problemKeys = [
  'accentGreen',
  'accentRed',
  'alpha1f',
  'alpha14',
  'accentBlue',
  'alpha0f',
  'accentYellow',
  'alpha1a',
  'alpha0d',
  'selectionAlpha',
  'alpha1fFull',
  'editorLineNumberActive',
  'activityBarInactive',
  'accentBlueAlt',
  'grayDark',
  'selectionAlphaLight',
  'selectionAlphaMid',
  'selectionAlphaBorder',
  'alpha33',
  'alpha59',
  'alpha00',
  'alphaCC',
  'alpha99',
  'gray',
  'terminalBrightRed',
  'terminalBrightGreen',
  'terminalBrightYellow',
  'terminalBrightMagenta',
  'grayWidgetScrollbarSliderHover',
  'grayWidgetBorder',
  'hoverWidgetHighlight',
  'grayWidgetPeekViewMatch',
  'grayWidgetPeekViewSelection',
  'grayWidgetFilterMatch',
  'grayWidgetFilterMatchBorder',
  'grayWidgetSearchMatch',
  'grayWidgetSearchMatchBorder',
  'grayWidgetFindMatch',
  'grayWidgetFindMatchBorder',
  'grayWidgetFindMatchHighlight',
  'grayWidgetWordHighlight',
  'grayWidgetWordHighlightStrong',
  'grayWidgetHoverHighlight',
  'grayWidgetSelectionHighlight',
  'grayWidgetSelectionHighlightBorder',
  'grayWidgetToolbarHover',
  'grayWidgetToolbarActive',
  'grayWidgetToolbarOutline',
  'grayWidgetDebugToolbar',
  'grayWidgetDebugToolbarBorder',
  'grayWidgetDebugException',
  'grayWidgetDebugExceptionBorder',
  'grayWidgetStackFrame',
  'grayWidgetStackFrameHighlight',
  'grayWidgetBreakpoint',
  'grayWidgetBreakpointDisabled',
  'grayWidgetBreakpointUnverified',
  'grayWidgetBreakpointCurrent',
  'grayWidgetBreakpointStack',
  'grayWidgetInlineChat',
  'grayWidgetInlineChatForeground',
  'grayWidgetInlineChatBorder',
  'grayWidgetInlineChatInput',
  'grayScrollbar',
  'grayWidgetScrollbarSlider',
  'grayWidgetScrollbarSliderHover',
  'grayWidgetScrollbarSliderActive',
  'grayWidgetRangeHighlight',
  'grayWidgetOverviewRulerFindMatch',
  'grayWidgetOverviewRulerSelectionHighlight',
  'grayWidgetOverviewRulerRangeHighlight',
  'grayWidgetOverviewRulerWordHighlight',
  'grayWidgetOverviewRulerWordHighlightStrong',
  'grayWidgetMinimapFindMatch',
  'grayWidgetMinimapSelectionHighlight',
  'grayWidgetEditorGroupDrop',
  'grayWidgetListDrop',
  'grayWidgetPanelSectionDrop',
  'grayWidgetTerminalDrop',
  'blueStrong',
  'white',
  'blueHover',
  'blueSeparator',
  'blueSecondary',
  'blueBadge',
  'yellowBadge',
  'redBadge',
  'grayBadge',
  'grayMenu',
  'grayShadow',
  'backgroundAlt',
  'backgroundSidebar',
  'backgroundPanel',
  'border',
  'borderAlt',
  'foregroundAlt',
  'foregroundInactive',
  'grayLight',
  'terminalBrightMagenta',
  'accentPurple',
  'accentPink',
  'accentCyan',
  'accentTeal',
  'accentOrange',
  'commentDoc',
  'jsdocTag',
  'keywordAccess',
  'keywordAsync',
  'interface',
  'enum',
  'namespace',
  'typeParam',
  'builtinType',
  'comparisonOp',
  'assignOp',
  'spreadOp',
  'annotation',
  'attribute',
  'pragma',
  'mdHeading',
  'mdCode',
  'bracket',
  'delimiter',
  'deprecated',
  'variable',
  'funcParam',
  'regexp',
  'accessor',
]

console.log('Checking problem keys:')
problemKeys.forEach((key) => {
  if (!(key in palette)) {
    console.log(`Missing key: ${key}`)
  } else if (palette[key] === undefined) {
    console.log(`Undefined key: ${key}`)
  } else if (palette[key] === null) {
    console.log(`Null key: ${key}`)
  }
})

// Проверяем специфические проблемные комбинации
import { combineColorWithAlpha } from '../src/theme/color-utils'

console.log('\nChecking specific combinations:')
console.log(
  'accentGreen + alpha1f:',
  combineColorWithAlpha(palette.accentGreen, palette.alpha1f)
)
console.log(
  'accentRed + alpha1f:',
  combineColorWithAlpha(palette.accentRed, palette.alpha1f)
)
console.log(
  'accentGreen + alpha14:',
  combineColorWithAlpha(palette.accentGreen, palette.alpha14)
)
console.log(
  'accentRed + alpha14:',
  combineColorWithAlpha(palette.accentRed, palette.alpha14)
)
console.log(
  'accentBlue + alpha1f:',
  combineColorWithAlpha(palette.accentBlue, palette.alpha1f)
)
console.log(
  'accentGreen + alpha0f:',
  combineColorWithAlpha(palette.accentGreen, palette.alpha0f)
)
console.log(
  'accentBlue + alpha0f:',
  combineColorWithAlpha(palette.accentBlue, palette.alpha0f)
)
console.log(
  'accentYellow + alpha1a:',
  combineColorWithAlpha(palette.accentYellow, palette.alpha1a)
)
console.log(
  'accentYellow + alpha0d:',
  combineColorWithAlpha(palette.accentYellow, palette.alpha0d)
)
console.log(
  'accentGreen + alpha33:',
  combineColorWithAlpha(palette.accentGreen, palette.alpha33)
)
console.log(
  'accentBlueAlt + alpha59:',
  combineColorWithAlpha(palette.accentBlueAlt, palette.alpha59)
)
console.log(
  'background + alphaCC:',
  combineColorWithAlpha(palette.background, palette.alphaCC)
)
console.log(
  'foreground + alphaCC:',
  combineColorWithAlpha(palette.foreground, palette.alphaCC)
)
console.log(
  'foregroundAlt + alpha99:',
  combineColorWithAlpha(palette.foregroundAlt, palette.alpha99)
)
