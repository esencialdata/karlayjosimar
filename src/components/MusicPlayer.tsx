"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        // Intentar reproducir automáticamente al cargar (puede ser bloqueado por el navegador)
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Volumen inicial al 50%
            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((error) => {
                        console.log("Autoplay prevented:", error);
                        setIsPlaying(false);
                    });
            }
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/song.m4a"
                loop
                onError={(e) => {
                    console.warn("Audio source failed to load (likely missing 'song.m4a' in public folder).");
                    setIsPlaying(false);
                }}
            />

            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={togglePlay}
                    className={`
                        group flex items-center gap-3 px-4 py-3 rounded-full shadow-2xl transition-all duration-300
                        ${isPlaying ? "bg-zinc-900 text-white pr-6" : "bg-white text-zinc-900 hover:bg-zinc-50"}
                        border border-zinc-200/50 backdrop-blur-md
                    `}
                    aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
                >
                    {/* Icon Container */}
                    <div className={`
                        flex items-center justify-center w-8 h-8 rounded-full transition-colors
                        ${isPlaying ? "bg-white/10" : "bg-zinc-100"}
                    `}>
                        {isPlaying ? (
                            <Volume2 className="w-4 h-4" />
                        ) : (
                            <VolumeX className="w-4 h-4 text-zinc-400" />
                        )}
                    </div>

                    {/* Text Info */}
                    <div className="flex flex-col items-start overflow-hidden">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isPlaying ? "text-zinc-400" : "text-zinc-500"}`}>
                            {isPlaying ? "Reproduciendo" : "Música de fondo"}
                        </span>
                        <span className={`text-xs font-medium whitespace-nowrap ${isPlaying ? "text-white" : "text-zinc-900"}`}>
                            {isPlaying ? (
                                <span className="flex items-center gap-2">
                                    Turning Page
                                    {/* Mini Equalizer Animation */}
                                    <span className="flex gap-[2px] items-end h-3 pb-0.5">
                                        <motion.span
                                            animate={{ height: [4, 12, 6, 12, 4] }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                            className="w-0.5 bg-green-400 rounded-full"
                                        />
                                        <motion.span
                                            animate={{ height: [8, 4, 12, 5, 8] }}
                                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                            className="w-0.5 bg-green-400 rounded-full"
                                        />
                                        <motion.span
                                            animate={{ height: [6, 10, 4, 8, 6] }}
                                            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                                            className="w-0.5 bg-green-400 rounded-full"
                                        />
                                    </span>
                                </span>
                            ) : (
                                "Reproducir"
                            )}
                        </span>
                    </div>
                </button>
            </div>
        </>
    );
}
