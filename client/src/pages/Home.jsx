import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CloudArrowUpIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { initializeScrollAnimations } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Websites that sell the work',
    text: 'Public sites, portals, dashboards, and business apps mapped to real workflows.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile tools for the field',
    text: 'Apps for customers, staff, field teams, bookings, reporting, and daily movement.',
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Launch support that holds',
    text: 'Hosting, SSL, backups, databases, release checks, and deployment support.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'IT fixes with a plan',
    text: 'Network setup, diagnostics, software support, maintenance, and uptime planning.',
  },
];

const process = [
  ['01', 'Map the pressure', 'We identify the workflow, users, deadline, budget, and the problem that must stop costing you time.'],
  ['02', 'Shape the build', 'You get a clear interface direction, technical plan, scope, and launch path before implementation starts.'],
  ['03', 'Ship and support', 'We build, test, deploy, hand over, and stay available for hosting, repairs, improvements, and growth.'],
];

export default function Home() {
  useEffect(() => initializeScrollAnimations(), []);

  return (
    <div className="overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="relative border-b-4 border-slate-950 bg-[#eff6ff] dark:border-white dark:bg-slate-950">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(90deg,#0f172a_1px,transparent_1px),linear-gradient(180deg,#0f172a_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(180deg,#ffffff_1px,transparent_1px)]" />
        </div>

        <div className="container-custom relative grid min-h-[calc(100vh-7.25rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.95fr] lg:py-20">
          <div className="animate-on-scroll max-w-4xl">
            <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-black text-slate-800 dark:text-slate-200">
              <span className="inline-flex max-w-full items-center gap-2 border-2 border-slate-950 bg-blue-600 px-3 py-2 text-white dark:border-white dark:bg-blue-500">
                <MapPinIcon className="h-4 w-4" />
                <span className="min-w-0 break-words">Mombasa, Kenya</span>
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.96] text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl dark:text-white">
              Practical tech systems for businesses that cannot afford guesswork.
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-slate-800 dark:text-slate-200">
              MunTek Solutions builds websites, apps, deployments, and IT support plans for Kenyan teams that need working tools and clear handover.
            </p>

            <div className="mt-9">
              <Link to="/contact" className="btn-primary rounded-none border-2 border-slate-950 bg-slate-950 shadow-[6px_6px_0_#2563eb] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#2563eb] dark:border-white dark:bg-white dark:text-slate-950">
                Request a quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                Prefer a call? <a href="tel:+254715747043" className="underline decoration-2 underline-offset-4 hover:text-slate-950 dark:hover:text-white">+254 715 747 043</a>
              </p>
            </div>
          </div>

          <div className="animate-on-scroll relative">
            <div className="relative border-4 border-slate-950 bg-white p-5 shadow-[12px_12px_0_#0f172a] dark:border-white dark:bg-slate-900 dark:shadow-[12px_12px_0_#ffffff]">
              <p className="bg-slate-950 px-4 py-3 text-sm font-black text-blue-400 dark:bg-white dark:text-blue-700">FROM PROBLEM TO HANDOVER</p>
              <div className="mt-4 space-y-3">
                {process.map(([step, title, text]) => (
                  <div key={step} className="border-2 border-slate-950 bg-[#eff6ff] p-4 dark:border-white dark:bg-slate-950">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 flex-none items-center justify-center bg-blue-600 text-lg font-black text-white">
                        {step}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xl font-black text-slate-950 dark:text-white">{title}</h3>
                        <p className="mt-1 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <h2 className="section-title animate-on-scroll max-w-2xl">
              Four service lanes. One accountable technical partner.
            </h2>
            <p className="section-copy animate-on-scroll max-w-3xl lg:ml-auto">
              MunTek connects the public website, internal workflow, hosting, network, and support layer.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="group animate-on-scroll border-2 border-slate-950 bg-[#eff6ff] p-6 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#0f172a] dark:border-white dark:bg-slate-900 dark:hover:shadow-[8px_8px_0_#ffffff]">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 flex-none items-center justify-center bg-slate-950 text-blue-400 dark:bg-white dark:text-slate-950">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-black leading-tight text-slate-950 dark:text-white">{service.title}</h3>
                    <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">{service.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="border-4 border-slate-950 bg-slate-950 p-8 text-white shadow-[10px_10px_0_#2563eb] dark:border-white sm:p-10 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <ShieldCheckIcon className="mb-5 h-10 w-10 text-blue-400" />
                <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl">Bring the problem. Leave with a practical next step.</h2>
                <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-slate-300">
                  Tell us what you need built, fixed, hosted, or supported. We will turn it into a clear technical path.
                </p>
              </div>
              <Link to="/contact" className="btn-primary rounded-none border-2 border-white bg-white text-slate-950 shadow-none hover:bg-white hover:text-slate-950">
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
