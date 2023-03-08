class App {
  constructor() {}

  // init app
  init() {
    console.log('App')
  }
}

const app = new App()
document.addEventListener('DOMContentLoaded', () => {
  app.init()
})
