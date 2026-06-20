import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { HeroBackdrop } from '../components/common/BlueprintArt';

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
    <main className="bg-paper text-ink">
      <section className="page-hero">
        <HeroBackdrop variant="doc" />
        <div className="container-custom relative py-16 lg:py-20">
          <p className="spec mb-6"><span className="spec-signal">DOC. A0</span> &nbsp;Index</p>
          <h1 className="display max-w-3xl text-[clamp(2.2rem,4.6vw,3.5rem)] text-ink">Website pages</h1>
          <p className="section-copy mt-6 max-w-2xl">Quick links to the public service pages on the site.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {links.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex items-start gap-4 bg-surface p-6 transition-colors hover:bg-well"
              >
                <span className="num pt-1 text-xs text-signal-strong">{String(i + 1).padStart(2, '0')}</span>
                <span className="min-w-0">
                  <span className="block font-heading text-lg font-bold tracking-tight text-ink">{link.name}</span>
                  <span className="mt-1.5 block text-sm leading-6 text-ink-muted">{link.note}</span>
                </span>
                <ArrowUpRightIcon className="ml-auto h-4 w-4 flex-none text-ink-muted opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
