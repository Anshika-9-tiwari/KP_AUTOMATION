// src/app/api/contact/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      first_name,
      last_name,
      email_id,
      phone_no,
      course_name,
      message,
    } = body;

    if (!first_name || !last_name || !email_id || !phone_no || !course_name || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1️⃣ Store data in the database
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

    // 2️⃣ Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"KP Automation" <${process.env.MAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Contact Form Submission: ${first_name} ${last_name}`,
      html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Full Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email_id}</p>
        <p><strong>Phone:</strong> ${phone_no}</p>
        <p><strong>Course:</strong> ${course_name}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, saved }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('❌ API ERROR:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
