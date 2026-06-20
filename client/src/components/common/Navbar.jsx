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
  { name: 'Home', href: '/', ref: '00' },
  { name: 'Services', href: '/services', ref: '01' },
  { name: 'About', href: '/about', ref: '02' },
  { name: 'Contact', href: '/contact', ref: '03' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `relative inline-flex min-h-11 items-center px-3.5 text-sm font-semibold tracking-tight transition-colors duration-200 ${
      isActive
        ? 'text-ink'
        : 'text-ink-muted hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-xl">
      <div className="hidden border-b border-line bg-ink text-paper lg:block">
        <div className="container-custom flex h-9 items-center justify-between">
          <a href="tel:+254715747043" className="spec inline-flex items-center gap-2 text-paper/80 transition-colors hover:text-paper">
            <PhoneIcon className="h-3.5 w-3.5" />
            +254 715 747 043
          </a>
          <p className="spec text-paper/55">
            <span className="spec-signal">●</span>&nbsp; Lat -4.05 / Lon 39.66 · Mombasa, Kenya
          </p>
        </div>
      </div>

      <nav className="container-custom flex h-[4.75rem] items-center justify-between gap-4">
        <NavLink to="/" className="group flex min-w-0 items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="registered flex h-11 w-11 flex-none items-center justify-center border border-ink bg-ink">
            <img src="/assets/logo.jpg" alt="MunTek Solutions" className="h-full w-full object-cover" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-heading text-[0.95rem] font-bold tracking-tight text-ink">MunTek Solutions</span>
            <span className="spec mt-1 block text-[0.6rem]">Systems engineering · EST. Mombasa</span>
          </span>
        </NavLink>

        <div className="hidden items-center md:flex">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href} className={linkClass}>
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute bottom-1.5 left-3.5 right-3.5 h-[2px] origin-left bg-signal transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden h-11 w-11 items-center justify-center border border-line-strong bg-surface text-ink-muted transition-colors hover:border-ink hover:text-ink sm:inline-flex"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>

          <NavLink to="/contact" className="btn-signal hidden lg:inline-flex">
            Request a quote
            <ArrowRightIcon className="h-4 w-4" />
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center border border-line-strong bg-surface text-ink transition-colors hover:border-ink md:hidden"
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
          className="border-t border-line bg-paper md:hidden"
        >
          <div className="container-custom divide-y divide-line py-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3.5 text-base font-semibold tracking-tight transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`
                }
              >
                {item.name}
                <span className="num text-xs text-ink-muted/70">/{item.ref}</span>
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-signal mt-4 w-full">
              Request a quote
              <ArrowRightIcon className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
