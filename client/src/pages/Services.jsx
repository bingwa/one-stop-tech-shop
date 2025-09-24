import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon, 
  WifiIcon, 
  CpuChipIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
  WrenchScrewdriverIcon,
  ShoppingBagIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index || 0);
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Core services with pricing and enhanced details
  const coreServices = [
    {
      name: 'Custom Web Development',
      description: "We don't just build websites; we build digital experiences. Our team specializes in creating responsive, fast, and SEO-friendly websites that convert visitors into customers. From e-commerce platforms to corporate sites, we deliver excellence.",
      icon: GlobeAltIcon,
      features: [
        'Front-end & Back-end Development',
        'E-commerce Solutions', 
        'CMS Integration (WordPress, etc.)',
        'Web Application Development'
      ],
      price: 'From KSh 50,000',
      popular: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Robust Network Installations',
      description: 'A strong business needs a strong network. We design and deploy secure, high-performance network solutions for offices and homes. From structured cabling to Wi-Fi setup and server configuration, we ensure you\'re always connected.',
      icon: WifiIcon,
      features: [
        'Structured Cabling & Wiring',
        'Router & Switch Configuration',
        'Wireless (Wi-Fi) Solutions', 
        'Network Security & Firewall Setup'
      ],
      price: 'From KSh 30,000',
      popular: false,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Hardware & Software Support',
      description: 'Keep your systems running smoothly with our expert support. We offer sales of top-tier laptops and phones, plus comprehensive troubleshooting, upgrades, and maintenance for all your devices.',
      icon: CpuChipIcon,
      features: [
        'Laptop & Mobile Phone Sales',
        'Diagnostics & Repair',
        'System Upgrades',
        'Software Installation & Support'
      ],
      price: 'Market Competitive',
      popular: false,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  // Additional services to showcase full capabilities
  const additionalServices = [
    {
      name: 'Mobile App Development',
      description: 'Cross-platform mobile applications built with React Native for iOS and Android.',
      icon: DevicePhoneMobileIcon,
      price: 'From KSh 80,000',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Cloud Solutions',
      description: 'Scalable hosting, deployment, and cloud infrastructure management.',
      icon: CloudArrowUpIcon,
      price: 'From KSh 10,000/mo',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Technical Support',
      description: '24/7 ongoing support, maintenance, and consultation services.',
      icon: WrenchScrewdriverIcon,
      price: 'From KSh 15,000/mo',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Premium Devices',
      description: 'Quality smartphones, tablets, and accessories with local warranty.',
      icon: ShoppingBagIcon,
      price: 'Best Prices',
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business needs and create a detailed project roadmap.'
    },
    {
      step: '02', 
      title: 'Design & Development',
      description: 'Our team builds your solution using modern technologies and best practices.'
    },
    {
      step: '03',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures quality before deployment and go-live.'
    },
    {
      step: '04',
      title: 'Support & Growth',
      description: 'Ongoing maintenance and feature enhancements as your business grows.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Removed pt-20 and adjusted padding */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 mb-8">
              <SparklesIcon className="w-4 h-4" />
              <span>Complete IT Solutions for Your Business</span>
            </div>
            
            <h1 className="font-bold text-4xl lg:text-6xl text-slate-900 dark:text-white mb-6">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                power your business
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              We provide a comprehensive suite of technology solutions designed to be reliable, scalable, and secure, ensuring you stay ahead in a digital world.
            </p>

          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Our Core <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions tailored for Kenyan businesses, from startups to enterprises.
            </p>
          </div>

          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <div
                key={index}
                data-index={index}
                className={`animate-section transition-all duration-700 ${visibleSections.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-2xl lg:text-3xl text-slate-900 dark:text-white">
                          {service.name}
                        </h3>
                        {service.popular && (
                          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                            Most Popular
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-white">What's Included:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
                      <div className="space-y-1">
                        <div className="font-bold text-2xl text-slate-900 dark:text-white">
                          {service.price}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Starting price
                        </div>
                      </div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-medium px-6 py-3 rounded-lg transition-all duration-300"
                      >
                        <span>Get Quote</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
                      <div className="text-center space-y-4">
                        <div className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto`}>
                          <service.icon className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="font-bold text-xl text-slate-900 dark:text-white">
                          Professional {service.name.split(' ')[0]} Solutions
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          Trusted by {30 + index * 10}+ businesses across Kenya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Additional <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Complete your technology stack with our specialized services and premium products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                  {service.name}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-600">
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {service.price}
                  </span>
                  <ArrowRightIcon className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl lg:text-5xl text-slate-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures project success from conception to launch and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-bold text-xl text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-200 dark:bg-slate-700" />
                  )}
                </div>
                
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-4xl lg:text-5xl mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-slate-300 leading-relaxed">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Project Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
