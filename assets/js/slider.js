class Slider {
  constructor() {
    this.slider = document.querySelector('.slider')
    this.slides = document.querySelectorAll('.slider__slide')
    this.navPrev = document.querySelector('.slider__prev')
    this.navNext = document.querySelector('.slider__next')
    this.dots = document.querySelectorAll('.slider__dots--dot')
    this.slideIndex = 1
  }

  init() {
    this.showSlides(this.slideIndex)

    this.slider.addEventListener('click', (e) => {
      if (e.target.classList.contains('slider__next')) {
        this.plusSlides(1)
      }

      if (e.target.classList.contains('slider__prev')) {
        this.plusSlides(-1)
      }

      if (e.target.classList.contains('slider__dots--dot')) {
        const index = e.target.getAttribute('data-index')
        this.currentSlide(parseInt(index))
      }
    })
    
  }

  plusSlides (n) {
    this.showSlides((this.slideIndex += n))
  }

  currentSlide (n) {
    this.showSlides((this.slideIndex = n))
  }

  showSlides(n) {
    let i
    if (n > this.slides.length) {
      this.slideIndex = 1
    }

    if (n < 1) {
      this.slideIndex = this.slides.length
    }
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none'
    }

    this.slides[this.slideIndex - 1].style.display = 'block'
  }
}

const slider = new Slider()
document.addEventListener('DOMContentLoaded', () => {
  slider.init()
})
