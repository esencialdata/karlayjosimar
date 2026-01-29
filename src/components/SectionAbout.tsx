"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionAbout() {
    return (
        <section className="w-full flex flex-col items-center bg-white pb-20">

            {/* 1. PhotoStrip */}
            {/* 1. PhotoStrip - Now Floating & Overlapping Hero */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-[85%] md:w-[60%] max-w-[600px] relative -mt-8 md:-mt-[12vh] z-20 shadow-2xl mx-auto"
            >
                <Image
                    src="/IMG_1822.jpg"
                    alt="Karla y Josimar"
                    width={1200}
                    height={800}
                    className="w-full h-auto block"
                    sizes="(max-width: 768px) 85vw, 600px"
                    priority
                />
            </motion.div>
            {/* 2. AboutCard (Bloque beige) */}
            <div className="relative z-10 w-auto mx-4 md:w-full md:mx-0 max-w-[760px] bg-[#F9F7F2] px-8 py-10 md:py-16 md:px-14 shadow-sm text-center mt-8 md:rounded-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    {/* Eyebrow: Straight "NOSOTROS" */}
                    <div className="mb-16 md:mb-20 text-center">
                        <span className="font-sans text-sm md:text-lg tracking-[0.4em] uppercase text-[#8C8884]">
                            Nosotros
                        </span>
                    </div>

                    {/* NamesLockup: Staggered Typography */}
                    <div className="relative w-full max-w-md mx-auto mb-12 flex flex-col items-center md:block h-[180px] md:h-[220px]">

                        {/* KARLA (Top Left) */}
                        <div className="flex flex-col items-center md:absolute md:top-0 md:left-4 md:items-start z-10">
                            <h2
                                className="font-display text-5xl md:text-8xl leading-none tracking-tight text-[#111111]"
                            >
                                KARLA
                            </h2>
                            {/* Surname Placeholder (if requested style needs it) */}
                            {/* <span className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mt-1 pl-1">ARAGÓN</span> */}
                        </div>

                        {/* "&" (Center/Floating) */}
                        <div className="my-2 md:my-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 mix-blend-multiply">
                            <span
                                className="text-5xl md:text-7xl text-[#4A4641] opacity-80 -rotate-12 block"
                                style={{ fontFamily: 'var(--font-pinyon), cursive' }}
                            >
                                y
                            </span>
                        </div>

                        {/* JOSIMAR (Bottom Right) */}
                        <div className="flex flex-col items-center md:absolute md:bottom-0 md:right-4 md:items-end z-10">
                            <h2
                                className="font-display text-5xl md:text-8xl leading-none tracking-tight text-[#111111]"
                            >
                                JOSIMAR
                            </h2>
                            {/* Surname Placeholder */}
                            {/* <span className="font-sans text-[10px] uppercase tracking-widest text-gray-500 mt-1 pr-1">HERNÁNDEZ</span> */}
                        </div>

                    </div>

                    {/* BodyCopy */}
                    <div className="max-w-md mx-auto space-y-6">

                        <p className="font-sans text-xs md:text-sm leading-loose tracking-wide text-[#4A4641] uppercase">
                            Después de años de aventuras, risas y crecimiento juntos, hemos decidido dar el siguiente paso. Queremos compartir nuestra felicidad con las personas que más amamos.
                        </p>
                    </div>

                </motion.div >
            </div >

        </section >
    );
}
