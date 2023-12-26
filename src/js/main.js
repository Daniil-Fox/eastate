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
