import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = 'force-dynamic';

export async function GET() {
    // Debug logging
    console.log("API Route: Fetching photos...");
    console.log("Cloud Name Configured:", !!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
    console.log("API Key Configured:", !!process.env.CLOUDINARY_API_KEY);
    console.log("API Secret Configured:", !!process.env.CLOUDINARY_API_SECRET);

    try {
        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: 'guest_photos', // Folder name we used in uploads
            max_results: 50,
            direction: 'desc',
            sort_by: 'created_at',
        });

        console.log(`API Route: Found ${result.resources.length} photos.`);

        const photos = result.resources.map((resource: any) => ({
            id: resource.public_id,
            url: resource.secure_url,
            width: resource.width,
            height: resource.height,
        }));

        return NextResponse.json(photos);
    } catch (error) {
        console.error('Error fetching photos from Cloudinary:', error);
        return NextResponse.json({
            error: 'Error fetching photos',
            details: (error as Error).message
        }, { status: 500 });
    }
}
