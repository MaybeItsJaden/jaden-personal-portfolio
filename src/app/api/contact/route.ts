import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate input fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create email content
    const emailContent = {
      to: 'jadendeve@gmail.com',
      from: 'jadendeve@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email using SendGrid
    await sgMail.send(emailContent);

    return NextResponse.json({ success: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error.response?.body || error.message);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
