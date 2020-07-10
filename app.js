const powerButton = document.querySelector("#toggle-btn-1");

const display = document.querySelector("#display");

//console.log(document.querySelector("input[type = range]").value);

window.addEventListener("keydown", playSound);
function playSound(e) {
  if (powerButton.classList.contains("active")) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    if (!audio) return;
    //console.log(audio.volume);
    audio.currentTime = 0;
    audio.volume = document.querySelector("input[type = range]").value;
    audio.play();
    const texto = audio.textContent;
    display.textContent = texto;
    key.classList.add("playing");
  } else {
    return;
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
}

function getVolume(e) {
  document.querySelector("input[type = range]").value;
}
const toggleOne = document.querySelector("#toggle-btn-1");
const toggleTwo = document.querySelector("#toggle-btn-2");

toggleOne.addEventListener("click", (e) => {
  toggleOne.classList.toggle("active");

  display.textContent = "";
});
toggleTwo.addEventListener("click", (e) =>
  toggleTwo.classList.toggle("active")
);
