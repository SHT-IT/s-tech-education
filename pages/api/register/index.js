import main from '../../../database/conn'
import nodemailer from 'nodemailer'
import CourseRegistration from '../../../models/Registration'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    await main()

    const body = req.body

    // 1️⃣ Save to database
    await CourseRegistration.create(body)

    // 2️⃣ Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_TO,
        pass: process.env.MAIL_SECRET,
      },
    })

    // ================= ADMIN EMAIL =================
    await transporter.sendMail({
      from: `"Course Registration" <${process.env.MAIL_TO}>`,
      to: process.env.MAIL_TO,
      subject: 'New Course Registration Received',
      html: `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f8;padding:20px">
    <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden">

      <div style="background:#2563eb;color:#ffffff;padding:20px;text-align:center">
        <h2 style="margin:0">New Course Registration</h2>
        <p style="margin:4px 0 0;font-size:14px">S Tech Education</p>
      </div>

      <div style="padding:20px">
        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px">
          <tr style="background:#f9fafb">
            <td width="35%"><b>First Name</b></td>
            <td>${body.firstName}</td>
          </tr>
          <tr>
            <td><b>Last Name</b></td>
            <td>${body.lastName}</td>
          </tr>
          <tr style="background:#f9fafb">
            <td><b>Email</b></td>
            <td>${body.email}</td>
          </tr>
          <tr>
            <td><b>Mobile</b></td>
            <td>${body.mobile}</td>
          </tr>
          <tr style="background:#f9fafb">
            <td><b>City</b></td>
            <td>${body.city}</td>
          </tr>
          <tr>
            <td><b>Pincode</b></td>
            <td>${body.pincode}</td>
          </tr>
          <tr style="background:#f9fafb">
            <td><b>Address</b></td>
            <td>${body.address}</td>
          </tr>
          <tr>
            <td><b>Education</b></td>
            <td>${body.education}</td>
          </tr>
          <tr style="background:#f9fafb">
            <td><b>Course Selected</b></td>
            <td><b>${body.course}</b></td>
          </tr>
        </table>
      </div>

      <div style="background:#f1f5f9;padding:12px;text-align:center;font-size:13px;color:#555">
        Received on ${new Date().toLocaleString()}
      </div>

    </div>
  </div>
  `,
    })


    // ================= USER EMAIL =================
    await transporter.sendMail({
      from: `"S Tech Education" <${process.env.MAIL_TO}>`,
      to: body.email,
      subject: 'Course Registration Successful',
      html: `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f8;padding:20px">
    <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:12px;overflow:hidden">

      <div style="background:#16a34a;color:#ffffff;padding:20px;text-align:center">
        <h2 style="margin:0">Registration Successful 🎉</h2>
      </div>

      <div style="padding:20px;font-size:15px;color:#333">
        <p>Dear <b>${body.firstName} ${body.lastName}</b>,</p>

        <p>
          Thank you for registering for the
          <b>${body.course}</b> at <b>S Tech Education</b>.
        </p>

        <div style="background:#f9fafb;border-left:4px solid #2563eb;padding:15px;margin:20px 0">
          <p style="margin:4px 0"><b>Email:</b> ${body.email}</p>
          <p style="margin:4px 0"><b>Mobile:</b> ${body.mobile}</p>
          <p style="margin:4px 0"><b>Course:</b> ${body.course}</p>
        </div>

        <p>
          Our team will contact you shortly with
          batch timings and next steps.
        </p>

        <p style="margin-top:30px">
          Regards,<br />
          <b>S Tech Education Team</b>
        </p>
      </div>

      <div style="background:#f1f5f9;padding:12px;text-align:center;font-size:13px;color:#555">
        © ${new Date().getFullYear()} S Tech Education. All rights reserved.
      </div>

    </div>
  </div>
  `,
    })


    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ success: false })
  }
}
