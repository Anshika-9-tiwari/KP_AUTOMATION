// src/app/api/contact/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';          // saved with Edge runtime
export const dynamic = 'force-dynamic';   //  saved with caching

const prisma = new PrismaClient();  

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.first_name || !body.last_name || !body.email_id || !body.phone_no || !body.course_name || !body.message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

   //insert db
    const saved = await prisma.user_info.create({ data: body });

    return NextResponse.json({ success: true, saved }, { status: 200 });
  } catch (err: any) {
    console.error('Contact API Error', err); 
    return NextResponse.json(
      { error: err.message || 'Internal error' },
      { status: 500 },
    );
  }
}
