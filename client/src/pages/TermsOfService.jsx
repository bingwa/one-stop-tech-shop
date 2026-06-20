import { Link } from 'react-router-dom';
import { HeroBackdrop } from '../components/common/BlueprintArt';

export default function TermsOfService() {
  return (
    <main className="bg-paper text-ink">
      <section className="page-hero">
        <HeroBackdrop variant="doc" />
        <div className="container-custom relative py-16 lg:py-20">
          <p className="spec mb-6"><span className="spec-signal">DOC. A2</span> &nbsp;Terms</p>
          <h1 className="display max-w-3xl text-[clamp(2.2rem,4.6vw,3.5rem)] text-ink">Terms of Service</h1>
          <p className="spec mt-6 text-ink-muted">Last revised 2026-05-12</p>
        </div>
      </section>

      <section className="section-padding">
        <article className="registered panel container-custom max-w-3xl p-8 sm:p-10">
          <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-a:font-semibold prose-a:text-signal-strong">
            <p>
              By using this website or engaging MunTek Solutions for technology services, you agree to these terms.
            </p>

            <h2>Use of the website</h2>
            <ul>
              <li>Use the website and contact forms only for lawful inquiries and service requests.</li>
              <li>Do not attempt to disrupt, misuse, or gain unauthorized access to our systems.</li>
              <li>Information you submit should be accurate enough for us to respond properly.</li>
            </ul>

            <h2>Services and quotes</h2>
            <p>
              Information on this website is general. Final project scope, pricing, timelines, and deliverables are confirmed through written proposals, invoices, or agreements.
            </p>

            <h2>Intellectual property</h2>
            <p>
              Site content, branding, layouts, and materials belong to MunTek Solutions unless otherwise credited. Client project ownership terms should be defined in the relevant project agreement.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              We work to provide dependable services, but the website is provided as is. We are not responsible for indirect losses caused by website use or third-party services linked from the site.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent through the <Link to="/contact">contact page</Link> or by emailing{' '}
              <a href="mailto:munteksolutions@gmail.com">munteksolutions@gmail.com</a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
