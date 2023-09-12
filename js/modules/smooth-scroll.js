export default function initSmoothScroll() {
  const buttons = document.querySelectorAll("[data-smoothScroll]");
  if (buttons) {
    buttons.forEach((button) => {
      button.addEventListener("click", activeScroll);
    });
    function activeScroll(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}
