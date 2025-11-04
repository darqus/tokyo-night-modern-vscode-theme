# CI/CD Pipeline Documentation

## Overview

The Tokyo Modern VS Code theme project uses GitHub Actions for continuous integration and deployment. The CI/CD pipeline automates testing, building, and publishing of the theme.

## Workflow Files

### [ci-cd.yml](../.github/workflows/ci-cd.yml)

- **Triggers**: Push to main/master branches and tags starting with 'v'
- **Purpose**: Full CI/CD pipeline including tests, build, and publishing
- **Jobs**:
  - `test`: Runs tests across multiple Node.js versions
  - `build`: Builds the theme and creates VSIX package
  - `publish`: Publishes to VS Code Marketplace and creates GitHub release (only for tags)

### [test.yml](../.github/workflows/test.yml)

- **Triggers**: Push to various branches and all pull requests
- **Purpose**: Automated testing for code quality and functionality
- **Jobs**:
  - `test`: Runs linting, formatting, unit tests, coverage, build validation, and contrast checks

## Publishing Process

When a new tag is created in the format `vX.Y.Z`, the following happens automatically:

1. Code is tested across multiple Node.js versions
2. Theme is built and VSIX package is created
3. Package is published to VS Code Marketplace using `VSCE_PAT` secret
4. Package is published to Open VSX Registry using `OVSX_PAT` secret
5. GitHub Release is created with the VSIX file attached

## Required Secrets

For the publishing workflow to work, the following secrets must be configured in the GitHub repository:

- `VSCE_PAT`: Personal Access Token for publishing to VS Code Marketplace
- `OVSX_PAT`: Personal Access Token for publishing to Open VSX Registry
- `CODECOV_TOKEN`: Token for uploading coverage reports to Codecov (optional)

## Environment Setup

The publishing job uses a `production` environment which can have additional protection rules configured in GitHub.

## Status Badges

The README includes badges showing the status of the workflows:

- CI/CD Pipeline status
- Test workflow status
- Marketplace version
- Marketplace downloads
- Marketplace rating
- License information
