//changement d'avatar
const newAvatar = document.querySelector(".avatar");
   newAvatar.onclick = function(){
       newAvatar.src="image/avatar.svg";
   };
   
//changement de nom et couleur de nom



//remplacement du background color avec le bouton

//prompt
function promptbtn(){
    let name = prompt("Please write your name");
    const newName = document.getElementById("name");
    newName.textContent = `${name}`;
    newName.style.color = 'white';  
//changement de couleur du background
    const bckgrd = document.querySelector(".pink-bg");
    bckgrd.style.backgroundColor = " #750ff7";
//changement de tous les éléments rose
    const elRose = document.querySelector(".pink-text");
    elRose.style.color = " #750ff7";
    };



    

    
