import debounce from "./debounce.js";

export default class HeaderAnimation {
  constructor(links) {
    this.links = document.querySelectorAll(links);
    this.enableHeaderAnimation = debounce(
      this.enableHeaderAnimation.bind(this),
      25
    );
    this.active = "active";
  }
  init() {
    if (this.links.length) {
      this.eventScroll();
      this.enableHeaderAnimation(0);
    }
    return this;
  }
  eventScroll() {
    window.addEventListener("scroll", this.enableHeaderAnimation);
  }
  enableHeaderAnimation() {
    this.links.forEach((link) => {
      const href = link.getAttribute("href");
      const section = document.querySelector(href);
      const offsetTop = section.offsetTop;
      if (window.scrollY >= offsetTop) {
        this.links.forEach((link) => {
          link.classList.remove(this.active)
        })
      link.classList.add(this.active);
      }
    })
  }
}
