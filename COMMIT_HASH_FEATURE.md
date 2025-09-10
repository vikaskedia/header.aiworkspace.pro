# Commit Hash Display Feature

This header package now includes commit hash display functionality that shows the last GitHub commit ID of the app where you install this package.

## Features

1. **Commit Hash Display**: Shows the current app's commit hash in the user profile dropdown menu
2. **Version Checking**: Automatically checks for app updates every 30 seconds
3. **Update Alert**: Shows a notification when a new version is available
4. **Copy to Clipboard**: Click on the version to copy the full commit hash to clipboard

## How It Works

### Build Time
- The Vite build process automatically detects the current git commit hash
- Injects `__COMMIT_HASH__` and `__SHORT_COMMIT_HASH__` as global variables
- Generates a `version.json` file in the public directory for version checking

### Runtime
- Displays the short commit hash (7 characters) in the user dropdown menu
- Periodically checks `/version.json` for updates
- Shows an alert when a newer version is detected
- Allows users to reload the page to get the latest version

## Usage

The feature is automatically enabled when you build the header package. No additional configuration is required.

### For App Developers

When you install this header package in your app:

1. The header will automatically show your app's commit hash
2. Users can click on the version to copy the full hash
3. The header will check for updates and notify users when available

### Version Checking

The header checks for updates by:
1. Fetching `/version.json` from your app's public directory
2. Comparing the current commit hash with the latest one
3. Showing an update alert if they don't match

Make sure your app's build process generates a `version.json` file in the public directory for version checking to work properly.

## Files Modified

- `src/types/global.d.ts` - Added type declarations for commit hash variables
- `vite.config.ts` - Added git commit hash detection and injection
- `src/components/AIWorkspaceHeader.vue` - Added version display and checking functionality

## Example Output

The user dropdown menu will show:
```
Profile Settings
Switch Workspace
Version: a1b2c3d
Sign Out
```

Clicking on "Version: a1b2c3d" will copy the full commit hash to clipboard and show a success message.
