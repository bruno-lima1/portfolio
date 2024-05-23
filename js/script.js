import SmoothScroll from "./modules/smooth-scroll.js"
const smoothScroll = new SmoothScroll("[data-smoothScroll] a")
smoothScroll.init()

// import initSmoothScroll from "./modules/smooth-scroll.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOutsideClick from "./modules/outside-click.js";
// initSmoothScroll();
initMenuMobile();
initOutsideClick();

if (window.SimpleAnime) {
  new SimpleAnime();
}
