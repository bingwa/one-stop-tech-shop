import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="page-hero">
        <div className="container-custom py-16 lg:py-20">
          <span className="brand-chip">Privacy</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight text-slate-950 dark:text-white">Privacy Policy</h1>
          <p className="section-copy mt-5">Last updated: May 12, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <article className="surface-card container-custom max-w-4xl p-8 sm:p-10">
          <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-black prose-a:font-bold">
            <p>
              At MunTek Solutions, we collect only the information needed to respond to inquiries, prepare quotes, provide support, and improve our services.
            </p>

            <h2>Information we collect</h2>
            <ul>
              <li>Contact details you submit, including name, email, phone number, selected service, and message.</li>
              <li>Basic technical data from website visits, such as browser type, pages visited, and approximate usage patterns.</li>
              <li>Project or business information you choose to share during consultations.</li>
            </ul>

            <h2>How we use information</h2>
            <ul>
              <li>To respond to contact forms, quote requests, and support messages.</li>
              <li>To plan, deliver, maintain, and improve our technology services.</li>
              <li>To keep internal records needed for operations, security, and legal compliance.</li>
            </ul>

            <h2>Sharing and security</h2>
            <p>
              We do not sell personal information. We may use trusted service providers for hosting, email, analytics, or project delivery where necessary. We use reasonable technical and organizational measures to protect submitted information.
            </p>

            <h2>Your choices</h2>
            <p>
              You may request access, correction, or deletion of your personal information by contacting us at{' '}
              <a href="mailto:munteksolutions@gmail.com">munteksolutions@gmail.com</a>.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy questions, email us or visit the <Link to="/contact">contact page</Link>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
