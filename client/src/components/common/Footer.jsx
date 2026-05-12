import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
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
    <footer className="bg-slate-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div className="max-w-md">
            <Link to="/" className="mb-6 flex items-center gap-3">
              <img src="/assets/logo.jpg" alt="Muntek Solutions" className="h-12 w-12 rounded-xl object-contain ring-1 ring-white/10" />
              <div>
                <div className="text-xl font-extrabold">Muntek Solutions</div>
                <div className="text-sm font-semibold text-slate-400">IT Solutions & Software</div>
              </div>
            </Link>
            <p className="section-copy text-slate-300">
              We help Kenyan businesses plan, build, launch, and support dependable digital systems.
            </p>
            <Link to="/contact" className="btn-primary mt-8 bg-white text-slate-950 hover:bg-slate-100">
              Discuss your project
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-normal text-slate-400">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-normal text-slate-400">Get in touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <a href={item.href} className="flex gap-3 text-slate-300 transition hover:text-white" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <item.icon className="mt-0.5 h-5 w-5 flex-none text-sky-300" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 p-5">
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span key={service} className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col gap-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Muntek Solutions. All rights reserved. Built in Kenya.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link to="/terms" className="transition hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
