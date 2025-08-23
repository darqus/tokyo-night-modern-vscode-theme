# Development Guide

Quick guide for building and modifying the Tokyo Night Lod theme.

## 🚀 Setup

```bash
git clone https://github.com/darqus/tokyo-night-vscode-theme-lod.git
cd tokyo-night-vscode-theme-lod
npm install
npm run build
```

**Requirements:** Node.js 16+, VS Code for testing

## 🎨 Customizing Colors

### Edit Color Palette

1. Open `src/palette.ts`
2. Modify colors in appropriate sections:
   - `background` - Editor/UI backgrounds
   - `foreground` - Text colors
   - `accent` - Highlight colors
   - `syntax` - Code syntax colors
3. Run `npm run build`
4. Test in VS Code

### Example

```typescript
// src/palette.ts
export const palette = {
  background: {
    primary: '#1a1b26',    // Main editor
    secondary: '#16161e',  // Sidebar
  }
}
```

## 🌈 Syntax Highlighting

### Token Colors (`src/tokenColors.ts`)

```typescript
{
  scope: ['comment'],
  settings: {
    foreground: palette.syntax.comment,
    fontStyle: 'italic'
  }
}
```

### Semantic Colors (`src/semanticTokenColors.ts`)

```typescript
{
  'variable.readonly': palette.syntax.constant,
  'function.declaration': palette.syntax.function,
}
```

## 🧪 Testing

```bash
npm test              # All tests
npm run build         # Build theme
npm run package       # Create .vsix file
```

**Manual Testing:**

1. Build theme
2. Install `.vsix` in VS Code
3. Test with different file types

## 📦 Release

```bash
npm run release:dry   # Preview release
npm run release       # Create release
```

The system automatically:

- Analyzes commits for version bump
- Updates CHANGELOG.md
- Creates git tags
- Packages extension

## 🔧 Commands

```bash
npm run build         # Build theme
npm run validate:all  # Validate themes
npm run cli --help    # CLI options
```

## 🐛 Troubleshooting

**Build fails:** Check TypeScript errors with `npx tsc --noEmit`
**Colors not applying:** Rebuild and restart VS Code
**Test failures:** Check theme JSON validity

## 🔄 Git Workflow

Use conventional commits for automatic versioning:

```bash
git commit -m "feat(colors): add new accent color"
git commit -m "fix(build): resolve compilation error"
git commit -m "docs: update readme"
```

## 📚 Resources

- [VS Code Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme)
- [Project Issues](https://github.com/darqus/tokyo-night-vscode-theme-lod/issues)
- **Debug Tools:** `Help > Toggle Developer Tools` in VS Code
