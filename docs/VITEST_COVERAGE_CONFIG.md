# Vitest Coverage Configuration

This document explains the Vitest configuration changes made to handle the `node:inspector/promises` module issue.

## The Problem

The issue occurred when Vitest's coverage provider tried to use the `node:inspector/promises` module, which may not be available in all Node.js versions or environments. This could cause test execution failures when running coverage reports.

## Solution Implemented

1. **Conditional Coverage**: Coverage is now disabled by default and only enabled when explicitly requested via environment variable or command flag.

2. **Environment Variable Control**: The configuration now uses `process.env.COVERAGE === 'true'` to determine if coverage should be enabled.

3. **Enhanced Scripts**: Added multiple npm scripts to handle different testing scenarios:
   - `npm run test` - Runs tests without coverage (default behavior)
   - `npm run test:coverage` - Runs tests with coverage enabled
   - `npm run test:no-coverage` - Explicitly runs tests without coverage
   - `npm run test:run` - Runs tests without coverage (alternative to `npm test`)

## Configuration Details

### vitest.config.ts Changes

- Set `coverage.enabled` to only enable when `process.env.COVERAGE === 'true'`
- Added exclusion of entry point files that might cause issues with coverage instrumentation
- Kept V8 provider for better performance while maintaining compatibility

### package.json Changes

- Added `test:run` script as an alias to `vitest run`
- Updated `test:coverage` to explicitly set `COVERAGE=true`
- Added `test:no-coverage` script to run tests with coverage explicitly disabled

## Usage

- For regular testing: `npm run test` (no coverage)
- For coverage reports: `npm run test:coverage`
- For CI environments: Use the appropriate script based on coverage requirements
- For troubleshooting: Use `npm run test:no-coverage` if coverage-related issues occur

## Benefits

1. **Default Performance**: Tests run faster by default without coverage instrumentation
2. **Compatibility**: Avoids issues with `node:inspector/promises` in environments where it's not available
3. **Flexibility**: Provides options for different testing scenarios
4. **CI/CD Friendly**: Allows explicit control over coverage in automated environments
