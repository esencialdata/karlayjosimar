import PhotoUpload from "./PhotoUpload";
import LiveGallery from "./LiveGallery";

export default function SectionGallery() {
    return (
        <section className="py-20 px-4 bg-[#FDFBF7] text-center" id="galeria">
            <div className="max-w-4xl mx-auto mb-10">
                <p className="text-[#8C4A35] text-sm tracking-[0.2em] uppercase mb-2 font-serif">
                    Comparte tus momentos
                </p>
                <h2 className="text-5xl md:text-6xl font-[Allura] text-[#5e664e] mb-6">
                    Galería
                </h2>
                <p className="text-gray-600 font-serif max-w-lg mx-auto mb-8">
                    Queremos ver nuestra boda a través de tus ojos. Sube tus fotos aquí y aparecerán en tiempo real.
                </p>

                <div id="subir-fotos" className="scroll-mt-24">
                    <PhotoUpload />
                </div>
            </div>

            <LiveGallery />
        </section>
    );
}
