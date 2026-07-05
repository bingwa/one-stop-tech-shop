import { Link } from 'react-router-dom';
import { ArrowRight, Check } from '@phosphor-icons/react';
import Reveal from '../components/common/Reveal';

const workingPrinciples = [
  {
    title: 'Clarify the business problem',
    text: 'We start with the workflow, users, budget, and support needs before choosing the build approach.',
  },
  {
    title: 'Map pages and features early',
    text: 'The idea becomes a practical scope: screens, forms, data, integrations, hosting, and handover needs.',
  },
  {
    title: 'Build for maintenance',
    text: 'We keep the system understandable, test the important paths, and avoid choices that make future support harder.',
  },
  {
    title: 'Launch with support in place',
    text: 'Mobile and desktop checked, deployment set up properly, access handed over, and we stay available after go-live.',
  },
];

const protectionItems = [
  {
    title: 'Unclear scope',
    text: 'We write down what is included, what can wait, and what needs a separate phase, so guesswork never drives the budget.',
  },
  {
    title: 'Fragile launches',
    text: 'Deployment, domains, hosting, forms, and device checks are handled as real delivery tasks, not last-minute chores.',
  },
  {
    title: 'Hard-to-support systems',
    text: 'Structure, access, and documentation stay clear so updates and fixes do not depend on anyone’s memory.',
  },
];

const team = [
  {
    name: 'Brian Munyao',
    role: 'Founder and Lead Developer',
    photo: '/assets/DP.jpg',
    skills: ['Web apps', 'Architecture', 'Databases', 'Deployments'],
    bio: 'Brian turns business workflows into web applications, dashboards, and maintainable systems that can be supported long after launch.',
  },
  {
    name: 'Nathan Munyao',
    role: 'Founder and CEO',
    skills: ['Mobile apps', 'Client coordination', 'QA testing', 'Operations'],
    bio: 'Nathan keeps the work tied to the business need, the people using the system, and the practical steps needed to get it live.',
  },
];

export default function About() {
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
              A compact Kenyan team for practical digital systems.
            </h1>
            <p className="section-copy mt-6 max-w-xl">
              MunTek Solutions works across websites, mobile apps, cloud deployment, networks, and support.
              The goal is simple: systems Kenyan businesses can understand, use, and maintain.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-signal">
                Request a quote
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link to="/services" className="btn-outline">View services</Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Team working together around a table of laptops"
              className="aspect-[16/10] w-full rounded-2xl border border-line object-cover shadow-[0_24px_60px_-24px_rgb(var(--navy)/0.45)]"
              fetchpriority="high"
            />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding border-b border-line">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <h2 className="section-title max-w-sm">Built around the work after launch</h2>
          </Reveal>
          <Reveal delay={0.08} className="grid max-w-2xl gap-4 text-lg leading-8 text-ink-muted">
            <p>
              MunTek started with a simple belief: businesses deserve technology that is clear, well built,
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
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding border-b border-line bg-well/50">
        <div className="container-custom">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">How we work before anything goes live</h2>
            <p className="section-copy mt-4">
              A useful system is scoped, checked, deployed, handed over, and supported in a way the business
              can live with.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {workingPrinciples.map((step, i) => (
              <Reveal key={step.title} delay={(i % 2) * 0.06}>
                <article className="panel h-full p-7">
                  <h3 className="font-heading text-xl font-bold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-3 leading-7 text-ink-muted">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we protect you from */}
      <section className="section-padding border-b border-line">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="section-title max-w-sm">What we protect you from</h2>
            <p className="section-copy mt-4 max-w-sm">
              Growing businesses do not need extra complexity. They need clear scope, a dependable launch,
              and a system that can be adjusted later.
            </p>
          </Reveal>
          <div className="grid divide-y divide-line">
            {protectionItems.map((item, i) => (
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

      {/* Team */}
      <section className="section-padding border-b border-line bg-well/50">
        <div className="container-custom">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">The people behind the build</h2>
            <p className="section-copy mt-4">
              A compact team with hands-on ownership across strategy, development, delivery, and support.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.07}>
                <article className="lift panel h-full p-7 sm:p-8">
                  <div className="flex items-center gap-5">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`Portrait of ${member.name}`}
                        loading="lazy"
                        className="h-20 w-20 flex-none rounded-2xl border border-line object-cover"
                      />
                    ) : (
                      <span className="flex h-20 w-20 flex-none items-center justify-center rounded-2xl bg-signal/10 font-heading text-2xl font-bold text-signal-strong">
                        {member.name.split(' ').map((part) => part[0]).join('')}
                      </span>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-ink">{member.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-signal-strong">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-ink-muted">{member.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="chip">{skill}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + CTA */}
      <section className="section-padding">
        <div className="container-custom grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <h2 className="section-title max-w-md">What we bring to each project</h2>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Modern web and mobile builds', 'Cloud launch support', 'Network and device knowledge', 'Clear post-launch support'].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-medium text-ink">
                  <Check size={18} weight="bold" className="mt-1 flex-none text-signal-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl bg-[#0b1220] p-8 text-white sm:p-10">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: 'radial-gradient(26rem 16rem at 100% 120%, rgb(59 148 218 / 0.35), transparent 70%)',
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="display text-2xl sm:text-3xl">Tell us what you need.</h3>
                <p className="mt-4 leading-7 text-zinc-300">
                  We reply the same business day with next steps, a cost range, or a better route.
                </p>
                <Link to="/contact" className="btn-signal mt-7">
                  Request a quote
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
