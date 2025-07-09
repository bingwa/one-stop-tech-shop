import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { ShoppingCartIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.jpg';
import { useTheme } from '../context/ThemeContext';

const Logo = () => (

    <img 
        src={logo}
        alt="One Stop Tech Solutions Logo" 
        className="h-10 w-auto" 
    />
);

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? 'bg-blue-100 text-primary-blue dark:bg-gray-700 dark:text-primary-blue' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;
    
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md dark:shadow-gray-700">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
            <Logo />
            <span className="hidden sm:block text-xl font-bold text-gray-800 dark:text-gray-100">
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
        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-600" />
          )}
        </button>
        <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
              {theme === 'dark' ? <SunIcon className="h-5 w-5 text-yellow-400"/> : <MoonIcon className="h-5 w-5 text-gray-600"/>}
            </button>
             <NavLink to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <ShoppingCartIcon className="h-6 w-6 text-gray-600"/>
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {cartCount}
                    </span>
                )}
            </NavLink>
        </div>
       {/* Mobile navigation panel */}
       {isMobileMenuOpen && (
         <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md">
           <div className="px-4 py-4 space-y-1 flex flex-col">
             <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
             <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
             <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/shop" className={navLinkClass}>Shop</NavLink>
             <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
             <NavLink onClick={() => setIsMobileMenuOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink>
           </div>
         </div>
       )}
      </div>
    </header>
  );
}