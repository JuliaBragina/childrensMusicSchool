document.addEventListener('DOMContentLoaded', function () {
  const windowSize = window.addEventListener('resize', updateMainMargin);
  
  updateMainMargin();

  function updateMainMargin() {
    const headerSecondHeight = document.querySelector('.header-second__description')?.offsetHeight;
    const mainElement = document.querySelector('.content');
      
    if (mainElement) {
      if (windowSize > 940) {
        mainElement.style.marginTop = headerSecondHeight + 70 + 'px';
      } else {
        mainElement.style.marginTop = headerSecondHeight + 30 + 'px';
      }
    }
  }
});

