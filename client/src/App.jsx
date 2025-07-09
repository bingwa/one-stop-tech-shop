import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Services from './pages/Services';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'; // Updated: Was Checkout
import Checkout from './pages/Checkout'; // New checkout page
import OrderConfirmation from './pages/OrderConfirmation';
import { ThemeContext } from './context/ThemeContext';


function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
      <Navbar />
          <main className="pt-20 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/services" element={<Services />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* --- UPDATED ROUTES --- */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
          </main>
          <Footer />
    </div>
  );
}

export default App;