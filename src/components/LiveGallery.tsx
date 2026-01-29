"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface Photo {
    id: string;
    url: string;
    width?: number;
    height?: number;
}

export default function LiveGallery() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPhotos = useCallback(async () => {
        try {
            const res = await fetch("/api/photos");
            if (res.ok) {
                const data = await res.json();
                setPhotos(data);
            }
        } catch (error) {
            console.error("Error fetching photos", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPhotos();

        // Listen for custom event from PhotoUpload
        const handleNewUpload = () => {
            // Small delay to allow Cloudinary indexing? Usually pretty fast for Admin API
            setTimeout(fetchPhotos, 2000);
        };

        window.addEventListener("photo-uploaded", handleNewUpload);

        // Optional: Poll every 15 seconds to simulate real-time for other guests
        const interval = setInterval(fetchPhotos, 15000);

        return () => {
            window.removeEventListener("photo-uploaded", handleNewUpload);
            clearInterval(interval);
        };
    }, [fetchPhotos]);

    if (loading) {
        return (
            <div className="w-full text-center py-10 text-gray-400 italic">
                Cargando galería...
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            {photos.length === 0 ? (
                <p className="text-center text-gray-400 italic py-10">
                    Las fotos tomadas por los invitados aparecerán aquí...
                </p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="relative aspect-square overflow-hidden rounded-lg shadow-sm group animate-in fade-in zoom-in duration-500 fill-mode-backwards"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Image
                                src={photo.url}
                                alt="Foto de invitado"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
