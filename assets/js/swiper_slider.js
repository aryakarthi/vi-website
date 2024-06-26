import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// # Swiper JS - Clients

let clientSwiper = new Swiper(".client-swiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  lazy: true,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

// # Swiper JS - Events Gallery

// let gallerySwiper = new Swiper(".gallery-swiper", {
//   effect: "coverflow",
//   lazy: true,
//   loop: true,
//   grabCursor: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//   },
// });



// # Swiper JS - Approaches

let approachSwiper = new Swiper(".approach-swiper", {
  speed: 600,
  parallax: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// # Swiper JS - Why Work With Us

let workWithUsSwiper = new Swiper(".work-with-us-swiper", {
  speed: 600,
  parallax: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// # Swiper JS - Employees Reviews

let empReviewsSwiper = new Swiper(".emp-reviews-swiper", {
  speed: 600,
  parallax: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document
  .querySelector(".emp-reviews-swiper")
.addEventListener("mouseenter", function () {
    empReviewsSwiper.autoplay.stop();
  });

document
  .querySelector(".emp-reviews-swiper")
  .addEventListener("mouseleave", function () {
    empReviewsSwiper.autoplay.start();
  });
