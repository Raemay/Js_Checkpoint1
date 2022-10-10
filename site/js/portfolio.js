const avatar = document.getElementById("avatar");
const userName = document.getElementById("name");
const changeTextButton = document.getElementById("change-text-button");
const descriptionContainer = document.querySelector(".description");
const allPinkBgElements = document.querySelectorAll(".pink-bg");
const allPinkTextElements = document.querySelectorAll(".pink-text");
const allLinks = document.querySelectorAll("a");
const skillList = document.getElementById("front-dev-tools");
const backSkillsList = document.getElementById("back-dev-tools");
const addSkillButton = document.getElementById("add-skill-button");
const addSkillInput = document.getElementById("add-skill-input");

avatar.addEventListener("click", () => {
  avatar.src = "./image/avatar.svg";
});

changeTextButton.addEventListener("click", () => {
  const newUserName = prompt("Please give me a username");
  const newBgColor = prompt("Please enter a new color");

  userName.innerText = newUserName;
  userName.style.color = "white";

  allPinkBgElements.forEach(
    (element) => (element.style.backgroundColor = "#750ff7")
  );
  allPinkTextElements.forEach((element) => (element.style.color = "#750ff7"));
  allLinks.forEach((link) => (link.style.color = "#750ff7"));
});

skillList.innerHTML = `
<li>React</li>
<li>NodeJs</li>
<li>Git</li>
`;

addSkillButton.addEventListener("click", () => {
  const newListItem = document.createElement("li");
  newListItem.innerText = addSkillInput.value;
  backSkillsList.appendChild(newListItem);
  addSkillInput.value = "";
});
