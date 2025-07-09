// ===== File: server/server.js (Updated) =====

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios'); // Added for M-Pesa integration
const moment = require('moment'); // Added for M-Pesa integration

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // This is necessary to parse JSON request bodies

// Keep your existing CORS configuration
const allowedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:5173',
    'https://munteksolutions.netlify.app'
];
  
app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
  })
);

// Keep your existing nodemailer transport
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // IMPORTANT: This must be a Google App Password, not your regular password
    }
});

// Keep your existing product data
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
        specs: [ { name: 'RAM', value: '12GB' }, { name: 'Storage', value: '256GB' }, { name: 'Main Camera', value: '50MP + 10MP + 12MP' }, { name: 'Display', value: '6.7 inches, Dynamic LTPO AMOLED 2X' } ]
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
        image: '/products/Apple-iPhone-16-1.jpg',
        images: [],
        description: 'The iPhone 16 is a leap forward in mobile technology. Equipped with the powerful A18 Bionic chip, it delivers incredibly smooth performance for everything you do. The advanced dual-camera system captures stunningly detailed photos, and the bright Super Retina XDR display makes your content look its best. With 128GB of storage, its the perfect all-arounder for your daily needs', 
        specs: [ { name: 'Display', value: '6.5-inch OLED display' }, { name: 'Storage', value: '128GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 9, name: 'Apple Iphone 16e', brand: 'Apple', category: 'Phone', condition: 'New', price: 75000, stock: 10,
        image: '/products/Apple-iPhone-16e.jpg',
        images: [],
        description: 'Get ready for the perfect blend of performance and value with the iPhone 16e. Its vibrant 6.1-inch display brings everything to life, powered by the efficient A18 chip. The impressive 48MP main camera ensures you never miss a moment, and with 128GB of storage, youll have plenty of room for your apps and photos. A fantastic choice for those seeking the latest features in a more accessible package', 
        specs: [ { name: 'Display', value: '6.1-inch Super Retina XDR display' }, { name: 'Storage', value: '128GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 10, name: 'Apple Iphone 16 Pro', brand: 'Apple', category: 'Phone', condition: 'New', price: 150000, stock: 10,
        image: '/products/Apple-iPhone-16-Pro.jpg',
        images: [],
        description: 'Experience the future with the iPhone 16 Pro. Featuring a stunningly bright display and the powerful A18 Bionic chip, this phone is a creative powerhouse. The advanced triple-camera system with a 48MP main sensor captures breathtaking photos and videos, while the 256GB of storage provides ample space for all your memories. Its durable titanium design and enhanced battery life make it the ultimate pro device.', 
        specs: [ { name: 'Display', value: '6.5-inch OLED display' }, { name: 'Storage', value: '256GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 11, name: 'Apple Iphone 15', brand: 'Apple', category: 'Phone', condition: 'New', price: 92000, stock: 10,
        image: '/products/iPhone-15.jpg',
        images: [],
        description: 'Capture your life in stunning detail with the iPhone 15. Its advanced 48MP Main camera with 2x Telephoto zoom lets you take incredible photos, while the A16 Bionic chip provides the power for a smooth and responsive experience. The innovative Dynamic Island keeps you informed, and with 128GB of storage, you can keep all your important files close at hand.', 
        specs: [ { name: 'Display', value: '6.5-inch OLED display' }, { name: 'Storage', value: '128GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 12, name: 'Apple Iphone 14 Pro', brand: 'Apple', category: 'Phone', condition: 'New', price: 66000, stock: 10,
        image: '/products/iPhone-14-Pro.jpg',
        images: [],
        description: 'Discover the power of Pro with the iPhone 14 Pro. Featuring the intelligent Dynamic Island, a brilliant 6.1-inch Super Retina XDR display, and the incredibly fast A16 Bionic chip. The 48MP Main camera delivers mind-blowing detail in every shot. With 128GB of storage, it’s the perfect companion for those who demand performance and portability.', 
        specs: [ { name: 'Display', value: '6.1-inch Super Retina XDR display' }, { name: 'Storage', value: '128GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 13, name: 'Apple Iphone 14 Pro Max', brand: 'Apple', category: 'Phone', condition: 'New', price: 95000, stock: 10,
        image: '/products/iPhone-14-Pro-Max.jpg',
        images: [],
        description: 'Go big with the iPhone 14 Pro Max. Its expansive 6.7-inch Super Retina XDR display with ProMotion technology offers an immersive viewing experience. The A16 Bionic chip ensures pro-level performance, and the groundbreaking 48MP Main camera captures astonishing detail. With 128GB of storage and all-day battery life, it’s the ultimate tool for power users.', 
        specs: [ { name: 'Display', value: '6.7-inch Super Retina XDR display' }, { name: 'Storage', value: '256GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 14, name: 'Apple Iphone 13 Pro', brand: 'Apple', category: 'Phone', condition: 'New', price: 66000, stock: 10,
        image: '/products/Apple-iPhone-13-Pro.jpg',
        images: [],
        description: 'A Pro camera system like no other. The iPhone 13 Pro features a stunning 6.1-inch Super Retina XDR display with ProMotion for a faster, more responsive feel. The A15 Bionic chip provides powerhouse performance, and the triple-camera system enables breathtaking photos and Cinematic mode for professional-quality videos. With a generous 256GB of storage, you can capture more of what you love', 
        specs: [ { name: 'Display', value: '6.1-inch Super Retina XDR display' }, { name: 'Storage', value: '256GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 15, name: 'Apple Iphone 12', brand: 'Apple', category: 'Phone', condition: 'New', price: 46000, stock: 10,
        image: '/products/Apple-iPhone-12.jpg',
        images: [],
        description: 'The iPhone 12 packs a punch with its bright and beautiful 6.1-inch Super Retina XDR display and the powerful A14 Bionic chip. The dual-camera system captures stunning photos and videos, even in low light. With a generous 256GB of storage, you’ll have plenty of space for all your memories and apps', 
        specs: [ { name: 'Display', value: '6.1-inch Super Retina XDR display' }, { name: 'Storage', value: '256GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 16, name: 'Apple Iphone 12 Pro', brand: 'Apple', category: 'Phone', condition: 'New', price: 50000, stock: 10,
        image: '/products/Apple-iPhone-12-Pro.jpg',
        images: [],
        description: 'Experience a new era of speed and creativity with the iPhone 12 Pro. Its 6.1-inch Super Retina XDR display brings your content to life, while the A14 Bionic chip, the fastest chip in a smartphone at its time, handles demanding tasks with ease. The Pro camera system with LiDAR scanner opens up new possibilities for photography and augmented reality', 
        specs: [ { name: 'Display', value: '6.1-inch Super Retina XDR display' }, { name: 'Storage', value: '128GB' }, { name: 'Battery', value: '5000mAh' } ]
    },
    { 
        id: 17, name: 'Samsung S24 Ultra', brand: 'Samsung', category: 'Phone', condition: 'New', price: 107000, stock: 10,
        image: '/products/Samsung-Galaxy-S24-Ultra.jpg',
        images: [],
        description: 'Unleash your creativity with the Samsung S24 Ultra. Its stunning 6.8-inch Dynamic AMOLED 2X display with an embedded S Pen provides a canvas for your ideas. The revolutionary 200MP camera system captures epic photos in any light, and the powerful Snapdragon® 8 Gen 3 for Galaxy processor delivers unparalleled performance. With a massive 5000mAh battery and 256GB of storage, it’s the ultimate device for work and play.', 
        specs: [ { name: 'Display', value: '6.8-inch Dynamic AMOLED 2X display' }, { name: 'Storage', value: '256GB' }, { name: 'Battery', value: '5000mAh' } ]
    }
];

// --- NEW M-PESA INTEGRATION ---

/**
 * Middleware to get M-Pesa access token.
 */
const getMpesaAccessToken = async (req, res, next) => {
    const consumerKey = process.env.MPESA_CONSUMER_KEY;
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
    
    if (!consumerKey || !consumerSecret) {
        console.error('M-Pesa consumer key or secret is not defined in .env file.');
        return res.status(500).json({ message: 'M-Pesa credentials not configured on the server.' });
    }

    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const auth = 'Basic ' + Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');

    try {
        const response = await axios.get(url, {
            headers: { Authorization: auth },
        });
        req.mpesa_access_token = response.data.access_token;
        next();
    } catch (error) {
        console.error('Failed to get M-Pesa access token:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Failed to authenticate with M-Pesa service.' });
    }
};

/**
 * Route to handle the STK Push request.
 */
app.post('/api/stkpush', getMpesaAccessToken, async (req, res) => {
    const accessToken = req.mpesa_access_token;
    const { amount, phone } = req.body;

    if (!phone) {
        return res.status(400).json({ message: 'Phone number is required for payment.' });
    }
    let formattedPhone = phone.replace(/\s/g, '');
    if (formattedPhone.startsWith('+')) {
        formattedPhone = formattedPhone.substring(1);
    }
    if (formattedPhone.startsWith('0')) {
        formattedPhone = '254' + formattedPhone.substring(1);
    }
    if (!/^254(7\d{8}|1\d{8})$/.test(formattedPhone)) {
        return res.status(400).json({ message: 'Invalid Kenyan phone number format. Please use a valid Safaricom number (e.g., 0712345678 or 0112345678).' });
    }
    
    const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    const timestamp = moment().format('YYYYMMDDHHmmss');
    const shortcode = process.env.MPESA_BUSINESS_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;
    const callbackUrl = process.env.MPESA_CALLBACK_URL;

    if (!shortcode || !passkey || !callbackUrl) {
        console.error('M-Pesa business shortcode, passkey, or callback URL is not defined in .env file.');
        return res.status(500).json({ message: 'M-Pesa payment service is not fully configured on the server.' });
    }

    const password = Buffer.from(shortcode + passkey + timestamp).toString('base64');

    const payload = {
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: formattedPhone,
        PartyB: shortcode,
        PhoneNumber: formattedPhone,
        CallBackURL: callbackUrl,
        AccountReference: 'BingwaTech',
        TransactionDesc: 'Payment for goods from Bingwa Tech Shop',
    };

    try {
        const response = await axios.post(url, payload, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error('STK Push Error:', error.response ? error.response.data : error.message);
        res.status(500).json({
            message: 'An error occurred while trying to initiate the M-Pesa payment.',
            error: error.response ? error.response.data : { message: error.message },
        });
    }
});

/**
 * Route to receive the callback from the M-Pesa API.
 */
app.post('/api/stk_callback', (req, res) => {
    console.log('----------- M-PESA STK Callback Received -----------');
    console.log(JSON.stringify(req.body, null, 2));
    
    const result = req.body.Body.stkCallback;
    const resultCode = result.ResultCode;

    if (resultCode === 0) {
        console.log('Payment successful!');
        const metadata = result.CallbackMetadata.Item;
        const mpesaReceiptNumber = metadata.find(item => item.Name === 'MpesaReceiptNumber').Value;
        const amount = metadata.find(item => item.Name === 'Amount').Value;
        const phoneNumber = metadata.find(item => item.Name === 'PhoneNumber').Value;
        console.log(`Receipt: ${mpesaReceiptNumber}, Amount: ${amount}, Phone: ${phoneNumber}`);
    } else {
        console.log('Payment failed or was cancelled by user:', result.ResultDesc);
    }

    res.status(200).json({ message: 'Callback received successfully' });
});


// --- EXISTING ROUTES ---

// Keep your existing contact form route
app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    const mailOptions = {
        from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || 'munteksolutions@gmail.com',
        replyTo: email,
        subject: 'New Contact Form Submission',
        text: message,
        html: `<p>${message}</p><p>From: ${firstName} ${lastName} (${email})</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ message: 'Failed to send message. Please check server logs for details.' });
    }
});

// Keep your existing product routes
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
