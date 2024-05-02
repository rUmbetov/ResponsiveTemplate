const buttonCall = document.querySelectorAll('.call')
const modalElem2 = document.querySelector('.call-modal')

modalElem2.style.cssText = `
    display: flex;
    z-index:100;
    visibility: hidden;
    opacity:0;
    transition: opacity 300ms ease-in-out;
`
const closeModal = (event) => {
  const target = event.target
  if (target === modalElem2 || target.closest('.call-modal__button-close')) {
    modalElem2.style.opacity = 0
    setTimeout(() => {
      modalElem2.style.visibility = 'hidden'
    }, 300)
  }
}
const openModal = () => {
  modalElem2.style.visibility = 'visible'
  modalElem2.style.opacity = 1
}
buttonCall.forEach(function (element) {
  element.onclick = openModal
})
modalElem2.addEventListener('click', closeModal)
