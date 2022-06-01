const avatar = document.querySelector("#avatar")
avatar.onclick = () => avatar.src = "image/avatar.svg"

const nameBtn = document.querySelector("#nameBtn")
nameBtn.onclick = () => {
    let userName = prompt("add your name")
    const a = document.querySelectorAll("a")
    const name = document.querySelector("#name")
    name.innerHTML = `${userName}`
    name.style.color = "white"
    const pinkBg = document.querySelectorAll(".pink-bg")
    const pinkText = document.querySelectorAll(".pink-text")
    pinkBg.forEach(elem => elem.style.backgroundColor = "#750ff7")
    pinkText.forEach(elem => elem.style.color = "#750ff7")
    a.forEach(elem => elem.style.color = "#750ff7")
    let arr = ["VScode", "Github", "Terminal"]
    const li = document.querySelectorAll("li")
    li.forEach((elem, index) => elem.innerHTML = `${arr[index - 1]} `)
}

const ulSkill = document.querySelector("#ulSkill")
const selector = document.querySelector("#selector")
const skillBtn = document.querySelector("#skillBtn")
skillBtn.onclick = () => {
    const liSkill = document.createElement("li")
    liSkill.innerHTML = `${selector.value}`
    ulSkill.appendChild(liSkill)
}