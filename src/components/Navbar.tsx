import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                    <img src="/logo.png" className="h-12 md:h-24 w-auto object-contain" alt="LNStay Logo" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#services" className={`hover:text-amber-500 transition-colors font-medium ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>Services</a>
                    <a href="#process" className={`hover:text-amber-500 transition-colors font-medium ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>Fonctionnement</a>
                    <a href="#benefits" className={`hover:text-amber-500 transition-colors font-medium ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>Avantages</a>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        Estimation Gratuite
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-8 px-6 flex flex-col gap-6">
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 text-lg font-medium">Services</a>
                    <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 text-lg font-medium">Fonctionnement</a>
                    <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 text-lg font-medium">Avantages</a>
                    <button className="bg-amber-500 text-white py-3 rounded-lg font-bold w-full">
                        Estimation Gratuite
                    </button>
                </div>
            )}
        </nav>
    );
}
