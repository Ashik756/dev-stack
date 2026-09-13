import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
    { href: "#top", label: "Home" },
    { href: "#technologies", label: "Technologies" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeHash, setActiveHash] = useState<string>(window.location.hash || "#top");

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || "#top");
        };

        window.addEventListener('hashchange', handleHashChange);

        if (!window.location.hash) {
            setActiveHash("#top");
        }

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-linear-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold shadow-md">
                            DS
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-gray-900">
                            Dev<span className="text-pink-600">Stack</span>
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV.map((item, index) => {
                            const isActive = activeHash === item.href;
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={() => setActiveHash(item.href)}
                                    className={`text-base font-medium transition-colors ${isActive ? 'text-pink-600' : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>

                   <div className="md:flex items-center md:space-x-6 space-x-3">
                        <a href="#signin" className="text-base font-medium text-gray-700 hover:text-gray-900">
                            Sign In
                        </a>
                        <a
                            href="#signup"
                            className="px-3 py-1.5 md:px-6 md:py-2.5  text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg shadow-md transition-all"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-4 shadow-lg">
                    <div className="flex flex-col space-y-3">
                        {NAV.map((item, index) => {
                            const isActive = activeHash === item.href;
                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={() => {
                                        setActiveHash(item.href);
                                        setIsOpen(false);
                                    }}
                                    className={`text-base font-medium px-3 py-2 rounded-md ${isActive ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                        <a
                            href="#signin"
                            onClick={() => setIsOpen(false)}
                            className="text-center py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                        >
                            Sign In
                        </a>
                        <a
                            href="#signup"
                            onClick={() => setIsOpen(false)}
                            className="text-center w-full py-2.5 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg shadow-md"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}