export default function initButtonTop() {
  const button = document.querySelector("[data-button-top]");
  if (button) {
    button.addEventListener("click", handleClick);
    window.addEventListener("scroll", hideButton);
    function handleClick() {
      scrollTo(0, 0);
    }
    function hideButton() {
      return scrollY > 10
        ? button.classList.add("active")
        : button.classList.remove("active");
    }
  }
}
