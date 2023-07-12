// DOM ELEMENTS:
const mobileMenuContainer = document.querySelector('.header-container__menu-container');
const mobileMenuButton = document.querySelector('.menu-icon');
const closeMenuButton = document.querySelector('.close-mobile-menu');

// EVENT LISTENERS:
mobileMenuButton.addEventListener('click',openMobileMenu);
closeMenuButton.addEventListener('click', closeMobileMenu);



function openMobileMenu() {
 mobileMenuContainer.classList.add('js-mobile-menu-shown');
 mobileMenuContainer.classList.remove('js-mobile-menu-hidden');
};

function closeMobileMenu() {
  mobileMenuContainer.classList.remove('js-mobile-menu-shown');
  mobileMenuContainer.classList.add('js-mobile-menu-hidden');
};

