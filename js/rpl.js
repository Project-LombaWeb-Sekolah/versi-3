const slider = document.querySelector(".slider");
const NextBtn = document.querySelector(".button-next");
const PrevBtn = document.querySelector(".button-prev");
const slides = document.querySelectorAll(".slide");
const dotIcon = document.querySelectorAll(".icon-dot");
const NumberOfSlides = slides.length;
var slideNumber = 0;

//Next Button
NextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dotIcon.forEach((dot) => {
    dot.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > NumberOfSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  dotIcon[slideNumber].classList.add("active");
});

//prev Button
PrevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dotIcon.forEach((dot) => {
    dot.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = NumberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  dotIcon[slideNumber].classList.add("active");
});

//auto play
var playSlider;

var repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    dotIcon.forEach((dot) => {
      dot.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > NumberOfSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    dotIcon[slideNumber].classList.add("active");
  }, 4000);
};
repeater();

//stop autoplay
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//play autoplay
slider.addEventListener("mouseout", () => {
  repeater();
});
