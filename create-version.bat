@echo off
echo 🚀 Creating version.json for AIWorkspace header...
echo.

REM Check if we're in a git repository
git rev-parse HEAD >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  Not in a git repository or git not available
    echo 📝 Using fallback hash
    set COMMIT_HASH=unknown
) else (
    for /f %%i in ('git rev-parse HEAD') do set COMMIT_HASH=%%i
    echo ✅ Git repository detected
    echo 📝 Current commit hash: %COMMIT_HASH%
)

REM Create short hash (first 7 characters)
set SHORT_HASH=%COMMIT_HASH:~0,7%

REM Create public directory if it doesn't exist
if not exist "public" mkdir public

REM Create version.json
echo {> public\version.json
echo   "fullCommitHash": "%COMMIT_HASH%",>> public\version.json
echo   "shortCommitHash": "%SHORT_HASH%",>> public\version.json
echo   "timestamp": "%date% %time%",>> public\version.json
echo   "buildTime": "%date% %time%">> public\version.json
echo }>> public\version.json

echo ✅ Created version.json successfully!
echo 📄 File location: public\version.json
echo 🔗 Short hash: %SHORT_HASH%
echo 🔗 Full hash: %COMMIT_HASH%
echo.
echo 🎉 Done! The header should now show your commit hash.
echo 🔄 Refresh your app to see the changes.
echo.
echo 📋 Next steps:
echo 1. Refresh your app in the browser
echo 2. Check that the header shows your commit hash instead of "setup-required"
echo 3. For automatic generation, add the build plugin to your vite.config.js
echo.
pause
