# 🌆 Tokyo Night Modern

> A modern, balanced dark theme for VS Code. Minimalist palette, declarative generation, strict tests.

![Tokyo Night Modern](static/ss_tokyo_night_modern.png)

## 🎨 Overview

- Generation of the entire theme from a declarative palette (`src/theme/palette.ts`)
- All working colors and tokens — through code, without manual JSON edits
- Structure validation and identity tests of the final file
- No hardcoded colors — only roles and tokens

---

## Quick Start

1. Open VS Code, go to Extensions (`Ctrl+Shift+X`)
2. Find "Tokyo Night Modern"
3. Install and select the **Tokyo Night Modern** theme

---

## 🏗️ Project Structure

```text
src/theme/
 palette.ts   # Palette and base colors
 ui.ts        # Interface color mapping
 tokens.ts    # Syntax tokens
scripts/       # Build, validation, release
themes/        # Final JSON for VS Code
tests/         # Identity tests
```

---

## 🛠️ Development and Build

```bash
git clone https://github.com/darqus/tokyo-night-modern-vscode-theme.git
cd tokyo-night-modern-vscode-theme
npm install
npm run build:theme      # Build theme (themes/tokyo-night-modern-color-theme.json)
npm run test:theme       # Final file identity test
npm run validate:theme   # Theme structure validation
npm run build:vsix       # Build VSIX for publishing
```

---

## 📊 Metrics (current)

| Metric | Value |
|---------|----------|
| Base colors | 30+ |
| Interface colors | 400+ |
| Syntax tokens | 40+ |
| Tests | 1 (identity) |
| Hardcoded colors | 0 |

---

## 📄 License

MIT License — see [LICENSE](LICENSE)

---

## 🌆 About the Project

Made with ❤️ for long coding sessions.

⭐ GitHub: <https://github.com/darqus/tokyo-night-modern-vscode-theme>

📦 Marketplace: <https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-night-modern>
