function changeImg(){
const newImg= document.getElementById("avat");
newImg.src="image/avatar.svg"
}

function changeTxtColor() {
const userName = prompt("What's your name ?");
const newName = document.getElementById("name");
newName.innerHTML = `${userName}`;
newName.style.color = "white";


const newColor = document.querySelectorAll(".pink-text");
const frontColor = prompt("Choose a color");
newColor.forEach(element => element.style.color= `${frontColor}`);

const newBackground = document.querySelectorAll(".pink-bg");
newBackground.forEach(element => element.style.backgroundColor= `${frontColor}`);
}