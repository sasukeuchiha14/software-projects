const Container = document.querySelector('.container'),
mainVideo = document.querySelector('video'),
videoTimeline = document.querySelector('.video-timeline'),
progressBar = document.querySelector('.progress-bar'),
volumeBtn = document.querySelector('.volume i'),
volumeSlider = document.querySelector('.left input'),
currentVidTime = document.querySelector('.current-time'),
totalVidTime = document.querySelector('.video-duration'),
skipBackward = document.querySelector('.skip-backward i'),
playPause = document.querySelector('.play-pause i'),
skipForward = document.querySelector('.skip-forward i'),
speedBtn = document.querySelector('.playback-speed span'),
speedOptions = document.querySelector('.speed-options'),
picinPicBtn = document.querySelector('.pic-in-pic span'),
fullScreenBtn = document.querySelector('.fullscreen i');
let timer;

const hideControls = () => {
    if (mainVideo.paused) return;
    timer = setTimeout(() => {
        Container.classList.remove('controls');
    }, 3000);
}
hideControls();

Container.addEventListener('mousemove', () => {
    Container.classList.add('controls');
    clearTimeout(timer);
    hideControls();
});

const formatTime = time => {
    let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours == 0) {
        return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
};

mainVideo.addEventListener('timeupdate', e => {
    const progress = (e.target.currentTime / e.target.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentVidTime.textContent = formatTime(e.target.currentTime);
});

mainVideo.addEventListener('loadedmetadata', () => {
    totalVidTime.textContent = formatTime(mainVideo.duration);
});

document.addEventListener('click', e => {
    if (e.target.tagName !== 'SPAN' || e.target.className !== 'material-symbols-rounded') {
        speedOptions.classList.remove('show');
    }
});

videoTimeline.addEventListener('click', e => {
    let timelineWidth = videoTimeline.clientWidth;
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

const draggablePregressBar = e => {
    let timelineWidth = videoTimeline.clientWidth;
    progressBar.style.width = `${e.offsetX}px`;
    mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
    currentVidTime.textContent = formatTime(mainVideo.currentTime);
}

videoTimeline.addEventListener('mousedown', () => {
    videoTimeline.addEventListener('mousemove', draggablePregressBar);
});
videoTimeline.addEventListener('mouseup', () => {
    videoTimeline.removeEventListener('mousemove', draggablePregressBar);
});

videoTimeline.addEventListener('mousemove', e => {
    const progressTime = videoTimeline.querySelector('span');
    progressTime.style.left = `${e.offsetX}px`;
    progressTime.textContent = formatTime((e.offsetX / videoTimeline.clientWidth) * mainVideo.duration);
});

if (window.innerWidth < 540) {
    var volume = 1;
}
else {
    var volume = 0.5;
}

volumeBtn.addEventListener('click', () => {
    if (!volumeBtn.classList.contains('fa-volume-high')) {
        mainVideo.volume = volume;
        volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high');
    }
    else {
        mainVideo.volume = 0;
        volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark');
    }
    volumeSlider.value = mainVideo.volume;
});

volumeSlider.addEventListener('input', e => {
    volume = e.target.value;
    mainVideo.volume = e.target.value;
    if (e.target.value == 0) {
        volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark');
    }
    else {
        volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high');
    }
});

document.addEventListener('click', e => {
    if (e.target.tagName === 'VIDEO' && e.target.className !== 'wrapper') {
        mainVideo.paused ? mainVideo.play() : mainVideo.pause();
    }
});

playPause.addEventListener('click', () => {
    mainVideo.paused ? mainVideo.play() : mainVideo.pause();
});

mainVideo.addEventListener('play', () => {
    playPause.classList.replace('fa-play', 'fa-pause');
});

mainVideo.addEventListener('pause', () => {
    playPause.classList.replace('fa-pause', 'fa-play');
});

skipBackward.addEventListener('click', () => {
    mainVideo.currentTime -= 5;
});

skipForward.addEventListener('click', () => {
    mainVideo.currentTime += 5;
});

speedBtn.addEventListener('click', () => {
    speedOptions.classList.toggle('show');
});

speedOptions.querySelectorAll('li').forEach(option => {
    option.addEventListener('click', () => {
        mainVideo.playbackRate = option.dataset.speed;
        speedOptions.querySelector('.active').classList.remove('active');
        option.classList.add('active');
    });
});

picinPicBtn.addEventListener('click', () => {
    mainVideo.requestPictureInPicture();
});

fullScreenBtn.addEventListener('click', () => {
    Container.classList.toggle('fullscreen');
    if (document.fullscreenElement) {
        fullScreenBtn.classList.replace('fa-compress', 'fa-expand');
        return document.exitFullscreen();
    }
    fullScreenBtn.classList.replace('fa-expand', 'fa-compress');
    Container.requestFullscreen();
});



const dropZone = document.getElementsByTagName('body')[0];
const chooseFile = document.getElementById('file');
const video = document.getElementById('video');
const videoSource = document.getElementById('video-source');

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false)
});

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => dropZone.classList.add('highlight'), false)
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => dropZone.classList.remove('highlight'), false)
});

dropZone.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;

    handleFiles(files);
}

function handleFiles(files) {
    if (files.length > 0 && files[0].type.includes('video')) {
        let file = files[0];
        let url = URL.createObjectURL(file);

        videoSource.src = url;
        video.load();
    } else {
        alert("Please drop a valid video file.");
    }
}

chooseFile.addEventListener('change', () => {
    handleFiles(chooseFile.files);
});

// Keyboard shortcuts
addEventListener('keydown', e => {
    // space key to play/pause the video
    if (e.key === ' ') {
        mainVideo.paused ? mainVideo.play() : mainVideo.pause();
    }

    // right arrow key to skip time forward
    if (e.key === 'ArrowRight') {
        mainVideo.currentTime += 5;
    }
    if (e.key === 'ArrowRight' && e.shiftKey) {
        mainVideo.currentTime += 5;
    }

    // left arrow key to skip time 5s backward
    if (e.key === 'ArrowLeft') {
        mainVideo.currentTime -= 5;
    }
    if (e.key === 'ArrowLeft' && e.shiftKey) {
        mainVideo.currentTime -= 5;
    }

    // up arrow key to increase volume
    if (e.key === 'ArrowUp') {
        volume += 0.1;
        mainVideo.volume = Math.min(volume, 1);
        volumeSlider.value = mainVideo.volume;
        if (volumeBtn.classList.contains('fa-volume-xmark')) {
            volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high');
        }
    }

    // down arrow key to decrease volume
    if (e.key === 'ArrowDown') {
        volume -= 0.1;
        if (volume < 0.1) {
            volume = 0;
        }
        mainVideo.volume = Math.max(volume, 0);
        volumeSlider.value = mainVideo.volume;
        if (volume == 0) {
            volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark');
        }
    }

    // f key to toggle fullscreen
    if (e.key === 'f') {
        Container.classList.toggle('fullscreen');
        if (document.fullscreenElement) {
            fullScreenBtn.classList.replace('fa-compress', 'fa-expand');
            return document.exitFullscreen();
        }
        fullScreenBtn.classList.replace('fa-expand', 'fa-compress');
        Container.requestFullscreen();
    }

    // m key to mute/unmute the video
    if (e.key === 'm') {
        if (!volumeBtn.classList.contains('fa-volume-high')) {
            mainVideo.volume = volume;
            volumeBtn.classList.replace('fa-volume-xmark', 'fa-volume-high');
        }
        else {
            mainVideo.volume = 0;
            volumeBtn.classList.replace('fa-volume-high', 'fa-volume-xmark');
        }
        volumeSlider.value = mainVideo.volume;
    }

    // p key to toggle picture-in-picture mode
    if (e.key === 'p') {
        mainVideo.requestPictureInPicture();
    }

    // s key to toggle playback speed options
    if (e.key === 's') {
        speedOptions.classList.toggle('show');
    }

    // i key to open file input
    if (e.key === 'i') {
        file.click();
    }
});