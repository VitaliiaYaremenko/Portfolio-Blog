'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.categories__item');

  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      items.forEach((el) => el.classList.remove('categories__item--active'));

      item.classList.add('categories__item--active');
    });
  });
});
