class ProgressBar {
  constructor() {
    this.progress = document.querySelector('#progress');
    this.currentTimeEl = document.querySelector('#current-time');
    this.durationEl = document.querySelector('#duration');
    this.progressContainer = document.querySelector('#progress-container');
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _updateProgressBarWidth(currentTime, duration) {
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    this.progress.style.width = `${progressPercent}%`;
  }

  _displayDuration(duration) {
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      this.durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
  }

  _displayCurrentTime(currentTime) {
    // Calculate display for current
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    this.currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }

  // Get Current Position
  updateProgressBar(e) {
    if (isPlaying) {
      const { duration, currentTime } = e.srcElement;
      // Update progress bar width
      this._updateProgressBarWidth(currentTime, duration);
      // Calculate display for duration
      this._displayDuration(duration);
      // Calculate display for current
      this._displayCurrentTime(currentTime);
    }
  }

  // Set Progress Bar
  _setProgressBar(e) {
    const width = this.progressContainer.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
  }

  _addEvent() {
    this.progressContainer.addEventListener('click', (event) => this._setProgressBar(event));
  }
}
