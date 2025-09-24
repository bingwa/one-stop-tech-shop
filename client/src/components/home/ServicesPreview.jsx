import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
  WrenchScrewdriverIcon,
  ShoppingBagIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesPreview = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: CodeBracketIcon,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks like React and Next.js.",
      features: ["Responsive Design", "E-commerce Platforms", "Admin Dashboards", "API Development"],
      price: "From KSh 15,000",
      popular: true
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Applications",
      description: "Cross-platform mobile apps using React Native for iOS and Android deployment.",
      features: ["React Native", "Cross-Platform", "App Store Publishing", "Push Notifications"],
      price: "From KSh 30,000",
      popular: false
    },
    {
      icon: CloudArrowUpIcon,
      title: "Cloud Solutions",
      description: "Scalable hosting, deployment, and cloud infrastructure management for your applications.",
      features: ["Cloud Hosting", "SSL Certificates", "Database Management", "Backup Solutions"],
      price: "From KSh 10,000/mo",
      popular: false
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "IT Support",
      description: "Ongoing technical support, maintenance, and consultation for your business needs.",
      features: ["24/7 Support", "System Updates", "Bug Fixes", "Performance Optimization"],
      price: "From KSh 10,000/mo",
      popular: false
    },
    {
      icon: ShoppingBagIcon,
      title: "Premium Devices",
      description: "Quality smartphones, tablets, and accessories with warranty and local support.",
      features: ["Latest Smartphones", "Tablets & Laptops", "Accessories", "Local Warranty"],
      price: "Market Competitive",
      popular: false
    },
    {
      icon: CpuChipIcon,
      title: "Tech Consulting",
      description: "Strategic technology advice to help your business make informed digital decisions.",
      features: ["Digital Strategy", "Tech Recommendations", "Process Automation", "Growth Planning"],
      price: "From KSh 20,000",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-bold text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
            What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            From custom software to premium devices, we provide complete technology solutions for Kenyan businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card relative group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-600">
                <span className="font-semibold text-lg text-slate-900 dark:text-white">
                  {service.price}
                </span>
                <ArrowRightIcon className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-slate-900 dark:bg-slate-800 rounded-3xl p-12">
          <h3 className="font-bold text-3xl text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/services"
              className="border-2 border-slate-600 text-slate-300 hover:border-white hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
