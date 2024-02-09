let menu = document.querySelector('#bars');
let navBar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('fa-circle-xmark');
  navBar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-circle-xmark');
  navBar.classList.remove('active');
}
document.querySelector('#searchicon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active')
}
document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active')
}
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 120,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disbaleOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});