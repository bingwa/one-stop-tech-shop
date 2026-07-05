import { useState } from 'react';
import { ArrowRight, Buildings, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import Reveal from '../components/common/Reveal';
import Seo from '../components/common/Seo';

const serviceOptions = [
  'Web development',
  'Mobile app development',
  'Network installation',
  'Cloud or deployment',
  'IT support',
  'Technology consulting',
  'Not sure yet',
];

const nextSteps = [
  'We review the request and clarify missing details.',
  'You get a practical next step, quote direction, or support path.',
  'If the fit is right, we agree scope before build work starts.',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web development',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');

  const api = import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api/contact`
    : '/api/contact';

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setNotice('');

    try {
      const res = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Server error');
      }

      setNotice('Message sent. We will review it and get back to you with a practical next step.');
      setForm({
        name: '',
        email: '',
        phone: '',
        service: 'Web development',
        message: '',
      });
    } catch (error) {
      setNotice(`Could not send the message: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const isSuccess = notice.startsWith('Message sent');

  return (
    <div className="bg-paper text-ink">
      <Seo
        title="Contact MunTek Solutions | IT Support & Project Quotes in Kenya"
        description="Request a quote for web development, mobile apps, networks, or IT support in Kenya. Call +254 715 747 043 or send the form. Replies the same business day."
        path="/contact"
      />
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
              Tell us what needs to be built, fixed, or supported.
            </h1>
            <p className="section-copy mt-6 max-w-xl">
              One form for project inquiries, support requests, and quotes. Clear details help us respond
              with a useful next step.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1600&q=80"
              alt="Two people working through a request at a service counter"
              className="aspect-[16/10] w-full rounded-2xl border border-line object-cover shadow-[0_24px_60px_-24px_rgb(var(--navy)/0.45)]"
              fetchpriority="high"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="panel self-start p-6 sm:p-8">
              <div className="mb-8 border-b border-line pb-6">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Request a quote</h2>
                <p className="mt-3 leading-7 text-ink-muted">
                  Share the essentials: what you need, the pressure point, timing, and what success should
                  look like.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
                <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} autoComplete="tel" />
                <div>
                  <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="service">Service</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    className="field"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="message">
                  Project details <span className="text-signal-strong">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={onChange}
                  required
                  aria-required="true"
                  className="field resize-y"
                  placeholder="What do you need, when do you need it, and what should the finished solution help you achieve?"
                />
              </div>

              <button type="submit" disabled={loading} className="btn-signal mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? 'Sending message...' : 'Send message'}
                <ArrowRight size={16} weight="bold" />
              </button>

              <div aria-live="polite" aria-atomic="true">
                {notice && (
                  <p
                    className={`mt-4 rounded-[10px] border px-4 py-3 text-sm font-medium leading-6 ${
                      isSuccess
                        ? 'border-signal/40 bg-signal/10 text-ink'
                        : 'border-red-600 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200'
                    }`}
                  >
                    {notice}
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="panel p-6 sm:p-7">
                <h2 className="font-heading text-lg font-bold tracking-tight text-ink">What happens next</h2>
                <ol className="mt-5 space-y-5">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex min-w-0 gap-4">
                      <span className="num flex h-8 w-8 flex-none items-center justify-center rounded-full bg-signal/10 text-sm font-bold text-signal-strong">
                        {index + 1}
                      </span>
                      <span className="min-w-0 leading-7 text-ink-muted">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="panel p-6 sm:p-7">
                <h2 className="font-heading text-lg font-bold tracking-tight text-ink">Contact details</h2>
                <div className="mt-5 divide-y divide-line">
                  <InfoLine icon={Phone} heading="Phone" text="+254 715 747 043" link="tel:+254715747043" />
                  <InfoLine icon={EnvelopeSimple} heading="Email" text="munteksolutions@gmail.com" link="mailto:munteksolutions@gmail.com" />
                  <InfoLine icon={Buildings} heading="Office" text="Moi Avenue opposite Equity Bank, Mombasa" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="panel overflow-hidden">
                <iframe
                  title="Mombasa office map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12891.884369239197!2d39.6627589!3d-4.0575138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012719a4e4871%3A0x57f7b9e6f6bb4f6e!2sEquity%20Bank%2C%20Moi%20Ave%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1695123456789!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = 'text', value, onChange, required = false, autoComplete }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-ink" htmlFor={name}>
        {label}
        {required && <span className="text-signal-strong"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required || undefined}
        autoComplete={autoComplete}
        className="field"
      />
    </div>
  );
}

function InfoLine({ icon, heading, text, link }) {
  const Icon = icon;

  const content = (
    <>
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] bg-signal/10 text-signal-strong">
        <Icon size={20} />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm text-ink-muted">{heading}</h3>
        <p className="mt-0.5 break-words font-semibold text-ink">{text}</p>
      </div>
    </>
  );

  return link ? (
    <a href={link} className="flex min-w-0 items-center gap-4 py-4 transition-colors first:pt-0 last:pb-0 hover:text-signal-strong">
      {content}
    </a>
  ) : (
    <div className="flex min-w-0 items-center gap-4 py-4 first:pt-0 last:pb-0">{content}</div>
  );
}
