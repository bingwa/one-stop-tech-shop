import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const FooterLogo = () => (
    <img src={logo}
        alt="One Stop Tech Solutions Logo" 
        className="h-10 w-auto" 
    />
);

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex items-center">
                        <FooterLogo />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                           <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                           <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                           <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
                           <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Connect</h4>
                         <ul className="space-y-2">
                            <li><a href="https://chat.whatsapp.com/BamuEUha4NxHkttgbnUQTt?fbclid=PAZXh0bgNhZW0CMTEAAafKKLarf-e2OHemvSNLOdAZXu41V_LXYTyz5fBVs23MlrF1kP9lbFRYHUZOig_aem_05xLvZt2LAhTOJF6QgofEQ" className="text-gray-400 hover:text-white">WhatsApp</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                            <li><a href="https://www.instagram.com/onestop_tech_solutions?igsh=amVyZG9uMnA4NWJ4" className="text-gray-400 hover:text-white">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <p className="text-gray-400">+254 70052 8806</p>
                        <p className="text-gray-400">munteksolutions@gmail.com</p>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MunTek Solutions. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}