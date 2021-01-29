const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
let img = document.querySelector('img');
let title = document.getElementById('title');
let artist = document.getElementById('artist');
let progress = document.getElementById('progress');
let currentTime = document.getElementById('current-time');
let duration = document.getElementById('duration');

let musicData = [
    ['jacinto-1', 'Electric Chill Machine', 'Jacinto Design', '2:06'],
    ['jacinto-2', 'Seven Nation Army (Remix)', 'Jacinto Design', '2:08'],
    ['jacinto-3', 'Goodnight, Disco Queen', 'Jacinto Design', '2:41'],
    ['metric-1', 'Front Row (Remix)', 'Metric/Jacinto Design', '3:39'],
]

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
    // Get Plyatime by seconds
    currentTimeNow = music.currentTime;
    // Convert seconds to MM:SS
    currentTime.innerText = convertSec(currentTimeNow);

}

function convertSec(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return `${min}:${sec}`;
}

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Previous
function prevSong() {
    let fileNameArray = img.src.split('/');
    let fileName = fileNameArray[fileNameArray.length -1].slice(0, -4);
    for (let i = 0; i < musicData.length; i++) {
        if (fileName == musicData[i][0]) {
            if (i == 0) {
                music.src = `music/${musicData[musicData.length - 1][0]}.mp3`;
                img.src = `img/${musicData[musicData.length - 1][0]}.jpg`;
                title.innerText = musicData[musicData.length - 1][1];
                artist.innerText = musicData[musicData.length - 1][2];
                duration.innerText = musicData[musicData.length - 1][3];
            } else {
                music.src = `music/${musicData[i - 1][0]}.mp3`;
                img.src = `img/${musicData[i - 1][0]}.jpg`;
                title.innerText = musicData[i - 1][1];
                artist.innerText = musicData[i - 1][2];
                duration.innerText = musicData[i - 1][3];
            }
        }
    }
}

// Next
function nextSong() {
    let fileNameArray = img.src.split('/');
    let fileName = fileNameArray[fileNameArray.length -1].slice(0, -4);
    for (let i = 0; i < musicData.length; i++) {
        if (fileName == musicData[i][0]) {
            if (i == musicData.length - 1) {
                music.src = `music/${musicData[0][0]}.mp3`;
                img.src = `img/${musicData[0][0]}.jpg`;
                title.innerText = musicData[0][1];
                artist.innerText = musicData[0][2];
                duration.innerText = musicData[0][3];
            } else {
                music.src = `music/${musicData[i + 1][0]}.mp3`;
                img.src = `img/${musicData[i + 1][0]}.jpg`;
                title.innerText = musicData[i + 1][1];
                artist.innerText = musicData[i + 1][2];
                duration.innerText = musicData[i + 1][3];
            }
        }
    }
}

// Progress
// function progressBar() {
    // currentTime = music.currentTime;
    // let progressPercent = Math.floor(currentTime / duration * 100);
    // progress.style.width = progressPercent;
// }

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Go Previous Song
prevBtn.addEventListener('click', prevSong);

// GO Next Song
nextBtn.addEventListener('click', nextSong);