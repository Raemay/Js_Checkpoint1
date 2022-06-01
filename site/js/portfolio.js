//changement d'avatar
const newAvatar = document.querySelector(".avatar");
   newAvatar.onclick = function(){
       newAvatar.src="image/avatar.svg";
   };

//prompt
function promptbtn(){
    let name = prompt("Please write your name");
    const newName = document.getElementById("name");
    newName.textContent = `${name}`;
    newName.style.color = 'white';  
//changement de couleur du background et tous les élements rose
    const bckgrd = document.querySelectorAll(".pink-bg");
    bckgrd.forEach(element => element.style.backgroundColor = `${"#750ff7"}`);

    const elRose = document.querySelectorAll(".pink-text");
    elRose.forEach(element => element.style.color = `${"#750ff7"}`);
    };




    

    
