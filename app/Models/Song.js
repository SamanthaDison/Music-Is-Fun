export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this.id = data.trackId?.toString() || data.id;
  }

  get Template() {
    return `
    <div class="bg-white rounded shadow" onclick="app.songsController.setActiveSong('${this.id}')">
            <div>
              <img src="${this.albumArt}" height="100px" width="100px"
                class="position-relative song-img">
            </div>
            <h3>${this.title}</h3>
            <h5>${this.artist}</h5>
          </div>

        `;
  }

  get playlistTemplate() {
    return `

        `;
  }

  get activeSongTemplate() {
    return `
    <div class="bg-white rounded shadow">
            <div>
              <img src="${this.albumArt}" height="100px" width="100px"
                class="position-relative song-img">
            </div>
            <h3>${this.title}</h3>
            <h5>${this.artist}</h5>
          </div>

        `
  }
}
