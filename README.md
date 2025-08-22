# [Tokyo Night Lod](https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-night-lod)

[![Version](https://img.shields.io/visual-studio-marketplace/v/lod-inc.tokyo-night-lod.svg)](https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-night-lod)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/lod-inc.tokyo-night-lod.svg)](https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-night-lod&ssr=false#review-details)
[![Issues](https://img.shields.io/github/issues/darqus/tokyo-night-vscode-theme-lod)](https://github.com/darqus/tokyo-night-vscode-theme-lod/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A refined version of the Tokyo Night theme with improved contrast, multiple variants, and a modern TypeScript-based architecture.

## ✨ Features

- **🎨 Multiple Variants** - Standard, High Contrast, Minimal, and Accessibility versions
- **🔧 TypeScript Architecture** - Modern, maintainable theme generation system
- **🤖 Smart Versioning** - Automated release management with conventional commits
- **🧪 Quality Assurance** - Comprehensive testing and validation pipeline
- **📚 Excellent Documentation** - Detailed guides for users and contributors

## 📸 Screenshots

![Tokyo Night Lod - Main Theme](https://github.com/darqus/tokyo-night-vscode-theme-lod/blob/main/static/ss_tokyo_night_dark.png?raw=true)

## 🚀 Installation

### Via VS Code Marketplace

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Tokyo Night Lod"
4. Click **Install**

### Via Command Line

```bash
code --install-extension lod-inc.tokyo-night-lod
```

### Manual Installation

```bash
# Download the latest release
npm run package

# Install the .vsix file
code --install-extension tokyo-night-lod-*.vsix
```

## 🎨 Theme Variants

| Variant | Description | Best For |
|---------|-------------|----------|
| **Tokyo Night Lod** | Standard version with balanced contrast | General development |
| **Tokyo Night Lod High Contrast** | Enhanced contrast for better visibility | Accessibility, bright environments |
| **Tokyo Night Lod Minimal** | Clean, minimal styling | Distraction-free coding |

## 🛠️ For Developers

### Quick Start

```bash
# Clone and setup
git clone https://github.com/darqus/tokyo-night-vscode-theme-lod.git
cd tokyo-night-vscode-theme-lod
npm install

# Build all theme variants
npm run build:all

# Run tests
npm test

# Create a release
npm run release:dry  # Preview
npm run release      # Execute
```

### Project Architecture

```
src/
├── palette.ts              # 🎨 Central color definitions
├── build.ts                # 🏗️ Theme generator
├── tokenColors.ts          # 🌈 Syntax highlighting rules
├── semanticTokenColors.ts  # 🎯 Semantic token colors
└── utils/color.ts          # 🛠️ Color manipulation utilities

scripts/
├── cli.ts                  # 🖥️ Command line interface
├── smart-version.ts        # 🤖 Automated versioning
└── smoke-compare.ts        # 🧪 Theme validation tests
```

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [📋 Architecture Guide](./docs/ARCHITECTURE.md) | Theme structure and design principles |
| [🛠️ Development Guide](./docs/DEVELOPMENT.md) | How to build and modify themes |
| [🔍 Validation System](./docs/VALIDATION.md) | Automatic theme validation and quality assurance |
| [🤖 Smart Versioning](./docs/SMART_VERSIONING.md) | Automated release system |
| [🎨 Color Palette](./docs/COLOR_PALETTE.md) | Understanding theme colors |
| [📚 Full Documentation](./docs/README.md) | Complete documentation index |

## 🎨 Color System

The Tokyo Night Lod theme uses a carefully selected color palette to provide a comfortable and visually appealing coding experience. Below are some of the key color categories and their representative hex values.

### Accent Colors

These colors are primarily used for syntax highlighting and provide visual distinction for different code elements.

| Color Name | Hex Value | Description |
|---|---|---|
| Blue | `#7aa2f7` | Keywords, types |
| Cyan | `#7dcfff` | Strings, imports |
| Teal | `#85c9c1` | Properties, attributes |
| Magenta | `#bb9af7` | Variables, constants |
| Yellow | `#e0af68` | Numbers, parameters |
| Orange | `#ff9e64` | Functions, methods |
| Red | `#f7768e` | Errors, warnings |
| Purple | `#9d7cd8` | Operators, special characters |

### Token Colors (Examples)

These are examples of colors used for specific syntax tokens, providing fine-grained control over code readability.

| Token Type | Hex Value | Description |
|---|---|---|
| Comment | `#545c7e` | Comments and documentation |
| String | `#9ece6a` | Strings and text content |
| Keyword | `#bb9af7` | General keywords |
| Function | `#7aa2f7` | Function names |
| Variable | `#c0caf5` | General variables |
| Operator | `#89ddff` | Operators and punctuation |
| Tag | `#f7768e` | HTML/XML tags |
| Number | `#c0768e` | Numeric values |
| Error | `#f7768e` | Error indicators |
| Warning | `#ffdb69` | Warning indicators |

## Original Theme

<https://github.com/enkia/tokyo-night-vscode-theme>

## Development: Palette and build (TypeScript)

This theme is now generated from a small TypeScript build pipeline to keep color values in one place.

- src/palette.ts — typed palette (bg/fg/brand/accent/ansi)
- src/utils/color.ts — helpers like withAlpha('#RRGGBB', 'AA' | 0..1)
- src/build.ts — reads the existing theme JSON and fully regenerates the "colors", "tokenColors" and "semanticTokenColors" sections from code using the palette and typed sources
- src/tokenColors.ts — typed source of truth for TextMate token colors (scopes and settings)
- src/semanticTokenColors.ts — typed source of truth for semantic token colors

How to edit colors and token colors:

- Change values in src/palette.ts (UI/editor colors)
- Edit token colors in src/tokenColors.ts (scopes and foreground/background/fontStyle)
- Edit semantic token colors in src/semanticTokenColors.ts
- Optionally adjust build logic in src/build.ts if you want to map new keys or use helpers
