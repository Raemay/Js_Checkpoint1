//changement de l'avatar
const chang_img = document.querySelector(".img_intro");

chang_img.onclick = function () {
    chang_img.src="./image/avatar.svg"
}


//changement de nom plus couleur 
const change_name = document.querySelector("#name");
const select_desript = document.querySelector(".description");

//creation d'un bouton
const bouton = document.createElement("button");
bouton.style.width = "200px";
bouton.style.height = "40px";
bouton.style.borderRadius = "12px";
bouton.textContent = "choisissez une couleur et mettez votre nom"
select_desript.appendChild(bouton);

bouton.onclick = function () {
    //demande à l'utilisateur un nom et une couleur
    const color1 = prompt("Choisissez une couleur :");
    const name1 = prompt("quel est votre nom ?");
    change_name.innerHTML = name1;
    change_name.style.color = "white";

    //changement de la couleur de fond par l'utilisateur 
    const chang_color = document.querySelector(".pink-bg");
    chang_color.style.backgroundColor = color1

    //changement de la couleur des éléments en rose
    const chang_color1 = document.querySelectorAll(".pink-bg");
    chang_color1.forEach(el => el.style.backgroundColor = color1)
    
    //changement de la couleur des éléments en rose pour les textes
    const chang_color2 = document.querySelectorAll(".pink-text");
    chang_color2.forEach(el => el.style.color = color1)
    

    //changement de couleur des liens html (a)
    const lien = document.querySelectorAll("a");
    lien.forEach(el => el.style.color = color1)

}

//changement des éléments li avec un bouton
const select_skill = document.querySelector(".skill2");
const bouton2 = document.createElement("button");
bouton2.style.width = "100px";
bouton2.style.height = "40px";
bouton2.style.borderRadius = "12px";
bouton2.style.backgroundColor = "blue";
bouton2.textContent = "Modify";
select_skill.appendChild(bouton2);

bouton2.onclick = function () {
    const select_li_1 = document.querySelector(".li_a");
    const select_li_2 = document.querySelector(".li_b");
    const select_li_3 = document.querySelector(".li_c");

    select_li_1.innerHTML = "VSCode";
    select_li_2.innerHTML = "Github";
    select_li_3.innerHTML = "Terminal";
}
















