import banner from '../assets/banner-stack.png'

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                            Build Your Ideal <br />
                            <span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                       <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                        </p>

                        <div className="flex sm:items-center gap-4 w-full sm:w-auto pt-2">
                            <a
                                href="#technologies"
                                className="px-4 py-3 md:px-8 md:py-3.5 text-base font-semibold text-white bg-linear-to-r from-orange-500 to-pink-600 hover:opacity-95 rounded-lg shadow-lg text-center transition-all"
                            >
                                Explore Technologies
                            </a>
                            <a
                                href="#about"
                                className="px-4 py-3 md:px-8 md:py-3.5 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg shadow-sm text-center transition-all"
                            >
                                Learn More
                            </a>
                        </div>

                    </div>

                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="w-full max-w-md lg:max-w-full">
                            <img
                                src={banner}
                                alt="Development Stack Illustration"
                                className="w-full h-auto object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}