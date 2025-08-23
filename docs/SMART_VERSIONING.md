# Smart Versioning System

Automated release management based on conventional commits.

## 🤖 Features

- **Automatic Version Detection** - Analyzes commits to determine patch/minor/major
- **Breaking Change Detection** - Supports `feat!:`, `fix!:` and `BREAKING CHANGE:`
- **Safety Checks** - Validates git status, tests, and build before release
- **Preview Mode** - Dry-run for safe verification
- **Detailed Analytics** - Statistics and reports with change summaries

## 📋 Commands

### Basic Usage

```bash
npm run release         # Automatic smart release
npm run release:dry     # Preview release (dry-run)
npm run release:force   # Force release (skip checks)
npm run version:analyze # Analyze commits only
```

### Advanced Usage

```bash
# Analyze specific range
npm run cli version --from=v1.0.0 --to=HEAD

# Custom version type
npm run cli version --type=minor

# Skip specific checks
npm run cli version --skip-tests --skip-build
```

## 🔍 Commit Analysis

### Supported Types

- `feat:` → **minor** version bump
- `fix:` → **patch** version bump
- `feat!:`, `fix!:` → **major** version bump
- `BREAKING CHANGE:` in body → **major** version bump

### Examples

```bash
# Patch release
git commit -m "fix(colors): resolve contrast issue"

# Minor release
git commit -m "feat(palette): add new accent color"

# Major release
git commit -m "feat!: redesign color system"
```

## 🛡️ Safety Features

### Pre-release Checks

1. **Git Status** - Ensures clean working directory
2. **Tests** - Runs all tests before release
3. **Build** - Validates theme generation
4. **Validation** - Checks theme file integrity

### Process

1. Analyze commits since last release
2. Determine version bump type
3. Run safety checks
4. Update version and CHANGELOG.md
5. Create git tag and commit
6. Package extension (.vsix)

## 📊 Output Example

```
🔍 Analyzing commits from v1.2.0 to HEAD...

📊 Changes Summary:
  • 3 features (minor)
  • 2 fixes (patch)
  • 1 breaking change (major)

🎯 Recommended version: 2.0.0 (major)

✅ All checks passed
🚀 Creating release v2.0.0...
```

## ⚙️ Configuration

The system uses conventional commit standards and can be customized in `scripts/smart-version.ts` for specific project needs.
