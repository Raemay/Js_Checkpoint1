console.log('hello')

const avatar = document.querySelector('.avatar')
const nameGreet = document.getElementById('name')
const button = document.querySelector('button')

avatar.addEventListener('click', () => {
	avatar.src = '../image/avatar.svg'
})
console.log(nameGreet)
button.addEventListener('click', () => {
	const enterName = prompt('Enter your name')
	nameGreet.textContent = enterName
})
