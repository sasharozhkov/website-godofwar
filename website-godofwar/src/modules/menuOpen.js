// menuOpen
const classes = {
  opened: "opened",
};

const header = document.querySelector(".header");
export const menuButton = document.querySelector(".header-menu__button");
export const toggleMenu = () => header.classList.toggle(classes.opened);
