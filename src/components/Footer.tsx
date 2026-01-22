import { FadeIn } from "./ui/FadeIn";

export default function Footer() {
    return (
        <footer className="py-20 border-t border-neutral-900 w-full text-center">
            <FadeIn>
                <div className="space-y-6">
                    <h2 className="text-2xl font-serif italic text-neutral-600">K & J</h2>
                    <p className="text-neutral-500 text-sm tracking-wide">
                        Gracias por ser parte de esta noche.
                    </p>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-700 mt-12">
                        Octubre 2026
                    </div>
                </div>
            </FadeIn>
        </footer>
    );
}
