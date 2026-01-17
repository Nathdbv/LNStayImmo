

const steps = [
    {
        number: "01",
        title: "Prise de contact",
        desc: "Nous échangeons sur votre bien et vos objectifs lors d'un premier rendez-vous."
    },
    {
        number: "02",
        title: "Visite & Estimation",
        desc: "Nous visitons le logement et validons son potentiel locatif pour définir le loyer."
    },
    {
        number: "03",
        title: "Signature du bail",
        desc: "Nous signons un bail professionnel dérogatoire. Tout est clair et transparent."
    },
    {
        number: "04",
        title: "Versement des loyers",
        desc: "Vous percevez votre premier loyer immédiatement. Nous nous occupons du reste."
    }
];

export default function Process() {
    return (
        <section id="process" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Fonctionnement</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">4 étapes simples vers la tranquillité</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Nous avons simplifié le processus de mise en location pour vous faire gagner du temps et de l'argent.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="text-6xl font-bold text-slate-800 mb-4 group-hover:text-amber-500/20 transition-colors">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Connector line for desktop */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-slate-800 to-transparent"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
