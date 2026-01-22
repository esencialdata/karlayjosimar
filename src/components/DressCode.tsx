import { FadeIn } from "./ui/FadeIn";

const DressIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M12 2L8 6H16L12 2Z" fill="currentColor" />
        <path d="M8 6H16V10C16 12 15 13 12 14C9 13 8 12 8 10V6Z" />
        <path d="M8 10L4 22H20L16 10" />
    </svg>
); // Simplified abstract shape, I'll use a better path below.

const WomanIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 20v-10l-2 -4h12l-2 4v10" />
        <path d="M12 4a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" transform="translate(0 2)" />
    </svg>
);

const ManIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 14m-12 0a2 2 0 1 0 24 0a2 2 0 1 0 -24 0" fill="currentColor" opacity="0.1" stroke="none" />
        <path d="M6 9v11a1 1 0 0 0 1 1h2.5v-5h5v5h2.5a1 1 0 0 0 1 -1v-11" />
        <path d="M9 9l3 3l3 -3" />
        <path d="M12 6l-3 3h6z" />
    </svg>
); // Suit icon sort of

export default function DressCode() {
    return (
        <section className="py-24 px-6 bg-neutral-900/40 border-y border-neutral-900">
            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-16 space-y-2">
                        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Importante</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Dress Code</h2>
                        <p className="text-xl text-white font-serif italic mt-2">All Black Obligatorio</p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <FadeIn delay={0.2}>
                        <div className="flex flex-col items-center text-center space-y-6 p-8 border border-neutral-800/50 rounded hover:border-neutral-700 transition-colors">
                            <WomanIcon />
                            <h3 className="text-lg font-medium tracking-widest uppercase">Mujeres</h3>
                            <ul className="space-y-3 text-neutral-400 font-light text-sm">
                                <li>Vestido largo <strong className="text-white font-normal">All Black</strong></li>
                                <li>Elegancia y sobriedad</li>
                                <li>Evitar estampados o aplicaciones de color</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col items-center text-center space-y-6 p-8 border border-neutral-800/50 rounded hover:border-neutral-700 transition-colors">
                            <ManIcon />
                            <h3 className="text-lg font-medium tracking-widest uppercase">Hombres</h3>
                            <ul className="space-y-3 text-neutral-400 font-light text-sm">
                                <li>Traje formal <strong className="text-white font-normal">All Black</strong></li>
                                <li>Camisa negra, corbata negra</li>
                                <li>Evitar colores claros</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={0.6} className="mt-12 text-center">
                    <p className="text-neutral-500 text-sm max-w-lg mx-auto">
                        Agradecemos respetar el código de vestimenta para mantener la estética de la noche.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
