# Fix Git Authentication Script
# This script will help resolve the SSH authentication error

Write-Host "🔧 Fixing Git Authentication for NeuralEdge Research Website" -ForegroundColor Green
Write-Host "=============================================================" -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Please run this script from the neuraledge-website directory" -ForegroundColor Red
    exit 1
}

# Configure Git user (if not already configured)
Write-Host "`n📝 Configuring Git user..." -ForegroundColor Yellow
$userName = Read-Host "Enter your name (for Git commits)"
$userEmail = "craig@neuraledgeresearch.com"

git config --global user.name $userName
git config --global user.email $userEmail

Write-Host "✅ Git user configured" -ForegroundColor Green

# Check current remote
Write-Host "`n🔍 Current remote URL:" -ForegroundColor Yellow
git remote -v

# Get GitHub username
Write-Host "`n📋 GitHub Repository" -ForegroundColor Cyan
Write-Host "Repository: clm6/neuraledgeresearch" -ForegroundColor White
Write-Host "URL: https://github.com/clm6/neuraledgeresearch" -ForegroundColor White

$githubUsername = "clm6"
$repoName = "neuraledgeresearch"

# Remove existing remote if it exists
if (git remote get-url origin 2>$null) {
    Write-Host "`n🔄 Removing existing SSH remote..." -ForegroundColor Yellow
    git remote remove origin
}

# Add HTTPS remote
Write-Host "`n🔗 Setting up HTTPS remote..." -ForegroundColor Yellow
$httpsUrl = "https://github.com/$githubUsername/$repoName.git"
git remote add origin $httpsUrl

Write-Host "✅ Remote URL set to: $httpsUrl" -ForegroundColor Green

# Check if we have commits
$commitCount = git rev-list --count HEAD 2>$null
if ($commitCount -eq 0) {
    Write-Host "`n📝 Making initial commit..." -ForegroundColor Yellow
    git add .
    git commit -m "Initial commit: NeuralEdge Research website"
    Write-Host "✅ Initial commit created" -ForegroundColor Green
}

# Push to GitHub
Write-Host "`n🚀 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "When prompted, enter your GitHub username and password (or personal access token)" -ForegroundColor Cyan

try {
    git push -u origin main
    Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "`n🎉 Your code is now on GitHub and ready for Vercel deployment!" -ForegroundColor Green
    Write-Host "`n📋 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to Vercel.com and sign up/login" -ForegroundColor White
    Write-Host "2. Click 'New Project'" -ForegroundColor White
    Write-Host "3. Import your 'neuraledge-website' repository" -ForegroundColor White
    Write-Host "4. Deploy!" -ForegroundColor White
    Write-Host "`n📖 See DEPLOYMENT_GUIDE.md for detailed Vercel setup instructions" -ForegroundColor Yellow
} catch {
    Write-Host "`n❌ Push failed. Please check:" -ForegroundColor Red
    Write-Host "1. Your GitHub username is correct" -ForegroundColor White
    Write-Host "2. The repository exists on GitHub" -ForegroundColor White
    Write-Host "3. You have access to the repository" -ForegroundColor White
    Write-Host "4. Try using a Personal Access Token instead of password" -ForegroundColor White
}

Write-Host "`n📞 Need help? Contact: craig@neuraledgeresearch.com" -ForegroundColor Yellow 