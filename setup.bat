@echo off
echo 🚀 NeuralEdge Research Website Setup
echo ====================================
echo.
echo This will prepare your website for deployment to GitHub and Vercel.
echo.
pause

powershell -ExecutionPolicy Bypass -File "setup-deployment.ps1"

echo.
echo Setup complete! Check the output above for next steps.
pause 