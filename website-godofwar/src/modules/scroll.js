// scroll.js
const classes = {
  hidden: "hidden",
};

const sections = document.querySelectorAll(".section");

export const handleScroll = () => {
  const { scrollY: y, innerHeight: h } = window;
  sections.forEach((sec) => {
    if (y > sec.offsetTop - h / 1.5) sec.classList.remove(classes.hidden);
  });
};
