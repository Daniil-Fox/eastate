import Swiper from "swiper/bundle";

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }
  if(document.querySelector('.complex-ach__slider')){
    resizableSwiper(
      '(min-width: 769px)',
      '.complex-ach__slider',
      {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay : {
          delay: 3000,
          disableOnInteraction: false
        },

      }
    );
  }
  if(document.querySelector('.ham-gal__slider')){
    resizableSwiper(
      '(max-width: 768px)',
      '.ham-gal__slider',
      {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: '.ham-gal-button-next',
          prevEl: '.ham-gal-button-prev',
        },
      }
    );
  }

});
