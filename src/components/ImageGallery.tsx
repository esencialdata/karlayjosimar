"use client";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function ImageGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // We translate the x position from 0 to -X% based on the scroll
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-85%"]);

    const images = [
        { src: "/1.jpeg", alt: "Karla y Josimar 1" },
        { src: "/2.jpeg", alt: "Karla y Josimar 2" },
        { src: "/3.jpeg", alt: "Karla y Josimar 3" },
        { src: "/4.jpeg", alt: "Karla y Josimar 4" },
        { src: "/5.jpeg", alt: "Karla y Josimar 5" },
        { src: "/6.jpeg", alt: "Karla y Josimar 6" },
    ];

    return (
        <section ref={targetRef} className="relative h-[350vh] bg-[#E8E6E3]">
            <div className="grain-overlay opacity-[0.4]" />

            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 md:gap-8 px-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative h-[60vh] md:h-[75vh] aspect-[3/4.5] flex-shrink-0 overflow-hidden rounded-sm shadow-2xl shadow-black/10 group bg-neutral-200"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                sizes="50vw"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
                        </div>
                    ))}

                    {/* Decorative text card at the end */}
                    <div className="flex-shrink-0 w-[400px] flex flex-col justify-center px-12 space-y-4">
                        <h3 className="text-4xl md:text-6xl font-serif italic text-[#2C2A28]">
                            Momentos <br /> que duran <br /> para siempre
                        </h3>
                        <div className="w-12 h-px bg-[#4A4641]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
