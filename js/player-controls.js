const music = document.querySelector('audio');

// Check if Playing
let isPlaying = false;
let songIndex = 0;

class PlayerControls {
  constructor() {
    this.image = document.querySelector('img');
    this.title = document.querySelector('#title');
    this.artist = document.querySelector('#artist');
    this.prevBtn = document.querySelector('#prev');
    this.playBtn = document.querySelector('#play');
    this.nextBtn = document.querySelector('#next');
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
    this.title.textContent = song.displayName;
    this.artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    this.image.src = `img/${song.name}.jpg`;
  }

  _addEvent() {
    // Play or Pause Event Listener
    this.playBtn.addEventListener('click', () =>
      isPlaying ? this._pauseSong() : this._playSong()
    );

    // Event Listeners
    this.prevBtn.addEventListener('click', () => this._prevSong());
    this.nextBtn.addEventListener('click', () => this._nextSong());
    music.addEventListener('ended', () => this._nextSong());
  }
}
