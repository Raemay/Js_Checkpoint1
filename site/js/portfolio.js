function changeImg() {
  document.getElementById("avatar").src = "./image/avatar.svg";
}
const button = document.querySelector("#myBtn");

button.addEventListener("click", changeName);
function changeName() {
  const person = prompt("Please enter your name", "");
  if (person != null) {
    document.getElementById("name").innerHTML = `${person}`;
    document.getElementById("name").style.color = "white";
    document.querySelector(".pink-bg").style.backgroundColor = "#750ff7";

    // document.querySelectorAll(".pink-text") = "#750ff7"
    
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