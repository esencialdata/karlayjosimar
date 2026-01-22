import { FadeIn } from "./ui/FadeIn";

export default function Agenda() {
    const events = [
        { time: "3:30 PM", title: "Recepción", desc: "Bienvenida y cóctel" },
        { time: "3:45 PM", title: "Ceremonia", desc: "El momento del 'Sí'" },
        { time: "5:30 PM", title: "Cena", desc: "Celebración gastronómica" },
        { time: "9:00 PM", title: "Fiesta", desc: "Baile y celebración" },
    ];

    return (
        <section className="py-24 px-6 w-full max-w-3xl mx-auto">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Timeline</h2>
                </div>
            </FadeIn>

            <div className="relative border-l border-neutral-800 ml-6 md:ml-auto md:mx-auto md:w-full max-w-xl space-y-12">
                {events.map((event, index) => (
                    <FadeIn key={index} delay={0.1 * index} className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-neutral-600 rounded-full"></div>
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8">
                            <span className="text-xl md:text-2xl font-light text-white tabular-nums">{event.time}</span>
                            <div className="flex-1">
                                <h3 className="text-lg font-medium tracking-wide uppercase text-neutral-300">{event.title}</h3>
                                <p className="text-neutral-500 text-sm">{event.desc}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
