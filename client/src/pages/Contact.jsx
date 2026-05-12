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

      setNotice('Message sent. We will get back to you shortly.');
      setForm({
        name: '',
        email: '',
        phone: '',
        service: 'Web development',
        message: '',
      });
    } catch (error) {
      setNotice(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="container-custom py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-black leading-tight text-slate-950 sm:text-6xl dark:text-white">
              Tell us what you want to build, fix, or improve.
            </h1>
            <p className="section-copy mx-auto mt-6 max-w-3xl">
              Use one simple form for project inquiries, support requests, and quotes. We will review the details and respond with a practical next step.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-900">
        <div className="container-custom grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={onSubmit} className="surface-card p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-950 dark:text-white">Request a quote</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Share the essentials. A clear first message helps us give you a better answer faster.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" value={form.name} onChange={onChange} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
              <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} />
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:ring-sky-950"
                >
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Project details</label>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={onChange}
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:ring-sky-950"
                placeholder="What do you need, when do you need it, and what should the finished solution help you achieve?"
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? 'Sending...' : 'Send message'}
              <ArrowRightIcon className="h-4 w-4" />
            </button>

            {notice && (
              <p className={`mt-4 text-center text-sm font-semibold ${notice.startsWith('Message sent') ? 'text-teal-700' : 'text-red-600'}`}>
                {notice}
              </p>
            )}
          </form>

          <aside className="space-y-5">
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

function Field({ label, name, type = 'text', value, onChange, required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:ring-sky-950"
      />
    </div>
  );
}

function InfoLine({ icon, heading, text, link }) {
  const Icon = icon;

  const content = (
    <>
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 dark:bg-sky-950/40 dark:text-sky-200 dark:ring-sky-900">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-extrabold text-slate-950 dark:text-white">{heading}</h3>
        <p className="mt-1 text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </>
  );

  return link ? (
    <a href={link} className="flex gap-4 rounded-xl p-2 transition hover:bg-slate-50 dark:hover:bg-slate-900">
      {content}
    </a>
  ) : (
    <div className="flex gap-4 rounded-xl p-2">{content}</div>
  );
}
