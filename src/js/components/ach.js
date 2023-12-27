import Swiper from "swiper/bundle";


const achSwiper = new Swiper('.complex-ach__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  duration: 1000,
  autoplay : {
    delay: 5000,
    disableOnInteraction: false
  },
})
