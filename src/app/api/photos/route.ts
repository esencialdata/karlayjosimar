import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: 'guest_photos', // Folder name we used in uploads
            max_results: 50,
            direction: 'desc',
            sort_by: 'created_at',
        });

        const photos = result.resources.map((resource: any) => ({
            id: resource.public_id,
            url: resource.secure_url,
            width: resource.width,
            height: resource.height,
        }));

        return NextResponse.json(photos);
    } catch (error) {
        console.error('Error fetching photos from Cloudinary:', error);
        return NextResponse.json({ error: 'Error fetching photos' }, { status: 500 });
    }
}
