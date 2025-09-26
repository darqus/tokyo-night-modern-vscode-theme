# 🎨 Tokyo Night Modern – Theme Analysis & Architecture

## 📊 Overview

Tokyo Night Modern is a dark VS Code theme inspired by cool neon ambience. It uses a compact **12‑color base palette** that programmatically expands into **406 workbench colors** plus a lean syntax layer. Generation is deterministic, test‑guarded, and entirely driven by a single DSL mapping.

### 🎯 Core Principles

- **Minimal Input → Rich Output**: 12 base colors → 406 role colors
- **Deterministic**: Functional generation; no ad‑hoc JSON tweaking
- **Accessible by Design**: Advisory WCAG AA/AAA contrast targets
- **Consistent**: Role & surface abstractions prevent drift
- **Maintainable**: Snapshot segmentation + token count locks

## 🌈 Base Palette

### Base Colors (12)

```typescript
// Neutrals (structural)
black:  '#1a1b26' // Base background
gray:   '#6b78a8' // Comments / subtle UI
white:  '#c0caf5' // Primary foreground
light:  '#c0caf5' // Light text tier / punctuation

// Cool accents (structural priority)
blue:   '#7aa2f7' // Functions / calls
cyan:   '#7dcfff' // Variables / imports
teal:   '#73daca' // Types / interfaces
purple: '#9d7cd8' // Operators / modifiers

// Warm accents (semantic emphasis)
green:  '#a7c785' // Strings / content
yellow: '#f7de70' // Classes / important
orange: '#f0ac74' // Numbers / constants
red:    '#f38095' // Errors / removals
magenta:'#b18af8' // Attributes / meta
```

### Semantic Associations

| Color | Usage | Feel |
|-------|-------|------|
| **Blue** | Functions / calls | Stable logic |
| **Cyan** | Variables / imports | Clear / fresh |
| **Teal** | Types / structure | Order |
| **Purple** | Operators / flow | Transform |
| **Green** | Strings / literals | Content / organic |
| **Yellow** | Classes / emphasis | Attention |
| **Orange** | Numbers / metrics | Precision |
| **Red** | Errors / danger | Urgency |
| **Magenta** | Attributes / meta | Accent / decorative |

## 🏗️ Generation Architecture

See also: [COLOR_ENGINE.md](./COLOR_ENGINE.md) for sRGB vs OKLCH and perceptual mix fallback rules.

### 1. Base Palette (`core/palette.ts`)

```typescript
export const basePalette = {
  black: '#1a1b26',
  blue:  '#7aa2f7',
  // ... remaining curated 12
}
```

### 2. Interface Palette (`core/interface.ts`)

```typescript
export const interfacePalette = {
  bg: {
    base: basePalette.black,
    elevated: mix(basePalette.black, basePalette.blue, 0.06),
    hover: withAlpha(basePalette.blue, 0.08),
    // Additional derived surfaces etc.
  }
}
```

### 3. Syntax Palette (`core/syntax.ts`)

```typescript
export const syntaxPalette = {
  keyword:  basePalette.magenta,
  string:   basePalette.green,
  function: basePalette.blue,
  // Direct 1:1 token to color mapping
}
```

### 4. Theme Assembly (`generators/theme.ts`)

```typescript
export const generateTheme = (): VSCodeTheme => ({
  name: 'Tokyo Night Modern',
  colors: generateInterfaceColors(),      // 406 workbench colors
  tokenColors: generateTokenColors(),     // 13 classic TextMate scopes
  semanticTokenColors: generateSemanticTokens()
})
```

## 🎨 Color Techniques

### Mixing

```typescript
// Controlled neutral lift
elevated = mix(basePalette.black, basePalette.blue, 0.06)
```

### Transparency

```typescript
hover = withAlpha(basePalette.blue, 0.08) // 8% accent veil
```

### Search Highlight Strategy

- Current match: `withAlpha(yellow, 0.22)` + border `withAlpha(yellow, 0.7)`
- Other matches: `withAlpha(yellow, 0.14)`
- Foreground text: always opaque white for readability

### Text Brightness Scaling

```typescript
text = {
  primary: white,
  muted:   mix(white, gray, 0.4),
  subtle:  mix(white, gray, 0.6),
  inactive:mix(white, gray, 0.8)
}
```

## 📝 Syntax Highlighting

### Priority Layers

1. **High** – keywords (magenta), strings (green), functions (blue)
2. **Medium** – variables (cyan), classes (yellow), types (teal)
3. **Low** – comments (gray), punctuation (white), operators (purple)

### Semantic Tokens (Excerpt)

```json
{
  "variable": { "foreground": "#7dcfff" },
  "variable.readonly": { "foreground": "#f0ac74" },
  "function": { "foreground": "#7aa2f7" },
  "class": { "foreground": "#f7de70" },
  "deprecated": {
    "foreground": "#767fa9",
    "strikethrough": true
  }
}
```

## 🔬 Design Notes

### Color Spaces

Foundational operations historically operate in HSL (predictable interpolation). Perceptual adjustments (when `USE_PERCEPTUAL=1`) leverage OKLCH for neutral‐preserving mixing.

### Contrast Targets (Advisory)

AA (~4.5:1) aimed for all primary text; AAA (~7:1) sought on critical surfaces; large / inactive text may relax slightly while staying comfortably legible.

### Harmony Sets

Analogous (blue→cyan→teal), complementary (blue↔orange), triadic (red→green→blue) relationships inform accent balance.

## 🎯 Improvement Ideas

### 1. Input Validation

```typescript
const validateHex = (hex: string): boolean => /^#[0-9a-f]{6}$/i.test(hex)
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))
```

### 2. Stricter Typing

```typescript
type HexColor = `#${string}` & { readonly __brand: unique symbol }
const createHex = (hex: string): HexColor => {
  if (!validateHex(hex)) throw new Error('Invalid hex: ' + hex)
  return hex as HexColor
}
```

### 3. Robust Build Error Handling

```typescript
export const buildTheme = () => {
  try {
    const theme = generateTheme()
    fs.writeFileSync(themePath, JSON.stringify(theme, null, 2) + '\n', 'utf8')
  } catch (e) {
    console.error('Build failed:', e)
    process.exit(1)
  }
}
```

### 4. Differentiate Numeric vs Constant

```typescript
export const syntaxPalette = {
  number: basePalette.orange,
  constant: basePalette.yellow,
}
```

### 5. Improved Palette Structure

```typescript
// Current palette structure with semantic naming:
export const basePalette = {
  // Base colors (original hues)
  black: '#1a1b26',
  gray: '#6b78a8',
  light: '#c0caf5',
  white: '#ffffff',
  blue: '#7aa2f7',
  cyan: '#7dcfff',
  teal: '#73daca',
  purple: '#9d7cd8',
  green: '#a7c785',
  yellow: '#f7de70',
  orange: '#f0ac74',
  red: '#f38095',
  magenta: '#b18af8',
  
  // Surface colors
  bgPrimary: '#1a1b26',
  bgSecondary: '#181923',
  bgTertiary: '#1f2230',
  bgOverlay: '#232739',
  
  // Text colors
  textDefault: '#afb9e2',
  textSecondary: '#99a3cc',
  textMuted: '#8991b3',
  textInverse: '#1a1b26',
  
  // UI elements
  borderDefault: '#202230',
  buttonPrimary: '#007acc',
  linkDefault: '#29acf8',
  
  // States
  stateSuccess: '#a7c785',
  stateWarning: '#f7de70',
  stateError: '#f38095',
  stateInfo: '#7dcfff',
}
```

## 📈 Quality Metrics (Illustrative)

| Metric | Value | Status |
|--------|-------|--------|
| Base colors | 12 | ✅ |
| Workbench colors | 406 | ✅ |
| Syntax tokens | 13 | ✅ |
| Contrast (primary text) | ~AA / AAA | ✅ |
| Build time | ~0.7–1.0s | ✅ |
| Theme size | ~24KB | ✅ |

## 🎨 Examples

### JavaScript Sample

```javascript
// Comment - gray (#6b78a8)
const userName = 'Tokyo'        // const: magenta, string: green
function greetUser(name) {      // function: blue, parameter: cyan
  return `Hello, ${name}!`      // template: green, interpolation: cyan
}

class User {                    // class: yellow
  constructor(name) {           // constructor: blue
    this.name = name            // property: cyan
  }

  static count = 0              // static: magenta, number: orange
}
```

### VS Code Surfaces

- **Editor background**: `#1a1b26`
- **Active tab**: `#202333`
- **Hover veil**: `#7aa2f714`
- **Selection**: `#7aa2f733`
- **Thin borders**: `#202230`

## 🚀 Summary

The theme emphasizes:

1. **Minimal Inputs** – Small curated base set
2. **Deterministic Generation** – DSL + guarded transforms
3. **Consistency** – Role abstraction over manual overrides
4. **Readability** – Balanced chroma + advisory contrast
5. **Maintainability** – Partial snapshots & token count guard

Optimized for long coding sessions: calm, legible, low‑distraction.
