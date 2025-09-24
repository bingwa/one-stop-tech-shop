import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Shop Devices', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const contactInfo = [
    { icon: PhoneIcon, text: '+254 7157 47043', href: 'tel:+254715747043' },
    { icon: EnvelopeIcon, text: 'munteksolutions@gmail.com', href: 'mailto:munteksolutions@gmail.com' },
    { icon: MapPinIcon, text: 'Nairobi, Kenya', href: '#' }
  ];

  const socialLinks = [
    {
    name: 'Twitter',
    href: 'https://twitter.com/munteksolutions', // replace with your actual handle
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.92 4.92 0 0 0 16.616 3c-2.727 0-4.942 2.215-4.942 4.943 0 .387.043.764.128 1.126C7.728 8.867 4.1 6.884 1.671 3.882c-.423.727-.666 1.572-.666 2.475 0 1.71.87 3.213 2.188 4.096A4.904 4.904 0 0 1 .96 9.09v.062c0 2.385 1.697 4.374 3.946 4.825a4.93 4.93 0 0 1-2.224.084c.627 1.954 2.444 3.377 4.6 3.417A9.868 9.868 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.213c9.057 0 14.009-7.506 14.009-14.009 0-.213-.005-.426-.014-.637A9.935 9.935 0 0 0 24 4.557z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/munteksolutions', // replace with your actual handle
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.977 1.254 2.244 1.316 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.34 2.633-1.316 3.608-.977.975-2.244 1.254-3.608 1.316-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.34-3.608-1.316-.975-.977-1.254-2.244-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.85.062-1.366.34-2.633 1.316-3.608C4.524 2.502 5.791 2.224 7.157 2.163 8.423 2.106 8.803 2.163 12 2.163zm0-2.163C8.736 0 8.332.007 7.052.068a6.313 6.313 0 0 0-4.403 1.762A6.326 6.326 0 0 0 .07 7.052C.007 8.332 0 8.736 0 12c0 3.262.007 3.668.07 4.948.06 1.278.324 2.483 1.762 3.922a6.326 6.326 0 0 0 3.922 1.762c1.28.062 1.684.07 4.948.07 3.263 0 3.667-.008 4.947-.07a6.326 6.326 0 0 0 3.922-1.762c1.438-1.439 1.703-2.644 1.762-3.922.063-1.28.07-1.684.07-4.948 0-3.262-.007-3.668-.07-4.948-.059-1.278-.324-2.483-1.762-3.922A6.312 6.312 0 0 0 16.948.07C15.668.008 15.263 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.323 6.162 6.162 0 0 0 0-12.323zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/254715747043', // update with your WhatsApp number
    icon: (
      <svg fill="currentColor" viewBox="0 0 32 32" className="w-6 h-6">
        <path d="M16.005 2.003c-7.037 0-12.757 5.72-12.757 12.758 0 2.247.591 4.438 1.715 6.37L2.02 29.98l9.067-2.937c1.84.765 3.801 1.154 5.924 1.154h.006c7.037 0 12.757-5.719 12.757-12.758 0-3.412-1.329-6.622-3.74-9.033s-5.621-3.74-9.034-3.74zm0 23.153h-.004c-1.953 0-3.855-.374-5.641-1.112l-.405-.162-5.393 1.746 1.755-5.241-.17-.435a10.704 10.704 0 0 1-1.316-5.153c0-5.943 4.837-10.78 10.782-10.78 2.882 0 5.591 1.124 7.625 3.158a10.73 10.73 0 0 1 3.156 7.626c0 5.944-4.838 10.78-10.783 10.78zm5.927-8.339c-.323-.162-1.914-.944-2.211-1.052-.297-.11-.514-.162-.73.163-.216.323-.841 1.052-1.031 1.268-.19.216-.38.243-.703.08a8.86 8.86 0 0 1-2.613-1.615c-.485-.484-.813-.866-1.139-1.38-.237-.362-.025-.559.18-.722.185-.148.414-.385.622-.577.207-.193.276-.322.414-.536.139-.215.07-.404-.035-.566-.104-.162-.73-1.773-1.005-2.428-.267-.642-.54-.553-.731-.563l-.624-.013c-.215 0-.565.078-.861.364s-1.128 1.103-1.128 2.69 1.156 3.125 1.316 3.341c.16.216 2.275 3.482 5.675 4.749.795.273 1.414.436 1.899.562.797.204 1.525.175 2.099.107.555-.066 1.914-.782 2.186-1.538.271-.756.271-1.403.19-1.537-.08-.135-.294-.216-.612-.378z"/>
      </svg>
    ),
  },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="text-white font-bold text-lg">MS</div>
              </div>
              <div>
                <div className="font-bold text-xl text-white">
                  Muntek Solutions
                </div>
                <div className="text-sm text-slate-400">
                  IT Solutions & More
                </div>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed">
              Transforming Kenyan businesses through innovative technology solutions. 
              From custom software to premium devices, we're your trusted IT partner.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-slate-400 hover:text-blue-500 dark:hover:text-green-400 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>

            <div className="text-sm text-slate-500">
              <span className="inline-flex items-center space-x-1">
                <span>🇰🇪</span>
                <span>Proudly Kenyan, Globally Competitive</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRightIcon className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-white">
              Get In Touch
            </h3>
            
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {info.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © {currentYear} Muntek Solutions. All rights reserved. 
              <span className="ml-2 text-slate-500">Built with ❤️ in Kenya</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <a href="/contact" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">
                Need Support?
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
