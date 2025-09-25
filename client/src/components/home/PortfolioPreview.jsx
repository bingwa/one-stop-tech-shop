import React from 'react';
import { ArrowTopRightOnSquareIcon, EyeIcon, CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const PortfolioPreview = () => {
  // Only one project—live demo
  const project = {
    id: 1,
    title: "Fleet Manager",
    description: "Comprehensive fleet management system for truck maintenance, fuel tracking, and compliance reporting.",
    image: "/assets/FLM.png",
    category: "web",
    technologies: ["React", "PostgreSQL", "PDF Generation", "Chart.js"],
    features: ["Fleet Tracking", "Maintenance Scheduling", "PDF Reports", "Compliance Forms"],
    link: "https://fleetmanagerapp.netlify.app/",
    github: "#",
    color: "from-green-500 to-teal-600",
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-bold text-4xl lg:text-5xl mb-4 text-slate-900 dark:text-white">
            Portfolio
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Explore our recent project and see how we've helped improve business operations.
          </p>
        </div>

        {/* Singe Project Card */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Image */}
          <div className="flex-shrink-0 md:w-1/2 h-64 md:h-auto relative">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover object-center w-full h-full"
            />
            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-gradient-to-br from-green-500 to-teal-600 text-white px-4 py-1 rounded-full text-xs font-semibold capitalize shadow-lg">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </div>
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {project.description}
              </p>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Live Demo Button */}
            <div className="mt-6 flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 space-x-2"
              >
                <span>View Live Demo</span>
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
