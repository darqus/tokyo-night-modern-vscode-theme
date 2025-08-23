# Tokyo Night Lod

[![Version](https://img.shields.io/visual-studio-marketplace/v/lod-inc.tokyo-night-lod.svg)](https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-night-lod)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/lod-inc.tokyo-night-lod.svg)](https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-night-lod&ssr=false#review-details)
[![Issues](https://img.shields.io/github/issues/darqus/tokyo-night-vscode-theme-lod)](https://github.com/darqus/tokyo-night-vscode-theme-lod/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A refined dark theme for VS Code with improved contrast and modern TypeScript architecture.

![Tokyo Night Lod Theme](https://github.com/darqus/tokyo-night-vscode-theme-lod/blob/main/static/ss_tokyo_night_dark.png?raw=true)

## 🚀 Installation

**Via VS Code Marketplace:**

1. Open VS Code Extensions (`Ctrl+Shift+X`)
2. Search for "Tokyo Night Lod"
3. Click Install

**Via Command Line:**

```bash
code --install-extension lod-inc.tokyo-night-lod
```

## ✨ Features

- **Refined Colors** - Carefully balanced palette for optimal readability
- **TypeScript Build** - Modern, maintainable theme generation
- **Smart Versioning** - Automated release management
- **Quality Assurance** - Comprehensive validation pipeline

## 🛠️ Development

### Quick Start

```bash
git clone https://github.com/darqus/tokyo-night-vscode-theme-lod.git
cd tokyo-night-vscode-theme-lod
npm install
npm run build
```

### Key Files

- `src/palette.ts` - Central color definitions
- `src/build.ts` - Theme generator
- `src/tokenColors.ts` - Syntax highlighting rules

### Commands

```bash
npm run build     # Build theme
npm test          # Run tests
npm run release   # Create release
```

## 📚 Documentation

- [Development Guide](./docs/DEVELOPMENT.md) - Build and modify themes
- [Color Palette](./docs/COLOR_PALETTE.md) - Color reference
- [Architecture](./docs/ARCHITECTURE.md) - Project structure

## 🎨 Color Highlights

| Element | Color | Usage |
|---------|-------|-------|
| Keywords | `#bb9af7` | `const`, `function`, `class` |
| Strings | `#9ece6a` | Text content |
| Functions | `#7aa2f7` | Function names |
| Comments | `#545c7e` | Code comments |

Based on the original [Tokyo Night theme](https://github.com/enkia/tokyo-night-vscode-theme).
