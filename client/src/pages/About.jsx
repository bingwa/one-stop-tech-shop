import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { initializeScrollAnimations } from '../hooks/useScrollAnimation';

const deliverySteps = [
  {
    title: 'Clarify the business problem',
    text: 'We start with the workflow, users, budget, and support needs before choosing the build approach.',
  },
  {
    title: 'Map the required pages and features',
    text: 'We turn the idea into a practical scope: screens, forms, data, integrations, hosting, and handover needs.',
  },
  {
    title: 'Build for maintenance',
    text: 'We keep the system understandable, test the important paths, and avoid choices that make future support harder.',
  },
  {
    title: 'Launch with access and support in place',
    text: 'We check mobile and desktop, set up deployment properly, hand over access, and stay available after launch.',
  },
];

const launchChecks = [
  'The business problem is clear before build time is spent.',
  'Pages, features, forms, and data flows are agreed early.',
  'Mobile and desktop layouts are checked before go-live.',
  'Hosting, domains, deployment, and backups are treated as part of delivery.',
  'Access, credentials, and documentation are handed over in a usable way.',
  'Support expectations are discussed before the project is considered complete.',
];

const protectionItems = [
  {
    title: 'Unclear scope',
    text: 'We reduce guesswork by writing down what is included, what can wait, and what needs a separate phase.',
  },
  {
    title: 'Fragile launches',
    text: 'Deployment, domains, hosting, forms, and device checks are handled as real delivery tasks, not last-minute chores.',
  },
  {
    title: 'Hard-to-support systems',
    text: 'We keep structure, access, and documentation clear so updates and fixes do not depend on memory.',
  },
];

const team = [
  {
    name: 'Brian Munyao',
    role: 'Founder & Lead Developer',
    photo: '/assets/DP.jpg',
    skills: ['Web apps', 'Architecture', 'Databases', 'Deployments', 'Support'],
    ownership: 'Architecture, backend delivery, web application builds, database structure, deployment, and technical handover.',
    bio: 'Brian turns business workflows into web applications, dashboards, and maintainable systems that can be supported after launch.',
  },
  {
    name: 'Nathan Munyao',
    role: 'Founder & CEO',
    skills: ['Mobile apps', 'Client coordination', 'Product thinking', 'QA testing', 'Operations'],
    ownership: 'Client coordination, mobile delivery, product decisions, QA review, and keeping each project moving through launch.',
    bio: 'Nathan keeps the work tied to the business need, the people using the system, and the practical steps needed to get it live.',
  },
];

const capabilities = [
  'Modern web and mobile builds',
  'Cloud launch support',
  'Network and device knowledge',
  'Clear post-launch support',
];

export default function About() {
  useEffect(() => initializeScrollAnimations(), []);

  return (
    <div className="bg-white dark:bg-slate-950">
      <section className="page-hero">
        <div className="page-hero-grid">
          <div className="animate-on-scroll">
            <span className="brand-chip">About MunTek</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              A compact Kenyan team for practical digital systems.
            </h1>
          </div>
          <div className="animate-on-scroll max-w-3xl lg:ml-auto">
            <p className="section-copy">
              MunTek Solutions works across websites, mobile apps, cloud deployment, networks, and support. The goal is simple: build systems Kenyan businesses can understand, use, and maintain.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Request a quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary">View services</Link>
            </div>
            <p className="mt-4 max-w-2xl text-sm font-bold leading-6 text-slate-700 dark:text-slate-300">
              Tell us what you need; we'll reply with next steps, a cost range, or a better route.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="animate-on-scroll">
            <h2 className="section-title max-w-xl">Built around the work after launch.</h2>
          </div>
          <div className="animate-on-scroll grid gap-4 text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
            <p>
              MunTek started with a simple belief: businesses deserve technology that is clear, well-built, and reachable when support is needed.
            </p>
            <p>
              What began as website and application development now includes mobile apps, networks, cloud deployment, technical support, and consulting.
            </p>
            <p>
              We keep projects grounded in the people using the system, the environment it runs in, and the support needed after handover.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-y-4 border-slate-950 bg-[#eff6ff] dark:border-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <h2 className="section-title animate-on-scroll max-w-2xl">How we work before anything goes live.</h2>
            <p className="section-copy animate-on-scroll max-w-3xl lg:ml-auto">
              A useful system is not just designed and shipped. It is scoped, checked, deployed, handed over, and supported in a way the business can live with.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="animate-on-scroll border-2 border-slate-950 bg-white p-6 dark:border-white dark:bg-slate-950">
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">Our handover standard</h3>
              <div className="mt-6 grid gap-5">
                {deliverySteps.map((step, index) => (
                  <article key={step.title} className="grid gap-4 border-t-2 border-slate-950 pt-5 sm:grid-cols-[3.5rem_1fr] dark:border-white">
                    <span className="flex h-12 w-12 items-center justify-center bg-slate-950 text-lg font-black text-blue-400 dark:bg-white dark:text-slate-950">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-xl font-black text-slate-950 dark:text-white">{step.title}</h4>
                      <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll bg-slate-950 p-6 text-white dark:border-2 dark:border-white">
              <h3 className="text-2xl font-black">What we check before go-live</h3>
              <ul className="mt-6 grid gap-3">
                {launchChecks.map((item) => (
                  <li key={item} className="flex gap-3 border border-white/20 bg-white/5 p-4 text-sm font-bold leading-6 text-slate-100">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="animate-on-scroll">
              <h2 className="section-title max-w-xl">What we protect you from.</h2>
              <p className="section-copy mt-5 max-w-xl">
                Growing businesses do not need extra complexity. They need clear scope, dependable launch work, and a system that can be adjusted later.
              </p>
            </div>
            <div className="animate-on-scroll grid gap-0 border-2 border-slate-950 bg-[#eff6ff] dark:border-white dark:bg-slate-900">
              {protectionItems.map((item) => (
                <article key={item.title} className="grid gap-3 border-b-2 border-slate-950 p-5 last:border-b-0 sm:grid-cols-[12rem_1fr] dark:border-white">
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="leading-7 text-slate-700 dark:text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t-2 border-slate-950 bg-white dark:border-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="mb-12 flex flex-col gap-4 animate-on-scroll lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="section-title">People behind the build.</h2>
            </div>
            <p className="section-copy max-w-2xl">A compact team with hands-on ownership across strategy, development, delivery, and support.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="surface-card animate-on-scroll grid gap-6 p-6 sm:grid-cols-[10rem_1fr]">
                <TeamAvatar name={member.name} role={member.role} photo={member.photo} />
                <div className="min-w-0">
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">{member.name}</h3>
                  <p className="mt-1 font-bold text-blue-700 dark:text-blue-300">{member.role}</p>
                  <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{member.bio}</p>
                  <p className="mt-4 border-2 border-slate-950 bg-[#eff6ff] p-4 text-sm font-bold leading-6 text-slate-800 dark:border-white dark:bg-slate-950 dark:text-slate-200">
                    Owns: {member.ownership}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="border border-slate-950 bg-white px-3 py-1 text-xs font-bold text-slate-800 dark:border-white dark:bg-slate-950 dark:text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="animate-on-scroll">
            <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl">What we bring to each project.</h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-300">
              A focused blend of development, IT support, and practical business thinking.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="animate-on-scroll flex min-w-0 items-center gap-3 border border-white/20 bg-white/5 p-4 font-bold text-slate-200">
                <CheckCircleIcon className="h-5 w-5 flex-none text-blue-400" />
                <span className="min-w-0">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamAvatar({ name, role, photo }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="relative h-40 w-40 overflow-hidden border-2 border-slate-950 bg-[#eff6ff] p-4 dark:border-white dark:bg-slate-950">
      <div className="flex h-full flex-col justify-end">
        {photo ? (
          <img src={photo} alt={name} className="mb-4 h-20 w-20 object-cover ring-2 ring-slate-950 dark:ring-white" />
        ) : (
          <div className="mb-4 flex h-16 w-16 items-center justify-center bg-slate-950 text-2xl font-black text-white dark:bg-white dark:text-slate-950">
            {initials}
          </div>
        )}
        <p className="text-sm font-black text-slate-950 dark:text-white">{name}</p>
        <p className="mt-1 text-xs font-bold text-slate-600 dark:text-slate-400">{role}</p>
      </div>
    </div>
  );
}
