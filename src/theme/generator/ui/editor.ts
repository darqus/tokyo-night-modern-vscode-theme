import { c, colorRules } from '../../utils/color-builder.js'

export function generateEditorColors(): Record<string, string> {
  return colorRules()
    .add('selection.background', `${c.blue.main}40`)
    .add('editorCursor.foreground', c.blue.main)
    .add('editorIndentGuide.background1', `${c.neutral.dark}40`)
    .add('editorLineNumber.foreground', c.fg.dark)
    .add('editorBracketMatch.background', `${c.blue.main}40`)
    .add('peekViewEditor.background', c.bg.main)
    .addGroup('editor', {
      background: c.bg.main,
      foreground: c.fg.light,
      foldBackground: `${c.bg.dark}80`,
      selectionBackground: `${c.blue.main}40`,
      selectionHighlightBackground: `${c.blue.dark}30`,
      inactiveSelectionBackground: `${c.blue.main}20`,
      wordHighlightBackground: `${c.neutral.main}30`,
      wordHighlightStrongBackground: `${c.blue.light}30`,
      findMatchBackground: `${c.yellow.main}80`,
      findMatchHighlightBackground: `${c.yellow.dark}50`,
      findRangeHighlightBackground: `${c.neutral.dark}20`,
      hoverHighlightBackground: `${c.blue.main}20`,
      lineHighlightBackground: `${c.bg.dark}80`,
      lineHighlightBorder: c.bg.main,
      rangeHighlightBackground: `${c.blue.main}20`,
      symbolHighlightBackground: `${c.purple.main}30`,
      selectionForeground: c.fg.bright,
      wordHighlightTextBackground: `${c.neutral.main}30`,
      wordHighlightTextBorder: c.neutral.main,
      indentGuideBackground: `${c.neutral.dark}40`,
      indentGuideActiveBackground: `${c.neutral.main}80`,
      indentBracketsBackground: `${c.neutral.main}40`,
      indentBracketsActiveBackground: c.neutral.light,
      bracketMatchBackground: `${c.blue.main}40`,
      bracketMatchBorder: c.blue.light,
      bracketPairGuideBackground: `${c.blue.dark}40`,
      bracketPairGuideActiveBackground: c.blue.main,
      currentLineBackground: `${c.bg.dark}80`,
      currentLineBorder: c.neutral.dark,
      cursorBackground: c.fg.light,
      cursorForeground: c.blue.main,
      onTypeRenameBackground: `${c.blue.main}40`,
      peekViewResultBackground: c.bg.dark,
      peekViewEditorBackground: c.bg.main,
      peekViewTitleBackground: c.bg.dark,
      peekViewBorder: c.blue.main,
      peekViewTitleInfoForeground: c.fg.main,
      peekViewResultLineForeground: c.fg.main,
      peekViewResultMatchHighlightBackground: `${c.yellow.main}80`,
      peekViewEditorMatchHighlightBackground: `${c.yellow.main}80`,
      groupBorder: c.neutral.main,
      groupHeaderBackground: c.bg.dark,
      symbolIconArrayForeground: c.blue.main,
      symbolIconBooleanForeground: c.orange.main,
      symbolIconClassForeground: c.yellow.main,
      symbolIconColorForeground: c.pink.main,
      symbolIconConstantForeground: c.orange.light,
      symbolIconConstructorForeground: c.purple.main,
      symbolIconEnumForeground: c.green.light,
      symbolIconEnumMemberForeground: c.green.bright,
      symbolIconEventForeground: c.red.main,
      symbolIconFieldForeground: c.cyan.main,
      symbolIconFileForeground: c.fg.main,
      symbolIconFolderForeground: c.yellow.dark,
      symbolIconFunctionForeground: c.purple.light,
      symbolIconInterfaceForeground: c.green.main,
      symbolIconKeyForeground: c.orange.main,
      symbolIconKeywordForeground: c.red.main,
      symbolIconMethodForeground: c.purple.light,
      symbolIconModuleForeground: c.fg.light,
      symbolIconNamespaceForeground: c.fg.light,
      symbolIconNullForeground: c.red.dark,
      symbolIconNumberForeground: c.orange.bright,
      symbolIconObjectForeground: c.yellow.main,
      symbolIconOperatorForeground: c.pink.bright,
      symbolIconPackageForeground: c.teal.main,
      symbolIconPropertyForeground: c.cyan.light,
      symbolIconStringForeground: c.green.bright,
      symbolIconStructForeground: c.yellow.bright,
      symbolIconTextForeground: c.fg.bright,
      symbolIconTypeParameterForeground: c.purple.bright,
      symbolIconUnitForeground: c.orange.bright,
      symbolIconVariableForeground: c.cyan.bright,
    })
    .addGroup('editorGroup', {
      background: c.bg.main,
      emptyBackground: c.bg.main,
      focusedEmptyBorder: c.blue.main,
      dropBackground: `${c.blue.main}40`,
      headerTabsBackground: c.bg.dark,
      headerTabsBorder: c.bg.main,
      border: c.neutral.main,
    })
    .addGroup('editorGroupHeader', {
      tabsBackground: c.bg.dark,
      tabsBorder: c.bg.main,
      noTabsBorder: c.bg.main,
    })
    .addGroup('editorPane', {
      background: c.bg.main,
    })
    .addGroup('editorWidget', {
      background: c.bg.dark,
      foreground: c.fg.main,
      border: c.neutral.main,
      resizeBorder: c.blue.main,
    })
    .addGroup('editorSuggestWidget', {
      background: c.bg.dark,
      border: c.neutral.main,
      foreground: c.fg.main,
      highlightForeground: c.blue.light,
      focusHighlightForeground: c.blue.bright,
      selectedBackground: c.bg.main,
      selectedForeground: c.fg.bright,
      selectedIconForeground: c.blue.light,
    })
    .addGroup('editorHoverWidget', {
      background: c.bg.dark,
      foreground: c.fg.main,
      border: c.neutral.main,
      statusBarItemHoverBackground: c.bg.main,
    })
    .addGroup('editorMarkerNavigation', {
      background: c.bg.dark,
      errorBackground: c.red.main,
      warningBackground: c.yellow.main,
      infoBackground: c.blue.main,
    })
    .addGroup('editorOverviewRuler', {
      background: c.bg.main,
      border: c.neutral.main,
      errorForeground: c.red.main,
      warningForeground: c.yellow.main,
      infoForeground: c.blue.main,
      addedForeground: c.green.main,
      deletedForeground: c.red.main,
      modifiedForeground: c.yellow.main,
      commentForeground: c.blue.main,
      commentUnresolvedForeground: c.blue.light,
    })
    .addGroup('editorGutter', {
      background: c.bg.main,
      foreground: c.fg.main,
      border: c.neutral.main,
      addedBackground: c.green.main,
      deletedBackground: c.red.main,
      modifiedBackground: c.yellow.main,
      foldedBackground: c.bg.dark,
      indentationBackground: `${c.neutral.dark}40`,
      commentRangeForeground: c.fg.dark,
      commentGlyphForeground: c.blue.main,
      commentUnresolvedGlyphForeground: c.blue.light,
    })
    .addGroup('editorCodeLens', {
      foreground: c.fg.main,
    })
    .addGroup('editorBracketHighlight', {
      foreground1: c.blue.main,
      foreground2: c.cyan.main,
      foreground3: c.purple.main,
      foreground4: c.green.main,
      foreground5: c.orange.main,
      foreground6: c.pink.main,
      unexpectedBracket: c.red.main,
    })
    .addGroup('editorBracketPairGuide', {
      background1: `${c.blue.dark}40`,
      background2: `${c.cyan.dark}40`,
      background3: `${c.purple.dark}40`,
      background4: `${c.green.dark}40`,
      background5: `${c.orange.dark}40`,
      background6: `${c.pink.dark}40`,
    })
    .addGroup('peekView', {
      background: c.bg.dark,
      border: c.blue.main,
      resultBackground: c.bg.main,
      resultForeground: c.fg.main,
      resultMatchBackground: c.neutral.dark,
      resultSelectionBackground: c.blue.main,
      editorBackground: c.bg.main,
      editorGutterBackground: c.bg.dark,
      editorMatchHighlightBackground: `${c.yellow.main}80`,
      editorMatchHighlightBorder: c.yellow.bright,
    })
    .addGroup('problems', {
      errorIconForeground: c.red.main,
      warningIconForeground: c.yellow.main,
      infoIconForeground: c.blue.main,
    })
    .build()
}
