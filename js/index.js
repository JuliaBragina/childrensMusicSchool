const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;

function showSlides() {
  const imageFolder = '../js/img/'; // Путь к папке с изображениями
  const images = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg']; // Список изображений

  for (let i = 0; i < 3; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const img = document.createElement('img');
    img.src = imageFolder + images[(currentIndex + i) % images.length];
    img.alt = 'Slide ' + ((currentIndex + i) % images.length + 1);

    slide.appendChild(img);
    slidesContainer.appendChild(slide);
  }

  currentIndex = (currentIndex + 1) % images.length;
}

function showSlide() {
  const slideWidth = document.querySelector('.slide').clientWidth;
  const newPosition = -currentIndex * slideWidth;
  slidesContainer.style.transform = `translateX(${newPosition}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showSlide();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  showSlide();
}

window.onload = () => {
  showSlides();
  showSlide();
};

