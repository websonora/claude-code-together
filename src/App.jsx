import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
