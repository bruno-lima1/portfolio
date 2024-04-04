export default function initButtonTop() {
  const button = document.querySelector("[data-button-top]");
  if (button) {
    button.addEventListener("click", handleClick);
    window.addEventListener("scroll", hideButton);

    function handleClick() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    function hideButton() {
      return window.scrollY > 10
        ? button.classList.add("active")
        : button.classList.remove("active");
    }
  }
}
