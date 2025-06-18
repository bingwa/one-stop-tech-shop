import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.jpg';

const Logo = () => (

    <img 
        src={logo}
        alt="One Stop Tech Solutions Logo" 
        className="h-10 w-auto" 
    />
);

export default function Navbar() {
  const { cartCount } = useCart();

  
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? 'bg-blue-100 text-primary-blue' : 'text-gray-700 hover:bg-gray-100'
    }`;
    
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
            <Logo />
            <span className="hidden sm:block text-xl font-bold text-gray-800">
                MunTek Solutions
            </span>
        </NavLink>
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>
        <div className="flex items-center">
             <NavLink to="/checkout" className="relative p-2 rounded-full hover:bg-gray-100">
                <ShoppingCartIcon className="h-6 w-6 text-gray-600"/>
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {cartCount}
                    </span>
                )}
            </NavLink>
        </div>
      </div>
    </header>
  );
}