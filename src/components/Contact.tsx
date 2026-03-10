import { Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-12 bg-creme">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto bg-slate-900 text-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Text Intro */}
                        <div className="md:w-1/3 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold">Un projet ? <br className="hidden lg:block" /> <span className="text-amber-500">Discutons-en.</span></h2>
                        </div>

                        {/* Contacts */}
                        <div className="md:w-2/3 flex flex-col sm:flex-row gap-6 justify-end w-full">
                            <a href="tel:0667020321" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition-colors flex-1">
                                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 mb-0.5">7/7 Jours</p>
                                    <p className="font-semibold">06 67 02 03 21</p>
                                </div>
                            </a>

                            <a href="mailto:loan.nollet.pro@gmail.com" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition-colors flex-1">
                                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 mb-0.5">Réponse rapide</p>
                                    <p className="font-semibold text-sm">loan.nollet.pro@gmail.com</p>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
