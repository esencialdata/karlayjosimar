"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconCeremony, IconReception } from "./Icons";

export default function Location() {
    return (
        <section id="ubicacion" className="w-full flex flex-col md:flex-row">

            {/* Single Reception Block */}
            <div className="bg-[#A8988A] text-white py-24 px-6 flex flex-col items-center text-center mx-4 mb-4 mt-4 md:w-full md:mx-0 md:mb-0 md:mt-0 justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-md space-y-6 flex flex-col items-center"
                >
                    <div className="p-4 border border-white/30 rounded-full mb-4">
                        <IconReception className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl uppercase tracking-widest flex flex-col items-center">
                        <span className="text-xl md:text-2xl opacity-70 tracking-[0.3em] mb-1">Ceremonia y</span>
                        <span className="font-normal normal-case text-5xl md:text-7xl -mt-2 md:-mt-4" style={{ fontFamily: 'var(--font-pinyon), cursive' }}>Recepción</span>
                    </h2>

                    <p className="font-serif italic text-xl opacity-90">
                        Jardín La Troje
                    </p>

                    <div className="space-y-1 py-4 font-sans text-sm tracking-widest uppercase">
                        <p>Juriquilla, Qro</p>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/kyk87jMfsrZp3xtk9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 px-8 py-3 border border-white/50 text-xs text-white uppercase tracking-[0.2em] hover:bg-white hover:text-[#A8988A] transition-colors duration-300"
                    >
                        Ver Ubicación
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
