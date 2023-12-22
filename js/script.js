
// Получение селектора модального окна на странице
const openModal = document.getElementById('openModal') 
const closeBtn = document.querySelector('.close')
const submitBtn = document.querySelector('.submitBtn')
const inputs = document.querySelectorAll('.modalField')
const modalSuccessClose = document.querySelector('.modalSuccessClose')
const modalSuccess = document.querySelector('.modalSuccess')
// Получние кнопк: "Помочь природе"
const volunteerBtn = document.querySelector('.volunteerBtn')


volunteerBtn.addEventListener('click', function () {
	openModal.style.display = 'block'
})

closeBtn.addEventListener('click', function () {
	openModal.style.display = 'none'
})

submitBtn.addEventListener('click', e => {
	e.preventDefault()
	for (i = 0; i < inputs.length; i++) {
		console.log(inputs[i].value)
		if (inputs[i].value != '') {
			openModal.style.display = 'none'
			modalSuccess.style.display = 'block'
		}
	}
})

modalSuccessClose.addEventListener('click', () => {
	modalSuccess.style.display = 'none'
})
