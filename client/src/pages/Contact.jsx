/*  src/pages/Contact.jsx  */
import { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  // ─────────────────── state ───────────────────
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');

  // full API path, works locally and in prod
  const api =
    import.meta.env.VITE_API_URL
      ? `${import.meta.env.VITE_API_URL}/api/contact`
      : '/api/contact';

  // ───────────────── handlers ──────────────────
  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setNotice('');

    try {
      const res = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setNotice('Message sent! We’ll get back to you shortly.');
        setForm({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setNotice(
          'Something went wrong. Please try again later.'
        );
      }
    } catch {
      setNotice('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // ────────────────── render ───────────────────
  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-slate-900">
      {/* main section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* ─────── contact form ─────── */}
          <form
            onSubmit={onSubmit}
            className="space-y-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Get in Touch
            </h2>

            {/* first + last */}
            <div className="grid sm:grid-cols-2 gap-6">
              {['firstName', 'lastName'].map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {key === 'firstName' ? 'First Name' : 'Last Name'}
                  </label>
                  <input
                    name={key}
                    value={form[key]}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-400 outline-none"
                  />
                </div>
              ))}
            </div>

            {/* email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-400 outline-none"
              />
            </div>

            {/* message */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-indigo-500 dark:focus:border-indigo-400 outline-none resize-none"
              />
            </div>

            {/* submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>

            {notice && (
              <p
                className={`text-center text-sm ${
                  notice.startsWith('Message')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {notice}
              </p>
            )}
          </form>

          {/* ─────── contact info + map ─────── */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Contact Details
            </h2>

            <InfoLine
              icon={PhoneIcon}
              heading="Phone"
              text="254 715747043"
              link="tel:+254715747043"
            />
            <InfoLine
              icon={EnvelopeIcon}
              heading="Email"
              text="munteksolutions@gmail.com"
              link="mailto:munteksolutions@gmail.com"
            />
            <InfoLine
              icon={BuildingOffice2Icon}
              heading="Address"
              text="Moi Avenue opposite Equity Bank, Mombasa"
            />

            {/* google map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700">
              <iframe
                title="Mombasa office map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12891.884369239197!2d39.6627589!3d-4.0575138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012719a4e4871%3A0x57f7b9e6f6bb4f6e!2sEquity%20Bank%2C%20Moi%20Ave%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1695123456789!5m2!1sen!2ske"
                width="100%"
                height="280"
                loading="lazy"
                style={{ border: 0 }}
                className=" contrast-125"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* helper for phone / email / address rows */
function InfoLine({ icon: Icon, heading, text, link }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {heading}
        </h3>
        {link ? (
          <a
            href={link}
            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {text}
          </a>
        ) : (
          <p className="text-slate-600 dark:text-slate-300">{text}</p>
        )}
      </div>
    </div>
  );
}
