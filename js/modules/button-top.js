export default function initButtonTop() {
  const button = document.querySelector("[data-button-top]");
  if (button) {
    button.addEventListener("click", scrollToTop);
    function scrollToTop() {
      scrollTo(0, 0);
    }
    window.addEventListener("scroll", hideButton);
    function hideButton() {
      return scrollY > 10
        ? button.classList.add("active")
        : button.classList.remove("active");
    }
  }
}
