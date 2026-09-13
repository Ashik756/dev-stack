export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16">

                    <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-linear-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold shadow-md">
                                DS
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-gray-900">
                                Dev<span className="text-pink-600">Stack</span>
                            </span>
                        </div>
                        <p className="text-base text-gray-600 max-w-sm leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex items-center space-x-4 pt-2 text-sm font-medium text-gray-600">
                            <a href="#github" className="hover:text-pink-600 transition-colors">GitHub</a>
                            <span className="text-gray-300">•</span>
                            <a href="#twitter" className="hover:text-pink-600 transition-colors">Twitter</a>
                            <span className="text-gray-300">•</span>
                            <a href="#linkedin" className="hover:text-pink-600 transition-colors">LinkedIn</a>
                        </div>
                    </div>

                    <div className="md:col-span-2 flex flex-col items-start md:text-left space-y-3">
                        <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Product</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#top" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#technologies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Technologies</a>
                            </li>
                            <li>
                                <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3 flex flex-col items-start md:text-left space-y-3">
                        <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Company</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                            </li>
                            <li>
                                <a href="#careers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 flex flex-col items-start md:text-left space-y-3">
                        <h3 className="text-xs font-bold tracking-wider text-gray-900 uppercase">Legal</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="#privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between gap-4 text-center sm:text-left">
                    <p className="text-xs text-gray-500">
                        © 2026 Dev Stack. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 text-xs text-gray-500">
                        <a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-gray-900 transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}