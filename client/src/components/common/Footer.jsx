import { Link } from 'react-router-dom';
import { ArrowRight, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Sitemap', href: '/sitemap' },
];

const services = [
  'Web development',
  'Mobile applications',
  'Network installations',
  'Cloud deployment',
  'IT support',
];

const contactInfo = [
  { icon: Phone, text: '+254 715 747 043', href: 'tel:+254715747043' },
  { icon: EnvelopeSimple, text: 'munteksolutions@gmail.com', href: 'mailto:munteksolutions@gmail.com' },
  { icon: MapPin, text: 'Moi Avenue opp. Equity Bank, Mombasa', href: 'https://maps.google.com/?q=Moi+Avenue+Equity+Bank+Mombasa' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1220] text-zinc-300">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.6fr_0.7fr_0.9fr]">
          <div className="max-w-sm">
            <Link to="/" className="mb-5 flex min-w-0 items-center gap-3">
              <img
                src="/assets/logo.jpg"
                alt="MunTek Solutions logo"
                className="h-11 w-11 flex-none rounded-[10px] object-cover"
              />
              <span className="font-heading text-lg font-bold tracking-tight text-white">MunTek Solutions</span>
            </Link>
            <p className="leading-7 text-zinc-400">
              We help Kenyan businesses plan, build, launch, and support dependable digital systems.
            </p>
            <Link to="/contact" className="btn-signal mt-7">
              Request a quote
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="inline-block py-1.5 text-zinc-400 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-1">
              {services.map((service) => (
                <li key={service} className="py-1.5 text-zinc-400">{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="flex min-w-0 gap-3 text-zinc-400 transition-colors hover:text-white"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <item.icon size={20} className="mt-0.5 flex-none text-[#3b94da]" />
                    <span className="min-w-0 break-words">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col gap-4 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} MunTek Solutions. Built in Kenya.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
