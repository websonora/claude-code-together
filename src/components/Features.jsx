import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
            </svg>
        ),
        title: 'AI Price Proposals',
        description: 'Generate accurate cost estimates and professional proposals in minutes, not hours. Just enter the project details.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
        title: 'Design Generator',
        description: 'Create concept layouts and design proposals for new builds, remodels, or renovations automatically.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
        title: 'Client Communication',
        description: 'Automate follow-ups, project updates, and approval requests. Keep clients engaged without the manual work.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
            </svg>
        ),
        title: 'Project Documentation',
        description: 'Auto-generate quotes, contracts, and project summaries. All your documents, organized in one place.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
        title: 'Cost & Material Estimation',
        description: 'Get AI-powered material lists and cost breakdowns tailored to your project scope and local pricing.',
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: 'Project Tracking',
        description: 'Monitor progress, timelines, and milestones across all your projects from a single centralized dashboard.',
    },
];

export default function Features() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="features" className="py-20 lg:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 fade-up ${isVisible ? 'visible' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-800/5 text-navy-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-5">
                        Automation Solutions
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                        Everything You Need to Run Faster
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Replace hours of manual work with intelligent automation designed specifically for construction workflows.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-navy-50 to-navy-100 group-hover:from-accent-500/10 group-hover:to-accent-500/20 rounded-xl flex items-center justify-center text-navy-700 group-hover:text-accent-500 transition-colors duration-300 mb-5">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-navy-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
