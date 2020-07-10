const powerButton = document.querySelector("#toggle-btn-1");

window.addEventListener("keydown", playSound);
function playSound(e) {
  if (powerButton.classList.contains("active")) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    //console.log(key);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
  } else {
    return;
  }
  // console.log(e.keyCode);
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
}
const toggleOne = document.querySelector("#toggle-btn-1");
const toggleTwo = document.querySelector("#toggle-btn-2");

toggleOne.addEventListener("click", (e) =>
  toggleOne.classList.toggle("active")
);
toggleTwo.addEventListener("click", (e) =>
  toggleTwo.classList.toggle("active")
);
