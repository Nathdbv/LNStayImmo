
import { Instagram, Linkedin, Facebook, Building2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-4 group">
                            <div className="bg-amber-500 rounded-lg p-1.5 group-hover:bg-amber-400 transition-colors">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Loca<span className="text-amber-500">Prestige</span>
                            </span>
                        </a>
                        <p className="max-w-sm text-slate-400">
                            Spécialiste de la sous-location professionnelle. Nous valorisons votre patrimoine immobilier en toute sérénité.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
                            <li><a href="#process" className="hover:text-amber-500 transition-colors">Fonctionnement</a></li>
                            <li><a href="#benefits" className="hover:text-amber-500 transition-colors">Avantages</a></li>
                            <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Légal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Mentions Légales</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Politique de Confidentialité</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">© 2024 LocaPrestige. Tous droits réservés.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
