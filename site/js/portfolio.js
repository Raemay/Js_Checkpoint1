const changementImage = document.querySelector("click-event");
const image1 = document.querySelector('.avatar1');
const image2 = document.querySelector ('.avatar2');

image1.addEventListener ('click', () => {
    image2.classList.remove('avatar2')
    image1.classList.add("avatar2");
})
image2.addEventListener('click', () => {
    image1.classList.remove('avatar2')
    image2.classList.add("avatar2");
})

const nouveauNom = document.querySelector("click-event");
let oldName = document.querySelector('#name');

oldName.addEventListener('click', () => {
oldName.innerHTML = prompt("Enter your name")
document.getElementById("nouveauNom").style.backgroundColor="white";
})
