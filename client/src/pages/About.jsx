import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  LightBulbIcon,
  TrophyIcon,
  HeartIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index || 0);
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all sections with animation
    const animatedElements = document.querySelectorAll('.animate-section');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: LightBulbIcon,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: HeartIcon,
      title: "Client-Focused",
      description: "Your success is our success. We work closely with our clients to understand their needs and deliver solutions that exceed expectations."
    },
    {
      icon: TrophyIcon,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring premium results every time."
    },
    {
      icon: ShieldCheckIcon,
      title: "Reliability",
      description: "Our clients trust us to deliver on time, within budget, and with ongoing support. We're committed to being a dependable technology partner."
    }
  ];

  const team = [
    {
      name: "Brian Munyao",
      position: "Founder & Lead Developer",
      specialization: "Full-Stack Development",
      image: "src/assets/DP.jpg",
      bio: "With over 2 years of experience in web development, Brian specializes in MERN stack applications and has led the development of various successful projects.",
      skills: ["React", "Node.js", "Python", "PostgreSQL", "Supabase"]
    },
    {
      name: "Nathan Munyao",
      position: "Founder & CEO",
      specialization: "React Native & Flutter",
      image: "/api/placeholder/300/300",
      bio: "Nathan brings expertise in cross-platform mobile development, having created numerous apps for both iOS and Android platforms.",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", description: "Successfully delivered projects" },
    { number: "30+", label: "Happy Clients", description: "Satisfied customers across Kenya" },
    { number: "3+", label: "Years Experience", description: "In the Kenyan tech market" },
    { number: "99%", label: "Client Satisfaction", description: "Based on client feedback" }
  ];

  const services = [
    {
      icon: CodeBracketIcon,
      title: "Web Development",
      description: "Custom websites and web applications"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Apps",
      description: "iOS and Android application development"
    },
    {
      icon: CloudIcon,
      title: "Cloud Solutions",
      description: "Scalable infrastructure and deployment"
    },
    {
      icon: UserGroupIcon,
      title: "IT Consulting",
      description: "Strategic technology guidance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container-custom">
          <div 
            className="text-center max-w-4xl mx-auto animate-section transition-all duration-700 opacity-100 translate-y-0"
            data-index="0"
          >
            <h1 className="font-bold text-4xl lg:text-6xl mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Muntek Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              We are a passionate team of developers, designers, and tech enthusiasts based in Kenya, 
              dedicated to transforming businesses through innovative technology solutions.
            </p>
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full font-medium">
              <span>🇰🇪</span>
              <span>Proudly Kenyan, Globally Competitive</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`animate-section transition-all duration-700 ${
                visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index="1"
            >
              <h2 className="font-bold text-3xl lg:text-4xl mb-6">
                Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Founded with a vision to bridge the technology gap in Kenya, Muntek Solutions started as a small team 
                  of passionate developers who believed that every business deserves access to world-class technology solutions.
                </p>
                <p>
                  What began as a web development service has evolved into a comprehensive IT solutions company, offering 
                  everything from custom software development to premium device sales. We've grown by staying true to our 
                  core values: innovation, quality, and client satisfaction.
                </p>
                <p>
                  Today, we're proud to have served a diverse range of clients across various industries, from startups to established 
                  enterprises. Our expertise in modern technologies like React, Node.js, and cloud platforms has enabled us 
                  to deliver solutions that drive real business growth.
                </p>
              </div>
            </div>
            <div 
              className={`animate-section transition-all duration-700 ${
                visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              data-index="1"
            >
              <div className="relative">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                      <CodeBracketIcon className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white">
                      Kenya's Tech Innovation
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Driving digital transformation across East Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <div 
            className={`text-center mb-16 animate-section transition-all duration-700 ${
              visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index="2"
          >
            <h2 className="font-bold text-3xl lg:text-4xl mb-6">
              Our <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-section text-center ${
                  visibleSections.includes(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-index="3"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container-custom">
          <div 
            className={`text-center mb-16 animate-section transition-all duration-700 ${
              visibleSections.includes(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index="4"
          >
            <h2 className="font-bold text-3xl lg:text-4xl mb-6">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              The talented individuals behind Muntek Solutions who bring your digital dreams to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-section text-center border border-slate-100 dark:border-slate-700 ${
                  visibleSections.includes(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-index="5"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-slate-200 dark:bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Photo</span>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {member.specialization}
                  </div>
                </div>

                <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white mt-4">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container-custom">
          <div 
            className={`text-center mb-16 animate-section transition-all duration-700 ${
              visibleSections.includes(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-index="7"
          >
            <h2 className="font-bold text-3xl lg:text-4xl mb-6">
              What We <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Do</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-section text-center ${
                  visibleSections.includes(8) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                data-index="8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
