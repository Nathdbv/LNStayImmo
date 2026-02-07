
import { Shield, Users, Sparkles, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function AirCoverSection() {
    return (
        <section id="insurance" className="py-24 bg-creme relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 px-4 py-2 rounded-full mb-6">
                            <ShieldCheck className="w-4 h-4 text-rose-500" />
                            <span className="text-sm font-bold text-rose-600 uppercase tracking-wider">Protection Incluse</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Une sécurité absolue avec <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">AirCover pour les hôtes</span>
                        </h2>

                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Nous ne laissons rien au hasard. Chaque location est couverte par la protection la plus complète du marché, incluse automatiquement dans notre service de gestion.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-rose-100 rounded-xl mt-1">
                                    <Shield className="w-6 h-6 text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Assurance à 3 Millions €</h3>
                                    <p className="text-slate-600">Une couverture exceptionnelle pour votre logement et vos biens, incluse sans frais supplémentaires.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-rose-100 rounded-xl mt-1">
                                    <HeartHandshake className="w-6 h-6 text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Responsabilité civile</h3>
                                    <p className="text-slate-600">Protection complète contre les recours de tiers pour dommages corporels ou matériels.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-rose-100 rounded-xl mt-1">
                                    <Users className="w-6 h-6 text-rose-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Vérification d'identité rigoureuse</h3>
                                    <p className="text-slate-600">Système complet de vérification des voyageurs : pièce d'identité, photo, et analyse des antécédents pour prévenir les risques.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Card Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl opacity-20 blur-xl"></div>
                            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl relative border border-slate-700 shadow-2xl">
                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Protection Globale</h3>
                                        <p className="text-slate-400">Standard de sécurité premium</p>
                                    </div>
                                    <ShieldCheck className="w-12 h-12 text-rose-500" />
                                </div>

                                <div className="grid gap-6">
                                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-rose-500/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <Sparkles className="w-5 h-5 text-rose-400" />
                                            <span className="font-medium">Nettoyage approfondi</span>
                                        </div>
                                        <CheckCircle className="w-5 h-5 text-rose-500 fill-rose-500/20" />
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-rose-500/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <Shield className="w-5 h-5 text-rose-400" />
                                            <span className="font-medium">Protection Responsabilité</span>
                                        </div>
                                        <CheckCircle className="w-5 h-5 text-rose-500 fill-rose-500/20" />
                                    </div>
                                </div>

                                <div className="mt-10 pt-6 border-t border-slate-700">
                                    <p className="text-sm text-slate-400 text-center">
                                        Grâce au programme AirCover d'Airbnb (applicable aux réservations sur la plateforme). <br />
                                        En complément de notre assurance professionnelle dédiée.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
