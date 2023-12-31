import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const mm = gsap.matchMedia()

mm.add('(min-width: 769px)', () => {
  const timeline = gsap.timeline()


  timeline
  .to('.hero__cover', {clipPath: 'circle(100% at 50% 50%)'})
  .to('.header--main', {opacity: 1, yPercent: 0})
  .to('.hero__header', {opacity: 1, yPercent: 0})
  .to('.hero__items', {opacity: 1, yPercent: 0})
  .to('.hero__items', {yPercent: -150})


  ScrollTrigger.create({
    animation: timeline,
    trigger: '.g-wrap',
    start: 'top top',
    end: '+=300%',
    endTrigger: '.mission',
    scrub: 0.5,
    pin: true,
    ease: 'linear'
  })


  const trigger = document.querySelector('.trigger-line')
  if(trigger){
    const items = document.querySelectorAll('.hero-item')
    const observer = new IntersectionObserver((entries, observer) => {
      if(entries[0].isIntersecting){
        window.addEventListener('scroll', checkLine)
      }
    }, {
      threshold: [0, 0.5, 1]
    })
    function checkLine(){
      items.forEach(el => {
        const rect = el.getBoundingClientRect()
        const tRect = trigger.getBoundingClientRect()
        if(rect.y + (el.clientHeight / 4) < tRect.y){
          el.style.opacity = 0
        } else {
          el.style.opacity = 1
        }
      })
    }

    observer.observe(trigger)
  }






  const aboutTl = gsap.timeline()
  const container = document.querySelector('.about-ben__container')
  if(container){
    aboutTl.to(container, {x : () => -(container.scrollWidth - window.innerWidth), scrollTrigger : {
      trigger: container,
      start: 'top top',
      end: '+=' + container.scrollWidth - window.innerWidth,
      scrub: 0.5,
      pin: container,
      ease: 'none'
    }})
  }
})
console.log("hero");
