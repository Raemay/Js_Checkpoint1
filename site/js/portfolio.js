
function newImg(){
const avat = document.getElementById("avatar");
avat.src = "image/avatar.svg";
};

let button = document.querySelector("#btn");
button.addEventListener("click", newName);

function newName() {

let person = prompt("Please enter your name");
if (person != null) {
  document.getElementById("name").innerHTML =`${person}`
  document.getElementById("name").style.color = "white"
//   document.querySelector(".pink-bg").style.backgroundColor = "#750ff7"
//   document.querySelectorAll(".pink-bg").style.backgroundColor = "#750ff7"
//   document.querySelectorAll(".pink-text").style.backgroundColor = "#750ff7"

let pink = document.querySelectorAll('.pink-text'), i;

for (i = 0; i < pink.length; ++i) {
  pink[i].style.color = "#750ff7";
}
}

let pinkbg = document.querySelectorAll('.pink-bg'), i;

for (i = 0; i < pinkbg.length; ++i) {
  pinkbg[i].style.backgroundColor = "#750ff7";
}
}





