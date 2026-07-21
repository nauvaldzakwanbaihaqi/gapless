const fs = require('fs');
const Jimp = require('jimp');

const files = [
    'public/The Builder.png',
    'public/The Connector.png',
    'public/The Creator.png',
    'public/The Thinker.png'
];

async function processImages() {
    for (const file of files) {
        console.log('Processing ' + file);
        try {
            const image = await Jimp.read(file);
            
            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
                const red   = this.bitmap.data[idx + 0];
                const green = this.bitmap.data[idx + 1];
                const blue  = this.bitmap.data[idx + 2];
                
                // If the pixel is very close to white
                if (red > 240 && green > 240 && blue > 240) {
                    // Make it fully transparent
                    this.bitmap.data[idx + 3] = 0;
                }
            });
            
            await image.writeAsync(file);
            console.log('Successfully saved ' + file);
        } catch (e) {
            console.error('Error processing ' + file, e);
        }
    }
}

processImages().then(() => console.log('Done')).catch(console.error);
