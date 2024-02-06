let menu = document.querySelector('#bars');
let navBar = document.querySelector('.navbar');
menu.onclick = () => {
menu.classList.toggle('fa-circle-xmark');
navBar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-circle-xmark');
    navBar.classList.remove('active');
}
 document.querySelector('#searchicon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active')
 }    
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active')
}
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});