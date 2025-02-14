const SERVER_IP = "www.example.com"; // Change this to your server IP
const PORT = 0; // Change this to your server port

let currentSong = new Audio();
currentSong.volume = 1;
var songs = [];
var currFolder = "";
let currentSongIndex = 0;

// Convert seconds to MM:SS format
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Fetch and display playlists
async function displayAlbums() {
    console.log("Fetching playlists...");
    let response = await fetch(`https://${SERVER_IP}:${PORT}/api/playlists`);
    let playlists = await response.json();
    let cardContainer = document.querySelector(".cardContainer");

    cardContainer.innerHTML = "";

    for (let playlist of playlists) {
        let metadataResponse = await fetch(`https://${SERVER_IP}:${PORT}/api/songs/${playlist}`);
        let metadata = await metadataResponse.json();

        let description = 'No metadata found';

        if (metadata.metadata) {
            try {
                const metaResponse = await fetch(metadata.metadata);
                const metaDataJson = await metaResponse.json();
                description = metaDataJson.description || description;
            } catch (error) {
                console.error("Error fetching metadata:", error);
            }
        }

        cardContainer.innerHTML += `
            <div data-folder="${playlist}" class="card">
                <div class="play">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                </div>
                <img src="${metadata.cover || 'assets/images/music.svg'}" alt="">
                <h2>${playlist.replaceAll("%20", " ")}</h2>
                <p>${description}</p>
            </div>`;
    }

    // Attach event listener to load songs when playlist is clicked
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", async (event) => {
            let folder = event.currentTarget.dataset.folder;
            console.log(`Fetching songs from ${folder}...`);
            await getSongs(folder);
            if (songs.length > 0) playMusic(songs[0].url);
        });
    });
}

// Fetch and display songs from selected playlist
async function getSongs(folder) {
    currFolder = folder;
    let response = await fetch(`https://${SERVER_IP}:${PORT}/api/songs/${folder}`);
    let data = await response.json();

    songs = data.songs;
    let songUL = document.querySelector(".songList ul");
    songUL.innerHTML = "";

    for (let song of songs) {
        songUL.innerHTML += `
            <li>
                <img class="invert" width="34" src="assets/images/music.svg" alt="">
                <div class="info">
                    <div>${song.title.replaceAll("%20", " ")}</div>
                    <div id="artist">${folder.replaceAll("%20", " ")}</div>
                </div>
                <div class="playnow">
                    <span>Play Now</span>
                    <img class="invert" src="assets/images/play.svg" alt="">
                </div>
            </li>`;
    }

    // Attach event listeners to play songs
    document.querySelectorAll(".songList li").forEach((element, index) => {
        element.addEventListener("click", () => playMusic(songs[index].url));
    });

    return songs;
}

function playMusic(songUrl) {
    currentSong.src = songUrl;
    currentSong.play();
    play.src = "assets/images/pause.svg";
    currentSongIndex = songs.findIndex(song => song.url === songUrl);
    document.querySelector(".songinfo").innerHTML = decodeURI(songUrl.split("/").pop());
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}


// Initialize UI
async function main() {
    await displayAlbums();
    await getSongs("Aashiqui 2"); // Default playlist

    if (songs.length > 0) playMusic(songs[0].url);

    // Restored Missing Event Listeners
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "assets/images/pause.svg";
        } else {
            currentSong.pause();
            play.src = "assets/images/play.svg";
        }
    });

    // Listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        if (!isNaN(currentSong.duration) && isFinite(currentSong.duration)) {
            document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
            document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
        }
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    // Add an event listener to previous b// Play the next song automatically when the current song ends
    currentSong.addEventListener("ended", () => {
        playNextSong();
    });
    function playNextSong() {
        let nextIndex = (currentSongIndex + 1) % songs.length; // Loop to first song if at the last one
        playMusic(songs[nextIndex].url);
    }
    
    // Function to play the previous song
    function playPreviousSong() {
        let prevIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to last song if at the first one
        playMusic(songs[prevIndex].url);
    }

    // Add an event listener to previous button
    previous.addEventListener("click", () => {
        console.log("Previous clicked");
        playPreviousSong();
    });

    // Add an event listener to next button
    next.addEventListener("click", () => {
        console.log("Next clicked");
        playNextSong();
    });

    // Keyboard Controls
    addEventListener("keydown", e => {
        if (e.key === " ") {
            e.preventDefault(); // Prevents accidental page scroll
            play.click();
        }

        if (e.key === "ArrowRight") {
            currentSong.currentTime = Math.min(currentSong.currentTime + 5, currentSong.duration);
        }

        if (e.key === "ArrowLeft") {
            currentSong.currentTime = Math.max(currentSong.currentTime - 5, 0);
        }

        if (e.key === "ArrowUp") {
            currentSong.volume = Math.min(currentSong.volume + 0.1, 1);
        }

        if (e.key === "ArrowDown") {
            currentSong.volume = Math.max(currentSong.volume - 0.1, 0);
        }

        if (e.key === "MediaTrackPrevious") {
            playPreviousSong();
        }

        if (e.key === "MediaTrackNext") {
            playNextSong();
        }
    });
}

// Start
main();
