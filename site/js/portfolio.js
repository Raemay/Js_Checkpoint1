const modifButton = document.querySelector('#modifButton');
const newBg = document.getElementById('description');
const newBgFooter = document.getElementById('footer');
const newColor = document.querySelectorAll('pink-text');
const imgAvatar = document.querySelector('#imgAvatar');

imgAvatar.addEventListener('click', function(){
  imgAvatar.src = "image/avatar.svg";
})

modifButton.addEventListener('click', function(){
    let newName = prompt('Type your name');
    devName.innerHTML = newName;
    devName.style.color = "white";
    newBg.classList.remove('pink-bg');
    newBg.classList.add('new-bg');
    newBgFooter.classList.remove('pink-bg');
    newBgFooter.classList.add('new-bg');
    newColor.classList.remove('pink-text');
    newColor.classList.add('purple')
})