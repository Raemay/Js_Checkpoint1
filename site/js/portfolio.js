// our goal is to select the image of avatar and select DOM element and change the src of the image for
// something else or the image we have in the folder image "image/avatar.svg".

const avatar = ".img-avatar";
const newAvatar = document.querySelector(avatar);

newAvatar.addEventListener("click", function () {
  newAvatar.src = "image/avatar.svg";
});




function PromptMessage() {
  var newName = prompt("whats your name");
  console.log(newName);
  

  const selectedName = "#name";
  const changeName = document.querySelector(selectedName);

  changeName.addEventListener("click", function () {
    changeName.innerHTML = newName.value;
    
  });
}


function newFunction() {
    PromptMessage();
}
