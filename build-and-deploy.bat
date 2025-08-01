@echo off
echo Building Petal & Plank website...

REM Build the frontend with Vite
echo Step 1: Building frontend...
call npm run build

REM Check if build was successful
if %ERRORLEVEL% NEQ 0 (
    echo Frontend build failed!
    pause
    exit /b 1
)

REM Copy frontend files to IIS directory
echo Step 2: Copying files to C:\inetpub\wwwroot3...
if not exist "C:\inetpub\wwwroot3" (
    echo Creating directory C:\inetpub\wwwroot3...
    mkdir "C:\inetpub\wwwroot3"
)

REM Copy all files from dist/client to the IIS directory
xcopy /E /I /Y "dist\client\*" "C:\inetpub\wwwroot3\"

if %ERRORLEVEL% NEQ 0 (
    echo Failed to copy files to IIS directory!
    pause
    exit /b 1
)

echo.
echo ✓ Build and deployment completed successfully!
echo ✓ Frontend files copied to C:\inetpub\wwwroot3
echo.
echo Your Petal & Plank website is now ready in IIS!
pause