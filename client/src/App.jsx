import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Checkout from './pages/Checkout.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow pt-20"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
