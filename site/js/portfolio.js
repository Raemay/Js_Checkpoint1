// Task 1
const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", () => {
  const srcAvatar = avatar.src;
  return srcAvatar.match("image/avatar-bis.png")
    ? (avatar.src = "image/avatar.svg")
    : (avatar.src = "image/avatar-bis.png");
});

// Task 2 3 4 5

const nameDisplay = document.getElementById("name");
const descriptionDiv = document.querySelector(".description");
const btnChangeName = document.getElementById("change_name");
const allPinkText = document.querySelectorAll(".pink-text");
const allPinkBg = document.querySelectorAll(".pink-bg");
const allA = document.querySelectorAll("a");

btnChangeName.onclick = () => {
  const userColor = prompt("Enter your Color");
  const userName = prompt("Enter your name");
  descriptionDiv.style.backgroundColor = userColor;
  btnChangeName.style.background = userColor;
  nameDisplay.style.color = "white";
  nameDisplay.textContent = userName;
  allPinkText.forEach((el) => el.classList.replace("pink-text", "purple-text"));
  allPinkBg.forEach((el) => el.classList.replace("pink-bg", "purple-bg"));
  allA.forEach((el) => el.classList.add("purple-text"));
};

// Task 6

const btnModifyLi = document.getElementById("modify-li");
const tools = ["VsCode", "GitHub", "Terminal"];

btnModifyLi.onclick = () => {
  const ul = document.getElementById("front-dev-tools");
  ul.innerHTML = "";
  tools.map((tool) => {
    const li = document.createElement("li");
    li.textContent = tool;
    ul.appendChild(li);
  });
};

// Task 7

const form = document.querySelector("form");
const userTool = document.getElementById("user-tool");
const userToolsUl = document.getElementById("user-back-tools");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTool = document.createElement("li");
  newTool.textContent = userTool.value;
  userToolsUl.appendChild(newTool);
  userTool.value = "";
});
