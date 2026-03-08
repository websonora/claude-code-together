import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-navy-50 to-surface-alt pt-28 pb-20 lg:pt-36 lg:pb-28">
            {/* Decorative blobs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-navy-800/5 rounded-full blur-3xl pointer-events-none" />

            <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-8 fade-up ${isVisible ? 'visible' : ''}`}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Copy */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 text-accent-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse" />
                            AI-Powered Automation
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] tracking-tight">
                            Build Smarter.{' '}
                            <span className="gradient-text">Automate Everything.</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                            From price proposals to project plans — let AI handle the repetitive work so your construction team can focus on building.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-2xl shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 hover:-translate-y-1 text-base"
                            >
                                Unlock Free Websites
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-navy-800 font-semibold rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-base"
                            >
                                See How It Works
                            </a>
                        </div>

                        {/* Mini stat bar */}
                        <div className="flex gap-8 pt-4">
                            <div>
                                <div className="text-2xl font-extrabold text-navy-900">85%</div>
                                <div className="text-xs text-gray-500 font-medium">Faster Proposals</div>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                                <div className="text-2xl font-extrabold text-navy-900">3x</div>
                                <div className="text-xs text-gray-500 font-medium">More Projects</div>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div>
                                <div className="text-2xl font-extrabold text-navy-900">500+</div>
                                <div className="text-xs text-gray-500 font-medium">Builders Trust Us</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className="relative">
                        <div className="relative bg-white rounded-3xl shadow-2xl shadow-navy-800/10 border border-gray-100 overflow-hidden">
                            {/* Mockup toolbar */}
                            <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-gray-100">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="ml-4 flex-1 h-6 bg-gray-200 rounded-md max-w-xs" />
                            </div>
                            {/* Mockup content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-navy-800 to-accent-500 rounded-xl" />
                                    <div>
                                        <div className="h-4 bg-navy-800 rounded w-32 mb-1" />
                                        <div className="h-3 bg-gray-200 rounded w-48" />
                                    </div>
                                </div>
                                {/* Proposal card mockup */}
                                <div className="bg-navy-50 rounded-2xl p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="h-4 bg-navy-800 rounded w-36" />
                                        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Generated</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                                            <div className="text-lg font-bold text-navy-900">$42,500</div>
                                            <div className="text-xs text-gray-400">Estimate</div>
                                        </div>
                                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                                            <div className="text-lg font-bold text-navy-900">12 wks</div>
                                            <div className="text-xs text-gray-400">Timeline</div>
                                        </div>
                                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                                            <div className="text-lg font-bold text-navy-900">24</div>
                                            <div className="text-xs text-gray-400">Materials</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Activity bars */}
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-100 rounded-full w-full" />
                                    <div className="h-3 bg-gray-100 rounded-full w-4/5" />
                                    <div className="h-3 bg-gray-100 rounded-full w-3/5" />
                                </div>
                            </div>
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-navy-900">Proposal Sent</div>
                                <div className="text-xs text-gray-500">Just now • Kitchen Remodel</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
