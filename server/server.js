// server/server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;


// Enable CORS with more permissive settings
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      'https://munteksolutions.netlify.app',
      'http://localhost:5173',
      'https://one-stop-tech-shop.onrender.com',
      'http://localhost:3000',
      'http://localhost:5000'
    ];

    // Allow all subdomains of netlify.app and onrender.com
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith('.netlify.app') ||
      origin.endsWith('.onrender.com')
    ) {
      console.log('Allowed origin:', origin);
      return callback(null, true);
    }

    console.warn('Blocked by CORS:', origin);
    return callback(new Error(`Not allowed by CORS: ${origin}`), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// Enable CORS pre-flight
app.options('*', cors(corsOptions));

// Apply CORS to all routes
app.use(cors(corsOptions));

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`, {
    origin: req.headers.origin,
    'user-agent': req.headers['user-agent']
  });
  next();
});

// Configure nodemailer transport using environment variables
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


const products = [
    { 
        id: 1, name: 'Samsung Galaxy A36', brand: 'Samsung', category: 'Phone', condition: 'Refurbished', price: 36500, stock: 15,
        image: '/products/Samsung-Galaxy-A36-5G.jpg',
        images: [
            { id: 1, src: '/products/Samsung-Galaxy-A36-5G.jpg', alt: 'Front view of Galaxy A36.' },
        ],
        description: 'Experience unparalleled performance with the Samsung Galaxy A36. Featuring a stunning 6.4" Dynamic AMOLED 2X display, 6GB of high-speed RAM, and a 128GB storage for instant boot-ups. Perfect for professionals and creatives on the go.', 
        specs: [
            { name: 'Display', value: '6.4-inch Dynamic AMOLED 2X' },
            { name: 'Processor', value: 'Snapdragon 8 Gen 2' },
            { name: 'RAM', value: '6GB' },
            { name: 'Storage', value: '128GB' }
        ]
    },
    { 
        id: 2, name: 'Galaxy S25 5G', brand: 'Samsung', category: 'Phone', condition: 'New', price: 96000, stock: 25,
        image: '/products/Samsung-Galaxy-S25-Ultra.jpg',
        images: [
            { id: 1, src: '/products/Samsung-Galaxy-S25-Ultra.jpg', alt: 'Front view of Galaxy S25.'},
        ],
        description: 'The future of mobile is here. The Galaxy S25 comes with a pro-grade camera system, a dynamic 120Hz display, and all-day battery life. Unlocked, 256GB storage.', 
        specs: [
            { name: 'RAM', value: '12GB' }, { name: 'Storage', value: '256GB' }, { name: 'Main Camera', value: '50MP + 10MP + 12MP' }, { name: 'Display', value: '6.7 inches, Dynamic LTPO AMOLED 2X' }
        ]
    },
    { 
        id: 3, name: 'Samsung Galaxy A26 5G', brand: 'Samsung', category: 'Phone', condition: 'New', price: 30500, stock: 10,
        image: '/products/Samsung-Galaxy-A26-5G-B.jpg',
        images: [ {id: 1, src: '/products/Samsung-Galaxy-A26-5G-B.jpg', alt: 'Front view of Galaxy A26.'} ],
        description: 'Sleek, lightweight, and powerful. This certified refurbished Galaxy A26 is your perfect companion for everyday tasks.', 
        specs: [ { name: 'Display', value: '6.5-inch Dynamic AMOLED 2X' }, { name: 'RAM', value: '6GB' }, { name: 'Storage', value: '128GB Storage' } ]
    },
    { 
        id: 4, name: 'Samsung Galaxy A56', brand: 'Samsung', category: 'Phone', condition: 'New', price: 48000, stock: 22,
        image: '/products/Samsung-Galaxy-A56-5G.jpg',
        images: [],
        description: 'Experience the power of the Galaxy A56. Enjoy pro-grade photography, a smooth 120Hz display, and premium design.', 
        specs: [ { name: 'Display', value: '6.5-inch Super AMOLED, 120Hz' }, { name: 'RAM', value: '8GB' }, { name: 'Main Camera', value: '64MP OIS'}, { name: 'Storage', value: '256GB' } ]
    },
    { 
        id: 5, name: 'Samsung Galaxy M56', brand: 'Samsung', category: 'Phone', condition: 'New', price: 40500, stock: 18,
        image: '/products/Samsung-Galaxy-M56.jpg',
        images: [],
        description: 'Power through your day and then some. The Galaxy M56 is a monster of a phone with a massive battery and an efficient processor.', 
        specs: [ { name: 'Battery', value: '6000mAh' }, { name: 'Display', value: '6.7-inch PLS LCD' }, { name: 'Processor', value: 'Dimensity 700-series' } ]
    },
    { 
        id: 6, name: 'Samsung Galaxy F16 5G', brand: 'Samsung', category: 'Phone', condition: 'Refurbished', price: 19500, stock: 40,
        image: '/products/Samsung-Galaxy-F16-5G-c-1.jpg',
        images: [],
        description: 'All the essentials you need in a stylish package. This certified refurbished Galaxy F16 offers reliable performance for everyday use.', 
        specs: [ { name: 'Display', value: '6.6-inch PLS LCD' }, { name: 'Battery', value: '5000mAh' }, { name: 'Main Camera', value: '48MP' } ]
    },
    { 
        id: 7, name: 'Samsung Galaxy M16', brand: 'Samsung', category: 'Phone', condition: 'Refurbished', price: 20000, stock: 55,
        image: '/products/Samsung-Galaxy-M16-5G-1.jpg',
        images: [],
        description: 'Your first step into the Galaxy ecosystem. The M16 provides a long-lasting battery and a large screen for entertainment on a budget.', 
        specs: [ { name: 'Display', value: '6.5-inch HD+ LCD' }, { name: 'Storage', value: '64GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 8, name: 'Apple Iphone 16', brand: 'Apple', category: 'Phone', condition: 'New', price: 125000, stock: 6,
        image: '/products/Apple-iphone-16-1.jpg',
        images: [],
        description: 'Your first step into the Galaxy ecosystem. The Iphone 16 provides a long-lasting battery and a large screen for entertainment on a budget.', 
        specs: [ { name: 'Display', value: '6.5-inch OLED display' }, { name: 'Storage', value: '256GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 9, name: 'Apple Iphone 16e', brand: 'Apple', category: 'Phone', condition: 'New', price: 75000, stock: 10,
        image: '/products/Apple-iphone-16e.jpg',
        images: [],
        description: 'Your first step into the Galaxy ecosystem. The Iphone 16e provides a long-lasting battery and a large screen for entertainment on a budget.', 
        specs: [ { name: 'Display', value: '6.5-inch OLED display' }, { name: 'Storage', value: '256GB' }, { name: 'Battery', value: '5000mAh' } ]
    }
];


app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    const mailOptions = {
        from: `"${firstName} ${lastName}" <${email}>`,
        to: process.env.EMAIL_TO || 'munteksolutions@gmail.com',
        subject: 'New Contact Form Submission',
        text: message,
        html: `<p>${message}</p><p>From: ${firstName} ${lastName} (${email})</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ message: 'Failed to send message' });
    }
});


app.post('/api/mpesa/checkout', async (req, res) => {
    const { phone, amount } = req.body;
    if (!phone || !amount) return res.status(400).json({ message: 'Phone and amount are required.' });

    const {
        MPESA_ENV = 'sandbox',
        MPESA_CONSUMER_KEY,
        MPESA_CONSUMER_SECRET,
        MPESA_SHORTCODE,
        MPESA_PASSKEY,
        MPESA_CALLBACK_URL = 'https://mycallback.example.com/mpesa'
    } = process.env;

    if (!MPESA_CONSUMER_KEY || !MPESA_CONSUMER_SECRET || !MPESA_SHORTCODE || !MPESA_PASSKEY) {
        return res.status(500).json({ message: 'Mpesa credentials not configured.' });
    }

    const baseUrl = MPESA_ENV === 'production' ? 'https://api.safaricom.co.ke' : 'https://sandbox.safaricom.co.ke';

    try {
        // 1. Get OAuth token
        const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
        const tokenResp = await fetch(`${baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
            headers: { Authorization: `Basic ${auth}` }
        });
        if (!tokenResp.ok) throw new Error('Failed to obtain Mpesa token');
        const { access_token } = await tokenResp.json();

        // 2. Prepare STK push data
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
        const password = Buffer.from(`${MPESA_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString('base64');
        const payload = {
            BusinessShortCode: MPESA_SHORTCODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: phone.startsWith('254') ? phone : phone.replace(/^0/, '254'),
            PartyB: MPESA_SHORTCODE,
            PhoneNumber: phone.startsWith('254') ? phone : phone.replace(/^0/, '254'),
            CallBackURL: MPESA_CALLBACK_URL,
            AccountReference: 'OneStopTech',
            TransactionDesc: 'Purchase at OneStopTech'
        };

        const stkResp = await fetch(`${baseUrl}/mpesa/stkpush/v1/processrequest`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const stkData = await stkResp.json();
        if (stkResp.ok && stkData.ResponseCode === '0') {
            return res.status(200).json({ message: 'STK push initiated', data: stkData });
        }
        console.error('STK error', stkData);
        return res.status(500).json({ message: 'Failed to initiate STK push', data: stkData });
    } catch (err) {
        console.error('Mpesa error:', err);
        return res.status(500).json({ message: 'Mpesa error', error: err.message });
    }
});

// Existing API routes
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
