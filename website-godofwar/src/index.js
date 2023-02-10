import "./index.html";
import "./index.scss";

// menuOpen.js
import { menuButton, toggleMenu } from "./modules/menuOpen";
menuButton.addEventListener("click", toggleMenu);

// menuScroll.js
import { menuLink, scrollToSection } from "./modules/menuScroll";
menuLink.forEach((link) => link.addEventListener("click", scrollToSection));

// timer.js
import { startTimer } from "./modules/timer";
startTimer("December 23, 2023 00:00:00");

// video.js
import { videoButton, handleVideo } from "./modules/video";
videoButton.addEventListener("click", handleVideo);

// checkbox.js
import { checkbox, handleCheckbox } from "./modules/checkbox";
checkbox.forEach((box) => box.addEventListener("click", handleCheckbox));

// swiper.js
import { initSlider } from "./modules/swiper";
initSlider();

// faq.js
import { faqItem, handleFaqItem } from "./modules/faq";
faqItem.forEach((item) => item.addEventListener("click", handleFaqItem));

// scroll.js
import { handleScroll } from "./modules/scroll";
window.addEventListener("scroll", handleScroll);

// languages.js
import { language, setTexts, toggleLanguage } from "./modules/languages";
language.forEach((lang) => lang.addEventListener("click", toggleLanguage));
setTexts();

// modal.js
import { buyButton, modalClose, handleBuyButton, closeModal } from "./modules/modal";
modalClose.addEventListener("click", closeModal);
buyButton.forEach((btn) => btn.addEventListener("click", handleBuyButton));
