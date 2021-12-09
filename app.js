/*
   _____       _                   _____          _      
  / ____|     | |                 / ____|        | |     
 | |  __  __ _| | __ ___  ___   _| |     ___   __| | ___ 
 | | |_ |/ _` | |/ _` \ \/ / | | | |    / _ \ / _` |/ _ \
 | |__| | (_| | | (_| |>  <| |_| | |____ (_) | (_| |  __/
  \_____|\__,_|_|\__,_/_/\_\\__, |\_____\___/ \__,_|\___|
                             __/ |                       
                            |___/
-----------------------
| Name: GalaxyWebsite |
| Version: v1.0 prod. |  My GitHub Profile:
| Author: Marek_p     |  https://github.com/Marek-p77  
----------------------- 

*/
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Menu na mobilu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Ukázání aktivní karty v menu při skrolování
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const projectsMenu = document.querySelector('#projects-page');
  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    projectsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    projectsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Aby na mobilu bylo vše ok :)
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
