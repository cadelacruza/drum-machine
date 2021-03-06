const powerButton = document.querySelector("#toggle-btn-1");
const bankOne = document.querySelector("#toggle-btn-2");
const display = document.querySelector("#display");
const keysArea = document.querySelector("#keys");
const instructions = document.querySelector("#instructions");
const modal = document.querySelector("#modal");
const cerrar = document.querySelector("#close");

instructions.addEventListener("click", (e) => {
  modal.classList.add("active");
});

cerrar.addEventListener("click", (e) => {
  modal.classList.remove("active");
});

keysArea.addEventListener("click", playSoundClick);

function playSoundClick(e) {
  if (e.target.classList.contains("key")) {
    if (
      powerButton.classList.contains("active") &&
      !bankOne.classList.contains("active")
    ) {
      const idLetter = e.target.childNodes[1].textContent;
      const audio = document.getElementById(`${idLetter}`);

      if (!audio) return;
      audio.currentTime = 0;
      audio.volume = document.querySelector("input[type = range]").value;
      audio.play();
      const texto = audio.textContent;
      display.textContent = texto;
      e.target.classList.add("playing");
    } else if (
      bankOne.classList.contains("active") &&
      powerButton.classList.contains("active")
    ) {
      console.log(e.target.childNodes);
      const idKey = e.target.childNodes[3].textContent;
      const audio = document.getElementById(`${idKey}`);
      if (!audio) return;
      audio.currentTime = 0;
      audio.volume = document.querySelector("input[type = range]").value;
      audio.play();
      const texto = audio.textContent;
      display.textContent = texto;
      e.target.classList.add("playing");
    }
  }
}

window.addEventListener("keydown", playSound);
function playSound(e) {
  if (
    powerButton.classList.contains("active") &&
    !bankOne.classList.contains("active")
  ) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.volume = document.querySelector("input[type = range]").value;
    audio.play();
    const texto = audio.textContent;
    display.textContent = texto;
    key.classList.add("playing");
  } else if (
    bankOne.classList.contains("active") &&
    powerButton.classList.contains("active")
  ) {
    const idKey = e.keyCode;
    const audio = document.getElementById(`${idKey}`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    if (!audio) return;

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
toggleTwo.addEventListener("click", (e) => {
  toggleTwo.classList.toggle("active");
  if (toggleTwo.classList.contains("active")) {
    display.textContent = "Smooth Piano Kit";
  } else {
    display.textContent = "Heater Kit";
  }
});
