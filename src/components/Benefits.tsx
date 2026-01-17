
import { Check } from 'lucide-react';
import interiorImg from '../assets/interior.jpg';

const benefits = [
    "Loyer garanti et versé le 1er de chaque mois (Sans retard)",
    "Aucun frais d'agence ni de gestion - Tout compris",
    "Entretien hôtelier professionnel après chaque séjour",
    "Bien assuré jusqu'à 1M€ par notre assurance multirisque pro",
    "Sélection rigoureuse des locataires (entreprises et pros)",
    "Possibilité de récupérer votre bien avec préavis de 3 mois",
    "Support dédié disponible 7j/7 pour toute urgence",
    "Rapport mensuel détaillé sur l'état de votre bien"
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500 rounded-tl-3xl z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-900 rounded-br-3xl z-0"></div>
                            <img
                                src={interiorImg}
                                alt="Living room interior"
                                className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                            Pourquoi nous confier <br />
                            <span className="text-amber-500">vos clés ?</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            La sous-location professionnelle est le moyen le plus sûr de rentabiliser votre bien sans les contraintes de la location classique. Nous prenons tout en charge.
                        </p>

                        <div className="grid gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-amber-100 p-1 rounded-full text-amber-600">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-slate-700">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                Obtenir mon estimation gratuite
                            </button>
                            <button className="text-slate-900 font-bold border-2 border-slate-300 hover:border-amber-500 px-8 py-4 rounded-lg transition-all hover:shadow-lg">
                                Voir l'assurance en détail →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
