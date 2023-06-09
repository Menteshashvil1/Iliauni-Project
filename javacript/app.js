// slider
const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// slider right button
const goNext = () => {
  counter++;
  slideImage();
};

// slider left button
const goPrev = () => {
  counter--;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Add event listeners for the next and previous buttons
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");

if (nextButton) {
  nextButton.addEventListener("click", goNext);
}

if (prevButton) {
  prevButton.addEventListener("click", goPrev);
}
