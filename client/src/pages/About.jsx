import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { initializeScrollAnimations } from '../hooks/useScrollAnimation';
import { HeroBackdrop } from '../components/common/BlueprintArt';

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
    <div className="bg-paper text-ink">
      <section className="page-hero">
        <HeroBackdrop variant="about" />
        <div className="page-hero-grid">
          <div className="animate-on-scroll in-view">
            <p className="spec mb-6"><span className="spec-signal">FIG. 02</span> &nbsp;About MunTek</p>
            <h1 className="display max-w-3xl text-[clamp(2.4rem,5.4vw,4.25rem)] text-ink">
              A compact Kenyan team for practical digital systems.
            </h1>
          </div>
          <div className="animate-on-scroll in-view max-w-2xl lg:ml-auto">
            <p className="section-copy">
              MunTek Solutions works across websites, mobile apps, cloud deployment, networks, and support.
              The goal is simple: build systems Kenyan businesses can understand, use, and maintain.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-signal">
                Request a quote
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-outline">View services</Link>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-ink-muted">
              Tell us what you need; we'll reply with next steps, a cost range, or a better route.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-line">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="animate-on-scroll">
            <h2 className="section-title tick-rule inline-block max-w-sm">Built around the work after launch</h2>
          </div>
          <div className="animate-on-scroll grid gap-4 text-lg leading-8 text-ink-muted">
            <p>
              MunTek started with a simple belief: businesses deserve technology that is clear, well-built,
              and reachable when support is needed.
            </p>
            <p>
              What began as website and application development now includes mobile apps, networks, cloud
              deployment, technical support, and consulting.
            </p>
            <p>
              We keep projects grounded in the people using the system, the environment it runs in, and the
              support needed after handover.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-line bg-well/40">
        <div className="container-custom">
          <header className="mb-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div className="animate-on-scroll">
              <h2 className="section-title tick-rule inline-block max-w-sm">How we work before anything goes live</h2>
            </div>
            <p className="section-copy animate-on-scroll max-w-2xl lg:ml-auto lg:pb-1">
              A useful system is not just designed and shipped. It is scoped, checked, deployed, handed over,
              and supported in a way the business can live with.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="animate-on-scroll panel p-6 sm:p-7">
              <p className="spec mb-6 text-ink">Our handover standard</p>
              <ol className="grid gap-5">
                {deliverySteps.map((step, index) => (
                  <li key={step.title} className="grid gap-4 border-t border-line pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[3rem_1fr]">
                    <span className="num flex h-11 w-11 items-center justify-center border border-ink bg-paper text-sm font-semibold text-ink">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold tracking-tight text-ink">{step.title}</h3>
                      <p className="mt-1.5 leading-7 text-ink-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="animate-on-scroll registered border border-ink bg-ink p-6 text-paper sm:p-7">
              <p className="spec mb-6 text-paper/70">Pre-launch checklist</p>
              <ul className="grid gap-2.5">
                {launchChecks.map((item) => (
                  <li key={item} className="flex gap-3 border border-paper/15 px-4 py-3.5 text-sm leading-6 text-paper/85">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-signal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-line">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="animate-on-scroll">
              <h2 className="section-title tick-rule inline-block max-w-sm">What we protect you from</h2>
              <p className="section-copy mt-7 max-w-md">
                Growing businesses do not need extra complexity. They need clear scope, dependable launch
                work, and a system that can be adjusted later.
              </p>
            </div>
            <div className="animate-on-scroll panel divide-y divide-line">
              {protectionItems.map((item, i) => (
                <article key={item.title} className="grid gap-3 px-6 py-6 sm:grid-cols-[14rem_1fr]">
                  <h3 className="flex items-baseline gap-3 font-heading text-lg font-bold tracking-tight text-ink">
                    <span className="num text-xs text-signal-strong">{String(i + 1).padStart(2, '0')}</span>
                    {item.title}
                  </h3>
                  <p className="leading-7 text-ink-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-line bg-well/40">
        <div className="container-custom">
          <header className="mb-12 flex flex-col gap-4 animate-on-scroll lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="section-title tick-rule inline-block">People behind the build</h2>
            </div>
            <p className="section-copy max-w-xl">A compact team with hands-on ownership across strategy, development, delivery, and support.</p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="panel animate-on-scroll grid gap-6 p-6 sm:grid-cols-[9rem_1fr]">
                <TeamAvatar name={member.name} role={member.role} photo={member.photo} />
                <div className="min-w-0">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-ink">{member.name}</h3>
                  <p className="spec mt-2 text-signal-strong">{member.role}</p>
                  <p className="mt-4 leading-7 text-ink-muted">{member.bio}</p>
                  <p className="mt-4 border border-line bg-well px-4 py-3 text-sm leading-6 text-ink">
                    <span className="spec mr-1 text-ink-muted">Owns</span> {member.ownership}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="chip bg-surface">{skill}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="animate-on-scroll">
            <h2 className="section-title">What we bring to each project</h2>
            <p className="section-copy mt-5 max-w-xl">
              A focused blend of development, IT support, and practical business thinking.
            </p>
          </div>
          <div className="animate-on-scroll grid gap-px border border-line bg-line sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="flex min-w-0 items-center gap-3 bg-surface px-5 py-5 font-medium text-ink">
                <CheckIcon className="h-5 w-5 flex-none text-signal-strong" />
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
    <div className="registered relative aspect-square w-full max-w-[9rem] border border-ink bg-well p-3">
      <div className="flex h-full flex-col justify-end">
        {photo ? (
          <img src={photo} alt={name} className="mb-3 h-16 w-16 border border-ink object-cover" />
        ) : (
          <div className="num mb-3 flex h-14 w-14 items-center justify-center bg-ink text-xl font-semibold text-paper">
            {initials}
          </div>
        )}
        <p className="text-sm font-bold text-ink">{name}</p>
        <p className="spec mt-1 text-[0.58rem]">{role}</p>
      </div>
    </div>
  );
}
