const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const sliderSwitch = document.querySelector("#theme-switch-toggle");

const body = document.querySelector("body");

sliderSwitch.addEventListener("change", checkColor);
sliderSwitch.addEventListener("change", inLocaLeStorage);

function checkColor() {
  const check = sliderSwitch.checked;

  if (check) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }
}

function inLocaLeStorage() {
  const check = sliderSwitch.checked;

  if (check) {
    localStorage.setItem("theme", Theme.DARK);
  } else {
    localStorage.removeItem("theme");
    localStorage.setItem("theme", Theme.LIGHT);
  }
}

const changeLocalTheme = localStorage.getItem("theme");
if (changeLocalTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  sliderSwitch.checked = true;
}
