import { Link } from 'react-router-dom';
import { HeroBackdrop } from '../components/common/BlueprintArt';

export default function PrivacyPolicy() {
  return (
    <main className="bg-paper text-ink">
      <section className="page-hero">
        <HeroBackdrop variant="doc" />
        <div className="container-custom relative py-16 lg:py-20">
          <p className="spec mb-6"><span className="spec-signal">DOC. A1</span> &nbsp;Privacy</p>
          <h1 className="display max-w-3xl text-[clamp(2.2rem,4.6vw,3.5rem)] text-ink">Privacy Policy</h1>
          <p className="spec mt-6 text-ink-muted">Last revised 2026-05-12</p>
        </div>
      </section>

      <section className="section-padding">
        <article className="registered panel container-custom max-w-3xl p-8 sm:p-10">
          <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-a:font-semibold prose-a:text-signal-strong">
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
