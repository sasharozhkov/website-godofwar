const classes = {
  opened: "opened",
};

const values = [
  {
    price: 20,
    title: "Standard Edition",
  },
  {
    price: 30,
    title: "Standard Edition",
  },
  {
    price: 40,
    title: "Digital Deluxe Edition",
  },
];

export const buyButton = document.querySelectorAll(".buy-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalTitle = document.querySelector(".modal-version");
const modalPrice = document.querySelector(".modal-total__price");
export const modalClose = document.querySelector(".modal-close");

export const handleBuyButton = ({ currentTarget: target }) => {
  const { value } = target.dataset;
  if (!value) return;
  const { price, title } = values[value];
  modalTitle.innerText = title;
  modalPrice.innerText = `${price}$`;
  modal.classList.add(classes.opened);
  overlay.classList.add(classes.opened);
};

export const closeModal = () => {
  modal.classList.remove(classes.opened);
  overlay.classList.remove(classes.opened);
};
