class Slider {
  constructor() {
    this.slider = document.querySelector('.slider')
    this.slides = document.querySelectorAll('.slider__slide')
    this.navPrev = document.querySelector('.slider__prev')
    this.navNext = document.querySelector('.slider__next')
    this.slideCurrent = document.querySelector('#slide-current')
    this.slideAll = document.querySelector('#slide-all')
    this.slideIndex = 1
    this.isAuto = false
    this.timer = 10000
  }

  init() {
    this.showSlides(this.slideIndex)

    // push slides length in dots all
    this.slideAll.innerHTML = this.slides.length

    this.slider.addEventListener('click', (e) => {
      if (e.target.classList.contains('slider__next')) {
        this.plusSlides(1)
      }

      if (e.target.classList.contains('slider__prev')) {
        this.plusSlides(-1)
      }

    })
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n))
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n))
  }

  showSlides(n) {
    this.slideIndex = n
    
    if (n > this.slides.length) {
      this.slideIndex = 1
    }

    if (n < 1) {
      this.slideIndex = this.slides.length
    }

    // hide slides
    this.slides.forEach(slide => {
      slide.style.display = 'none'
    });

    // update dots
    this.slideCurrent.innerHTML = this.slideIndex

    // show active slide
    this.slides[this.slideIndex - 1].style.display = 'block'

    // init autonav
    if(!this.isAuto) {
      this.isAuto = true
      this.autoNav()
    }
  }

  autoNav() {
    setInterval(() => {
      this.showSlides(this.slideIndex + 1)
    }, this.timer)
  }
}

const slider = new Slider()
document.addEventListener('DOMContentLoaded', () => {
  slider.init()
})
