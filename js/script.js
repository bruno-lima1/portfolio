import SmoothScroll from "./modules/smooth-scroll.js"
const smoothScroll = new SmoothScroll("[data-smoothScroll] a")
smoothScroll.init()

import HeaderAnimation from "./modules/header-animation.js"
const headerAnimation = new HeaderAnimation("[data-header-animation-target] a");
headerAnimation.init();

import initMenuMobile from "./modules/menu-mobile.js";
import initOutsideClick from "./modules/outside-click.js";
initMenuMobile();
initOutsideClick();
