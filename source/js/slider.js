const slides = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".toggle__item");
const slideIndex = 1;

function showSlides(slideIndex) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slider__item--current");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("toggle__item--active", "");
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    slides[slideIndex - 1].classList.add("slider__item--current");
    dots[slideIndex - 1].className += " toggle__item--active";
  }
}

dots.forEach((item) =>
  item.addEventListener('click', () => {
    showSlides(item.id);
  })
);

showSlides(slideIndex);
window.addEventListener('resize', () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider__item--current");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("toggle__item--active", "");
    }
    slides[slideIndex - 1].classList.add("slider__item--current");
    dots[slideIndex - 1].className += " toggle__item--active";
  }
  else{
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider__item--current");
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("toggle__item--active", "");
    }
  }
});
