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
    price: 'Starting at KSh 50,000',
    description: 'Websites, portals, dashboards, and web apps that help customers inquire, teams operate, and owners see the work clearly.',
    features: ['Marketing websites', 'Business portals', 'Admin dashboards', 'API integrations'],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile app development',
    price: 'Starting at KSh 80,000',
    description: 'Mobile tools for bookings, reporting, customer access, field teams, and operations that need to move outside the office.',
    features: ['React Native apps', 'Android and iOS builds', 'Push notifications', 'Release support'],
  },
  {
    icon: WifiIcon,
    title: 'Network installations',
    price: 'Starting at KSh 30,000',
    description: 'Connectivity planning and setup for homes, offices, and growing teams that need stable access and cleaner support.',
    features: ['Structured cabling', 'Router setup', 'Wi-Fi optimization', 'Firewall configuration'],
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud and deployment',
    price: 'Starting at KSh 10,000/mo',
    description: 'Hosting, SSL, backups, databases, and launch checks so your website or app stays reachable after handover.',
    features: ['Cloud hosting', 'SSL certificates', 'Backups', 'Database support'],
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'IT support and maintenance',
    price: 'Starting at KSh 15,000/mo',
    description: 'Practical support for devices, systems, software issues, performance problems, updates, and everyday blockers.',
    features: ['Diagnostics', 'Maintenance', 'System updates', 'Remote support'],
  },
  {
    icon: CpuChipIcon,
    title: 'Technology consulting',
    price: 'Starting at KSh 20,000',
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
    <div className="bg-white dark:bg-slate-950">
      <section className="page-hero">
        <div className="page-hero-grid">
          <div className="animate-on-scroll">
            <span className="brand-chip">Services</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Build, launch, and support the systems your business depends on.
            </h1>
          </div>
          <div className="animate-on-scroll max-w-3xl lg:ml-auto">
            <p className="section-copy">
              MunTek combines software development, cloud deployment, networks, and IT support so business systems do not fall apart between vendors.
            </p>
            <div className="mt-8 border-4 border-slate-950 bg-white p-4 shadow-[8px_8px_0_#0f172a] dark:border-white dark:bg-slate-900 dark:shadow-[8px_8px_0_#ffffff]">
              <p className="bg-slate-950 px-4 py-3 text-sm font-black text-blue-400 dark:bg-white dark:text-slate-950">SERVICE STACK</p>
              <div className="mt-4 grid gap-3">
                {serviceStack.map(([step, title, text]) => (
                  <div key={step} className="grid gap-3 border-2 border-slate-950 bg-[#eff6ff] p-4 dark:border-white dark:bg-slate-950 sm:grid-cols-[3.5rem_1fr]">
                    <span className="flex h-11 w-11 items-center justify-center bg-blue-600 text-sm font-black text-white">{step}</span>
                    <div className="min-w-0">
                      <h2 className="text-lg font-black text-slate-950 dark:text-white">{title}</h2>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/contact" className="btn-primary mt-8">
              Request a quote
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <h2 className="section-title animate-on-scroll max-w-2xl">Choose the lane closest to the problem.</h2>
            <p className="section-copy animate-on-scroll max-w-3xl lg:ml-auto">
              Each service can stand alone, but the strongest projects usually connect more than one layer.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <article key={service.title} className="surface-card surface-card-hover animate-on-scroll flex h-full min-w-0 flex-col p-6">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="brand-icon">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-black leading-none text-slate-200 dark:text-slate-700">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">{service.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-700 dark:text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex min-w-0 items-start gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-blue-700 dark:text-blue-300" />
                      <span className="min-w-0">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t-2 border-slate-950 pt-5 dark:border-white">
                  <span className="font-black text-slate-950 dark:text-white">{service.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y-4 border-slate-950 bg-[#eff6ff] dark:border-white dark:bg-slate-900">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="animate-on-scroll">
            <h2 className="section-title">What a service engagement includes.</h2>
            <p className="section-copy mt-5">
              Good technical work is planning, delivery, launch, and support. We keep those parts visible so you know what is being built and why.
            </p>
          </div>

          <div className="grid gap-3">
            {deliverables.map((item) => (
              <div key={item} className="animate-on-scroll flex min-w-0 items-start gap-3 border-2 border-slate-950 bg-white p-4 font-bold text-slate-800 dark:border-white dark:bg-slate-950 dark:text-slate-200">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-blue-700 dark:text-blue-300" />
                <span className="min-w-0">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-custom text-left">
          <div className="animate-on-scroll grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <CodeBracketIcon className="mb-5 h-10 w-10 text-blue-400" />
              <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Start with the business problem.</h2>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-300">
                Not sure which service fits? Share the goal, pressure points, and deadline. We will shape the right technical plan before implementation starts.
              </p>
            </div>
            <Link to="/contact" className="btn-primary border-white bg-white text-slate-950 shadow-none hover:bg-white">
              Request a quote
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
