import { useScrollAnimation } from '../hooks/useScrollAnimation';

const logos = [
    { name: 'Turner & Co', initials: 'T&C' },
    { name: 'Apex Builders', initials: 'AB' },
    { name: 'Redwood Construction', initials: 'RC' },
    { name: 'Summit Homes', initials: 'SH' },
    { name: 'Pinnacle Group', initials: 'PG' },
    { name: 'Evolve Design', initials: 'ED' },
];

export default function SocialProof() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-14 bg-white border-y border-gray-100">
            <div
                ref={ref}
                className={`max-w-7xl mx-auto px-6 lg:px-8 fade-up ${isVisible ? 'visible' : ''}`}
            >
                <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Trusted by 500+ Construction Companies
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                    {logos.map((logo) => (
                        <div
                            key={logo.name}
                            className="flex items-center gap-2 text-gray-300 hover:text-gray-500 transition-colors duration-300 group cursor-default"
                        >
                            <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-gray-600">
                                {logo.initials}
                            </div>
                            <span className="text-sm font-semibold tracking-tight">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
