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
    const userColor = prompt("Enter your color:");
    document.querySelector('#name').style.color = 'white';
    document.querySelector('#name').textContent = userName;
    document.querySelector('.pink-bg').style.background = '#750ff7';
    const colorBackground = document.querySelectorAll('.pink-bg')
        for (let i = 0; i < colorBackground.length; i++) {
            colorBackground[i].style.background = userColor;
        }
    const colorText = document.querySelectorAll('.pink-text');
        for (let i = 0; i < colorText.length; i++) {
            colorText[i].style.color = userColor;
        }
    const colorLink = document.querySelectorAll("a");
        for (let i = 0; i < colorLink.length; i++) {
            colorLink[i].style.color = userColor;
        }
};

/*MODIFIER LISTE DEV TOOLS */
function modifyDevTools() {
    const devToolsList = ['VS Code', 'React', 'Jquery'];
        for (let i= 0; i < devToolsList.length; i++) {
            document.querySelectorAll('#front-dev-tools').innerHTML = devToolsList[0];  
            document.querySelectorAll('#front-dev-tools').innerHTML = devToolsList[1];
            document.querySelectorAll('#front-dev-tools').innerHTML = devToolsList[2];
        }
}