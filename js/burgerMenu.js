const burgerButton = document.querySelector('.menu__burgerMenu');
const burgerCloseButton = document.querySelector('.menu__closeMenu');
const burgerMenu = document.querySelector('.burgerMenu');
const buttonSubItem = document.querySelectorAll('.burgerMenu__text');
const page = document.querySelector('.root');

burgerButton.addEventListener('click', ()=> {
  burgerMenu.classList.add('burgerMenu_is_opened');
  page.classList.add('root_is_menuOpened');
  burgerCloseButton.classList.add('menu__closeMenu_is_openedMenu');
  burgerButton.classList.add('menu__burgerMenu_is_openedMenu');
});

burgerCloseButton.addEventListener('click', ()=> {
  burgerMenu.classList.remove('burgerMenu_is_opened');
  page.classList.remove('root_is_menuOpened');
  burgerCloseButton.classList.remove('menu__closeMenu_is_openedMenu');
  burgerButton.classList.remove('menu__burgerMenu_is_openedMenu');
});

buttonSubItem.forEach(item => {
  item.addEventListener('click', ()=> {
    item.parentNode.children[1].classList.toggle('burgerMenu__subItems_is_open');
  });
});