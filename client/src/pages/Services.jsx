import { GlobeAltIcon, WifiIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Custom Web Development',
    description: "We don't just build websites; we build digital experiences. Our team specializes in creating responsive, fast, and SEO-friendly websites that convert visitors into customers. From e-commerce platforms to corporate sites, we deliver excellence.",
    icon: GlobeAltIcon,
    features: ['Front-end & Back-end Development', 'E-commerce Solutions', 'CMS Integration (WordPress, etc.)', 'Web Application Development']
  },
  {
    name: 'Robust Network Installations',
    description: 'A strong business needs a strong network. We design and deploy secure, high-performance network solutions for offices and homes. From structured cabling to Wi-Fi setup and server configuration, we ensure you\'re always connected.',
    icon: WifiIcon,
    features: ['Structured Cabling & Wiring', 'Router & Switch Configuration', 'Wireless (Wi-Fi) Solutions', 'Network Security & Firewall Setup']
  },
  {
    name: 'Hardware & Software Support',
    description: 'Keep your systems running smoothly with our expert support. We offer sales of top-tier laptops and phones, plus comprehensive troubleshooting, upgrades, and maintenance for all your devices.',
    icon: CpuChipIcon,
    features: ['Laptop & Mobile Phone Sales', 'Diagnostics & Repair', 'System Upgrades', 'Software Installation & Support']
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-blue">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to power your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide a comprehensive suite of technology solutions designed to be reliable, scalable, and secure, ensuring you stay ahead in a digital world.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-7 w-7 flex-none text-primary-blue" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                   <ul className="mt-6 space-y-2 text-sm">
                    {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-2">
                             <svg className="h-4 w-4 text-secondary-blue" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
