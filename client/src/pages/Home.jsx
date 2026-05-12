import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { initializeScrollAnimations } from '../hooks/useScrollAnimation';
import ImageSequence from '../components/common/ImageSequence';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Web platforms',
    text: 'Fast marketing sites, dashboards, portals, and business web apps built around real workflows.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile apps',
    text: 'Cross-platform mobile products for internal teams, customers, and field operations.',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud & deployment',
    text: 'Hosting, SSL, backups, CI/CD, databases, and launch support without the guesswork.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'IT support',
    text: 'Network setup, diagnostics, software support, maintenance, and practical consulting.',
  },
];

const stats = [
  ['50+', 'Projects delivered'],
  ['30+', 'Clients supported'],
  ['24/7', 'Support mindset'],
  ['Kenya', 'Local presence'],
];

const process = [
  ['01', 'Discover', 'We map your goals, users, workflow, and constraints before proposing a build.'],
  ['02', 'Design', 'We shape clean interfaces and technical plans that are easy to understand and approve.'],
  ['03', 'Build', 'We develop with modern React, Node, cloud tools, and maintainable delivery practices.'],
  ['04', 'Support', 'We stay available for improvements, repairs, hosting, and growth after launch.'],
];

const heroFrames = [
  '/assets/hero-animation/transparent/frame-01.png',
  '/assets/hero-animation/transparent/frame-02.png',
  '/assets/hero-animation/transparent/frame-03.png',
  '/assets/hero-animation/transparent/frame-04.png',
];

export default function Home() {
  useEffect(() => initializeScrollAnimations(), []);

  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-slate-200 bg-[radial-gradient(circle_at_12%_8%,#dff4ff_0,transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] dark:border-slate-800 dark:bg-[radial-gradient(circle_at_18%_10%,rgba(14,165,233,0.22)_0,transparent_30%),radial-gradient(circle_at_85%_18%,rgba(20,184,166,0.12)_0,transparent_28%),linear-gradient(180deg,#020617_0%,#07111f_100%)]">
        <div className="container-custom grid min-h-[calc(100vh-7.25rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="animate-on-scroll">
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Build sharper systems for the way your business actually works.
            </h1>
            <p className="section-copy mt-7 max-w-2xl dark:text-slate-200">
              Muntek Solutions designs and develops modern websites, mobile apps, cloud deployments, and practical IT infrastructure for Kenyan businesses.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Start your project
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none">
                  <div className="text-2xl font-black text-slate-950 dark:text-white">{value}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll relative">
            <div className="relative rounded-[2rem] border border-slate-200 bg-white/40 p-4 shadow-2xl shadow-sky-950/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-sky-950/30">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_35%_20%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_82%_78%,rgba(20,184,166,0.13),transparent_28%)]" />
              <ImageSequence
                frames={heroFrames}
                alt="Muntek Solutions animated systems illustration"
                className="mx-auto max-w-[38rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center animate-on-scroll">
            <h2 className="section-title">Modern digital systems without the enterprise fog.</h2>
            <p className="section-copy mt-5">You get practical strategy, clean interfaces, dependable engineering, and support that understands the local market.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="surface-card surface-card-hover animate-on-scroll p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 dark:bg-sky-950/40 dark:text-sky-200 dark:ring-sky-900">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="animate-on-scroll">
            <h2 className="section-title">A clear path from idea to launch.</h2>
            <p className="section-copy mt-5">No mystery process. Just enough structure to keep delivery focused, visible, and ready for the real world.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {process.map(([step, title, text]) => (
              <div key={step} className="surface-card animate-on-scroll p-6">
                <div className="mb-5 text-sm font-black text-sky-700">{step}</div>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <ShieldCheckIcon className="mb-5 h-9 w-9 text-sky-300" />
                <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">Have a website, app, or IT problem that needs a serious partner?</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Tell us what you need. We will help you shape the right solution before a single line of code is written.</p>
              </div>
              <Link to="/contact" className="btn-primary bg-white text-slate-950 hover:bg-slate-100">
                Get a free quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
