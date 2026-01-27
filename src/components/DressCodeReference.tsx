"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DressCodeReference() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6 mb-16"
        >
            <div className="relative aspect-[3/4] md:aspect-video w-full overflow-hidden rounded-sm shadow-xl">
                <img
                    src="/PHOTO-2026-01-26-22-45-00.jpg"
                    alt="Referencia de Código de Vestimenta"
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>
    );
}
