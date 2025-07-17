# Install Git on Windows - Quick Guide

It looks like Git is not installed on your system. Here's how to install it and complete your website deployment.

## 🚀 Quick Installation

### Option 1: Using winget (Windows 10/11)
```powershell
winget install Git.Git
```

### Option 2: Download from Git Website
1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download the latest version for Windows
3. Run the installer
4. Use default settings (recommended)

### Option 3: Using Chocolatey
```powershell
choco install git
```

## 🔧 After Installing Git

### 1. Restart Your Terminal
Close and reopen PowerShell/Command Prompt

### 2. Verify Git Installation
```bash
git --version
```

### 3. Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "craig@neuraledgeresearch.com"
```

### 4. Fix Your Repository Remote
```bash
cd neuraledge-website
git remote remove origin
git remote add origin https://github.com/clm6/neuraledgeresearch.git
```

### 5. Push to GitHub
```bash
git add .
git commit -m "Initial commit: NeuralEdge Research website"
git push -u origin main
```

## 🎯 Alternative: Use GitHub Desktop

If you prefer a GUI:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Clone your repository: `https://github.com/clm6/neuraledgeresearch.git`
4. Copy all files from `neuraledge-website` to the cloned folder
5. Commit and push through GitHub Desktop

## 📋 Complete Setup Script

After installing Git, run this PowerShell script:

```powershell
# Complete Setup Script
Write-Host "🔧 Setting up NeuralEdge Research website..." -ForegroundColor Green

# Configure Git
git config --global user.name "Craig"
git config --global user.email "craig@neuraledgeresearch.com"

# Navigate to project
cd neuraledge-website

# Set up remote
git remote add origin https://github.com/clm6/neuraledgeresearch.git

# Add and commit files
git add .
git commit -m "Initial commit: NeuralEdge Research website"

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "✅ Success! Your website is now on GitHub." -ForegroundColor Green
Write-Host "📋 Next: Deploy to Vercel using DEPLOYMENT_GUIDE.md" -ForegroundColor Cyan
```

## 🚀 After Git Installation

Once Git is installed and you've pushed to GitHub:

1. **Deploy to Vercel**:
   - Go to [Vercel.com](https://vercel.com)
   - Import repository: `clm6/neuraledgeresearch`
   - Deploy automatically

2. **Connect Domain**:
   - In Vercel, add domain: `neuraledgeresearch.com`
   - In GoDaddy DNS, change nameservers to Vercel's

## 📞 Need Help?

- **Git Installation**: [https://git-scm.com/download/win](https://git-scm.com/download/win)
- **GitHub Desktop**: [https://desktop.github.com/](https://desktop.github.com/)
- **Contact**: craig@neuraledgeresearch.com

## ✅ Checklist

- [ ] Git installed
- [ ] Git configured with your name and email
- [ ] Repository remote set to HTTPS
- [ ] Code pushed to GitHub
- [ ] Ready for Vercel deployment

Your repository URL: **https://github.com/clm6/neuraledgeresearch** 