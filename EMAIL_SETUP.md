# Email Setup Guide - Contact Form

The contact form is currently showing an error. Here's how to fix it by setting up EmailJS for email functionality.

## 🚀 Quick Fix: EmailJS Setup

### Step 1: Sign Up for EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Verify your email

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook"
4. Connect your email account
5. Note your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Submission - NeuralEdge Research

Name: {{name}}
Email: {{email}}
Service: {{service}}
Message: {{message}}

This is a new contact form submission from your website.
```

4. Note your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_abc123`)

### Step 5: Update the Contact Form

Replace the current form submission with EmailJS:

```javascript
// Add this to your page.tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitMessage('')

  const formData = new FormData(e.currentTarget)
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message')
  }

  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your service ID
      'YOUR_TEMPLATE_ID', // Replace with your template ID
      data,
      'YOUR_PUBLIC_KEY' // Replace with your public key
    )

    if (result.status === 200) {
      setSubmitMessage('Thank you for your message! We will get back to you soon.')
      e.currentTarget.reset()
    } else {
      setSubmitMessage('There was an error sending your message. Please try again.')
    }
  } catch (error) {
    console.error('Email error:', error)
    setSubmitMessage('There was an error sending your message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Step 6: Install EmailJS
```bash
npm install @emailjs/browser
```

## 🔧 Alternative: Simple Email Forwarding

If you prefer a simpler solution:

### Option 1: Netlify Forms (Free)
1. Add `netlify` attribute to your form
2. Deploy to Netlify
3. Forms are automatically handled

### Option 2: Vercel Forms
1. Use Vercel's built-in form handling
2. Add environment variables for email service

## 📧 Current Status

The contact form currently:
- ✅ Validates input fields
- ✅ Shows proper error messages
- ✅ Logs submissions to console
- ⚠️ Needs email service integration

## 🚀 Quick Test

To test the current form:
1. Fill out the form
2. Check browser console for logged data
3. The form will show success message (but no email sent yet)

## 📞 Support

- **EmailJS Support**: [emailjs.com/support](https://www.emailjs.com/support)
- **Your Contact**: craig@neuraledgeresearch.com

## ✅ Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template created
- [ ] API keys obtained
- [ ] Code updated with EmailJS
- [ ] Form tested successfully

Once EmailJS is set up, your contact form will send real emails to craig@neuraledgeresearch.com! 