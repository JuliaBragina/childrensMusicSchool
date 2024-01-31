document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', updateMainMargin);
  
    function updateMainMargin() {
      var headerSecondHeight = document.querySelector('.header-second__description')?.offsetHeight;
      var mainElement = document.querySelector('.content');
      
      if (mainElement) {
        mainElement.style.marginTop = headerSecondHeight + 'px';
      }
    }
    window.addEventListener('resize', updateMainMargin);
  });
  
