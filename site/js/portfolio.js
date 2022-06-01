let myImage = document.getElementById("avatar");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "image/avatar-bis.png") {
        myImage.setAttribute('src', "image/avatar.svg");
    }
    else {
        myImage.setAttribute('src', "image/avatar-bis.png");
    }
}

const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const name = document.getElementById("name");
    const request = prompt("Enter your name");
    name.innerHTML = request;
    name.style.color = "white";

    const changeColor = document.querySelectorAll('.pink-bg');
    const request2 = prompt("Choose a color");
    changeColor.forEach(element => element.style.backgroundColor = `${request2}`)

});
