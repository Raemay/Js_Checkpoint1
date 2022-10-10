const avatarToChange = document.querySelector("#avatarToChange");
avatarToChange.addEventListener("click", () => {
    avatarToChange.src = "./image/avatar-bis.png";

})

const changeYourName = document.querySelector("#changeName");
const userName = document.querySelector("#name");
const bgColor = document.querySelector(".pink-bg");
const textColor = document.getElementsByClassName("pink-text");


changeYourName.addEventListener("click", () => {
    const newUserName = prompt("What's your name");
    const newColor = prompt("Do you want to change background color? Y/N");
    userName.innerHTML = newUserName;
    if (newColor == "Y") {
        bgColor.style.backgroundColor = "#750ff7";
        for (let i = 0; i < textColor.length; i++) {
            textColor[i].classList.toggle("blue-text");
        }
    }
})


window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "#750ff7";
    }
})
