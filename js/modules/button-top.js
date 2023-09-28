export default function initButtonTop() {
  const button = document.querySelector("[data='button-top']");
  if (button) {
    ["touchstart", "click"].forEach((userEvent) => {
      button.addEventListener(userEvent, scrollToTop);
    });
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
    document.addEventListener("scroll", hideButton);
    function hideButton() {
      return window.scrollY > 10
        ? (button.style.display = "flex")
        : (button.style.display = "none");
    }
  }
}
