
import { TrendingUp, Users, Award } from 'lucide-react';

const stats = [
    // {
    //     icon: <Building2 className="w-8 h-8" />,
    //     number: "XX+",
    //     label: "Biens Gérés",
    //     description: "Appartements et maisons en gestion confidentielle"
    // },
    {
        icon: <Users className="w-8 h-8" />,
        number: "100%",
        label: "Satisfaction",
        description: "Propriétaires bailleurs recommandant nos services"
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        number: "100%",
        label: "Loyer Garanti",
        description: "Versement assuré chaque mois par contrat"
    },
    {
        icon: <Award className="w-8 h-8" />,
        number: "XX",
        label: "Années",
        description: "D'expertise sur le marché locatif premium"
    }
];

export default function TrustSection() {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Des chiffres qui parlent d'eux-mêmes
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        La confiance se construit sur des preuves concrètes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group"
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105">
                                <div className="text-amber-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-xl font-bold text-white mb-2">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-slate-400">
                                    {stat.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-300 text-lg font-medium">
                        🏆 Membre de la <span className="text-amber-500 font-bold">Fédération Nationale de l'Immobilier</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
