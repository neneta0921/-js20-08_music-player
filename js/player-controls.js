const music = document.querySelector('audio');

// Check if Playing
let isPlaying = false;
let songIndex = 0;

class PlayerControls {
  constructor() {
    this.title = document.querySelector('#title');
    this.playBtn = document.querySelector('#play');
    this.init();
  }

  init() {
    this._addEvent();
  }

  // Play
  _playSong() {
    isPlaying = true;
    this.playBtn.classList.replace('fa-play', 'fa-pause');
    this.playBtn.setAttribute('title', 'Pause');
    music.play();
  }

  // Pause
  _pauseSong() {
    isPlaying = false;
    this.playBtn.classList.replace('fa-pause', 'fa-play');
    this.playBtn.setAttribute('title', 'Play');
    music.pause();
  }

  // Previous Song
  _prevSong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    this.loadSong(songs[songIndex]);
    this._playSong();
  }

  // Next Song
  _nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    this.loadSong(songs[songIndex]);
    this._playSong();
  }

  // Update Dom
  loadSong(song) {
    const artist = document.querySelector('#artist');
    const image = document.querySelector('img');

    this.title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
  }

  _addEvent() {
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');

    // Play or Pause Event Listener
    this.playBtn.addEventListener('click', () =>
      isPlaying ? this._pauseSong() : this._playSong()
    );

    // Event Listeners
    prevBtn.addEventListener('click', () => this._prevSong());
    nextBtn.addEventListener('click', () => this._nextSong());
    music.addEventListener('ended', () => this._nextSong());
  }
}
