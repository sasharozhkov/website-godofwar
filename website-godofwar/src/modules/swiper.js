// swiper
import "swiper/swiper.min.css";
import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

export const initSlider = () => {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    initialSlide: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      1050: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1605: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
};

initSlider();
