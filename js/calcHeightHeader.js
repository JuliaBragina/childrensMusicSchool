document.addEventListener('DOMContentLoaded', function () {
  var windowSize = window.addEventListener('resize', updateMainMargin);
  
  updateMainMargin();

  function updateMainMargin() {
    var headerSecondHeight = document.querySelector('.header-second__description')?.offsetHeight;
    var mainElement = document.querySelector('.content');
      
    if (mainElement) {
      if (windowSize > 940) {
        mainElement.style.marginTop = headerSecondHeight + 70 + 'px';
      } else {
        mainElement.style.marginTop = headerSecondHeight + 30 + 'px';
      }
    }
  }
});

