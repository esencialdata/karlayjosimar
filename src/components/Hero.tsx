"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-[100dvh] bg-neutral-900 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-new.jpg"
                    alt="Karla y Josimar"
                    fill
                    className="object-contain object-center opacity-85"
                    priority
                    sizes="100vw"
                />
                {/* Subtle overlay for text readability */}
                <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Content Content: Safe padded area */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-8 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center text-center text-white space-y-2 md:space-y-6"
                >
                    {/* Title: NOS CASAMOS */}
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-8xl tracking-[0.2em] uppercase leading-none drop-shadow-lg">
                        Nos Casamos
                    </h1>

                    {/* Subtitle: KARLA & JOSIMAR */}
                    <h2 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl md:text-4xl tracking-[0.2em] uppercase flex items-center gap-3 drop-shadow-md pt-2">
                        <span>Karla</span>
                        <span className="text-xs md:text-2xl opactiy-80">&</span>
                        <span>Josimar</span>
                    </h2>

                    {/* Date Line: SATURDAY | APRIL 04 | 2026 */}
                    {/* Date Line: SATURDAY | APRIL 04 | 2026 */}
                    <div className="flex items-center justify-center gap-4 md:gap-12 pt-6 md:pt-10 w-full max-w-4xl mx-auto">

                        {/* Custom Separator & Saturday */}
                        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
                            <div className="h-[1px] bg-white/60 w-8 md:w-24"></div>
                            <span className="font-[family-name:var(--font-inter)] text-[10px] md:text-lg tracking-[0.2em] text-white/90 uppercase">
                                Saturday
                            </span>
                            <div className="h-[1px] bg-white/60 w-8 md:w-24"></div>
                        </div>

                        {/* Center Date Stack */}
                        <div className="flex flex-col items-center justify-center leading-none px-2 md:px-6">
                            <span className="font-[family-name:var(--font-playfair)] text-[10px] md:text-xl tracking-[0.15em] uppercase text-white mb-1 md:mb-2">
                                April
                            </span>
                            <span className="font-[family-name:var(--font-playfair)] italic text-4xl md:text-7xl">
                                04
                            </span>
                        </div>

                        {/* Custom Separator & Year */}
                        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-start">
                            <div className="h-[1px] bg-white/60 w-8 md:w-24"></div>
                            <span className="font-[family-name:var(--font-inter)] text-[10px] md:text-lg tracking-[0.2em] text-white/90 uppercase">
                                2026
                            </span>
                            <div className="h-[1px] bg-white/60 w-8 md:w-24"></div>
                        </div>

                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Desktop Only */}
            <motion.div
                className="absolute bottom-6 z-20 hidden md:block text-white/80 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => {
                    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <ChevronDown className="w-8 h-8 animate-bounce" />
            </motion.div>
        </section>
    );
}
