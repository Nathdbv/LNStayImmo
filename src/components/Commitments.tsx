
import { Shield, Clock, FileCheck, Wrench, ClipboardCheck, Phone } from 'lucide-react';

const commitments = [
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Paiement Ponctuel",
        description: "Versement des loyers à date fixe, garanti contractuellement"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Protection Juridique Incluse",
        description: "Assurance multirisque professionnelle pour votre sérénité totale"
    },
    {
        icon: <FileCheck className="w-8 h-8" />,
        title: "Transparence Absolue",
        description: "Contrats clairs, pas de frais cachés, reporting mensuel détaillé"
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: "Maintenance Préventive",
        description: "Entretien régulier pour préserver la valeur de votre patrimoine"
    },
    {
        icon: <ClipboardCheck className="w-8 h-8" />,
        title: "États des Lieux Rigoureux",
        description: "Documentation photographique détaillée entrée/sortie systématique"
    },
    {
        icon: <Phone className="w-8 h-8" />,
        title: "Disponibilité 7j/7",
        description: "Une équipe dédiée joignable à tout moment pour vos urgences"
    }
];

export default function Commitments() {
    return (
        <section className="py-24 bg-gradient-to-br from-creme to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-4">
                        <Shield className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">Nos Engagements</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Des garanties <span className="text-amber-500">concrètes</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Notre réputation repose sur des engagements fermes. Voici ce que nous garantissons à chaque propriétaire.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {commitments.map((commitment, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
                        >
                            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                                {commitment.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                                {commitment.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {commitment.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl shadow-lg">
                        <Shield className="w-6 h-6 text-amber-500" />
                        <span className="font-bold text-lg">Tous nos engagements sont garantis par contrat</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
