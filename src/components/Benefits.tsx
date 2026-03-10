
import { Shield, Sparkles, TrendingUp, Key, Bed, Clock, Phone, FileText } from 'lucide-react';

const benefits = [
    {
        icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
        title: "Loyer Garanti",
        description: "Versé le 1er du mois - Sans retard, sans exception."
    },
    {
        icon: <Shield className="w-6 h-6 text-amber-500" />,
        title: "Assurance 3 Millions €",
        description: "Assurance multirisque incluse pour une protection totale de votre patrimoine."
    },
    {
        icon: <Sparkles className="w-6 h-6 text-amber-500" />,
        title: "Mise en valeur",
        description: "Achat de mobilier, décoration et électroménager à nos frais."
    },
    {
        icon: <Key className="w-6 h-6 text-amber-500" />,
        title: "Aucun frais de gestion",
        description: "Notre rémunération provient exclusivement de l'exploitation."
    },
    {
        icon: <Bed className="w-6 h-6 text-amber-500" />,
        title: "Entretien hôtelier",
        description: "Ménage professionnel régulier. Votre bien reste toujours impeccable."
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
        title: "Zéro vacance locative",
        description: "Finis les mois sans loyer. Revenus continus et garantis."
    },
    {
        icon: <Clock className="w-6 h-6 text-amber-500" />,
        title: "Flexibilité totale",
        description: "Récupération possible de votre bien avec un préavis de seulement 3 mois."
    },
    {
        icon: <Phone className="w-6 h-6 text-amber-500" />,
        title: "Support dédié 7j/7",
        description: "Une équipe réactive à votre disposition pour toute urgence ou question."
    },
    {
        icon: <FileText className="w-6 h-6 text-amber-500" />,
        title: "Transparence totale",
        description: "Rapport mensuel détaillé sur l'état et l'occupation de votre bien."
    }
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Excellence & Sécurité</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Ce que vous gagnez en nous confiant <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">votre bien</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                        Devenez propriétaire passif. Nous gérons tout de A à Z pendant que vous recevez vos loyers garantis chaque mois. <span className="text-white font-medium">Sécurité maximale, zéro contrainte.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.2)]"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>

                            <div className="bg-amber-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                                {benefit.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                                {benefit.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
