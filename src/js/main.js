import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


if(window.matchMedia('(min-width: 769px)').matches){
  const progressLine = document.querySelector('.progress__line')

  window.addEventListener('scroll', progressBar)

  function progressBar(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop

    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let per = windowScroll / windowHeight * 100
    progressLine.style.height = `${per}%`
  }
}


const menu = document.querySelector('.menu')
const burger = document.querySelector('.header__burger')
const closeBtn = document.querySelector('.menu__close')
const header = document.querySelector('.header')
const heroHeader = document.querySelector('.hero__nav')
burger.addEventListener('click', e => {
  e.preventDefault()
  menu.style.transform = 'translateX(0)'
  document.body.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', e => {
  e.preventDefault()
  menu.style.transform = null
  document.body.style.overflow = null
})




$('.ham-gal__item').ripples({
  resolution: 128,
  dropRadius: 50,
  perturbance: 0.01
});
$('.ham-item__image').ripples({
  resolution: 128,
  dropRadius: 50,
  perturbance: 0.01
});
$('.cta--ham').ripples({
  resolution: 128,
  dropRadius: 100,
  perturbance: 0.01
});
