// src/pages/TermsOfService.jsx
import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-slate-900 p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Terms of Service</h1>
        <p className="mb-4 text-slate-700 dark:text-slate-200">Last updated: September 24, 2025</p>
        <p className="mb-4 text-slate-700 dark:text-slate-200">
          Welcome to Muntek Solutions! By accessing or using our website and services, you agree to these Terms of Service. Please read them carefully.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Use of Services</h2>
        <ul className="list-disc ml-5 mb-4 text-slate-700 dark:text-slate-200">
          <li>You must be at least 18 years old or have legal parental consent.</li>
          <li>Use our website and services only for lawful purposes.</li>
          <li>You agree not to misuse, attack, or attempt to disrupt our systems or services.</li>
        </ul>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Intellectual Property</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-200">
          All content, branding, code, and materials on this site are property of Muntek Solutions unless otherwise credited. Do not reproduce or republish without permission.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">User Content</h2>
        <ul className="list-disc ml-5 mb-4 text-slate-700 dark:text-slate-200">
          <li>You are responsible for content you provide (e.g., forms, reviews).</li>
          <li>You grant us a non-exclusive right to use and display your submissions for business operations, unless otherwise specified.</li>
        </ul>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Disclaimer & Limitation of Liability</h2>
        <ul className="list-disc ml-5 mb-4 text-slate-700 dark:text-slate-200">
          <li>Our services are provided “as is” and we do not guarantee error-free operation or uninterrupted access.</li>
          <li>Muntek Solutions will not be liable for indirect, incidental, special, or consequential damages.</li>
          <li>We are not responsible for third-party websites or services linked within our platform.</li>
        </ul>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Termination</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-200">
          We reserve the right to block, suspend, or terminate user access for violating these terms, or for any operational or legal need.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Changes to Terms</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-200">
          We reserve the right to modify these Terms at any time. Updates will be posted here. Continuing to use the site means you accept the current version.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Contact Us</h2>
        <p className="mb-2 text-slate-700 dark:text-slate-200">
          If you have questions about these Terms, email us at <a className="text-blue-700 dark:text-blue-400 underline" href="mailto:info@munteksolutions.com">info@munteksolutions.com</a>
        </p>
      </div>
    </div>
  );
}
