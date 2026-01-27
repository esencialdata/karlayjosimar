"use client";
import React from "react";
import { motion } from "framer-motion";


export default function DressCode() {
    const colors = [
        { name: "All Black", hex: "#111111" },
    ];

    return (
        <section id="dresscode" className="py-24 px-6 bg-off-white border-t border-taupe/10 mx-4 mb-4 md:mx-0 md:mb-0">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 space-y-4"
                >
                    <h2 className="font-display text-4xl md:text-6xl uppercase tracking-widest text-dark-gray">
                        Código de Vestimenta
                    </h2>
                    <p className="font-script text-4xl text-taupe">
                        All Black Obligatorio
                    </p>
                </motion.div>

                {/* Icons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center border border-taupe/30 rounded-full bg-white shadow-sm">
                            <img src="/dress.png" alt="Dress icon" className="w-12 md:w-16 h-auto" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-sans text-sm uppercase tracking-[0.2em] font-medium border-b border-taupe/20 pb-2 mb-2 inline-block">Mujeres</h3>
                            <div className="font-serif italic text-gray-500 text-sm space-y-1">
                                <p className="font-medium text-dark-gray">Vestido largo All Black</p>
                                <p>Elegancia y sobriedad</p>
                                <p>Evitar estampados o aplicaciones de color</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center border border-taupe/30 rounded-full bg-white shadow-sm">
                            <img src="/Black-Suit-Transparent-Image.png" alt="Suit icon" className="w-12 md:w-16 h-auto" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-sans text-sm uppercase tracking-[0.2em] font-medium border-b border-taupe/20 pb-2 mb-2 inline-block">Hombres</h3>
                            <div className="font-serif italic text-gray-500 text-sm space-y-1">
                                <p className="font-medium text-dark-gray">Traje formal All Black</p>
                                <p>Camisa negra, corbata negra</p>
                                <p>Evitar colores claros</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Color Palette - Single Black Swatch */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <span className="font-sans text-xs uppercase tracking-[0.3em] text-taupe block">
                        Paleta de Color
                    </span>
                    <div className="flex gap-4 md:gap-6 justify-center">
                        {colors.map((c, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gray-200 shadow-inner ring-4 ring-black/5"
                                    style={{ backgroundColor: c.hex }}
                                />
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">{c.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
