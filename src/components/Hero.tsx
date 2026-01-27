"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero h-[100dvh] w-full relative overflow-hidden bg-black flex items-center justify-center">
            {/* HeroImage: Imagen de fondo full-bleed con mejor posicionamiento */}
            <div className="hero-image absolute inset-0 z-0 select-none">
                <Image
                    src="/hero-new.jpg"
                    alt="Karla y Josimar"
                    fill
                    // Mobile: top-center bias (to save heads). Desktop: center.
                    className="object-cover object-[50%_25%] md:object-[50%_35%] opacity-90 contrast-[1.05]"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* OverlayContent */}
            <div className="hero-overlay relative z-10 w-full h-full flex flex-col items-center justify-end pb-[15vh] md:justify-center md:pb-0 md:pt-[10vh]">

                {/* Monogram SVG */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] select-none mix-blend-screen drop-shadow-2xl"
                >
                    <Image
                        src="/monograma1.svg"
                        alt="K&J Monogram"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* ChevronIcon: Flecha minimalista */}
                <motion.div
                    className="chevron mt-2 md:mt-6 text-white/90 drop-shadow-md cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    onClick={() => {
                        const intro = document.getElementById("intro");
                        if (intro) intro.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 opacity-80" strokeWidth={1} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
