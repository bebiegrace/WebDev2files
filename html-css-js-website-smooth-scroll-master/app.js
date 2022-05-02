const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const aboutMenu = document.querySelector('#about-page');
  const categoriesMenu = document.querySelector('#categories-page');
  const contactMenu = document.querySelector('#contact-page');
  const reviewsMenu = document.querySelector('#reviews-page');

  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    aboutMenu.classList.add('highlight');
    categoriesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    categoriesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    contactMenu.classList.add('highlight');
    categoriesMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    reviewsMenu.classList.remove('highlight');
    return;
  }
    else if (window.innerWidth > 960 && scrollPos < 2345) {
    reviewsMenu.classList.add('highlight');
    contactMenu.classList.remove('highlight');
    reviewsMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
}

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
