import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
    const [ref, isVisible] = useScrollAnimation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-center fade-up ${isVisible ? 'visible' : ''}`}>
                    {/* Left CTA Copy */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 text-accent-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                            Get Started Today
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight">
                            Ready to Automate Your Construction Business?
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Stop spending hours on proposals and paperwork. Let AI handle it while you focus on what matters — building.
                        </p>
                        <div className="space-y-4 pt-2">
                            {[
                                'Set up in under 10 minutes',
                                'No credit card required',
                                'Free consultation included',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-600 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-surface rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-lg">
                        {submitted ? (
                            <div className="text-center py-12 space-y-4">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-navy-900">We'll be in touch!</h3>
                                <p className="text-gray-500 text-sm">Our team will reach out within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-1.5">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Rivera"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@riveraconstruction.com"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your company and what you'd like to automate..."
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-navy-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all resize-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 hover:-translate-y-0.5 text-sm"
                                >
                                    Unlock Free Websites
                                </button>
                                <p className="text-xs text-gray-400 text-center">
                                    Free consultation. No spam. No commitment.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
