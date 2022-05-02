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
// const highlightMenu = () => {
//   const elem = document.querySelector('.highlight');
//   const aboutMenu = document.querySelector('#about-page');
//   const categoriesMenu = document.querySelector('#categories-page');
//   const contactMenu = document.querySelector('#contact-page');
//   const reviewsMenu = document.querySelector('#reviews-page');

//   let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
//   if (window.innerWidth > 960 && scrollPos < 600) {
    
//     homeMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     return;

//   }else if (window.innerWidth > 960 && scrollPos < 600) {

//     aboutMenu.classList.add('highlight');
//     categoriesMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPos < 1400) {
//     categoriesMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     contactMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPos < 2345) {
//     contactMenu.classList.add('highlight');
//     categoriesMenu.classList.remove('highlight');
//     aboutMenu.classList.remove('highlight');
//     return;
//   }
//     else if (window.innerWidth > 960 && scrollPos < 2345) {
//     reviewsMenu.classList.add('highlight');
//     contactMenu.classList.remove('highlight');
//     return;
// }

//   if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
//     elem.classList.remove('highlight');
//   }
// };

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


//Login

// Get the modal
var modal_login = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_login) {
    modal_login.style.display = "none";
  }
}

// Signup section---homepage

// Get the modal
var modal_signup = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_signup) {
    modal_signup.style.display = "none";
  }
}

//Shop now sectioon
// Get the modal
var modal_shopnow = document.getElementById('id0');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_shopnow) {
    modal_shopnow.style.display = "none";
  }
}

function image(evt, Name) {
  var i, teams, team1;
  teams = document.getElementsByClassName("teams");
  for (i = 0; i < teams.length; i++) {
  teams[i].style.display = "none";
 }
 team1 = document.getElementsByClassName("team1");
 for (i = 0; i < team1.length; i++) {
 team1[i].className = team1[i].className.replace(" active", "");
 }
 document.getElementById(Name).style.display = "block";
 evt.currentTarget.className += "active";
 }


