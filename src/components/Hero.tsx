
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Luxury Apartment"
                    className="w-full h-full object-cover animate-slow-zoom"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-white">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm font-bold tracking-wide uppercase text-amber-500">Service Premium de Sous-Location</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-md border border-green-500/20 px-4 py-2 rounded-full">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-semibold text-green-300">Garantie Totale</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
                        <span className="text-slate-100">Vos revenus locatifs. </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                            Sécurisés & Maximisés.
                        </span>
                    </h1>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-10 inline-flex flex-col sm:flex-row gap-8 shadow-2xl">
                        <div>
                            <p className="text-sm text-slate-400 mb-1 font-medium uppercase tracking-wider">Biens sous gestion</p>
                            <p className="text-3xl font-bold text-white flex items-baseline gap-1">
                                <span className="text-amber-400">XX+</span>
                                <span className="text-lg text-slate-500 font-normal">propriétés</span>
                            </p>
                        </div>
                        <div className="w-px bg-white/10 hidden sm:block"></div>
                        <div className="h-px bg-white/10 sm:hidden"></div>
                        <div>
                            <p className="text-sm text-slate-400 mb-1 font-medium uppercase tracking-wider">Versement des loyers</p>
                            <p className="text-3xl font-bold text-white flex items-baseline gap-1">
                                <span className="text-green-400">100%</span>
                                <span className="text-lg text-slate-500 font-normal">garanti</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
                        Transformez votre bien immobilier en investissement passif sécurisé.
                        <span className="block mt-2 font-semibold text-white">Zéro vacance. Zéro impayé. Zéro gestion.</span>
                        Nous garantissons votre loyer chaque mois, quoi qu'il arrive.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3">
                            Estimer mes revenus
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all hover:border-white/40 flex items-center justify-center">
                            Découvrir le concept
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-medium text-slate-300 border-t border-white/10 pt-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-amber-500" />
                            </div>
                            <span>Loyers versés le 1er du mois</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-amber-500" />
                            </div>
                            <span>Assurance IARD incluse</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-amber-500" />
                            </div>
                            <span>État des lieux par huissier</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
