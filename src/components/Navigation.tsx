"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]);
    const backdropFilter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"]);
    const [isOpen, setIsOpen] = useState(false);

    // Links map to section IDs
    const links = [
        { name: "Inicio", id: "hero" },
        { name: "Detalles", id: "detalles" },
        { name: "Ubicación", id: "ubicacion" },
        { name: "Dress Code", id: "dresscode" },
        { name: "Confirmar", id: "rsvp" }
    ];

    const scrollTo = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else if (id === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                style={{ backgroundColor, backdropFilter }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center"
            >
                <div className="text-white font-serif italic text-xl z-50 relative tracking-widest">K&J</div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {links.map(link => (
                        <button
                            key={link.name}
                            onClick={() => scrollTo(link.id)}
                            className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Nav Toggle */}
                <button className="md:hidden text-white z-50 relative" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-10 transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                {links.map(link => (
                    <button
                        key={link.name}
                        onClick={() => scrollTo(link.id)}
                        className="text-2xl font-light text-white tracking-[0.2em] uppercase hover:text-neutral-400 transition-colors"
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </>
    );
}
