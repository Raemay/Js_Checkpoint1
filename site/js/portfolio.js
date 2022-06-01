const newAvatar = document.querySelector(".avatar");
   newAvatar.onclick = function(){
       newAvatar.src="image/avatar.svg";
   };
   

const newName = document.getElementById("name");
    newName.textContent = 'Marion';
    newName.style.color = 'white';


const buttonColor = document.createElement('Button');
const newDiv = document.querySelector('.presentation');
newDiv.appendChild(buttonColor);
