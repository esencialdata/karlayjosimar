"use client";
import Image from "next/image";
import { FadeIn } from "./ui/FadeIn";

export default function Collections() {
    return (
        <section className="relative w-full bg-[#E8E6E3] text-[#4A4641] py-24 md:py-40 px-6 overflow-hidden">
            {/* Background Grain Layer */}
            <div className="grain-overlay opacity-[0.4]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <FadeIn>
                    <div className="flex justify-between items-end border-b border-[#D1CEC9] pb-8 mb-16">
                        <div className="flex items-center gap-12">
                            {/* Minimalist Star Icon */}
                            <div className="opacity-40">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="0.5">
                                    <path d="M12 0L13.8 10.2L24 12L13.8 13.8L12 24L10.2 13.8L0 12L10.2 10.2L12 0Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-sans tracking-widest uppercase">
                                <span className="font-serif italic font-light lowercase">Nuestros</span> Momentos
                            </h2>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-medium border-b border-[#4A4641] pb-1">
                                Karla & Josimar
                            </span>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* Left Text Block */}
                    <div className="md:col-span-3 space-y-8 pt-4">
                        <FadeIn delay={0.2}>
                            <div className="space-y-6">
                                <h3 className="text-xs uppercase tracking-[0.4em] text-[#8C8884] font-semibold">
                                    Galería Especial
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed text-[#5C5854] font-light max-w-[240px]">
                                    Capturando la esencia de nuestro camino juntos. Cada fotografía cuenta un fragmento de la historia que estamos construyendo.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Image A */}
                    <div className="md:col-span-4.5 lg:col-span-4">
                        <FadeIn delay={0.4}>
                            <div className="relative aspect-[3/4.5] overflow-hidden shadow-2xl group">
                                <Image
                                    src="/a.jpeg"
                                    alt="Moment A"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Image B */}
                    <div className="md:col-span-4.5 lg:col-span-5">
                        <FadeIn delay={0.6}>
                            <div className="relative aspect-[3/4.5] md:aspect-[4/5] overflow-hidden shadow-2xl group">
                                <Image
                                    src="/b.jpeg"
                                    alt="Moment B"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
