// server/server.js

// 1. Import Dependencies
const express = require('express');
const cors = require('cors');

// 2. Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// 3. Middleware Setup
// Enable Cross-Origin Resource Sharing so our React app can talk to the server
app.use(cors()); 
// Enable the server to understand JSON data
app.use(express.json()); 

// 4. Mock Data (This will be replaced by a database later)
const products = [
    { id: 1, name: 'ProBook X1', category: 'Laptop', description: '16GB RAM, 512GB SSD, 14" Display', price: 1299, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop' },
    { id: 2, name: 'Galaxy S25', category: 'Phone', description: '256GB Storage, Pro Camera System', price: 999, image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1965&auto=format&fit=crop' },
    { id: 3, name: 'AirBook Lite', category: 'Laptop', description: '8GB RAM, 256GB SSD, 13.3" Display', price: 949, image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, name: 'Pixel 9 Pro', category: 'Phone', description: '128GB Storage, AI-Powered Camera', price: 899, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbf1?q=80&w=1974&auto=format&fit=crop' },
    { id: 5, name: 'OfficeConnect Router', category: 'Networking', description: 'High-speed Wi-Fi 6 for businesses', price: 199, image: 'https://images.unsplash.com/photo-1587584180293-83a3d55106c5?q=80&w=2070&auto=format&fit=crop'},
    { id: 6, name: 'Gaming Beast', category: 'Laptop', description: '32GB RAM, 1TB NVMe SSD, RTX 4080', price: 2499, image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop'}
];

// 5. API Routes
// A simple "hello" route to test the server is working
app.get('/', (req, res) => {
  res.send('One Stop Tech Solutions API is running!');
});

// An API endpoint to get all the products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// 6. Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
