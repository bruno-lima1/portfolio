export default function initSmoothScroll() {
  const buttons = document.querySelectorAll("[data-smoothScroll] a");
  if (buttons) {
    buttons.forEach((button) => {
      ["touchstart", "click"].forEach((userEvent) => {
        button.addEventListener(userEvent, activeScroll);
      });
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
