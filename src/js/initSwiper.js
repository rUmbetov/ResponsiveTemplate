import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

if (window.innerWidth < 768) {  //Проверка на мобильное устройство
  const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    direction: 'horizontal',
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination'
    }
  })
}