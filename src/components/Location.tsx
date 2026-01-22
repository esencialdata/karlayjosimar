"use client";
import Image from "next/image";
import { FadeIn } from "./ui/FadeIn";
import { MapPin } from "lucide-react";

export default function Location() {
    return (
        <section id="ubicacion" className="w-full bg-black min-h-screen flex flex-col md:flex-row overflow-hidden">
            {/* Left Column: Content */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-20 bg-black relative z-10">
                {/* Subtle grain only on the black section if desired, but image shows clean dark */}
                <FadeIn className="space-y-8">
                    <div className="space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-medium">
                            Ubicación
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
                            Jardín <br />
                            <span className="italic font-light">La Troje</span>
                        </h2>
                    </div>

                    <div className="max-w-md space-y-6">
                        <p className="text-neutral-400 text-lg leading-relaxed font-light">
                            Cam. Acequia Blanca S/N, Villas del Mesón, Juriquilla, Qro.
                        </p>

                        <div className="pt-8">
                            <a
                                href="https://maps.app.goo.gl/F2zsiQtr9z8Av3sS7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 text-white group"
                            >
                                <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                                    <MapPin className="w-5 h-5 text-neutral-500 group-hover:text-black" />
                                </div>
                                <span className="text-xs uppercase tracking-[0.3em] font-medium border-b border-neutral-800 pb-1 group-hover:border-white transition-colors duration-500">
                                    Abrir en Google Maps
                                </span>
                            </a>
                        </div>
                    </div>
                </FadeIn>

                {/* Subtle decorative elements for that "premium" feel */}
                <div className="absolute bottom-12 left-24 hidden lg:block opacity-20">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white rotate-90 origin-left">
                        76230 QRO. MÉXICO
                    </p>
                </div>
            </div>

            {/* Right Column: Large Image */}
            <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
                <Image
                    src="/locacion.png"
                    alt="Jardín La Troje"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay for better mobile blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-none" />
            </div>
        </section>
    );
}
