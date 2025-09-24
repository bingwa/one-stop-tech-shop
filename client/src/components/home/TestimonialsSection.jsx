import React, { useState, useEffect } from 'react';
import { 
  StarIcon,
  ChevronLeftIcon, 
  ChevronRightIcon 
} from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Wanjiku",
      position: "Founder",
      company: "ElegantFashion Kenya",
      rating: 5,
      text: "Muntek Solutions built our e-commerce platform with M-Pesa integration. Sales increased by 300% in just 3 months. Outstanding work!",
      result: "300% Sales Increase"
    },
    {
      name: "James Mwangi", 
      position: "CEO",
      company: "TechStart Nairobi",
      rating: 5,
      text: "Their web application transformed our business operations. The team delivered exactly what we needed, on time and within budget.",
      result: "40% Efficiency Gain"
    },
    {
      name: "Grace Akinyi",
      position: "Operations Manager",
      company: "Swift Logistics",
      rating: 5,
      text: "The fleet management system they built tracks our 50+ vehicles in real-time. It's been a game-changer for our business.",
      result: "Complete Fleet Visibility"
    },
    {
      name: "David Kimani",
      position: "Store Owner",
      company: "Kimani Electronics",
      rating: 5,
      text: "Great POS system and they also supplied quality phones at good prices. True one-stop IT solutions for our business needs.",
      result: "Streamlined Operations"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section py-24 bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-bold text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6">
            Client <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Real feedback from businesses we've helped grow with our software solutions.
          </p>
        </div>

        {/* Testimonial Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 lg:p-12 text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <StarIcon key={index} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl lg:text-3xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Result Badge */}
            <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-6 py-2 rounded-full font-semibold mb-8">
              Result: {currentTestimonial.result}
            </div>

            {/* Client Info */}
            <div className="space-y-2">
              <div className="font-bold text-xl text-slate-900 dark:text-white">
                {currentTestimonial.name}
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                {currentTestimonial.position} at {currentTestimonial.company}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className={`flex items-center justify-center mt-8 space-x-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={prevTestimonial}
              className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-slate-900 dark:bg-white w-8'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </button>
          </div>

          {/* All Clients Preview */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 text-left ${
                  index === currentIndex ? 'ring-2 ring-blue-500 border-transparent' : ''
                }`}
              >
                <div className="font-semibold text-slate-900 dark:text-white text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {testimonial.company}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
