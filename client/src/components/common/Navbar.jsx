import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ArrowRightIcon,
  Bars3Icon,
  MoonIcon,
  PhoneIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 text-sm font-bold transition duration-300 ${
      isActive
        ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-slate-950 bg-white/95 backdrop-blur-xl dark:border-white dark:bg-slate-950/95">
      <div className="hidden border-b border-white/10 bg-slate-950 text-white lg:block">
        <div className="container-custom flex h-9 items-center justify-between text-sm">
          <a href="tel:+254715747043" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
            <PhoneIcon className="h-4 w-4" />
            +254 715 747 043
          </a>
          <p className="text-slate-300">Professional IT solutions for teams across Kenya.</p>
        </div>
      </div>

      <nav className="container-custom flex h-20 items-center justify-between">
        <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/assets/logo.jpg" alt="MunTek Solutions" className="h-11 w-11 object-contain ring-2 ring-slate-950 dark:ring-white" />
          <div className="min-w-0 leading-tight">
            <span className="block text-base font-extrabold text-slate-950 dark:text-white">MunTek Solutions</span>
            <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">IT Solutions & Software</span>
          </div>
        </NavLink>

        <div className="hidden items-center gap-1 border-2 border-slate-950 bg-white p-1 dark:border-white dark:bg-slate-900 md:flex">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden h-11 w-11 items-center justify-center border-2 border-slate-950 bg-white text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:border-white dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white sm:inline-flex"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>

          <NavLink to="/contact" className="btn-primary hidden rounded-none border-2 border-slate-950 bg-slate-950 shadow-[4px_4px_0_#2563eb] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#2563eb] dark:border-white dark:bg-white dark:text-slate-950 lg:inline-flex">
            Request a quote
            <ArrowRightIcon className="h-4 w-4" />
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-slate-950 bg-white text-slate-800 transition hover:bg-slate-100 dark:border-white dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t-2 border-slate-950 bg-white dark:border-white dark:bg-slate-950 md:hidden"
        >
          <div className="container-custom space-y-2 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={(state) => `${linkClass(state)} block break-words`}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary mt-3 w-full rounded-none border-2 border-slate-950 bg-slate-950 dark:border-white dark:bg-white dark:text-slate-950">
              Request a quote
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
