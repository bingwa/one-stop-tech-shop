// server/server.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

const products = [
    { id: 1, name: 'ProBook X1', category: 'Laptop', description: 'Experience unparalleled performance with the ProBook X1...', price: 1299, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop', images: [{id: 1, src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop'}], specs: [{name: 'Display', value: '14-inch'}] },
    { id: 2, name: 'Galaxy S25', category: 'Phone', description: 'The future of mobile is here...', price: 999, image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1965&auto=format&fit=crop', images: [{id: 1, src: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1965&auto=format&fit=crop'}], specs: [{name: 'Display', value: '6.7-inch'}] },
    { id: 3, name: 'AirBook Lite', category: 'Laptop', description: 'Sleek, lightweight, and powerful...', price: 949, image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=2070&auto=format&fit=crop', images: [], specs: [] },
    { id: 4, name: 'Pixel 9 Pro', category: 'Phone', description: 'The smartest smartphone...', price: 899, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbf1?q=80&w=1974&auto=format&fit=crop', images: [], specs: [] },
    { id: 5, name: 'OfficeConnect Router', category: 'Networking', description: 'Blazing-fast, reliable Wi-Fi 6.', price: 199, image: 'https://images.unsplash.com/photo-1587584180293-83a3d55106c5?q=80&w=2070&auto=format&fit=crop', images: [], specs: [] },
    { id: 6, name: 'Gaming Beast', category: 'Laptop', description: 'Dominate the competition with a desktop-class RTX 4080.', price: 2499, image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop', images: [], specs: [] }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

// **THIS IS THE ROUTE THAT NEEDS TO BE ON THE LIVE SERVER**
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
