// script.js

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

let autoScroll;
let userHasInteracted = false;

// Start auto-slide every 1 second
function startAutoScroll() {
  autoScroll = setInterval(() => {
    if (!userHasInteracted) {
      swiper.slideNext();
    }
  }, 1000);
}

// Stop auto-slide if user interacts
function stopAutoScroll() {
  if (!userHasInteracted) {
    userHasInteracted = true;
    clearInterval(autoScroll);
  }
}

// Start autoplay initially
startAutoScroll();

// Detect user interaction
swiper.on('touchStart', stopAutoScroll);
swiper.on('click', stopAutoScroll);
swiper.on('navigationNext', stopAutoScroll);
swiper.on('navigationPrev', stopAutoScroll);
