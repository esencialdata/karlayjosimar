"use client";
import Image from "next/image";
import { FadeIn } from "./ui/FadeIn";

export default function Details() {
    return (
        <section id="detalles" className="relative w-full bg-[#E8E6E3] text-[#4A4641] py-24 md:py-40 px-6 overflow-hidden">
            {/* Background Grain Layer - stays behind everything */}
            <div className="grain-overlay opacity-[0.4]" />
            {/* Minimalist Star Icon (top left) */}
            <div className="absolute top-8 left-8 hidden md:block opacity-30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1">
                    <path d="M12 0L13.8 10.2L24 12L13.8 13.8L12 24L10.2 13.8L0 12L10.2 10.2L12 0Z" fill="currentColor" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">

                    {/* Left Side: Large Portrait Image */}
                    <div className="md:col-span-5">
                        <FadeIn delay={0.1}>
                            <div className="relative aspect-[3/4.5] w-full overflow-hidden shadow-2xl">
                                <Image
                                    src="/1.jpeg"
                                    alt="Karla y Josimar"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Side: Content */}
                    <div className="md:col-span-7 space-y-12">
                        <FadeIn delay={0.3}>
                            <div className="space-y-8">
                                <h3 className="text-xs uppercase tracking-[0.5em] text-[#8C8884] font-medium">
                                    Detalles del Evento
                                </h3>

                                <h2 className="text-5xl md:text-8xl font-serif leading-[1.1] text-[#2C2A28] uppercase tracking-tight">
                                    EL COMIENZO<br />
                                    <span className="italic font-light">DE NUESTRA</span><br />
                                    HISTORIA
                                </h2>

                                <div className="max-w-lg space-y-6">
                                    <p className="text-base md:text-lg leading-relaxed text-[#5C5854] font-light">
                                        Te invitamos a ser testigo de un momento único. El sábado 24 de Octubre, abriremos las puertas para compartir el inicio de nuestra vida juntos.
                                    </p>

                                    <div className="grid grid-cols-2 gap-12 pt-8 border-t border-[#D1CEC9]">
                                        <div className="space-y-3">
                                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8884]">Recepción</p>
                                            <p className="text-3xl font-serif italic text-[#2C2A28]">3:30 PM</p>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8884]">Ceremonia</p>
                                            <p className="text-3xl font-serif italic text-[#2C2A28]">3:45 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Secondary Overlapping Image */}
                        <div className="flex justify-end md:justify-start pt-8 md:pt-0">
                            <FadeIn delay={0.5} className="w-2/3 md:w-1/2">
                                <div className="relative aspect-square overflow-hidden shadow-xl ring-8 ring-white/50">
                                    <Image
                                        src="/2.jpeg"
                                        alt="Detalle"
                                        fill
                                        className="object-cover grayscale"
                                    />
                                </div>
                            </FadeIn>
                        </div>

                        {/* Elegant Link/Signature */}
                        <FadeIn delay={0.7} className="pt-8 flex items-center gap-4 group cursor-pointer">
                            <div className="w-8 h-8 rounded-full border border-[#D1CEC9] flex items-center justify-center group-hover:bg-[#2C2A28] group-hover:border-[#2C2A28] transition-all duration-500">
                                <span className="text-[#2C2A28] group-hover:text-[#E8E6E3] font-light text-xl">+</span>
                            </div>
                            <span className="text-xs uppercase tracking-[0.3em] text-[#5C5854] font-medium border-b border-[#D1CEC9] pb-1">
                                Acompáñanos en este día
                            </span>
                        </FadeIn>
                    </div>
                </div>
            </div>

        </section>
    );
}
