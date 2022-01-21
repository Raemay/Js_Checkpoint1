/*Fonction avatar*/
const avatar = () => {
    const image = document.querySelector('#avatar');
    image.src = "image/avatar.svg"
}
/*Fonction button*/
const button = () => {
    const nom = prompt("Entrez votre nom:");
    const couleur = prompt("Changer la couleur");
    const name = document.querySelector("#name")
    const color = document.querySelectorAll(".pink-bg")
    const text = document.querySelectorAll(".pink-text")
    const lien = document.querySelectorAll("a")
    name.style.color = "white"
    name.innerHTML = nom
    /*boucle pour les 4 textes */
    for (var i = 0, l = text.length; i < l; i++) {
        text[i].style.color = couleur
    }
    /*boucle pour le fond et description*/
    for (var i = 0, l = color.length; i < l; i++) {
        color[i].style.backgroundColor = couleur
    }
    /*boucle pour le fond et description*/
    for (var i = 0, l = lien.length; i < l; i++) {
        lien[i].style.color = couleur
    }
}
/*Bonus 2*/
/*Fonction modif*/
const bonusJMP = () => {
    const bonus = document.querySelectorAll("li");
    for (var i = 0, i = bonus.length; i < l; i++) {
        bonus[i].style.color = couleur
    }
}

/*bonus 3*/
const resetform = () => {
    const titre = document.querySelector("#depot_projet").value=""
}


const soumettre = (event) => {
    event.preventDefault();
    const titre = document.querySelector("#depot_projet").value
    const creatLi = document.createElement("li")
    creatLi.classList.add("li")
    creatLi.innerHTML = `${titre}`
    resetform()
}