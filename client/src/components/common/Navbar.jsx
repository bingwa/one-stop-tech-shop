import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, List, Moon, Sun, X } from '@phosphor-icons/react';
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
    `relative inline-flex min-h-11 items-center rounded-[10px] px-3.5 text-sm font-semibold transition-colors duration-200 ${
      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-xl">
      <nav className="container-custom flex h-[4.25rem] items-center justify-between gap-4">
        <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/assets/logo.jpg"
            alt="MunTek Solutions logo"
            className="h-10 w-10 flex-none rounded-[10px] border border-line object-cover"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-ink">
            MunTek<span className="text-signal-strong"> Solutions</span>
          </span>
        </NavLink>

        <div className="hidden items-center md:flex">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href} className={linkClass}>
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 origin-left rounded-full bg-signal transition-transform duration-300 ${
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line-strong bg-surface text-ink-muted transition-colors hover:border-ink/40 hover:text-ink"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <NavLink to="/contact" className="btn-signal hidden lg:inline-flex">
            Request a quote
            <ArrowRight size={16} weight="bold" />
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-line-strong bg-surface text-ink transition-colors hover:border-ink/40 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="border-t border-line bg-paper md:hidden">
          <div className="container-custom divide-y divide-line py-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3.5 text-base font-semibold transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="py-4">
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-signal w-full">
                Request a quote
                <ArrowRight size={16} weight="bold" />
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
