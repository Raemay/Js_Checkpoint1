//changement d'avatar
const newAvatar = document.querySelector(".avatar");
   newAvatar.onclick = function(){
       newAvatar.src="image/avatar.svg";
   };
   
//changement de nom et couleur de nom

const newName = document.getElementById("name");
    newName.textContent = 'Marion';
    newName.style.color = 'white';

//remplacement du background color et du nom du bouton
function promptbtn(){
    let name = prompt("Please write your name");
    };


const presentation = document.getElementsByClassName("presentation");

function changeColor(){
    let btnName = document.querySelector('button');
    btnName.addEventListener(
        'click',
        presentation.style.backgroundcolor = 'blue',
        )
    }

   // const el = document.querySelector("#outside");
   // el.addEventListener("click", modifyText, false);