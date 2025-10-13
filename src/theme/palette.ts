import {
  createColorPalette,
  validatePalette,
  AlphaValues,
  ColorPalette,
} from './color-utils'

// 1. Базовые цвета (основа темы)
const baseColors: ColorPalette = {
  // --- Backgrounds ---
  background: '#101620', // editor.background
  backgroundAlt: '#0f141c', // activityBar.background, editorPane.background, etc.
  backgroundAlt2: '#122843', // editor.lineHighlightBackground, dropdown.listBackground
  backgroundAlt3: '#111117', // editor.foldBackground (base for alpha)
  backgroundAlt4: '#1c1d29', // list.focusBackground, list.inactiveSelectionBackground
  backgroundAlt5: '#1e202e', // menu.selectionBackground, menubar.selectionBackground
  backgroundAlt6: '#312a4d', // editorSuggestWidget.selectedBackground
  backgroundAlt7: '#17293f', // activityBar.activeBackground

  // --- Borders ---
  border: '#4e6ab2', // panelSection.border, listFilterWidget.outline, terminal.findMatchBorder
  borderAlt: '#6183bb', // widget.border, menu.border, editorSuggestWidget.border
  borderAlt2: '#42465d', // editorBracketMatch.border
  borderAlt3: '#222f42', // editorGroup.dropIntoPromptBorder
  borderAlt4: '#111c27', // input.border
  borderAlt5: '#963c47', // debugExceptionWidget.border
  borderFocus: '#131e2b', // focusBorder

  // --- Foregrounds ---
  foreground: '#a9b1d6', // editor.foreground, dropdown.foreground, etc.
  foregroundAlt: '#82859e', // breadcrumb.foreground, sideBar.foreground, statusBar.foreground
  foregroundAlt2: '#9aa5ce', // charts.foreground, debugTokenExpression.value
  foregroundAlt3: '#cccccc', // foreground, debugConsole.infoForeground, terminal.ansiWhite
  foregroundAlt4: '#515670', // descriptionForeground, errorForeground
  foregroundAlt5: '#484f70', // editorCodeLens.foreground
  foregroundAlt6: '#494f67', // editorLineNumber.foreground, terminal.ansiBlack
  foregroundAlt7: '#acb0d0', // editorLink.activeForeground, terminal.ansiBrightWhite
  foregroundAlt8: '#aabaff', // editorLineNumber.activeForeground
  foregroundAlt9: '#c0caf5', // inputOption.activeForeground

  // --- Common Colors ---
  white: '#ffffff',
  black: '#000000',
  transparent: '#000000',
  editorRuler: '#0f141c',

  // --- Special UI ---
  textBlockQuoteBg: '#0b0d10',
  sashHoverBorder: '#29355a',
}

// 2. Акцентные цвета (для выделения)
const accentColors: ColorPalette = {
  // --- Blues ---
  blue: '#7aa2f7',
  blueLight: '#7dcfff', // debugTokenExpression.name, terminal.ansiBrightCyan - NOTE: same as cyan
  blueLight2: '#68b3de', // editorBracketHighlight.foreground2
  blueMid: '#698cd6', // editorBracketHighlight.foreground1
  blueDark: '#4e6ab2', // activityBarBadge.background, button.background
  blueDark2: '#6183bb', // gitDecoration.stageModifiedResourceForeground, list.highlightForeground
  blueDark3: '#394b70', // editorGutter.modifiedBackground
  blueDark4: '#668ac4', // list.highlightForeground

  // --- Purples ---
  purple: '#bb9af7',
  purpleMid: '#9a7ecc', // editorBracketHighlight.foreground3
  purpleDark: '#7256a3', // charts.purple

  // --- Greens ---
  green: '#9ece6a', // debugTokenExpression.string
  greenDark: '#41a6b5', // charts.green, gitDecoration.addedResourceForeground
  greenDark2: '#164846', // editorGutter.addedBackground
  greenDark3: '#80a856', // editorBracketHighlight.foreground5
  greenDark4: '#449dab', // gitDecoration.renamedResourceForeground
  greenDark5: '#1c5957', // minimapGutter.addedBackground

  // --- Yellows & Oranges ---
  yellow: '#e0af68',
  yellowDark: '#c49a5a', // debugConsole.warningForeground, editorBracketHighlight.foreground6
  yellowDark2: '#e2bd3a', // editor.stackFrameHighlightBackground (base)
  orange: '#ff9e64',
  orangeDark: '#bb7a61', // gitDecoration.conflictingResourceForeground
  orangeDark2: '#fdc886', // gitDecoration.modifiedResourceForeground
  orangeDark3: '#c97018', // list.invalidItemForeground

  // --- Reds & Pinks ---
  red: '#FD86E1', // charts.red, gitDecoration.deletedResourceForeground
  redDark: '#db4b4b', // editorBracketHighlight.unexpectedBracket.foreground
  redDark2: '#bb616b', // debugConsole.errorForeground
  redDark3: '#963c47', // debugExceptionWidget.border
  redDark4: '#823c41', // editorGutter.deletedBackground
  redDark5: '#703438', // editorOverviewRuler.deletedForeground
  redDark6: '#914c54', // gitDecoration.stageDeletedResourceForeground
  redDark7: '#a6333f', // listFilterWidget.noMatchesOutline
  redDark8: '#85353e', // inputValidation.errorBackground
  redError: '#FF5370', // token invalid

  // --- Cyans & Teals ---
  cyan: '#7dcfff', // debugTokenExpression.name, terminal.ansiBrightCyan - NOTE: same as blueLight
  cyanDark: '#73daca', // debugConsoleInputIcon.foreground
  cyanDark2: '#25aac2', // editorBracketHighlight.foreground4
  cyanDark3: '#0da0ba', // editorHint.foreground, editorInfo.foreground
  cyanDark4: '#1abc9c', // editorOverviewRuler.infoForeground
  cyanDark5: '#0db9d7', // inputValidation.infoBorder
  cyanDark6: '#2ac3de', // welcomePage.progress.foreground
  teal: '#41a6b5',

  // --- Other ---
  pink: '#bb9af7', // terminal.ansiBrightMagenta, terminal.ansiMagenta
  // magenta: '#bb9af7', // alias for pink - REMOVED: same as pink
  gitIgnored: '#616680',
  statusBarDebugBg: '#ff9e64',
  statusBarRemoteBg: '#7aa2f7',
  welcomePageProgress: '#2ac3de',
}

// 3. Цвета для синтаксиса
const syntaxColors: ColorPalette = {
  comment: '#696F87',
  commentDoc: '#5A638C',
  commentDocTag: '#646E9C',
  constant: '#e55381',
  string: '#85D0B7',
  stringEscape: '#89DDFF',
  constantColor: '#9AA5CE',
  invalid: '#FF5370',
  deprecated: '#BB9AF7',
  storageType: '#BB9AF7',
  storageModifier: '#9D7CD8',
  templateExpression: '#7DCFFF',
  keyword: '#BB9AF7',
  keywordControl: '#0DB9D7',
  keywordOperator: '#BFD5DE', // base for alpha
  keywordOperatorSpread: '#F59CE0',
  keywordOperatorNew: '#FD86E1',
  keywordControlExport: '#7DCFFF',
  keywordControlImport: '#BB9AF7',
  keywordDML: '#7DCFFF',
  keywordLogical: '#BB9AF7',
  tag: '#FD86E1',
  tagPunctuation: '#BFD5DE', // base for alpha
  constantPhp: '#FD86E1',
  variable: '#C0CAF5',
  variableProperty: '#7DCFFF',
  variableObjectProperty: '#C0CAF5',
  variableNested: '#41A6B5',
  variableLanguage: '#FD86E1',
  function: '#7AA2F7',
  functionParameter: '#FD86E1',
  type: '#BB9AF7',
  class: '#0DB9D7',
  className: '#C0CAF5',
  cssProperty: '#7AA2F7',
  cssConstant: '#9ECE6A',
  cssClass: '#C0CAF5',
  cssId: '#BB9AF7',
  cssTag: '#0DB9D7',
  cssPseudo: '#0DB9D7',
  cssPropertyList: '#9ABDF5',
  cssAtRule: '#FF9E64',
  cssParentSelector: '#73DACA',
  cssMixin: '#BB9AF7',
  cssMixinKeyword: '#9D7CD8',
  cssSupport: '#85D0B7',
  jsModule: '#C0CAF5',
  jsThis: '#FD86E1',
  htmlAttribute: '#BB9AF7',
  htmlEntity: '#0DB9D7',
  htmlId: '#BB9AF7',
  sassKeyword: '#7AA2F7',
  markupInserted: '#449DAB',
  markupDeleted: '#914C54',
  markupChanged: '#6183BB',
  regexp: '#B4F9F8',
  regexpGroup: '#FD86E1',
  regexpClass: '#BB9AF7',
  regexpClassSet: '#E0AF68',
  regexpQuantifier: '#89DDFF',
  regexpEscape: '#C0CAF5',
  decorator: '#7AA2F7',
  unit: '#FD86E1',
  jsonKey: '#7AA2F7',
  jsonKeyLevel1: '#FD86E1',
  jsonKeyLevel2: '#FD86E1',
  jsonKeyLevel3: '#FD86E1',
  jsonKeyLevel4: '#FD86E1',
  jsonKeyLevel5: '#FD86E1',
  jsonKeyLevel6: '#73DACA',
  jsonKeyLevel7: '#FD86E1',
  jsonKeyLevel8: '#9ECE6A',
  mdListItem: '#BFD5DE', // base for alpha
  mdBlock: '#BFD5DE', // base for alpha
  mdRaw: '#BB9AF7',
  mdRawPunctuation: '#4E5579',
  mdHeading1: '#89DDFF',
  mdHeading2: '#61BDF2',
  mdHeading3: '#7AA2F7',
  mdHeading4: '#6D91DE',
  mdHeading5: '#9AA5CE',
  mdHeading6: '#747CA1',
  mdItalic: '#C0CAF5',
  mdBold: '#C0CAF5',
  mdQuote: '#4E5579',
  mdLink: '#73DACA',
  mdCode: '#89DDFF',
  mdSeparator: '#444B6A',
  mdTable: '#C0CEFC',
  tokenInfo: '#0DB9D7',
  tokenWarn: '#FFDB69',
  tokenError: '#DB4B4B',
  tokenDebug: '#B267E6',
  apacheconfTag: '#FD86E1',
  preprocessor: '#73DACA',
  envVar: '#7AA2F7',
  jsdocTag: '#9D7CD8',
  jsdocType: '#E0AF68',
  jsdocVariable: '#FF5370',
  htmlComponent: '#FDC886',
  storage: '#FDC886',
  variableName: '#E6DAF9',
  htmlTag: '#769DF7',
  htmlAttributeName: '#9A9AF7',
  declaration: '#C3A0F7',
  object: '#0DB9D7',
  parameter: '#73DACA',
  numeric: '#A492FF',
  objectKey: '#AC6DD5',
  matchText: '#000000',
}

// 4. Цвета для специфических элементов UI
const uiColors: ColorPalette = {
  // Diff editor
  diffInsertedBg: '#41a6b5',
  diffRemovedBg: '#db4b4b',
  // Editor general
  editorFindMatchBg: '#4e6ab2',
  editorFindRangeHighlightBg: '#515c7e',
  editorFocusedStackFrameBg: '#73daca',
  editorInactiveSelectionBg: '#515c7e',
  editorRangeHighlightBg: '#515c7e',
  editorSelectionBg: '#515c7e',
  editorSelectionHighlightBg: '#515c7e',
  editorStackFrameBg: '#e2bd3a',
  editorWordHighlightBg: '#515c7e',
  editorWordHighlightStrongBg: '#515c7e',
  // Editor gutter
  gutterAddedBg: '#164846',
  gutterDeletedBg: '#823c41',
  gutterModifiedBg: '#394b70',
  // Editor overview ruler
  overviewRulerAddedFg: '#164846',
  overviewRulerDeletedFg: '#703438',
  overviewRulerErrorFg: '#db4b4b',
  overviewRulerFindMatchFg: '#a9b1d6',
  overviewRulerInfoFg: '#1abc9c',
  overviewRulerModifiedFg: '#394b70',
  overviewRulerRangeHighlightFg: '#a9b1d6',
  overviewRulerSelectionHighlightFg: '#a9b1d6',
  overviewRulerWarningFg: '#e0af68',
  overviewRulerWordHighlightFg: '#bb9af7',
  overviewRulerWordHighlightStrongFg: '#bb9af7',
  // Other
  inputValidationInfoBg: '#0da0ba',
  inputValidationWarningBg: '#c2985b',
  listFocusBg: '#1c1d29',
  listHoverBg: '#45496c',
  listActiveSelectionBg: '#45496c',
  listInactiveSelectionBg: '#1c1d29',
  mergeCurrentBg: '#007a75',
  mergeIncomingBg: '#4e6ab2',
  minimapGutterAddedBg: '#1c5957',
  minimapGutterDeletedBg: '#944449',
  minimapGutterModifiedBg: '#425882',
  peekViewResultSelectionBg: '#7aa2f7',
  scrollbarSliderBg: '#2A2F40',
  selectionBg: '#4e6ab2',
  statusBarItemCompactHoverBg: '#0f141c',
  statusBarItemHoverBg: '#0f141c',
  statusBarItemProminentHoverBg: '#20222c',
  statusBarItemRemoteHoverBg: '#0f141c',
  terminalSelectionBg: '#515c7e',
  treeIndentGuidesStroke: '#7aa2f7',
  welcomePageProgressFg: '#2ac3de',
  welcomePageTileBg: '#2ac3de',
  editorStickyScrollHoverBg: '#45496c',
}

// 5. Альфа-значения (единственный источник правды для прозрачности)
const alphaValues: AlphaValues = {
  '00': '00',
  '15': '15',
  '20': '20',
  '22': '22',
  '30': '30',
  '34': '34',
  '33': '33',
  '40': '40',
  '44': '44',
  '45': '45',
  '4A': '4A',
  '55': '55',
  '60': '60',
  '66': '66',
  '8A': '8A',
  '90': '90',
  AA: 'AA',
  DD: 'DD',
}

// 6. Создание финальной палитры
//    Объединяем все цветовые группы и генерируем альфа-варианты.
export const palette: ColorPalette = createColorPalette(
  [baseColors, accentColors, syntaxColors, uiColors],
  alphaValues
)

// 7. Валидация палитры
//    Проверяем, что все сгенерированные цвета имеют корректный формат.
validatePalette(palette, 'palette.ts')
