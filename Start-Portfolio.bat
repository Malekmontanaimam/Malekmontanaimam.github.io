@echo off
title Malek Imam - Portfolio Server
cd /d "%~dp0"

set PORT=8090
set URL=http://localhost:%PORT%/

echo ==================================================
echo    MALEK IMAM  -  Portfolio
echo    Opening: %URL%
echo    (Keep this window open while viewing the site)
echo    To stop the server: close this window or Ctrl+C
echo ==================================================
echo.

REM --- Find Python (try "python" then "py") ---
where python >nul 2>nul
if %errorlevel%==0 (
    set PY=python
) else (
    where py >nul 2>nul
    if %errorlevel%==0 (
        set PY=py
    ) else (
        echo [ERROR] Python was not found on this PC.
        echo Install it from https://www.python.org/downloads/
        echo and tick "Add Python to PATH" during setup.
        echo.
        pause
        exit /b 1
    )
)

REM --- Open the browser after a short delay, then start the server ---
start "" /min cmd /c "timeout /t 2 >nul & start "" %URL%"

%PY% -m http.server %PORT%

REM If the server stops, pause so the user can read any message
echo.
echo Server stopped.
pause
