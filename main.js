// Menu Responsivo //
/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

if (window.scrollY >= navHeight) {
  // scroll é maior que a altura do header
  header.classList.add('scroll')
} else {
  // menor que a altura do header
  header.classList.remove('scroll')
}

/* ScrollReveal */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home video, #home .text,
   #about img, #about .text,
   #services header, #services .card,
   #brands header, #brands .brands
   #contact .text, #contact .links,
   footer .brand, footer .social
   `,

  { interval: 100 }
)

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})

let count = 1
document.getElementById('radio1').checked = true

setInterval(function () {
  nextImage()
}, 2000)

function nextImage() {
  count++
  if (count > 4) {
    count = 1
  }

  document.getElementById('radio' + count).checked = true
}
