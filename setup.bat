@echo off
echo ========================================
echo NeuralEdge Research - Sanity Setup
echo ========================================
echo.

echo Installing dependencies...
npm install

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a Sanity project at sanity.io
echo 2. Get your project ID from the dashboard
echo 3. Update sanity.config.ts with your project ID
echo 4. Create .env.local with your project ID
echo 5. Run: npm run dev (for frontend)
echo 6. Run: npm run studio (for CMS)
echo.
echo Frontend: http://localhost:3000
echo Sanity Studio: http://localhost:3333
echo.
pause 