// Change avatar
const image = document.querySelector(".avatar-bis");
image.addEventListener("click", () => {
  image.src = "image/avatar.svg";
});

// Modify text, color & background
const button = document.querySelector(".button");
const Matt = document.getElementById("name");
const background = document.querySelectorAll(".pink-bg");
const text = document.querySelectorAll(".pink-text");
button.addEventListener("click", () => {
  const color = prompt("Enter a color :");
  const yourName = prompt("Enter your name :");
  Matt.innerHTML = `${yourName}`;
  Matt.style.color = "white";
  for (let i = 0; i < background.length; i++) {
    background[i].style.backgroundColor = `${color}`;
  }
  for (let i = 0; i < text.length; i++) {
    text[i].style.color = `${color}`;
  }
});

// Modify the color of html links
const htmlLinks = document.querySelectorAll("a");
for (let i = 0; i < addEventListener.length; i++) {
  htmlLinks[i].style.color = "#750ff7";
}

// Modify the list dev tool front
const list = document.querySelectorAll("#front-dev-tools li");
const buttonDev = document.querySelector(".button-dev");
buttonDev.addEventListener("click", () => {
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = "VSCode";
    list[i + 1].innerHTML = "GitHub";
    list[i + 2].innerHTML = "Terminal";
  }
});
