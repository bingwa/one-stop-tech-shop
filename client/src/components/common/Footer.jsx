import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Sitemap', href: '/sitemap' },
];

const services = [
  'Custom web development',
  'Mobile applications',
  'Network installations',
  'Cloud deployment',
  'IT support',
];

const contactInfo = [
  { icon: PhoneIcon, text: '+254 715 747 043', href: 'tel:+254715747043' },
  { icon: EnvelopeIcon, text: 'munteksolutions@gmail.com', href: 'mailto:munteksolutions@gmail.com' },
  { icon: MapPinIcon, text: 'Moi Avenue opp. Equity Bank, Mombasa', href: 'https://maps.google.com/?q=Moi+Avenue+Equity+Bank+Mombasa' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.6fr_0.9fr]">
          <div className="max-w-md">
            <Link to="/" className="mb-6 flex min-w-0 items-center gap-3">
              <span className="flex h-12 w-12 flex-none items-center justify-center border border-paper/30">
                <img src="/assets/logo.jpg" alt="MunTek Solutions" className="h-full w-full object-cover" />
              </span>
              <span>
                <span className="block font-heading text-lg font-bold tracking-tight text-paper">MunTek Solutions</span>
                <span className="spec mt-1 block text-[0.6rem] text-paper/55">Systems engineering · Mombasa</span>
              </span>
            </Link>
            <p className="max-w-sm leading-7 text-paper/70">
              We help Kenyan businesses plan, build, launch, and support dependable digital systems.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2.5 border border-signal bg-signal px-6 text-sm font-bold tracking-tight text-ink transition-transform duration-150 hover:scale-[1.015] active:scale-[0.985]"
            >
              Request a quote
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <nav aria-label="Footer">
            <h3 className="spec text-paper/50">Explore</h3>
            <ul className="mt-5 space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 py-1.5 font-medium text-paper/75 transition-colors hover:text-paper"
                  >
                    <ArrowUpRightIcon className="h-3.5 w-3.5 text-signal opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="spec text-paper/50">Get in touch</h3>
            <ul className="mt-5 space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex min-w-0 gap-3 text-paper/75 transition-colors hover:text-paper"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <item.icon className="mt-0.5 h-5 w-5 flex-none text-signal" />
                    <span className="min-w-0 break-words">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/15 pt-6">
          <p className="spec mb-4 text-paper/45">Service index</p>
          <div className="flex flex-wrap gap-2">
            {services.map((service, i) => (
              <span key={service} className="chip border-paper/20 bg-transparent text-paper/70">
                <span className="num mr-2 text-paper/40">{String(i + 1).padStart(2, '0')}</span>
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="container-custom flex flex-col gap-4 py-6 text-sm text-paper/55 md:flex-row md:items-center md:justify-between">
          <p className="num text-xs tracking-tight">&copy; {currentYear} MunTek Solutions · Built in Kenya</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-paper">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-paper">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
