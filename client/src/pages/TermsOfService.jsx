import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="page-hero">
        <div className="container-custom py-16 lg:py-20">
          <span className="brand-chip">Terms</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight text-slate-950 dark:text-white">Terms of Service</h1>
          <p className="section-copy mt-5">Last updated: May 12, 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <article className="surface-card container-custom max-w-4xl p-8 sm:p-10">
          <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-black prose-a:font-bold">
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
