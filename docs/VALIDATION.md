# Theme Validation System

Automatic validation system ensuring VS Code theme compliance and quality.

## 🔍 Features

### Property Validation

- **Valid Properties** - Checks against official VS Code property list
- **Deprecated Detection** - Finds unsupported properties
- **Renamed Properties** - Identifies properties renamed in newer versions
- **Smart Suggestions** - Suggests similar valid properties
- **Color Format Validation** - Validates hex colors and formats

### Quality Validation

- **WCAG Contrast** - Checks accessibility standards
- **Color Consistency** - Analyzes color scheme coherence
- **Accessibility** - Verifies focus borders and visibility
- **Color Duplication** - Finds redundant color usage

### Auto-fixing

- **Remove Deprecated** - Automatically removes unsupported properties
- **Rename Properties** - Updates old names to new ones
- **Save Clean Versions** - Creates "clean" theme versions
- **Detailed Reports** - Shows all changes made

## 🚀 Usage

### Build Integration

Validation runs automatically during theme build:

```bash
npm run build
```

Output shows issues and automatic fixes:

```
⚠️  Found property issues in Tokyo Night Dark:
🔴 button.focusBorder: Property "button.focusBorder" is deprecated
  💡 Remove this property
🔧 Auto-fixed 7 issues:
  • button.focusBorder: removed
  • input.focusBorder: removed
```

### CLI Commands

```bash
npm run validate:all      # Validate all themes
npm run validate:summary  # Summary only
npm run validate:fix      # Auto-fix issues
```

## 🔧 Options

| Option | Description |
|--------|-------------|
| `--all` | Validate all themes in themes/ folder |
| `--summary` | Show summary without details |
| `--verbose` | Detailed output with extra information |
| `--fix` | Automatically fix invalid properties |
| `--output <file>` | Save fixed theme to specified file |

## 🎯 Issue Types

### 🔴 Errors

- Invalid VS Code properties
- Deprecated properties
- Invalid color formats
- Missing required fields

### 🟡 Warnings

- Low contrast (WCAG AA)
- Missing focus borders
- Color inconsistencies
- Missing recommended fields

### 🔵 Info

- Redundant color duplication
- Short hex colors
- Improvement suggestions

## 📊 Structure

### PropertyValidator

- `allowedProperties.ts` - VS Code properties database
- `propertyValidator.ts` - Property validation logic
- Auto-fixing for invalid properties

### ThemeValidator

- `themeValidator.ts` - Theme quality validation
- WCAG contrast checking
- Consistency and accessibility analysis

### CLI Tool

- `validate-theme.ts` - Console interface
- Colored output and progress
- Multiple validation options

## ⚙️ Configuration

### Adding Custom Rules

```typescript
// In themeValidator.ts
validator.addRule({
  name: 'custom-rule',
  description: 'Custom validation rule',
  validate: (theme: ThemeData) => {
    // Validation logic
    return { passed: true, issues: [] }
  }
})
```

### Updating Properties

Update `allowedProperties.ts` when new VS Code versions are released:

```typescript
// Add new properties
ALLOWED_THEME_PROPERTIES.add('newProperty')

// Mark as deprecated
DEPRECATED_PROPERTIES.add('oldProperty')

// Add renames
RENAMED_PROPERTIES.set('oldName', 'newName')
```

## ✅ Benefits

1. **Automation** - No manual property checking needed
2. **Up-to-date** - Always matches latest VS Code version
3. **Quality** - Ensures high accessibility standards
4. **Speed** - Fast issue detection and fixing
5. **Consistency** - Uniform standards across theme variants
