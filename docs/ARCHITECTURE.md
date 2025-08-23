# Architecture Guide

Modern TypeScript architecture for the Tokyo Night Lod VS Code theme.

## 🎯 Design Principles

1. **Single Source of Truth** - All colors in `src/palette.ts`
2. **Type Safety** - TypeScript for all data structures
3. **Modularity** - Clear separation of responsibilities
4. **Automation** - Theme generation from source code

## 📁 Project Structure

```
src/
├── palette.ts              # 🎨 Central color palette
├── build.ts                # 🏗️ Theme generator
├── tokenColors.ts          # 🌈 Syntax colors
├── semanticTokenColors.ts  # 🎯 Semantic colors
└── utils/color.ts          # 🛠️ Color utilities

themes/
└── tokyo-night-dark-color-theme.json  # Generated theme

scripts/
├── cli.ts                  # 🖥️ Command line interface
├── smart-version.ts        # 🤖 Smart versioning
└── smoke-compare.ts        # 🧪 Theme validation
```

## 🎨 Color System

### Palette Structure

```typescript
interface Palette {
  background: BackgroundColors  // Editor backgrounds
  foreground: ForegroundColors  // Text colors
  accent: AccentColors          # Highlight colors
  syntax: SyntaxColors          # Code syntax colors
  semantic: SemanticColors     # Semantic tokens
  ui: UIColors                 # VS Code UI elements
}
```

### Color Categories

- **Background** - Editor, sidebars, panels
- **Foreground** - Text with different opacity levels
- **Accent** - Brand colors and highlights
- **Syntax** - Language-specific tokens
- **Semantic** - Enhanced semantic highlighting
- **UI** - VS Code interface elements

## 🏗️ Build System

### Generation Process

1. Load colors from `palette.ts`
2. Apply to TextMate scopes (`tokenColors.ts`)
3. Apply semantic tokens (`semanticTokenColors.ts`)
4. Apply UI colors (`build.ts`)
5. Generate final JSON theme

### Commands

```bash
npm run build       # Build theme
npm run validate    # Validate files
npm run test        # Run tests
```

## 🔧 Key Components

### `src/palette.ts`

Central color definitions with typed interfaces for consistency.

### `src/build.ts`

Theme generator that reads existing JSON structure and replaces color sections.

### `src/tokenColors.ts`

TextMate token colors with scope-based mapping and font styles.

### `src/semanticTokenColors.ts`

Enhanced semantic highlighting for better language server support.

### `src/utils/color.ts`

Color utilities for alpha manipulation and format conversion.

## 🤖 Automation

- **Smart Versioning** - Automated releases based on conventional commits
- **CLI Tools** - Build, validate, and test commands
- **Quality Assurance** - Automated validation and testing

See [Smart Versioning Guide](./SMART_VERSIONING.md) for details.
