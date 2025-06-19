// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- THIS IS YOUR "DATABASE". ENSURE YOUR FILE MATCHES THIS DATA ---
const products = [
    { 
        id: 1, name: 'ProBook X1', brand: 'HP', category: 'Laptop', condition: 'New', price: 1299, stock: 15,
        image: '/products/laptop-main.jpg',
        images: [
            { id: 1, src: '/products/laptop-main.jpg', alt: 'Side view of the ProBook X1.' },
        ],
        description: 'Experience unparalleled performance with the ProBook X1. Featuring a stunning 14" 2K display, 16GB of high-speed RAM, and a 512GB NVMe SSD for instant boot-ups. Perfect for professionals and creatives on the go.', 
        specs: [
            { name: 'Display', value: '14-inch (2560 x 1600) IPS Panel' },
            { name: 'Processor', value: 'Next-Gen 12-Core CPU' },
            { name: 'Memory', value: '16GB LPDDR5 RAM' },
            { name: 'Storage', value: '512GB NVMe SSD' }
        ]
    },
    { 
        id: 2, name: 'Galaxy S25 5G', brand: 'Samsung', category: 'Phone', condition: 'New', price: 999, stock: 25,
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
        id: 3, name: 'Samsung Galaxy A26 5G', brand: 'Samsung', category: 'Phone', condition: 'New', price: 749, stock: 10,
        image: '/products/Samsung-Galaxy-A26-5G-B.jpg',
        images: [ {id: 1, src: '/products/Samsung-Galaxy-A26-5G-B.jpg', alt: 'Front view of Galaxy A26.'} ],
        description: 'Sleek, lightweight, and powerful. This certified refurbished AirBook Lite is your perfect companion for everyday tasks.', 
        specs: [ { name: 'Display', value: '6.5-inch Dynamic AMOLED 2X' }, { name: 'RAM', value: '6GB' }, { name: 'Storage', value: '128GB Storage' } ]
    },
    { 
        id: 4, name: 'Pixel 9 Pro', brand: 'Google', category: 'Phone', condition: 'New', price: 899, stock: 0,
        image: '/products/phone-pixel.jpg',
        images: [],
        description: 'The smartest smartphone. With an industry-leading AI-powered camera and the purest Android experience.', 
        specs: [ { name: 'RAM', value: '12GB' }, { name: 'Storage', value: '128GB Internal' }, { name: 'Camera', value: '50MP Main, 12MP Ultrawide'} ]
    },
    { 
        id: 5, name: 'OfficeConnect Router', brand: 'Linksys', category: 'Networking', condition: 'New', price: 199, stock: 30,
        image: '/products/router.jpg',
        images: [],
        description: 'Blanket your home or office with blazing-fast, reliable Wi-Fi 6.', 
        specs: [ { name: 'Standard', value: 'Wi-Fi 6 (802.11ax)' }, { name: 'Speed', value: 'Up to 1.8 Gbps' } ]
    },
    { 
        id: 6, name: 'iPhone 15 Pro', brand: 'Apple', category: 'Phone', condition: 'Refurbished', price: 950, stock: 8,
        image: '/products/phone-iphone.jpg',
        images: [],
        description: 'The power of Pro, for less. This certified refurbished iPhone 15 Pro delivers incredible performance and camera quality.', 
        specs: [ { name: 'Display', value: '6.1-inch Super Retina XDR' }, { name: 'Chip', value: 'A17 Bionic' } ]
    }
];

// API routes
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
