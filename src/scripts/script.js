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

  const slides = Array.from(document.querySelectorAll('.testimonials__item'));

  const prevBtn = document.querySelector('.testimonials__button--prev');
  const nextBtn = document.querySelector('.testimonials__button--next');

  let currentSlideIndex = slides.findIndex((slide) => slide.classList.contains('testimonials__item--active'));

  if (currentSlideIndex === -1) currentSlideIndex = 0;

  function showSlide(newIndex) {
    slides[currentSlideIndex].classList.remove('testimonials__item--active');
    currentSlideIndex = (newIndex + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('testimonials__item--active');
  }

  prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));
});
