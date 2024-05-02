function readMore(btn, block){ //Функция отвечающая за конопки Читать далее/Скрыть
  if (btn.textContent === 'Читать далее') {
    block.style.maxHeight = 'max-content'
    btn.textContent = 'Скрыть'
  } else {
    block.style.maxHeight = '90px'
    btn.textContent = 'Читать далее'
  }
}
function showAll(btn, block, height){ //Функция отвечающая за конопки Показать все/Скрыть
  if (btn.textContent === 'Показать все') {
      block.style.maxHeight = 'max-content'
      btn.textContent = 'Скрыть'
    } else {
      block.style.maxHeight = height + 'px'
      btn.textContent = 'Показать все'
    }
}

//Инициализация кнопки Читать далее блок брендов
let aboutButton = document.querySelector('.about__button')
let aboutText = document.getElementById('about__text')
aboutButton.onclick = function () {
  readMore(aboutButton, aboutText, 90)
}

//Инициализация кнопки Показать все блок брендов
let brandButton = document.querySelector('.brand__button')
let brandText = document.getElementById('brand')
brandButton.onclick = function () {
  showAll(brandButton, brandText, 135)
}

//Инициализация кнопки Показать все блок видов техники
let techniqueButton = document.querySelector('.technique__button')
let techniqueText = document.getElementById('technique')
techniqueButton.onclick = function () {
  showAll(techniqueButton, techniqueText, 142)
}