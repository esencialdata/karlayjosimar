"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DateHero() {
    return (
        <section className="relative w-full bg-black">
            {/* Background Image - Natural Height/No Crop */}
            <div className="relative w-full">
                <Image
                    src="/2.jpeg"
                    alt="Fecha de la boda"
                    width={1080}
                    height={1620} // Assuming portrait ratio roughly
                    className="w-full h-auto block opacity-80"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Overlay Grid - Positioned absolutely over the image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-[5%]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center text-white mix-blend-screen px-6"
                    >
                        {/* SÁBADO - Arched Label */}
                        <div className="mb-2 md:mb-4 relative w-[200px] h-[60px] flex justify-center">
                            <svg viewBox="0 0 200 60" className="w-full h-full absolute overflow-visible">
                                <path id="curveDate" d="M 20,50 Q 100,10 180,50" fill="transparent" />
                                <text width="200">
                                    <textPath
                                        xlinkHref="#curveDate"
                                        startOffset="50%"
                                        textAnchor="middle"
                                        className="font-display text-sm md:text-lg tracking-[0.3em] uppercase fill-white"
                                    >
                                        SÁBADO
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        {/* 28 - Medium Number */}
                        <span
                            className="font-sans text-6xl md:text-8xl leading-none mb-0 md:mb-1 font-light tracking-tight"
                        >
                            28
                        </span>

                        {/* ABRIL - The Protagonist */}
                        <h2
                            className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight font-normal"
                            style={{ maxWidth: '90vw' }}
                        >
                            ABRIL
                        </h2>

                        {/* 2026 - Year */}
                        <span
                            className="font-sans text-3xl md:text-5xl tracking-[0.2em] mt-2 md:mt-4 font-light"

                        >
                            2026
                        </span>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
