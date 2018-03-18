export default function getData(url, callback) {
  const req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.send();
  req.addEventListener("readystatechange", e => {
    if (e.target.readyState === 4) {
      callback(JSON.parse(e.target.response));
    }
  });
}
