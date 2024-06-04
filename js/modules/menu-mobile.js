export default class MenuMobile {
  constructor(button, wrapper, list, close) {
    this.button = document.querySelector(button);
    this.wrapper = document.querySelector(wrapper);
    this.list = document.querySelectorAll(list);
    this.close = document.querySelector(close);
    this.enableMenuMobile = this.enableMenuMobile.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  init() {
    if (this.button && this.wrapper) {
      this.menuEvent();
      this.menuList();
      this.eventCloseButton()
    }
    return this;
  }
  menuEvent() {
    this.button.addEventListener("click", this.enableMenuMobile);
  }
  enableMenuMobile() {
    this.wrapper.classList.toggle("active");
    this.enableCloseButton()
  }
  menuList() {
    this.list.forEach((item) => {
      item.addEventListener("click", this.closeMenu);
    });
  }
  closeMenu() {
    this.wrapper.classList.remove("active");
    this.disableCloseButton()
  }
  enableCloseButton() {
    this.close.classList.add("active")
  }
  disableCloseButton() {
    this.close.classList.remove("active")
  }
  eventCloseButton() {
    this.close.addEventListener("click", this.closeMenu)
  }
}
