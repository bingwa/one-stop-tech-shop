import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function Sitemap() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950">
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="container-custom py-16">
          <h1 className="max-w-3xl text-5xl font-black leading-tight text-slate-950 dark:text-white">Website pages</h1>
          <p className="section-copy mt-5">Quick links to the public service pages on the site.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <Link key={link.href} to={link.href} className="surface-card surface-card-hover p-5 font-bold text-slate-900 dark:text-white">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
