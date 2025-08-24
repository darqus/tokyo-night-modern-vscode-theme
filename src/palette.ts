import type { Palette } from './types/palette'
import { core } from './palette.core'
import { mix, lightenToward, darkenToward } from './utils/color'

// --- Start of inlined palette.derived.ts content ---
const tealSoft = lightenToward(core.accent.teal, core.accent.cyan, 0.25)
const skyLight = lightenToward(core.accent.cyan, core.accent.blue, 0.35)
const indigo = mix(core.accent.blue, core.accent.purple, 0.5)
const rose = lightenToward(core.accent.red, core.accent.magenta, 0.3)
const azureLight = lightenToward(
  core.accent.cyan,
  core.accent.blue,
  0.18
)
const tealDeep = darkenToward(core.accent.teal, core.accent.blue, 0.25)
const bluePunctuation = darkenToward(
  core.accent.blue,
  core.accent.purple,
  0.18
)
const bracketRound = lightenToward(
  core.accent.cyan,
  core.accent.blue,
  0.15
)
const bracketSquare = lightenToward(
  core.accent.teal,
  core.accent.cyan,
  0.25
)
const bracketCurly = lightenToward(
  core.accent.magenta,
  core.accent.purple,
  0.25
)
const bracketAngle = lightenToward(
  core.accent.blue,
  core.accent.cyan,
  0.35
)
const punctuationComma = lightenToward(
  core.accent.cyan,
  core.accent.blue,
  0.45
)
const punctuationDot = lightenToward(
  core.accent.blue,
  core.accent.cyan,
  0.25
)
const punctuationColon = mix(core.accent.teal, core.accent.cyan, 0.3)
const punctuationSemicolon = mix(
  core.accent.purple,
  core.accent.magenta,
  0.25
)
const punctuationOperator = mix(core.accent.teal, core.accent.cyan, 0.4)
const blue400 = lightenToward(core.accent.blue, core.accent.cyan, 0.18)
const mint = lightenToward(core.accent.green, core.accent.cyan, 0.18)
const lilac = lightenToward(core.accent.magenta, core.accent.blue, 0.18)
const pinkMuted = mix(core.accent.red, core.accent.magenta, 0.5)
const azure = lightenToward(core.accent.cyan, core.accent.blue, 0.12)
const maroon = darkenToward(core.accent.red, core.accent.purple, 0.18)
const blueMuted = mix(core.accent.blue, core.text.muted, 0.4)
const sky = lightenToward(core.accent.cyan, core.accent.blue, 0.22)
const grayBlue400 = mix(core.accent.blue, core.text.subtle, 0.5)
const blueBright = lightenToward(
  core.accent.blue,
  core.accent.cyan,
  0.25
)
const blueSoft = lightenToward(core.accent.blue, core.text.subtle, 0.18)
const violet = lightenToward(core.accent.purple, core.accent.blue, 0.18)
const cyan500 = darkenToward(core.accent.cyan, core.accent.blue, 0.18)
const slate = mix(core.accent.blue, core.accent.cyan, 0.3)
const steel = darkenToward(core.accent.blue, core.text.muted, 0.35)
const steelAlt = lightenToward(core.accent.blue, core.text.muted, 0.18)
const steelMuted = mix(core.accent.blue, core.text.muted, 0.8)
const brick = darkenToward(core.accent.red, core.accent.orange, 0.18)
const redMuted = mix(core.accent.red, core.text.muted, 0.5)
const badgeBase = lightenToward(core.accent.blue, core.accent.cyan, 0.35)
const windowBorder = darkenToward(
  core.accent.blue,
  core.text.muted,
  0.22
)
// --- End of inlined palette.derived.ts content ---

export const palette: Palette = {
  bg: {
    base: core.bg.base,
    elevated: core.bg.elevated,
    overlay: core.bg.overlay,
    input: core.bg.input,
    hover: core.bg.hover,
    active: core.bg.active,
    drop: core.bg.drop,
    lineHighlight: core.bg.lineHighlight,
    bracketMatch: core.bg.bracketMatch,
    tabs: core.bg.tabs,
    selection: {
      active: core.bg.selection.active,
      inactive: core.bg.selection.inactive,
      focus: core.bg.selection.focus,
      menu: core.bg.selection.menu,
    },
  },
  line: {
    border: core.border,
    menu: core.border,
  },
  fg: {
    primary: core.text.primary,
    muted: core.text.muted,
    subtle: core.text.subtle,
    inactive: core.text.inactive,
    panelText: core.text.primary,
    soft: core.text.soft,
    selectionText: core.text.selection,
    onSelection: core.text.selection,
    activeTitle: core.text.primary,
    breadcrumb: core.text.primary,
    description: core.text.muted,
  },
  brand: {
    primary: core.accent.cyan,
    button: {
      primary: core.brand.button.primary,
      hover: core.brand.button.hover,
    },
  },
  accent: {
    blue: core.accent.blue,
    cyan: core.accent.cyan,
    teal: tealSoft,
    magenta: core.accent.magenta,
    yellow: skyLight,
    orange: indigo,
    red: core.accent.red,
    purple: core.accent.purple,
  },
  token: {
    comment: core.text.comment,
    commentDoc: core.text.commentDoc,
    commentDocEmphasized: core.text.commentDocEmphasized,
    constant: skyLight,
    string: core.accent.green,
    color: core.text.subtle2,
    invalid: core.accent.red,
    invalidDeprecated: core.accent.magenta,
    storageType: core.accent.magenta,
    storageModifier: core.accent.purple,
    interpolation: core.accent.cyan,
    templateKeyword: core.accent.teal,
    spread: rose,
    operator: core.text.muted,
    importExport: core.accent.magenta,
    keyword: core.accent.magenta,
    keywordSql: core.accent.cyan,
    keywordLogical: core.accent.magenta,
    tag: core.accent.blue,
    tagComponent: core.accent.magenta,
    tagPunctuation: core.text.muted,
    globalConstant: skyLight,
    variable: core.text.primary,
    objectVariable: core.text.primary,
    arrayKey: core.accent.cyan,
    objectKey: core.text.primary,
    objectProperty: core.accent.cyan,
    objectPropertyAlt: core.text.primary,
    objectKeyLevel3: azureLight,
    cVariable: core.accent.blue,
    otherVariable: core.accent.cyan,
    method: core.accent.blue,
    function: core.accent.blue,
    functionArg: sky,
    typeConstant: core.accent.magenta,
    variableDefinition: core.accent.magenta,
    inheritedClass: core.accent.magenta,
    classSupport: tealDeep,
    className: core.text.primary,
    supportFunction: tealDeep,
    cssProperty: core.accent.blue,
    cssFont: core.accent.green,
    cssClass: core.text.primary,
    cssId: core.accent.magenta,
    cssTag: tealDeep,
    cssReference: tealDeep,
    cssPunctuation: bluePunctuation,
    cssAtRule: blue400,
    cssParentSelector: core.accent.teal,
    scssMixin: core.accent.magenta,
    scssInclude: core.accent.purple,
    cssValue: mint,
    languageMethod: core.accent.blue,
    thisKeyword: core.accent.cyan,
    htmlAttribute: core.accent.magenta,
    htmlEntity: tealDeep,
    vueAttribute: core.accent.magenta,
    cssPseudo: core.accent.magenta,
    markupInserted: azure,
    markupDeleted: maroon,
    markupChanged: blueMuted,
    regex: core.accent.cyan,
    regexGroup: core.accent.purple,
    regexCharClass: core.accent.magenta,
    regexCharSet: sky,
    regexQuantifier: core.accent.green,
    regexBackslash: core.text.primary,
    escapeChar: core.accent.green,
    decorator: core.accent.blue,
    cssUnit: core.accent.blue,
    jsonKey0: core.accent.blue,
    jsonKey1: tealDeep,
    jsonKey2: core.accent.cyan,
    jsonKey3: core.accent.magenta,
    jsonKey4: sky,
    jsonKey5: tealDeep,
    jsonKey6: core.accent.teal,
    jsonKey7: core.accent.red,
    jsonKey8: core.accent.green,
    plainPunctuation: bluePunctuation,
    blockPunctuation: bluePunctuation,
    markdownH1: core.accent.green,
    markdownH2: blueBright,
    markdownH3: core.accent.blue,
    markdownH4: blueSoft,
    markdownH5: core.text.subtle2,
    markdownH6: grayBlue400,
    markdownContent: core.text.primary,
    htmlText: core.text.subtle2,
    markdownRawInline: core.accent.magenta,
    markdownRawPunctuation: core.text.gray600,
    markupItalic: core.text.primary,
    markupBold: core.text.primary,
    markdownBlockquote: core.text.gray600,
    markdownLink: core.accent.teal,
    markdownCodeBlock: core.accent.green,
    markdownSeparator: core.text.gray600,
    markupTable: blueMuted,
    tokenInfo: core.accent.cyan,
    tokenWarn: cyan500,
    tokenError: core.accent.red,
    tokenDebug: lilac,
    apacheTag: core.accent.red,
    preprocessor: core.accent.teal,
    envValue: core.accent.blue,
    ignored: core.text.comment,
    number: pinkMuted,
    markup: azure,
    error: maroon,
    codeBlock: blueBright,
    linkText: blueSoft,
    quoteMark: grayBlue400,
    linkUrl: blueMuted,
    warning: cyan500,
    deleted: redMuted,
    inserted: lilac,
  },
  ansi: {
    black: indigo,
    brightBlack: core.text.gray600,
    red: core.accent.red,
    brightRed: core.accent.red,
    green: core.accent.green,
    brightGreen: core.accent.green,
    yellow: skyLight,
    brightYellow: skyLight,
    blue: core.accent.blue,
    brightBlue: core.accent.blue,
    magenta: core.accent.magenta,
    brightMagenta: core.accent.magenta,
    cyan: core.accent.cyan,
    brightCyan: core.accent.cyan,
    white: core.text.primary,
    brightWhite: core.text.primary,
  },
  ui: {
    description: core.text.primary,
    breadcrumb: core.text.primary,
    shadow: {
      widget: core.ui.shadow,
      scrollbar: core.ui.shadow,
    },
    badge: {
      base: badgeBase,
      fg: core.bg.base,
    },
    sash: {
      hover: steelAlt,
    },
    selectionWash: core.ui.selectionWash,
    scrollbarBase: core.ui.scrollbarBase,
    input: {
      placeholder: core.text.placeholder,
      border: core.border,
    },
    list: {
      hoverBg: core.brand.button.hover,
      dropBg: badgeBase,
    },
    editorLinkActive: core.text.editorLinkActive,
    codeLens: core.accent.blue,
    noMatches: core.accent.blue,
    settingsHeader: blueMuted,
    window: {
      border: windowBorder,
    },
    tab: {
      activeBorder: core.accent.blue,
      activeModifiedBorder: violet,
      inactiveModifiedBorder: cyan500,
      unfocusedActiveBorder: core.ui.tab.unfocusedActive,
      lastPinnedBorder: slate,
    },
    statusItem: {
      hover: steel,
      prominentHover: steelMuted,
    },
    text: {
      preformat: core.text.preformat,
      separator: slate,
    },
    debug: {
      exceptionBorder: brick,
      consoleError: core.accent.red,
      consoleWarning: cyan500,
      stateLabelBg: core.bg.stateLabel,
      tokenValue: core.text.subtle2,
      tokenString: core.accent.green,
      tokenError: core.accent.red,
      info: core.accent.cyan,
    },
    editorOverview: {
      error: core.accent.red,
      info: core.accent.cyan,
      modified: core.accent.blue,
      added: core.accent.green,
      deleted: core.accent.red,
    },
    gutter: {
      modified: core.accent.blue,
      added: core.accent.green,
      deleted: core.accent.red,
    },
    minimapGutter: {
      modified: core.accent.blue,
      added: core.accent.green,
      deleted: core.accent.red,
    },
    charts: {
      foreground: core.text.subtle2,
    },
    gitlens: {
      foreground: core.text.muted,
    },
    git: {
      ignored: core.ui.git.ignored,
      deleted: core.ui.git.deleted,
      conflicting: core.ui.git.conflicting,
      stageDeleted: core.ui.git.stageDeleted,
      stageModified: core.ui.git.stageModified,
    },
    semantic: {
      white: core.text.primary,
      notificationLink: blueMuted,
      offline: core.accent.red,
    },
  },
  brackets: {
    round: bracketRound,
    square: bracketSquare,
    curly: bracketCurly,
    angle: bracketAngle,
  },
  punctuation: {
    comma: punctuationComma,
    dot: punctuationDot,
    colon: punctuationColon,
    semicolon: punctuationSemicolon,
    operator: punctuationOperator,
  },
}