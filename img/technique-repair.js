let techniqueButton = document.querySelector('.technique__button')
let brand = document.getElementById('technique')
document.querySelector('.technique__button').onclick = function () {
  if (techniqueButton.textContent === 'Показать все') {
    brand.style.maxHeight = 'max-content'
    techniqueButton.textContent = 'Скрыть'
  } else {
    brand.style.maxHeight = '142px'
    techniqueButton.textContent = 'Показать все'
  }
}
