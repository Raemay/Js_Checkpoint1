/*Fonction avatar*/
const avatar = ()=>{
    const image = document.querySelector('#avatar');
    image.src="image/avatar.svg"
}
/*Fonction button*/
const button = ()=>{
    const nom = prompt("Entrez votre nom:");
    const couleur = prompt("Changer la couleur");
    const name = document.querySelector("#name")
    const color = document.querySelector(".pink-bg")
    name.style.color = "white"
    name.innerHTML = nom
    color.style.backgroundColor = couleur
}