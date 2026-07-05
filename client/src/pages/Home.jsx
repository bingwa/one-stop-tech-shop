import { Link } from 'react-router-dom';
import { motion as Motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  ChatsCircle,
  Code,
  CloudArrowUp,
  DeviceMobile,
  GitBranch,
  LockSimple,
  MapPin,
  Wrench,
} from '@phosphor-icons/react';
import Reveal from '../components/common/Reveal';

const services = [
  {
    icon: Code,
    title: 'Web development',
    text: 'Public sites, portals, dashboards, and business apps mapped to the workflows your team actually runs.',
    featured: true,
  },
  {
    icon: DeviceMobile,
    title: 'Mobile apps',
    text: 'Tools for customers, staff, bookings, reporting, and teams that work outside the office.',
  },
  {
    icon: CloudArrowUp,
    title: 'Cloud and deployment',
    text: 'Hosting, SSL, backups, databases, release checks, and launches that hold.',
  },
  {
    icon: Wrench,
    title: 'IT support',
    text: 'Network setup, diagnostics, maintenance, and uptime planning with a clear response path.',
  },
];

const projects = [
  {
    name: 'Fleet Manager',
    kind: 'Logistics operations',
    outcome: 'Fleet owners track trucks, trips, and running costs in one system instead of scattered spreadsheets.',
    stack: ['Next.js', 'PostgreSQL', 'Prisma'],
    url: 'https://fleetmanagerapp.netlify.app/',
    image: '/assets/FLM.png',
    featured: true,
  },
  {
    name: 'Kowluxe',
    kind: 'E-commerce, US hair-care brand',
    outcome: 'Online store and landing page that sells and markets a hair-oil range end to end.',
    stack: ['Next.js', 'Shopify', 'TypeScript'],
    url: 'https://www.kowluxe.com/',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kowluxe.com%2F?w=1100&h=740',
  },
  {
    name: 'Fueling Africa Aviation',
    kind: 'Investment platform',
    outcome: 'Connects investors to sustainable aviation fuel opportunities and publishes sector updates.',
    stack: ['React', 'Supabase', 'Tailwind'],
    url: 'https://www.fuelingafricanaviation.com/',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.fuelingafricanaviation.com%2F?w=1100&h=740',
  },
  {
    name: 'Uncover Kenya',
    kind: 'News and publishing',
    outcome: 'A fast publishing platform for Kenyan political reporting and commentary.',
    stack: ['React', 'Neon', 'Tailwind'],
    url: 'https://uncover-delta.vercel.app/',
    image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Funcover-delta.vercel.app%2F?w=1400&h=740',
    wide: true,
  },
];

const facts = [
  { icon: GitBranch, label: 'Source code', value: 'Handed over in full' },
  { icon: LockSimple, label: 'Hosting and SSL', value: 'Set up and managed' },
  { icon: ChatsCircle, label: 'Replies', value: 'Same business day' },
  { icon: MapPin, label: 'Based in', value: 'Mombasa, Kenya' },
];

const process = [
  {
    name: 'Scope',
    text: 'We turn the business problem into pages, features, data flows, and a cost you approve before build work starts.',
  },
  {
    name: 'Build',
    text: 'Design and development in short cycles, with previews you can open and comment on at every stage.',
  },
  {
    name: 'Launch and support',
    text: 'Deployment, domains, backups, and handover, then a support plan so the system keeps working after go-live.',
  },
];

export default function Home() {
  const reduce = useReducedMotion();

  const enter = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <div className="overflow-hidden bg-paper text-ink">
      {/* Hero: split, real product screenshot on the right */}
      <section className="relative border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
          style={{
            background:
              'radial-gradient(52rem 30rem at 85% 0%, rgb(var(--signal) / 0.14), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="container-custom relative grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-24">
          <div className="max-w-xl">
            <Motion.h1
              {...enter(0)}
              className="display text-4xl text-ink sm:text-5xl lg:text-[3.4rem]"
            >
              Websites, apps, and IT systems built to win you customers.
            </Motion.h1>
            <Motion.p {...enter(0.08)} className="mt-6 max-w-lg text-lg leading-8 text-ink-muted">
              MunTek designs, builds, and supports software for Kenyan businesses. Clear scope, clean
              handover, support that answers.
            </Motion.p>
            <Motion.div {...enter(0.16)} className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-signal">
                Request a quote
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a href="#work" className="btn-outline">
                See our work
              </a>
            </Motion.div>
          </div>

          <Motion.div {...enter(0.15)} className="relative">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
              alt="Developers collaborating on a software build"
              className="aspect-[4/3] w-full rounded-2xl border border-line object-cover shadow-[0_24px_60px_-24px_rgb(var(--navy)/0.45)]"
              fetchpriority="high"
            />
          </Motion.div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b border-line bg-surface/60">
        <div className="container-custom grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.05} className="flex items-start gap-3.5">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] bg-signal/10 text-signal-strong">
                <fact.icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-ink-muted">{fact.label}</span>
                <span className="block font-semibold text-ink">{fact.value}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding border-b border-line">
        <div className="container-custom">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">Everything digital, one accountable partner</h2>
            <p className="section-copy mt-4">
              Website, internal tools, hosting, network, and support owned by one team, so nothing falls
              apart between vendors.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, i) =>
              service.featured ? (
                <Reveal key={service.title} delay={i * 0.06} className="md:row-span-1">
                  <article className="lift relative h-full overflow-hidden rounded-2xl bg-[#0b1220] p-7 text-white sm:p-8">
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(30rem 20rem at 100% 0%, rgb(59 148 218 / 0.28), transparent 60%)',
                      }}
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white/10 text-[#7dbef0]">
                        <service.icon size={24} />
                      </span>
                      <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight">{service.title}</h3>
                      <p className="mt-3 leading-7 text-zinc-300">{service.text}</p>
                      <Link
                        to="/services"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7dbef0] transition-opacity hover:opacity-80"
                      >
                        Most projects start here
                        <ArrowUpRight size={15} weight="bold" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ) : (
                <Reveal key={service.title} delay={i * 0.06}>
                  <article className="lift panel h-full p-7 sm:p-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-signal/10 text-signal-strong">
                      <service.icon size={24} />
                    </span>
                    <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight text-ink">{service.title}</h3>
                    <p className="mt-3 leading-7 text-ink-muted">{service.text}</p>
                    <Link
                      to="/services"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-strong transition-opacity hover:opacity-80"
                    >
                      Details and pricing
                      <ArrowUpRight size={15} weight="bold" />
                    </Link>
                  </article>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section-padding border-b border-line bg-well/50">
        <div className="container-custom">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">Live builds in daily use</h2>
            <p className="section-copy mt-4">
              Real systems across logistics, retail, energy, and publishing. Open any of them and check the
              work yourself.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                key={project.name}
                delay={i * 0.05}
                className={project.featured || project.wide ? 'md:col-span-2' : ''}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="lift panel group block overflow-hidden"
                  aria-label={`Open the ${project.name} live site in a new tab`}
                >
                  <div
                    className={
                      project.featured
                        ? 'grid md:grid-cols-[1fr_1.3fr] md:items-center'
                        : ''
                    }
                  >
                    {project.featured && (
                      <div className="order-2 p-7 sm:p-8 md:order-1">
                        <ProjectMeta project={project} />
                      </div>
                    )}
                    <div
                      className={`overflow-hidden border-line bg-well ${
                        project.featured ? 'order-1 border-b md:order-2 md:border-b-0 md:border-l' : 'border-b'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={`Screenshot of the ${project.name} website`}
                        loading="lazy"
                        className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${
                          project.wide ? 'aspect-[21/9]' : 'aspect-[3/2]'
                        } ${project.featured ? 'md:aspect-auto md:h-full' : ''}`}
                      />
                    </div>
                  </div>
                  {!project.featured && (
                    <div className="p-7 sm:p-8">
                      <ProjectMeta project={project} />
                    </div>
                  )}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-b border-line">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="section-title max-w-xs">How a project runs</h2>
            <p className="section-copy mt-4 max-w-sm">
              The same path every time, so you always know what happens next and what it costs.
            </p>
          </Reveal>
          <div className="grid gap-0 divide-y divide-line">
            {process.map((step, i) => (
              <Reveal key={step.name} delay={i * 0.07}>
                <div className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">{step.name}</h3>
                  <p className="leading-7 text-ink-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl bg-[#0b1220] px-7 py-14 text-center text-white sm:px-12 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(42rem 22rem at 50% 120%, rgb(59 148 218 / 0.35), transparent 70%)',
                }}
                aria-hidden="true"
              />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="display text-3xl sm:text-4xl">
                  Bring the problem. Leave with a practical next step.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-300">
                  Tell us what you need built, fixed, hosted, or supported. We reply with a clear technical
                  path, scope, and cost before any work starts.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link to="/contact" className="btn-signal">
                    Request a quote
                    <ArrowRight size={16} weight="bold" />
                  </Link>
                  <a href="tel:+254715747043" className="num text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                    or call +254 715 747 043
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <>
      <p className="text-sm font-medium text-signal-strong">{project.kind}</p>
      <h3 className="mt-2 flex items-center gap-2 font-heading text-2xl font-bold tracking-tight text-ink">
        {project.name}
        <ArrowUpRight size={18} weight="bold" className="text-ink-muted transition-colors group-hover:text-signal-strong" />
      </h3>
      <p className="mt-3 max-w-xl leading-7 text-ink-muted">{project.outcome}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="chip">{tech}</span>
        ))}
      </div>
    </>
  );
}
