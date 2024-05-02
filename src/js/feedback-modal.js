const buttonFeedback = document.querySelectorAll('.btn-modal-feedback')
const modalElem = document.querySelector('.feedback-modal')
modalElem.style.cssText = `
    display: flex;
    z-index:100;
    visibility: hidden;
    opacity:0;
    transition: opacity 300ms ease-in-out;
`

const closeModal = (event) => {
  const target = event.target
  if (target === modalElem || target.closest('.feedback-modal__button-close')) {
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
modalElem.addEventListener('click', closeModal)
buttonFeedback.forEach(function (element) {
  element.onclick = openModal
})
