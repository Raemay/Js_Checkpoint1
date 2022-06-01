
const avatar = document.querySelector('.avatar');
avatar.onclick = function () {
    avatar.src = "image/avatar.svg";
  };

  //function promptBtn(){
    //var newName = prompt("Please write your name");
    //alert (newName);
//}

const button = document.getElementById("button");
button.addEventListener("click", () => {
    const name = document.getElementById("name");
    const request = prompt("Enter your name");
    name.innerHTML = request;
    name.style.color = "white";

    const chang_color = document.querySelector(".pink-bg");
    const color1 = prompt("Choisissez une couleur: ");
    chang_color.style.backgroundColor = color1;

})