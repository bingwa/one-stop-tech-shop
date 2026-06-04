import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', href: '/', note: 'Start here' },
  { name: 'Services', href: '/services', note: 'See what MunTek builds and supports' },
  { name: 'About', href: '/about', note: 'Meet the team and delivery principles' },
  { name: 'Contact', href: '/contact', note: 'Request a quote or support path' },
  { name: 'Privacy Policy', href: '/privacy', note: 'How submitted information is handled' },
  { name: 'Terms of Service', href: '/terms', note: 'Website and service terms' },
];

export default function Sitemap() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="page-hero">
        <div className="container-custom py-16 lg:py-20">
          <span className="brand-chip">Sitemap</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight text-slate-950 dark:text-white">Website pages</h1>
          <p className="section-copy mt-5 max-w-2xl">Quick links to the public service pages on the site.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <Link key={link.href} to={link.href} className="surface-card surface-card-hover p-5 font-bold text-slate-900 dark:text-white">
                <span className="block text-xl font-black">{link.name}</span>
                <span className="mt-2 block text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">{link.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
