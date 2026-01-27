"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
    const targetDate = new Date("2026-04-04T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <span className="font-sans text-4xl md:text-6xl text-dark-gray font-light tabular-nums">
                {String(value).padStart(2, "0")}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-taupe mt-2">
                {label}
            </span>
        </div>
    );

    return (
        <section className="py-20 px-6 bg-white flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl w-full flex flex-col items-center"
            >
                <div className="text-center mb-12">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-taupe block mb-2">
                        Faltan
                    </span>
                    <div className="w-12 h-px bg-taupe/30 mx-auto" />
                </div>

                <div className="grid grid-cols-4 gap-4 md:gap-12">
                    <TimeUnit value={timeLeft.days} label="Días" />
                    <TimeUnit value={timeLeft.hours} label="Horas" />
                    <TimeUnit value={timeLeft.minutes} label="Minutos" />
                    <TimeUnit value={timeLeft.seconds} label="Segundos" />
                </div>
            </motion.div>
        </section>
    );
}
