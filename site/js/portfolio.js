let changepicture = document.querySelector(".imgdes")
changepicture.onclick = function(){
    changepicture.src = "image/avatar.svg";
};

/*je n'ai pas fait la fonction seul, j'ai eu de l'aide*/

let changename = document.querySelector(".btn")
changename.addEventListener("click",() =>{
    const rename = prompt("entrer votre prenom");
    const recolor = prompt("entrer votre couleur");
    let name = document.getElementById("name");
    name.innerHTML = rename;
    name.style.color = "white";

    let color = document.querySelectorAll(".pink-bg");
    color.forEach(color => color.style.backgroundColor = recolor);

    let col = document.querySelectorAll(".pink-text")
    col.forEach(col => col.style.color = recolor)

    let colo = document.querySelectorAll("a")
    colo.forEach(colo => colo.style.color = recolor ) 
})
