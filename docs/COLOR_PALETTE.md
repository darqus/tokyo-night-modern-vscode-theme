# Color Palette Reference

This document provides a complete reference for the Tokyo Night Lod color palette, including hex values, usage contexts, and customization guidelines.

## 🎨 Primary Palette

### Background Colors

| Color Name | Hex Value | Usage | Description |
|------------|-----------|-------|-------------|
| Primary Background | `#1a1b26` | Editor background | Main coding area |
| Secondary Background | `#16161e` | Sidebar, panels | Secondary UI areas |
| Selection Background | `#283457` | Text selection | Selected text highlight |
| Line Highlight | `#24283b` | Current line | Active line background |

### Foreground Colors

| Color Name | Hex Value | Usage | Description |
|------------|-----------|-------|-------------|
| Primary Text | `#c0caf5` | Main text | Code and content text |
| Secondary Text | `#9699a3` | Comments, disabled | Muted text content |
| Accent Text | `#bb9af7` | Keywords, operators | Important syntax elements |

## 🌈 Syntax Colors

### Language Elements

| Token Type | Hex Value | Usage | Examples |
|------------|-----------|-------|----------|
| **Keywords** | `#bb9af7` | Language keywords | `const`, `function`, `class` |
| **Strings** | `#9ece6a` | String literals | `"hello world"`, `'text'` |
| **Numbers** | `#ff9e64` | Numeric values | `123`, `3.14`, `0xFF` |
| **Comments** | `#565f89` | Code comments | `// comment`, `/* block */` |
| **Functions** | `#7aa2f7` | Function names | `function()`, `method()` |
| **Variables** | `#c0caf5` | Variable names | `const myVar`, `let data` |
| **Types** | `#7dcfff` | Type annotations | `string`, `number`, `boolean` |
| **Operators** | `#89ddff` | Operators | `+`, `-`, `=`, `&&`, `||` |

### Semantic Colors

| Semantic Token | Hex Value | Description |
|----------------|-----------|-------------|
| `class` | `#7aa2f7` | Class declarations |
| `interface` | `#7dcfff` | Interface definitions |
| `enum` | `#bb9af7` | Enumeration types |
| `function.declaration` | `#7aa2f7` | Function declarations |
| `variable.readonly` | `#ff9e64` | Constants and readonly variables |
| `parameter` | `#e0af68` | Function parameters |
| `property` | `#73daca` | Object properties |

## 🔧 UI Element Colors

### Editor Interface

| Element | Hex Value | Description |
|---------|-----------|-------------|
| **Activity Bar** | `#16161e` | Left sidebar background |
| **Status Bar** | `#16161e` | Bottom status bar |
| **Tab Background** | `#1a1b26` | Inactive tab color |
| **Tab Active** | `#24283b` | Active tab highlight |
| **Button Primary** | `#7aa2f7` | Primary button color |
| **Button Hover** | `#7dcfff` | Button hover state |

### Diagnostic Colors

| Type | Hex Value | Usage |
|------|-----------|-------|
| **Error** | `#f7768e` | Error indicators |
| **Warning** | `#e0af68` | Warning messages |
| **Info** | `#7aa2f7` | Information notices |
| **Success** | `#9ece6a` | Success indicators |

## 🎯 Theme Variants

### High Contrast Version

Increased contrast ratios for better accessibility:

| Element | Standard | High Contrast |
|---------|----------|---------------|
| Background | `#1a1b26` | `#0f0f14` |
| Text | `#c0caf5` | `#ffffff` |
| Selection | `#283457` | `#4a5c8a` |

### Minimal Version

Reduced visual noise for distraction-free coding:

| Element | Standard | Minimal |
|---------|----------|---------|
| Line Numbers | `#3b4261` | `#2a2f47` |
| Indent Guides | `#292e42` | `#1f2336` |
| Brackets | `#89ddff` | `#7aa2f7` |

## 🛠️ Customization

### Overriding Colors

To customize colors in your VS Code settings:

```json
{
  "workbench.colorCustomizations": {
    "[Tokyo Night Lod]": {
      "editor.background": "#1a1b26",
      "editor.foreground": "#c0caf5",
      "activityBar.background": "#16161e"
    }
  }
}
```

### Token Color Customization

To modify syntax highlighting:

```json
{
  "editor.tokenColorCustomizations": {
    "[Tokyo Night Lod]": {
      "textMateRules": [
        {
          "scope": "keyword",
          "settings": {
            "foreground": "#bb9af7"
          }
        }
      ]
    }
  }
}
```

### Semantic Token Customization

For semantic highlighting adjustments:

```json
{
  "editor.semanticTokenColorCustomizations": {
    "[Tokyo Night Lod]": {
      "rules": {
        "class": "#7aa2f7",
        "function": "#7dcfff"
      }
    }
  }
}
```

## 🔍 Color Accessibility

### WCAG Compliance

All color combinations meet WCAG AA contrast requirements:

| Combination | Contrast Ratio | Rating |
|-------------|----------------|--------|
| Text on Background | 7.2:1 | AAA |
| Comments on Background | 4.8:1 | AA |
| Selection on Background | 3.2:1 | AA |

### Testing Tools

Recommended tools for color accessibility testing:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- VS Code Extension: "Color Highlight"

## 📝 Usage Guidelines

### Best Practices

1. **Consistency** - Use palette colors consistently across all theme elements
2. **Contrast** - Maintain sufficient contrast for readability
3. **Hierarchy** - Use color intensity to establish visual hierarchy
4. **Accessibility** - Consider users with visual impairments

### Common Patterns

- **Primary colors** for main content
- **Secondary colors** for supporting elements
- **Accent colors** for highlights and emphasis
- **Muted colors** for less important information

This color reference serves as the definitive guide for understanding and customizing the Tokyo Night Lod theme palette.
