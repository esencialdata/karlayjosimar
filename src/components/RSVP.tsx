"use client";
import { useState } from "react";
import { FadeIn } from "./ui/FadeIn";
import { Send } from "lucide-react";

export default function RSVP() {
    const [name, setName] = useState("");
    const [guests, setGuests] = useState("1");
    const [note, setNote] = useState("");

    const handleWhatsapp = () => {
        const text = `Hola, quiero confirmar mi asistencia a la boda de Karla y Josimar.%0A%0ANombre: ${name}%0ANúmero de personas: ${guests}%0ANotas: ${note}`;
        window.open(`https://wa.me/525500000000?text=${text}`, "_blank");
    };

    return (
        <section className="py-24 px-6 w-full max-w-xl mx-auto">
            <FadeIn>
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">RSVP</h2>
                    <p className="text-neutral-400 font-light">
                        Por favor confirma tu asistencia lo antes posible.
                    </p>
                </div>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className="space-y-6 bg-neutral-900/30 p-8 border border-neutral-800 rounded">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-neutral-500">Nombre Completo</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Tu nombre"
                            className="w-full bg-black border border-neutral-800 p-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-neutral-500">Número de Acompañantes</label>
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full bg-black border border-neutral-800 p-3 text-white focus:outline-none focus:border-white transition-colors appearance-none"
                        >
                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-neutral-500">Comentarios / Restricciones</label>
                        <textarea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Alergias, dudas..."
                            rows={3}
                            className="w-full bg-black border border-neutral-800 p-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                        />
                    </div>

                    <button
                        onClick={handleWhatsapp}
                        disabled={!name}
                        className="w-full bg-white text-black py-4 uppercase tracking-[0.2em] font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4"
                    >
                        <span>Confirmar por WhatsApp</span>
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </FadeIn>
        </section>
    );
}
