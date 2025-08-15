# [Tokyo Night Darqus](https://marketplace.visualstudio.com/items?itemName=tokyo-night-dark.tokyo-night-theme-darqus)

[![Version](https://img.shields.io/visual-studio-marketplace/v/tokyo-night-dark.tokyo-night-theme-darqus.svg)](https://marketplace.visualstudio.com/items?itemName=tokyo-night-dark.tokyo-night-theme-darqus)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/tokyo-night-dark.tokyo-night-theme-darqus.svg)](https://marketplace.visualstudio.com/items?itemName=tokyo-night-dark.tokyo-night-theme-darqus&ssr=false#review-details)
[![Issues](https://img.shields.io/github/issues/darqus/tokyo-night-dark)](https://github.com/darqus/tokyo-night-dark/issues)

A darker version of the Tokyo Night theme with slightly more muted syntax highlighting.

## 🎨 Features

- **Deep dark background** - reduces eye strain
- **Muted accents** - soft syntax highlighting
- **High contrast** - excellent readability
- **TypeScript-generated** - modern theme architecture

## 📸 Screenshots

![Screenshot - Tokyo Night Darqus](https://github.com/darqus/tokyo-night-dark/blob/main/static/ss_tokyo_night_dark.png?raw=true)

## 🚀 Installation

### From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Tokyo Night Darqus"
4. Click Install

### From the command line

```bash
code --install-extension tokyo-night-dark.tokyo-night-theme-darqus
```

## 🛠️ Development

This theme is built using a modern TypeScript approach for better maintainability and extensibility.

### Quick start

```bash
# Clone the repository
git clone https://github.com/darqus/tokyo-night-dark.git
cd tokyo-night-dark

# Install dependencies
npm install

# Build the theme
npm run build:theme

# Testing
npm run test:smoke
```

### Project structure

```bash
src/
├── palette.ts             # 🎨 Color palette
├── build.ts               # 🔧 Theme generator
├── tokenColors.ts         # 🌈 Syntax colors
├── semanticTokenColors.ts # 🎯 Semantic colors
└── utils/color.ts         # 🛠️ Color utilities
```

### Documentation

- [📋 Architecture](./ARCHITECTURE.md) - How the theme is structured
- [🛠️ Development](./DEVELOPMENT.md) - Developer's guide
- [🎨 Examples](./EXAMPLES.md) - Customization examples

## 🎨 Color Palette

| Category | Description | Examples |
|-----------|----------|---------|
| **Background** | Background colors | `#16161c` (base), `#1a1a22` (elevated) |
| **Foreground** | Text colors | `#a9b1d6` (primary), `#8a8ea8` (muted) |
| **Accents** | Syntax highlighting | `#7aa2f7` (blue), `#f7768e` (red) |
| **ANSI** | Terminal colors | Full palette for the terminal |

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
- Regenerate theme JSON:

```bash
npm run build:theme
```

The output file themes/tokyo-night-dark-color-theme.json is updated in-place.

Publish/package commands trigger the build automatically via the `vscode:prepublish` script.
