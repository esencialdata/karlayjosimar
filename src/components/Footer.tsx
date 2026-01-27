"use client";
import { FadeIn } from "./ui/FadeIn";

export default function Footer() {
    return (
        <footer className="py-20 w-auto text-center bg-off-white border-t border-taupe/10 mx-4 mb-4 md:w-full md:mx-0 md:mb-0">
            <FadeIn>
                <div className="space-y-6">
                    <h2 className="text-3xl font-display text-taupe">K & J</h2>
                    <p className="text-gray-500 text-sm tracking-widest uppercase font-sans">
                        Gracias por ser parte de nuestra historia
                    </p>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-12">
                        04 Abril 2026
                    </div>
                </div>
            </FadeIn>
        </footer>
    );
}
