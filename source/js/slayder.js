const slides = document.querySelectorAll(".slayder__item");
const dots = document.querySelectorAll(".toggle-round__item");
const slideIndex = 2;

function showSlides(slideIndex) {
  let i;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("toggle-round__item--active", "");
  }
  if (window.matchMedia("(min-width: 768px)").matches) {
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " toggle-round__item--active";
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
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("toggle-round__item--active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " toggle-round__item--active";
  }
  else{
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
      for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("toggle-round__item--active", "");
    }
  }
});
