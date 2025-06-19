// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// This array is your "database", with prices updated to KSh.
const products = [
    { 
        id: 1, name: 'Samsung Galaxy A36', brand: 'Samsung', category: 'Phone', condition: 'Refurbished', price: 169000, stock: 15,
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
        id: 2, name: 'Galaxy S25 5G', brand: 'Samsung', category: 'Phone', condition: 'New', price: 130000, stock: 25,
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
        id: 3, name: 'Samsung Galaxy A26 5G', brand: 'Samsung', category: 'Phone', condition: 'New', price: 97500, stock: 10,
        image: '/products/Samsung-Galaxy-A26-5G-B.jpg',
        images: [ {id: 1, src: '/products/Samsung-Galaxy-A26-5G-B.jpg', alt: 'Front view of Galaxy A26.'} ],
        description: 'Sleek, lightweight, and powerful. This certified refurbished AirBook Lite is your perfect companion for everyday tasks.', 
        specs: [ { name: 'Display', value: '6.5-inch Dynamic AMOLED 2X' }, { name: 'RAM', value: '6GB' }, { name: 'Storage', value: '128GB Storage' } ]
    },
    { 
        id: 4, name: 'Samsung Galaxy A56', brand: 'Samsung', category: 'Phone', condition: 'New', price: 80000, stock: 22,
        image: '/products/Samsung-Galaxy-A56-5G.jpg',
        images: [],
        description: 'Experience the power of the Galaxy A56. Enjoy pro-grade photography, a smooth 120Hz display, and premium design.', 
        specs: [ { name: 'Display', value: '6.5-inch Super AMOLED, 120Hz' }, { name: 'RAM', value: '8GB' }, { name: 'Main Camera', value: '64MP OIS'}, { name: 'Storage', value: '256GB' } ]
    },
    { 
        id: 5, name: 'Samsung Galaxy M56', brand: 'Samsung', category: 'Phone', condition: 'New', price: 71500, stock: 18,
        image: '/products/Samsung-Galaxy-M56.jpg',
        images: [],
        description: 'Power through your day and then some. The Galaxy M56 is a monster of a phone with a massive battery and an efficient processor.', 
        specs: [ { name: 'Battery', value: '6000mAh' }, { name: 'Display', value: '6.7-inch PLS LCD' }, { name: 'Processor', value: 'Dimensity 700-series' } ]
    },
    { 
        id: 6, name: 'Samsung Galaxy F16 5G', brand: 'Samsung', category: 'Phone', condition: 'Refurbished', price: 32500, stock: 40,
        image: '/products/Samsung-Galaxy-F16-5G-c-1.jpg',
        images: [],
        description: 'All the essentials you need in a stylish package. This certified refurbished Galaxy F16 offers reliable performance for everyday use.', 
        specs: [ { name: 'Display', value: '6.6-inch PLS LCD' }, { name: 'Battery', value: '5000mAh' }, { name: 'Main Camera', value: '48MP' } ]
    },
    { 
        id: 7, name: 'Samsung Galaxy M16', brand: 'Samsung', category: 'Phone', condition: 'Refurbished', price: 25900, stock: 55,
        image: '/products/Samsung-Galaxy-M16-5G-1.jpg',
        images: [],
        description: 'Your first step into the Galaxy ecosystem. The M16 provides a long-lasting battery and a large screen for entertainment on a budget.', 
        specs: [ { name: 'Display', value: '6.5-inch HD+ LCD' }, { name: 'Storage', value: '64GB' }, { name: 'Battery', value: '5000mAh' } ]
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
