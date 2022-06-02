/* addEventListener au ("click") sur l'image.
changer la src via le DOM
quel élément DOM?:
*/

/*Changement d'avatar*/
let newAvatar = document.getElementById("avatar")

newAvatar.onclick = function (){
  let mySrc = newAvatar.getAttribute("src")
    if(mySrc === "image/avatar-bis.png"){
       newAvatar.setAttribute("src", "image/avatar.svg");
   }else{
    newAvatar.setAttribute("src", "image/avatar-bis.png");
   }
}

/*Changer la couleur 
1)clic sur bouton et faire apparaitre un prompt*/
const newColor = document.querySelector("#changeColor");

newColor.addEventListener("onclick", () => {
    const name = document.getElementById("name");
    const button = prompt("enter your name");
    name.innerHTML = button;
    /*2)Résultat du prompt change le nom id:name et la couleur en blanc*/
    name.style.color = "white";

 /*3) Change la couleur partout class: pink-bg */
    const chang_color = document.querySelectorAll(".pink-bg");
    const color1 = prompt("choose your color: ");
    chang_color.forEach(element => element.style.backgroundColor = `${color1}`);
    const change_color2 = document.querySelectorAll(".pink-text");
    change_color2.forEach(element => element.style.color = `${color1}`);
});





