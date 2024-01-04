document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.slideShow__container');
  var slides = document.querySelectorAll('.slideShow__slide');
  var nextButton = document.querySelector('.slideShow__next');
  var prevButton = document.querySelector('.slideShow__prev');

  var clickCounter = 0;
  var slideWidth = slides[0].offsetWidth;

  function updateButtons() {
    prevButton.classList.toggle('is-inactive', clickCounter === 0);
    nextButton.classList.toggle('is-inactive', clickCounter === slides.length - 1);
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

