import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  WifiIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { initializeScrollAnimations } from '../hooks/useScrollAnimation';

const coreServices = [
  {
    icon: GlobeAltIcon,
    title: 'Custom web development',
    price: 'From KSh 50,000',
    description: 'Responsive websites, business portals, dashboards, and web applications designed to be fast, secure, and easy to manage.',
    features: ['Marketing websites', 'Web applications', 'Admin dashboards', 'API integrations'],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile app development',
    price: 'From KSh 80,000',
    description: 'Cross-platform mobile apps for customer experiences, field teams, booking flows, reporting, and business operations.',
    features: ['React Native apps', 'Android and iOS builds', 'Push notifications', 'App release support'],
  },
  {
    icon: WifiIcon,
    title: 'Network installations',
    price: 'From KSh 30,000',
    description: 'Structured cabling, Wi-Fi, routers, switches, and secure connectivity for homes, offices, and growing teams.',
    features: ['Structured cabling', 'Router setup', 'Wi-Fi optimization', 'Firewall configuration'],
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud and deployment',
    price: 'From KSh 10,000/mo',
    description: 'Reliable hosting, SSL, backups, database setup, and deployment pipelines for web and mobile products.',
    features: ['Cloud hosting', 'SSL certificates', 'Backups', 'Database support'],
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'IT support and maintenance',
    price: 'From KSh 15,000/mo',
    description: 'Ongoing support for systems, devices, software, performance issues, updates, and everyday technical blockers.',
    features: ['Diagnostics', 'Maintenance', 'System updates', 'Remote support'],
  },
  {
    icon: CpuChipIcon,
    title: 'Technology consulting',
    price: 'From KSh 20,000',
    description: 'Practical planning for teams choosing software, automating workflows, modernizing operations, or launching new products.',
    features: ['Digital strategy', 'Automation planning', 'Technical audits', 'Growth roadmaps'],
  },
];

const deliverables = [
  'Discovery and requirements workshop',
  'Responsive interface design',
  'Development and integrations',
  'Testing, deployment, and handover',
  'Post-launch support options',
];

export default function Services() {
  useEffect(() => initializeScrollAnimations(), []);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="container-custom py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center animate-on-scroll">
            <h1 className="text-5xl font-black leading-tight text-slate-950 sm:text-6xl dark:text-white">
              Everything your business needs to build, launch, and stay online.
            </h1>
            <p className="section-copy mx-auto mt-6 max-w-3xl">
              We combine software development, cloud deployment, networks, and support into one practical technology partner for Kenyan businesses.
            </p>
            <div className="mt-9 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Request a quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <article key={service.title} className="surface-card surface-card-hover animate-on-scroll flex h-full flex-col p-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 dark:bg-sky-950/40 dark:text-sky-200 dark:ring-sky-900">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-950 dark:text-white">{service.title}</h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircleIcon className="h-5 w-5 text-teal-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
                  <span className="font-extrabold text-slate-950 dark:text-white">{service.price}</span>
                  <Link to="/contact" className="btn-soft py-2">
                    Quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="animate-on-scroll">
            <h2 className="section-title">A service engagement that covers more than the build.</h2>
            <p className="section-copy mt-5">
              Good technology work is planning, delivery, launch, and support. We keep the important parts visible so you always know what is being built and why.
            </p>
          </div>

          <div className="surface-card animate-on-scroll p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                  <CheckCircleIcon className="mb-4 h-6 w-6 text-teal-600" />
                  <p className="font-bold text-slate-900 dark:text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-custom text-center">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <CodeBracketIcon className="mx-auto mb-5 h-10 w-10 text-sky-300" />
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">Let us shape the right technical plan for your next move.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Share the goal, the pressure points, and the deadline. We will help turn it into a practical build plan.
            </p>
            <Link to="/contact" className="btn-primary mt-8 bg-white text-slate-950 hover:bg-slate-100">
              Start with a quote
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
