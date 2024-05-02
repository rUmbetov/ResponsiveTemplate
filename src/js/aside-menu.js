const buttonFeedback = document.querySelector('.header__button')
const modalElem = document.querySelector('.left-aside__bg')

modalElem.style.cssText = `

`
const closeModal = (event) => {
  const target = event.target
  if (target === modalElem || target.closest('.left-aside--button-burger')) {
    modalElem.style.opacity = 0
    setTimeout(() => {
      modalElem.style.visibility = 'hidden'
    }, 300)
  }
}
const openModal = () => {
  modalElem.style.visibility = 'visible'
  modalElem.style.opacity = 1
}
buttonFeedback.addEventListener('click', openModal)
modalElem.addEventListener('click', closeModal)
