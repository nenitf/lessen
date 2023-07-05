var audioPlayer = document.getElementById("audiofile");

const subtitles = document.getElementById("subtitles").querySelectorAll("span");
const legendas = document.getElementById("legendas").querySelectorAll("span");

const sync = [];

function updateCurrentTime(start) {
  audioPlayer.currentTime = start;
  audioPlayer.play();
}

subtitles.forEach((element) => {
  const start = element.getAttribute("data-start");
  const end = element.getAttribute("data-end");

  sync.push({ start, end });
  element.ondblclick = function() {
    updateCurrentTime(start)
  }
});

legendas.forEach((element) => {
  const start = element.getAttribute("data-start");
  element.ondblclick = function() {
    updateCurrentTime(start)
  }
});

audioPlayer.addEventListener("timeupdate", function() {
  document.querySelectorAll("span.active-caption").forEach((element) => {
    element.classList.remove("active-caption");
  });

  const i = sync.findIndex(e => audioPlayer.currentTime >= e.start && audioPlayer.currentTime <= e.end)

  try {
    subtitles[i].classList.add("active-caption");
    legendas[i].classList.add("active-caption");
  } catch {}
});
