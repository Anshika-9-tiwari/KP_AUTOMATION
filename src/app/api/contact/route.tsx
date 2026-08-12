import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations/ContactSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form details.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, phone, email, service, message } = result.data;

    const enquiry = await prisma.contactEnquiry.create({
      data: {
        name,
        phone,
        email,
        service,
        message,
        status: "NEW",
      },
    });

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error("SMTP configuration is missing.");

      return NextResponse.json(
        {
          success: true,
          message: "Your enquiry has been received successfully.",
          enquiryId: enquiry.id,
          emailSent: false,
        },
        { status: 201 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST.trim(),
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"KP Automation Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Enquiry - ${service} - ${name}`,

      text: `
        New enquiry received from KP Automation website.

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Service: ${service}

        Message:
        ${message}

        Enquiry ID: ${enquiry.id}
              `.trim(),

      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:0 auto;color:#111827">

          <div style="background:#FF3131;color:#fff;padding:24px;border-radius:8px 8px 0 0">
            <h2 style="margin:0">New Enquiry Received</h2>
            <p style="margin:8px 0 0">KP Automation Website</p>
          </div>

          <div style="padding:24px;border:1px solid #e5e7eb;border-top:0">

            <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse">
              <tr>
                <td style="font-weight:bold;width:130px">Name</td>
                <td>${escapeHtml(name)}</td>
              </tr>

              <tr>
                <td style="font-weight:bold">Phone</td>
                <td>${escapeHtml(phone)}</td>
              </tr>

              <tr>
                <td style="font-weight:bold">Email</td>
                <td>${escapeHtml(email)}</td>
              </tr>

              <tr>
                <td style="font-weight:bold">Service</td>
                <td>${escapeHtml(service)}</td>
              </tr>

              <tr>
                <td style="font-weight:bold">Enquiry ID</td>
                <td>${escapeHtml(enquiry.id)}</td>
              </tr>
            </table>

            <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb">

            <h3 style="margin-bottom:10px">Message</h3>

            <div style="padding:16px;background:#f8f9fb;border-radius:8px;color:#4b5563;line-height:1.7;white-space:pre-line">
              ${escapeHtml(message)}
            </div>

          </div>

          <div style="padding:15px;text-align:center;color:#6b7280;font-size:13px">
            Submitted from kpautomation.co.in
          </div>

        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
        enquiryId: enquiry.id,
        emailSent: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;") 
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}