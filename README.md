# 🌆 Tokyo Night Modern

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/lod-inc.tokyo-night-modern?style=flat-square&label=Marketplace)](https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-night-modern)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/darqus/tokyo-night-modern-vscode-theme/release.yml?branch=main&style=flat-square)](https://github.com/darqus/tokyo-night-modern-vscode-theme/actions)

> A modern, balanced dark theme for VS Code. Minimalist palette, declarative generation, strict tests.

![Tokyo Night Modern](static/ss_tokyo_night_modern.png)

---

## 🎨 Overview

**Tokyo Night Modern** is not just another dark theme. It's a declaratively generated, minimalist theme focused on balance and consistency.

- **Declarative by Design**: The entire theme is generated from a central palette (`src/theme/palette.ts`). No more manual JSON tweaks.
- **Code-First**: All colors and tokens are managed through TypeScript, ensuring type safety and maintainability.
- **Strictly Tested**: Automated validation and identity tests guarantee that the theme remains consistent and error-free after every change.
- **Zero Hardcoded Colors**: Every color is based on a role or token, making the theme predictable and easy to customize.

---

## 🚀 Quick Start

1.  Open **VS Code**.
2.  Go to `Extensions` (`Ctrl+Shift+X`).
3.  Search for "Tokyo Night Modern".
4.  Click **Install** and select it as your active theme.

---

## 🏗️ Project Structure

The project is structured to separate concerns and automate the theme generation process.

```text
.
├── src/theme/
│   ├── palette.ts        # Base palette and color roles
│   ├── ui.ts             # UI color generation
│   ├── tokens.ts         # Syntax token generation
│   └── ...               # Other modules
├── scripts/              # Build, validation, and release automation
├── themes/               # Output directory for the generated JSON theme
└── tests/                # Identity and validation tests
```

---

## 🛠️ Development

To get started with local development:

```bash
# 1. Clone the repository
git clone https://github.com/darqus/tokyo-night-modern-vscode-theme.git
cd tokyo-night-modern-vscode-theme

# 2. Install dependencies
npm install

# 3. Run the development script
npm run dev

# 4. Build, test, and validate
npm run build:theme      # Generate the theme file
npm run test             # Run all tests
npm run validate:theme   # Validate the theme structure
npm run build:vsix       # Package for release
```

---

## 🗺️ Roadmap

Our plans for the future are documented in the [Roadmap](docs/ROADMAP.md).

---

## 🤝 Contributing

Contributions are welcome! Whether it's a bug report, a feature request, or a pull request, we appreciate your help. Please read our contributing guidelines (to be created).

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
