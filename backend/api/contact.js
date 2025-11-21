import nodemailer from 'nodemailer';

const createTransport = () => nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT || 587),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

export default async function handler(req, res) {
  const rawFrontend = process.env.FRONTEND_URL || '';
  const configuredFrontend = rawFrontend ? rawFrontend.replace(/\/$/, '') : null;
  const requestOrigin = req.headers.origin;
  let allowOrigin = '*';
  if (configuredFrontend) {
    if (requestOrigin && requestOrigin.replace(/\/$/, '') === configuredFrontend) {
      allowOrigin = requestOrigin;
    } else {
      allowOrigin = configuredFrontend;
    }
  } else if (requestOrigin) {
    allowOrigin = requestOrigin;
  }

  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required' });
    }

    const transporter = createTransport();
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
}
