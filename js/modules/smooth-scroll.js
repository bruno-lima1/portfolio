export default class SmoothScroll {
  constructor(buttons) {
    this.buttons = document.querySelectorAll(buttons)
    this.enableSmoothScroll = this.enableSmoothScroll.bind(this)
  }
  init() {
    if (this.buttons.length) {
      this.eventSmoothScroll()
    }
    return this;  
  }
  eventSmoothScroll() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", this.enableSmoothScroll)
    })
  }
  enableSmoothScroll(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
}
