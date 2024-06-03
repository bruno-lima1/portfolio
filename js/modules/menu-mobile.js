export default class MenuMobile {
  constructor(button, wrapper, list) {
    this.button = document.querySelector(button);
    this.wrapper = document.querySelector(wrapper);
    this.list = document.querySelectorAll(list);
    this.enableMenuMobile = this.enableMenuMobile.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  init() {
    if (this.button && this.wrapper) {
      this.menuEvent();
      this.menuList();
    }
    return this;
  }
  menuEvent() {
    this.button.addEventListener("click", this.enableMenuMobile);
  }
  enableMenuMobile() {
    this.wrapper.classList.toggle("active");
  }
  menuList() {
    this.list.forEach((item) => {
      item.addEventListener("click", this.closeMenu);
    });
  }
  closeMenu() {
    this.wrapper.classList.remove("active");
  }
}
