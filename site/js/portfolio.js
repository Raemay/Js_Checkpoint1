 let avatarChange = document.querySelector("avatar");

 avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
});



document
  .getElementById("changeButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
   
    const newName = prompt("Enter your name to change it in the paragaraph and change its color");
    let newNameElement = document.getElementById("name");
    newNameElement.innerText = newName;
    document.getElementById("name").style.color = "white";
 
 

  });
