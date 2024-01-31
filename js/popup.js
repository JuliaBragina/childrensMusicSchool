const popupCloseButton = document.querySelector('.popup__buttonClose');
const popupImg = document.querySelector('.popup__image');
const achivesImg = document.querySelectorAll(".achivments__img");
const popup = document.querySelector('.popup');

achivesImg.forEach(item => {
  item.addEventListener('click', (event) => {
    popupImg.src = item.src;
    popupImg.alt = item.alt;
    popup.classList.add('popup_is_opened');
  })
})

popupCloseButton.addEventListener('click', () => popup.classList.remove('popup_is_opened'))