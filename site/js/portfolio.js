const imgAvatar = document.querySelector('.avatar');

// click on and change the src rof avatar
imgAvatar.addEventListener('click', function () {
  imgAvatar.src = "image/avatar.svg";
  imgAvatar.alt = "New Avatar";
});

const button = document.querySelector(".modified");
button.addEventListener("click", () => {
    const name = document.getElementById("name");
    const request = prompt("Enter your name");
    name.innerHTML = request;
    name.style.color = "white";

    const chang_color = document.querySelectorAll(".pink-bg");
    const color1 = prompt("Choisissez une couleur: ");
    chang_color.forEach(element => element.style.backgroundColor = `${color1}`);

    const change_color2 = document.querySelectorAll(".pink-text");
    change_color2.forEach(element => element.style.color = `${color1}`);
    
})
  
 




