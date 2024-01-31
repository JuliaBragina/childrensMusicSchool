const burgerButton = document.querySelector('.menu__burgerMenu');
const burgerCloseButton = document.querySelector('.burgerMenu__closeMenu');
const burgerMenu = document.querySelector('.burgerMenu');
const buttonSubItem = document.querySelectorAll('.burgerMenu__menuItem');
const page = document.querySelector('.root');

burgerButton.addEventListener('click', ()=> {
  burgerMenu.classList.add('burgerMenu_is_opened');
  page.classList.toggle('root_is_menuOpened');
});

//burgerCloseButton.addEventListener('click', ()=> burgerMenu.classList.remove('burgerMenu_is_opened'));

buttonSubItem.forEach(item => {
  item.addEventListener('click', ()=> {
    //item.children.forEach(child => (child === 'burgerMenu__subItems') && child.classList.classList.add('burgerMenu__subItems_is_open'));
    item.children[0].classList.toggle('burgerMenu__subItems_is_open');
  });
});