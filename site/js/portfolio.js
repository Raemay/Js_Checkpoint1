const avatarImg = document.getElementById("avatar-img");
const yourName = document.getElementById("name");
const button = document.getElementById("button");
const description = document.querySelector(".pink-bg");

avatarImg.addEventListener("click", function () {
  avatarImg.src = "https://picsum.photos/id/237/200/300";
});

button.addEventListener("click", function () {
  const color = prompt("Please enter a color :");
  yourName.innerHTML = prompt("Please enter your name :");
  yourName.style.color = "white";
  description.style.backgroundColor = color;
});
