"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Gift } from "lucide-react";

export default function RSVP() {
    const [name, setName] = useState("");

    const [note, setNote] = useState("");

    const handleWhatsapp = () => {
        const text = `Hola, quiero confirmar mi asistencia a la boda de Karla y Josimar.%0A%0ANombre: ${name}%0ANotas: ${note}`;
        window.open(`https://wa.me/525500000000?text=${text}`, "_blank");
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
                    {/* Add an image here if desired, or keep dark elegant background */}
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

                        <div className="text-center mb-10 space-y-2">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-taupe block">
                                ¿Nos acompañas?
                            </span>
                            <h2 className="font-display text-4xl font-bold tracking-tight text-dark-gray">
                                CONFIRMAR ASISTENCIA
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-400">Nombre Completo</label>
                                <input
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
                                onClick={handleWhatsapp}
                                disabled={!name}
                                className="w-full bg-dark-gray text-white py-4 uppercase tracking-[0.2em] text-xs font-medium hover:bg-taupe transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8"
                            >
                                <span>Enviar Confirmación</span>
                                <Send className="w-3 h-3" />
                            </button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
