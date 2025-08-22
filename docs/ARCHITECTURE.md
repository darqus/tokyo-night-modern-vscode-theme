# Tokyo Night Lod - Architecture Guide

## 📋 Project Overview

The Tokyo Night Lod theme is a VS Code color theme built with a modern TypeScript architecture. The primary goals are to ensure high code readability, easy maintenance, and extensibility.

## 🎯 Design Principles

### 1. Single Source of Truth

- All colors are defined in `src/palette.ts`
- Avoiding "magic numbers" and color duplication
- Centralized color scheme management

### 2. Type Safety

- TypeScript for all data structures
- Strong typing for palette and tokens
- Automatic compilation error checking

### 3. Modularity

- Clear separation of responsibilities
- Well-defined interfaces between components
- Independent testing capabilities

### 4. Automation

- Theme generation from source code
- Automated build and validation
- Predictable build results

## 📁 Project Structure

```
src/
├── palette.ts              # 🎨 Central color palette
├── build.ts                # 🏗️ Theme generator
├── tokenColors.ts          # 🌈 Syntax colors
├── semanticTokenColors.ts  # 🎯 Semantic colors
└── utils/
    └── color.ts            # 🛠️ Color utilities

themes/
└── tokyo-night-dark-color-theme.json           # 📄 Tokyo Night Lod theme

scripts/
├── cli.ts                  # 🖥️ Command line interface
├── smart-version.ts        # 🤖 Smart versioning system
└── smoke-compare.ts        # 🧪 Smoke tests

docs/
├── README.md               # 📖 Documentation index
├── ARCHITECTURE.md         # 🏗️ This file
├── DEVELOPMENT.md          # 🛠️ Developer guide
└── SMART_VERSIONING.md     # 🤖 Versioning system
```

## 🎨 Color System

### Palette Structure

The color palette is organized into logical groups:

```typescript
interface Palette {
  background: BackgroundColors    // Editor and UI backgrounds
  foreground: ForegroundColors    // Text and content colors
  accent: AccentColors           // Highlight and accent colors
  syntax: SyntaxColors           // Code syntax highlighting
  semantic: SemanticColors       // Semantic token colors
  ui: UIColors                   // VS Code UI elements
}
```

### Color Categories

1. **Background Colors** - Various shades for editor, sidebars, and panels
2. **Foreground Colors** - Text colors with different opacity levels
3. **Accent Colors** - Brand colors and highlights
4. **Syntax Colors** - Language-specific token colors
5. **Semantic Colors** - Enhanced semantic highlighting
6. **UI Colors** - VS Code interface elements

## 🏗️ Build System

### Theme Generation Process

1. **Palette Loading** - Load color definitions from `palette.ts`
2. **Token Color Mapping** - Apply colors to TextMate scopes
3. **Semantic Token Mapping** - Apply semantic token colors
4. **UI Color Mapping** - Apply colors to VS Code UI elements
5. **Theme Output** - Generate final JSON theme files

### Build Pipeline

```bash
npm run build       # Build the theme
npm run validate     # Validate theme files
npm run test        # Run all tests
```

## 🔧 Component Details

### src/palette.ts

Central color definitions using a typed interface. All colors are defined here to maintain consistency and enable easy theme variations.

### src/build.ts

Main theme generator that:

- Reads the existing theme JSON structure
- Replaces color sections with generated values
- Preserves non-color theme properties
- Outputs updated theme files

### src/tokenColors.ts

TextMate token color definitions with:

- Scope-based color mapping
- Font style specifications
- Language-specific highlighting rules

### src/semanticTokenColors.ts

Semantic token colors for enhanced highlighting:

- Language server provided tokens
- More precise code element identification
- Better TypeScript/JavaScript support

### src/utils/color.ts

Color manipulation utilities:

- Alpha channel manipulation
- Color format conversion
- Palette color referencing helpers

## 🎮 CLI Interface

The project includes a powerful CLI tool (`scripts/cli.ts`) for:

- **Building** theme variants
- **Validating** theme files
- **Testing** theme consistency
- **Managing** development workflows

### Available Commands

```bash
npm run cli build <variant>      # Build specific variant
npm run cli validate <theme>     # Validate theme file
npm run cli test                 # Run theme tests
```

## 🤖 Smart Versioning

Automated release management system that:

- Analyzes conventional commits
- Determines semantic version increments
- Generates changelogs
- Creates GitHub releases
- Packages extension files

See [Smart Versioning Guide](./SMART_VERSIONING.md) for detailed information.

## 🧪 Testing Strategy

### Validation Levels

1. **JSON Schema Validation** - Ensure theme files are valid
2. **Color Accessibility** - Check contrast ratios
3. **Smoke Testing** - Compare theme outputs
4. **Integration Testing** - Test build pipeline

### Test Commands

```bash
npm test                    # Run all tests
npm run test:smoke         # Smoke tests only
npm run validate:all       # Validate all themes
```

## 🔄 Development Workflow

### Making Changes

1. **Modify Colors** - Edit `src/palette.ts`
2. **Update Tokens** - Modify `src/tokenColors.ts` or `src/semanticTokenColors.ts`
3. **Build Theme** - Run `npm run build`
4. **Test Changes** - Run `npm test`
5. **Validate Output** - Check generated theme files

### Adding New Features

1. **Plan Changes** - Consider impact on existing themes
2. **Update Types** - Modify TypeScript interfaces
3. **Implement Logic** - Add new build logic
4. **Test Thoroughly** - Ensure all variants work
5. **Document Changes** - Update relevant documentation

## 🌟 Extension Points

The architecture supports easy extension for:

- **New Color Variants** - Add new palette configurations
- **Custom Token Colors** - Extend syntax highlighting
- **Additional Themes** - Create new theme variants
- **Build Customization** - Modify generation logic

## 📊 Performance Considerations

- **Build Speed** - Optimized TypeScript compilation
- **Theme Size** - Minimal JSON output
- **VS Code Integration** - Efficient color loading
- **Memory Usage** - Optimized color definitions

## 🔗 Dependencies

### Runtime Dependencies

- None (pure theme files)

### Development Dependencies

- **TypeScript** - Type-safe development
- **ts-node** - TypeScript execution
- **standard-version** - Automated versioning

### VS Code Compatibility

- **Minimum Version** - VS Code 1.74.0
- **Theme API** - VS Code Color Theme API v1
- **Semantic Tokens** - VS Code Semantic Highlighting API

This architecture ensures maintainable, scalable, and high-quality theme development while providing excellent developer experience.
