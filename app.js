"use strict";
const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActiveSlideClass(slides);
    slide.classList.add("active");
  });
});

function clearActiveSlideClass(slides) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
