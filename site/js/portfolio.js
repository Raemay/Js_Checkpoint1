console.log('hello')

const avatar = document.querySelector('.avatar')
const nameGreet = document.getElementById('name')
const button = document.querySelector('button')
const description = document.querySelector('.pink-bg')

console.log(description)

avatar.addEventListener('click', () => {
	avatar.src = '../image/avatar.svg'
})
console.log(nameGreet)
button.addEventListener('click', () => {
	const enterName = prompt('Enter your name')
	const changeColor = prompt('Enter your color')
	console.log(changeColor)
	nameGreet.textContent = enterName
	description.style.backgroundColor = changeColor
})
