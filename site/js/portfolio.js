/*CHANGER AVATAR */
function changeAvatar() {
    const avatar = document.querySelector('.avatar').getAttribute("src");
    if (avatar == 'image/avatar-bis.png') {
        document.querySelector('.avatar').src='image/avatar.svg';
    } else {
        document.querySelector('.avatar').src='image/avatar-bis.png';
    }
}

/*MODIFIER TEXTE+COULEUR INPUT */
function modifyTextAndColor() {
    const userName = prompt("Enter your name:");
    document.querySelector('#name').style.color = 'white';
    document.querySelector('#name').textContent = userName;
    document.querySelector('.pink-bg').style.background = '#750ff7';
}