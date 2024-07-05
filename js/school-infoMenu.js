document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.school-info__items');
  const button = document.querySelector('.school-info__button');
  const buttonImg = document.querySelector('.school-info__buttonImg');
  const links = document.querySelectorAll('.school-info__item');
  const activeItem = document.querySelector('.school-info__activeItem');
  const mainContent = document.querySelector('.mainInfo');
    
  button.addEventListener('click', function() { 
    items[1].classList.toggle('school-info__items_is_active');
    buttonImg.classList.toggle('school-info__buttonImg_is_active');
    mainContent.classList.toggle('mainInfo_is_menuOpened');
  });
  
  links.forEach(link => {
    link.addEventListener('click', function() {
      activeItem.textContent = this.textContent;
    });
  });
});