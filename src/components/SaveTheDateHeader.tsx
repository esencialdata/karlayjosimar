import React from "react";
import { motion } from "framer-motion";

export default function SaveTheDateHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[420px] md:max-w-[480px] mx-auto text-[#f5f3f0] flex flex-col items-center select-none"
        >
            {/* 1) ROW 1: SAVE - THE - DATE */}
            <div className="w-full flex items-center justify-between px-4 md:px-0 mb-3 md:mb-4">
                <span className="font-serif text-[18px] md:text-[20px] tracking-[0.35em] leading-none">
                    SAVE
                </span>
                <span className="font-script text-[16px] md:text-[18px] opacity-80 relative top-[1px]">
                    The
                </span>
                <span className="font-serif text-[18px] md:text-[20px] tracking-[0.35em] leading-none">
                    DATE
                </span>
            </div>

            {/* 2) ROW 2: NAMES */}
            <div className="text-center w-full mb-1">
                <h1 className="font-serif text-[20px] md:text-[22px] tracking-[0.25em] whitespace-nowrap">
                    KARLA & JOSIMAR
                </h1>
            </div>

            {/* 3) ROW 3: SUBTITLE */}
            <div className="text-center w-full mb-6 md:mb-8">
                <p className="font-serif text-[10px] md:text-[11px] tracking-[0.25em] uppercase opacity-80">
                    ARE GETTING MARRIED
                </p>
            </div>

            {/* 4) ROW 4: DATE EMBLEM */}
            <div className="w-full flex items-center justify-center gap-3 md:gap-4 px-2">
                {/* Left: Line + Saturday */}
                <div className="flex-1 flex items-center gap-3 justify-end">
                    <div className="h-[1px] bg-[#f5f3f0]/40 w-full max-w-[40px] md:max-w-[60px]"></div>
                    <span className="font-serif text-[10px] md:text-[11px] tracking-[0.15em] shrink-0">
                        SATURDAY
                    </span>
                </div>

                {/* Center: April + 04 */}
                <div className="flex flex-col items-center mx-2 md:mx-4">
                    <span className="font-serif text-[11px] md:text-[12px] tracking-[0.15em] uppercase leading-none mb-1">
                        APRIL
                    </span>
                    <span className="font-serif text-[32px] md:text-[38px] leading-none">
                        04
                    </span>
                </div>

                {/* Right: 2026 + Line */}
                <div className="flex-1 flex items-center gap-3 justify-start">
                    <span className="font-serif text-[10px] md:text-[11px] tracking-[0.15em] shrink-0">
                        2026
                    </span>
                    <div className="h-[1px] bg-[#f5f3f0]/40 w-full max-w-[40px] md:max-w-[60px]"></div>
                </div>
            </div>
        </motion.div>
    );
}
