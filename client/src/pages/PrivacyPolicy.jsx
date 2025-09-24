// src/pages/PrivacyPolicy.jsx
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-slate-900 p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="mb-4 text-slate-700 dark:text-slate-200">Last updated: September 24, 2025</p>
        <p className="mb-4 text-slate-700 dark:text-slate-200">
          At Muntek Solutions (“we”, “our”, “us”), your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Information We Collect</h2>
        <ul className="list-disc ml-5 mb-4 text-slate-700 dark:text-slate-200">
          <li>
            <b>Personal Information:</b> Name, email address, phone number, and business details you provide through contact forms or registration.
          </li>
          <li>
            <b>Usage Data:</b> Information on how you interact with our services, including browser type, pages visited, time and date of visits, and IP address.
          </li>
          <li>
            <b>Cookies & Tracking:</b> Standard cookies and analytics to improve our website experience and security.
          </li>
        </ul>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">How We Use Your Information</h2>
        <ul className="list-disc ml-5 mb-4 text-slate-700 dark:text-slate-200">
          <li>To provide, maintain, and improve our web services and customer experience.</li>
          <li>To respond to your inquiries and provide support.</li>
          <li>For internal record-keeping and legal compliance.</li>
          <li>To send you company updates, offers, or newsletters (you may opt out at any time).</li>
        </ul>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">How We Share Your Information</h2>
        <ul className="list-disc ml-5 mb-4 text-slate-700 dark:text-slate-200">
          <li>
            We do <b>not</b> sell or share your information with third parties, except as required by law or for basic service delivery by trusted partners (e.g., payment or hosting providers).
          </li>
        </ul>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Data Security</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-200">
          We use industry-standard technical and organizational measures to protect your information. However, no internet transmission is 100% secure—please take care when sharing sensitive data.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Your Rights</h2>
        <ul className="list-disc ml-5 mb-4 text-slate-700 dark:text-slate-200">
          <li>You can request access to, update, or delete your personal information at any time.</li>
          <li>If you wish to opt out of email communications, use the unsubscribe link or contact us directly.</li>
        </ul>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Children’s Privacy</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-200">
          Our services are not directed at children under 13, and we do not knowingly collect personal data from children.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Changes to This Policy</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-200">
          We may update this Privacy Policy as needed. Changes will be posted on this page, and your continued use means acceptance of the revised policy.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3 text-slate-900 dark:text-white">Contact Us</h2>
        <p className="mb-2 text-slate-700 dark:text-slate-200">
          For any privacy questions or requests, email <a className="text-blue-700 dark:text-blue-400 underline" href="mailto:info@munteksolutions.com">info@munteksolutions.com</a>
        </p>
      </div>
    </div>
  );
}
