# 🌃 Tokyo Night Theme

> **Beautiful dark theme** for VS Code with carefully crafted colors and modern design.

![Tokyo Night Theme](static/ss_tokyo_night_dark.png)

## 🎨 Overview

A **Tokyo Night dark theme** featuring:

- **12 base colors** → **366 interface colors** (programmatically generated)
- **WCAG compliant** contrast ratios for accessibility
- **Zero hardcoded colors** - centralized palette system
- **Modern TypeScript architecture** with full test coverage

## 🚀 Quick Start

1. Open VS Code Extensions (`Ctrl+Shift+X`)
2. Search "Tokyo Night Theme Collection"
3. Install and select **Tokyo Night Dark**

[Try online](https://vscode.dev/theme/lod-inc.tokyo-night-lod)

## 🏗️ Architecture

```
12 base colors → 366 interface colors → 13 syntax tokens
```

```text
src/
├── core/           # Base palette + color utilities
├── generators/     # Theme generation logic
├── types/          # TypeScript definitions
└── build.ts        # Main build script
```

## 🛠️ Development

```bash
git clone https://github.com/darqus/tokyo-night-vscode-theme-lod.git
cd tokyo-night-vscode-theme-lod
npm install
npm run build       # Build theme (~0.6s)
npm test           # Run tests (13 tests)
```

## 📊 Metrics

| Metric | Value | Status |
|--------|-------|--------|
| **Base colors** | 12 | ✅ |
| **Generated colors** | 366 | ✅ |
| **Syntax tokens** | 13 | ✅ |
| **Tests** | 13 | ✅ |
| **Build time** | ~0.6s | ✅ |
| **Hardcoded colors** | 0 | ✅ |

## 📚 Documentation

- [Quick Start](docs/QUICK_START.md) - Installation and setup
- [Development](docs/DEVELOPMENT.md) - Build and contribute
- [Colors](docs/COLORS.md) - Color palette reference
- [Theme Analysis](docs/THEME_ANALYSIS.md) - Architecture deep dive

## 🤝 Contributing

1. Fork repository
2. Create branch: `git checkout -b feat/feature-name`
3. Make changes and test: `npm test`
4. Submit PR

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**🌃 Tokyo Night Theme**  
*Crafted with ❤️ for developers*

[⭐ GitHub](https://github.com/darqus/tokyo-night-vscode-theme-lod) | [📦 Marketplace](https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-night-lod)

</div>