'use strict';

// Select DOM elements
const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.btn-right');
const btnPrev = document.querySelector('.btn-left');

// State variables
let currentSlide = 0;
const maxSlide = slides.length;
const timeOut = 10000;

// Slide initial function
/**
 * @param {*} slide
 * @author Joel Nambala
 * @description loops over the nodelist and adds a transform prperty at each iteration
 */
const goToSlide = function (slide) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);

// Event functions
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) currentSlide = 0;
  else currentSlide++;

  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) currentSlide = maxSlide - 1;
  else currentSlide--;

  goToSlide(currentSlide);
};

// Add event listeners
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

// Add keyboard events
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Set the timeout for each slide
setInterval(nextSlide, timeOut);

// setInterval(function () {
//   document.querySelector('.moment').textContent = moment().format(
//     'MMMM Do YYYY, h:mm:ss a'
//   );
// }, 1000);
