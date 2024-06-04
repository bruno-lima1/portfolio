import SmoothScroll from "./modules/smooth-scroll.js"
const smoothScroll = new SmoothScroll("[data-smoothScroll] a")
smoothScroll.init()

import HeaderAnimation from "./modules/header-animation.js"
const headerAnimation = new HeaderAnimation("[data-header-animation-target] a");
headerAnimation.init();

import MenuMobile from "./modules/menu-mobile.js";
const menuMobile = new MenuMobile("[data-menu-mobile-button]", "[data-menu-mobile-wrapper]", "[data-menu-mobile-list] a", "[data-menu-mobile-close]");
menuMobile.init()
