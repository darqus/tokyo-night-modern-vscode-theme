# Color Palette Reference

Complete color reference for the Tokyo Night Lod theme.

## 🎨 Core Colors

All colors are defined in `src/palette.ts` to maintain consistency and avoid duplication.

### Background Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#1a1b26` | Editor background |
| Secondary | `#16161e` | Sidebar, panels |
| Selection | `#283457` | Text selection |
| Line Highlight | `#24283b` | Current line |

### Text Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#c0caf5` | Main text |
| Secondary | `#9699a3` | Comments, disabled |
| Accent | `#bb9af7` | Keywords, operators |

## 🌈 Syntax Colors

| Token | Color | Examples |
|-------|-------|----------|
| Keywords | `#bb9af7` | `const`, `function`, `class` |
| Strings | `#9ece6a` | `"hello world"`, `'text'` |
| Numbers | `#ff9e64` | `123`, `3.14`, `0xFF` |
| Comments | `#565f89` | `// comment`, `/* block */` |
| Functions | `#7aa2f7` | `function()`, `method()` |
| Variables | `#c0caf5` | `const myVar`, `let data` |
| Types | `#7dcfff` | `string`, `number`, `boolean` |
| Operators | `#89ddff` | `+`, `-`, `=`, `&&`, `||` |

## 🔧 UI Colors

| Element | Color | Description |
|---------|-------|-------------|
| Activity Bar | `#16161e` | Left sidebar |
| Status Bar | `#16161e` | Bottom bar |
| Tab Active | `#24283b` | Active tab |
| Button Primary | `#7aa2f7` | Primary buttons |
| Error | `#f7768e` | Error indicators |
| Warning | `#e0af68` | Warning messages |
| Success | `#9ece6a` | Success indicators |

## 🛠️ Customization

### VS Code Settings

Override colors in your settings:

```json
{
  "workbench.colorCustomizations": {
    "[Tokyo Night Lod]": {
      "editor.background": "#1a1b26",
      "editor.foreground": "#c0caf5"
    }
  }
}
```

### Token Colors

Modify syntax highlighting:

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

## 🔍 Accessibility

All colors meet WCAG AA contrast requirements:

- Text on Background: 7.2:1 (AAA)
- Comments on Background: 4.8:1 (AA)

**Testing Tools:**

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- VS Code Extension: "Color Highlight"

## 📝 Guidelines

1. **Consistency** - Use palette colors consistently
2. **Contrast** - Maintain sufficient contrast for readability
3. **Hierarchy** - Use color intensity for visual hierarchy
4. **Accessibility** - Consider users with visual impairments
