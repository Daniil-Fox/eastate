import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const mm = gsap.matchMedia()

mm.add('(min-width: 769px)', () => {
  const timeline = gsap.timeline()
  const timelineText = gsap.timeline()

  timeline
  .to('.hero__cover', {clipPath: 'circle(100% at 50% 50%)'})
  .fromTo('.header', {yPercent: -10, opacity: 0}, {opacity: '1', yPercent: 0})
  .fromTo('.hero__header', {yPercent: 10}, {opacity: '1', yPercent: 0})
  .fromTo('.hero__items', {yPercent: 15, opacity: 0}, {opacity: 1, yPercent: 0})



  ScrollTrigger.create({
    animation: timeline,
    trigger: '.hero',
    start: 'top top',
    end: '+=200%',
    scrub: 1,
    pin: '.hero'
  })
})


