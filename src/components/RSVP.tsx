"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Gift } from "lucide-react";

export default function RSVP() {
    const [name, setName] = useState("");

    const [note, setNote] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) return;

        setIsSubmitting(true);

        const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfCNTlB4RSa8ZrUYvospXghfPIgIVY-3AAMpP8GZS-_m1_HqA/formResponse";

        const formData = new FormData();
        formData.append("entry.271172901", name);
        formData.append("entry.1808987624", note);

        try {
            await fetch(formUrl, {
                method: "POST",
                mode: "no-cors",
                body: formData
            });

            setIsSubmitted(true);
            // Optional: WhatsApp fallback is less elegant if using Google Forms, 
            // but we can ask if they want both.
        } catch (error) {
            console.error("Error submitting to Google Forms:", error);
            // Fallback to WhatsApp if Google Forms fails
            const text = `Hola, quiero confirmar mi asistencia a la boda de Karla y Josimar.%0A%0ANombre: ${name}%0ANotas: ${note}`;
            window.open(`https://wa.me/525500000000?text=${text}`, "_blank");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="rsvp" className="w-full flex flex-col">

            {/* Gift Suggestion Section - Padded */}
            <div className="bg-taupe-light/20 py-20 px-6 border-t border-taupe/10 mx-4 mb-4 md:mx-0 md:mb-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto text-center space-y-6"
                >
                    <div className="flex justify-center mb-4">
                        <Gift className="w-8 h-8 text-taupe" strokeWidth={1} />
                    </div>

                    <h2 className="font-script text-4xl md:text-5xl text-dark-gray">
                        Sugerencia de Regalo
                    </h2>

                    <p className="font-sans text-sm md:text-base leading-relaxed text-gray-600">
                        nuestro hogar ya tiene todo, pero si quieres darnos un regalo, puedes hacerlo dentro de este sobre, sin embargo tu presencia es lo más importante
                    </p>

                    <p className="font-serif italic text-gray-400 text-xs mt-4">
                        ¡Gracias por su amor y apoyo!
                    </p>
                </motion.div>
            </div>


            {/* RSVP Form Image Background Parallax */}
            <div className="relative w-auto min-h-screen flex items-center justify-center py-20 mx-4 mb-4 md:w-full md:mx-0 md:mb-0 overflow-hidden">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0 bg-dark-gray z-0">
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 w-full max-w-xl px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 shadow-2xl relative"
                    >
                        {/* Border Frame */}
                        <div className="absolute inset-2 border border-taupe/30 pointer-events-none" />

                        {isSubmitted ? (
                            <div className="py-12 text-center space-y-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto"
                                >
                                    <Send className="w-8 h-8" />
                                </motion.div>
                                <h2 className="font-display text-3xl text-dark-gray uppercase tracking-tight">¡Gracias por confirmar!</h2>
                                <p className="font-serif italic text-gray-500">Hemos recibido tu respuesta con éxito.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-taupe uppercase tracking-widest text-[10px] hover:underline"
                                >
                                    Enviar otra respuesta
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-10 space-y-2">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-taupe block">
                                        ¿Nos acompañas?
                                    </span>
                                    <h2 className="font-display text-4xl font-bold tracking-tight text-dark-gray">
                                        CONFIRMAR ASISTENCIA
                                    </h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400">Nombre Completo</label>
                                        <input
                                            required
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Nombre y Apellidos"
                                            className="w-full bg-off-white border-b border-gray-300 p-3 text-dark-gray focus:outline-none focus:border-taupe transition-colors placeholder:text-gray-300 font-serif italic"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gray-400">Nota Especial</label>
                                        <textarea
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                            placeholder="¿Alguna restricción alimentaria?"
                                            rows={2}
                                            className="w-full bg-off-white border-b border-gray-300 p-3 text-dark-gray focus:outline-none focus:border-taupe transition-colors placeholder:text-gray-300 font-serif italic resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!name || isSubmitting}
                                        className="w-full bg-dark-gray text-white py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-taupe transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8"
                                    >
                                        <span>{isSubmitting ? "Enviando..." : "Enviar Confirmación"}</span>
                                        <Send className="w-3 h-3" />
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
