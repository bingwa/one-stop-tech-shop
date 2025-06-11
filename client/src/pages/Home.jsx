import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-white">
            <div className="relative isolate pt-14">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6FB1FC] to-[#0052D4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
                </div>
                <div className="py-24 sm:py-32">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Your Complete Tech Partner
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                From cutting-edge web development and robust network installations to the latest in mobile and laptop technology.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="/services" className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-primary-blue shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Explore Services
                                </Link>
                                <Link to="/shop" className="text-sm font-semibold leading-6 text-gray-900">
                                    Shop latest tech <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}