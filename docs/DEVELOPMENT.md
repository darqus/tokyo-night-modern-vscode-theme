# 🛠️ Developer's Guide

## Quick Start

```bash
# Install dependencies
npm install

# Build the theme
npm run build:theme

# Check correctness
npm run test:smoke
```

## 🎨 How to Change Colors

### 1. Changing Basic Colors
Edit `src/palette.ts`:

```typescript
export const palette: Palette = {
  bg: {
    base: '#16161c', // ← Change the main background here
    // ...
  }
}
```

### 2. Changing Syntax Colors
Edit `src/tokenColors.ts`:

```typescript
{
  "name": "Comment",
  "scope": ["comment"],
  "settings": {
    "foreground": "#444b6a" // ← Color of comments
  }
}
```

### 3. Semantic Colors
Edit `src/semanticTokenColors.ts`:

```typescript
export const semanticTokenColors = {
  'parameter.declaration': { 
    foreground: '#e0af68' // ← Color of function parameters
  }
}
```

## 🔧 Utilities

### withAlpha()
Adds transparency to a color:

```typescript
import { withAlpha } from './utils/color'

// Blue with 50% transparency
const semiTransparentBlue = withAlpha('#7aa2f7', 0.5)
// or
const semiTransparentBlue = withAlpha('#7aa2f7', '80')
```

## 📝 Conventions

### Color Naming
- **bg** - background colors
- **fg** - foreground colors
- **accent** - accent colors for syntax
- **ansi** - terminal colors

### Brightness Order
Colors are organized from dark to light:
- `sunken` → `base` → `elevated` → `overlay`

### Color Semantics
- **blue** - keywords, types
- **cyan** - strings, imports
- **teal** - properties, attributes
- **magenta** - variables
- **yellow** - numbers, parameters
- **orange** - functions
- **red** - errors
- **purple** - operators

## 🧪 Testing

### Smoke Test
Checks that the generated theme matches the expected one:

```bash
npm run test:smoke
```

### Manual Testing
1. Build the theme: `npm run build:theme`
2. Open VS Code in the project folder
3. Press F5 to launch the Extension Development Host
4. Select the theme in the settings

## 📦 Publishing

```bash
# Create a release
npm run release

# Create a pre-release
npm run prerelease

# Package the extension
npm run package

# Publish to the Marketplace
npm run publish
```

## 🐛 Debugging

### Build Issues
1. Check TypeScript syntax: `npx tsc --noEmit`
2. Make sure all imports are correct
3. Check that all colors are in hex format

### Color Issues
1. Use VS Code developer tools (Ctrl+Shift+I)
2. Check the CSS classes of the elements
3. Compare with the original Tokyo Night theme

## 💡 Tips

- Use color tools to select harmonious colors
- Test the theme on different types of code (JS, Python, HTML, etc.)
- Check contrast for accessibility
- Maintain consistency in the use of colors