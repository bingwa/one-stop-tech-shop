import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { initializeScrollAnimations } from '../hooks/useScrollAnimation';
import ImageSequence from '../components/common/ImageSequence';

const values = [
  {
    icon: LightBulbIcon,
    title: 'Practical innovation',
    text: 'We choose modern tools because they solve real problems, not because they look impressive on a proposal.',
  },
  {
    icon: HeartIcon,
    title: 'Client-first delivery',
    text: 'We listen closely, communicate clearly, and build around the business outcome you actually need.',
  },
  {
    icon: TrophyIcon,
    title: 'Reliable quality',
    text: 'We care about clean interfaces, stable code, secure forms, and handovers that make sense.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Long-term support',
    text: 'Launch is not the end. We help maintain, improve, and support systems as your team grows.',
  },
];

const team = [
  {
    name: 'Brian Munyao',
    role: 'Founder & Lead Developer',
    photo: '/assets/DP.jpg',
    skills: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Supabase'],
    bio: 'Brian leads full-stack delivery, turning business workflows into web applications, dashboards, and dependable digital products.',
  },
  {
    name: 'Nathan Munyao',
    role: 'Founder & CEO',
    skills: ['React Native', 'Flutter', 'Strategy', 'Operations'],
    bio: 'Nathan guides mobile delivery, client strategy, and the practical operations that keep projects moving from idea to launch.',
  },
];

const aboutFrames = [
  '/assets/about-animation/transparent/frame-01.png',
  '/assets/about-animation/transparent/frame-02.png',
  '/assets/about-animation/transparent/frame-03.png',
  '/assets/about-animation/transparent/frame-04.png',
];

export default function About() {
  useEffect(() => initializeScrollAnimations(), []);

  return (
    <div>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="container-custom grid gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-28">
          <div className="animate-on-scroll">
            <h1 className="text-5xl font-black leading-tight text-slate-950 sm:text-6xl dark:text-white">
              A Kenyan technology partner for teams that need useful systems.
            </h1>
            <p className="section-copy mt-6">
              We are developers, problem solvers, and IT practitioners based in Kenya. Our work spans custom software, mobile apps, cloud deployment, networks, and hands-on support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/services" className="btn-primary">
                View services
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary">Talk to us</Link>
            </div>
          </div>

          <AboutHeroSequence />
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="animate-on-scroll">
            <h2 className="section-title">From web development to complete IT solutions.</h2>
          </div>
          <div className="animate-on-scroll space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <p>
              Muntek Solutions started with a simple belief: Kenyan businesses deserve technology that is clear, well-built, and reachable when support is needed.
            </p>
            <p>
              What began as website and application development has grown into a broader service covering mobile apps, networks, cloud deployment, technical support, and consulting.
            </p>
            <p>
              We keep our work grounded in real business needs. That means understanding the people using the system, the environment it runs in, and the support required after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="mx-auto mb-14 max-w-3xl text-center animate-on-scroll">
            <h2 className="section-title">The principles behind the work.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="surface-card surface-card-hover animate-on-scroll p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 dark:bg-sky-950/40 dark:text-sky-200 dark:ring-sky-900">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-custom">
          <div className="mb-14 flex flex-col gap-4 animate-on-scroll lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="section-title">People behind the build.</h2>
            </div>
            <p className="section-copy max-w-2xl">A compact team with hands-on ownership across strategy, design, development, and support.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="surface-card animate-on-scroll grid gap-6 p-6 sm:grid-cols-[10rem_1fr]">
                <TeamAvatar name={member.name} role={member.role} photo={member.photo} />
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">{member.name}</h3>
                  <p className="mt-1 font-bold text-sky-700 dark:text-sky-300">{member.role}</p>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{member.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700 ring-1 ring-slate-200 dark:bg-slate-950 dark:text-slate-200 dark:ring-slate-800">
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

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom">
          <div className="surface-card animate-on-scroll p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <h2 className="section-title">What we bring to each project.</h2>
                <p className="section-copy mt-5">A focused blend of development, IT support, and practical business thinking.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Modern web and mobile builds', 'Cloud launch support', 'Network and device knowledge', 'Clear post-launch support'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                    <CheckCircleIcon className="h-5 w-5 text-teal-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutHeroSequence() {
  return (
    <div className="surface-card animate-on-scroll overflow-hidden border-sky-100 bg-white/40 p-4 shadow-2xl shadow-sky-950/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-sky-950/30">
      <div className="relative overflow-hidden rounded-[2rem] p-2">
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_10%,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(20,184,166,0.14),transparent_24%)]" />
        <ImageSequence
          frames={aboutFrames}
          alt="Muntek Solutions systems overview illustration"
          className="mx-auto max-w-[34rem]"
        />
      </div>
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
    <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_25%_20%,rgba(14,165,233,0.22),transparent_32%),linear-gradient(135deg,#ffffff,#f1f5f9)] p-4 dark:border-white/10 dark:bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.20),transparent_32%),linear-gradient(135deg,#020617,#111827)]">
      <div className="flex h-full flex-col justify-end">
        {photo ? (
          <img src={photo} alt={name} className="mb-4 h-20 w-20 rounded-2xl object-cover shadow-lg ring-1 ring-slate-200 dark:ring-white/10" />
        ) : (
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-black text-white shadow-lg dark:bg-white dark:text-slate-950">
            {initials}
          </div>
        )}
        <p className="text-sm font-black text-slate-950 dark:text-white">{name}</p>
        <p className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400">{role}</p>
      </div>
    </div>
  );
}
