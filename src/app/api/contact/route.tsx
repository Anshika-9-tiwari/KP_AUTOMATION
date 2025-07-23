// src/app/api/contact/route.ts

import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      first_name,
      last_name,
      email_id,
      phone_no,
      course_name,
      message
    } = body;

    if (!first_name || !last_name || !email_id || !phone_no || !course_name || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. Save in DB
    const saved = await prisma.user_info.create({
      data: {
        first_name,
        last_name,
        email_id,
        phone_no,
        course_name,
        message,
      },
    });

    // 2. Send email
    await resend.emails.send({
      from: 'KP Automation <info@kpautomation.co.in>', 
      to: process.env.NOTIFY_EMAIL!,
      subject:  `New Contact Form Submission: ${first_name} ${last_name}`,
      html: `
        <h2>New User Request</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email_id}</p>
        <p><strong>Phone:</strong> ${phone_no}</p>
        <p><strong>Course:</strong> ${course_name}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // 3. Return success response
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email_id, // user email from form
      subject: 'Thank you for contacting KP Automation',
      html: `
        <p>Dear ${first_name},</p>
        <p>Thank you for contacting KP Automation. We have received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>Team KP Automation</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, saved }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
