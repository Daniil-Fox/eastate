import './_vendor';
import './_components';
import Rellax from 'rellax';


window.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('.rellax') && window.matchMedia('(min-width: 769px)').matches){
    const rellax = new Rellax('.rellax', {
      center: true,
      speed: 0.8
    })
    window.addEventListener('resize', () => {
      rellax.refresh()
    })
  }
})

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
$('.ripple').ripples({
  resolution: 128,
  dropRadius: 60,
  perturbance: 0.02
});
$('.achiev__image-rip').ripples({
  resolution: 128,
  dropRadius: 60,
  perturbance: 0.04
});
$('.cta--ham').ripples({
  resolution: 128,
  dropRadius: 100,
  perturbance: 0.01
});
