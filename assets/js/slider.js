class Slider {
  constructor() {
    this.slider = document.querySelector('.slider')
    this.slides = document.querySelectorAll('.slider__slide')
    this.navPrev = document.querySelector('.slider__prev')
    this.navNext = document.querySelector('.slider__next')
    this.dots = document.querySelectorAll('.slider__dots--dot')
  }

  init() {
    let slideIndex = 1

    const plusSlides = (n) => {
      showSlides((slideIndex += n))
    }

    const currentSlide = (n) => {
      showSlides((slideIndex = n))
    }

    const showSlides = (n) => {
      let i
      if (n > this.slides.length) {
        slideIndex = 1
      }

      if (n < 1) {
        slideIndex = this.slides.length
      }
      for (i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = 'none'
      }

      this.slides[slideIndex - 1].style.display = 'block'
    }

    showSlides(slideIndex)

    this.slider.addEventListener('click', (e) => {
      if (e.target.classList.contains('slider__next')) {
        plusSlides(1)
      }

      if (e.target.classList.contains('slider__prev')) {
        plusSlides(-1)
      }

      if (e.target.classList.contains('slider__dots--dot')) {
        const index = e.target.getAttribute('data-index')
        currentSlide(parseInt(index))
      }
    })
  }
}

const slider = new Slider()
document.addEventListener('DOMContentLoaded', () => {
  slider.init()
})
