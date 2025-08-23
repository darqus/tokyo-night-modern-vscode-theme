# Quick Start Guide

Get up and running with Tokyo Night Lod theme in minutes.

## 🚀 For Users

### Install Theme

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search "Tokyo Night Lod"
4. Click Install
5. Select theme: `Ctrl+Shift+P` → "Color Theme" → "Tokyo Night Lod"

### Customize Colors

Add to your VS Code settings:

```json
{
  "workbench.colorCustomizations": {
    "[Tokyo Night Lod]": {
      "editor.background": "#1a1b26"
    }
  }
}
```

## 🛠️ For Developers

### Setup Project

```bash
git clone https://github.com/darqus/tokyo-night-vscode-theme-lod.git
cd tokyo-night-vscode-theme-lod
npm install
```

### Make Changes

1. **Edit colors**: Modify `src/palette.ts`
2. **Build theme**: Run `npm run build`
3. **Test**: Install `.vsix` file in VS Code

### Common Tasks

```bash
npm run build         # Build theme
npm test              # Run tests
npm run package       # Create .vsix file
npm run release:dry   # Preview release
```

## 🎨 Quick Customizations

### Change Background

```typescript
// src/palette.ts
export const palette = {
  background: {
    primary: '#1a1b26',    // Your color here
    secondary: '#16161e',
  }
}
```

### Add New Syntax Color

```typescript
// src/tokenColors.ts
{
  scope: ['your.scope'],
  settings: {
    foreground: '#your-color'
  }
}
```

## 🔧 Troubleshooting

**Theme not applying?**

- Rebuild: `npm run build`
- Restart VS Code
- Check theme is selected

**Build errors?**

- Check TypeScript: `npx tsc --noEmit`
- Verify color format (hex values)

**Need help?**

- Check [Issues](https://github.com/darqus/tokyo-night-vscode-theme-lod/issues)
- Read [Development Guide](./DEVELOPMENT.md)

## 📚 Next Steps

- [Development Guide](./DEVELOPMENT.md) - Detailed development info
- [Color Palette](./COLOR_PALETTE.md) - Complete color reference
- [Architecture](./ARCHITECTURE.md) - Project structure
