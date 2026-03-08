import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="w-9 h-9 bg-gradient-to-br from-navy-800 to-accent-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-navy-900 tracking-tight">
                            BuildFlow<span className="text-accent-500">AI</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-navy-800 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="inline-flex items-center px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Unlock Free Websites
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-navy-800"
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            {mobileOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="8" x2="21" y2="8" />
                                    <line x1="3" y1="16" x2="21" y2="16" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 space-y-3 bg-white/95 backdrop-blur-xl rounded-b-2xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm font-medium text-gray-700 hover:text-navy-800 px-2 py-1.5"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="block text-center mx-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-xl"
                        >
                            Unlock Free Websites
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
