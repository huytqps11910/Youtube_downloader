const express = require('express');
const app = express();

const cors = require('cors');
const ytdl = require('ytdl-core');

app.use(cors());


app.get("/download-video", (req, res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, { format: 'mp4' }).pipe(res);
})

app.get("/download-song", (req, res) => {
    var URL = req.query.URL;
    if(URL.length <= 0) return;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, { format: 'mp4' }).pipe(res);
})

app.listen(3000, () => {
    console.log('Server works at port 3000');
})