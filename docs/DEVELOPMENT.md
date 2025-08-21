# Development Guide

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn
- VS Code (for testing)

### Setup

```bash
# Clone the repository
git clone https://github.com/darqus/tokyo-night-vscode-theme-lod.git
cd tokyo-night-vscode-theme-lod

# Install dependencies
npm install

# Build the theme
npm run build:all

# Run tests
npm test
```

## 🏗️ Building Themes

### Build Commands

```bash
npm run build           # Build main theme only
npm run build:all       # Build all theme variants
npm run build:variants  # Build accessibility and minimal variants
```

### Theme Files Generated

- `themes/tokyo-night-dark-color-theme.json` - Main theme
- `themes/tokyo-night-dark-high-contrast-color-theme.json` - High contrast variant
- `themes/tokyo-night-dark-minimal-color-theme.json` - Minimal variant
- `themes/tokyo-night-accessibility-color-theme.json` - Accessibility focused
- `themes/tokyo-night-minimal-color-theme.json` - Clean minimal version

## 🎨 Customizing Colors

### Editing the Color Palette

1. Open `src/palette.ts`
2. Modify color values in the appropriate section:
   - `background` - Editor and UI backgrounds
   - `foreground` - Text colors
   - `accent` - Highlight colors
   - `syntax` - Code syntax colors
3. Run `npm run build:all` to regenerate themes
4. Test in VS Code

### Example Color Change

```typescript
// src/palette.ts
export const palette = {
  background: {
    primary: '#1a1b26',    // Main editor background
    secondary: '#16161e',  // Sidebar background
    // ... other colors
  }
}
```

### Adding New Colors

1. Add color to appropriate palette section
2. Update TypeScript interfaces if needed
3. Use the new color in token or semantic color files
4. Rebuild themes

## 🌈 Syntax Highlighting

### Token Colors (`src/tokenColors.ts`)

Controls TextMate grammar highlighting:

```typescript
{
  scope: ['comment', 'punctuation.definition.comment'],
  settings: {
    foreground: palette.syntax.comment,
    fontStyle: 'italic'
  }
}
```

### Semantic Colors (`src/semanticTokenColors.ts`)

Enhanced language server highlighting:

```typescript
{
  'variable.readonly': palette.syntax.constant,
  'function.declaration': palette.syntax.function,
  // ... more mappings
}
```

## 🧪 Testing

### Running Tests

```bash
npm test              # All tests
npm run test:smoke    # Smoke tests only
npm run validate:all  # Validate theme files
```

### Manual Testing

1. Build themes: `npm run build:all`
2. Install extension locally: `npm run package`
3. Load `.vsix` file in VS Code
4. Test with different file types

### Test Files

Create test files for different languages:

- `test.ts` - TypeScript
- `test.js` - JavaScript
- `test.json` - JSON
- `test.md` - Markdown
- `test.css` - CSS

## 📦 Packaging & Release

### Manual Package

```bash
npm run package  # Creates .vsix file
```

### Smart Release System

```bash
npm run release:dry    # Preview release
npm run release        # Create release
npm run release:force  # Force release (skip checks)
```

The smart release system:

- Analyzes conventional commits
- Determines version bump (patch/minor/major)
- Updates CHANGELOG.md
- Creates git tags
- Packages extension

### Publishing

```bash
npm run publish  # Publish to VS Code Marketplace
```

## 🔧 CLI Commands

### Using the CLI

```bash
npm run cli <command> [options]
```

### Available Commands

```bash
# Build specific variant
npm run cli build accessibility
npm run cli build minimal

# Validate theme file
npm run cli validate themes/tokyo-night-dark-color-theme.json

# Test theme consistency
npm run cli test
```

## 🐛 Debugging

### Common Issues

1. **Build Fails**
   - Check TypeScript errors: `npx tsc --noEmit`
   - Verify color values are valid hex codes

2. **Colors Not Applying**
   - Rebuild themes: `npm run build:all`
   - Restart VS Code
   - Check theme is selected in VS Code settings

3. **Test Failures**
   - Run individual tests to isolate issues
   - Check theme JSON validity
   - Verify smoke test expectations

### Debug Build Process

Add console logs to `src/build.ts`:

```typescript
console.log('Building theme with palette:', palette);
console.log('Generated theme colors:', theme.colors);
```

## 📊 Performance Tips

### Build Optimization

- Use `npm run build` for single theme during development
- Only run `npm run build:all` when needed
- Cache node_modules for faster CI builds

### Theme Size

- Keep color palette minimal
- Avoid duplicate color values
- Use utility functions for color variations

## 🔄 Git Workflow

### Conventional Commits

Use conventional commit format for automatic versioning:

```bash
git commit -m "feat(colors): add new accent color for warnings"
git commit -m "fix(build): resolve TypeScript compilation error"
git commit -m "docs(readme): update installation instructions"
```

### Commit Types

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code formatting
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Maintenance tasks

## 🆘 Getting Help

### Resources

- [VS Code Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme)
- [TextMate Grammar](https://macromates.com/manual/en/language_grammars)
- [Project Issues](https://github.com/darqus/tokyo-night-vscode-theme-lod/issues)

### Debugging Tools

- **Developer Console** - `Help > Toggle Developer Tools`
- **Scope Inspector** - `Developer: Inspect Editor Tokens and Scopes`
- **Color Picker** - Use browser dev tools on theme JSON

This development guide should help you get started with contributing to the Tokyo Night Lod theme project.
