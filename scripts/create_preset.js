const cloudinary = require('cloudinary').v2;

// Configure with the credentials provided by the user
cloudinary.config({
    cloud_name: 'dhcclgisn',
    api_key: '896177187325774',
    api_secret: 'L1xE7-ZNB7dfgsejASfoShucfNI'
});

async function createPreset() {
    try {
        console.log("Creating upload preset...");
        const result = await cloudinary.api.create_upload_preset({
            name: 'invitacion_preset',
            unsigned: true,
            folder: 'guest_photos',
        });
        console.log("Preset created successfully:", result.name);
    } catch (error) {
        if (error.error && error.error.message && error.error.message.includes("already exists")) {
            console.log("Preset 'invitacion_preset' already exists. Using it.");
        } else {
            console.error("Error creating preset:", error);
        }
    }
}

createPreset();
