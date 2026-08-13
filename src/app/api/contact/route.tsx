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

    const {
      name,
      phone,
      email,
      service,
      message,
    } = result.data;

    const enquiry = await prisma.contactEnquiry.create({
      data: {
        name,
        phone,
        email,
        service,
        message: message || "",
        status: "NEW",
      },
    });

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL?.trim();

    if (
      !smtpHost ||
      !smtpUser ||
      !smtpPassword ||
      !contactEmail
    ) {
      console.error("SMTP configuration is missing.");

      return NextResponse.json(
        {
          success: true,
          message:
            "Your enquiry has been received successfully.",
          enquiryId: enquiry.id,
          emailSent: false,
        },
        { status: 201 }
      );
    }

    const smtpPort =
      Number(process.env.SMTP_PORT) || 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: `"KP Automation Website" <${smtpUser}>`,
      to: contactEmail,
      replyTo: {
        name,
        address: email,
      },
      subject: `New Enquiry From - ${name}`,

      text: `
New enquiry received from KP Automation website.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Message:
${message || "No message provided."}

Enquiry ID: ${enquiry.id}
      `.trim(),

      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:0 auto;color:#111827">

          <div style="background:#ff3131;color:#fff;padding:24px;border-radius:8px 8px 0 0">
            <h2 style="margin:0">
              New Enquiry Received -  ${escapeHtml(service)}
            </h2>

            <p style="margin:5px 0 0;font-size:14px">
              KP Automation
            </p>
          </div>

          <div style="padding:24px;border:1px solid #e5e7eb;border-top:0">

            <table
              width="100%"
              cellpadding="8"
              cellspacing="0"
              style="border-collapse:collapse"
            >

              <tr>
                <td style="font-weight:bold;width:130px">
                  Name
                </td>
                <td>
                  ${escapeHtml(name)}
                </td>
              </tr>

              <tr>
                <td style="font-weight:bold">
                  Phone
                </td>
                <td>
                  ${escapeHtml(phone)}
                </td>
              </tr>

              <tr>
                <td style="font-weight:bold">
                  Email
                </td>
                <td>
                  ${escapeHtml(email)}
                </td>
              </tr>

              <tr>
                <td style="font-weight:bold">
                  Service
                </td>
                <td>
                  ${escapeHtml(service)}
                </td>
              </tr>

              <tr>
                <td style="font-weight:bold">
                  Enquiry ID
                </td>
                <td>
                  ${escapeHtml(enquiry.id)}
                </td>
              </tr>

            </table>

            <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb">

            <h3 style="margin-bottom:10px">
              Message
            </h3>

            <div style="padding:16px;background:#f8f9fb;border-radius:8px;color:#4b5563;line-height:1.7;white-space:pre-line">
              ${escapeHtml(message || "No message provided.")}
            </div>

          </div>

          <div style="padding:15px;text-align:center;color:#6b7280;font-size:13px">
            Submitted from kpautomation.co.in
          </div>

        </div>
      `,
    });

    await transporter.sendMail({
      from: `"KP Automation" <${smtpUser}>`,
      to: email,
      replyTo: contactEmail,
      subject: "Thank You for Contacting KP Automation",

      text: `
Dear ${name},

Thank you for contacting KP Automation.

We have successfully received your enquiry regarding:

Service: ${service}

Our team will review your requirement and get back to you shortly.

Your Enquiry ID: ${enquiry.id}

If you need to provide any additional information, simply reply to this email.

Best Regards,
KP Automation

Email: ${contactEmail}
Website: kpautomation.co.in
      `.trim(),

      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:0 auto;background:#f5f7fa;padding:20px;color:#111827">

          <div style="background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb">

            <div style="background:#ff3131;color:#ffffff;padding:28px;text-align:center">

              <h1 style="margin:0;font-size:26px">
                KP Automation
              </h1>

              <p style="margin:8px 0 0;font-size:15px">
                Industrial Automation Solutions
              </p>

            </div>

            <div style="padding:30px">

              <h2 style="margin-top:0;color:#111827">
                Thank You, ${escapeHtml(name)}!
              </h2>

              <p style="font-size:16px;line-height:1.7;color:#4b5563">
                Thank you for contacting KP Automation.
                We have successfully received your enquiry
                and appreciate your interest in our services.
              </p>

              <div style="margin:25px 0;padding:18px;background:#f8f9fb;border-radius:8px">

                <p style="margin:0 0 10px">
                  <strong>Requested Service:</strong>
                  ${escapeHtml(service)}
                </p>

                <p style="margin:0">
                  <strong>Enquiry ID:</strong>
                  ${escapeHtml(enquiry.id)}
                </p>

              </div>

              <p style="font-size:15px;line-height:1.7;color:#4b5563">
                Our team will review your requirement and
                get back to you shortly.
              </p>

              <div style="margin-top:30px;padding-top:20px;border-top:1px solid #e5e7eb">

                <p style="margin:0;font-weight:bold;color:#111827">
                  Best Regards,
                </p>

                <p style="margin:5px 0 0;color:#ff3131;font-weight:bold">
                  KP Automation
                </p>

                <p style="margin:8px 0 0;color:#6b7280;font-size:14px">
                  Industrial Automation & Smart Manufacturing Solutions
                </p>

                <p style="margin:5px 0 0;color:#6b7280;font-size:14px">
                  ${escapeHtml(contactEmail)}
                </p>

                <p style="margin:5px 0 0;color:#6b7280;font-size:14px">
                  kpautomation.co.in
                </p>

              </div>

            </div>

          </div>

          <div style="text-align:center;padding:15px;color:#9ca3af;font-size:12px">
            This is an automated confirmation email from KP Automation.
          </div>

        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been submitted successfully.",
        enquiryId: enquiry.id,
        emailSent: true,
        customerEmailSent: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to process your enquiry. Please try again later.",
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