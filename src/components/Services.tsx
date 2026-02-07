
import { Shield, Wrench, BadgeEuro } from 'lucide-react';

const services = [
    {
        icon: <BadgeEuro className="w-12 h-12 text-amber-500" />,
        title: "Revenus Garantis",
        description: "Nous vous versons le loyer chaque mois, que le bien soit occupé ou non. Zéro retard, zéro impayé.",
        guarantee: "Paiement à date fixe garanti par contrat"
    },
    {
        icon: <Shield className="w-12 h-12 text-amber-500" />,
        title: "Assurance Multirisque",
        description: "Une couverture complète incluse pour votre tranquillité d'esprit.",
        guarantee: "Protection jusqu'à 3 Millions €"
    },
    {
        icon: <Wrench className="w-12 h-12 text-amber-500" />,
        title: "Valorisation & Entretien",
        description: "Nous décorons, embellissons et entretenons votre bien. Le ménage professionnel après chaque séjour garantit un état impeccable.",
        guarantee: "Standard hôtelier + Design"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-creme">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Une gestion locative <span className="text-amber-500">sans compromis</span></h2>
                    <p className="text-lg text-slate-600">Découvrez comment nous sécurisons votre investissement tout en maximisant sa rentabilité.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-amber-500/30 group relative overflow-hidden">
                            {/* Guaranteed badge */}
                            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                ✓ GARANTI
                            </div>

                            <div className="mb-6 bg-white p-4 rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <div className="pt-4 border-t border-slate-200">
                                <p className="text-sm font-semibold text-amber-600 flex items-center gap-2">
                                    <span className="text-amber-500">●</span>
                                    {service.guarantee}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
