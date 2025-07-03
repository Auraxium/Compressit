const ffmpeg = require('fluent-ffmpeg');

ffmpeg("C:/Users/Auraxium/Downloads/ELDEN RING NIGHTREIGN 2025-06-05 23-33-03.mp4")
  .output('output128x72-24.mp4')
  .videoCodec('libx264')
  .size('1280x720') // Resize
  .outputOptions('-crf 24') // Compression level: 18 = high quality, 28 = high compression
  .on('end', () => console.log('Compression done'))
  .on('error', err => console.error('Error: ' + err.message))
  .run();
