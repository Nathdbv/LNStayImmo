
import { Check } from 'lucide-react';
// import interiorImg from '../assets/interior.jpg';

const benefits = [
    "Loyer garanti et versé le 1er du mois - Sans retard, sans exception",
    "Assurance multirisque incluse jusqu'à 3 Millions € - Protection totale de votre patrimoine", ,
    "Aucun frais de gestion : notre rémunération provient de l'exploitation",
    "Entretien hôtelier professionnel - Votre bien toujours impeccable",
    "Zéro vacance locative - Revenus continus garantis",
    "Flexibilité totale - Récupération possible avec préavis de 3 mois",
    "Support dédié 7j/7 pour toute urgence ou question",
    "Rapport mensuel détaillé sur l'état et l'occupation de votre bien"
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-20 bg-creme">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500 rounded-tl-3xl z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-900 rounded-br-3xl z-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
                                alt="Living room interior"
                                className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                            Ce que vous gagnez en nous confiant <br />
                            <span className="text-amber-500">votre bien</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Devenez propriétaire passif : nous gérons tout de A à Z pendant que vous recevez vos loyers garantis chaque mois. Sécurité maximale, zéro contrainte.
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

                        {/* Buttons removed - no functional destinations */}
                    </div>
                </div>
            </div>
        </section>
    );
}
