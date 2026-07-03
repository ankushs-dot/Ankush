@echo off
title Content Automation Engine
echo ============================================
echo   Starting Content Automation Engine...
echo ============================================
echo.

cd /d "%~dp0backend"

REM Install dependencies on first run
python -m pip install -r requirements.txt >nul 2>&1

REM Start the backend server
start "" python server.py

REM Give the server a second, then open the dashboard
timeout /t 2 >nul
start "" "%~dp0index.html"

echo.
echo Dashboard opened in your browser.
echo This window runs the AI engine - keep it open while you work.
echo Close this window to stop the engine.
echo.
pause
