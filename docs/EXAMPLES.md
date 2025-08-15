# 🎨 Usage Examples

## Adding a New Color

### 1. Add the color to the palette

```typescript
// src/palette.ts
export const palette: Palette = {
  accent: {
    // ... existing colors
    pink: '#ff79c6', // ← new color
  }
}
```

### 2. Use in tokenColors

```typescript
// src/tokenColors.ts
{
  "name": "Special Keywords",
  "scope": ["keyword.special"],
  "settings": {
    "foreground": palette.accent.pink // ← use the new color
  }
}
```

## Creating a Theme Variant

### Light Variant
```typescript
// src/palette-light.ts
export const lightPalette: Palette = {
  bg: {
    base: '#ffffff',
    elevated: '#f8f9fa',
    // ...
  },
  fg: {
    primary: '#24292e',
    muted: '#586069',
    // ...
  }
}
```

### High Contrast Variant
```typescript
// src/palette-high-contrast.ts
export const highContrastPalette: Palette = {
  bg: {
    base: '#000000',
    // ...
  },
  fg: {
    primary: '#ffffff',
    // ...
  }
}
```

## Customization for Languages

### Special Colors for Python
```typescript
{
  "name": "Python self parameter",
  "scope": "variable.language.special.self.python",
  "settings": {
    "foreground": palette.accent.magenta,
    "fontStyle": "italic"
  }
}
```

### Special Colors for JavaScript
```typescript
{
  "name": "JavaScript this",
  "scope": "variable.language.this.js",
  "settings": {
    "foreground": palette.accent.red,
    "fontStyle": "bold"
  }
}
```

## Working with Transparency

### Semi-transparent Elements
```typescript
import { withAlpha } from './utils/color'

// 50% transparency
const semiTransparent = withAlpha(palette.accent.blue, 0.5)

// Hex transparency
const hexTransparent = withAlpha(palette.accent.blue, '80')
```

### Gradient Effects
```typescript
// Glow effect
'editor.wordHighlightBackground': withAlpha(palette.accent.blue, '22'),
'editor.wordHighlightStrongBackground': withAlpha(palette.accent.blue, '44'),
```

## Semantic Tokens

### Configuration for TypeScript
```typescript
export const semanticTokenColors = {
  // Interfaces
  'interface': { 
    foreground: palette.accent.cyan,
    fontStyle: 'italic'
  },
  
  // Types
  'type': { 
    foreground: palette.accent.teal 
  },
  
  // Enums
  'enum': { 
    foreground: palette.accent.purple 
  },
  
  // Generics
  'typeParameter': { 
    foreground: palette.accent.yellow 
  }
}
```

## Testing Colors

### Creating a Test File
```typescript
// test-colors.ts
const colors = {
  // Comments
  // TODO: check this color
  
  // Strings
  message: "Hello, world!",
  template: `Template string with ${variable}`,
  
  // Numbers
  integer: 42,
  float: 3.14,
  hex: 0xFF,
  
  // Functions
  function greet(name: string): string {
    return `Hello, ${name}!`
  },
  
  // Classes and interfaces
  interface User {
    name: string
    age: number
  }
  
  class UserService implements Service {
    private users: User[] = []
    
    public addUser(user: User): void {
      this.users.push(user)
    }
  }
}
```

## Debugging Colors

### Inspecting Elements
1. Open Developer Tools (Ctrl+Shift+I)
2. Find the element in the DOM
3. Check the CSS classes and styles
4. Match with the theme settings

### Using the Scope Inspector
1. Open the Command Palette (Ctrl+Shift+P)
2. Run "Developer: Inspect Editor Tokens and Scopes"
3. Click on a code element
4. See the scope and applied rules