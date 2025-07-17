# Deployment Guide: GitHub + Vercel + GoDaddy

This guide will walk you through deploying your NeuralEdge Research website using GitHub, Vercel, and GoDaddy.

## 🚀 Step 1: Prepare Your Project

### 1.1 Initialize Git Repository
```bash
cd neuraledge-website
git init
git add .
git commit -m "Initial commit: NeuralEdge Research website"
```

### 1.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `neuraledge-website`
4. Make it **Public** (Vercel works better with public repos)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 1.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/neuraledge-website.git
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Deploy to Vercel

### 2.1 Connect Vercel to GitHub
1. Go to [Vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your `neuraledge-website` repository
5. Vercel will auto-detect Next.js settings

### 2.2 Configure Vercel Settings
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 2.3 Deploy
1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at: `https://your-project-name.vercel.app`

## 🔗 Step 3: Connect GoDaddy Domain

### 3.1 Get Vercel Domain Information
After deployment, Vercel will show you the nameservers or DNS records needed.

### 3.2 Configure GoDaddy DNS
1. Log into your GoDaddy account
2. Go to "My Products" → "Domains"
3. Find `neuraledgeresearch.com` and click "Manage"
4. Click "DNS" tab

### 3.3 Option A: Use Vercel Nameservers (Recommended)
1. In GoDaddy DNS settings, change nameservers to:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
2. Save changes
3. In Vercel dashboard, add your domain: `neuraledgeresearch.com`

### 3.4 Option B: Use GoDaddy DNS with A Records
If you prefer to keep GoDaddy DNS:
1. In Vercel dashboard, add domain: `neuraledgeresearch.com`
2. Vercel will show you the required DNS records
3. In GoDaddy, add these records:
   ```
   Type: A
   Name: @
   Value: 76.76.19.34
   TTL: 600
   ```
4. Add CNAME for www:
   ```
   Type: CNAME
   Name: www
   Value: neuraledgeresearch.com
   TTL: 600
   ```

## 🔒 Step 4: SSL Certificate
Vercel automatically provides SSL certificates for your domain. No additional setup needed.

## 📧 Step 5: Email Configuration (Optional)
If you want email forwarding from GoDaddy:
1. In GoDaddy DNS, add email forwarding rules
2. Forward `info@neuraledgeresearch.com` to `craig@neuraledgeresearch.com`

## 🔄 Step 6: Continuous Deployment
Every time you push to GitHub main branch, Vercel will automatically redeploy your site.

### Update Your Site
```bash
# Make changes to your files
git add .
git commit -m "Update website content"
git push origin main
# Vercel will automatically deploy the changes
```

## 🛠️ Troubleshooting

### Domain Not Working
1. Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
2. Verify nameservers are correct
3. Wait up to 48 hours for full propagation

### Build Errors
1. Check Vercel build logs
2. Test locally: `npm run build`
3. Ensure all dependencies are in `package.json`

### SSL Issues
1. Vercel handles SSL automatically
2. If issues persist, contact Vercel support

## 📊 Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: Add to your site for visitor tracking
- **Search Console**: Submit your site to Google Search Console

## 🔧 Advanced Configuration

### Custom Domain with Subdomain
To add `www.neuraledgeresearch.com`:
1. In Vercel, add the subdomain
2. In GoDaddy DNS, add CNAME record:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Environment Variables
If you add environment variables later:
1. In Vercel dashboard → Project Settings → Environment Variables
2. Add any API keys or configuration

## 📞 Support
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **GoDaddy Support**: [godaddy.com/help](https://godaddy.com/help)
- **Your Contact**: craig@neuraledgeresearch.com

## ✅ Checklist
- [ ] Git repository created and pushed
- [ ] Vercel project deployed
- [ ] Domain connected to Vercel
- [ ] SSL certificate active
- [ ] Site loads correctly
- [ ] Contact form working
- [ ] Google Analytics added (optional)
- [ ] Search Console submitted (optional)

Your site will be live at: **https://neuraledgeresearch.com** 