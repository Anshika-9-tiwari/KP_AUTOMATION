// src/app/api/contact/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

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
      message
    } = body;

    if (!first_name || !last_name || !email_id || !phone_no || !course_name || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create record in DB
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
