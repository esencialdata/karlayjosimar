"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SaveTheDateHeader from "./SaveTheDateHeader";

interface HeroProps {
    names?: string;
    date?: string;
    imageSrc?: string;
}

export default function Hero({
    names = "KARLA & JOSIMAR",
    imageSrc = "/hero-boda.jpg",
}: HeroProps) {
    return (
        <section className="h-screen w-full relative overflow-hidden bg-black">
            {/* 1. Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt="Karla & Josimar"
                    fill
                    className="object-cover object-center md:object-top opacity-80"
                    priority
                />
                {/* Gradients to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80 z-10" />
            </div>

            {/* 2. Text Overlay (Z-Index higher than image) */}
            <div className="relative z-20 h-full flex flex-col items-center justify-start pt-20 md:pt-24 px-4">
                {/* Reusable Header Component */}
                <SaveTheDateHeader />
            </div>

            {/* 3. Scroll Hint (Bottom anchored) */}
            <motion.div
                className="absolute bottom-8 left-0 right-0 z-30 flex flex-col items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/70 drop-shadow-md">
                    Desliza
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    onClick={() => {
                        document.getElementById("detalles")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="cursor-pointer p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                    <ChevronDown className="w-6 h-6 text-white" strokeWidth={1} />
                </motion.div>
            </motion.div>
        </section>
    );
}
