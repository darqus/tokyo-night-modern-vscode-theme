# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Build and Watch Theme

- Build theme: `npm run build:theme`
- Watch mode for development: `npm run build:theme:watch`

### Testing

- Run all tests: `npm run test`
- Test theme only: `npm run test:theme`
- Update theme test snapshots: `npm run test:theme:update`
- Validate theme: `npm run validate:theme`

### Package and Release

- Create VSIX package: `npm run package`
- Release new version: `npm run release`

### Code Quality

- Lint code: `npm run lint`
- Format code: `npm run format`
- Clean up palette: `npm run cleanup:palette`

### Dependencies

- Check for updates: `npm run deps:check`
- Update dependencies: `npm run deps:update`

## Architecture

This VSCode theme is built using a code-first, declarative approach with strong TypeScript support:

### Core Components

- `src/theme/palette.ts`: Central color palette definitions that drive the entire theme
- `themes/tokyo-night-modern-color-theme.json`: Generated theme file (do not edit directly)
- `scripts/build-theme.ts`: Theme generation script that transforms palette into VSCode theme format

### Key Design Principles

1. All colors are defined in the central palette - no hardcoded values allowed
2. Theme tokens use TypeScript for type safety and maintainability
3. Automated validation ensures theme consistency
4. Changes are made to source files only, never to the generated theme file

### Theme Generation Flow

1. Color definitions in palette.ts
2. Build script processes palette into token definitions
3. Theme file is generated with proper VSCode format
4. Validation tests ensure theme integrity
