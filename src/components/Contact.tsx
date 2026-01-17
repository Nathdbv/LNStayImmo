import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Discutons de votre <span className="text-amber-500">projet</span></h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Vous avez un bien à louer ? Une question sur notre fonctionnement ?
                        Contactez-nous directement pour une estimation gratuite.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-10 md:p-16 text-center">

                        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                                    <Phone className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                                <p className="text-slate-400 mb-4">Du lundi au samedi</p>
                                <a href="tel:+33612345678" className="text-lg font-semibold hover:text-amber-500 transition-colors">
                                    +33 6 12 34 56 78
                                </a>
                            </div>

                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                                    <Mail className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <p className="text-slate-400 mb-4">Réponse sous 24h</p>
                                <a href="mailto:contact@locaprestige.fr" className="text-lg font-semibold hover:text-amber-500 transition-colors">
                                    contact@locaprestige.fr
                                </a>
                            </div>

                            <div className="flex flex-col items-center group">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                                    <MapPin className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Bureau</h3>
                                <p className="text-slate-400 mb-4">Sur rendez-vous</p>
                                <address className="text-lg font-semibold not-italic">
                                    10 Rue de la République<br />75001 Paris
                                </address>
                            </div>
                        </div>

                        <div className="mt-16 pt-10 border-t border-slate-800">
                            <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="font-bold text-3xl text-white">LP</span>
                            </div>
                            <p className="text-slate-400 text-sm">© 2024 LocaPrestige.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
