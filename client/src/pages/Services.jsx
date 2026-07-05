import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  CloudArrowUp,
  Cpu,
  DeviceMobile,
  Globe,
  WifiHigh,
  Wrench,
} from '@phosphor-icons/react';
import Reveal from '../components/common/Reveal';

const coreServices = [
  {
    icon: Globe,
    title: 'Custom web development',
    price: 'from KSh 15,000',
    description:
      'Websites, portals, dashboards, and web apps that help customers inquire, teams operate, and owners see the work clearly.',
    features: ['Marketing websites', 'Business portals', 'Admin dashboards', 'API integrations'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80',
    featured: true,
  },
  {
    icon: DeviceMobile,
    title: 'Mobile app development',
    price: 'from KSh 50,000',
    description:
      'Mobile tools for bookings, reporting, customer access, field teams, and operations that move outside the office.',
    features: ['React Native apps', 'Android and iOS builds', 'Push notifications', 'Release support'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1100&q=80',
  },
  {
    icon: WifiHigh,
    title: 'Network installations',
    price: 'from KSh 30,000',
    description:
      'Connectivity planning and setup for homes, offices, and growing teams that need stable access.',
    features: ['Structured cabling', 'Router setup', 'Wi-Fi optimization', 'Firewall configuration'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=80',
  },
  {
    icon: CloudArrowUp,
    title: 'Cloud and deployment',
    price: 'from KSh 10,000/mo',
    description:
      'Hosting, SSL, backups, databases, and launch checks so your website or app stays reachable after handover.',
    features: ['Cloud hosting', 'SSL certificates', 'Backups', 'Database support'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1100&q=80',
  },
  {
    icon: Wrench,
    title: 'IT support and maintenance',
    price: 'from KSh 15,000/mo',
    description:
      'Practical support for devices, systems, software issues, performance problems, updates, and everyday blockers.',
    features: ['Diagnostics', 'Maintenance', 'System updates', 'Remote support'],
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1100&q=80',
  },
  {
    icon: Cpu,
    title: 'Technology consulting',
    price: 'from KSh 20,000',
    description:
      'Clear planning for teams choosing software, improving workflows, automating tasks, or modernizing operations.',
    features: ['Digital strategy', 'Automation planning', 'Technical audits', 'Growth roadmaps'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    wide: true,
  },
];

const engagement = [
  {
    title: 'Discovery and scope',
    text: 'We clarify the business problem, agree the pages, features, and data, and put a number on it before build time is spent.',
  },
  {
    title: 'Build and launch',
    text: 'Design, development, integration, and testing in short cycles, then deployment with domains, SSL, and backups handled.',
  },
  {
    title: 'Handover and support',
    text: 'Full source code, credentials, and documentation handed over, with post-launch support options that fit your budget.',
  },
];

export default function Services() {
  return (
    <div className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
          style={{
            background: 'radial-gradient(46rem 24rem at 90% 0%, rgb(var(--signal) / 0.13), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="container-custom relative grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <Reveal className="max-w-2xl">
            <h1 className="display text-4xl text-ink sm:text-5xl">
              Build, launch, and support the systems your business depends on.
            </h1>
            <p className="section-copy mt-6 max-w-xl">
              Software development, cloud deployment, networks, and IT support from one team, so business
              systems do not fall apart between vendors.
            </p>
            <Link to="/contact" className="btn-signal mt-8">
              Request a quote
              <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
              alt="Developer workstation with application code on screen"
              className="aspect-[16/10] w-full rounded-2xl border border-line object-cover shadow-[0_24px_60px_-24px_rgb(var(--navy)/0.45)]"
              fetchpriority="high"
            />
          </Reveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-padding border-b border-line">
        <div className="container-custom">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">Choose the lane closest to the problem</h2>
            <p className="section-copy mt-4">
              Each service stands alone, but the strongest projects usually connect more than one.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {coreServices.map((service, i) => (
              <Reveal
                key={service.title}
                delay={(i % 2) * 0.06}
                className={service.featured || service.wide ? 'md:col-span-2' : ''}
              >
                <article
                  className={`lift relative h-full overflow-hidden rounded-2xl border border-white/10 p-7 text-white sm:p-8 ${
                    service.featured || service.wide ? 'sm:p-9 md:flex md:items-center md:gap-10' : ''
                  }`}
                >
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0a1120]/95 via-[#0a1120]/85 to-[#0a1120]/65"
                    aria-hidden="true"
                  />
                  <div className={`relative ${service.featured || service.wide ? 'md:flex-1' : ''}`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white/10 text-[#7dbef0] backdrop-blur-sm">
                      <service.icon size={24} />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-bold tracking-tight sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-7 text-zinc-200">{service.description}</p>
                  </div>
                  <div
                    className={`relative ${
                      service.featured || service.wide
                        ? 'mt-7 md:mt-0 md:w-72 md:flex-none md:border-l md:border-white/15 md:pl-10'
                        : ''
                    }`}
                  >
                    <ul className={`mt-5 grid gap-2.5 ${service.featured || service.wide ? 'md:mt-0' : 'sm:grid-cols-2'}`}>
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-100">
                          <Check size={16} weight="bold" className="mt-0.5 flex-none text-[#7dbef0]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="num mt-6 border-t border-white/15 pt-4 text-base font-semibold">{service.price}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="section-padding border-b border-line bg-well/50">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="section-title max-w-sm">What an engagement includes</h2>
            <p className="section-copy mt-4 max-w-sm">
              Good technical work is planning, delivery, launch, and support. We keep all four visible.
            </p>
          </Reveal>
          <div className="grid divide-y divide-line">
            {engagement.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[13rem_1fr] sm:gap-8">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">{item.title}</h3>
                  <p className="leading-7 text-ink-muted">{item.text}</p>
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
                <h2 className="display text-3xl sm:text-4xl">Not sure which service fits?</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-300">
                  Share the goal, the pressure points, and the deadline. We shape the right technical plan
                  before implementation starts.
                </p>
                <div className="mt-9 flex justify-center">
                  <Link to="/contact" className="btn-signal">
                    Request a quote
                    <ArrowRight size={16} weight="bold" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
