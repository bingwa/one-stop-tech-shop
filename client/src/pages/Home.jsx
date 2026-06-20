import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { initializeScrollAnimations } from '../hooks/useScrollAnimation';
import { HeroBackdrop, SystemSchematic } from '../components/common/BlueprintArt';

const services = [
  {
    ref: 'SVC-01',
    icon: CodeBracketIcon,
    title: 'Websites and apps that sell the work',
    text: 'Public sites, portals, dashboards, and business apps mapped to the workflows your team actually runs.',
    featured: true,
  },
  {
    ref: 'SVC-02',
    icon: DevicePhoneMobileIcon,
    title: 'Mobile tools for the field',
    text: 'Apps for customers, staff, bookings, reporting, and daily movement.',
  },
  {
    ref: 'SVC-03',
    icon: CloudArrowUpIcon,
    title: 'Launch support that holds',
    text: 'Hosting, SSL, backups, databases, release checks, and deployment.',
  },
  {
    ref: 'SVC-04',
    icon: WrenchScrewdriverIcon,
    title: 'IT fixes with a plan',
    text: 'Network setup, diagnostics, software support, maintenance, and uptime planning.',
  },
];

const projects = [
  {
    index: '01',
    name: 'Fleet Manager',
    kind: 'Logistics operations',
    outcome: 'Fleet owners track trucks, trips, and running costs in one system instead of scattered spreadsheets.',
    stack: ['Next.js', 'PostgreSQL', 'Prisma'],
    url: 'https://fleetmanagerapp.netlify.app/',
  },
  {
    index: '02',
    name: 'Kowluxe',
    kind: 'E-commerce, US hair-care brand',
    outcome: 'Online store and landing page that sells and markets a hair-oil range end to end.',
    stack: ['Next.js', 'Shopify', 'TypeScript'],
    url: 'https://www.kowluxe.com/',
  },
  {
    index: '03',
    name: 'Fueling Africa Aviation',
    kind: 'Investment platform',
    outcome: 'Connects investors to sustainable aviation fuel opportunities and publishes sector updates.',
    stack: ['React', 'Supabase', 'Tailwind'],
    url: 'https://www.fuelingafricanaviation.com/',
  },
  {
    index: '04',
    name: 'Uncover Kenya',
    kind: 'News and publishing',
    outcome: 'A fast publishing platform for Kenyan political reporting and commentary.',
    stack: ['React', 'Neon', 'Tailwind'],
    url: 'https://uncover-delta.vercel.app/',
  },
];

const guarantees = [
  ['Source code', 'Handed over in full'],
  ['Hosting & SSL', 'Set up and managed'],
  ['Reply window', 'Same business day'],
  ['Based in', 'Mombasa, Kenya'],
];

export default function Home() {
  useEffect(() => initializeScrollAnimations(), []);

  return (
    <div className="overflow-hidden bg-paper text-ink">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <HeroBackdrop variant="home" />

        <div className="container-custom relative grid items-center gap-14 py-16 lg:min-h-[calc(100vh-7.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="animate-on-scroll in-view max-w-2xl">
            <p className="spec flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="spec-signal">FIG. 00</span>
              <span className="h-px w-7 bg-line-strong" aria-hidden="true" />
              MunTek Solutions · Systems engineering
            </p>

            <h1 className="display mt-7 text-[clamp(2.5rem,6.1vw,5rem)] text-ink">
              Practical tech systems for businesses that cannot afford{' '}
              <span className="redline">guesswork</span>.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted">
              We build websites, apps, deployments, and IT support plans for Kenyan teams that need working
              tools and a clean handover. No mystery, no lock-in.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link to="/contact" className="btn-signal">
                Request a quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href="tel:+254715747043"
                className="num text-sm font-medium tracking-tight text-ink-muted transition-colors hover:text-ink"
              >
                or call <span className="text-ink">+254 715 747 043</span>
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5">
              {guarantees.map(([label, value]) => (
                <li key={label} className="flex items-baseline gap-2 text-sm">
                  <span className="h-1.5 w-1.5 flex-none translate-y-[-1px] bg-signal" aria-hidden="true" />
                  <span className="text-ink-muted">{label}</span>
                  <span className="font-semibold text-ink">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Annotated system illustration: problem → handover */}
          <div className="animate-on-scroll in-view relative">
            <SystemSchematic />
          </div>
        </div>
      </section>

      {/* ─────────────────────── Services ─────────────────────── */}
      <section className="section-padding border-b border-line">
        <div className="container-custom">
          <header className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="animate-on-scroll">
              <h2 className="section-title tick-rule inline-block max-w-md">
                Four service lanes, one accountable partner
              </h2>
            </div>
            <p className="section-copy animate-on-scroll max-w-2xl lg:ml-auto lg:pb-1">
              MunTek connects the public website, internal workflow, hosting, network, and support layer, so
              one team owns the whole chain instead of pointing at the next vendor.
            </p>
          </header>

          <div className="animate-on-scroll border-t border-line">
            {services.map((service) => (
              <article
                key={service.ref}
                className={`group grid gap-5 border-b border-line px-1 py-7 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 sm:py-8 ${
                  service.featured ? 'bg-well/60' : 'hover:bg-well/40'
                }`}
              >
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                  <span className="num text-xs font-medium tracking-tight text-ink-muted">{service.ref}</span>
                  <span
                    className={`flex h-12 w-12 flex-none items-center justify-center border ${
                      service.featured ? 'border-ink bg-ink text-paper' : 'border-line-strong bg-surface text-ink'
                    }`}
                  >
                    <service.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-ink sm:text-2xl">{service.title}</h3>
                    {service.featured && (
                      <span className="chip border-signal/40 text-signal-strong">Most projects start here</span>
                    )}
                  </div>
                  <p className="mt-2.5 max-w-2xl leading-7 text-ink-muted">{service.text}</p>
                </div>
                <Link
                  to="/services"
                  aria-label={`Read more about: ${service.title}`}
                  className="flex h-11 w-11 flex-none items-center justify-center self-start border border-line-strong bg-surface text-ink-muted transition-all duration-200 group-hover:border-ink group-hover:text-ink"
                >
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Projects ─────────────────────── */}
      <section className="section-padding border-b border-line bg-well/40">
        <div className="container-custom">
          <header className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="animate-on-scroll">
              <h2 className="section-title tick-rule inline-block max-w-md">
                Live builds in daily use
              </h2>
            </div>
            <p className="section-copy animate-on-scroll max-w-2xl lg:ml-auto lg:pb-1">
              Real systems we designed, built, and deployed across logistics, retail, energy, and publishing.
              Open any of them and check the work yourself.
            </p>
          </header>

          <div className="animate-on-scroll panel">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group grid gap-5 border-b border-line px-5 py-7 transition-colors last:border-b-0 hover:bg-well/60 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 sm:px-7 sm:py-8"
              >
                <span className="num flex h-12 w-12 flex-none items-center justify-center border border-ink bg-paper text-sm font-semibold text-ink">
                  {project.index}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-ink sm:text-2xl">{project.name}</h3>
                    <span className="spec text-[0.62rem]">{project.kind}</span>
                  </div>
                  <p className="mt-2.5 max-w-2xl leading-7 text-ink-muted">{project.outcome}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip bg-surface">{tech}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View the ${project.name} live site, opens in a new tab`}
                  className="btn-outline h-11 min-h-0 self-start px-4 text-xs"
                >
                  View live
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="registered relative overflow-hidden border border-ink bg-ink text-paper">
            <div className="bp-grid-lg pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">
              <div>
                <p className="spec text-paper/60"><span className="spec-signal">FIG. 99</span> &nbsp;Open a job ticket</p>
                <h2 className="display mt-6 max-w-2xl text-[clamp(1.9rem,3.8vw,3.25rem)] text-paper">
                  Bring the problem. Leave with a practical next step.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-paper/70">
                  Tell us what you need built, fixed, hosted, or supported. We turn it into a clear technical
                  path with scope and cost before any work starts.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-signal bg-signal px-7 text-sm font-bold tracking-tight text-ink transition-transform duration-150 hover:scale-[1.015] active:scale-[0.985]"
                >
                  Request a quote
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a href="tel:+254715747043" className="num text-sm text-paper/70 transition-colors hover:text-paper">
                  +254 715 747 043
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
