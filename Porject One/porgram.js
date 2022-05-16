let settingsManu = document.querySelector(".settings-menu");
function dorpdown() {
  settingsManu.classList.toggle("settings-menu-height");
}
let darkModeOn = document.getElementById("dark-mode-btn");
darkModeOn.onclick = function () {
  darkModeOn.classList.toggle("dark-mode-on-btn");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};
if (localStorage.getItem("theme") == "light") {
  darkModeOn.classList.remove("dark-mode-on-btn");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkModeOn.classList.add("dark-mode-on-btn");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
