# Quick Start Guide - NeuralEdge Research Website

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. View Your Site
Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customize Your Content

### Update Contact Information
Edit `app/page.tsx` and change:
- Email: `craig@neuraledgeresearch.com`
- Phone: Add your phone number
- Address: Add your business address

### Update Services
In `app/page.tsx`, modify the `services` array to match your offerings.

### Update Meta Data
In `app/layout.tsx`, update:
- Title and description
- Keywords
- Open Graph tags

## 🎨 Customize Design

### Colors
Edit `tailwind.config.js` to change the color scheme:
- Primary colors (blue)
- Secondary colors (gray)
- Accent colors (purple)

### Fonts
Change the font in `app/layout.tsx` by importing a different Google Font.

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build: `npm run build`
2. Upload `out` directory to Netlify

### Option 3: Static Hosting
1. Build: `npm run build`
2. Upload files to your hosting provider

## 📧 Contact Form Setup

The contact form is currently a static form. To make it functional:

1. **EmailJS** (Easy):
   - Sign up at emailjs.com
   - Add your service ID to the form

2. **Netlify Forms** (Free):
   - Add `netlify` attribute to form
   - Deploy to Netlify

3. **Custom Backend**:
   - Create API route in Next.js
   - Handle form submission

## 🔧 Common Issues

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
npm run build
```
Check the console for specific error messages.

### Styling Issues
Make sure Tailwind CSS is properly configured in `tailwind.config.js`.

## 📞 Support

Need help? Contact: craig@neuraledgeresearch.com 