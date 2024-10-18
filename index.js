
const express = require('express');
const app = express();
const port = 9999;
const path = require('path');
const ffmpegStatic = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
const crypto = require("crypto");

let uuid = crypto.randomUUID();

// Set the path to the ffmpeg binary
ffmpeg.setFfmpegPath(ffmpegStatic);

const inputUrl = 'https://campaign.salla.media/campaign_media/snapchat/21vFM1Q8AP1Jh5IMDs1Z7DQFPNsyxittSLzfvfqI.mp4';
const outputPath = path.join(__dirname, 'public', `output_${uuid}.mp4`);


app.get('/', async (req, res) => {
  try {
    
    // Download the video to a local file
    // Process the video file
    console.log('Processing video...');
    ffmpeg(inputUrl)
            .outputOptions('-threads 6') // Limit to 2 threads
            .videoCodec('libx264')
            .output(outputPath)
            .on('start', (commandLine) => {
            console.log('FFmpeg process started with command: ' + commandLine);
           
            })
            .on('progress', (progress) => {
            console.log('Processing:  % done',progress);
            })
            .on('error', (err) => {
            console.log('An error occurred: ' + err.message);
            })
            .on('end', () => {
            console.log('Processing finished');
            })
            .run();
    
    // ffmpeg(inputUrl)
    //    .videoCodec('libx264')
    //    .audioCodec('aac')   
    //   .output(outputPath)
    //   .on('end', () => {
    //     console.log('Processing complete.');
    //     res.send('Video processed successfully!');
    //   })
    //   .on('error', (err) => {
    //     console.error('Error processing video:', err.message);
    //     res.status(500).send('Error processing video.');
    //   })
    //   .run();
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send('Error during processing.');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




