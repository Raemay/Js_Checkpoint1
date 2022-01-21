function changeAvatar(){
    const imageAvatar2 =document.querySelector(".imageAvatar")
    imageAvatar2.src = "./image/avatar.svg"
}

function modifyName(){
    const newName =document.querySelector("#name")
    const question = prompt("Enter your Name:")
    newName.innerHTML= question
    newName.style.color= "white"
    
}