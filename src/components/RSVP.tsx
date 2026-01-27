"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Gift, Mail } from "lucide-react";

export default function RSVP() {
    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    React.useEffect(() => {
        const submitted = localStorage.getItem("rsvpSubmitted");
        if (submitted) {
            setIsSubmitted(true);
        }
    }, []);

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
            localStorage.setItem("rsvpSubmitted", "true");
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

                    <h2 className="font-display text-4xl md:text-5xl text-dark-gray flex flex-col items-center gap-2">
                        <span className="uppercase tracking-[0.3em] text-lg md:text-2xl opacity-70">Sugerencia de</span>
                        <span className="text-7xl md:text-9xl -mt-4 md:-mt-6" style={{ fontFamily: 'var(--font-pinyon), cursive' }}>
                            Regalos
                        </span>
                    </h2>

                    <p className="font-sans text-sm md:text-base leading-relaxed text-gray-600">
                        Nuestro hogar ya tiene todo, pero si quieres darnos un regalo, puedes hacerlo dentro de este sobre, sin embargo tu presencia es lo más importante
                    </p>

                    <p className="font-serif italic text-gray-500 text-lg md:text-xl mt-6">
                        ¡Gracias por su amor y apoyo!
                    </p>

                    <div className="pt-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="inline-flex items-center justify-center w-12 h-12 bg-taupe text-white rounded-full hover:bg-taupe/90 transition-colors shadow-lg"
                        >
                            <Mail className="w-5 h-5" strokeWidth={1.5} />
                        </motion.button>
                    </div>
                </motion.div>
            </div>


            {/* RSVP Form Image Background Parallax */}
            <div className="relative w-auto min-h-screen flex items-center justify-center py-20 mx-4 mb-4 md:w-full md:mx-0 md:mb-0 overflow-hidden bg-[#ebebeb]">
                {/* Background Image / Overlay */}
                <div
                    className="absolute inset-0 bg-cover md:bg-contain bg-center bg-no-repeat z-0 transition-all duration-700"
                    style={{ backgroundImage: "url('/gift-background.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/40 md:bg-black/30 z-10" />

                <div className="relative z-10 w-full max-w-xl px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {isSubmitted ? (
                            <div className="py-12 text-center space-y-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto"
                                >
                                    <Send className="w-8 h-8" />
                                </motion.div>
                                <h2 className="font-display text-3xl text-white uppercase tracking-tight">¡Gracias por confirmar!</h2>
                                <p className="font-serif italic text-white/70">Hemos recibido tu respuesta con éxito.</p>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-10 space-y-2">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 block">
                                        ¿Nos acompañas?
                                    </span>
                                    <h2 className="font-display text-4xl font-bold tracking-tight text-white">
                                        CONFIRMAR ASISTENCIA
                                    </h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/50">Nombre Completo</label>
                                        <input
                                            required
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Nombre y Apellidos"
                                            className="w-full bg-transparent border-b border-white/30 p-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/30 font-serif italic"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-white/50">Nota Especial</label>
                                        <textarea
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                            placeholder="¿Alguna restricción alimentaria?"
                                            rows={2}
                                            className="w-full bg-transparent border-b border-white/30 p-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/30 font-serif italic resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!name || isSubmitting}
                                        className="w-full bg-white text-dark-gray py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-taupe hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8"
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
