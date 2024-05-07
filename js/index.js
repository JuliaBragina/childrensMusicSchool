document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slideShow__container');
  const slides = document.querySelectorAll('.slideShow__slide');
  const nextButton = document.querySelector('.slideShow__next');
  const prevButton = document.querySelector('.slideShow__prev');

  let clickCounter = 0;
  let slideWidth = slides[0].offsetWidth;

  function updateButtons() {
    prevButton.classList.toggle('slideShow__button_isnactive', clickCounter === 0);
    nextButton.classList.toggle('slideShow__button_isnactive', clickCounter === slides.length - 1);
  }

  function slideTo(index) {
    clickCounter = index;
    updateButtons();
    slider.style.transform = 'translateX(' + -clickCounter * slideWidth + 'px)';
  }

  nextButton.addEventListener('click', function () {
    if (clickCounter < slides.length - 1) {
      clickCounter++;
      slideTo(clickCounter);
    }
  });

  prevButton.addEventListener('click', function () {
    if (clickCounter > 0) {
      clickCounter--;
      slideTo(clickCounter);
    }
  });

  window.addEventListener('resize', function () {
    slideWidth = slides[0].offsetWidth;
    slideTo(clickCounter);
  });

  updateButtons();
});

