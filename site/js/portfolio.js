const avatarImg = document.querySelector(".avatar-img");
const myName = document.getElementById("name");
const button = document.querySelector(".button");
const colorDescription = document.querySelector(".pink-bg");

avatarImg.addEventListener("click", function () {
  avatarImg.src = "/site/image/avatar.svg";
});

button.addEventListener("click", function () {
  prompt("Enter your name");
  myName.innerHTML = "Fanny";
  myName.style.color = "white";
  colorDescription.style.background = "#750ff7";
});
