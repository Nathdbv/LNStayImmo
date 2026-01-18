
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-4 transition-opacity hover:opacity-80">
                            <img src={logoImg} className="h-16 md:h-28 w-auto object-contain bg-white/5 rounded-lg p-1" alt="LNStay Logo" />
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


                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <p className="text-sm">© 2026 LNStay. Tous droits réservés.</p>
                        <a href="#legal" className="text-sm text-slate-500 hover:text-amber-500 transition-colors">Mentions Légales</a>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                    </div>
                </div>

                <div className="border-t border-slate-800/50 pt-8 text-center md:text-left">
                    <p className="text-xs text-slate-500 leading-relaxed">
                        LNStay – Entreprise individuelle (EI) – Micro-entrepreneur – Éditeur : Loan Nollet – SIREN : 932022122 – SIRET : 93202212200026 – Tél. : 06 67 02 03 21 – Email : loan.nollet.pro@gmail.com – © 2026 LNStay.
                    </p>
                </div>
            </div>
        </footer>
    );
}
