require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5173',
  'https://munteksolutions.netlify.app',
];

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('CORS policy: This origin is not allowed'), false);
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
);

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const {
    name,
    firstName,
    lastName,
    email,
    phone = '',
    service = 'General inquiry',
    message,
  } = req.body;

  const displayName = name || [firstName, lastName].filter(Boolean).join(' ').trim();

  if (!displayName || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const safeService = service || 'General inquiry';
  const safeName = escapeHtml(displayName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  const mailOptions = {
    from: `"${displayName}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || 'munteksolutions@gmail.com',
    replyTo: email,
    subject: `New ${safeService} inquiry from ${displayName}`,
    text: [
      `Name: ${displayName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Service: ${safeService}`,
      '',
      message,
    ].filter(Boolean).join('\n'),
    html: `
      <h2>New website inquiry</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      ${phone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
      <p><strong>Service:</strong> ${escapeHtml(safeService)}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ message: 'Failed to send message. Please check server logs for details.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
