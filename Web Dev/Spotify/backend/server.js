const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const https = require('https');

const app = express();
const PORT = 0; // Change this to your desired port
const SERVER_IP = "www.example.com"; // Change this to your server IP

// Enable CORS
app.use(cors());

// Define the main songs directory
const songsFolder = path.join(__dirname, "songs");

// Serve static files (MP3, JSON, JPG)
app.use("/songs", express.static(songsFolder));

// API: Fetch all playlists
app.get("/api/playlists", (req, res) => {
    fs.readdir(songsFolder, (err, folders) => {
        if (err) return res.status(500).json({ error: "Unable to access songs folder" });

        let playlists = folders.filter(folder => fs.lstatSync(path.join(songsFolder, folder)).isDirectory());
        res.json(playlists);
    });
});

// API: Fetch all songs & metadata in a playlist
app.get("/api/songs/:playlist", (req, res) => {
    const playlist = req.params.playlist;
    const playlistPath = path.join(songsFolder, playlist);

    if (!fs.existsSync(playlistPath)) {
        return res.status(404).json({ error: "Playlist not found" });
    }

    let songList = [];
    let metadataFile = null;
    let coverImage = null;

    fs.readdir(playlistPath, (err, files) => {
        if (err) return res.status(500).json({ error: "Unable to read playlist files" });

        files.forEach(file => {
            if (file.endsWith(".mp3")) {
                songList.push({
                    title: file,
                    url: `https://${SERVER_IP}:${PORT}/songs/${playlist}/${file}`
                });
            }
            if (file === "info.json") metadataFile = `https://${SERVER_IP}:${PORT}/songs/${playlist}/info.json`;
            if (file === "cover.jpg") coverImage = `https://${SERVER_IP}:${PORT}/songs/${playlist}/cover.jpg`;
        });

        res.json({
            playlist: playlist,
            songs: songList,
            metadata: metadataFile,
            cover: coverImage
        });
    });
});

// Get keys and certificate for HTTPS
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/www.example.com/privkey.pem'), // Change this to your private key
    cert: fs.readFileSync('/etc/letsencrypt/live/www.example.com/fullchain.pem') // Change this to your certificate
};

// Start the server
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server running at https://${SERVER_IP}:${PORT}/`);
    console.log(`API available at: https://${SERVER_IP}:${PORT}/api/playlists`);
});
