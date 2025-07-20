@echo off
echo ========================================
echo    Blog Post Generator
echo ========================================
echo.

if "%~1"=="" (
    echo Usage: generate-blog.bat "path\to\text\file.txt"
    echo.
    echo Example: generate-blog.bat "content\blog-docs\power-systems\Power System Application.txt"
    echo.
    pause
    exit /b 1
)

echo Processing: %1
echo.

node scripts/generate-blog-post.js "%~1"

echo.
echo ========================================
echo    Process Complete
echo ========================================
pause 