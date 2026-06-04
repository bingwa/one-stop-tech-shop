import { useState } from 'react';
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

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
    <div className="bg-white dark:bg-slate-950">
      <section className="page-hero">
        <div className="page-hero-grid">
          <div>
            <span className="brand-chip">Contact</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Tell us what needs to be built, fixed, or supported.
            </h1>
          </div>
          <div className="max-w-3xl lg:ml-auto">
            <p className="section-copy">
              Use one form for project inquiries, support requests, and quote conversations. Clear details help us respond with a useful next step.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container-custom grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={onSubmit} className="surface-card self-start p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-950 dark:text-white">Request a quote</h2>
              <p className="mt-3 leading-7 text-slate-700 dark:text-slate-300">
                Share the essentials: what you need, the pressure point, timing, and what success should look like.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} autoComplete="tel" />
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="brand-input"
                >
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={onChange}
                required
                className="brand-input resize-y"
                placeholder="What do you need, when do you need it, and what should the finished solution help you achieve?"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? 'Sending message...' : 'Send message'}
              <ArrowRightIcon className="h-4 w-4" />
            </button>

            <div aria-live="polite" aria-atomic="true">
              {notice && (
                <p className={`mt-4 border-2 p-3 text-center text-sm font-bold ${isSuccess ? 'border-blue-700 bg-blue-50 text-blue-950 dark:border-blue-300 dark:bg-blue-950 dark:text-blue-100' : 'border-red-700 bg-red-50 text-red-900 dark:border-red-300 dark:bg-red-950 dark:text-red-100'}`}>
                  {notice}
                </p>
              )}
            </div>
          </form>

          <aside className="space-y-5">
            <div className="surface-card p-6 sm:p-8">
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">What happens next</h2>
              <ol className="mt-6 space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex min-w-0 gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center bg-blue-600 text-sm font-black text-white">0{index + 1}</span>
                    <span className="min-w-0 font-semibold leading-7 text-slate-700 dark:text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">Contact details</h2>
              <div className="mt-6 space-y-5">
                <InfoLine icon={PhoneIcon} heading="Phone" text="+254 715 747 043" link="tel:+254715747043" />
                <InfoLine icon={EnvelopeIcon} heading="Email" text="munteksolutions@gmail.com" link="mailto:munteksolutions@gmail.com" />
                <InfoLine icon={BuildingOffice2Icon} heading="Office" text="Moi Avenue opposite Equity Bank, Mombasa" />
              </div>
            </div>

            <div className="surface-card overflow-hidden">
              <iframe
                title="Mombasa office map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12891.884369239197!2d39.6627589!3d-4.0575138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012719a4e4871%3A0x57f7b9e6f6bb4f6e!2sEquity%20Bank%2C%20Moi%20Ave%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1695123456789!5m2!1sen!2ske"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = 'text', value, onChange, required = false, autoComplete }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="brand-input"
      />
    </div>
  );
}

function InfoLine({ icon, heading, text, link }) {
  const Icon = icon;

  const content = (
    <>
      <div className="brand-icon h-11 w-11">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h3 className="font-black text-slate-950 dark:text-white">{heading}</h3>
        <p className="mt-1 break-words text-slate-700 dark:text-slate-300">{text}</p>
      </div>
    </>
  );

  return link ? (
    <a href={link} className="flex min-w-0 gap-4 border border-transparent p-2 transition hover:border-slate-950 dark:hover:border-white">
      {content}
    </a>
  ) : (
    <div className="flex min-w-0 gap-4 p-2">{content}</div>
  );
}
