# Publishing Guide

This document explains how to set up and use the automated publishing process for the Tokyo Modern VS Code theme.

## Prerequisites

Before you can publish the extension, you need to set up the following:

### 1. VS Code Marketplace Publisher Access Token

1. Go to [Azure DevOps Portal](https://dev.azure.com/)
2. Sign in with your Microsoft account
3. Navigate to [Visual Studio Marketplace Publisher Portal](https://marketplace.visualstudio.com/manage)
4. Create a new publisher (if you don't have one) or select an existing one
5. Generate a Personal Access Token (PAT) with the following scopes:
   - `Marketplace` → `Manage` (to publish extensions)
6. Copy the generated token

### 2. Open VSX Registry Access Token

1. Go to [Open VSX Registry](https://open-vsx.org/)
2. Create an account or sign in
3. Navigate to your profile settings
4. Generate a Personal Access Token

## Setting Up GitHub Secrets

1. In your GitHub repository, go to Settings → Secrets and variables → Actions
2. Add the following repository secrets:

   - `VSCE_PAT`: Your VS Code Marketplace Personal Access Token
   - `OVSX_PAT`: Your Open VSX Registry Personal Access Token
   - `CODECOV_TOKEN`: (Optional) Your Codecov token if you want coverage reporting

## Publishing Process

The publishing process is fully automated through GitHub Actions:

1. Make sure all your changes are committed and pushed to the main branch
2. Create a new tag in the format `vX.Y.Z` (e.g., `v2.4.0`)
3. Push the tag to the repository: `git push origin vX.Y.Z`
4. GitHub Actions will automatically trigger the publishing workflow:
   - Run tests across multiple Node.js versions
   - Build the theme and VSIX package
   - Publish to VS Code Marketplace
   - Publish to Open VSX Registry
   - Create a GitHub release with the VSIX file attached

## Manual Publishing (if needed)

If you need to publish manually, you can do so:

```bash
# Install vsce if not already installed
npm install -g @vscode/vsce

# Build the VSIX package
npm run build:vsix

# Publish to marketplace (requires VSCE_PAT)
vsce publish -p <your-pat-here>
```

## Verification

After publishing, you can verify the new version is available:

- VS Code Marketplace: <https://marketplace.visualstudio.com/items?itemName=lod-inc.tokyo-modern>
- Open VSX Registry: <https://open-vsx.org/extension/lod-inc/tokyo-modern>

## Troubleshooting

If publishing fails:

1. Check the GitHub Actions workflow logs for error messages
2. Verify that your PATs have the correct permissions
3. Ensure the package version in `package.json` follows semantic versioning
4. Make sure you have the required permissions to publish to the marketplace
