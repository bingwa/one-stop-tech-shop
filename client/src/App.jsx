import { Navigate, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/shop" element={<Navigate to="/contact" replace />} />
          <Route path="/product/:id" element={<Navigate to="/contact" replace />} />
          <Route path="/cart" element={<Navigate to="/contact" replace />} />
          <Route path="/checkout" element={<Navigate to="/contact" replace />} />
          <Route path="/order-confirmation" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
