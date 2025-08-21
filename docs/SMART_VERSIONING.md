# Smart Versioning System

## 🤖 Overview

The Tokyo Night Lod theme includes an advanced smart release system that automatically analyzes conventional commits and determines the correct version type (patch/minor/major) without manual specification. The system intelligently processes commits, provides detailed analytics, and ensures safe release creation.

## ✨ Key Features

### 🔍 Intelligent Commit Analysis

- **Automatic Parsing** - Analyzes conventional commits with support for all standard types
- **Smart Version Detection** - Automatically selects patch/minor/major based on change semantics
- **Breaking Change Detection** - Supports `feat!:`, `fix!:` and `BREAKING CHANGE:` in commit body
- **Scope Analysis** - Considers scope for more precise release type determination

### 📊 Advanced Analytics

- **Detailed Statistics** - Counts changes by types and categories
- **Smart Reporting** - Brief and detailed reports with emoji and color coding
- **Preview Mode** - Dry-run mode for safe verification
- **Historical Analysis** - Analyzes commits from specific tag or period

### 🛡️ Safety and Reliability

- **Automatic Checks** - Git status, tests, build before release
- **Force Mode** - Ability to bypass checks for emergency cases
- **Change Rollback** - Safe git state management
- **Validation** - Code and theme quality checks before release

## 📋 Commands

### Basic Usage

```bash
# Automatic smart release
npm run release

# Preview what would be released (dry-run)
npm run release:dry

# Force release (skip safety checks)
npm run release:force

# Analyze commits without releasing
npm run version:analyze
```

### Advanced Usage

```bash
# Smart version determination
npm run version:smart

# Test version detection logic
npm run test:version
```

## 🔍 How It Works

### 1. Commit Analysis

The system analyzes commits since the last release tag:

```bash
# Analyzes conventional commits
feat: add new color palette      # → minor version bump
fix: correct syntax highlighting # → patch version bump
feat!: change theme structure   # → major version bump
```

### 2. Version Calculation

Based on commit types, determines semantic version increment:

- **Major (X.0.0)** - Breaking changes (`feat!:`, `fix!:`, `BREAKING CHANGE:`)
- **Minor (0.X.0)** - New features (`feat:`)
- **Patch (0.0.X)** - Bug fixes (`fix:`)

### 3. Release Process

1. **Pre-release Checks**
   - Verify git status is clean
   - Run test suite
   - Build project

2. **Version Update**
   - Update `package.json` version
   - Generate `CHANGELOG.md` entry
   - Create git commit and tag

3. **Package Creation**
   - Build theme files
   - Create `.vsix` package
   - Prepare for distribution

## 📊 Commit Types Supported

### Standard Types

| Type | Description | Version Impact |
|------|-------------|----------------|
| `feat:` | New feature | Minor |
| `fix:` | Bug fix | Patch |
| `docs:` | Documentation | None |
| `style:` | Code formatting | None |
| `refactor:` | Code restructuring | None |
| `test:` | Test additions | None |
| `chore:` | Maintenance | None |

### Breaking Changes

| Format | Example | Version Impact |
|--------|---------|----------------|
| `feat!:` | `feat!: redesign color system` | Major |
| `fix!:` | `fix!: remove deprecated colors` | Major |
| `BREAKING CHANGE:` | In commit body | Major |

## 🎯 Best Practices

### Writing Good Commit Messages

```bash
# Good examples
feat(colors): add high contrast mode support
fix(build): resolve TypeScript compilation errors
docs(readme): update installation instructions
refactor(palette): organize colors by category

# Include scope when relevant
feat(accessibility): improve color contrast ratios
fix(tokens): correct string color in JSON files
```

### Using Breaking Changes

```bash
# Method 1: Exclamation mark
feat!: change default background color

# Method 2: BREAKING CHANGE in body
feat: redesign color palette

BREAKING CHANGE: Default background color changed from #1a1b26 to #16161e.
This may affect custom configurations.
```

## 🔧 Configuration

### Custom Release Configuration

The system uses `.versionrc.json` for configuration:

```json
{
  "types": [
    {
      "type": "feat",
      "section": "✨ Features"
    },
    {
      "type": "fix",
      "section": "🐛 Bug Fixes"
    }
  ]
}
```

### Package.json Scripts

Available npm scripts for release management:

```json
{
  "scripts": {
    "release": "ts-node scripts/smart-version.ts",
    "release:dry": "ts-node scripts/smart-version.ts --dry-run",
    "release:force": "ts-node scripts/smart-version.ts --force"
  }
}
```

## 📈 Analytics Output

### Summary Report

```
🔍 Commit analysis completed:
   📝 Commits analyzed: 15
   ✨ Features: ✅
   🐛 Fixes: ✅
   💥 Breaking: ✅

📈 Recommended release type: MAJOR

📊 Version: 0.4.3 → 1.0.0
```

### Detailed Statistics

```
📊 Detailed commit statistics:
   Total commits: 15
   Features: 8
   Bug fixes: 4
   Breaking changes: 1
   Others: 2
```

## 🚀 Release Workflow

### Automated Process

1. **Analysis Phase**
   - Scan commits since last release
   - Determine version increment
   - Generate change summary

2. **Validation Phase**
   - Run test suite
   - Build project
   - Validate theme files

3. **Release Phase**
   - Update version numbers
   - Generate changelog
   - Create git tag
   - Package extension

4. **Completion**
   - Display next steps
   - Provide push instructions

### Manual Steps After Release

```bash
# Push changes and tags to repository
git push --follow-tags origin main

# Publish to VS Code Marketplace (optional)
npm run publish
```

## 🛡️ Safety Features

### Pre-release Checks

- **Git Status** - Ensures working directory is clean
- **Test Suite** - Runs all validation tests
- **Build Process** - Verifies successful theme generation
- **File Validation** - Checks theme JSON integrity

### Error Handling

- **Graceful Failures** - Clear error messages and recovery suggestions
- **Rollback Support** - Can undo changes if process fails
- **Force Override** - Emergency bypass for critical fixes

## 🔍 Troubleshooting

### Common Issues

1. **No commits for release**

   ```bash
   ℹ️  No commits for release since last version
   ```

   - Solution: Make commits with conventional format

2. **Dirty git status**

   ```bash
   ❌ Git working directory is not clean
   ```

   - Solution: Commit or stash uncommitted changes

3. **Test failures**

   ```bash
   ❌ Tests failed, cannot proceed with release
   ```

   - Solution: Fix failing tests before release

### Debug Mode

Use `--verbose` flag for detailed output:

```bash
npm run release:dry -- --verbose
```

This smart versioning system ensures consistent, reliable, and automated release management for the Tokyo Night Lod theme project.
