document.addEventListener('DOMContentLoaded', () => {
  new Main();
});

class Main {
  constructor() {
    this._init();
  }

  _init() {
    this.playerControls = new PlayerControls();
    this.progressBar = new ProgressBar();
    this._addEvent();

    // On Load - Select First Song
    this.playerControls.loadSong(songs[songIndex]);
  }

  _addEvent() {
    music.addEventListener('timeupdate', (event) => this.progressBar.updateProgressBar(event));
  }
}
