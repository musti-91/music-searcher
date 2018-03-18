import { getRandom } from "./getRandom";
export default class AudioField {
  constructor(audioUrl, holder) {
    this.holder = holder;
    this.audioUrl = audioUrl;
    this.nr = 0;
    this.audioId = "";
    this.color = getRandom.color();
    this.init();
    this.setUpEvent();
  }
  init() {
    this.nr++;
    let el = `
       <div class="track-id" id="audio-${this.nr}">
        <div class="imgHolder">
          <img src="${this.audioUrl.artworkUrl100}" alt="">
        </div>
        <div class="details">
          <h2>${this.audioUrl.trackName}</h2>
          <h3>${this.audioUrl.artistName}</h3>
          <audio controls id="track-${this.audioUrl.trackId}">
            <source src="${this.audioUrl.previewUrl}" type="audio/mp4" />
        </audio>
        </div>
      </div>
      `;
    this.holder.insertAdjacentHTML("afterbegin", el);
    this.html = document.getElementById(`audio-${this.nr}`);
    this.html.style.backgroundColor = this.color;
    this.audioId = document.getElementById(`track-${this.audioUrl.trackId}`);
  }
  setUpEvent() {
    this.audioId.addEventListener(
      "play",
      e => {
        const allAudiosTags = document.querySelectorAll("audio");
        for (let i = 0; i < allAudiosTags.length; i++) {
          if (allAudiosTags[i].id != e.target.id) {
            allAudiosTags[i].pause();
          }
        }
      },
      true
    );
  }
}
