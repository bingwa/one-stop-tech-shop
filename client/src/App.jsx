import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';


function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-slate-900 text-slate-100' 
        : 'bg-white text-slate-900'
    }`}>
      <Navbar />
      
      {/* Added margin-top to account for sticky navbar height */}
      <main className="mt-[104px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
