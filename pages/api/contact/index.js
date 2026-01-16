import main from '../../../database/conn'
import nodemailer from 'nodemailer'
import ContactModel from '../../../models/Contact'

export default async function Contact(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    await main()

    const { fullname, email, phone, subject, message } = req.body

    if (!fullname || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Save to MongoDB
    await ContactModel.create({
      fullname,
      email,
      phone,
      subject,
      message,
      ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_TO,
        pass: process.env.MAIL_SECRET,
      },
    })

    await transporter.sendMail({
      from: `"S Tech Education" <${process.env.MAIL_TO}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `📩 New Course Inquiry – ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:16px;overflow:hidden;
          box-shadow:0 20px 50px rgba(0,0,0,0.1);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#111827,#1f2937);padding:28px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">
                S Tech Education
              </h1>
              <p style="margin-top:6px;color:#d1d5db;font-size:13px;">
                New Contact Inquiry
              </p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:32px;">
              <p style="font-size:15px;color:#374151;margin-bottom:20px;">
                You have received a new inquiry from the website contact form.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0"
                style="font-size:14px;color:#374151;">
                <tr>
                  <td style="padding:8px 0;font-weight:600;">Full Name</td>
                  <td style="padding:8px 0;">${fullname}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;">Email</td>
                  <td style="padding:8px 0;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;">Phone</td>
                  <td style="padding:8px 0;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;">Subject</td>
                  <td style="padding:8px 0;">${subject}</td>
                </tr>
              </table>

              <!-- MESSAGE BOX -->
              <div style="margin-top:24px;padding:20px;
                background:#f9fafb;border-radius:12px;
                border-left:5px solid #111827;">
                <p style="margin:0;font-size:14px;color:#111827;line-height:1.7;">
                  ${message}
                </p>
              </div>

              <p style="margin-top:28px;font-size:13px;color:#6b7280;">
                You can reply directly to this email to contact the sender.
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f9fafb;padding:18px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                © ${new Date().getFullYear()} S Tech Education · All Rights Reserved
              </p>
              <p style="margin-top:6px;font-size:12px;color:#9ca3af;">
                DevOps • AWS • Linux • Cloud Training
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Thank you! We will contact you shortly.',
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      error: 'Failed to send message',
    })
  }
}
