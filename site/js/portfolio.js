const avatarImage = document.getElementById("setable-image");

avatarImage.addEventListener("click", function () {
  avatarImage.src = "./image/avatar-ter.png";
});

const userName = document.getElementById("name");
const colorBackground = document.getElementsByClassName("description");

userName.addEventListener("click", function () {
  const getUserName = prompt("What's your name ?");
  userName.innerText = getUserName;
  userName.style.color = "white";
  colorBackground.colorBackground = "#750ff7";
});
