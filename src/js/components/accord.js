const accordItems = document.querySelectorAll('.faq-cont__item')
if(accordItems && accordItems.length > 0){
  accordItems.forEach(el => {
    const content = el.querySelector('.faq-cont__content')
    let isActive = false
    el.addEventListener('click', e => {
      e.preventDefault()

      isActive = el.classList.toggle('active')
      if(isActive){
        content.style.maxHeight = content.scrollHeight + 'px'
      } else {
        content.style.maxHeight = null
      }
    })
  })
}
