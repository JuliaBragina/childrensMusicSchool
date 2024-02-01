document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('resize', updateMainMargin);
  
  // Вызываем функцию сразу после загрузки страницы
  updateMainMargin();

  function updateMainMargin() {
    var headerSecondHeight = document.querySelector('.header-second__description')?.offsetHeight;
    var mainElement = document.querySelector('.content');
      
    if (mainElement) {
      mainElement.style.marginTop = headerSecondHeight + 'px';
    }
  }
});

