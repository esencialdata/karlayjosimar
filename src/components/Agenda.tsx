"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconCeremony, IconToast, IconReception, IconParty } from "./Icons";

export default function Agenda() {
    const events = [
        { time: "3:30 PM", title: "Ceremonia y Recepción", icon: IconReception },
        { time: "3:45 PM", title: "Ceremonia Religiosa", icon: IconCeremony },
    ];

    return (
        <section className="py-24 px-6 w-auto bg-off-white flex flex-col items-center mx-4 mb-4 md:w-full md:mx-0 md:mb-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="font-display text-5xl md:text-6xl uppercase tracking-widest text-dark-gray">
                    Itinerario
                </h2>
                <div className="w-16 h-px bg-taupe mx-auto mt-6" />
            </motion.div>

            <div className="relative max-w-lg w-full">
                {/* Vertical Line */}
                <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-px bg-taupe/30 -translate-x-1/2" />

                <div className="space-y-12">
                    {events.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="relative flex items-center gap-8 md:gap-0 md:justify-between group"
                            >
                                {/* Time (Left on Desktop, Right of Icon on Mobile) */}
                                <div className="hidden md:block w-[45%] text-right">
                                    <span className="font-serif italic text-2xl text-taupe">{event.time}</span>
                                </div>

                                {/* Icon (Center) */}
                                <div className="relative z-10 w-[54px] h-[54px] bg-off-white border border-taupe rounded-full flex items-center justify-center shrink-0">
                                    <Icon className="w-6 h-6 text-dark-gray" strokeWidth={1} />
                                </div>

                                {/* Title (Right on Desktop, Right of Icon on Mobile) */}
                                <div className="w-[calc(100%-70px)] md:w-[45%] text-left pl-2 md:pl-0">
                                    <h3 className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-dark-gray font-medium">
                                        {event.title}
                                    </h3>
                                    {/* Mobile Only Time */}
                                    <span className="md:hidden font-serif italic text-lg text-taupe mt-1 block">
                                        {event.time}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
