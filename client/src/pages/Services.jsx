import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  WifiIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { initializeScrollAnimations } from '../hooks/useScrollAnimation';
import { HeroBackdrop } from '../components/common/BlueprintArt';

const coreServices = [
  {
    ref: 'SVC-01',
    icon: GlobeAltIcon,
    title: 'Custom web development',
    price: 'from KSh 50,000',
    description: 'Websites, portals, dashboards, and web apps that help customers inquire, teams operate, and owners see the work clearly.',
    features: ['Marketing websites', 'Business portals', 'Admin dashboards', 'API integrations'],
    featured: true,
  },
  {
    ref: 'SVC-02',
    icon: DevicePhoneMobileIcon,
    title: 'Mobile app development',
    price: 'from KSh 80,000',
    description: 'Mobile tools for bookings, reporting, customer access, field teams, and operations that need to move outside the office.',
    features: ['React Native apps', 'Android and iOS builds', 'Push notifications', 'Release support'],
  },
  {
    ref: 'SVC-03',
    icon: WifiIcon,
    title: 'Network installations',
    price: 'from KSh 30,000',
    description: 'Connectivity planning and setup for homes, offices, and growing teams that need stable access and cleaner support.',
    features: ['Structured cabling', 'Router setup', 'Wi-Fi optimization', 'Firewall configuration'],
  },
  {
    ref: 'SVC-04',
    icon: CloudArrowUpIcon,
    title: 'Cloud and deployment',
    price: 'from KSh 10,000/mo',
    description: 'Hosting, SSL, backups, databases, and launch checks so your website or app stays reachable after handover.',
    features: ['Cloud hosting', 'SSL certificates', 'Backups', 'Database support'],
  },
  {
    ref: 'SVC-05',
    icon: WrenchScrewdriverIcon,
    title: 'IT support and maintenance',
    price: 'from KSh 15,000/mo',
    description: 'Practical support for devices, systems, software issues, performance problems, updates, and everyday blockers.',
    features: ['Diagnostics', 'Maintenance', 'System updates', 'Remote support'],
  },
  {
    ref: 'SVC-06',
    icon: CpuChipIcon,
    title: 'Technology consulting',
    price: 'from KSh 20,000',
    description: 'Clear planning for teams choosing software, improving workflows, automating tasks, or modernizing operations.',
    features: ['Digital strategy', 'Automation planning', 'Technical audits', 'Growth roadmaps'],
  },
];

const deliverables = [
  'Discovery, requirements, and practical scope',
  'Build, integration, testing, and deployment',
  'Handover plus post-launch support options',
];

const serviceStack = [
  ['01', 'Public presence', 'Websites and portals that turn interest into inquiries.'],
  ['02', 'Team workflow', 'Apps and dashboards for staff, field teams, and operations.'],
  ['03', 'Launch layer', 'Hosting, backups, SSL, networks, and support after handover.'],
];

export default function Services() {
  useEffect(() => initializeScrollAnimations(), []);

  return (
    <div className="bg-paper text-ink">
      <section className="page-hero">
        <HeroBackdrop variant="services" />
        <div className="page-hero-grid">
          <div className="animate-on-scroll in-view">
            <p className="spec mb-6"><span className="spec-signal">FIG. 01</span> &nbsp;Capabilities</p>
            <h1 className="display max-w-3xl text-[clamp(2.4rem,5.4vw,4.25rem)] text-ink">
              Build, launch, and support the systems your business depends on.
            </h1>
          </div>
          <div className="animate-on-scroll in-view max-w-2xl lg:ml-auto">
            <p className="section-copy">
              MunTek combines software development, cloud deployment, networks, and IT support so business
              systems do not fall apart between vendors.
            </p>
            <figure className="registered panel mt-8">
              <figcaption className="flex items-center justify-between border-b border-line bg-well px-5 py-3">
                <span className="spec text-ink">Service stack</span>
                <span className="spec spec-signal">3 layers</span>
              </figcaption>
              <div className="divide-y divide-line">
                {serviceStack.map(([step, title, text]) => (
                  <div key={step} className="grid gap-3 px-5 py-4 sm:grid-cols-[3rem_1fr]">
                    <span className="num text-sm font-semibold text-signal-strong">{step}</span>
                    <div className="min-w-0">
                      <h2 className="font-heading text-base font-bold tracking-tight text-ink">{title}</h2>
                      <p className="mt-1 text-sm leading-6 text-ink-muted">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </figure>
            <Link to="/contact" className="btn-signal mt-8">
              Request a quote
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-line">
        <div className="container-custom">
          <header className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="animate-on-scroll">
              <h2 className="section-title tick-rule inline-block max-w-sm">Choose the lane closest to the problem</h2>
            </div>
            <p className="section-copy animate-on-scroll max-w-2xl lg:ml-auto lg:pb-1">
              Each service can stand alone, but the strongest projects usually connect more than one layer.
            </p>
          </header>

          <div className="animate-on-scroll grid gap-px border border-line bg-line md:grid-cols-2">
            {coreServices.map((service) => (
              <article key={service.ref} className="flex flex-col bg-surface p-6 transition-colors hover:bg-well/50 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center border border-ink bg-ink text-paper">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <span className="num text-xs font-medium tracking-tight text-ink-muted">{service.ref}</span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold tracking-tight text-ink">{service.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-ink-muted">{service.description}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex min-w-0 items-start gap-2 text-sm text-ink">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-signal-strong" />
                      <span className="min-w-0">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="num text-sm font-semibold text-ink">{service.price}</span>
                  <Link to="/contact" className="spec spec-signal inline-flex items-center gap-1.5 transition-opacity hover:opacity-70">
                    Get a quote
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-line bg-well/40">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="animate-on-scroll">
            <h2 className="section-title tick-rule inline-block">What a service engagement includes</h2>
            <p className="section-copy mt-7">
              Good technical work is planning, delivery, launch, and support. We keep those parts visible so
              you know what is being built and why.
            </p>
          </div>
          <ol className="animate-on-scroll panel divide-y divide-line">
            {deliverables.map((item, i) => (
              <li key={item} className="flex min-w-0 items-center gap-5 px-6 py-5">
                <span className="num text-base font-semibold text-signal-strong">{String(i + 1).padStart(2, '0')}</span>
                <span className="min-w-0 font-medium leading-7 text-ink">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="registered relative overflow-hidden border border-ink bg-ink text-paper">
            <div className="bp-grid-lg pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">
              <div>
                <CodeBracketIcon className="mb-6 h-9 w-9 text-signal" />
                <h2 className="display max-w-2xl text-[clamp(1.9rem,3.8vw,3.25rem)] text-paper">
                  Start with the business problem
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-paper/70">
                  Not sure which service fits? Share the goal, pressure points, and deadline. We shape the
                  right technical plan before implementation starts.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 border border-signal bg-signal px-7 text-sm font-bold tracking-tight text-ink transition-transform duration-150 hover:scale-[1.015] active:scale-[0.985]"
              >
                Request a quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
