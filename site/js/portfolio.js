const image = document.getElementById('avatar');

image.addEventListener('click', function() {
    image.src = 'https://picsum.photos/200/300?grayscale';
});


function promptMe(){
    let userName = prompt("Please, enter your name");
    alert (userName);}
