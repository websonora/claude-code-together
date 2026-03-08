import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
    {
        number: '01',
        title: 'Input Project Details',
        description: 'Enter your project specs — type, square footage, materials, scope. It takes less than two minutes.',
        color: 'from-navy-800 to-navy-600',
    },
    {
        number: '02',
        title: 'AI Generates Proposals',
        description: 'Our AI builds cost estimates, material lists, design concepts, and professional documents instantly.',
        color: 'from-navy-700 to-accent-500',
    },
    {
        number: '03',
        title: 'Review & Send to Client',
        description: 'Edit anything you need, then send polished proposals directly to your clients for approval.',
        color: 'from-accent-500 to-accent-400',
    },
    {
        number: '04',
        title: 'Track Project Progress',
        description: 'Monitor timelines, budgets, and communication from one dashboard. Stay on top of every project.',
        color: 'from-accent-400 to-yellow-400',
    },
];

export default function HowItWorks() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div ref={ref} className={`text-center max-w-2xl mx-auto mb-16 fade-up ${isVisible ? 'visible' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-500/10 text-accent-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-5">
                        How It Works
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight mb-4">
                        From Project Brief to Proposal in Minutes
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Four simple steps to transform how your construction company handles proposals, estimates, and client communication.
                    </p>
                </div>

                {/* Steps */}
                <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative group">
                            {/* Connector line (desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px bg-gradient-to-r from-gray-200 to-gray-100" />
                            )}
                            <div className="text-center">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white text-xl font-extrabold shadow-lg group-hover:scale-110 transition-transform duration-300 mb-5`}>
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-bold text-navy-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
