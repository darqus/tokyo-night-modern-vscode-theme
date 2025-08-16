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

The Tokyo Night Darqus theme uses a carefully selected color palette to provide a comfortable and visually appealing coding experience. Below are some of the key color categories and their representative hex values.

### Accent Colors

These colors are primarily used for syntax highlighting and provide visual distinction for different code elements.

| Color Name | Hex Value | Description |
|---|---|---|
| Blue | <span style="background-color: #7aa2f7; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#7aa2f7` | Keywords, types |
| Cyan | <span style="background-color: #7dcfff; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#7dcfff` | Strings, imports |
| Teal | <span style="background-color: #85c9c1; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#85c9c1` | Properties, attributes |
| Magenta | <span style="background-color: #bb9af7; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#bb9af7` | Variables, constants |
| Yellow | <span style="background-color: #e0af68; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#e0af68` | Numbers, parameters |
| Orange | <span style="background-color: #ff9e64; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#ff9e64` | Functions, methods |
| Red | <span style="background-color: #f7768e; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#f7768e` | Errors, warnings |
| Purple | <span style="background-color: #9d7cd8; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#9d7cd8` | Operators, special characters |

### Token Colors (Examples)

These are examples of colors used for specific syntax tokens, providing fine-grained control over code readability.

| Token Type | Hex Value | Description |
|---|---|---|
| Comment | <span style="background-color: #545c7e; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#545c7e` | Comments and documentation |
| String | <span style="background-color: #9ece6a; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#9ece6a` | Strings and text content |
| Keyword | <span style="background-color: #bb9af7; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#bb9af7` | General keywords |
| Function | <span style="background-color: #7aa2f7; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#7aa2f7` | Function names |
| Variable | <span style="background-color: #c0caf5; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#c0caf5` | General variables |
| Operator | <span style="background-color: #89ddff; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#89ddff` | Operators and punctuation |
| Tag | <span style="background-color: #f7768e; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#f7768e` | HTML/XML tags |
| Number | <span style="background-color: #c0768e; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#c0768e` | Numeric values |
| Error | <span style="background-color: #f7768e; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#f7768e` | Error indicators |
| Warning | <span style="background-color: #ffdb69; display: inline-block; width: 12px; height: 12px; border: 1px solid #ccc; vertical-align: middle; margin-right: 5px;"></span> `#ffdb69` | Warning indicators |

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
