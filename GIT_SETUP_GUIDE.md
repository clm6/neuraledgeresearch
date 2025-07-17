# Git Setup Guide - Fix SSH Authentication

This guide will help you resolve the "Permission denied (publickey)" error and set up Git properly for your NeuralEdge Research website deployment.

## 🔑 Option 1: Use HTTPS (Recommended for Beginners)

### 1.1 Change Remote URL to HTTPS
```bash
# Remove the SSH remote
git remote remove origin

# Add HTTPS remote instead
git remote add origin https://github.com/YOUR_USERNAME/neuraledge-website.git
```

### 1.2 Push to GitHub
```bash
git push -u origin main
```

When prompted, enter your GitHub username and password (or personal access token).

## 🔐 Option 2: Set Up SSH Keys (More Secure)

### 2.1 Generate SSH Key
```bash
# Generate a new SSH key
ssh-keygen -t ed25519 -C "craig@neuraledgeresearch.com"

# Press Enter to accept default file location
# Enter a passphrase (optional but recommended)
```

### 2.2 Start SSH Agent
```bash
# Start the SSH agent
eval "$(ssh-agent -s)"

# Add your SSH key to the agent
ssh-add ~/.ssh/id_ed25519
```

### 2.3 Copy Public Key
```bash
# Display your public key
cat ~/.ssh/id_ed25519.pub
```

### 2.4 Add Key to GitHub
1. Go to [GitHub.com](https://github.com)
2. Click your profile picture → Settings
3. Click "SSH and GPG keys" in the sidebar
4. Click "New SSH key"
5. Give it a title: "NeuralEdge Website"
6. Paste your public key in the "Key" field
7. Click "Add SSH key"

### 2.5 Test SSH Connection
```bash
ssh -T git@github.com
```

You should see: "Hi YOUR_USERNAME! You've successfully authenticated..."

### 2.6 Push to GitHub
```bash
git push -u origin main
```

## 🚀 Quick Fix Script

Run this PowerShell script to automatically set up HTTPS:

```powershell
# Quick Git Setup Script
Write-Host "🔧 Setting up Git for NeuralEdge Research website..." -ForegroundColor Green

# Configure Git user
git config --global user.name "Your Name"
git config --global user.email "craig@neuraledgeresearch.com"

# Check current remote
Write-Host "Current remote URL:" -ForegroundColor Yellow
git remote -v

# Ask for GitHub username
$githubUsername = Read-Host "Enter your GitHub username"

# Change to HTTPS
git remote set-url origin "https://github.com/$githubUsername/neuraledge-website.git"

Write-Host "✅ Remote URL updated to HTTPS" -ForegroundColor Green
Write-Host "Now run: git push -u origin main" -ForegroundColor Cyan
```

## 🔧 Alternative: GitHub CLI

### Install GitHub CLI
```bash
# Windows (with winget)
winget install GitHub.cli

# Or download from: https://cli.github.com/
```

### Authenticate and Create Repository
```bash
# Login to GitHub
gh auth login

# Create repository
gh repo create neuraledge-website --public --source=. --remote=origin --push
```

## 📋 Step-by-Step Process

### Step 1: Choose Your Method
- **HTTPS**: Easier, works immediately
- **SSH**: More secure, requires setup

### Step 2: Configure Git (if not done)
```bash
git config --global user.name "Your Name"
git config --global user.email "craig@neuraledgeresearch.com"
```

### Step 3: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name: `neuraledge-website`
4. Make it **Public**
5. Don't initialize with README
6. Click "Create repository"

### Step 4: Push Your Code
```bash
# If using HTTPS
git remote add origin https://github.com/YOUR_USERNAME/neuraledge-website.git
git push -u origin main

# If using SSH
git remote add origin git@github.com:YOUR_USERNAME/neuraledge-website.git
git push -u origin main
```

## 🛠️ Troubleshooting

### "Repository not found"
- Check your GitHub username is correct
- Ensure the repository exists on GitHub
- Verify you have access to the repository

### "Authentication failed"
- For HTTPS: Use a Personal Access Token instead of password
- For SSH: Ensure your SSH key is added to GitHub

### "Permission denied"
- Check your SSH key is in the SSH agent
- Verify the key is added to your GitHub account
- Try: `ssh -T git@github.com`

## 🔑 Personal Access Token (HTTPS Method)

If you prefer HTTPS but get authentication errors:

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Select scopes: `repo`, `workflow`
4. Copy the token
5. Use the token as your password when pushing

## 📞 Need Help?

If you're still having issues:
1. Check your GitHub username is correct
2. Ensure the repository exists on GitHub
3. Try the HTTPS method first (easier)
4. Contact: craig@neuraledgeresearch.com

## ✅ Success Checklist

- [ ] Git configured with your name and email
- [ ] GitHub repository created
- [ ] Remote URL set correctly
- [ ] Code pushed to GitHub
- [ ] Ready for Vercel deployment

Once you've successfully pushed to GitHub, you can proceed with the Vercel deployment using the `DEPLOYMENT_GUIDE.md`. 