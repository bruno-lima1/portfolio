import initSmoothScroll from "./modules/smooth-scroll.js";
import initButtonTop from "./modules/button-top.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOutsideClick from "./modules/outside-click.js";
initSmoothScroll();
initButtonTop();
initMenuMobile();
initOutsideClick();

if (window.SimpleAnime) {
  new SimpleAnime();
}
