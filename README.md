# [Tokyo Night Darqus](https://marketplace.visualstudio.com/items?itemName=tokyo-night-dark.tokyo-night-theme-darqus)

[![Version](https://img.shields.io/visual-studio-marketplace/v/tokyo-night-dark.tokyo-night-theme-darqus.svg)](https://marketplace.visualstudio.com/items?itemName=tokyo-night-dark.tokyo-night-theme-darqus)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/tokyo-night-dark.tokyo-night-theme-darqus.svg)](https://marketplace.visualstudio.com/items?itemName=tokyo-night-dark.tokyo-night-theme-darqus&ssr=false#review-details)
[![Issues](https://img.shields.io/github/issues/darqus/tokyo-night-dark)](https://github.com/darqus/tokyo-night-dark/issues)

Darker version of the tokyo night theme with slightly more desaturated syntax highlighting.

## Screenshots

![Screenshot - Tokyo Night Darqus](https://raw.githubusercontent.com/darqus/tokyo-night-dark/master/static/ss_tokyo_night_dark.png)

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
