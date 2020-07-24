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
// modal__layer init
const modelLayer = document.querySelector('.modal__layer')
modelLayer.classList.add('d-none')

// open modal
const projects = document.querySelectorAll('.case')
const openModal = e => {
  let id = e.target.dataset.id
  const modal = document.querySelector(`#${id}`)
  modal.classList.remove('d-none')
  modelLayer.classList.remove('d-none')
}

projects.forEach(i => {
  i.addEventListener('click', openModal)
})

// close modal
// close model with close__icon
const closeIcon = document.querySelectorAll('.close__icon')
const closeModal = e => {
  const modal = e.target.parentNode.parentNode.parentNode
  modal.classList.add('d-none')
  modelLayer.classList.add('d-none')
}

closeIcon.forEach(i => {
  i.addEventListener('click', closeModal)
})

// close model with clikcing modal__layer
const closeAllModal = e => {
  const modals = document.querySelectorAll('.modal__item')
  modals.forEach(i => i.classList.add('d-none'))
  modelLayer.classList.add('d-none')
}

modelLayer.addEventListener('click', closeAllModal)