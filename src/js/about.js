//Кнопка читать далее
let aboutButton = document.querySelector('.about__button')
let aboutText = document.querySelector('.about__text')
document.querySelector('.about__button').onclick = function () {
  if (aboutButton.textContent === 'Читать далее') {
    aboutText.style.maxHeight = 'fit-content'
    aboutButton.textContent = 'Скрыть'
  } else {
    aboutText.style.maxHeight = '90px'
    aboutButton.textContent = 'Читать далее'
  }
}
