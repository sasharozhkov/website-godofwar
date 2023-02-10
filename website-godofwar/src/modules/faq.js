// faq.js
const classes = {
  opened: 'opened',
};

export const faqItem = document.querySelectorAll('.faq-item');

export const handleFaqItem = ({ currentTarget: target }) => {
  target.classList.toggle(classes.opened);
  const isOpened = target.classList.contains(classes.opened);
  const height = target.querySelector('p').clientHeight;
  const content = target.querySelector('.faq-item__content');

  content.style.height = `${isOpened ? height : 0}px`;
};
