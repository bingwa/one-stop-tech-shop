import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
      isActive
        ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="hidden border-b border-slate-100 bg-slate-950 text-white dark:border-slate-800 lg:block">
        <div className="container-custom flex h-9 items-center justify-between text-sm">
          <a href="tel:+254715747043" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
            <PhoneIcon className="h-4 w-4" />
            +254 715 747 043
          </a>
          <p className="text-slate-300">Professional IT solutions for teams across Kenya.</p>
        </div>
      </div>

      <nav className="container-custom flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/assets/logo.jpg" alt="Muntek Solutions" className="h-11 w-11 rounded-xl object-contain ring-1 ring-slate-200" />
          <div className="leading-tight">
            <span className="block text-base font-extrabold text-slate-950 dark:text-white">Muntek Solutions</span>
            <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">IT Solutions & Software</span>
          </div>
        </NavLink>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:flex">
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
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white sm:inline-flex"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>

          <NavLink to="/contact" className="btn-primary hidden lg:inline-flex">
            Get quote
            <ArrowRightIcon className="h-4 w-4" />
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 md:hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom space-y-2 py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={(state) => `${linkClass(state)} block`}
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary mt-3 w-full">
            Start a project
          </NavLink>
        </div>
      </div>
    </header>
  );
}
