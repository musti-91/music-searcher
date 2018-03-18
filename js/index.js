import getData from "./components/getData";
import AudioField from "./components/AudioField";
const audioHolder = document.getElementById("audioHolder");
const input = document.querySelector("input");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  let url = `https://itunes.apple.com/search?term=${input.value}`;
  input.value = "";
  input.focus();
  audioHolder.innerHTML = "";
  getData(url, responseData);
});

function responseData(response) {
  response.results.forEach(audioUrl => {
    const result = new AudioField(audioUrl, audioHolder);
  });
}
