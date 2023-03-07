const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const nav_menu_mobile = document.getElementById('nav_menu_mobile');
const hero_container = document.querySelector('.hero__container');

hamburger.addEventListener('click', () => {
  console.log('clicked');
  hamburger.classList.toggle('hidden');
  close.classList.toggle('hidden');
  nav_menu_mobile.classList.toggle('hidden');
  hero_container.classList.toggle('hero__mobile');
});

close.addEventListener('click', () => {
  console.log('clicked');
  hamburger.classList.toggle('hidden');
  close.classList.toggle('hidden');
  nav_menu_mobile.classList.toggle('hidden');
  hero_container.classList.toggle('hero__mobile');
});
