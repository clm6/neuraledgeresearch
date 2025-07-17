import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically send an email
    // For now, we'll just log the contact form data
    console.log('Contact Form Submission:', {
      name,
      email,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // You can integrate with services like:
    // - EmailJS
    // - SendGrid
    // - Nodemailer
    // - Vercel's built-in email service

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 