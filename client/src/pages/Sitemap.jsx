// src/pages/Sitemap.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  return (
    <div className="min-h-screen pt-20 bg-slate-50 dark:bg-slate-900 p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Sitemap</h1>
        <nav>
          <ul className="list-disc pl-6 text-blue-600 dark:text-blue-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
