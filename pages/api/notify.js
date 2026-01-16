// /pages/api/notify/notify.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { user, product } = req.body;

  if (!user || !product) {
    return res.status(400).json({ message: "Missing user or product info" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_TO, // "anubhav.sharma@apneehatti.com"
        pass: process.env.MAIL_SECRET, // App password
      },
    });

    await transporter.sendMail({
      from: `"Apneehatti" <${process.env.MAIL_TO}>`,
      to: "anubhav.sharma@apneehatti.com",
      subject: "Out of Stock Product Requested",
      html: `
        <h3>Product Notification Request</h3>
        <p><strong>User:</strong> ${user.name} (${user.email})</p>
        <p><strong>Product:</strong> ${product.title}</p>
        <p><strong>Product ID:</strong> ${product.id}</p>
        <p><strong>Requested at:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return res.status(200).json({ message: "Notification sent" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ message: "Email could not be sent" });
  }
}
