
import { CheckCircle, Star, Phone, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-slate-900/20 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Luxury Apartment"
                    className="w-full h-full object-cover animate-slow-zoom"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-white">
                <div className="max-w-4xl">
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="text-sm font-bold tracking-wide uppercase text-amber-500">Gestion Locative Premium</span>
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

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-10 inline-block shadow-2xl">
                        <p className="text-sm text-slate-400 mb-1 font-medium uppercase tracking-wider">Versement des loyers</p>
                        <p className="text-3xl font-bold text-white flex items-baseline gap-1">
                            <span className="text-green-400">100%</span>
                            <span className="text-lg text-slate-500 font-normal">garanti</span>
                        </p>
                    </div>

                    <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
                        Transformez votre bien immobilier en investissement passif sécurisé.
                        <span className="block mt-2 font-semibold text-white">Zéro vacance. Zéro impayé. Zéro gestion.</span>
                        Nous garantissons votre loyer chaque mois, quoi qu'il arrive.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <a href="#process" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:-translate-y-1 flex items-center justify-center">
                            Comment ça marche ?
                        </a>
                        <a href="#benefits" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all hover:border-white/40 flex items-center justify-center">
                            Découvrir nos garanties
                        </a>
                    </div>

                </div>
            </div>

            {/* Desktop Floating Contact Bubble */}
            <div className="hidden lg:flex absolute top-1/2 right-10 -translate-y-1/2 flex-col gap-4 z-20">
                <a href="tel:0667020321" className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl hover:bg-amber-500/20 hover:border-amber-500/50 transition-all group flex items-center gap-4 w-64">
                    <div className="bg-amber-500 p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-300 uppercase tracking-widest font-semibold mb-1">Appelez-nous</p>
                        <p className="text-white font-bold">06 67 02 03 21</p>
                    </div>
                </a>
                <a href="mailto:loan.nollet.pro@gmail.com" className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl hover:bg-amber-500/20 hover:border-amber-500/50 transition-all group flex items-center gap-4 w-64">
                    <div className="bg-amber-500 p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-300 uppercase tracking-widest font-semibold mb-1">Écrivez-nous</p>
                        <p className="text-white font-bold text-sm">loan.nollet.pro<br />@gmail.com</p>
                    </div>
                </a>
            </div>

            {/* Mobile bottom-right fixed contact */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50 flex flex-col gap-3">
                <a href="tel:0667020321" className="bg-amber-500 p-4 rounded-full text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-110 transition-transform flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                </a>
                <a href="mailto:loan.nollet.pro@gmail.com" className="bg-slate-800 p-4 rounded-full text-white shadow-[0_0_20px_rgba(30,41,59,0.4)] hover:scale-110 border border-slate-700 transition-transform flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                </a>
            </div>
        </section>
    );
}
