import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
    {
        quote: "BuildFlow AI cut our proposal time from 4 hours to 20 minutes. We've doubled the number of bids we submit every month, and our win rate has actually gone up.",
        name: 'Marcus Rivera',
        title: 'Owner, Rivera Construction Group',
        avatar: 'MR',
        color: 'from-navy-800 to-navy-600',
    },
    {
        quote: "The automated client communication alone is worth it. Our clients love getting real-time updates, and I don't have to spend my evenings writing emails anymore.",
        name: 'Sarah Chen',
        title: 'Project Manager, Summit Homes LLC',
        avatar: 'SC',
        color: 'from-accent-500 to-accent-400',
    },
    {
        quote: "We went from sticky notes and spreadsheets to a fully organized project system. Every estimate, contract, and material list — all in one place. Game changer.",
        name: 'David Kowalski',
        title: 'Founder, Kowalski Remodeling',
        avatar: 'DK',
        color: 'from-navy-700 to-accent-500',
    },
];

export default function Testimonials() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 fade-up ${isVisible ? 'visible' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-navy-800/5 text-navy-800 text-xs font-semibold rounded-full uppercase tracking-wider mb-5">
                        Testimonials
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                        Builders Who Build Smarter
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        See how construction teams are saving time, winning more projects, and staying organized with BuildFlow AI.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className={`grid md:grid-cols-3 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F97316" stroke="none">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-navy-900">{t.name}</div>
                                    <div className="text-xs text-gray-400">{t.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
