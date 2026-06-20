import { useState } from 'react';
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { HeroBackdrop } from '../components/common/BlueprintArt';

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
      <section className="page-hero">
        <HeroBackdrop variant="contact" />
        <div className="page-hero-grid">
          <div>
            <p className="spec mb-6"><span className="spec-signal">FIG. 03</span> &nbsp;Contact</p>
            <h1 className="display max-w-3xl text-[clamp(2.4rem,5.4vw,4.25rem)] text-ink">
              Tell us what needs to be built, fixed, or supported.
            </h1>
          </div>
          <div className="max-w-2xl lg:ml-auto">
            <p className="section-copy">
              Use one form for project inquiries, support requests, and quote conversations. Clear details
              help us respond with a useful next step.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={onSubmit} className="registered panel self-start p-6 sm:p-8">
            <div className="mb-8 border-b border-line pb-6">
              <p className="spec mb-3 text-ink">Job ticket</p>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Request a quote</h2>
              <p className="mt-3 leading-7 text-ink-muted">
                Share the essentials: what you need, the pressure point, timing, and what success should look like.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={onChange} required autoComplete="name" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} autoComplete="tel" />
              <div>
                <label className="spec mb-2 block text-ink-muted" htmlFor="service">Service</label>
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
              <label className="spec mb-2 block text-ink-muted" htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={onChange}
                required
                className="field resize-y"
                placeholder="What do you need, when do you need it, and what should the finished solution help you achieve?"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-signal mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? 'Sending message...' : 'Send message'}
              <ArrowRightIcon className="h-4 w-4" />
            </button>

            <div aria-live="polite" aria-atomic="true">
              {notice && (
                <p
                  className={`mt-4 border px-4 py-3 text-sm font-medium leading-6 ${
                    isSuccess
                      ? 'border-signal bg-signal/10 text-ink'
                      : 'border-red-600 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200'
                  }`}
                >
                  {notice}
                </p>
              )}
            </div>
          </form>

          <aside className="space-y-6">
            <div className="panel p-6 sm:p-7">
              <p className="spec mb-5 text-ink">What happens next</p>
              <ol className="space-y-5">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex min-w-0 gap-4">
                    <span className="num flex h-9 w-9 flex-none items-center justify-center border border-ink bg-paper text-xs font-semibold text-ink">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 leading-7 text-ink-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="panel p-6 sm:p-7">
              <p className="spec mb-5 text-ink">Contact details</p>
              <div className="divide-y divide-line">
                <InfoLine icon={PhoneIcon} heading="Phone" text="+254 715 747 043" link="tel:+254715747043" />
                <InfoLine icon={EnvelopeIcon} heading="Email" text="munteksolutions@gmail.com" link="mailto:munteksolutions@gmail.com" />
                <InfoLine icon={BuildingOffice2Icon} heading="Office" text="Moi Avenue opposite Equity Bank, Mombasa" />
              </div>
            </div>

            <div className="panel overflow-hidden">
              <div className="flex items-center justify-between border-b border-line bg-well px-5 py-3">
                <span className="spec text-ink">Site location</span>
                <span className="spec spec-signal">Lat -4.05 / Lon 39.66</span>
              </div>
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
      <label className="spec mb-2 block text-ink-muted" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
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
      <span className="flex h-11 w-11 flex-none items-center justify-center border border-ink bg-ink text-paper">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <h3 className="spec text-ink-muted">{heading}</h3>
        <p className="mt-1.5 break-words font-medium text-ink">{text}</p>
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
