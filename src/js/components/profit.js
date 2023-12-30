const profItems = document.querySelectorAll('.prof-item')

profItems.forEach(el => {
  el.addEventListener('mouseenter', e => {
    el.classList.add('active')
  })
  el.addEventListener('mouseleave', e => {
    el.classList.remove('active')
  })

  el.addEventListener('click', e => {
    el.classList.toggle('active')
  })
})
