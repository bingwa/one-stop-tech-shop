import aboutImage from '@/assets/about.png'; 

export default function About() {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Empowering businesses and individuals through reliable, comprehensive technology solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="text-base font-semibold leading-7 text-primary-blue">Our Mission</h3>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Your Trusted Tech Partner</p>
              <p className="mt-6 text-lg leading-8 text-black-700">
                Founded in 2025, MunTek Solutions was born from a desire to provide comprehensive, no-nonsense technology services. We saw a gap between specialized service providers and a market that needed a single, reliable partner for all its tech needs.
              </p>
              <p className="mt-8 text-lg leading-8 text-black-700">
                Our team is composed of certified professionals who are passionate about what they do and are committed to staying ahead of the tech curve.
              </p>
            </div>
          </div>

          <img
            src={aboutImage}
            alt="The One-Stop Tech Solutions Team"
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover h-[32rem]"
          />
        </div>
      </div>
    </div>
  )
}
