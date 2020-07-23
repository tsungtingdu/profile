import './scss/main.scss'

// close menu after click
const menuLinks = document.querySelectorAll('.menu__list__link')
const menuToggle = document.querySelector('.navbar-toggle')
const closeMenu = e => {
  menuToggle.checked = false
}
menuLinks.forEach(i => {
  i.addEventListener('click', closeMenu)
})

// modal control
// open modal
const projects = document.querySelectorAll('.case')
const openModal = e => {
  let id = e.target.dataset.id
  const modal = document.querySelector(`#${id}`)
  modal.classList.remove('d-none')
}

projects.forEach(i => {
  i.addEventListener('click', openModal)
})
// close modal
const closeIcon = document.querySelectorAll('.close__icon')
const closeModal = e => {
  const modal = e.target.parentNode.parentNode.parentNode
  modal.classList.add('d-none')
}
closeIcon.forEach(i => {
  i.addEventListener('click', closeModal)
})