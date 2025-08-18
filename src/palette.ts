export type Hex = `#${string}`

/**
 * The main color palette for the Tokyo Night Dark theme.
 *
 * Organized by functional groups for easy understanding and maintenance.
 * All colors use hex format with type safety.
 */
export interface Palette {
  /** Background colors - from darkest to lightest */
  bg: {
    /** Main background of the editor and side panels */
    base: Hex
    /** Elevated elements (panels, dialogs) */
    elevated: Hex
    /** Sunken areas (statusbar, some panels) */
    sunken: Hex
    /** Overlays and modal windows */
    overlay: Hex
    /** Input fields and forms */
    input: Hex
    /** Hover state for interactive elements */
    hover: Hex
    /** Active/pressed elements */
    active: Hex
    /** Drop zones for drag&drop */
    drop: Hex
    /** Current line highlight */
    lineHighlight: Hex
    /** Matching bracket highlight */
    bracketMatch: Hex
    /** Tab background */
    tabs: Hex
    /** Different types of selection */
    selection: {
      /** Active selection */
      active: Hex
      /** Inactive selection */
      inactive: Hex
      /** Selection in focus */
      focus: Hex
      /** Selection in a menu */
      menu: Hex
    }
  }
  /** Lines and borders */
  line: {
    /** Main element borders */
    border: Hex
    /** Borders in menus */
    menu: Hex
  }
  /** Text colors - from primary to auxiliary */
  fg: {
    /** Primary text */
    primary: Hex
    /** Muted text (secondary information) */
    muted: Hex
    /** Subtle text (hints, labels) */
    subtle: Hex
    /** Inactive/disabled text */
    inactive: Hex
    /** Panel text (improved readability in sidebars) */
    panelText: Hex
    /** Soft text (intermediate brightness) */
    soft: Hex
    /** Soft titles */
    softTitle: Hex
    /** Text on selection */
    selectionText: Hex
    /** Text on top of a selection */
    onSelection: Hex
    /** Active titles */
    activeTitle: Hex
  }
  /** Brand colors */
  brand: {
    /** Primary brand color (buttons, links) */
    primary: Hex
    /** Button specific colors */
    button: {
      /** Primary button background */
      primary: Hex
      /** Primary button hover background */
      hover: Hex
    }
  }
  /** Accent colors for syntax highlighting */
  accent: {
    /** Blue - keywords, types */
    blue: Hex
    /** Cyan - strings, imports */
    cyan: Hex
    /** Teal - properties, attributes */
    teal: Hex
    /** Magenta - variables, constants */
    magenta: Hex
    /** Yellow - numbers, parameters */
    yellow: Hex
    /** Orange - functions, methods */
    orange: Hex
    /** Red - errors, warnings */
    red: Hex
    /** Purple - operators, special characters */
    purple: Hex
  }
  /** Token-specific colors for syntax highlighting */
  token: {
    /** Comments and documentation */
    comment: Hex
    /** Documentation subtypes */
    commentDoc: Hex
    /** Emphasized documentation */
    commentDocEmphasized: Hex
    /** Constant values (numbers, booleans) */
    constant: Hex
    /** Strings and text content */
    string: Hex
    /** Color values */
    color: Hex
    /** Invalid code */
    invalid: Hex
    /** Invalid deprecated */
    invalidDeprecated: Hex
    /** Storage types and modifiers */
    storageType: Hex
    /** Storage modifiers (var, const, let) */
    storageModifier: Hex
    /** Template interpolation */
    interpolation: Hex
    /** Blade/Twig/Smarty keywords */
    templateKeyword: Hex
    /** Spread operator */
    spread: Hex
    /** Operators and punctuation */
    operator: Hex
    /** Import/export keywords */
    importExport: Hex
    /** General keywords */
    keyword: Hex
    /** SQL keywords */
    keywordSql: Hex
    /** Logical operators */
    keywordLogical: Hex
    /** HTML/XML tags */
    tag: Hex
    /** Component tags */
    tagComponent: Hex
    /** Tag punctuation */
    tagPunctuation: Hex
    /** Global constants */
    globalConstant: Hex
    /** Variables */
    variable: Hex
    /** Object variables */
    objectVariable: Hex
    /** Array keys */
    arrayKey: Hex
    /** Object keys */
    objectKey: Hex
    /** Object properties */
    objectProperty: Hex
    /** Object properties (alternative) */
    objectPropertyAlt: Hex
    /** Nested object keys (level 3) */
    objectKeyLevel3: Hex
    /** C-related variables */
    cVariable: Hex
    /** Other variables */
    otherVariable: Hex
    /** Methods */
    method: Hex
    /** Functions */
    function: Hex
    /** Function arguments */
    functionArg: Hex
    /** Type constants */
    typeConstant: Hex
    /** Variable definitions */
    variableDefinition: Hex
    /** Inherited classes */
    inheritedClass: Hex
    /** Classes and support types */
    classSupport: Hex
    /** Class names */
    className: Hex
    /** Support functions */
    supportFunction: Hex
    /** CSS properties */
    cssProperty: Hex
    /** CSS fonts */
    cssFont: Hex
    /** CSS classes */
    cssClass: Hex
    /** CSS IDs */
    cssId: Hex
    /** CSS tags */
    cssTag: Hex
    /** CSS references */
    cssReference: Hex
    /** CSS punctuation */
    cssPunctuation: Hex
    /** CSS at-rules */
    cssAtRule: Hex
    /** CSS parent selector */
    cssParentSelector: Hex
    /** SCSS mixins */
    scssMixin: Hex
    /** SCSS includes */
    scssInclude: Hex
    /** CSS values */
    cssValue: Hex
    /** Language methods */
    languageMethod: Hex
    /** This keyword */
    thisKeyword: Hex
    /** HTML attributes */
    htmlAttribute: Hex
    /** HTML entities */
    htmlEntity: Hex
    /** Vue attributes */
    vueAttribute: Hex
    /** CSS pseudo selectors */
    cssPseudo: Hex
    /** Markup inserted */
    markupInserted: Hex
    /** Markup deleted */
    markupDeleted: Hex
    /** Markup changed */
    markupChanged: Hex
    /** Regular expressions */
    regex: Hex
    /** Regex groups */
    regexGroup: Hex
    /** Regex character classes */
    regexCharClass: Hex
    /** Regex character sets */
    regexCharSet: Hex
    /** Regex quantifiers */
    regexQuantifier: Hex
    /** Regex backslash */
    regexBackslash: Hex
    /** Escape characters */
    escapeChar: Hex
    /** Decorators */
    decorator: Hex
    /** CSS units */
    cssUnit: Hex
    /** JSON keys (different levels) */
    jsonKey0: Hex
    jsonKey1: Hex
    jsonKey2: Hex
    jsonKey3: Hex
    jsonKey4: Hex
    jsonKey5: Hex
    jsonKey6: Hex
    jsonKey7: Hex
    jsonKey8: Hex
    /** Plain punctuation */
    plainPunctuation: Hex
    /** Block punctuation */
    blockPunctuation: Hex
    /** Markdown headings */
    markdownH1: Hex
    markdownH2: Hex
    markdownH3: Hex
    markdownH4: Hex
    markdownH5: Hex
    markdownH6: Hex
    /** Markdown content */
    markdownContent: Hex
    /** HTML text */
    htmlText: Hex
    /** Markdown raw inline */
    markdownRawInline: Hex
    /** Markdown raw punctuation */
    markdownRawPunctuation: Hex
    /** Markup italic */
    markupItalic: Hex
    /** Markup bold */
    markupBold: Hex
    /** Markdown blockquote */
    markdownBlockquote: Hex
    /** Markdown links */
    markdownLink: Hex
    /** Markdown code blocks */
    markdownCodeBlock: Hex
    /** Markdown separator */
    markdownSeparator: Hex
    /** Markup table */
    markupTable: Hex
    /** Token info */
    tokenInfo: Hex
    /** Token warn */
    tokenWarn: Hex
    /** Token error */
    tokenError: Hex
    /** Token debug */
    tokenDebug: Hex
    /** Apache tags */
    apacheTag: Hex
    /** Preprocessor */
    preprocessor: Hex
    /** Environment values */
    envValue: Hex
    /** Ignored elements */
    ignored: Hex
    /** Numbers */
    number: Hex
    /** Markup elements */
    markup: Hex
    /** Error elements */
    error: Hex
    /** Code blocks */
    codeBlock: Hex
    /** Link text */
    linkText: Hex
    /** Quote marks */
    quoteMark: Hex
    /** Link URLs */
    linkUrl: Hex
    /** Warnings */
    warning: Hex
    /** Deleted content */
    deleted: Hex
    /** Inserted content */
    inserted: Hex
  }
  /** ANSI colors for the terminal */
  ansi: {
    black: Hex
    brightBlack: Hex
    red: Hex
    brightRed: Hex
    green: Hex
    brightGreen: Hex
    yellow: Hex
    brightYellow: Hex
    blue: Hex
    brightBlue: Hex
    magenta: Hex
    brightMagenta: Hex
    cyan: Hex
    brightCyan: Hex
    white: Hex
    brightWhite: Hex
  }
  /** UI-specific colors and helpers (non-syntax, common UI accents) */
  ui: {
    /** Subtle/description text */
    description: Hex
    /** Breadcrumb foreground */
    breadcrumb: Hex
    /** Shadows */
    shadow: {
      widget: Hex
      scrollbar: Hex
    }
    /** Badges */
    badge: {
      base: Hex
      fg: Hex
    }
    /** Sash */
    sash: {
      hover: Hex
    }
    /** Selection wash base (used with alpha) */
    selectionWash: Hex
    /** Scrollbar slider base (used with alpha) */
    scrollbarBase: Hex
    /** Inputs */
    input: {
      placeholder: Hex
      border: Hex
    }
    /** Lists */
    list: {
      hoverBg: Hex
      dropBg: Hex
    }
    /** Links in editor when active */
    editorLinkActive: Hex
    /** CodeLens text */
    codeLens: Hex
    /** Generic 'no matches' outline (e.g., filter widget) */
    noMatches: Hex
    /** Muted blue highlight for suggestions etc. */
    settingsHeader: Hex
    /** Window borders */
    window: {
      border: Hex
    }
    /** Tabs specifics */
    tab: {
      activeBorder: Hex
      activeModifiedBorder: Hex
      inactiveModifiedBorder: Hex
      unfocusedActiveBorder: Hex
      lastPinnedBorder: Hex
    }
    /** Status bar item states */
    statusItem: {
      hover: Hex
      prominentHover: Hex
    }
    /** Text specifics */
    text: {
      preformat: Hex
      separator: Hex
    }
    /** Debug UI specifics */
    debug: {
      exceptionBorder: Hex
      consoleError: Hex
      consoleWarning: Hex
      stateLabelBg: Hex
      tokenValue: Hex
      tokenString: Hex
      tokenError: Hex
      info: Hex
    }
    /** Editor overview ruler colors */
    editorOverview: {
      error: Hex
      info: Hex
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Editor gutter colors */
    gutter: {
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Minimap gutter colors */
    minimapGutter: {
      modified: Hex
      added: Hex
      deleted: Hex
    }
    /** Charts */
    charts: {
      foreground: Hex
    }
    /** GitLens helpers */
    gitlens: {
      foreground: Hex
    }
    /** Git decorations */
    git: {
      ignored: Hex
      deleted: Hex
      conflicting: Hex
      stageDeleted: Hex
      stageModified: Hex
    }
    /** Common semantic colors */
    semantic: {
      /** Pure white for high contrast */
      white: Hex
      /** Notification links */
      notificationLink: Hex
      /** Offline status */
      offline: Hex
    }
  }
}

export const palette: Palette = {
  bg: {
    // Cooler, more balanced backgrounds (darkened for GitHub)
    base: '#16161e', // Main editor background (darkened)
    elevated: '#181820', // Panels, dialogs (darkened)
    sunken: '#14141c', // Status bar, sidebars (darkened)
    overlay: '#181820', // Overlays (darkened)
    input: '#181820', // Input fields (darkened)
    hover: '#1e1f2a', // Hover effects (slightly lighter than base)
    active: '#252a3f', // Active elements (darker, closer to base)
    drop: '#252a3f', // Drag-n-drop zones (darker, closer to base)
    lineHighlight: '#181820', // Current line highlight (darkened)
    bracketMatch: '#1e1f2a', // Bracket match highlight (slightly lighter than base)
    tabs: '#16161e', // Tab background (darkened)
    selection: {
      active: '#252a3f', // Active selection
      inactive: '#2e313d', // Inactive selection
      focus: '#2b3a65', // Focus selection
      menu: '#2b3a65', // Menu selection
    },
  },
  line: {
    border: '#22232e', // Main borders
    menu: '#22232e', // Menu borders
  },
  fg: {
    // Text colors with better contrast
    primary: '#c0caf5', // Primary text
    muted: '#a9b1d6', // Secondary text
    subtle: '#545c7e', // Hints, comments
    inactive: '#545c7e', // Inactive text
    panelText: '#a9b1d6', // Panel text
    soft: '#a9b1d6', // Soft text
    softTitle: '#c0caf5', // Titles
    selectionText: '#ffffff', // Text on selection
    onSelection: '#ffffff', // Text over selection
    activeTitle: '#c0caf5', // Active titles
  },
  brand: {
    primary: '#7dcfff', // Primary brand color (Tokyo Night blue)
    button: {
      primary: '#364a82', // Darker blue for buttons
      hover: '#3d59a1', // Button hover effect - active Tokyo Night blue
    },
  },
  accent: {
    // Original Tokyo Night accent colors
    blue: '#7aa2f7',
    cyan: '#7dcfff',
    teal: '#85c9c1',
    magenta: '#bb9af7',
    yellow: '#e0af68',
    orange: '#ff9e64',
    red: '#f7768e',
    purple: '#9d7cd8',
  },
  token: {
    // Refined syntax highlighting tokens - IMPROVED CONTRAST
    comment: '#6b7499',        // было #545c7e - увеличена яркость для лучшей читаемости
    commentDoc: '#5a607a',     // было #545c7e - небольшое увеличение контрастности
    commentDocEmphasized: '#7481a6',
    constant: '#e0af68', // Changed from a reddish pink to yellow
    string: '#9ece6a', // Brighter green for strings
    color: '#9aa5ce',
    invalid: '#f7768e',
    invalidDeprecated: '#bb9af7',
    storageType: '#bb9af7',
    storageModifier: '#9d7cd8',
    interpolation: '#7dcfff',
    templateKeyword: '#0db9d7',
    spread: '#e0687a',
    operator: '#89ddff', // Changed from green to a light blue
    importExport: '#7dcfff',
    keyword: '#bb9af7',
    keywordSql: '#7dcfff',
    keywordLogical: '#bb9af7',
    tag: '#f7768e',
    tagComponent: '#bb9af7', // Components are now magenta
    tagPunctuation: '#89ddff', // Punctuation is now light blue
    globalConstant: '#e0af68',
    variable: '#c0caf5',
    objectVariable: '#c0caf5',
    arrayKey: '#7dcfff',
    objectKey: '#c0caf5', // Object keys are now primary text color
    objectProperty: '#7dcfff',
    objectPropertyAlt: '#c0caf5',
    objectKeyLevel3: '#41a6b5',
    cVariable: '#f7768e',
    otherVariable: '#f7768e',
    method: '#7aa2f7',
    function: '#7aa2f7',
    functionArg: '#e0af68',
    typeConstant: '#bb9af7',
    variableDefinition: '#bb9af7',
    inheritedClass: '#bb9af7',
    classSupport: '#0db9d7',
    className: '#c0caf5',
    supportFunction: '#0db9d7',
    cssProperty: '#7aa2f7',
    cssFont: '#9ece6a',
    cssClass: '#c0caf5',
    cssId: '#bb9af7',
    cssTag: '#0db9d7',
    cssReference: '#0db9d7',
    cssPunctuation: '#9abdf5',
    cssAtRule: '#ff9e64',
    cssParentSelector: '#73daca',
    scssMixin: '#bb9af7',
    scssInclude: '#9d7cd8',
    cssValue: '#ff9e64', // CSS values are now orange
    languageMethod: '#f7768e',
    thisKeyword: '#f7768e',
    htmlAttribute: '#bb9af7',
    htmlEntity: '#0DB9D7',
    vueAttribute: '#bb9af7',
    cssPseudo: '#bb9af7',
    markupInserted: '#449dab',
    markupDeleted: '#914c54',
    markupChanged: '#6183bb',
    regex: '#b4f9f8',
    regexGroup: '#f7768e',
    regexCharClass: '#bb9af7',
    regexCharSet: '#e0af68',
    regexQuantifier: '#9ece6a',
    regexBackslash: '#c0caf5',
    escapeChar: '#9ece6a',
    decorator: '#7aa2f7',
    cssUnit: '#f7768e',
    jsonKey0: '#7aa2f7',
    jsonKey1: '#0db9d7',
    jsonKey2: '#7dcfff',
    jsonKey3: '#bb9af7',
    jsonKey4: '#e0af68',
    jsonKey5: '#0db9d7',
    jsonKey6: '#73daca',
    jsonKey7: '#f7768e',
    jsonKey8: '#9ece6a',
    plainPunctuation: '#9abdf5',
    blockPunctuation: '#9abdf5',
    markdownH1: '#9ece6a',
    markdownH2: '#61bdf2',
    markdownH3: '#7aa2f7',
    markdownH4: '#6d91de',
    markdownH5: '#9aa5ce',
    markdownH6: '#747ca1',
    markdownContent: '#c0caf5',
    htmlText: '#9aa5ce',
    markdownRawInline: '#bb9af7',
    markdownRawPunctuation: '#545c7e',
    markupItalic: '#c0caf5',
    markupBold: '#c0caf5',
    markdownBlockquote: '#545c7e',
    markdownLink: '#73daca',
    markdownCodeBlock: '#9ece6a',
    markdownSeparator: '#545c7e',
    markupTable: '#c0cefc',
    tokenInfo: '#7dcfff',
    tokenWarn: '#ffdb69',
    tokenError: '#f7768e',
    tokenDebug: '#b267e6',
    apacheTag: '#f7768e',
    preprocessor: '#73daca',
    envValue: '#7aa2f7',
    // Добавленные недостающие свойства - IMPROVED CONTRAST
    ignored: '#6b7499',        // было #444b6a - синхронизировано с comment
    number: '#c0768e',
    markup: '#449dab',
    error: '#914c54',
    codeBlock: '#61bdf2',
    linkText: '#6d91de',
    quoteMark: '#747ca1',
    linkUrl: '#c0cefc',
    warning: '#ffdb69',
    deleted: '#db4b4b',
    inserted: '#b267e6',
  },
  ansi: {
    // ANSI цвета для терминала в стиле Tokyo Night
    black: '#414868',
    brightBlack: '#545c7e',
    red: '#f7768e',
    brightRed: '#f7768e',
    green: '#9ece6a',
    brightGreen: '#9ece6a',
    yellow: '#e0af68',
    brightYellow: '#e0af68',
    blue: '#7aa2f7',
    brightBlue: '#7aa2f7',
    magenta: '#bb9af7',
    brightMagenta: '#bb9af7',
    cyan: '#7dcfff',
    brightCyan: '#7dcfff',
    white: '#c0caf5',
    brightWhite: '#c0caf5',
  },
  ui: {
    description: '#444857',
    breadcrumb: '#444857',
    shadow: {
      widget: '#ffffff00',
      scrollbar: '#00000033',
    },
    badge: {
      base: '#7dcfff',
      fg: '#16161e',
    },
    sash: {
      hover: '#252a3f',
    },
    selectionWash: '#515c7e',
    scrollbarBase: '#868bc4',
    input: {
      placeholder: '#787c99',
      border: '#20212c',
    },
    list: {
      hoverBg: '#1f2335',
      dropBg: '#3d59a1',
    },
    editorLinkActive: '#acb0d0',
    codeLens: '#545c7e',
    noMatches: '#f7768e',
    settingsHeader: '#6183bb',
    window: {
      border: '#20212c',
    },
    tab: {
      activeBorder: '#7aa2f7',
      activeModifiedBorder: '#ff9e64',
      inactiveModifiedBorder: '#e0af68',
      unfocusedActiveBorder: '#24283b',
      lastPinnedBorder: '#363b54',
    },
    statusItem: {
      hover: '#1f2335',
      prominentHover: '#1a1b26',
    },
    text: {
      preformat: '#9699a8',
      separator: '#363b54',
    },
    debug: {
      exceptionBorder: '#963c47',
      consoleError: '#f7768e',
      consoleWarning: '#e0af68',
      stateLabelBg: '#1e1e25',
      tokenValue: '#9aa5ce',
      tokenString: '#9ece6a',
      tokenError: '#f7768e',
      info: '#7dcfff',
    },
    editorOverview: {
      error: '#f7768e',
      info: '#7dcfff',
      modified: '#7aa2f7',
      added: '#9ece6a',
      deleted: '#f7768e',
    },
    gutter: {
      modified: '#7aa2f7',
      added: '#9ece6a',
      deleted: '#f7768e',
    },
    minimapGutter: {
      modified: '#7aa2f7',
      added: '#9ece6a',
      deleted: '#f7768e',
    },
    charts: {
      foreground: '#9aa5ce',
    },
    gitlens: {
      foreground: '#545c7e',
    },
    git: {
      ignored: '#545c7e',
      deleted: '#f7768e',
      conflicting: '#e0af68',
      stageDeleted: '#f7768e',
      stageModified: '#7aa2f7',
    },
    semantic: {
      white: '#ffffff',
      notificationLink: '#6183bb',
      offline: '#f7768e',
    },
  },
}
