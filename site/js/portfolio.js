//* MODIF IMAGE AVATAR
const newImg = document.querySelector("#avatar");
newImg.onclick = function () {
    newImg.src = "image/avatar-bis.png"};

//* MODIF USERNAME & COLORS
const chgBtn = document.querySelector("#chgBtn");
chgBtn.addEventListener('click', function () {
    const name = document.querySelector("#name");
    const userEnter = prompt("Enter your name");
    name.style.color = "white";
    name.textContent = userEnter;
    //* STEP 2 BACKGROUND COLOR
    const colorChoice = document.querySelector(".pink-bg");
    const userColor = prompt("Enter a color");
    colorChoice.style.backgroundColor = userColor;
    //* STEP 3 ALL COLORS -- NOT FINISHED
/*    const userColor = prompt("Enter a color");
    const colorChoiceBck = [];
    const colorChoiceTxt = [];
    colorChoiceBck.push(document.querySelectorAll(".pink-bg"));
    colorChoiceTxt.push(document.querySelectorAll(".pink-text"));
    colorChoiceBck.forEach(color => style.backgroundColor = userColor);
    colorChoiceTxt.forEach(color => style.color = userColor);*/
});

