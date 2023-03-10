class Parallax {
  constructor() {
    this.scrolled = 0
  }

  // init app
  init() {
    window.addEventListener('scroll', this.parallaxAnimation)
  }

  parallaxAnimation() {
    const parallaxElems = document.querySelectorAll('.parallax')
    this.scrolled = window.pageYOffset
    parallaxElems.forEach((elem) => {
      const thisElem = elem
      const elemPosition = elem.offsetTop
      const coords = (this.scrolled - elemPosition) * 0.4 + 'px'
      thisElem.style.transform = 'translateY(' + coords + ')'
    })
  }
}

const parallax = new Parallax()
document.addEventListener('DOMContentLoaded', () => {
  parallax.init()
})
