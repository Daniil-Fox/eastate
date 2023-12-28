import Swiper from "swiper/bundle";


const achSwiper = new Swiper('.complex-ach__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay : {
    delay: 3000,
    disableOnInteraction: false
  },
})
