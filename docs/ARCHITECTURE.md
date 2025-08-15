# Tokyo Night Dark Theme Architecture

## 📁 Project Structure

```
src/
├── palette.ts          # Main color palette
├── build.ts            # Theme generator
├── tokenColors.ts      # Syntax colors
├── semanticTokenColors.ts # Semantic colors
└── utils/
    └── color.ts        # Color utilities
```

## 🎨 Color System

### Palette (palette.ts)
A central place for all theme colors, organized by category:

- **bg** - Background colors (base, elevated, recessed, etc.)
- **fg** - Text colors (primary, muted, subtle, etc.)
- **accent** - Accent colors (blue, red, green, etc.)
- **ansi** - Terminal colors
- **brand** - Brand colors

### Theme Generation (build.ts)
The main file that:
1. Imports the palette and utilities
2. Generates the `colors` object for VS Code
3. Combines all components into the final JSON

### Token Colors (tokenColors.ts)
Defines colors for various syntax elements:
- Comments
- Keywords
- Strings
- Numbers
- Functions, etc.

## 🔧 Build Process

1. `npm run build:theme` runs `ts-node src/build.ts`
2. The script reads all components
3. Generates the final theme JSON file
4. Saves to `themes/tokyo-night-dark-color-theme.json`

## 🧪 Testing

- `npm run test:smoke` - checks if the generated theme matches the expected one
- Compares colors, tokenColors, and semanticTokenColors

## 🎯 Design Principles

1. **Single Source of Truth** - all colors in palette.ts
2. **Type Safety** - TypeScript interfaces for all structures
3. **Modularity** - separation of responsibilities between files
4. **Automation** - theme generation from source code