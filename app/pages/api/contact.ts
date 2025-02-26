import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, subject, message } = req.body;

  if (!name || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "your-email@example.com", // Replace with your email
      subject: subject,
      text: message,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
