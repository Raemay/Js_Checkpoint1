const avatar = document.getElementById("avatar");
avatar.onclick = function () {
    avatar.src = "image/avatar.svg";
  };

const button = document.getElementById("button");
button.addEventListener("click", () => {
    const color = document.querySelectorAll(".pink-bg");
    const request0 = prompt("Choose the color");
    // J'ai eu une aide pour la boucle forEach //
    color.forEach(el => el.style.backgroundColor = request0);
    const colortext = document.querySelectorAll(".pink-text");
    colortext.forEach(el => el.style.color = request0)
    const name = document.getElementById("name");
    const request = prompt("Enter your name");
    name.innerHTML = request;
    name.style.color = "white";
    const a = document.querySelectorAll("a")
    a.forEach(el => el.style.color = "#750ff7");
});

const modify = document.getElementById("but");
modify.addEventListener("click", () => {
const allLi = document.querySelectorAll("li");
const array = ["VSCode", "Github", "Terminal"];
allLi.forEach((ele, index) => ele.innerHTML = array[index])
})


