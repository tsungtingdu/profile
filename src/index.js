import './scss/main.scss'

// close menu after click
const menuLinks = document.querySelectorAll('.menu__list__link')
const menuToggle = document.querySelector('.navbar-toggle')
const closeMenu = e => {
  menuToggle.checked = false
  console.log(e.target)
  console.log(e.menuToggle)
}
menuLinks.forEach(i => {
  i.addEventListener('click', closeMenu)
})