function changeAvatar(){
    const imageAvatar2 =document.querySelector(".imageAvatar")
    imageAvatar2.src = "./image/avatar.svg"
}

function modifyName(){
    const newBackGround = document.querySelector("#description")
    const newName =document.querySelector("#name")
    const changeBackground = prompt("Enter a color:")
    const question = prompt("Enter your Name:")
    newName.innerHTML= question
    newName.style.color= "white"
    newBackGround.style.background = changeBackground
    
}