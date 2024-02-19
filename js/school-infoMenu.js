document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.school-info__items');
  const button = document.querySelector('.school-info__button');
  const buttonImg = document.querySelector('.school-info__buttonImg');
  const links = document.querySelectorAll('.school-info__item');
  const activeItem = document.querySelector('.school-info__activeItem');
    
  button.addEventListener('click', function() { 
    items[1].classList.toggle('school-info__items_is_active');
    buttonImg.classList.toggle('school-info__buttonImg_is_active');
  });
  
  links.forEach(link => {
    link.addEventListener('click', function() {
      activeItem.textContent = this.textContent;
    });
  });
});