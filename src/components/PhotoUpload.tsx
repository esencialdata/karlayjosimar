"use client";

import { useState } from "react";
import { Image as ImageIcon, Loader2, Camera } from "lucide-react";

export default function PhotoUpload() {
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState("");

    const compressImage = (file: File): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            const maxWidth = 1280;
            const quality = 0.8;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;
                img.onload = () => {
                    let width = img.width;
                    let height = img.height;

                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }

                    const canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) {
                        reject(new Error("Could not get canvas context"));
                        return;
                    }
                    ctx.drawImage(img, 0, 0, width, height);

                    canvas.toBlob(
                        (blob) => {
                            if (blob) {
                                resolve(blob);
                            } else {
                                reject(new Error("Error compressing image"));
                            }
                        },
                        "image/jpeg",
                        quality
                    );
                };
                img.onerror = (error) => reject(error);
            };
            reader.onerror = (error) => reject(error);
        });
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Strict validation: Only images
        if (!file.type.startsWith("image/")) {
            setStatus("Solo puedes subir fotos (no videos).");
            return;
        }

        setUploading(true);
        setStatus("Comprimiendo...");

        try {
            const compressedBlob = await compressImage(file);
            setStatus("Subiendo...");

            const formData = new FormData();
            formData.append("file", compressedBlob);
            // "guest_photos" folder and "unsigned" preset must be configured in Cloudinary
            formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "ml_default");
            formData.append("folder", "guest_photos");

            const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            setStatus("¡Foto compartida!");
            setTimeout(() => setStatus(""), 3000);

            // Trigger a gallery refresh if possible, or just let the poller pick it up
            // Dispatch a custom event so LiveGallery knows to update immediately
            window.dispatchEvent(new Event("photo-uploaded"));

        } catch (error) {
            console.error("Error uploading photo:", error);
            setStatus("Error al subir. Intenta de nuevo.");
        } finally {
            setUploading(false);
            event.target.value = "";
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 py-6">
            <div className="relative">
                <label
                    htmlFor="camera-input"
                    className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 border-dashed cursor-pointer transition-all
            ${uploading
                            ? "border-gray-400 bg-gray-50 text-gray-400 cursor-not-allowed"
                            : "border-[#8C4A35] text-[#8C4A35] hover:bg-[#8C4A35]/5"
                        }
          `}
                >
                    {uploading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <Camera className="w-5 h-5" />
                    )}
                    <span className="font-medium font-serif">
                        {uploading ? "Procesando..." : "Tomar Foto"}
                    </span>
                </label>
                <input
                    type="file"
                    id="camera-input"
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileUpload}
                    disabled={uploading}
                    className="hidden"
                />
            </div>
            {status && (
                <p className={`text-sm  animate-fade-in ${status.includes("Error") ? "text-red-500" : "text-[#5e664e]"}`}>
                    {status}
                </p>
            )}
        </div>
    );
}
