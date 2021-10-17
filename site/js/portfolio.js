 let avatarChange = document.querySelector("avatar");

 avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
});



document
  .getElementById("changeButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
   
    const newName = prompt("Enter your name to change it in the paragaraph and change its color");
    let newNameElement = document.getElementById("name");
    newNameElement.innerText = newName;
    document.getElementById("name").style.color = "white";
 
 

  });


  // Boucle if-else pour changer le background rose en violet:

  // if l'input du prompt "newBackgroundColor" === "#750ff7", return le background en violet#750ff7
  // else return rien/reste en rose
  
  
  
  
  // Pour changer tout les éléments roses en violet: 
  // querySelectorAll pour selectionner tous les éléments roses sur la page 
  // + boucle qui les modifie tous en violet
