const personPicture = document.getElementById("person-picture");

personPicture.addEventListener("click", (event) => {
  event.target.src = "./image/avatar.svg";
});
