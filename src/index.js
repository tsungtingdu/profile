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
const html = document.querySelector('html')
const projects = document.querySelectorAll('.case')
const openModal = e => {
  let id = e.target.dataset.id
  const modal = document.querySelector(`#${id}`)
  modal.classList.remove('d-none')
  modelLayer.classList.remove('d-none')
  html.setAttribute("style", "overflow: hidden;")
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
  html.removeAttribute("style")
  html.setAttribute("style", "overflow: scroll;")
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

// title animation
//const strText = text.textContent;
const strText = ['Tim', 'TD', 'Developer', 'Learner', 'Engineer']
let index = 0

// show name first when page loaded
changeName()
// create animation
setInterval(changeName, 2500)

function changeName() {
  const text = document.querySelector('.home__container__text__name')
  const splitText = strText[index].split("")
  text.textContent = ""

  // create HTML elements
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += `<span>${splitText[i]}</span>`
  }
  let char = 0;
  let timer = setInterval(onTick, 100)

  // create tick
  function onTick() {
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === splitText.length) {
      clearInterval(timer)
      timer = null
      index = (index == strText.length - 1) ? 0 : index + 1
      return
    }
  }
}