
import { ArrowLeft } from 'lucide-react';

export default function LegalMentions() {
    return (
        <div className="min-h-screen bg-creme pt-24 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-500 transition-colors mb-12">
                    <ArrowLeft className="w-5 h-5" />
                    Retour à l'accueil
                </a>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">Mentions Légales</h1>

                <div className="space-y-12">
                    {/* Éditeur */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                            Éditeur du site
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 text-slate-600">
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Nom commercial</p>
                                <p>LNStay</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Éditeur</p>
                                <p>Loan Nollet</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Statut juridique</p>
                                <p>Entreprise individuelle (EI) – Micro-entrepreneur</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">SIREN / SIRET</p>
                                <p>932 022 122 / 932 022 122 00026</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Contact</p>
                                <p>06 67 02 03 21</p>
                                <p>loan.nollet.pro@gmail.com</p>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900 mb-1">Siège social</p>
                                <p className="text-slate-600">376 Avenue Georges Freche</p>
                            </div>
                        </div>
                    </section>

                    {/* Directeur de publication */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                            Directeur de publication
                        </h2>
                        <p className="text-slate-600">Loan Nollet</p>
                    </section>

                    {/* Hébergement */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                            Hébergement
                        </h2>
                        <div className="text-slate-600">
                            <p className="mb-2"><span className="font-semibold text-slate-900">Hébergeur :</span> Cloudflare, Inc.</p>
                            <p className="mb-2"><span className="font-semibold text-slate-900">Adresse :</span> 101 Townsend St, San Francisco, CA 94107, USA.</p>
                            <p className="mb-2"><span className="font-semibold text-slate-900">Téléphone :</span> +1 (650) 319 8930</p>
                            <p><span className="font-semibold text-slate-900">Site Web :</span> <a href="https://www.cloudflare.com" className="text-amber-500 hover:underline" target="_blank" rel="noopener noreferrer">www.cloudflare.com</a></p>
                        </div>
                    </section>

                    {/* Propriété intellectuelle */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                            Propriété intellectuelle
                        </h2>
                        <p className="text-slate-600 mb-4">
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p className="text-slate-900 font-semibold">
                            © 2026 LNStay. Tous droits réservés.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
