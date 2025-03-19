

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');
  const backdrop = document.querySelector('.menu-backdrop');


  function toggleMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    backdrop.classList.toggle('active');
  }


  burger.addEventListener('click', toggleMenu);

 
  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      toggleMenu();
    }
  });
});
