import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const {
      name,
      phone,
      email,
      service,
      message,
    } = result.data;

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error("SMTP configuration is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"KP Automation Website Lead" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Enquiry From— ${name}`,

      text: `
        New enquiry received from KP Automation website.

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Service: ${service}

        Message:
        ${message}
      `,

      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto">

          <div style="
            background:#FF3131;
            color:#ffffff;
            padding:24px;
            border-radius:8px 8px 0 0;
          ">
            <h2 style="margin:0">
              New Enquiry Received for - ${service} 
            </h2>

            <p style="margin:8px 0 0">
              KP Automation
            </p>
          </div>

          <div style="
            padding:24px;
            border:1px solid #e5e7eb;
          ">

            <table
              width="100%"
              cellpadding="8"
              cellspacing="0"
              style="border-collapse:collapse"
            >
              <tr>
                <td><strong>Name</strong></td>
                <td>${name}</td>
              </tr>

              <tr>
                <td><strong>Phone</strong></td>
                <td>${phone}</td>
              </tr>

              <tr>
                <td><strong>Email</strong></td>
                <td>${email}</td>
              </tr>

              <tr>
                <td><strong>Service</strong></td>
                <td>${service}</td>
              </tr>
            </table>

            <hr style="
              margin:24px 0;
              border:none;
              border-top:1px solid #e5e7eb;
            " />

            <h3>Message</h3>

            <p style="
              color:#4b5563;
              line-height:1.7;
              white-space:pre-line;
            ">
              ${message}
            </p>

          </div>

          <div style="
            padding:15px;
            text-align:center;
            color:#6b7280;
            font-size:13px;
          ">
            Submitted from kpautomation.co.in
          </div>

        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}