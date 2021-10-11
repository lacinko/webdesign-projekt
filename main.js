const navBtn = document.getElementById("nav__btn");
const nav = document.querySelector(".header__nav");

navBtn.addEventListener("click", openMenu);

function openMenu() {
  navBtn.classList.toggle("is-active");
  nav.classList.toggle("header__nav--active");
}
//SWIPER
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "slide",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
